"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { ROUTES } from "@/config/routes";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_var(--color-primary-100)_0%,_transparent_50%)] opacity-80 dark:opacity-40" />
      
      <div className="container">
        <div className="relative rounded-3xl border border-primary/20 bg-gradient-to-br from-emerald-950 to-teal-900 px-6 py-12 text-center text-white shadow-2xl overflow-hidden md:py-20 md:px-12">
          {/* Subtle grid in container */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-teal-500/10 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-balance leading-[1.15]">
              Ready to upgrade your service operations?
            </h3>
            
            <p className="text-emerald-100/85 text-base sm:text-lg max-w-2xl mx-auto text-balance leading-relaxed">
              Join thousands of salons, spas, and aesthetic clinics using Rozx to run their business
              smoother, reduce administrative hours, and double client retention.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link href={ROUTES.app.register} className="w-full sm:w-auto">
                <Button variant="premium" size="lg" className="w-full sm:w-auto font-bold bg-white text-emerald-950 hover:bg-emerald-50 shadow-lg shadow-white/5">
                  Start Your 14-Day Free Trial
                </Button>
              </Link>
              <Link href="/book-demo" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto font-bold text-white border-white/20 hover:bg-white/10 hover:text-white bg-transparent">
                  Book a Live Demo
                </Button>
              </Link>
            </div>

            {/* Benefit Bullets */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3.5 text-xs sm:text-sm text-emerald-200/80 pt-4">
              <span className="flex items-center gap-1.5">
                <Check className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                14-day trial
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                No setup fee
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                Cancel anytime
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                Free migration assistance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
