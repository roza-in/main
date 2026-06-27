"use client";

import Link from "next/link";
import Image from "next/image";
import { Play, Check, Calendar, Users, IndianRupee, Shield, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ROUTES } from "@/config/routes";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-15 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Dynamic Glowing background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Soft glowing ambient spots */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[130px] dark:bg-primary/5" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[130px] dark:bg-primary/5" />
        {/* Diagonal glowing beams */}
        <div className="absolute top-[20%] left-[-20%] w-[50%] h-[60%] bg-gradient-to-tr from-primary/15 via-primary/5 to-transparent blur-[120px] rotate-[15deg] opacity-75 dark:opacity-40" />
        <div className="absolute top-[20%] right-[-20%] w-[50%] h-[60%] bg-gradient-to-tl from-primary/15 via-primary/5 to-transparent blur-[120px] rotate-[-15deg] opacity-75 dark:opacity-40" />
      </div>

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
          <Link href={ROUTES.app.register} className="w-full sm:w-auto">
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

      </div>
    </section>
  );
}
