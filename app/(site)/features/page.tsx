import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo/metadata";
import {
  Calendar,
  Users,
  CreditCard,
  Globe,
  Megaphone,
  Package,
  Star,
  Gift,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { ROUTES } from "@/config/routes";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = generateMetadata({
  title: "Rozx Platform Features: Booking, POS, CRM & Custom Website Builder",
  description:
    "Explore the full feature suite of Rozx. Appointments, multi-staff calendar, GST thermal billing, WhatsApp Cloud API campaigns, drag-and-drop website builder, inventory POS, and Google Review booster.",
  path: "/features",
});

const featureSuites = [
  {
    title: "Appointments & Multi-Staff Calendar",
    slug: "appointments",
    icon: Calendar,
    tagline: "Smart scheduling, walk-ins, and multi-staff shift rosters",
    description:
      "Manage online appointments, walk-in queues, staff commissions, and service durations across single or multiple locations in real time.",
    bullets: [
      "Real-time multi-staff calendar with drag-and-drop rescheduling",
      "Automatic timezone & IST scheduling for online bookings",
      "Staff individual logins with custom permission controls",
      "Buffer times & automated break management",
    ],
  },
  {
    title: "Customer CRM & Client Records",
    slug: "crm",
    icon: Users,
    tagline: "Detailed client profiles, visit logs & preferences",
    description:
      "Maintain complete client history, formula notes, medical/pet profiles, SOAP progress notes, and lifetime spend records.",
    bullets: [
      "360-degree client profile with past bookings & purchases",
      "Digital intake waivers, consent forms & signature capture",
      "Special preferences, allergies & custom consultation tags",
      "Automated birthday & anniversary campaign triggers",
    ],
  },
  {
    title: "GST Thermal POS & Billing",
    slug: "payments",
    icon: CreditCard,
    tagline: "Instant thermal receipts, UPI/Razorpay & tax reports",
    description:
      "Speed through checkout with 80mm/58mm thermal receipt printing, itemized CGST/SGST breakdowns, SAC codes, and UPI QR codes.",
    bullets: [
      "Itemized CGST, SGST, IGST & SAC code billing",
      "Direct integration with thermal POS receipt printers",
      "Split payments (Cash, UPI, Card, Loyalty Points)",
      "Daily closing register reports & GSTR tax exports",
    ],
  },
  {
    title: "Drag-and-Drop Website Builder",
    slug: "website-builder",
    icon: Globe,
    tagline: "Custom domain publishing & online booking cart",
    description:
      "Build a stunning website on your custom domain (www.yourbrand.com) with customizable themes, service catalog, and retail store checkout.",
    bullets: [
      "Custom domain mapping with automated SSL encryption",
      "Responsive themes tailored for salons, spas, clinics & studios",
      "Integrated booking cart & online service menu",
      "SEO-optimized layout with zero-coding editor",
    ],
  },
  {
    title: "WhatsApp Cloud API Marketing",
    slug: "marketing",
    icon: Megaphone,
    tagline: "Meta-approved broadcast campaigns & automated alerts",
    description:
      "Drive repeat bookings using official WhatsApp Cloud API for appointment confirmations, reminders, promotional blasts, and re-engagement.",
    bullets: [
      "Meta-approved official WhatsApp Cloud API integration",
      "Automated appointment reminders (reduces no-shows by 80%)",
      "Segmented broadcast campaigns with promo codes",
      "Rich media templates with dynamic client tags",
    ],
  },
  {
    title: "Inventory & Retail Store POS",
    slug: "inventory",
    icon: Package,
    tagline: "Barcode scanning, stock audit & low-stock alerts",
    description:
      "Track internal consumption, retail product sales, HSN codes, barcode labels, and get automated alerts when stock runs low.",
    bullets: [
      "Barcode scanner support for rapid billing & stock count",
      "Internal supply usage tracking vs retail sales",
      "Automated low-stock notifications & reorder points",
      "Multi-category product catalog with image support",
    ],
  },
  {
    title: "5-Star Google Review Booster",
    slug: "appointments",
    icon: Star,
    tagline: "Automate post-visit feedback & Google Reviews",
    description:
      "Automatically route happy clients to leave 5-star reviews on Google Maps right after their appointment via WhatsApp.",
    bullets: [
      "Automated post-appointment review request via WhatsApp",
      "Smart sentiment filtering (5-star reviews directed to Google)",
      "Private internal feedback channel for service issues",
      "Boost local Google Maps SEO ranking automatically",
    ],
  },
  {
    title: "Memberships & Packages",
    slug: "loyalty",
    icon: Gift,
    tagline: "Bundled service packages & recurring memberships",
    description:
      "Sell advance service packages, prepaid wallet balances, and monthly recurring memberships to secure recurring revenue.",
    bullets: [
      "Prepaid service credits & multi-session package tracking",
      "Recurring monthly/annual membership plans",
      "Loyalty points engine on every billing invoice",
      "Automated package balance warnings at checkout",
    ],
  },
  {
    title: "Analytics & Financial Reports",
    slug: "analytics",
    icon: BarChart3,
    tagline: "Real-time revenue, staff performance & CSV exports",
    description:
      "Gain full visibility into daily revenue trends, staff performance metrics, top-selling services, and export reports for accounting.",
    bullets: [
      "Real-time revenue dashboards & trend charts",
      "Staff commission & service sales breakdown",
      "Exportable CSV/Excel reports for accounting",
      "Multi-branch comparative analytics",
    ],
  },
];

export default function FeaturesHubPage() {
  return (
    <div className="py-20 md:py-24 bg-background text-foreground relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--color-primary-100)_0%,transparent_60%)] opacity-40 dark:opacity-20 pointer-events-none" />

      <div className="container max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider inline-block">
            Platform Capabilities
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Everything You Need to Run &amp; Grow Your Business in One Software
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            Rozx combines appointment scheduling, multi-staff calendar, GST thermal billing, customer CRM, custom website builder, and WhatsApp automation into one unified platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureSuites.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.slug}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/40 hover:shadow-md transition-all group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-foreground group-hover:text-primary transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs font-semibold text-primary mt-0.5">{feat.tagline}</p>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {feat.description}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-border/60">
                    {feat.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-foreground/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-border/60">
                  <Link href={`/features/${feat.slug}`}>
                    <Button variant="outline" className="w-full justify-between text-xs font-bold h-10 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                      Explore Feature
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="rounded-3xl border border-primary/30 bg-card p-8 sm:p-12 text-center space-y-6 shadow-lg relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground max-w-2xl mx-auto">
            Experience the Complete Rozx Platform Today
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Start your free account in under 2 minutes. Free catalog migration and onboarding support included.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href={ROUTES.app.register}>
              <Button size="lg" variant="premium" className="font-bold text-sm px-8 h-12 shadow-sm">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/book-demo">
              <Button size="lg" variant="outline" className="font-semibold text-sm px-6 h-12">
                Book a Live Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
