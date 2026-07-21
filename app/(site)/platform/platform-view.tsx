import React from "react";
import Link from "next/link";
import {
  Calendar,
  Users,
  CreditCard,
  Globe,
  Megaphone,
  Gift,
  BarChart3,
  Activity,
  Shield,
  Zap,
  RefreshCw,
  Layers,
  Check,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";

const modules = [
  {
    icon: Calendar,
    title: "Smart Appointments & Booking",
    desc: "A responsive, client-facing booking engine that works on any device. Features automated scheduling, buffer controls, real-time calendars, staff assignments, and walk-in entry.",
    details: ["Double-booking prevention", "SMS & WhatsApp booking confirmations", "Multi-staff calendar views", "Waitlist automation"],
    href: "/features/appointments"
  },
  {
    icon: Users,
    title: "Customer CRM Profiles",
    desc: "Centralized client management containing contact details, visit history, appointment logs, lifetime spend, and custom intake waivers or color formula notes.",
    details: ["Detailed service logs", "Loyalty metrics & retention rates", "Preference notes & tags", "Automated client segments"],
    href: "/features/crm"
  },
  {
    icon: CreditCard,
    title: "Payments & Invoicing POS",
    desc: "A full-featured Point of Sale (POS) system that handles card payments, UPI gateways via Razorpay, cash billing, and 80mm/58mm GST thermal print receipts.",
    details: ["Razorpay & UPI gateway integrations", "GST-compliant thermal invoices", "Split payment methods", "Daily register close reports"],
    href: "/features/payments"
  },
  {
    icon: Globe,
    title: "Custom Website Builder",
    desc: "Launch a custom marketing website linked directly to your Rozx calendar. Choose high-converting templates and bind a custom domain with automated SSL security.",
    details: ["Fast hosting & automated SSL certificates", "Google Fonts & customizable layouts", "SEO-optimized structure", "Integrated booking widget"],
    href: "/features/website-builder"
  },
  {
    icon: Megaphone,
    title: "Marketing & WhatsApp Engine",
    desc: "Build retention campaigns using templates for SMS, WhatsApp, and email. Trigger automated review requests, birthday promotions, and win-back campaigns.",
    details: ["WhatsApp Official Cloud API integration", "Smart campaign templates", "Automated customer win-back", "Analytics on CTR & bookings"],
    href: "/features/marketing"
  },
  {
    icon: Gift,
    title: "Loyalty & Memberships",
    desc: "Increase lifetime value with custom membership tiers, multi-visit session bundles, and POS session balance redemptions.",
    details: ["Monthly membership tiers", "Prepaid session bundles", "POS balance redemption", "Validity expiration tracking"],
    href: "/features/loyalty"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics & Forecasting",
    desc: "Visual dashboard reporting total revenue, staff performance, customer retention rates, product inventory levels, and exportable financial summaries.",
    details: ["Staff commission calculator", "Monthly revenue reporting", "Retention rate metrics", "CSV & PDF tax exports"],
    href: "/features/analytics"
  },
  {
    icon: Activity,
    title: "Staff Roster & Commission POS",
    desc: "Manage individual staff shift rosters, track service ticket completion, and calculate daily commission payouts automatically.",
    details: ["Shift roster calendar", "Automated commission rates", "Role-based staff logins", "Daily checkout summary"],
    href: "/features/appointments"
  }
];

const capabilities = [
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Bank-grade data encryption, HTTPS protocols, strict tenant boundary isolation, and daily secure backups."
  },
  {
    icon: Zap,
    title: "Real-Time Telemetry",
    desc: "Sub-second synchronization across mobile apps, reception desktops, and online booking widgets."
  },
  {
    icon: RefreshCw,
    title: "Integrations & API",
    desc: "Seamless connectivity with Razorpay gateway, Meta WhatsApp Cloud API, and accounting exports."
  },
  {
    icon: Layers,
    title: "Multi-Branch Management",
    desc: "Standardize services, prices, staff rosters, and financial reports across multiple franchise outlets."
  }
];

