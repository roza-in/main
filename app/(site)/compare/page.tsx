import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo/metadata";
import {
  Check,
  X,
  ArrowRight,
  Percent,
  Globe,
  Receipt,
} from "lucide-react";
import { ROUTES } from "@/config/routes";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = generateMetadata({
  title: "Rozx vs Competitors: Compare Booking & Billing Software",
  description:
    "Compare Rozx against Fresha, Mindbody, Booksy, Vagaro, and Zenoti. See why Indian salons, spas, clinics, and wellness centers choose 0% commission and custom domain website publishing.",
  path: "/compare",
});

const competitors = [
  {
    name: "Fresha",
    slug: "fresha",
    tagline: "0% Commission vs 20% Marketplace Cut",
    highlight: "Saves ₹10,000+ monthly in client acquisition commissions",
    rozxAdvantage:
      "Rozx charges ₹0 booking fees and lets you publish a custom website domain (www.yourbrand.com). Fresha charges 20% on new client bookings and locks your booking page onto fresha.com.",
    badge: "Most Popular Switch",
  },
  {
    name: "Mindbody",
    slug: "mindbody",
    tagline: "Flat ₹999/mo vs $139–$699/mo Plans",
    highlight: "Saves 80%+ on software subscription & setup costs",
    rozxAdvantage:
      "Mindbody costs $139–$699/mo (₹11,000–₹58,000/mo) with heavy setup fees and US-centric tax models. Rozx provides local Indian GST invoicing (CGST/SGST), UPI/Razorpay, and WhatsApp Cloud API.",
    badge: "Best Value Alternative",
  },
  {
    name: "Booksy",
    slug: "booksy",
    tagline: "Unlimited Staff vs Per-Calendar Pricing",
    highlight: "No extra fees as your team grows",
    rozxAdvantage:
      "Booksy charges extra per staff calendar + marketplace fees. Rozx includes multi-staff calendar management, custom website builder, and automated 5-star Google Review booster with zero hidden fees.",
    badge: "Multi-Staff Choice",
  },
  {
    name: "Vagaro",
    slug: "vagaro",
    tagline: "All-in-One Suite vs Add-on Billing",
    highlight: "Free Website, WhatsApp & Forms included",
    rozxAdvantage:
      "Vagaro charges add-on fees for custom websites, forms, and SMS. Rozx includes custom domain publishing, digital intake waivers, SOAP notes, and native Meta WhatsApp API campaigns in one plan.",
    badge: "All-in-One Leader",
  },
  {
    name: "Zenoti",
    slug: "zenoti",
    tagline: "Instant 2-Min Setup vs Months of Onboarding",
    highlight: "Zero long contracts or enterprise setup fees",
    rozxAdvantage:
      "Zenoti targets multi-million dollar chains with mandatory onboarding fees ($500+) and long contracts. Rozx offers single and multi-branch capability with instant self-serve setup and white-glove catalog migration.",
    badge: "Enterprise Alternative",
  },
];

const matrixRows = [
  {
    feature: "Booking Commission Fee",
    desc: "Percentage taken from your client bookings",
    rozx: "0% Commission (Keep 100%)",
    fresha: "20% New Client Cut",
    mindbody: "0% (High Base Fee)",
    booksy: "Marketplace Cut",
    vagaro: "Processing Fees",
    zenoti: "Custom Terms",
  },
  {
    feature: "Custom Website Domain",
    desc: "Host www.yourbrand.com with SSL certificate",
    rozx: true,
    fresha: false,
    mindbody: "Paid Add-on",
    booksy: false,
    vagaro: "Paid Add-on",
    zenoti: true,
  },
  {
    feature: "WhatsApp Cloud API Campaigns",
    desc: "Official Meta API broadcasts, reminders & review prompts",
    rozx: true,
    fresha: false,
    mindbody: false,
    booksy: false,
    vagaro: false,
    zenoti: "Custom Integration",
  },
  {
    feature: "GST Thermal POS Invoicing",
    desc: "Itemized CGST/SGST/IGST & 80mm/58mm thermal printing",
    rozx: true,
    fresha: "Basic Tax",
    mindbody: "US-Centric",
    booksy: "Basic Tax",
    vagaro: "US-Centric",
    zenoti: true,
  },
  {
    feature: "Multi-Staff Calendar & Roster",
    desc: "Shift management, commission tracking & individual logins",
    rozx: true,
    fresha: true,
    mindbody: "Per-User Fee",
    booksy: "Per-Staff Fee",
    vagaro: "Per-User Fee",
    zenoti: true,
  },
  {
    feature: "Digital Intake Forms & Waivers",
    desc: "Consent forms, SOAP notes & pet/EMR records",
    rozx: true,
    fresha: "Basic Notes",
    mindbody: true,
    booksy: false,
    vagaro: "Paid Add-on",
    zenoti: true,
  },
  {
    feature: "5-Star Google Review Booster",
    desc: "Automated post-appointment feedback routing",
    rozx: true,
    fresha: false,
    mindbody: false,
    booksy: false,
    vagaro: false,
    zenoti: "3rd Party App",
  },
  {
    feature: "Local Indian Support",
    desc: "Dedicated WhatsApp & call support in IST",
    rozx: true,
    fresha: "Email Only",
    mindbody: "Global Ticket",
    booksy: "Support Ticket",
    vagaro: "US Hours",
    zenoti: true,
  },
];

