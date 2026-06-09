"use client";

import React from "react";
import Link from "next/link";
import { Compass, Eye, Heart, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Compass,
    title: "Client-Centric Design",
    desc: "Every detail in our software is designed to save service teams administrative hours and delight their end clients."
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    desc: "We charge predictable subscriptions with absolutely zero hidden commissions. Your business data belongs to you, always."
  },
  {
    icon: Heart,
    title: "Craftsmanship & Simplicity",
    desc: "We believe business software should feel premium, lightweight, and incredibly fast. Zero clutter, 100% purpose."
  },
  {
    icon: Users,
    title: "Collaboration & Support",
    desc: "We stand side-by-side with salon and clinic owners, providing free migration and priority onboarding at every step."
  }
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:100%_48px] opacity-10" />

      <div className="container max-w-5xl">
        {/* Page Header */}
        <div className="text-left max-w-3xl space-y-4 mb-20">
          <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wide inline-block">
            Our company
          </span>
          <h1 className="text-display text-4xl sm:text-5xl md:text-6xl tracking-tight">
            About Rozx.
          </h1>
          <p className="text-body text-muted-foreground leading-relaxed">
            We build the service business operating system that simplifies appointments, customer relationships, and checkouts globally.
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 items-stretch">
          <div className="rounded-xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/45 transition-all duration-200">
            <div className="space-y-4 text-left">
              <div className="inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="text-heading-3 text-lg font-bold text-foreground">Our Mission</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                To empower client-focused service businesses with modern, premium software tools that remove operational friction. We believe business owners should spend less time managing calendars and spreadsheets, and more time crafting experiences for their customers.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/45 transition-all duration-200">
            <div className="space-y-4 text-left">
              <div className="inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="text-heading-3 text-lg font-bold text-foreground">Our Vision</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                To become the universal backbone of the service economy. Whether it is a local barber shop, a growing wellness spa chain, or an aesthetic healthcare clinic, we envision a future where business owners run their entire booking, checkout, and marketing cycles from a single dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-left max-w-2xl mb-12 space-y-2">
            <h2 className="text-heading-2 text-xl sm:text-2xl text-foreground">Our core values</h2>
            <p className="text-xs sm:text-sm text-muted-foreground">The guidelines that define our product design, customer support, and team operations.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="border border-border bg-card rounded-xl p-5 shadow-xs space-y-3.5 text-left hover:border-primary/45 transition-colors">
                  <div className="text-primary rounded-lg bg-primary/10 p-2 w-fit">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-foreground leading-none">{v.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Careers Section */}
        <div id="careers" className="rounded-xl border border-border bg-surface-1 p-6 sm:p-8 max-w-3xl relative overflow-hidden text-left shadow-xs">
          <div className="space-y-4 max-w-2xl">
            <h3 className="text-heading-3 text-lg font-bold text-foreground">Join the Rozx team</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We are constantly seeking creative designers, software engineers, and product builders passionate about simplifying operations for local service businesses.
            </p>
            <div className="pt-2">
              <Link href="/careers">
                <Button variant="premium" className="font-bold text-xs h-8.5 px-4.5">
                  Explore Open Positions
                </Button>
              </Link>
            </div>
            <p className="text-[10px] text-muted-foreground leading-none">Currently recruiting for remote-first product, engineering, and sales roles.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
