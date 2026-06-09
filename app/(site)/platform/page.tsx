"use client";

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
  Database
} from "lucide-react";
import { Button } from "@/components/ui/button";

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

export default function PlatformPage() {
  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-background">
      {/* Background radial gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-100)_0%,_transparent_65%)] opacity-50 dark:opacity-35" />
      
      <div className="container">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Platform Capabilities
          </h1>
          <p className="text-muted-foreground text-lg text-pretty">
            Rozx consolidates your entire service business workflow into a secure, real-time operating system.
            Discover how our core modules connect.
          </p>
        </div>

        {/* Modules Grid Showcase */}
        <div className="space-y-16 mb-24">
          <div className="text-left space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Core Software Modules</h2>
            <p className="text-sm text-muted-foreground max-w-xl">Every feature has been optimized for speed and reliability, ensuring a premium experience for both your staff and customers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((m, i) => {
              const IconComp = m.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="inline-flex rounded-xl bg-emerald-500/10 p-3.5 text-primary">
                      <IconComp className="h-6 w-6" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground">{m.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-border/60">
                    <ul className="grid grid-cols-2 gap-2 text-[11px] sm:text-xs font-medium text-foreground/80">
                      {m.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Workflow Showcase Visual Mock */}
        <div className="rounded-3xl border border-border bg-card/60 p-8 mb-24 shadow-sm backdrop-blur-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 -z-10" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wide">
                Unified Workflow
              </span>
              <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl text-foreground">
                How Rozx Connects Your Operations
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Most platforms operate in silos. In Rozx, customer bookings immediately update staff schedules, trigger SMS reminders, compute checkout invoices, assign loyalty credits, and sync real-time revenue analytics.
              </p>
              
              <div className="space-y-3.5 text-xs text-foreground/85">
                <div className="flex items-center gap-2.5">
                  <div className="rounded-full bg-emerald-500/15 p-1 text-primary"><Check className="h-3.5 w-3.5" /></div>
                  <span>100% cloud-hosted infrastructure</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="rounded-full bg-emerald-500/15 p-1 text-primary"><Check className="h-3.5 w-3.5" /></div>
                  <span>Automated notifications via Official WhatsApp API</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="rounded-full bg-emerald-500/15 p-1 text-primary"><Check className="h-3.5 w-3.5" /></div>
                  <span>Continuous backup & secure SSL delivery</span>
                </div>
              </div>
            </div>

            {/* Interactive workflow visual block */}
            <div className="lg:col-span-7 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-border/60 bg-background/80 p-4 shadow-sm space-y-2 text-left">
                <div className="h-7 w-7 rounded-lg bg-emerald-500/15 flex items-center justify-center text-primary"><Globe className="h-4 w-4" /></div>
                <h4 className="text-xs font-bold text-foreground">1. Online Booking</h4>
                <p className="text-[10px] text-muted-foreground leading-snug">Client selects a service and time slot on your custom website.</p>
              </div>
              <div className="rounded-xl border border-primary/50 bg-background p-4 shadow-md space-y-2 text-left relative ring-1 ring-primary/20">
                <div className="absolute -top-1.5 -right-1.5 rounded-full bg-emerald-500 h-3 w-3 animate-ping" />
                <div className="h-7 w-7 rounded-lg bg-emerald-500/15 flex items-center justify-center text-primary"><Calendar className="h-4 w-4" /></div>
                <h4 className="text-xs font-bold text-foreground">2. Calendar Sync</h4>
                <p className="text-[10px] text-muted-foreground leading-snug">Staff schedules and slots update dynamically. WhatsApp reminder is dispatched.</p>
              </div>
              <div className="rounded-xl border border-border/60 bg-background/80 p-4 shadow-sm space-y-2 text-left">
                <div className="h-7 w-7 rounded-lg bg-emerald-500/15 flex items-center justify-center text-primary"><CreditCard className="h-4 w-4" /></div>
                <h4 className="text-xs font-bold text-foreground">3. Checkout POS</h4>
                <p className="text-[10px] text-muted-foreground leading-snug">Service checkout computes commissions, accepts payments, and assigns loyalty points.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Infrastructure details */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Built for Performance & Scale</h2>
            <p className="text-sm text-muted-foreground">Premium architecture that gives your business reliability, security, and velocity.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="border border-border/80 bg-card rounded-xl p-5 shadow-sm space-y-3 text-left">
                  <div className="text-primary rounded-lg bg-primary/10 p-2.5 w-fit">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-bold text-foreground">{c.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA */}
        <div className="rounded-3xl border border-border bg-muted/20 p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-3">Experience Rozx firsthand</h3>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-6">Create your account in under 5 minutes and see how a unified operating system changes your business.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/start-trial">
              <Button variant="premium" className="font-bold text-sm">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/book-demo">
              <Button variant="outline" className="font-bold text-sm bg-background">
                Speak with our Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Inline helper for checkmark
function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      stroke="currentColor"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}
