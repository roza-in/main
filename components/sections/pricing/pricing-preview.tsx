"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/config/routes";
import { Button } from "@/components/ui/button";

export function PricingPreview() {
  const [isAnnual, setIsAnnual] = useState(false);
  const { plans, currencySymbol } = siteConfig.pricing;

  return (
    <section id="pricing" className="py-20 bg-background relative overflow-hidden">
      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className="max-w-2xl space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
            Transparent Pricing
          </span>
          <h2 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl">
            Pick the right plan for your business
          </h2>
          <p className="text-body text-muted-foreground leading-relaxed">
            No hidden setup fees. No commission cuts on your bookings. Save up to ₹5,989 when billed annually.
          </p>

          {/* Billing Switcher Toggle */}
          <div className="flex items-center gap-3 pt-2">
            <span className={`text-xs font-bold tracking-wide uppercase ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative h-5 w-9 rounded-full bg-primary p-0.5 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-primary"
              aria-label="Toggle billing frequency"
            >
              <div
                className={`h-4 w-4 rounded-full bg-background transition-transform duration-200 ${
                  isAnnual ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-xs font-bold tracking-wide uppercase flex items-center gap-1.5 ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
              Annual
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-primary">
                Save up to 20%
              </span>
            </span>
          </div>
        </div>

        {/* 3-Column Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => {
            const price = isAnnual ? p.annualPrice : p.monthlyPrice;
            const billingPeriod = isAnnual ? "/year" : "/month";
            const isFeatured = p.id === "growth";

            return (
              <div
                key={p.id}
                className={`rounded-2xl border p-6 flex flex-col justify-between relative transition-all duration-200 ${
                  isFeatured
                    ? "border-primary/60 bg-surface-1 shadow-lg ring-1 ring-primary/30"
                    : "border-border/60 bg-card/60 hover:border-border"
                }`}
              >
                {p.badge && (
                  <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                    {p.badge}
                  </span>
                )}

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-heading-2 text-xl font-bold text-foreground">{p.name}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4 min-h-8">{p.headline}</p>

                  <div className="flex items-baseline gap-1 py-3 border-y border-border/40 mb-4">
                    <span className="text-heading-1 text-3xl font-extrabold tracking-tight text-foreground">
                      {currencySymbol}{price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-muted-foreground font-semibold">{billingPeriod}</span>
                  </div>

                  {/* Limits Badge List */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    <span className="text-[10px] font-medium bg-secondary text-secondary-foreground px-2 py-0.5 rounded-md">
                      {p.limits.branches}
                    </span>
                    <span className="text-[10px] font-medium bg-secondary text-secondary-foreground px-2 py-0.5 rounded-md">
                      {p.limits.staff}
                    </span>
                    <span className="text-[10px] font-medium bg-secondary text-secondary-foreground px-2 py-0.5 rounded-md">
                      {p.limits.appointments}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                      Key Features:
                    </span>
                    {p.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-foreground/90">
                        <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/40">
                  <Link href={`${ROUTES.app.register}?plan=${p.id}&billing=${isAnnual ? "annual" : "monthly"}`}>
                    <Button
                      variant={isFeatured ? "premium" : "outline"}
                      className="w-full justify-center font-bold text-xs h-10"
                    >
                      Get Started with {p.name}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to full pricing page */}
        <div className="mt-10 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 font-bold text-xs text-primary hover:underline"
          >
            <span>Compare all feature details & FAQs</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