export default function CompareHubPage() {
  const renderCell = (val: boolean | string) => {
    if (typeof val === "boolean") {
      return val ? (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 font-bold text-xs">
          <Check className="w-3.5 h-3.5" />
        </span>
      ) : (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-muted text-muted-foreground/60 font-bold text-xs">
          <X className="w-3.5 h-3.5" />
        </span>
      );
    }
    return <span className="text-xs font-bold text-foreground">{val}</span>;
  };

  return (
    <div className="py-20 md:py-24 bg-background text-foreground relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--color-primary-100)_0%,transparent_60%)] opacity-40 dark:opacity-20 pointer-events-none" />

      <div className="container max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider inline-block">
            Software Comparison Directory
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Why Indian Service Businesses Choose Rozx Over Global Alternatives
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            From salons and spas to clinics, barbershops, and pet care, see how Rozx delivers 0% booking commission, custom domain website publishing, and local GST billing at a flat, transparent subscription rate.
          </p>
        </div>

        {/* 3 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-primary/25 bg-card space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Percent className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-foreground">0% Booking Commission</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Keep 100% of revenue generated from client appointments. No surprise 20% marketplace cuts or new customer acquisition taxes.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-primary/25 bg-card space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-foreground">Custom Website &amp; Domain</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Publish your website on your own custom domain (e.g. www.yourbrand.com) with booking cart, store inventory, and SSL included.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-primary/25 bg-card space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Receipt className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-foreground">GST &amp; WhatsApp Ready</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Generate GST compliant thermal bills (CGST/SGST), send WhatsApp Cloud API automated reminders, and collect 5-star Google reviews.
            </p>
          </div>
        </div>

        {/* Competitors Card Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <h2 className="text-2xl font-extrabold text-foreground tracking-tight">
              Compare Head-to-Head
            </h2>
            <span className="text-xs text-muted-foreground font-medium">Select a platform to view full comparison</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitors.map((comp) => (
              <div
                key={comp.slug}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/40 hover:shadow-md transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                      {comp.badge}
                    </span>
                    <span className="text-xs font-bold text-muted-foreground">vs {comp.name}</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-foreground group-hover:text-primary transition-colors">
                      Rozx vs {comp.name}
                    </h3>
                    <p className="text-xs font-semibold text-primary mt-0.5">{comp.tagline}</p>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {comp.rozxAdvantage}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-border/60">
                  <Link href={`/compare/${comp.slug}`}>
                    <Button variant="outline" className="w-full justify-between text-xs font-bold h-10 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                      Read Full Comparison
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Master 12-Point Feature Comparison Matrix Table */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-foreground tracking-tight">
              Master Feature Comparison Matrix
            </h2>
            <p className="text-xs text-muted-foreground">
              Detailed feature breakdown comparing Rozx against leading scheduling and POS platforms.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="border-b border-border bg-surface-2">
                    <th className="p-3.5 font-extrabold text-foreground w-[30%]">Feature / Capability</th>
                    <th className="p-3.5 font-black text-primary text-center bg-primary/10 border-x border-primary/20 w-[14%]">Rozx</th>
                    <th className="p-3.5 font-bold text-foreground text-center w-[11%]">Fresha</th>
                    <th className="p-3.5 font-bold text-foreground text-center w-[11%]">Mindbody</th>
                    <th className="p-3.5 font-bold text-foreground text-center w-[11%]">Booksy</th>
                    <th className="p-3.5 font-bold text-foreground text-center w-[11%]">Vagaro</th>
                    <th className="p-3.5 font-bold text-foreground text-center w-[12%]">Zenoti</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {matrixRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-surface-2/60 transition-colors">
                      <td className="p-3.5 space-y-0.5">
                        <div className="font-bold text-foreground">{row.feature}</div>
                        <div className="text-[11px] text-muted-foreground">{row.desc}</div>
                      </td>
                      <td className="p-3.5 text-center bg-primary/5 border-x border-primary/20 font-bold">
                        {renderCell(row.rozx)}
                      </td>
                      <td className="p-3.5 text-center">{renderCell(row.fresha)}</td>
                      <td className="p-3.5 text-center">{renderCell(row.mindbody)}</td>
                      <td className="p-3.5 text-center">{renderCell(row.booksy)}</td>
                      <td className="p-3.5 text-center">{renderCell(row.vagaro)}</td>
                      <td className="p-3.5 text-center">{renderCell(row.zenoti)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="rounded-3xl border border-primary/30 bg-card p-8 sm:p-12 text-center space-y-6 shadow-lg relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground max-w-2xl mx-auto">
            Ready to Take Control of Your Business Brand &amp; Booking Revenue?
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Join thousands of modern service businesses. Get set up in 2 minutes with free catalog migration assistance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href={ROUTES.app.register}>
              <Button size="lg" variant="premium" className="font-bold text-sm px-8 h-12 shadow-sm">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="font-semibold text-sm px-6 h-12">
                Explore Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
