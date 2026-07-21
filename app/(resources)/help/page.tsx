import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Mail, BookOpen, MessageSquare, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Merchant Help & Support | Rozx",
  description: "Get assistance with your Rozx booking workspace, GST billing POS, and custom domain setup.",
  robots: {
    index: false,
    follow: true,
  },
};

const supportGuides = [
  {
    title: "Setting Up Your Service Catalog",
    desc: "Configure your service categories, prices, durations, and buffer cleanup intervals.",
  },
  {
    title: "Staff Roster & Working Hours",
    desc: "Assign staff members, set individual shift calendars, and configure commission tracking rates.",
  },
  {
    title: "GST POS & Thermal Billing Setup",
    desc: "Configure tax SAC codes, CGST/SGST percentages, and 80mm/58mm thermal receipt printing.",
  },
  {
    title: "Meta WhatsApp Cloud API Integration",
    desc: "Connect your official Meta WhatsApp account for automated booking confirmations and reminders.",
  },
];

export default function HelpIndexPage() {
  return (
    <div className="relative overflow-hidden bg-background text-foreground">
      {/* Background ambient grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[100%_48px] opacity-10" />

      {/* Hero Section */}
      <div className="pt-28 pb-16 relative overflow-hidden">
        <div className="container max-w-4xl text-center space-y-6">
          <span className="rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider inline-block">
            Merchant Support
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Rozx Merchant Assistance
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Need help setting up your booking calendar, GST invoicing POS, or staff rosters? Our onboarding team is here to assist.
          </p>
        </div>
      </div>

      <div className="container max-w-5xl px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* Support Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl border border-border bg-card p-6 text-left space-y-4 shadow-xs">
            <div className="rounded-xl bg-primary/10 p-3 text-primary w-fit">
              <Mail className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-foreground">Direct Email Assistance</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Send your support query, catalog file, or setup question directly to our team.
              </p>
            </div>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-block text-sm font-bold text-primary hover:underline pt-2"
            >
              {siteConfig.contact.email}
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 text-left space-y-4 shadow-xs">
            <div className="rounded-xl bg-primary/10 p-3 text-primary w-fit">
              <MessageSquare className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-foreground">Catalog Setup Assistance</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Switching from legacy software? Send us your current service menu for assisted setup.
              </p>
            </div>
            <Link href="/contact" className="inline-block text-sm font-bold text-primary hover:underline pt-2">
              Request Assisted Setup →
            </Link>
          </div>
        </div>

        {/* Onboarding Guides Checklist */}
        <div className="rounded-3xl border border-border bg-card p-8 text-left space-y-6 shadow-xs">
          <div className="flex items-center gap-2 border-b border-border/80 pb-4">
            <BookOpen className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-extrabold text-foreground">Core Setup Overview</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportGuides.map((guide, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-border/70 bg-surface-2 space-y-1">
                <h4 className="text-xs font-bold text-foreground">{guide.title}</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{guide.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-16 text-center space-y-4">
          <p className="text-xs text-muted-foreground">
            Have a custom business setup question? Contact our team anytime.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="font-semibold text-xs px-6 h-10">
              Contact Support Team
              <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
