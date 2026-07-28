"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { initClarity } from "@/lib/analytics/clarity";
import { pageview as trackGAPageview } from "@/lib/analytics/ga";

function TrackerComponent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  const initializeAnalytics = () => {
    const consent = localStorage.getItem("rozx_cookie_consent");
    if (consent !== "all") return;

    queueMicrotask(() => setIsConsentGiven(true));

    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (posthogKey) {
      import("posthog-js").then(({ default: ph }) => {
        ph.init(posthogKey, {
          api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
          capture_pageview: false, // Track pageviews manually on route changes
          capture_pageleave: true, // Track pageleave for accurate bounce rate & session duration
          person_profiles: "identified_only",
        });
      });
    }

    // Initialize Clarity
    initClarity();
  };

  // 1. Initialize PostHog & Clarity on mount or on consent change
  useEffect(() => {
    initializeAnalytics();

    const handleConsentChange = () => {
      initializeAnalytics();
    };

    window.addEventListener("rozx_cookie_consent_changed", handleConsentChange);
    return () => {
      window.removeEventListener("rozx_cookie_consent_changed", handleConsentChange);
    };
  }, []);

  // 2. Track pageviews on pathname or search parameters changes
  useEffect(() => {
    if (!pathname) return;
    const consent = localStorage.getItem("rozx_cookie_consent");
    if (consent !== "all") return;

    let url = pathname;
    if (searchParams && searchParams.toString()) {
      url += `?${searchParams.toString()}`;
    }

    // Google Analytics Pageview
    trackGAPageview(url);

    // PostHog Pageview
    import("posthog-js").then(({ default: ph }) => {
      if (ph.__loaded) {
        ph.capture("$pageview");
      }
    });
  }, [pathname, searchParams]);

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      {isConsentGiven && gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                send_page_view: false,
              });
            `}
          </Script>
        </>
      )}
    </>
  );
}

export function AnalyticsTracker() {
  return (
    <Suspense fallback={null}>
      <TrackerComponent />
    </Suspense>
  );
}
