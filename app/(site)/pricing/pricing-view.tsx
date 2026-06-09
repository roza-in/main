"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, Minus, Info } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

interface ComparisonRow {
  feature: string;
  starter: boolean | string;
  growth: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
  category: string;
}

const comparisonTable: ComparisonRow[] = [
  // Core Modules
  { feature: "Online Appointment Booking", starter: true, growth: true, professional: true, enterprise: true, category: "Core Features" },
  { feature: "Live Calendar & Scheduling", starter: true, growth: true, professional: true, enterprise: true, category: "Core Features" },
  { feature: "Walk-ins & Waitlists", starter: true, growth: true, professional: true, enterprise: true, category: "Core Features" },
  { feature: "Customer CRM Profiles", starter: "Basic", growth: "Advanced", professional: "Custom Fields", enterprise: "Full Access", category: "Core Features" },
  { feature: "Invoicing & GST Billing", starter: true, growth: true, professional: true, enterprise: true, category: "Core Features" },
  
  // Marketing & Growth
  { feature: "Email Campaigns", starter: true, growth: true, professional: true, enterprise: true, category: "Marketing & Growth" },
  { feature: "SMS Notifications & Reminders", starter: "Pay per SMS", growth: "Included Credits", professional: "Unlimited", enterprise: "Unlimited", category: "Marketing & Growth" },
  { feature: "WhatsApp Automated Reminders", starter: false, growth: true, professional: true, enterprise: true, category: "Marketing & Growth" },
  { feature: "Loyalty & Memberships Program", starter: false, growth: true, professional: true, enterprise: true, category: "Marketing & Growth" },
  { feature: "Gift Cards & Referrals", starter: false, growth: true, professional: true, enterprise: true, category: "Marketing & Growth" },
  { feature: "Workflow Marketing Automation", starter: false, growth: "Standard", professional: "Advanced", enterprise: "Custom Flow", category: "Marketing & Growth" },

  // Website & Platform
  { feature: "Custom Booking Website", starter: "Rozx Domain", growth: "Custom Domain", professional: "Custom Domain", enterprise: "White Label", category: "Website & Platform" },
  { feature: "Staff Accounts", starter: "Up to 10", growth: "Up to 30", professional: "Unlimited", enterprise: "Unlimited", category: "Website & Platform" },
  { feature: "Locations / Branches", starter: "1 Branch", growth: "Up to 3 Branches", professional: "Up to 10 Branches", enterprise: "Unlimited", category: "Website & Platform" },
  { feature: "Inventory & Stock Tracking", starter: false, growth: true, professional: true, enterprise: true, category: "Website & Platform" },
  { feature: "Analytics & Reports", starter: "Basic Reports", growth: "Detailed Dashboards", professional: "Advanced AI Forecast", enterprise: "Custom BI Sync", category: "Website & Platform" },
  { feature: "AI Assistant Copilot", starter: false, growth: false, professional: true, enterprise: true, category: "Website & Platform" },
  { feature: "Open API Access", starter: false, growth: false, professional: true, enterprise: true, category: "Website & Platform" },

  // Support & Security
  { feature: "Support Channels", starter: "Email Support", growth: "Priority Support", professional: "Dedicated Account Mgr", enterprise: "24/7 SLA Support", category: "Support & Security" },
  { feature: "Role-Based Access (Staff)", starter: true, growth: true, professional: true, enterprise: true, category: "Support & Security" },
  { feature: "Data Encryption & Daily Backups", starter: true, growth: true, professional: true, enterprise: true, category: "Support & Security" },
];

const pricingFaqs = [
  {
    q: "Can I change my plan or cancel my subscription later?",
    a: "Yes. You can upgrade, downgrade, or cancel your subscription at any time directly from your billing settings. If you upgrade, the change is applied instantly with prorated billing. If you cancel, your account remains active until the end of your current billing period."
  },
  {
    q: "What payment gateways are supported for POS and online payments?",
    a: "Rozx integrates with leading payment networks in India and globally, including Razorpay, Paytm, Cashfree, and Stripe. You can easily link your own accounts, allowing payments to settle directly into your bank account with standard settlement cycles."
  },
  {
    q: "Do I need to pay any onboarding or setup fees?",
    a: "Absolutely not. There are no setup fees or onboarding charges. We also provide free migration assistance to help import your data from your previous software to Rozx, so your business operations don't miss a beat."
  },
  {
    q: "Are there any volume limits on appointment bookings?",
    a: "None. All our plans include unlimited appointment bookings, walk-ins, and calendar scheduling. There are no charges or limits on the number of clients you can serve."
  }
];

