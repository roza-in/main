import { NextResponse } from "next/server";
import * as z from "zod";
import { escapeHtml } from "@/lib/security/sanitize";
import { checkRateLimit, getClientIp } from "@/lib/security/rate-limit";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(100),
  company: z.string().max(100).optional().or(z.literal("")),
  subject: z.string().min(2, "Subject is required").max(150),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(3000, "Message is too long"),
});

export async function POST(request: Request) {
  // Rate limiting — max 5 requests per IP per minute
  const ip = getClientIp(request);
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  // Reject oversized payloads (max 15KB)
  const contentLength = request.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > 15_360) {
    return NextResponse.json(
      { success: false, error: "Request body too large" },
      { status: 413 }
    );
  }

  try {
    const body = await request.json();

    const parseResult = contactSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        { success: false, errors: parseResult.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = parseResult.data;
    const apiKey = process.env.RESEND_API_KEY;
    const receiver = process.env.CONTACT_LEAD_RECEIVER || "hello@rozx.in";

    console.log(`[Contact] New message from ${data.name} (${data.email}) — Subject: ${data.subject}`);

    let emailSent = false;
    let errorDetails = null;

    if (apiKey) {
      try {
        // 1. Internal alert to team
        const teamRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            from: "Rozx Contact <noreply@rozx.in>",
            to: [receiver],
            subject: `[Contact] ${data.subject} — from ${data.name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
              <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
              ${data.company ? `<p><strong>Company:</strong> ${escapeHtml(data.company)}</p>` : ""}
              <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
              <p><strong>Message:</strong></p>
              <div style="background-color:#f4f4f5;padding:15px;border-radius:6px;border-left:4px solid #2b8c69;white-space:pre-line;">${escapeHtml(data.message)}</div>
              <p><strong>Submitted At (UTC):</strong> ${new Date().toISOString()}</p>
            `,
          }),
        });

        // 2. Auto-reply to user
        const userRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            from: "Rozx Support <noreply@rozx.in>",
            to: [data.email],
            subject: "We received your message — Rozx",
            html: `
              <div style="font-family:Arial,sans-serif;line-height:1.6;color:#333;max-width:600px;margin:0 auto;border:1px solid #eaeaea;padding:20px;border-radius:8px;">
                <h2 style="color:#2b8c69;border-bottom:2px solid #2b8c69;padding-bottom:10px;">Hi ${escapeHtml(data.name)},</h2>
                <p>Thank you for reaching out to us. We have received your message regarding <strong>${escapeHtml(data.subject)}</strong>.</p>
                <p>Our team typically responds within <strong>12 business hours</strong>. If your inquiry is urgent, feel free to book a direct demo session at <a href="https://rozx.in/book-demo">rozx.in/book-demo</a>.</p>
                <br />
                <p>Best regards,</p>
                <p><strong>The Rozx Team</strong></p>
              </div>
            `,
          }),
        });

        if (teamRes.ok || userRes.ok) {
          emailSent = true;
        } else {
          const teamText = await teamRes.text();
          const userText = await userRes.text();
          errorDetails = { teamStatus: teamRes.status, teamText, userStatus: userRes.status, userText };
          console.error("[Contact] Resend error:", errorDetails);
        }
      } catch (err: unknown) {
        errorDetails = err instanceof Error ? err.message : String(err);
        console.error("[Contact] Resend API throw:", err);
      }
    } else {
      console.warn("[Contact] RESEND_API_KEY not set. Message logged locally.");
    }

    return NextResponse.json({
      success: true,
      emailSent,
      ...(errorDetails && { warning: "Message recorded but confirmation email failed." }),
    });
  } catch (error: unknown) {
    console.error("[Contact] Internal error:", error);
    return NextResponse.json(
      { success: false, error: "An internal server error occurred." },
      { status: 500 }
    );
  }

}