export function PlatformView() {
  return (
    <div className="relative overflow-hidden bg-background text-foreground">
      {/* Background ambient spots & grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[100%_48px] opacity-10" />
      <div className="absolute top-0 left-[-15%] w-[60%] h-[60%] bg-radial from-primary/10 via-primary/5 to-transparent blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute top-[20%] right-[-15%] w-[60%] h-[60%] bg-radial from-primary/10 via-primary/5 to-transparent blur-[140px] -z-10 pointer-events-none" />

      {/* Hero Section */}
      <div className="pt-28 pb-20 relative overflow-hidden">
        <div className="container max-w-6xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            <div className="lg:col-span-7 space-y-6">
              <span className="rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider inline-block">
                Platform Infrastructure
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
                Capabilities built for <span className="text-primary">modern service teams</span>.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Rozx connects all parts of your business — from online booking to GST billing POS — in one unified real-time workspace. Discover our core operational modules.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href={ROUTES.app.register}>
                  <Button variant="premium" size="lg" className="font-bold text-sm px-6 h-12 shadow-sm">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" size="lg" className="font-semibold text-sm px-5 h-12">
                    View Pricing
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
                <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>0% Booking Commission • GST Billing POS • High-Availability Cloud</span>
              </div>
            </div>

            {/* Platform Telemetry Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-md relative overflow-hidden text-left space-y-5">
                <div className="flex items-center justify-between border-b border-border/80 pb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider">
                    <Activity className="h-3.5 w-3.5" />
                    Rozx Architecture Telemetry
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Live System Status ✓
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 bg-surface-2 p-3 rounded-xl border border-border text-center">
                  <div className="space-y-0.5">
                    <p className="text-xs sm:text-sm font-extrabold text-foreground">0.0%</p>
                    <p className="text-[10px] text-muted-foreground font-medium">Conflict Rate</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs sm:text-sm font-extrabold text-foreground">0%</p>
                    <p className="text-[10px] text-muted-foreground font-medium">Markup Fees</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs sm:text-sm font-extrabold text-foreground">Sub-Sec</p>
                    <p className="text-[10px] text-muted-foreground font-medium">POS Sync Speed</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Active Core Systems</p>
                  <div className="p-2.5 rounded-lg border border-border/70 bg-background flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">Real-Time Scheduling Engine</p>
                      <p className="text-[11px] text-muted-foreground">Double-Booking & Buffer Lock Protection</p>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">Active</span>
                  </div>
                  <div className="p-2.5 rounded-lg border border-border/70 bg-background flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">GST Invoicing & Thermal POS</p>
                      <p className="text-[11px] text-muted-foreground">A4 PDF & 80mm/58mm Thermal Receipts</p>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-600 border border-indigo-500/20">Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Modules Grid Showcase */}
      <div className="py-20 border-t border-border/60 relative">
        <div className="container max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center md:text-left space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Core Modules</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">Core Software Modules</h2>
            <p className="text-sm text-muted-foreground max-w-2xl font-light">Every module is optimized for speed and reliability, delivering an intuitive experience for your staff and customers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {modules.map((m, i) => {
              const IconComp = m.icon;
              return (
                <div key={i} className="space-y-4 text-left border-t border-border/80 pt-8 relative group">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-muted-foreground/80 font-bold uppercase tracking-wider">
                      0{i + 1} / Capability
                    </span>
                    <div className="text-primary bg-primary/10 rounded-xl p-2.5">
                      <IconComp className="h-5 w-5" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-extrabold text-foreground tracking-tight">{m.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {m.desc}
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {m.details.map((detail, idx) => (
                      <span key={idx} className="text-[10px] font-semibold text-foreground bg-surface-2 border border-border/80 px-2.5 py-1 rounded-md select-none">
                        {detail}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={m.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                    >
                      Explore module details
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Unified Workflow Showcase */}
      <div className="py-24 border-t border-border/60 relative">
        <div className="container max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider inline-block">
                Unified Workflow
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                How Rozx Connects Your Operations
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Most tools operate in isolated silos. In Rozx, online bookings immediately update staff schedules, trigger WhatsApp notifications, calculate checkout invoices, and record daily financial analytics.
              </p>

              <div className="space-y-3.5 text-xs text-foreground/85">
                <div className="flex items-center gap-2.5">
                  <div className="rounded-full bg-emerald-500/15 p-1 text-primary"><Check className="h-3.5 w-3.5 text-emerald-500" /></div>
                  <span>100% cloud-hosted infrastructure</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="rounded-full bg-emerald-500/15 p-1 text-primary"><Check className="h-3.5 w-3.5 text-emerald-500" /></div>
                  <span>Automated notifications via Official WhatsApp API</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="rounded-full bg-emerald-500/15 p-1 text-primary"><Check className="h-3.5 w-3.5 text-emerald-500" /></div>
                  <span>Continuous backup & secure SSL delivery</span>
                </div>
              </div>
            </div>

            {/* Interactive workflow visual block */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3 rounded-2xl border border-border bg-card p-5">
                <div className="h-10 w-10 rounded-xl border border-border bg-surface-2 flex items-center justify-center text-primary shadow-xs">
                  <Globe className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-foreground">1. Online Booking</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">Client selects a service and time slot on your booking website.</p>
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3 rounded-2xl border border-border bg-card p-5">
                <div className="h-10 w-10 rounded-xl border border-primary/50 bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                  <Calendar className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-foreground">2. Calendar Sync</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">Staff rosters update dynamically and WhatsApp reminder dispatches.</p>
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3 rounded-2xl border border-border bg-card p-5">
                <div className="h-10 w-10 rounded-xl border border-border bg-surface-2 flex items-center justify-center text-primary shadow-xs">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-foreground">3. Checkout POS</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">Front desk logs checkout, issues GST invoice, and records revenue.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infrastructure & Scale */}
      <div className="py-20 border-t border-border/60 relative">
        <div className="container max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center md:text-left space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Performance & Scale</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">Built for Performance & Security</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((c, idx) => {
              const IconComponent = c.icon;
              return (
                <div key={idx} className="rounded-2xl border border-border bg-card p-6 text-left space-y-3 shadow-xs">
                  <div className="rounded-xl bg-primary/10 p-2.5 text-primary w-fit">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground">{c.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Conversion Banner */}
      <div className="py-20 border-t border-border/60">
        <div className="container max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-primary/30 bg-card p-8 sm:p-12 text-center space-y-6 shadow-lg relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground max-w-2xl mx-auto">
              Ready to Upgrade Your Business Infrastructure?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Launch your Rozx workspace in under 2 minutes. Simple transparent pricing with 0% booking commission.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link href={ROUTES.app.register}>
                <Button variant="premium" size="lg" className="font-bold text-sm px-8 h-12 shadow-sm">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="font-semibold text-sm px-6 h-12">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
