"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Copy, Check, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:100%_48px] opacity-10" />

      <div className="container max-w-4xl">
        {/* Page Header */}
        <div className="text-left max-w-2xl space-y-4 mb-16">
          <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wide inline-block">
            Get in touch
          </span>
          <h1 className="text-display text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Contact our team.
          </h1>
          <p className="text-body text-muted-foreground leading-relaxed">
            Have questions about multi-location branch configs, payment settle cycles, or Custom SLA setups? We respond within 12 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-12">
          {/* Email Support Card */}
          <div className="rounded-xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/45 transition-all duration-200 shadow-xs">
            <div className="space-y-4 text-left">
              <div className="rounded-lg bg-primary/10 p-2.5 text-primary w-fit">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="text-heading-3 text-lg font-bold text-foreground">Email Support</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                For workspace setups, account migrations, or custom API access requests. All inquiries are tracked and answered.
              </p>
            </div>
            
            <div className="mt-8 pt-5 border-t border-border flex items-center justify-between gap-3 text-left">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-xs sm:text-sm font-bold text-foreground hover:text-primary transition-colors truncate"
              >
                {siteConfig.contact.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1 rounded-lg border border-border bg-surface-2 px-3 py-1 text-xs font-semibold text-muted-foreground hover:bg-surface-3 hover:text-foreground transition-all shrink-0 min-h-[32px]"
                aria-label="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3 text-primary" />
                    <span className="text-primary text-[10px] font-bold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span className="text-[10px]">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Corporate Location Card */}
          <div className="rounded-xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/45 transition-all duration-200 shadow-xs">
            <div className="space-y-4 text-left">
              <div className="rounded-lg bg-primary/10 p-2.5 text-primary w-fit">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="text-heading-3 text-lg font-bold text-foreground">Registered Address</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Our central operations coordinates. Office entry is strictly restricted to scheduled appointments only.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-border text-left">
              <span className="text-xs sm:text-sm font-bold text-foreground/80 leading-relaxed block">
                {siteConfig.contact.address}
              </span>
            </div>
          </div>
        </div>

        {/* Call-to-action */}
        <div className="rounded-xl border border-border bg-surface-1 p-6 text-left max-w-2xl space-y-4">
          <h3 className="text-heading-3 text-base sm:text-lg text-foreground">Schedule a direct walkthrough</h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Skip email lists. Book a live Zoom demo session to assess customized settings for your business.
          </p>
          <div className="pt-1">
            <Link href="/book-demo">
              <Button variant="premium" className="font-bold text-xs inline-flex items-center gap-1.5 h-8.5 px-4.5">
                Book a Live Demo
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
