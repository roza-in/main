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
  Sparkles,
  ArrowRight,
  Shield,
  Zap,
  RefreshCw,
  Layers,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";

const modules = [
  {
    icon: Calendar,
    title: "Smart Appointments & Booking",
    desc: "A responsive, client-facing booking engine that works on any device. Features automated scheduling, waitlist queues, real-time calendars, staff assignments, and walk-in entry.",
    details: ["Double-booking prevention", "SMS & WhatsApp booking confirmations", "Multi-staff calendar views", "Waitlist automation"]
  },
  {
    icon: Users,
    title: "Customer CRM Profiles",
    desc: "Centralized client management containing contact details, intake history, appointment logs, purchase records, lifetime value, and style/wellness preferences.",
    details: ["Detailed service logs", "Loyalty metrics & retention rates", "Preference notes & tags", "Automated client segments"]
  },
  {
    icon: CreditCard,
    title: "Payments & Invoicing POS",
    desc: "A full-featured Point of Sale (POS) system that handles card payments, UPI gateways, cash billing, and print invoices. Integrates GST and supports tax rates.",
    details: ["Razorpay & Stripe UPI integrations", "GST-compliant invoices", "Split payment methods", "Daily register close reports"]
  },
  {
    icon: Globe,
    title: "Custom Website Builder",
    desc: "Launch a custom marketing website linked directly to your Rozx calendar. Choose high-converting templates and bind a custom domain with absolute SEO optimization.",
    details: ["Fast CDN & automated SSL certificates", "Google Fonts & customizable layouts", "SEO-optimized structure", "Integrated booking widget"]
  },
  {
    icon: Megaphone,
    title: "Marketing & WhatsApp Engine",
    desc: "Build retention campaigns using templates for SMS, WhatsApp, and email. Trigger automated review requests, birthday promotions, and win-back campaigns.",
    details: ["WhatsApp Official Cloud API integration", "Smart campaign templates", "Automated customer win-back", "Analytics on email/SMS CTR"]
  },
  {
    icon: Gift,
    title: "Loyalty & Memberships",
    desc: "Increase lifetime value with custom membership clubs, multi-visit punch cards, tier-based points accumulation, and referral rewards.",
    details: ["Auto points calculation at POS", "Subscription memberships", "Digital gift cards", "Referral tracking code"]
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics & Forecasting",
    desc: "Visual dashboard reporting total revenue, staff performance, customer retention rates, product inventory levels, and forward growth indicators.",
    details: ["Staff commission calculator", "Monthly revenue reporting", "Retention rate metrics", "Inventory valuation report"]
  },
  {
    icon: Sparkles,
    title: "Rozx AI Copilot Assistant",
    desc: "An intelligent dashboard assistant that suggests marketing campaigns, flags inventory issues, schedules staff templates, and summarizes monthly metrics.",
    details: ["Auto campaign writing", "Inventory restock predictions", "Client segment suggestions", "Natural language query report"]
  }
];

const capabilities = [
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Bank-grade data encryption, HTTPS protocols, and daily secure backups to keep your client databases secure."
  },
  {
    icon: Zap,
    title: "Real-Time Sync",
    desc: "No lag. Your POS, online booking site, and staff calendars sync instantly to prevent double-bookings."
  },
  {
    icon: RefreshCw,
    title: "Integrations & API",
    desc: "Integrate with external accounting tools, CRMs, and payment systems using our webhooks and API."
  },
  {
    icon: Layers,
    title: "Multi-Branch Management",
    desc: "Standardize services, prices, and reports across 100+ franchise locations using our parent console."
  }
];

