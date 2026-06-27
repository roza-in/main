import { NextResponse } from "next/server";
import * as z from "zod";
import { escapeHtml } from "@/lib/security/sanitize";
import { checkRateLimit, getClientIp } from "@/lib/security/rate-limit";

const subscribeRequestSchema = z.object({
  email: z.string().email("Invalid email address").max(100, "Email is too long"),
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

  // Reject oversized payloads (max 10KB for a form submission)
  const contentLength = request.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > 10_240) {
    return NextResponse.json(
      { success: false, error: "Request body too large" },
      { status: 413 }
    );
  }

  try {
    const body = await request.json();
    
    // Validate request body
    const parseResult = subscribeRequestSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          errors: parseResult.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }

    const { email } = parseResult.data;

    // Retrieve environment variables
    const apiKey = process.env.RESEND_API_KEY;
    const receiver = process.env.CONTACT_LEAD_RECEIVER || "hello@rozx.in";

    console.log(`[Newsletter Subscription] New subscriber: ${email}`);

    let emailSent = false;
    let errorDetails = null;

    if (apiKey) {
      try {
        // 1. Send Internal Notification Email
        const teamRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            from: "Rozx Alerts <noreply@rozx.in>",
            to: [receiver],
            subject: `[Newsletter] New Subscriber: ${email}`,
            html: `
              <h2>New Newsletter Subscriber</h2>
              <p><strong>Email:</strong> ${escapeHtml(email)}</p>
              <p><strong>Subscribed At (UTC):</strong> ${new Date().toISOString()}</p>
            `,
          }),
        });

        // 2. Send Welcome Confirmation to Subscriber
        const subscriberRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            from: "Rozx Newsletter <hello@rozx.in>",
            to: [email],
            subject: "You're Subscribed! - Rozx Newsletter",
            html: `
              <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; padding: 20px; border-radius: 8px;">
                <h2 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px;">Thank you for subscribing!</h2>
                <p>Hi there,</p>
                <p>We've successfully added <strong>${escapeHtml(email)}</strong> to the Rozx newsletter list.</p>
                <p>You will receive our weekly digests containing:</p>
                <ul>
                  <li>Service industry operations blueprints</li>
                  <li>GST and financial compliance guides for India</li>
                  <li>Staff performance incentives templates</li>
                  <li>Exclusive early access to new Rozx feature releases</li>
                </ul>
                <p>If you did not sign up for this, please ignore this email or write to us at <a href="mailto:hello@rozx.in">hello@rozx.in</a> to unsubscribe.</p>
                <br />
                <p>Best regards,</p>
                <p><strong>The Rozx Team</strong></p>
              </div>
            `,
          }),
        });

        if (teamRes.ok || subscriberRes.ok) {
          emailSent = true;
        } else {
          const teamText = await teamRes.text();
          const subscriberText = await subscriberRes.text();
          errorDetails = { teamStatus: teamRes.status, teamText, subscriberStatus: subscriberRes.status, subscriberText };
          console.error("[Newsletter Subscription] Resend error payload: ", errorDetails);
        }
      } catch (err: any) {
        errorDetails = err?.message || err;
        console.error("[Newsletter Subscription] Resend API throw: ", err);
      }
    } else {
      console.warn("[Newsletter Subscription] RESEND_API_KEY environment variable is not defined. Lead logged locally.");
    }

    return NextResponse.json({
      success: true,
      emailSent,
      ...(errorDetails && { warning: "Email delivery encountered an issue. Your subscription was still recorded." }),
    });

  } catch (error: any) {
    console.error("[Newsletter Subscription] Internal error in API route: ", error);
    return NextResponse.json(
      { success: false, error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}

