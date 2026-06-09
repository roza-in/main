import { NextResponse } from "next/server";
import * as z from "zod";

const trialRequestSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  businessName: z.string().min(2, "Business name is required"),
  plan: z.enum(["starter", "growth", "professional", "enterprise"]),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    const parseResult = trialRequestSchema.safeParse(body);
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

    console.log(`[Trial Registration] Processing trial for ${data.businessName} (${data.email})`);

    let emailSent = false;
    let errorDetails = null;

    if (apiKey) {
      try {
        // 1. Send Internal Lead Alert Email
        const teamRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            from: "Rozx Onboarding <noreply@rozx.in>",
            to: [receiver],
            subject: `[Trial Lead] ${data.businessName} - Plan: ${data.plan}`,
            html: `
              <h2>New Free Trial Lead Created</h2>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              <p><strong>Business Name:</strong> ${data.businessName}</p>
              <p><strong>Requested Plan:</strong> ${data.plan}</p>
              <p><strong>Registered At (UTC):</strong> ${new Date().toISOString()}</p>
            `,
          }),
        });

        // 2. Send Welcome & Concierge Confirmation Email to Customer
        const customerRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            from: "Rozx Onboarding <noreply@rozx.in>",
            to: [data.email],
            subject: "Welcome to Rozx - Provisioning your Workspace",
            html: `
              <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; padding: 20px; border-radius: 8px;">
                <h2 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px;">Welcome to Rozx, ${data.name}!</h2>
                <p>Thank you for signing up for the 14-day free trial of the Rozx Service Business Operating System.</p>
                <p>Our concierge onboarding team is currently provisioning your secure, isolated database and application environment for <strong>${data.businessName}</strong>.</p>
                <p>Within 12 business hours, one of our product specialists will email you your custom workspace dashboard URL, along with your temporary credentials and a link to book a complimentary 1-on-1 setup session.</p>
                <p>If you have any questions in the meantime, feel free to reply directly to this email or message us at <a href="mailto:hello@rozx.in">hello@rozx.in</a>.</p>
                <br />
                <p>Best regards,</p>
                <p><strong>The Rozx Onboarding Team</strong></p>
              </div>
            `,
          }),
        });

        if (teamRes.ok || customerRes.ok) {
          emailSent = true;
        } else {
          const teamText = await teamRes.text();
          const customerText = await customerRes.text();
          errorDetails = { teamStatus: teamRes.status, teamText, customerStatus: customerRes.status, customerText };
          console.error("[Trial Registration] Resend error payload: ", errorDetails);
        }
      } catch (err: any) {
        errorDetails = err?.message || err;
        console.error("[Trial Registration] Resend API throw: ", err);
      }
    } else {
      console.warn("[Trial Registration] RESEND_API_KEY environment variable is not defined. Lead logged locally.");
    }

    return NextResponse.json({
      success: true,
      emailSent,
      ...(errorDetails && { warning: "Email delivery encountered an issue. Your registration was still recorded." }),
    });

  } catch (error: any) {
    console.error("[Trial Registration] Internal error in API route: ", error);
    return NextResponse.json(
      { success: false, error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
