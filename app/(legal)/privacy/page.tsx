import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";
import { LegalDocLayout, type LegalSection } from "@/components/shared/legal-doc-layout";

export const metadata: Metadata = generateMetadata({
  title: "Privacy Policy",
  description: "Understand how Rozx handles account data, merchant CRM records, and client booking privacy.",
  path: "/privacy",
});

const sections: LegalSection[] = [
  { id: "scope-and-roles", title: "1. Scope & Relationship" },
  { id: "information-collected", title: "2. Information We Collect" },
  { id: "how-we-use", title: "3. How Information Is Used" },
  { id: "subprocessors", title: "4. Verified Service Providers" },
  { id: "data-security", title: "5. Security & Isolation" },
  { id: "data-retention", title: "6. Retention & Deletion" },
  { id: "user-rights", title: "7. Privacy Rights & Compliance" },
  { id: "legal-contact", title: "8. Contact & Inquiries" },
];

export default function PrivacyPage() {
  return (
    <LegalDocLayout
      title="Privacy Policy"
      description="This Privacy Policy explains how Rozx collects, uses, and safeguards information when you register for an account, subscribe to our service, or interact with our platform."
      sections={sections}
      activePolicy="privacy"
    >
      {/* 1. Scope & Relationship */}
      <section id="scope-and-roles" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">1. Scope & Relationship</h2>
        <p>
          Rozx provides booking, appointment scheduling, billing, and customer relationship management (CRM) software for service businesses, including salons, spas, clinics, barbershops, and studios.
        </p>
        <p>
          To ensure clarity, we distinguish between the different ways information is processed on our platform:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <strong className="text-foreground">Merchant Account Users:</strong> Business owners, managers, receptionist staff, and service professionals who register and use Rozx accounts. Rozx acts as the data controller for account management, billing, and communication purposes regarding these users.
          </li>
          <li>
            <strong className="text-foreground">End Customers & Clients of Merchants:</strong> Individuals who book appointments or receive services from businesses using Rozx. Merchants control their client database and determine what information is requested. Rozx processes this customer information strictly on behalf of and under the instruction of the merchant to deliver calendar scheduling, notifications, and POS checkout services.
          </li>
        </ul>
      </section>

      {/* 2. Information We Collect */}
      <section id="information-collected" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">2. Information We Collect</h2>
        <p>We collect information necessary to operate the platform, maintain security, and process billing:</p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <strong className="text-foreground">Account & Workspace Information:</strong> Name, phone number, email address, business name, GSTIN (where applicable), branch addresses, and staff account details provided during signup or workspace configuration.
          </li>
          <li>
            <strong className="text-foreground">Billing & Subscription Details:</strong> Payment transaction identifiers, subscription status, and invoice history. Payment processing is handled directly by verified payment gateways (such as Razorpay). Raw credit card numbers or UPI PINs are never received or stored on Rozx servers.
          </li>
          <li>
            <strong className="text-foreground">Merchant Operating & CRM Data:</strong> Service catalogs, pricing, staff schedules, appointment bookings, walk-in records, customer contact information, visit history, notes, and digital intake forms or waivers entered by merchants into their workspace.
          </li>
          <li>
            <strong className="text-foreground">Technical & Usage Log Data:</strong> Standard server logs, IP addresses, browser specifications, operating system details, error traces, and anonymous interface navigation logs collected for security audit, troubleshooting, and system performance monitoring.
          </li>
        </ul>
      </section>

      {/* 3. How Information Is Used */}
      <section id="how-we-use" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">3. How Information Is Used</h2>
        <p>Information processed by Rozx is used strictly for legitimate business and operational purposes:</p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>To provision, maintain, and deliver the Rozx SaaS platform services.</li>
          <li>To manage calendar bookings, prevent appointment conflicts, and process checkout transactions.</li>
          <li>To deliver automated booking confirmations, WhatsApp/SMS appointment alerts, and invoice notifications requested by merchants.</li>
          <li>To process subscription renewals, manage billing accounts, and issue tax invoices.</li>
          <li>To investigate technical errors, prevent unauthorized access, and protect system infrastructure.</li>
          <li>To fulfill legal obligations under applicable Indian laws and regulatory frameworks.</li>
        </ul>
      </section>

      {/* 4. Verified Service Providers */}
      <section id="subprocessors" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">4. Verified Third-Party Service Providers</h2>
        <p>
          Rozx engages third-party infrastructure and service providers to support specific platform operations. Data shared with these providers is limited to what is strictly required for function delivery:
        </p>
        <div className="overflow-x-auto my-4 rounded-xl border border-border">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-surface-2 border-b border-border text-foreground">
                <th className="p-3 font-bold">Provider / Technology</th>
                <th className="p-3 font-bold">Purpose</th>
                <th className="p-3 font-bold">Data Type Handled</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3 font-semibold text-foreground">Razorpay</td>
                <td className="p-3">Payment processing & subscription gateway</td>
                <td className="p-3">Transaction IDs, billing contact info</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">Meta / WhatsApp Cloud API</td>
                <td className="p-3">WhatsApp booking reminders & notifications</td>
                <td className="p-3">Phone numbers, appointment notification text</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">SMS Gateway Providers</td>
                <td className="p-3">Transactional SMS notifications</td>
                <td className="p-3">Recipient phone numbers, SMS message text</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">PostHog</td>
                <td className="p-3">Product usage analytics & performance tracking</td>
                <td className="p-3">Anonymized page views, feature interaction metrics</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">Sentry</td>
                <td className="p-3">Application error logging & crash reporting</td>
                <td className="p-3">Technical stack traces, browser/OS error logs</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">Sanity CMS</td>
                <td className="p-3">Marketing website content delivery</td>
                <td className="p-3">Public blog & case study content</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Security & Isolation */}
      <section id="data-security" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">5. Security & Tenant Data Isolation</h2>
        <p>
          Rozx implements technical and organizational safeguards designed to protect workspace information from unauthorized access, loss, or misuse:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <strong className="text-foreground">Tenant Isolation:</strong> Database queries enforce strict tenant boundary filtering (`tenantId` scoping) to prevent cross-business data leaks.
          </li>
          <li>
            <strong className="text-foreground">Encryption in Transit & Rest:</strong> Data transmitted across web connections is encrypted using HTTPS / TLS protocols. Sensitive database credentials and tokens are encrypted at rest.
          </li>
          <li>
            <strong className="text-foreground">Role-Based Access Control (RBAC):</strong> Workspace owners can assign specific staff roles (Owner, Manager, Reception, Professional) to restrict access to sensitive business reports and billing data.
          </li>
        </ul>
      </section>

      {/* 6. Retention & Deletion */}
      <section id="data-retention" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">6. Data Retention & Account Cancellation</h2>
        <p>
          We retain workspace data for as long as your account remains active or as necessary to provide services, resolve billing disputes, and comply with legal or tax obligations.
        </p>
        <p>
          Upon subscription cancellation or account termination, access to the workspace is disabled at the end of the paid billing period. Operational database backups and inactive workspace records are subject to periodic server cleanup schedules. Merchants desiring a copy of their customer CRM or booking history should export their business records prior to workspace deactivation.
        </p>
      </section>

      {/* 7. Privacy Rights & Compliance */}
      <section id="user-rights" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">7. Privacy Rights & Indian DPDP Principles</h2>
        <p>
          Rozx respects data protection principles aligned with India&apos;s Digital Personal Data Protection (DPDP) Act, 2023. Account holders may request access to, correction of, or deletion of their account registration details by contacting us.
        </p>
        <p>
          If you are an end customer of a salon, spa, or clinic using Rozx and wish to exercise privacy rights regarding your booking or treatment records, please contact the specific business directly, as they maintain control over their customer CRM records.
        </p>
      </section>

      {/* 8. Contact & Inquiries */}
      <section id="legal-contact" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">8. Privacy Contact & Inquiries</h2>
        <p>
          If you have any questions regarding this Privacy Policy, wish to update your business contact information, or have privacy inquiries, please contact our team at:
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
