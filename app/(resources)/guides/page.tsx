"use client";

import React from "react";
import Link from "next/link";
import { HelpCircle, ChevronRight, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Guide {
  slug: string;
  title: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

const guidesList: Guide[] = [
  {
    slug: "migration-zenoti-to-rozx",
    title: "How to Migrate from Zenoti to Rozx Without Business Downtime",
    description: "A complete step-by-step roadmap to export your client catalog, booking slots, and staff histories from Zenoti and import them into Rozx.",
    duration: "10 min read",
    level: "Intermediate"
  },
  {
    slug: "setting-up-whatsapp-business-api",
    title: "Setting Up Meta Cloud WhatsApp API for Booking Reminders",
    description: "Learn how to register a phone number on Meta Developer Portal, verify your business parameters, and connect WhatsApp to Rozx.",
    duration: "15 min read",
    level: "Advanced"
  },
  {
    slug: "configuring-gst-taxes",
    title: "Configuring GST Tax Rates and Custom Invoice Templates",
    description: "Guide on configuring single/split tax rates for products and services inside the Rozx checkout Point of Sale dashboard.",
    duration: "8 min read",
    level: "Beginner"
  }
];

export default function GuidesIndexPage() {
  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-100)_0%,_transparent_60%)] opacity-55 dark:opacity-35" />

      <div className="container max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Implementation Guides
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Technical setup guides and tutorials to help you configure domains, set up APIs,
            and connect payment gateways.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {guidesList.map((guide) => (
            <div
              key={guide.slug}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4 text-left">
                <div className="flex items-center justify-between text-[10px] font-bold tracking-wider uppercase">
                  <span className="inline-flex items-center gap-1 rounded bg-primary/10 px-2 py-0.5 text-primary">
                    {guide.level}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {guide.duration}
                  </span>
                </div>
                
                <h3 className="font-extrabold text-foreground text-base leading-snug hover:text-primary transition-colors">
                  <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
                </h3>
                
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4">{guide.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 text-left">
                <Link
                  href={`/guides/${guide.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                >
                  View Guide
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Support Box */}
        <div className="rounded-2xl border border-border bg-muted/10 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-left">
            <HelpCircle className="h-5 w-5 text-primary shrink-0" />
            <div>
              <h4 className="font-bold text-foreground text-sm">Need guided setup help?</h4>
              <p className="text-xs text-muted-foreground">Our onboarding team is available to assist with migrations and API verifications.</p>
            </div>
          </div>
          <Link href="/contact?subject=migration_help">
            <Button variant="outline" className="font-bold text-xs bg-background">
              Request Onboarding Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
