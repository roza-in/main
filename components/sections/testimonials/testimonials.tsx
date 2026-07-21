"use client";

import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Zap, Globe, Receipt, RefreshCw, Layers } from "lucide-react";

export interface SanityTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials?: string;
}

interface TestimonialsProps {
  sanityTestimonials?: SanityTestimonial[];
}

export function Testimonials({ sanityTestimonials }: TestimonialsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 90, damping: 15 } },
  };

  const pillars = [
    {
      icon: ShieldCheck,
      title: "0% Booking Commissions",
      desc: "Unlike aggregators that charge per-booking fees or take cuts of your transactions, Rozx operates on a flat, predictable subscription model.",
    },
    {
      icon: Globe,
      title: "Custom Domain Website",
      desc: "Get a dedicated, SEO-optimized booking portal hosted directly on your custom domain name with automatic SSL.",
    },
    {
      icon: Receipt,
      title: "GST-Compliant Invoicing",
      desc: "Generate professional A4 PDF invoices or print directly to 80mm/58mm thermal receipt printers with itemized CGST and SGST.",
    },
    {
      icon: Zap,
      title: "Real-Time Conflict Detection",
      desc: "Our booking availability engine factors in staff shift hours, break slots, service buffer times, and room allocations automatically.",
    },
    {
      icon: Layers,
      title: "All-in-One Operations",
      desc: "Consolidate appointment scheduling, staff commissions, customer CRM history, WhatsApp notifications, and billing in one dashboard.",
    },
    {
      icon: RefreshCw,
      title: "Assisted Onboarding",
      desc: "Our team helps you configure your service catalog, staff rosters, and initial settings to get your business up and running smoothly.",
    },
  ];

  const hasRealTestimonials = sanityTestimonials && sanityTestimonials.length > 0;

  return (
    <section className="py-20 md:py-24 bg-surface-1 border-t border-border/40 relative overflow-hidden">
      {/* Decorative background grid element */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[100%_48px] opacity-[0.07]" />

      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className="max-w-2xl text-left space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
            {hasRealTestimonials ? "Customer Reviews" : "Built for Service Teams"}
          </span>
          <h2 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl">
            {hasRealTestimonials
              ? "What business owners say."
              : "Why salons, spas & clinics choose Rozx."}
          </h2>
          <p className="text-body text-muted-foreground leading-relaxed">
            {hasRealTestimonials
              ? "Hear directly from salon owners, aesthetic clinics, and wellness retreats using Rozx."
              : "Designed from the ground up for Indian service businesses — bringing clarity, speed, and ownership back to your operations."}
          </p>
        </div>

        {/* If Real Testimonials are passed from Sanity */}
        {hasRealTestimonials ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
          >
            {sanityTestimonials.map((t, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="rounded-xl border border-border bg-card p-6 shadow-xs hover:shadow-sm hover:border-primary/40 transition-all duration-200 flex flex-col justify-between"
              >
                <p className="text-[13px] sm:text-sm text-foreground/90 leading-relaxed font-normal">
                  &quot;{t.quote}&quot;
                </p>
                <div className="mt-6 pt-5 border-t border-border/60 flex items-center gap-3">
                  <div className="h-8.5 w-8.5 rounded-full bg-surface-3 border border-border/60 text-muted-foreground flex items-center justify-center font-bold text-xs select-none">
                    {t.initials || t.author.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="text-left space-y-0.5">
                    <h4 className="text-xs font-bold text-foreground leading-none">
                      {t.author}
                    </h4>
                    <p className="text-[10px] text-muted-foreground leading-none">
                      {t.role}, <span className="font-semibold text-foreground/70">{t.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Product Value Pillars Grid */
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
          >
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className="rounded-xl border border-border bg-card p-6 shadow-xs hover:shadow-sm hover:border-primary/40 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="inline-flex rounded-lg bg-primary/10 p-2.5 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-heading-3 text-base sm:text-lg font-bold text-foreground">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
