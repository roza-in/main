"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { featureItems } from "@/config/navigation";

export function FeaturesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } },
  };

  return (
    <section id="features" className="py-20 md:py-24 bg-surface-1 border-y border-border/40 relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute top-[20%] left-[-10%] -z-10 h-75 w-75 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className="max-w-2xl text-left space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
            Modular Capabilities
          </span>
          <h2 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl">
            Everything your operations require.
          </h2>
          <p className="text-body text-muted-foreground leading-relaxed">
            Consolidate your client portal, custom website, booking link, staff logs, and GST billing under a single, fast dashboard.
          </p>
        </div>

        {/* Grid Container with Layout Contrast */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-6 gap-5 items-stretch"
        >
          {featureItems.map((item) => {
            const IconComponent = item.icon;
            const isFeatured = item.label === "Appointments" || item.label === "Website Builder";

            return (
              <motion.div
                key={item.label}
                variants={cardVariants}
                className={`group relative rounded-xl border border-border bg-card p-6 shadow-xs transition-all duration-200 hover:border-primary/50 hover:shadow-sm flex flex-col justify-between overflow-hidden ${
                  isFeatured 
                    ? "md:col-span-3 min-h-65 bg-linear-to-tr from-surface-1 via-card to-card" 
                    : "md:col-span-2 min-h-55"
                }`}
              >
                <div className="relative z-10 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Icon Box */}
                    {IconComponent && (
                      <div className="inline-flex rounded-lg bg-primary/10 p-2.5 text-primary transition-transform duration-200 group-hover:scale-105">
                        <IconComponent className="h-5 w-5" />
                      </div>
                    )}

                    {/* Content */}
                    <div className="space-y-1.5">
                      <h3 className="text-heading-3 text-base sm:text-lg flex items-center gap-1.5 leading-snug font-bold">
                        {item.label}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-[34ch]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Micro Visuals for Featured Cards */}
                  {isFeatured && item.label === "Appointments" && (
                    <div className="hidden sm:block mt-3 border border-border/60 rounded-lg p-2 bg-background/50 text-[10px] space-y-1 font-mono">
                      <div className="flex justify-between text-muted-foreground border-b border-border/40 pb-1">
                        <span>Calendar Slots</span>
                        <span className="text-primary">Real-Time</span>
                      </div>
                      <div className="flex justify-between items-center bg-primary/5 px-2 py-1 rounded text-primary">
                        <span>10:30 AM — Rahul S.</span>
                        <span className="font-bold">CONFIRMED</span>
                      </div>
                    </div>
                  )}

                  {isFeatured && item.label === "Website Builder" && (
                    <div className="hidden sm:block mt-3 border border-border/60 rounded-lg p-2 bg-background/50 text-[10px] space-y-1 font-mono text-muted-foreground">
                      <div className="flex justify-between text-foreground">
                        <span>Domain: <span className="text-primary font-bold">yourbrand.com</span></span>
                        <span className="text-emerald-500 font-bold">SSL Active</span>
                      </div>
                      <div>&gt; Custom theme &amp; booking portal live</div>
                    </div>
                  )}

                  {/* Micro Visuals for Standard Cards */}
                  {!isFeatured && item.label === "Customer CRM" && (
                    <div className="hidden sm:flex gap-1.5 overflow-hidden mt-3">
                      <span className="text-[9px] font-mono px-2 py-0.5 border border-border/40 rounded bg-background/45 text-muted-foreground/90">Priya S.</span>
                      <span className="text-[9px] font-mono px-2 py-0.5 border border-border/40 rounded bg-background/45 text-muted-foreground/90">Amit K.</span>
                      <span className="text-[9px] font-mono px-2 py-0.5 border border-border/40 rounded bg-background/45 text-muted-foreground/90">Sunita R.</span>
                    </div>
                  )}

                  {!isFeatured && item.label === "Payments & Billing" && (
                    <div className="hidden sm:flex items-center justify-between border border-border/45 rounded p-1.5 bg-background/45 text-[9px] font-mono mt-3">
                      <span className="text-muted-foreground/90">Invoice #4802 (A4 / Thermal)</span>
                      <span className="font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded text-[8px]">GST PAID</span>
                    </div>
                  )}

                  {!isFeatured && item.label === "Marketing" && (
                    <div className="hidden sm:flex items-center justify-between border border-border/45 rounded p-1.5 bg-background/45 text-[9px] font-mono mt-3">
                      <span className="text-muted-foreground/90">WhatsApp Broadcast</span>
                      <span className="text-primary font-bold bg-primary/10 px-1.5 py-0.5 rounded text-[8px]">SENT</span>
                    </div>
                  )}

                  {!isFeatured && item.label === "Memberships & Packages" && (
                    <div className="hidden sm:flex items-center gap-2 mt-3">
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary font-bold">Monthly Pass</span>
                      <span className="text-[9px] font-mono text-muted-foreground/90">3 sessions left</span>
                    </div>
                  )}

                  {!isFeatured && item.label === "Analytics & Reporting" && (
                    <div className="hidden sm:flex items-center justify-between border border-border/45 rounded p-1.5 bg-background/45 text-[9px] font-mono mt-3">
                      <span className="text-muted-foreground/90">Owner Overview</span>
                      <span className="text-foreground font-bold">Daily Export</span>
                    </div>
                  )}

                  {/* Link action */}
                  <div className="pt-4 mt-auto">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:underline"
                    >
                      Read capabilities
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
