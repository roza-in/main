import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";
import { LegalDocLayout, type LegalSection } from "@/components/shared/legal-doc-layout";

export const metadata: Metadata = generateMetadata({
  title: "Terms of Service",
  description: "Read the Rozx SaaS platform terms of service, acceptable use, and subscription rules.",
  path: "/terms",
});

const sections: LegalSection[] = [
  { id: "acceptance-and-scope", title: "1. Acceptance & Service Scope" },
  { id: "account-registration", title: "2. Accounts & Staff Roles" },
  { id: "subscriptions-and-billing", title: "3. Subscriptions & Billing" },
  { id: "acceptable-use", title: "4. Acceptable Use & Anti-Spam" },
  { id: "website-builder", title: "5. Website Builder & Content" },
  { id: "intellectual-property", title: "6. Intellectual Property" },
  { id: "disclaimers-and-liability", title: "7. Availability & Limitations" },
  { id: "governing-law", title: "8. Governing Law & Contact" },
];

export default function TermsPage() {
  return (
    <LegalDocLayout
      title="Terms of Service"
      description="These Terms of Service govern your access to and use of the Rozx software-as-a-service platform. By creating an account or subscribing to Rozx, you agree to these terms."
      sections={sections}
      activePolicy="terms"
    >
      {/* 1. Acceptance & Service Scope */}
      <section id="acceptance-and-scope" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">1. Acceptance & Service Scope</h2>
        <p>
          Rozx operates a multi-tenant software-as-a-service (SaaS) platform designed for salons, spas, clinics, barbershops, and service businesses to manage appointments, billing, staff schedules, customer CRM, and online booking experiences.
        </p>
        <p>
          By registering an account, accessing the dashboard, or subscribing to any Rozx plan, you represent that you are at least 18 years old, acting on behalf of a valid business entity or commercial operation, and authorized to enter into this binding agreement.
        </p>
      </section>

      {/* 2. Accounts & Staff Roles */}
      <section id="account-registration" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">2. Account Registration & Staff Access</h2>
        <p>
          To use Rozx, you must create a workspace account providing accurate business details. You are responsible for:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>Maintaining the security and confidentiality of your account credentials.</li>
          <li>Managing access privileges assigned to invited staff members (such as Owner, Manager, Reception, or Professional roles).</li>
          <li>All activities and data processing occurring under your workspace credentials.</li>
        </ul>
        <p>
          Rozx reserves the right to suspend or terminate accounts that contain fraudulent registration details or violate platform security policies.
        </p>
      </section>

      {/* 3. Subscriptions & Billing */}
      <section id="subscriptions-and-billing" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">3. Subscriptions & Billing Terms</h2>
        <p>
          Subscription fees, plan tiers, limits, and billing intervals (monthly or annual) are specified on the applicable pricing or checkout page at the time of purchase.
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <strong className="text-foreground">Recurring Charges:</strong> Paid subscriptions automatically renew at the end of each billing cycle unless cancelled prior to the renewal date.
          </li>
          <li>
            <strong className="text-foreground">Taxes:</strong> All listed prices exclude applicable taxes (such as Goods and Services Tax / GST in India). Applicable taxes are calculated and itemized during checkout based on your billing location.
          </li>
          <li>
            <strong className="text-foreground">Commercial Structure:</strong> Rozx operates on a subscription fee model and does not charge booking commissions on appointments processed through your workspace portal under current plan configurations. Rozx reserves the right to adjust commercial pricing or plan tiers for future billing cycles upon reasonable advance notice.
          </li>
        </ul>
      </section>

      {/* 4. Acceptable Use & Anti-Spam */}
      <section id="acceptable-use" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">4. Acceptable Use & Communication Rules</h2>
        <p>You agree to use Rozx strictly for lawful commercial purposes. You shall not:</p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>Send unsolicited, spam, or unlawful WhatsApp or SMS messages to individuals who have not consented to receive communications from your business.</li>
          <li>Attempt to reverse engineer, decompile, probe, or compromise platform security infrastructure or API endpoints.</li>
          <li>Interfere with tenant isolation or attempt to access data belonging to other Rozx workspaces.</li>
          <li>Upload malicious software, virus code, or fraudulent business listings.</li>
        </ul>
        <p>
          Violation of acceptable use policies may result in immediate workspace suspension without prior notice.
        </p>
      </section>

      {/* 5. Website Builder & Content */}
      <section id="website-builder" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">5. Custom Website Builder & Published Content</h2>
        <p>
          Rozx provides website builder capabilities allowing businesses to publish online booking pages and custom domain websites.
        </p>
        <p>
          Merchants remain solely responsible for all content published through their website builder, including logos, images, text, service pricing, custom policies, and address information. You warrant that you hold all necessary intellectual property rights and permissions for content uploaded to your site.
        </p>
      </section>

      {/* 6. Intellectual Property */}
      <section id="intellectual-property" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">6. Intellectual Property</h2>
        <p>
          Rozx retains all rights, title, and interest in the platform software, source code, user interfaces, branding, icons, and service designs.
        </p>
        <p>
          Merchants retain full ownership of their proprietary business data, customer CRM records, service lists, and uploaded brand assets.
        </p>
      </section>

      {/* 7. Availability & Limitations */}
      <section id="disclaimers-and-liability" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">7. Service Availability & Limitations</h2>
        <p>
          Rozx is provided on an &quot;as-is&quot; and &quot;as-available&quot; basis. While we strive to maintain high system reliability and perform routine maintenance during low-traffic windows, Rozx does not guarantee uninterrupted, error-free 100% service uptime or specific financial outcomes for your business.
        </p>
        <p>
          To the maximum extent permitted under applicable law, Rozx shall not be liable for indirect, incidental, or consequential damages resulting from lost business revenue, scheduled downtime, or third-party service outages (including gateway or telecom network disruptions).
        </p>
      </section>

      {/* 8. Governing Law & Contact */}
      <section id="governing-law" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">8. Governing Law & Dispute Jurisdiction</h2>
        <p>
          These Terms of Service shall be governed by and construed in accordance with the laws of India.
        </p>
        <p>
          Any disputes, legal actions, or proceedings arising out of or in connection with these Terms or your use of Rozx shall be subject to the exclusive jurisdiction of the courts located in New Delhi, India.
        </p>
        <p className="pt-2">
          For any questions regarding these Terms of Service, please reach out to:
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
