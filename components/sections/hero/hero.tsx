"use client";

import Link from "next/link";
import Image from "next/image";
import { Play, Check, Calendar, Users, IndianRupee, Shield, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border/40">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-15 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container relative text-center max-w-5xl">
        {/* Trust Badge / Announcement */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-1 px-3 py-1 text-xs font-semibold text-muted-foreground mb-6"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-primary" />
          Rozx 1.0 is officially live
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto tracking-tight"
        >
          Booking & billing software for <span className="text-primary font-bold">salons, spas & clinics</span>.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-5 text-body-lg text-muted-foreground max-w-2xl mx-auto max-measure"
        >
          Manage appointments, automated reminders, customer details, billing, and your custom booking website in one simple dashboard.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5"
        >
          <Link href="/start-trial" className="w-full sm:w-auto">
            <Button variant="premium" size="lg" className="w-full sm:w-auto text-sm font-semibold h-11">
              Start Free 14-Day Trial
            </Button>
          </Link>
          <Link href="/book-demo" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm font-semibold h-11 gap-2">
              <Play className="h-3.5 w-3.5 fill-current text-muted-foreground" />
              Book a live demo
            </Button>
          </Link>
        </motion.div>

        {/* Value Points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
        >
          <span className="flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-primary shrink-0" />
            No credit card details required
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-primary shrink-0" />
            14-day full access tier
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-primary shrink-0" />
            Setup in 5 minutes
          </span>
        </motion.div>

        {/* Hero Interactive App Mockup Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, type: "spring", damping: 22 }}
          className="mt-16 relative mx-auto max-w-4xl rounded-xl border border-border bg-card p-2.5 shadow-lg dark:shadow-[0_0_40px_rgba(20,184,166,0.02)]"
        >
          <div className="absolute inset-0 bg-primary/2 rounded-xl -z-10" />
          
          {/* Mockup Frame Header */}
          <div className="flex items-center justify-between border-b border-border pb-2.5 px-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
            </div>
            <div className="rounded bg-surface-2 px-12 py-0.5 text-[10px] text-muted-foreground font-mono select-none">
              app.rozx.in/dashboard
            </div>
            <div className="w-10" />
          </div>

          {/* Mockup Dashboard Content */}
          <div className="grid grid-cols-12 gap-3.5 pt-3.5 text-left font-sans select-none min-h-[280px] md:min-h-[360px]">
            {/* Sidebar Mock */}
            <div className="col-span-3 hidden md:flex flex-col gap-3.5 border-r border-border/60 pr-3.5 text-xs font-semibold text-muted-foreground">
              <div className="flex items-center font-bold text-foreground text-sm py-1">
                <Image
                  src="/logos/logo.png"
                  alt="Rozx Logo"
                  width={20}
                  height={20}
                  className="h-5 w-5 rounded object-contain"
                />
                <span className="ml-2 font-display font-bold text-xs">ROZX</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 rounded-lg bg-primary/10 text-primary px-3 py-1.5 font-bold">
                  <Calendar className="h-3.5 w-3.5" /> Calendar
                </div>
                <div className="flex items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-surface-2">
                  <Users className="h-3.5 w-3.5" /> Customers
                </div>
                <div className="flex items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-surface-2">
                  <IndianRupee className="h-3.5 w-3.5" /> Billing
                </div>
                <div className="flex items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-surface-2">
                  <Shield className="h-3.5 w-3.5" /> Settings
                </div>
              </div>
            </div>

            {/* Main Content Mock */}
            <div className="col-span-12 md:col-span-9 flex flex-col gap-4 md:pl-2">
              {/* Analytics Header Strip */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="rounded-lg border border-border/80 bg-surface-1 p-3">
                  <span className="text-[9px] uppercase font-bold text-muted-foreground tracking-wider">Today's Net</span>
                  <div className="text-lg font-bold text-foreground mt-0.5">₹14,250</div>
                  <span className="text-[9px] text-primary font-semibold">↑ 12% vs last week</span>
                </div>
                <div className="rounded-lg border border-border/80 bg-surface-1 p-3">
                  <span className="text-[9px] uppercase font-bold text-muted-foreground tracking-wider">Appointments</span>
                  <div className="text-lg font-bold text-foreground mt-0.5">18 / 24</div>
                  <span className="text-[9px] text-primary font-semibold">75% capacity fill</span>
                </div>
                <div className="rounded-lg border border-border/80 bg-surface-1 p-3">
                  <span className="text-[9px] uppercase font-bold text-muted-foreground tracking-wider">New Signups</span>
                  <div className="text-lg font-bold text-foreground mt-0.5">9</div>
                  <span className="text-[9px] text-accent font-semibold">↑ 30% weekly lift</span>
                </div>
              </div>

              {/* Schedule Layout Mock */}
              <div className="rounded-lg border border-border/80 bg-surface-1 p-3.5 flex-1">
                <div className="flex items-center justify-between border-b border-border/50 pb-2 mb-2.5">
                  <h4 className="text-[10px] font-bold text-foreground uppercase tracking-widest">Active Calendar Slots</h4>
                  <span className="text-[9px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Live view</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-lg border border-border/50 bg-card p-2.5 shadow-xs hover:border-primary/45 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="text-[10px] font-mono font-bold bg-surface-2 px-1.5 py-0.5 rounded">10:00 AM</div>
                      <div>
                        <div className="text-xs font-semibold text-foreground">Rahul Sharma</div>
                        <div className="text-[9px] text-muted-foreground leading-none">Premium Styling Session • Hair Care</div>
                      </div>
                    </div>
                    <span className="rounded bg-primary/10 px-2 py-0.5 text-[9px] font-bold text-primary">CONFIRMED</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-border/50 bg-card p-2.5 shadow-xs hover:border-primary/45 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="text-[10px] font-mono font-bold bg-surface-2 px-1.5 py-0.5 rounded">11:30 AM</div>
                      <div>
                        <div className="text-xs font-semibold text-foreground">Ananya Iyer</div>
                        <div className="text-[9px] text-muted-foreground leading-none">Aromatherapy Spa Massage • Wellness</div>
                      </div>
                    </div>
                    <span className="rounded bg-accent/10 px-2 py-0.5 text-[9px] font-bold text-accent">PENDING</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-border/50 bg-card p-2.5 shadow-xs hover:border-primary/45 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="text-[10px] font-mono font-bold bg-surface-2 px-1.5 py-0.5 rounded">01:00 PM</div>
                      <div>
                        <div className="text-xs font-semibold text-foreground">Vikram Malhotra</div>
                        <div className="text-[9px] text-muted-foreground leading-none">Grooming & Beard Styling • Classic Barber</div>
                      </div>
                    </div>
                    <span className="rounded bg-primary/10 px-2 py-0.5 text-[9px] font-bold text-primary">CONFIRMED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
