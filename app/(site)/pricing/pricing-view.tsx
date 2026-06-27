"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, Minus, Info } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/config/routes";
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
    <div className="relative overflow-hidden bg-background">
      {/* Background ambient spots & grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:100%_48px] opacity-10" />
      <div className="absolute top-0 left-[-15%] w-[60%] h-[60%] bg-radial from-primary/10 via-primary/5 to-transparent blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute top-[20%] right-[-15%] w-[60%] h-[60%] bg-radial from-primary/10 via-primary/5 to-transparent blur-[140px] -z-10 pointer-events-none" />
      
      {/* Hero Section */}
      <div className="pt-28 pb-20 relative overflow-hidden">
        <div className="container max-w-5xl text-center space-y-8">
          <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider inline-block">
            Pricing Plans
          </span>
          <h1 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto tracking-tight leading-none">
            Compare plans & <span className="text-primary font-bold">pricing</span>.
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Choose the tier built to match your operational size. Every plan includes a 14-day free trial with zero upfront credit card details.
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
              <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent">
                Save {annualDiscountPercent}%
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl">

        {/* Pricing Columns Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 items-stretch mb-24 max-w-5xl mx-auto">
          {plans.map((plan) => {
            const hasPrice = plan.monthlyPrice !== null;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const displayPrice = hasPrice ? `${currencySymbol}${price?.toLocaleString("en-IN")}` : "Custom";
            const billingPeriod = isAnnual ? "/yr" : "/mo";

            return (
              <div
                key={plan.id}
                className={`flex flex-col justify-between text-left space-y-6 relative group ${
                  plan.popular
                    ? "border-t-2 border-primary pt-[22px]"
                    : "border-t border-border/60 pt-6"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary">
                    Recommended Choice
                  </span>
                )}

                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <h2 className="text-sm font-extrabold text-foreground uppercase tracking-wider">{plan.name}</h2>
                    <p className="text-xs text-muted-foreground leading-relaxed font-light">{plan.headline}</p>
                  </div>

                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-black tracking-tight text-foreground">{displayPrice}</span>
                    {hasPrice && (
                      <span className="text-[10px] text-muted-foreground font-semibold uppercase">{billingPeriod}</span>
                    )}
                  </div>

                  <hr className="border-border/40" />

                  <ul className="space-y-3">
                    {plan.features.slice(0, 7).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed font-light">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={
                    hasPrice
                      ? `${ROUTES.app.register}?plan=${plan.id}&billing=${isAnnual ? "annual" : "monthly"}`
                      : "/contact?purpose=enterprise"
                  }
                  className="block w-full pt-4"
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
        <div className="mb-24 py-12 border-t border-border/40 max-w-5xl mx-auto">
          <div className="text-left max-w-2xl mb-12 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
              Full Matrix
            </span>
            <h2 className="text-heading-2 text-2xl font-bold tracking-tight text-foreground">Detailed Feature Breakdown</h2>
            <p className="text-xs sm:text-sm text-muted-foreground font-light">Compare capabilities across all operational modules to find your optimal setup.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-xs sm:text-sm min-w-[640px]">
              <thead>
                <tr className="border-b border-border/60 bg-transparent">
                  <th className="pb-4 font-bold text-foreground w-[32%] uppercase tracking-wider text-[10px]">Feature Capability</th>
                  <th className="pb-4 font-semibold text-foreground text-center uppercase tracking-wider text-[10px]">Starter</th>
                  <th className="pb-4 font-bold text-primary text-center bg-primary/2 uppercase tracking-wider text-[10px]">Growth</th>
                  <th className="pb-4 font-semibold text-foreground text-center uppercase tracking-wider text-[10px]">Professional</th>
                  <th className="pb-4 font-semibold text-foreground text-center uppercase tracking-wider text-[10px]">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {Array.from(new Set(comparisonTable.map((row) => row.category))).map((category) => (
                  <React.Fragment key={category}>
                    <tr className="border-b border-border/40">
                      <td colSpan={5} className="pt-8 pb-3.5 font-bold text-[9px] uppercase tracking-widest text-primary font-mono">
                        // {category}
                      </td>
                    </tr>
                    {comparisonTable
                      .filter((row) => row.category === category)
                      .map((row, idx) => (
                        <tr
                          key={idx}
                          className="border-b border-border/30 hover:bg-surface-1/30 transition-colors"
                        >
                          <td className="py-4 font-medium text-foreground">{row.feature}</td>
                          <td className="py-4 text-center">{renderValue(row.starter)}</td>
                          <td className="py-4 text-center bg-primary/2">{renderValue(row.growth)}</td>
                          <td className="py-4 text-center">{renderValue(row.professional)}</td>
                          <td className="py-4 text-center">{renderValue(row.enterprise)}</td>
                        </tr>
                      ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing FAQs */}
        <div className="max-w-3xl mb-24 text-left border-t border-border/40 pt-20 mx-auto">
          <div className="space-y-3 mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
              Billing FAQ
            </span>
            <h2 className="text-heading-2 text-2xl font-bold tracking-tight text-foreground">Frequently asked billing questions</h2>
            <p className="text-xs sm:text-sm text-muted-foreground font-light">Quick answers to common inquiries about integration procedures, compliance, and setups.</p>
          </div>

          <div className="divide-y divide-border/60">
            {pricingFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="py-4 transition-colors">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between gap-4 py-2 text-left font-bold text-foreground focus:outline-none text-xs sm:text-sm"
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
                    <div className="pt-2 pb-4 text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Help Note */}
        <div className="border-t border-border/40 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-left max-w-5xl mx-auto">
          <div className="flex items-center gap-3.5">
            <div className="rounded-lg bg-primary/15 p-2 text-primary shrink-0">
              <Info className="h-5 w-5" />
            </div>
            <div className="space-y-0.5">
              <h4 className="font-extrabold text-foreground text-xs sm:text-sm">Need guidance selecting a package?</h4>
              <p className="text-[11px] text-muted-foreground font-light">Our operations team will review your branch scale and catalog to recommend the ideal integration path.</p>
            </div>
          </div>
          <Link href="/contact?subject=help_picking_plan" className="w-full md:w-auto shrink-0">
            <Button variant="outline" className="w-full md:w-auto font-bold text-xs h-9 px-5 border-border/80 hover:bg-surface-2 transition-colors">
              Speak with an advisor
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
