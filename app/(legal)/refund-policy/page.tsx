import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";
import { LegalDocLayout, type LegalSection } from "@/components/shared/legal-doc-layout";

export const metadata: Metadata = generateMetadata({
  title: "Refund Policy",
  description: "Understand the terms governing Rozx SaaS subscriptions, cancellations, and billing inquiries.",
  path: "/refund-policy",
});

const sections: LegalSection[] = [
  { id: "saas-subscriptions", title: "1. Rozx SaaS Subscriptions" },
  { id: "cancellations-renewals", title: "2. Cancellation & Access" },
  { id: "billing-exceptions", title: "3. Billing Errors & Disputes" },
  { id: "merchant-client-policy", title: "4. Merchant End-Customer Refunds" },
  { id: "billing-contact", title: "5. Billing Support Contact" },
];

export default function RefundPolicyPage() {
  return (
    <LegalDocLayout
      title="Refund Policy"
      description="This policy outlines the terms applicable to Rozx SaaS subscription charges, payment renewals, technical billing error reviews, and the distinction regarding merchant customer transactions."
      sections={sections}
      activePolicy="refund-policy"
    >
      {/* 1. Rozx SaaS Subscriptions */}
      <section id="saas-subscriptions" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">1. Rozx SaaS Subscriptions</h2>
        <p>
          Rozx provides software-as-a-service (SaaS) subscriptions billed in advance on recurring monthly or annual billing cycles.
        </p>
        <p>
          Subscription payments made to Rozx are generally non-refundable once successfully processed. We do not issue automatic or prorated refunds for mid-cycle cancellations or partial subscription periods.
        </p>
      </section>

      {/* 2. Cancellation & Access */}
      <section id="cancellations-renewals" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">2. Cancellation & Account Access</h2>
        <p>
          You may cancel your Rozx subscription at any time through your workspace billing settings or by contacting our team.
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <strong className="text-foreground">Effective Timing:</strong> Cancelling your subscription prevents future automatic renewal charges at the end of your current cycle.
          </li>
          <li>
            <strong className="text-foreground">Continued Access:</strong> You retain access to your workspace and platform features through the end of your paid billing cycle.
          </li>
        </ul>
      </section>

      {/* 3. Billing Errors & Disputes */}
      <section id="billing-exceptions" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">3. Technical Billing Errors & Review</h2>
        <p>
          If you believe a payment was processed in error, you may submit a request for review. We evaluate requests on an individual basis in cases such as:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>Duplicate payment charges resulting from technical gateway glitches.</li>
          <li>Incorrect invoice billing due to system authorization errors.</li>
          <li>Verified unauthorized transaction charges submitted promptly to our team.</li>
        </ul>
        <p>
          Discretionary reviews do not constitute a guaranteed refund entitlement. If a refund is approved by our billing team, funds are credited back to the original payment method through our payment processor (such as Razorpay) within standard bank processing timelines (typically 5 to 10 business days).
        </p>
      </section>

      {/* 4. Merchant End-Customer Refunds */}
      <section id="merchant-client-policy" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">4. Merchant End-Customer Refunds</h2>
        <p>
          This Refund Policy applies strictly to subscription payments made by businesses to Rozx for use of our SaaS platform.
        </p>
        <div className="rounded-xl border border-border bg-surface-2 p-4 text-xs sm:text-sm space-y-2">
          <p className="font-bold text-foreground uppercase tracking-wider">Important Notice for Customers of Salons, Spas & Clinics:</p>
          <p>
            Rozx does not set or control the appointment refund, deposit, or cancellation policies of independent businesses operating on our platform. Each salon, spa, clinic, or service business remains solely responsible for establishing, communicating, and executing its own customer refund policies.
          </p>
        </div>
      </section>

      {/* 5. Billing Support Contact */}
      <section id="billing-contact" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">5. Billing Support Contact</h2>
        <p>
          For questions regarding an invoice, subscription renewal, or billing review, please email:
        </p>
        <p className="font-semibold text-foreground">
          Email:{" "}
          <a href={`mailto:${siteConfig.legal.contactEmail}`} className="text-primary hover:underline font-bold">
            {siteConfig.legal.contactEmail}
          </a>
        </p>
      </section>
    </LegalDocLayout>
  );
}
