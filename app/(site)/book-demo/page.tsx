"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Check, Clock, Calendar, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

const CalendlyEmbed = dynamic(() => import("@/components/shared/calendly-embed"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full text-xs text-muted-foreground font-semibold animate-pulse">
      Connecting to secure scheduler...
    </div>
  ),
});

export default function BookDemoPage() {
  const [isMounted, setIsMounted] = useState(false);
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || siteConfig.contact.calendly;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:100%_48px] opacity-10" />

      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Value Prop (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left py-2">
            <div className="space-y-5">
              <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wide inline-block">
                Live Specialist Tour
              </span>
              <h1 className="text-display text-3xl sm:text-4xl text-foreground">
                Book a live demo.
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Explore how Rozx optimizes multi-branch scheduling. Meet 1-on-1 with a product engineer for a clean walkthrough configured for your vertical.
              </p>

              {/* Checklist */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1 text-primary shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-foreground">Bespoke Walkthrough</h4>
                    <p className="text-[11px] text-muted-foreground mt-0.5">Explore configurations custom-fitted for your operations (e.g., salon chair leasing vs clinic split invoicing).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1 text-primary shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-foreground">Migration Blueprint</h4>
                    <p className="text-[11px] text-muted-foreground mt-0.5">We review your current software databases and outline a secure, zero-downtime migration path.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1 text-primary shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-foreground">Franchise & Custom SLA</h4>
                    <p className="text-[11px] text-muted-foreground mt-0.5">Discuss role permissions, unified multi-branch payments, API keys, and custom SLA contracts.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-surface-1 p-3.5 flex items-center gap-3 text-xs text-muted-foreground">
              <Clock className="h-4 w-4 text-primary shrink-0" />
              <span>Standard session length: 25 minutes. No billing obligation.</span>
            </div>
          </div>

          {/* Right Column: Calendly Embed (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-xl border border-border bg-card p-5 sm:p-6 shadow-xs text-left">
            <div className="space-y-1.5 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4.5 w-4.5 text-primary" />
                <h3 className="text-heading-3 text-lg font-bold text-foreground">Select date & time</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Select an available slot below. A calendar invite containing video links will be emailed automatically.
              </p>
            </div>

            {/* Calendly Inline Embed with Mount Guard */}
            <div className="relative w-full overflow-hidden rounded-lg border border-border bg-background h-[580px] md:h-[600px] shadow-inner">
              {isMounted ? (
                <CalendlyEmbed url={calendlyUrl} />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-xs text-muted-foreground font-semibold">
                  Connecting to secure scheduler...
                </div>
              )}
            </div>

            {/* Direct Link */}
            <div className="mt-3.5 pt-3.5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
              <span>Problem loading the scheduling widget?</span>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full sm:w-auto"
              >
                <Button variant="outline" size="sm" className="font-bold flex items-center gap-1.5 w-full h-8 text-xs">
                  Open scheduler in new tab
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
