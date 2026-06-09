import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Refund Policy",
  description: "Understand the terms of refund calculations for monthly and annual subscriptions.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-100)_0%,_transparent_60%)] opacity-55 dark:opacity-35" />

      <div className="container max-w-3xl text-left font-sans px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-border pb-8 mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground mb-4">
            Refund Policy
          </h1>
          <p className="text-xs text-muted-foreground">
            Last updated: June 8, 2026. We want to be completely transparent about how we handle billing, renewals, and refunds.
          </p>
        </div>

        {/* Full Refund Policy Text */}
        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">1. Risk-Free Trial Period</h2>
            <p className="mb-4">
              Our 14-day free trial is genuinely free. We do not collect credit card details to start, which means it is impossible for us to charge you accidentally when the trial ends. If you don&apos;t choose to upgrade, your workspace simply locks.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">2. Month-to-Month Subscriptions</h2>
            <p className="mb-4">
              Monthly plans are billed in advance on a recurring 30-day cycle.
            </p>
            <ul className="space-y-2 list-disc list-inside pl-4 mb-4">
              <li>Monthly subscriptions are non-refundable. We do not provide prorated refunds if you decide to cancel in the middle of a billing cycle.</li>
              <li>When you cancel, your account remains active until your prepaid month finishes. After that, your subscription stops, and you won&apos;t be billed again.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">3. Annual Subscriptions (30-Day Window)</h2>
            <p className="mb-4">
              Annual plans are billed upfront for a full 12-month period to give you a 20% discount. If you change your mind, we offer a 30-day grace window:
            </p>
            <ul className="space-y-2 list-disc list-inside pl-4 mb-4">
              <li>
                If you request cancellation within the first 30 days of starting or renewing an annual plan, we will refund the remainder. We calculate this by charging you the standard monthly rate (without the 20% discount) for the days the database was active, and returning the rest.
              </li>
              <li>
                After the first 30 days, annual subscriptions are non-refundable. Your database will stay active until the end of the 12-month period and will not renew.
              </li>
            </ul>

            {/* Practical Example */}
            <div className="bg-muted/30 border border-border rounded-lg p-5 my-6">
              <span className="text-xs font-bold text-foreground uppercase tracking-wider block mb-2">How it works:</span>
              <p className="text-xs text-muted-foreground">
                If you pay ₹24,000 upfront for an annual plan (equivalent to ₹2,000/month) but cancel on day 15, we will charge you the standard monthly rate of ₹2,500 for that active month, and refund the remaining ₹21,500 back to your card.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">4. Upgrades & Downgrades</h2>
            <ul className="space-y-3 list-disc list-inside pl-4 mb-4">
              <li>
                <strong className="text-foreground">Upgrades:</strong> If you upgrade your plan (e.g., adding another business branch to your dashboard), you will be charged a prorated amount for the remaining days of your current cycle, and the new plan will start immediately.
              </li>
              <li>
                <strong className="text-foreground">Downgrades:</strong> If you downgrade your plan, we will apply a prorated credit to your account. This credit will automatically reduce the cost of your next renewal invoice. We do not issue cash refunds for plan downgrades.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">5. Getting Your Refund</h2>
            <p className="mb-4">
              When we process a refund, the funds go back to the exact card or account you used to pay (via Stripe or Razorpay). 
            </p>
            <ul className="space-y-2 list-disc list-inside pl-4 mb-4">
              <li>We issue refunds from our billing desk within 3 business days.</li>
              <li>Depending on your bank, it usually takes between 5 to 10 business days for the credit to appear on your statement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">6. Suspended Accounts</h2>
            <p className="mb-4">
              We do not issue refunds if your account is suspended or terminated because you violated our terms (such as sending spam SMS marketing to clients or scraping system resources).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">7. Disputing Charges</h2>
            <p className="mb-4">
              If you see a charge you don&apos;t recognize or have a billing issue, please email us directly at <a href="mailto:support@rozx.in" className="text-primary hover:underline font-semibold">support@rozx.in</a> before initiating a dispute with your bank. 
            </p>
            <p className="mb-4">
              Filing a chargeback dispute without talking to us first is slow, and the payment network automatically flags the transaction. When this happens, our system is forced to temporarily suspend your dashboard and online calendars while the bank reviews the case. Emailing us first is always the fastest way to get things resolved.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
