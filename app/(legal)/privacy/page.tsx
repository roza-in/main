import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Privacy Policy",
  description: "How we collect, secure, and handle your business data and client information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-100)_0%,_transparent_60%)] opacity-55 dark:opacity-35" />

      <div className="container max-w-3xl text-left font-sans px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-border pb-8 mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs text-muted-foreground">
            Last updated: June 8, 2026. We believe legal policies should be readable. Here is a clear, human breakdown of how we handle data.
          </p>
        </div>

        {/* Full Legal Text */}
        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">1. The Golden Rule: You own your data</h2>
            <p className="mb-4">
              Your business listings, staff rosters, services, appointment history, and client records belong entirely to you. We do not sell, rent, share, or monetize your database in any way. Our job is simply to provide the software that helps you run your business.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">2. Who is who in this agreement</h2>
            <p className="mb-4">
              When you use Rozx, we handle data in two different ways:
            </p>
            <ul className="space-y-2 list-disc list-inside pl-4 mb-4">
              <li>
                <strong className="text-foreground">Your account data:</strong> We act as the <strong>Data Controller</strong> for the information you give us to run your account (like your login email, business name, and billing details).
              </li>
              <li>
                <strong className="text-foreground">Your clients&apos; data:</strong> You act as the <strong>Data Controller</strong> for all data you upload about your clients, staff, and bookings. We act strictly as a <strong>Data Processor</strong>. We host this data and process it only to make your schedules, checkouts, and CRM work.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">3. What we collect and why</h2>
            <p className="mb-4">
              We collect only what is necessary to run the platform and keep your account secure:
            </p>
            <ul className="space-y-3 list-disc list-inside pl-4 mb-4">
              <li>
                <strong className="text-foreground">Account Information:</strong> Your name, email, phone number, and business details. We use this to set up your workspace, contact you about updates, and verify your identity.
              </li>
              <li>
                <strong className="text-foreground">Billing Details:</strong> Payment card details are sent directly to our payment processors (Stripe or Razorpay). We do not store raw card numbers on our servers.
              </li>
              <li>
                <strong className="text-foreground">Client Booking Records:</strong> When your clients book an appointment, we save their name, phone, email, and booking time. We only use this to update your calendars, send them confirmations, and keep your business records organized.
              </li>
              <li>
                <strong className="text-foreground">Usage Data &amp; Logs:</strong> We track anonymous interface actions (like which buttons are clicked) to debug errors and improve layout navigation.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">4. Vetted third parties we share data with</h2>
            <p className="mb-4">
              We use a few trusted infrastructure providers to power Rozx. Here is the list of who they are and what they do:
            </p>
            <div className="overflow-x-auto my-6 border border-border rounded-lg">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-muted border-b border-border">
                    <th className="p-3 font-semibold text-foreground">Service</th>
                    <th className="p-3 font-semibold text-foreground">What they handle</th>
                    <th className="p-3 font-semibold text-foreground">Compliance & Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-foreground">Supabase / AWS</td>
                    <td className="p-3">Database hosting, storage, and encrypted backups.</td>
                    <td className="p-3">Mumbai (India) / US East, SOC 2</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-foreground">Stripe / Razorpay</td>
                    <td className="p-3">Processing your subscription billing securely.</td>
                    <td className="p-3">Global / India, PCI-DSS Level 1</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-foreground">Twilio</td>
                    <td className="p-3">Sending SMS notifications and reminders to your clients.</td>
                    <td className="p-3">Global network, HIPAA-compliant pipeline</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-foreground">PostHog & Clarity</td>
                    <td className="p-3">Anonymized usage analytics to trace UI bottlenecks and load speeds.</td>
                    <td className="p-3">EU/US hosted, IP masking enabled</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">5. How we keep your databases secure</h2>
            <p className="mb-4">
              We design our infrastructure around data isolation:
            </p>
            <ul className="space-y-2 list-disc list-inside pl-4 mb-4">
              <li><strong className="text-foreground">Schema Isolation:</strong> Every business account runs inside separate database environments. This prevents cross-tenant data leaks.</li>
              <li><strong className="text-foreground">Encryption:</strong> All database data is encrypted at rest using AES-256 standards, and all web connection traffic is encrypted in transit via SSL/TLS 1.3.</li>
              <li><strong className="text-foreground">Regular Backups:</strong> Automated database snapshots are taken every 24 hours, encrypted, and saved across multiple servers to prevent data loss.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">6. What happens when you leave us</h2>
            <p className="mb-4">
              You are free to leave at any time. If you decide to cancel your subscription:
            </p>
            <ul className="space-y-2 list-disc list-inside pl-4 mb-4">
              <li>You can download a complete CSV or SQL export of all your client profiles, services, and appointment histories directly from your dashboard settings.</li>
              <li>We retain your database for exactly 14 days after cancellation so you can retrieve your records. After that, your workspace is permanently deleted from our live servers.</li>
              <li>If you sign up for a free trial and do not upgrade, we delete your database 30 days after the trial expires.</li>
              <li>System backup copies of your data are completely overwritten and purged within 90 days.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">7. Compliance & Rights</h2>
            <p className="mb-4">
              We respect user rights globally, matching requirements from Europe&apos;s GDPR, California&apos;s CCPA, and India&apos;s Digital Personal Data Protection Act (DPDPA 2023). You and your clients can request to view, edit, or delete any personal details we hold.
            </p>
            <p className="mb-4">
              If you have any questions or want to request data deletion, email us at <a href="mailto:legal@rozx.in" className="text-primary hover:underline font-semibold">legal@rozx.in</a>. If you are a client of a business using Rozx, please contact that business directly, as we cannot access or delete your records without their authorization.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
