import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Terms of Service",
  description: "Read the Rozx subscription terms of service, platform usage, and SLA guidelines.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-100)_0%,_transparent_60%)] opacity-55 dark:opacity-35" />

      <div className="container max-w-3xl text-left font-sans px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-border pb-8 mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-xs text-muted-foreground">
            Last updated: June 8, 2026. These terms govern your subscription and use of Rozx. We keep these terms simple, clear, and fair.
          </p>
        </div>

        {/* Full Terms Text */}
        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">1. Hello & Welcome</h2>
            <p className="mb-4">
              Rozx (referred to as &quot;Rozx&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is booking and billing software for salons, spas, and clinics. By signing up for a trial account or subscribing to our plans, you are entering into a binding agreement with us. 
            </p>
            <p className="mb-4">
              Since our software is designed to manage scheduling, checkout terminals, and staff operations, you must be a registered business, sole proprietor, or authorized representative to set up an account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">2. Account Security & Team Management</h2>
            <p className="mb-4">
              To use Rozx, you will set up a primary admin account. Here are your responsibilities:
            </p>
            <ul className="space-y-2 list-disc list-inside pl-4 mb-4">
              <li>Keep your password secure. If you share access, you are responsible for whatever happens inside your dashboard.</li>
              <li>You can invite team members and set their permissions (e.g., hiding financial invoices from stylists or therapists). You are responsible for managing these permission levels.</li>
              <li>You must comply with local privacy regulations when uploading details about your clients.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">3. Flat Subscriptions & 0% Commissions</h2>
            <p className="mb-4">
              We want your business to grow, and we believe taking a cut of your hard work is wrong:
            </p>
            <ul className="space-y-3 list-disc list-inside pl-4 mb-4">
              <li>
                <strong className="text-foreground">Strictly Flat-Rate:</strong> We charge a simple monthly or annual subscription fee. We take <strong>0% commissions</strong> on appointments booked or checkouts processed through your portal.
              </li>
              <li>
                <strong className="text-foreground">14-Day Trial:</strong> Our trial is truly free. We don&apos;t ask for credit card details to start. If you don&apos;t select a paid plan within 14 days, your dashboard will lock automatically, and we will delete the data after 30 days.
              </li>
              <li>
                <strong className="text-foreground">Discounted Annual Cycles:</strong> If you choose annual billing, we give you a <strong>20% discount</strong> compared to paying month-to-month.
              </li>
              <li>
                <strong className="text-foreground">Taxes:</strong> All stated prices exclude local taxes (like GST in India or local sales tax). These will be calculated and added during checkout based on your business location.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">4. Rules of the Road</h2>
            <p className="mb-4">
              We expect you to use Rozx responsibly. You agree that you will not:
            </p>
            <ul className="space-y-2 list-disc list-inside pl-4 mb-4">
              <li>Send spam SMS reminders or marketing emails to clients who haven&apos;t opted in.</li>
              <li>Attempt to scrape, reverse engineer, copy our UI styling, or overload our database servers.</li>
              <li>Upload malicious code or use the platform for any illegal activities.</li>
            </ul>
            <p className="mt-4 font-semibold text-foreground">
              If we detect that an account is sending spam or trying to compromise our servers, we will suspend access immediately to protect our other users.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">5. Intellectual Property & Ownership</h2>
            <p className="mb-4">
              What&apos;s yours is yours, and what&apos;s ours is ours:
            </p>
            <ul className="space-y-2 list-disc list-inside pl-4 mb-4">
              <li>
                <strong className="text-foreground">Your Data:</strong> You retain full ownership of all data you input into Rozx (including client profiles, booking histories, sales reports, and uploaded photos).
              </li>
              <li>
                <strong className="text-foreground">Our Software:</strong> We retain all intellectual property rights to the Rozx codebase, designs, icons, logos, and UI animations.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">6. Uptime, Maintenance & Support</h2>
            <p className="mb-4">
              We know your business relies on our software:
            </p>
            <ul className="space-y-2 list-disc list-inside pl-4 mb-4">
              <li>We target an average <strong>99.9% uptime</strong> for all checkout and scheduling components.</li>
              <li>We run system maintenance during off-peak hours (between 22:00 and 02:00 GMT) and will notify you via email at least 48 hours in advance if we expect any downtime.</li>
              <li>If you run into issues, you can email us at <a href="mailto:support@rozx.in" className="text-primary hover:underline font-semibold">support@rozx.in</a>. We respond to standard tickets within 4 hours on weekdays (09:00 - 18:00 IST).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">7. Limitation of Liability</h2>
            <p className="mb-4">
              We build high-quality software, but we cannot guarantee that it will be entirely free of bugs or interruptions. Rozx is provided &quot;as is&quot;.
            </p>
            <p className="mb-4">
              If something goes wrong, our maximum liability is capped at the total amount you paid us in subscription fees over the previous twelve (12) months. We are not liable for any lost profits, customer disputes, or indirect damages.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">8. Cancellation & Billing Failures</h2>
            <ul className="space-y-2 list-disc list-inside pl-4 mb-4">
              <li>
                <strong className="text-foreground">Cancel Anytime:</strong> You can cancel your subscription inside your billing dashboard at any time. You won&apos;t be charged again, and you can keep using the platform until your prepaid billing period ends.
              </li>
              <li>
                <strong className="text-foreground">Failed Payments:</strong> If a subscription charge fails, we will attempt to retry it. We provide a <strong>7-day grace period</strong> to update your payment details before bookings or styling terminals lock.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">9. Disputes & Governing Law</h2>
            <p className="mb-4">
              This agreement is governed by the laws of India. Any disputes will be settled through binding arbitration in Bangalore, India.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">10. Updates to These Terms</h2>
            <p className="mb-4">
              If we make major changes to these terms (like pricing updates or SLA commitments), we will email you at least 30 days before the changes take effect.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