export function PlatformView() {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Background ambient spots & grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:100%_48px] opacity-10" />
      <div className="absolute top-0 left-[-15%] w-[60%] h-[60%] bg-radial from-primary/10 via-primary/5 to-transparent blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute top-[20%] right-[-15%] w-[60%] h-[60%] bg-radial from-primary/10 via-primary/5 to-transparent blur-[140px] -z-10 pointer-events-none" />

      {/* Hero Section */}
      <div className="pt-28 pb-20 relative overflow-hidden">
        <div className="container max-w-5xl text-center space-y-8">
          <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider inline-block">
            Our Platform
          </span>
          <h1 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto tracking-tight leading-none">
            Capabilities built for <span className="text-primary font-bold">modern service teams</span>.
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Rozx connects all parts of your business, from booking to billing, in a clean, real-time dashboard. Discover how our core modules connect.
          </p>
        </div>
      </div>

      {/* Modules Grid Showcase */}
      <div className="py-20 border-t border-border/40 relative">
        <div className="container max-w-5xl space-y-16">
          <div className="text-center md:text-left space-y-3">
            <h2 className="text-heading-2 text-2xl font-bold tracking-tight text-foreground">Core Software Modules</h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl font-light">Every feature has been optimized for speed and reliability, ensuring a premium experience for both your staff and customers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {modules.map((m, i) => {
              const IconComp = m.icon;
              return (
                <div key={i} className="space-y-4 text-left border-t border-border/60 pt-8 relative group">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-muted-foreground/80 font-bold uppercase tracking-wider">
                      0{i + 1} / Capability
                    </span>
                    <div className="text-primary/70 group-hover:text-primary transition-colors bg-primary/5 rounded-lg p-1.5">
                      <IconComp className="h-4.5 w-4.5" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-base font-extrabold text-foreground tracking-tight">{m.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                      {m.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 flex flex-wrap gap-1.5">
                    {m.details.map((detail, idx) => (
                      <span key={idx} className="text-[9px] font-medium text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full select-none">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Workflow Showcase Visual Mock */}
      <div className="py-24 border-t border-border/40 relative">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="rounded-full bg-primary/10 px-3.5 py-1 text-[10px] font-bold text-primary uppercase tracking-wide inline-block">
                Unified Workflow
              </span>
              <h3 className="text-heading-2 text-2xl font-extrabold tracking-tight sm:text-3xl text-foreground">
                How Rozx Connects Your Operations
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                Most platforms operate in silos. In Rozx, customer bookings immediately update staff schedules, trigger SMS reminders, compute checkout invoices, assign loyalty credits, and sync real-time revenue analytics.
              </p>

              <div className="space-y-3.5 text-xs text-foreground/85">
                <div className="flex items-center gap-2.5">
                  <div className="rounded-full bg-emerald-500/15 p-1 text-primary"><Check className="h-3 w-3" /></div>
                  <span className="font-light">100% cloud-hosted infrastructure</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="rounded-full bg-emerald-500/15 p-1 text-primary"><Check className="h-3 w-3" /></div>
                  <span className="font-light">Automated notifications via Official WhatsApp API</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="rounded-full bg-emerald-500/15 p-1 text-primary"><Check className="h-3 w-3" /></div>
                  <span className="font-light">Continuous backup & secure SSL delivery</span>
                </div>
              </div>
            </div>

            {/* Interactive workflow visual block */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
              {/* Horizontal line connector (hidden on mobile) */}
              <div className="absolute top-[20px] left-[15%] right-[15%] h-0.5 border-t border-dashed border-border/80 -z-10 hidden sm:block" />

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3 pt-4 sm:pt-0">
                <div className="h-10 w-10 rounded-xl border border-border bg-card flex items-center justify-center text-primary shadow-xs">
                  <Globe className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-foreground">1. Online Booking</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed font-light">Client selects a service and time slot on your custom website.</p>
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3 relative">
                <div className="h-10 w-10 rounded-xl border border-primary/50 bg-card flex items-center justify-center text-primary shadow-sm relative ring-2 ring-primary/10">
                  <div className="absolute -top-1 -right-1 rounded-full bg-emerald-500 h-2 w-2 animate-ping" />
                  <Calendar className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-foreground">2. Calendar Sync</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed font-light">Staff schedules and slots update dynamically. WhatsApp reminder is dispatched.</p>
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-3">
                <div className="h-10 w-10 rounded-xl border border-border bg-card flex items-center justify-center text-primary shadow-xs">
                  <CreditCard className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-foreground">3. Checkout POS</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed font-light">Service checkout computes commissions, accepts payments, and assigns loyalty points.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Infrastructure details */}
        <div className="py-24 border-t border-border/40 bg-surface-1/10">
          <div className="container max-w-5xl space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                Platform Scale
              </span>
              <h2 className="text-heading-2 text-2xl font-bold tracking-tight text-foreground">Built for Performance & Scale</h2>
              <p className="text-xs sm:text-sm text-muted-foreground">Premium architecture that gives your business reliability, security, and velocity.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-border/60 max-w-5xl mx-auto text-left">
              {capabilities.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={i} className="md:px-6 space-y-3">
                    <div className="flex items-center gap-2 text-primary">
                      <Icon className="h-4.5 w-4.5" />
                      <h4 className="text-xs font-bold text-foreground uppercase tracking-wide">{c.title}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">{c.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="py-24 bg-background border-t border-border/40">
          <div className="container max-w-5xl text-center space-y-8">
            <h2 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-3xl mx-auto leading-none">
              Experience Rozx <span className="text-primary font-bold">firsthand.</span>
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto font-light">
              Create your account in under 5 minutes and see how simple booking and billing can be.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href={ROUTES.app.register} className="w-full sm:w-auto">
                <Button variant="premium" className="font-bold text-xs h-10 w-full sm:w-auto px-6">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/book-demo" className="w-full sm:w-auto">
                <Button variant="outline" className="font-bold text-xs h-10 w-full sm:w-auto px-6 border-border/80 hover:bg-surface-2 transition-colors">
                  Speak with our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
    </div>
    </div>
  );
}
