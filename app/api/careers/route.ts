import { NextResponse } from "next/server";
import * as z from "zod";
import { escapeHtml } from "@/lib/security/sanitize";

const careerApplicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().email("Invalid email address").max(100, "Email is too long"),
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number is too long")
    .regex(/^[+]?[\d\s\-()]+$/, "Please enter a valid phone number"),
  role: z.string().min(2, "Role is required").max(100, "Role name is too long"),
  resumeUrl: z.string().url("Please enter a valid URL for your resume").max(500, "URL is too long"),
  portfolioUrl: z.string().max(500, "URL is too long").optional().or(z.literal("")),
  coverLetter: z.string().min(10, "Tell us a bit more about yourself (at least 10 characters)").max(2000, "Message is too long"),
});

export async function POST(request: Request) {
  // Reject oversized payloads (max 15KB for a job application form)
  const contentLength = request.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > 15_360) {
    return NextResponse.json(
      { success: false, error: "Request body too large" },
      { status: 413 }
    );
  }

  try {
    const body = await request.json();
    
    // Validate request body
    const parseResult = careerApplicationSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          errors: parseResult.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }

    const data = parseResult.data;

    // Retrieve environment variables
    const apiKey = process.env.RESEND_API_KEY;
    const receiver = process.env.CONTACT_LEAD_RECEIVER || "hello@rozx.in";

    console.log(`[Careers Application] Processing application for ${data.name} - ${data.role}`);

    let emailSent = false;
    let errorDetails = null;

    if (apiKey) {
      try {
        // 1. Send Internal Notification Email to Rozx Recruitment Team
        const teamRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            from: "Rozx Careers <noreply@rozx.in>",
            to: [receiver],
            subject: `[Job Application] ${data.name} - ${data.role}`,
            html: `
              <h2>New Job Application Received</h2>
              <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
              <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
              <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
              <p><strong>Applying For:</strong> ${escapeHtml(data.role)}</p>
              <p><strong>Resume Link:</strong> <a href="${escapeHtml(data.resumeUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(data.resumeUrl)}</a></p>
              ${data.portfolioUrl ? `<p><strong>Portfolio/LinkedIn Link:</strong> <a href="${escapeHtml(data.portfolioUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(data.portfolioUrl)}</a></p>` : ""}
              <p><strong>Cover Letter / Note:</strong></p>
              <div style="background-color: #f4f4f5; padding: 15px; border-radius: 6px; border-left: 4px solid #39a982; white-space: pre-line;">${escapeHtml(data.coverLetter)}</div>
              <p><strong>Submitted At (UTC):</strong> ${new Date().toISOString()}</p>
            `,
          }),
        });

        // 2. Send Auto-Confirmation Email to Candidate
        const candidateRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            from: "Rozx Careers <noreply@rozx.in>",
            to: [data.email],
            subject: `Application Received: ${data.role} at Rozx`,
            html: `
              <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; padding: 20px; border-radius: 8px;">
                <h2 style="color: #2b8c69; border-bottom: 2px solid #2b8c69; padding-bottom: 10px;">Hi ${escapeHtml(data.name)},</h2>
                <p>Thank you for applying for the <strong>${escapeHtml(data.role)}</strong> position at Rozx.</p>
                <p>We have received your application, including your resume and information. Our team is excited to review what you have built and your experience.</p>
                <p><strong>What happens next?</strong></p>
                <p>Our engineering and product teams review applications on a rolling basis. If your profile aligns with our needs, we will reach out to you within 3-5 business days to schedule an initial conversation.</p>
                <p>In the meantime, feel free to explore our product at <a href="https://rozx.in">rozx.in</a>.</p>
                <br />
                <p>Best regards,</p>
                <p><strong>The Rozx Team</strong></p>
              </div>
            `,
          }),
        });

        if (teamRes.ok || candidateRes.ok) {
          emailSent = true;
        } else {
          const teamText = await teamRes.text();
          const candidateText = await candidateRes.text();
          errorDetails = { teamStatus: teamRes.status, teamText, candidateStatus: candidateRes.status, candidateText };
          console.error("[Careers Application] Resend error payload: ", errorDetails);
        }
      } catch (err: any) {
        errorDetails = err?.message || err;
        console.error("[Careers Application] Resend API throw: ", err);
      }
    } else {
      console.warn("[Careers Application] RESEND_API_KEY environment variable is not defined. Application logged locally.");
    }

    return NextResponse.json({
      success: true,
      emailSent,
      ...(errorDetails && { warning: "Application recorded, but confirmation email failed to dispatch." }),
    });

  } catch (error: any) {
    console.error("[Careers Application] Internal error in API route: ", error);
    return NextResponse.json(
      { success: false, error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