export function PricingView() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  const { plans, currencySymbol, annualDiscountPercent } = siteConfig.pricing;

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const renderValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-4.5 w-4.5 text-primary mx-auto shrink-0" />
      ) : (
        <Minus className="h-4.5 w-4.5 text-muted-foreground/30 mx-auto shrink-0" />
      );
    }
    return <span className="text-xs font-semibold text-foreground/80">{value}</span>;
  };

  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-background">
      {/* Subtle line decoration */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:100%_48px] opacity-10" />
      
      <div className="container max-w-6xl">
        {/* Title */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
            Pricing Plans
          </span>
          <h1 className="text-display text-4xl sm:text-5xl md:text-6xl tracking-tight">
            Compare plans & pricing.
          </h1>
          <p className="text-body text-muted-foreground leading-relaxed">
            Choose the tier built to match your operational size. Every plan includes a 14-day free trial with zero upfront credit card details.
          </p>

          {/* Switcher Toggle */}
          <div className="flex items-center gap-3 pt-2">
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
              <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent">
                Save {annualDiscountPercent}%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch mb-20">
          {plans.map((plan) => {
            const hasPrice = plan.monthlyPrice !== null;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const displayPrice = hasPrice ? `${currencySymbol}${price?.toLocaleString("en-IN")}` : "Custom";
            const billingPeriod = isAnnual ? "/yr" : "/mo";

            return (
              <div
                key={plan.id}
                className={`relative rounded-xl border p-5 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "border-primary bg-surface-1 shadow-md scale-[1.02] md:scale-[1.03] z-10"
                    : "border-border bg-card hover:border-primary/40 hover:shadow-xs"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary-foreground">
                    Recommended Choice
                  </span>
                )}

                <div>
                  <div className="mb-4 space-y-1">
                    <h2 className="text-heading-3 text-lg font-bold text-foreground">{plan.name}</h2>
                    <p className="text-xs text-muted-foreground leading-normal">{plan.headline}</p>
                  </div>

                  <div className="mb-5 flex items-baseline gap-1.5">
                    <span className="text-heading-2 text-2xl font-extrabold tracking-tight text-foreground">{displayPrice}</span>
                    {hasPrice && (
                      <span className="text-[10px] text-muted-foreground font-semibold">{billingPeriod}</span>
                    )}
                  </div>

                  <hr className="border-border/60 mb-5" />

                  <ul className="space-y-2.5 mb-6">
                    {plan.features.slice(0, 7).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-foreground/90">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={
                    hasPrice
                      ? `/start-trial?plan=${plan.id}&billing=${isAnnual ? "annual" : "monthly"}`
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

        {/* Feature Comparison Table */}
        <div className="mb-24">
          <div className="text-left max-w-2xl mb-8 space-y-2">
            <h2 className="text-heading-2 text-xl sm:text-2xl text-foreground">Detailed feature breakdown</h2>
            <p className="text-xs sm:text-sm text-muted-foreground">Compare capabilities across all operational modules to find your optimal setup.</p>
          </div>

          <div className="rounded-xl border border-border bg-card shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-xs sm:text-sm min-w-[640px]">
                <thead>
                  <tr className="border-b border-border bg-surface-2">
                    <th className="p-3.5 font-bold text-foreground w-[32%]">Feature Capability</th>
                    <th className="p-3.5 font-semibold text-foreground text-center">Starter</th>
                    <th className="p-3.5 font-bold text-primary text-center bg-primary/2">Growth</th>
                    <th className="p-3.5 font-semibold text-foreground text-center">Professional</th>
                    <th className="p-3.5 font-semibold text-foreground text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from(new Set(comparisonTable.map((row) => row.category))).map((category) => (
                    <React.Fragment key={category}>
                      <tr className="bg-surface-1 border-y border-border/60">
                        <td colSpan={5} className="p-2.5 font-bold text-[10px] uppercase tracking-widest text-primary">
                          {category}
                        </td>
                      </tr>
                      {comparisonTable
                        .filter((row) => row.category === category)
                        .map((row, idx) => (
                          <tr
                            key={idx}
                            className="border-b border-border/50 hover:bg-surface-2 transition-colors"
                          >
                            <td className="p-3.5 font-medium text-foreground">{row.feature}</td>
                            <td className="p-3.5 text-center">{renderValue(row.starter)}</td>
                            <td className="p-3.5 text-center bg-primary/2">{renderValue(row.growth)}</td>
                            <td className="p-3.5 text-center">{renderValue(row.professional)}</td>
                            <td className="p-3.5 text-center">{renderValue(row.enterprise)}</td>
                          </tr>
                        ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pricing FAQs */}
        <div className="max-w-3xl mb-20 text-left">
          <div className="space-y-2 mb-8">
            <h2 className="text-heading-2 text-xl sm:text-2xl text-foreground">Frequently asked billing questions</h2>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">Quick answers to common inquiries about integration procedures, compliance and setups.</p>
          </div>

          <div className="space-y-3">
            {pricingFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card overflow-hidden shadow-xs transition-colors hover:border-primary/40"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between gap-4 p-4 text-left font-semibold text-foreground focus:outline-none text-xs sm:text-sm"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-border/40 p-4 text-xs text-muted-foreground leading-relaxed bg-surface-1">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Help Note */}
        <div className="rounded-xl border border-border bg-surface-1 p-5 flex flex-col md:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-primary/10 p-2 text-primary shrink-0">
              <Info className="h-4.5 w-4.5" />
            </div>
            <div>
              <h4 className="font-bold text-foreground text-xs sm:text-sm">Need guidance selecting a package?</h4>
              <p className="text-[11px] text-muted-foreground">Our operations team will review your branch scale and catalog to recommend the ideal integration path.</p>
            </div>
          </div>
          <Link href="/contact?subject=help_picking_plan" className="w-full md:w-auto shrink-0">
            <Button variant="outline" className="w-full md:w-auto font-bold text-xs h-8 px-4">
              Speak with an advisor
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
