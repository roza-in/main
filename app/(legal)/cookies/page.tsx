import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";
import { LegalDocLayout, type LegalSection } from "@/components/shared/legal-doc-layout";

export const metadata: Metadata = generateMetadata({
  title: "Cookie Policy",
  description: "Learn how Rozx uses cookies and browser storage on our marketing site and merchant platform.",
  path: "/cookies",
});

const sections: LegalSection[] = [
  { id: "cookies-overview", title: "1. Overview of Technologies" },
  { id: "essential-technologies", title: "2. Essential Storage Keys" },
  { id: "analytics-technologies", title: "3. Performance & Analytics" },
  { id: "managing-preferences", title: "4. Managing Preferences" },
  { id: "cookie-contact", title: "5. Contact & Inquiries" },
];

export default function CookiePolicyPage() {
  return (
    <LegalDocLayout
      title="Cookie Policy"
      description="This Cookie Policy explains how Rozx uses cookies, local storage, and similar web technologies across our marketing website (rozx.in) and merchant application portal (app.rozx.in)."
      sections={sections}
      activePolicy="cookies"
    >
      {/* 1. Overview of Technologies */}
      <section id="cookies-overview" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">1. Overview of Web Storage Technologies</h2>
        <p>
          Cookies and local storage are small text parameters or data files stored by your browser when you visit websites. They enable web applications to maintain session credentials, remember layout choices, and preserve security parameters across page loads.
        </p>
        <p>
          We use browser storage mechanisms strictly to operate our platform securely, preserve user UI preferences, and analyze anonymized site traffic to improve user experience.
        </p>
      </section>

      {/* 2. Essential Storage Keys */}
      <section id="essential-technologies" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">2. Essential Browser Storage Keys</h2>
        <p>
          These storage items are strictly necessary for website functionality, user security, and session management:
        </p>
        <div className="overflow-x-auto my-4 rounded-xl border border-border">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-surface-2 border-b border-border text-foreground">
                <th className="p-3 font-bold">Key / Cookie</th>
                <th className="p-3 font-bold">Type & Scope</th>
                <th className="p-3 font-bold">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3 font-semibold text-foreground">`theme`</td>
                <td className="p-3">localStorage (`rozx.in`)</td>
                <td className="p-3">Remembers your preferred color theme mode (light, dark, or system).</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">`rozx-announcement-dismissed`</td>
                <td className="p-3">localStorage (`rozx.in`)</td>
                <td className="p-3">Remembers if you dismissed the top offer announcement bar.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">`rozx.access_token`</td>
                <td className="p-3">Cookie / Local Storage (`app.rozx.in`)</td>
                <td className="p-3">Maintains secure authenticated session credentials for logged-in merchants.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">`rzp_device_id` / Gateway Session</td>
                <td className="p-3">Razorpay Cookies</td>
                <td className="p-3">Secures online payment checkout tokens and prevents transaction fraud.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Performance & Analytics */}
      <section id="analytics-technologies" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">3. Performance & Usage Analytics</h2>
        <p>
          We use analytics tooling (such as PostHog and Sentry) to monitor application performance, track error stack traces, and understand anonymized website traffic patterns:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            <strong className="text-foreground">PostHog (`ph_*` parameters):</strong> Used to measure aggregated page views and navigation flows. IP addresses are anonymized.
          </li>
          <li>
            <strong className="text-foreground">Sentry Error Logging:</strong> Captures technical client-side JavaScript error traces to enable our development team to identify and resolve software bugs quickly.
          </li>
        </ul>
      </section>

      {/* 4. Managing Preferences */}
      <section id="managing-preferences" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">4. Managing Storage & Browser Cookies</h2>
        <p>
          Most modern web browsers allow you to manage or clear stored cookies and local storage keys through your browser settings.
        </p>
        <p>
          Please note that disabling essential authentication cookies or storage items may prevent you from logging into your Rozx dashboard or completing checkout transactions.
        </p>
      </section>

      {/* 5. Contact & Inquiries */}
      <section id="cookie-contact" className="scroll-mt-24 space-y-3">
        <h2 className="text-xl font-bold text-foreground tracking-tight">5. Contact & Inquiries</h2>
        <p>
          For questions regarding our web storage practices or technology usage, please contact:
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
