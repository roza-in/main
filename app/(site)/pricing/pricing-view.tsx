"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/config/routes";
import { Button } from "@/components/ui/button";

const pricingFaqs = [
  {
    q: "Can I upgrade or downgrade my plan later?",
    a: "Yes. You can upgrade from Starter to Growth or Professional at any time as your business grows. Billing will automatically prorate."
  },
  {
    q: "How does payment processing work?",
    a: "Rozx integrates directly with Razorpay for online booking prepayments and POS checkouts. Payments settle directly into your bank account with 0% commission markup from Rozx."
  },
  {
    q: "Do I need to pay any setup or onboarding fees?",
    a: "No. There are no setup fees or hidden onboarding charges. Our team provides assisted setup to help you upload your service catalog and staff rosters."
  },
  {
    q: "Are there any hidden booking fees?",
    a: "No. All plans include 0% booking commission. You keep 100% of your earnings from client appointments."
  }
];

export function PricingView() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  const { plans, currencySymbol } = siteConfig.pricing;

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="relative overflow-hidden bg-background">
      {/* Background ambient spots & grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[100%_48px] opacity-10" />
      <div className="absolute top-0 left-[-15%] w-[60%] h-[60%] bg-radial from-primary/10 via-primary/5 to-transparent blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute top-[20%] right-[-15%] w-[60%] h-[60%] bg-radial from-primary/10 via-primary/5 to-transparent blur-[140px] -z-10 pointer-events-none" />
      
      {/* Hero Section */}
      <div className="pt-28 pb-16 relative overflow-hidden">
        <div className="container max-w-4xl text-center space-y-6">
          <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider inline-block">
            Transparent Pricing
          </span>
          <h1 className="text-display text-4xl sm:text-5xl md:text-6xl max-w-4xl mx-auto tracking-tight leading-none">
            Simple, predictable <span className="text-primary font-bold">plans</span>.
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose the perfect plan for your salon, spa, or clinic. No commission cuts, no hidden fees.
          </p>

          {/* Switcher Toggle */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <span className={`text-xs font-bold tracking-wide uppercase ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative h-5 w-9 rounded-full bg-primary p-0.5 transition-colors duration-250 focus:outline-none focus:ring-1 focus:ring-primary"
              aria-label="Toggle billing frequency"
            >
              <div
                className={`h-4 w-4 rounded-full bg-background transition-transform duration-250 ${
                  isAnnual ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-xs font-bold tracking-wide uppercase flex items-center gap-1.5 ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
              Annual billing
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-primary">
                Save up to 20%
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl pb-24">
        {/* 3-Column Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-20">
          {plans.map((p) => {
            const price = isAnnual ? p.annualPrice : p.monthlyPrice;
            const billingPeriod = isAnnual ? "/year" : "/month";
            const isFeatured = p.id === "growth";

            return (
              <div
                key={p.id}
                className={`rounded-2xl border p-8 flex flex-col justify-between relative transition-all duration-200 ${
                  isFeatured
                    ? "border-primary/60 bg-surface-1 shadow-xl ring-1 ring-primary/30"
                    : "border-border/60 bg-card/60 hover:border-border"
                }`}
              >
                {p.badge && (
                  <span className="absolute -top-3.5 left-8 rounded-full bg-primary px-3.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                    {p.badge}
                  </span>
                )}

                <div>
                  <div className="mb-2">
                    <h2 className="text-heading-2 text-2xl font-bold text-foreground">{p.name}</h2>
                    <p className="text-xs text-muted-foreground mt-1 min-h-8">{p.headline}</p>
                  </div>

                  <div className="flex items-baseline gap-1 py-4 border-y border-border/40 my-4">
                    <span className="text-heading-1 text-4xl font-extrabold tracking-tight text-foreground">
                      {currencySymbol}{price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-muted-foreground font-semibold">{billingPeriod}</span>
                  </div>

                  {/* Limits Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    <span className="text-[11px] font-medium bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-md">
                      {p.limits.branches}
                    </span>
                    <span className="text-[11px] font-medium bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-md">
                      {p.limits.staff}
                    </span>
                    <span className="text-[11px] font-medium bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-md">
                      {p.limits.appointments}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-3">
                      Features Included:
                    </span>
                    {p.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-foreground/90">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/40">
                  <Link href={`${ROUTES.app.register}?plan=${p.id}&billing=${isAnnual ? "annual" : "monthly"}`}>
                    <Button
                      variant={isFeatured ? "premium" : "outline"}
                      size="lg"
                      className="w-full justify-center font-bold text-sm h-11"
                    >
                      Get Started with {p.name}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing FAQ Section */}
        <div className="max-w-3xl mx-auto space-y-6 pt-10 border-t border-border/60">
          <h2 className="text-heading-2 text-2xl font-bold text-center mb-8">
            Frequently Asked Pricing Questions
          </h2>
          <div className="space-y-4">
            {pricingFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-border/60 bg-card overflow-hidden transition-colors duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm hover:text-primary transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Enterprise / Need Custom Help CTA */}
        <div className="mt-16 rounded-2xl bg-surface-1 border border-border/60 p-8 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-heading-3 text-xl font-bold text-foreground">Need a custom plan for 10+ locations?</h3>
          <p className="text-xs text-muted-foreground max-w-lg mx-auto">
            We provide multi-chain enterprise deployments with dedicated database isolation, custom ERP integrations, and SLA guarantees.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <Button variant="outline" className="font-semibold text-xs h-10 px-6">
                Contact Enterprise Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
