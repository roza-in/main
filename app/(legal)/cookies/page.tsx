import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Cookie Policy",
  description: "Learn how Rozx uses cookies to preserve dashboard states and coordinate session credentials.",
  path: "/cookies",
});

export default function CookiePolicyPage() {
  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-100)_0%,_transparent_60%)] opacity-55 dark:opacity-35" />

      <div className="container max-w-3xl text-left font-sans px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-border pb-8 mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground mb-4">
            Cookie Policy
          </h1>
          <p className="text-xs text-muted-foreground">
            Last updated: June 8, 2026. A clear explanation of how and why we use cookies on our marketing site and inside our app dashboard.
          </p>
        </div>

        {/* Full Cookie Policy Text */}
        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">1. What are cookies?</h2>
            <p className="mb-4">
              Cookies and local storage are small text files saved by your browser when you load websites. They act like a memory for the browser, helping websites remember things like your login session, dark mode choice, or shopping cart settings so you don&apos;t have to re-enter them every time you click a new page.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">2. Essential cookies we need to run</h2>
            <p className="mb-4">
              These cookies are mandatory. Without them, you wouldn&apos;t be able to log in, keep your dashboard session active, or purchase a subscription securely.
            </p>
            <div className="overflow-x-auto my-4 border border-border rounded-lg">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-muted border-b border-border">
                    <th className="p-3 font-semibold text-foreground">Key</th>
                    <th className="p-3 font-semibold text-foreground">Who sets it</th>
                    <th className="p-3 font-semibold text-foreground">What it does</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-foreground">`sb-access-token` / `sb-refresh-token`</td>
                    <td className="p-3">Supabase</td>
                    <td className="p-3">Verifies who you are and keeps your workspace session securely connected.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-foreground">`__stripe_mid` / `__stripe_sid`</td>
                    <td className="p-3">Stripe</td>
                    <td className="p-3">Verifies checkout tokens and prevents payment fraud on subscriptions.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-foreground">`csrf_token`</td>
                    <td className="p-3">Rozx</td>
                    <td className="p-3">Prevents cross-site malicious requests from executing actions on your account.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">3. Preference cookies</h2>
            <p className="mb-4">
              These cookies customize the appearance of your dashboard and remember your layout preferences:
            </p>
            <div className="overflow-x-auto my-4 border border-border rounded-lg">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-muted border-b border-border">
                    <th className="p-3 font-semibold text-foreground">Key</th>
                    <th className="p-3 font-semibold text-foreground">Who sets it</th>
                    <th className="p-3 font-semibold text-foreground">What it does</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-foreground">`theme`</td>
                    <td className="p-3">Rozx</td>
                    <td className="p-3">Remembers if you prefer Light, Dark, or System mode styles.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-foreground">`sidebar_collapsed`</td>
                    <td className="p-3">Rozx</td>
                    <td className="p-3">Remembers if you keep the navigation sidebar collapsed or expanded.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-foreground">`last_selected_branch`</td>
                    <td className="p-3">Rozx</td>
                    <td className="p-3">Remembers which business location profile you were viewing last.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">4. Performance & Analytics cookies</h2>
            <p className="mb-4">
              We track anonymous click flows and loading times so we can fix bugs, see which features are popular, and optimize page load speeds. We mask all IP addresses to keep these logs anonymous.
            </p>
            <div className="overflow-x-auto my-4 border border-border rounded-lg">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-muted border-b border-border">
                    <th className="p-3 font-semibold text-foreground">Key</th>
                    <th className="p-3 font-semibold text-foreground">Who sets it</th>
                    <th className="p-3 font-semibold text-foreground">What it does</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-foreground">`ph_` (e.g. `ph_project_token_user`)</td>
                    <td className="p-3">PostHog</td>
                    <td className="p-3">Tracks anonymous click actions to help us spot broken links or UI errors.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-foreground">`_clck` / `_clsk`</td>
                    <td className="p-3">Microsoft Clarity</td>
                    <td className="p-3">Anonymously records layout navigation sessions so we can see why users get stuck.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-foreground">`_ga` / `_gid`</td>
                    <td className="p-3">Google Analytics</td>
                    <td className="p-3">Tracks visitor volumes and traffic channels on our marketing website.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">5. How to control cookies</h2>
            <p className="mb-4">
              You can adjust which cookies you allow via the settings banner on our site. Alternatively, you can clear all cookies and storage records at any time directly through your web browser&apos;s options menu (usually under History &gt; Clear Browsing Data).
            </p>
            <p className="mb-4">
              <em>Note: If you block essential cookies in your browser settings, you will not be able to log in to the Rozx dashboard or manage schedules, as our server will have no way of keeping your session verified.</em>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-foreground mb-3">6. Updates</h2>
            <p className="mb-4">
              We may adjust this cookie list from time to time as we add new integrations or update analytics helpers. Any changes will be reflected on this page with a revised Last Updated date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
