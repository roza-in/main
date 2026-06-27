"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/config/routes";
import { Button } from "@/components/ui/button";

export function PricingPreview() {
  const [isAnnual, setIsAnnual] = useState(false);
  const { plans, currencySymbol, annualDiscountPercent } = siteConfig.pricing;

  return (
    <section id="pricing" className="py-20 bg-background relative overflow-hidden">
      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className="max-w-3xl space-y-5 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
            Subscription Tiers
          </span>
          <h2 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl">
            Predictable, transparent plans.
          </h2>
          <p className="text-body text-muted-foreground">
            Start with a 14-day free trial. No setup fee, no hidden commission cuts. Save {annualDiscountPercent}% when billed annually.
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
              <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent">
                Save {annualDiscountPercent}%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {plans.map((plan) => {
            const hasPrice = plan.monthlyPrice !== null;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const displayPrice = hasPrice ? `${currencySymbol}${price?.toLocaleString("en-IN")}` : "Custom";
            const billingPeriod = isAnnual ? "/yr" : "/mo";

            return (
              <div
                key={plan.id}
                className={`relative rounded-xl border p-5 flex flex-col justify-between transition-all duration-200 ${
                  plan.popular
                    ? "border-primary bg-surface-1 shadow-md ring-1 ring-primary/20 z-10"
                    : "border-border bg-card hover:border-primary/40 hover:shadow-xs"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary-foreground">
                    Recommended Choice
                  </span>
                )}

                <div>
                  {/* Plan Name & Headline */}
                  <div className="mb-4 space-y-1">
                    <h3 className="text-heading-3 text-lg font-bold text-foreground">{plan.name}</h3>
                    <p className="text-xs text-muted-foreground leading-normal">{plan.headline}</p>
                  </div>

                  {/* Pricing Display */}
                  <div className="mb-5 flex items-baseline gap-1.5">
                    <span className="text-heading-2 text-2xl font-extrabold tracking-tight text-foreground">{displayPrice}</span>
                    {hasPrice && (
                      <span className="text-[10px] text-muted-foreground font-semibold">{billingPeriod}</span>
                    )}
                  </div>

                  {/* Divider */}
                  <hr className="border-border/60 mb-5" />

                  {/* Features List */}
                  <ul className="space-y-2.5 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-foreground/90">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call To Action button */}
                <Link
                  href={
                    hasPrice
                      ? `${ROUTES.app.register}?plan=${plan.id}&billing=${isAnnual ? "annual" : "monthly"}`
                      : "/contact?purpose=enterprise"
                  }
                  className="block w-full mt-auto"
                >
                  <Button
                    variant={plan.popular ? "premium" : "outline"}
                    className="w-full justify-center font-bold text-xs h-9"
                  >
                    {hasPrice ? "Start Free Trial" : "Contact Sales"}
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
        
        {/* Full pricing page prompt */}
        <div className="mt-10 text-left">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 font-bold text-xs text-primary hover:underline"
          >
            Compare detailed plan capabilities
            <ArrowRight className="h-3.5 w-3.5 transition-transform hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
