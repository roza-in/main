"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Check, ShieldCheck, Sparkles, Building, Mail, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const trialFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().email("Invalid email address").max(100, "Email is too long"),
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number is too long")
    .regex(/^[+]?[\d\s\-()]+$/, "Please enter a valid phone number"),
  businessName: z.string().min(2, "Business name is required").max(100, "Business name is too long"),
  plan: z.enum(["starter", "growth", "professional", "enterprise"] as const),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms of Service",
  }),
});

type TrialFormData = z.infer<typeof trialFormSchema>;

function TrialFormContent() {
  const searchParams = useSearchParams();
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [registeredEmail, setRegisteredEmail] = useState("");
  const [registeredBusiness, setRegisteredBusiness] = useState("");

  const planParam = searchParams.get("plan") || "growth";
  const initialPlan = ["starter", "growth", "professional", "enterprise"].includes(planParam)
    ? planParam as "starter" | "growth" | "professional" | "enterprise"
    : "growth";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<TrialFormData>({
    resolver: zodResolver(trialFormSchema),
    defaultValues: {
      plan: initialPlan,
      agreeTerms: false,
    },
  });

  const selectedPlan = watch("plan");

  const onSubmit = async (data: TrialFormData) => {
    setSubmitError(null);
    try {
      const response = await fetch("/api/trial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to register. Please try again.");
      }

      setRegisteredEmail(data.email);
      setRegisteredBusiness(data.businessName);
      setIsSuccess(true);
    } catch (err: any) {
      setSubmitError(err?.message || "An error occurred. Please try again later.");
    }
  };

  const billingParam = searchParams.get("billing") || "monthly";
  const isAnnual = billingParam === "annual";

  const getPlanDetails = (planId: string) => {
    const plan = siteConfig.pricing.plans.find((p) => p.id === planId);
    if (!plan) {
      if (planId === "enterprise") {
        return { name: "Enterprise", price: "Custom", term: "talk to sales" };
      }
      return { name: "Growth", price: isAnnual ? `₹19,999/yr` : `₹1,999/mo`, term: isAnnual ? "billed annually" : "billed monthly" };
    }

    if (plan.monthlyPrice === null) {
      return { name: plan.name, price: "Custom", term: "talk to sales" };
    }

    const priceVal = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    const periodSuffix = isAnnual ? "/yr" : "/mo";
    const termVal = isAnnual ? "billed annually" : "billed monthly";

    return {
      name: plan.name,
      price: `₹${priceVal?.toLocaleString("en-IN")}${periodSuffix}`,
      term: termVal,
    };
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
      {/* Left Column: Value Prop (5 cols) */}
      <div className="lg:col-span-5 space-y-6 text-left py-2">
        <div className="space-y-4">
          <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wide inline-block">
            14-Day Free Access
          </span>
          <h1 className="text-display text-3xl sm:text-4xl text-foreground">
            Get started with Rozx.
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Create your account credentials to instantiate your workspace. No credit card is required during your trial.
          </p>
        </div>

        {/* Selected Plan Summary Card */}
        <div className="rounded-xl border border-primary/20 bg-surface-1 p-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 text-primary opacity-5">
            <ShieldCheck className="h-16 w-16" />
          </div>
          <div className="relative z-10 space-y-2.5">
            <span className="text-[9px] uppercase font-bold text-primary tracking-wider">Plan Summary</span>
            <div className="flex items-baseline justify-between">
              <h4 className="text-base font-bold text-foreground">
                {getPlanDetails(selectedPlan).name}
              </h4>
              <div className="text-right">
                <span className="text-base font-bold text-foreground">
                  {getPlanDetails(selectedPlan).price}
                </span>
                <p className="text-[9px] text-muted-foreground">
                  {getPlanDetails(selectedPlan).term}
                </p>
              </div>
            </div>
            <div className="text-[10px] text-muted-foreground pt-2 border-t border-border/80 leading-normal">
              * Charges begin only if you actively choose to purchase a subscription after the 14-day trial period finishes.
            </div>
          </div>
        </div>

        {/* Benefits list */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-foreground/85">
            <div className="rounded-full bg-primary/10 p-1 text-primary shrink-0"><Check className="h-3.5 w-3.5" /></div>
            <span>No credit card requirements</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-foreground/85">
            <div className="rounded-full bg-primary/10 p-1 text-primary shrink-0"><Check className="h-3.5 w-3.5" /></div>
            <span>Consolidated booking dashboard</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-foreground/85">
            <div className="rounded-full bg-primary/10 p-1 text-primary shrink-0"><Check className="h-3.5 w-3.5" /></div>
            <span>Free branch migration support</span>
          </div>
        </div>
      </div>

      {/* Right Column: Form (7 cols) */}
      <div className="lg:col-span-7 rounded-xl border border-border bg-card p-6 sm:p-8 shadow-xs text-left relative overflow-hidden">
        {isSuccess ? (
          <div className="py-8 text-center space-y-5">
            <div className="rounded-full bg-primary/10 p-3 text-primary w-fit mx-auto">
              <ShieldCheck className="h-10 w-10" />
            </div>
            <h3 className="text-heading-2 text-xl sm:text-2xl text-foreground">Workspace Provisioned</h3>
            
            <div className="space-y-3.5 max-w-md mx-auto text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <p>
                Our onboarding team is configuring your dedicated database cluster and dashboard environment for <strong className="text-foreground">{registeredBusiness}</strong>.
              </p>
              <p className="text-[11px] bg-surface-1 p-3 rounded-lg border border-border/60">
                To guarantee isolated workspace integrity and secure API routing, setup takes up to 12 hours. We will deliver your temporary credentials and login links to <strong className="text-foreground">{registeredEmail}</strong> as soon as it is live.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/" className="w-full sm:w-auto">
                <Button variant="outline" className="font-semibold text-xs w-full sm:w-auto h-9">
                  Return to Home
                </Button>
              </Link>
              <Link href="/book-demo" className="w-full sm:w-auto">
                <Button variant="premium" className="font-semibold text-xs w-full sm:w-auto h-9">
                  Schedule Guided Onboarding
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <h3 className="text-heading-3 text-lg font-bold text-foreground mb-5">Create your trial account</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Your full name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    placeholder="Priya Sharma"
                    className="w-full rounded-lg border border-border bg-background pl-9 pr-3 py-2 text-xs sm:text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary h-9.5"
                  />
                </div>
                {errors.name && (
                  <p className="text-[10px] text-destructive font-semibold">{errors.name.message}</p>
                )}
              </div>

              {/* Business Name */}
              <div className="space-y-1.5">
                <label htmlFor="businessName" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Registered Business name
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    id="businessName"
                    type="text"
                    {...register("businessName")}
                    placeholder="E.g., Nirvana Hair & Spa"
                    className="w-full rounded-lg border border-border bg-background pl-9 pr-3 py-2 text-xs sm:text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary h-9.5"
                  />
                </div>
                {errors.businessName && (
                  <p className="text-[10px] text-destructive font-semibold">{errors.businessName.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Work email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="shivam@rozx.in"
                      className="w-full rounded-lg border border-border bg-background pl-9 pr-3 py-2 text-xs sm:text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary h-9.5"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[10px] text-destructive font-semibold">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Contact Phone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      placeholder="+91 99999 99999"
                      className="w-full rounded-lg border border-border bg-background pl-9 pr-3 py-2 text-xs sm:text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary h-9.5"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[10px] text-destructive font-semibold">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Plan Choice Select */}
              <div className="space-y-1.5">
                <label htmlFor="plan" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Select Subscription Tier
                </label>
                <select
                  id="plan"
                  {...register("plan")}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs sm:text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary font-semibold h-9.5"
                >
                  {siteConfig.pricing.plans.map((p) => {
                    const hasPrice = p.monthlyPrice !== null;
                    const priceVal = isAnnual ? p.annualPrice : p.monthlyPrice;
                    const displayLabel = hasPrice
                      ? `${p.name} (₹${priceVal?.toLocaleString("en-IN")}${isAnnual ? "/yr" : "/mo"})`
                      : `${p.name} (Custom setup)`;
                    return (
                      <option key={p.id} value={p.id}>
                        {displayLabel}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Agreement checks */}
              <div className="space-y-2 pt-1">
                <label className="flex items-start gap-2.5 text-xs text-muted-foreground cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    {...register("agreeTerms")}
                    className="rounded border-border bg-background text-primary focus:ring-primary mt-0.5"
                  />
                  <span>
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary hover:underline font-semibold">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:underline font-semibold">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
                {errors.agreeTerms && (
                  <p className="text-[10px] text-destructive font-semibold">{errors.agreeTerms.message}</p>
                )}
              </div>

              {/* Error Box */}
              {submitError && (
                <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-3 text-xs text-destructive text-center font-medium">
                  {submitError}
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="premium"
                className="w-full justify-center font-bold flex items-center gap-1.5 h-10 text-xs sm:text-sm"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating workspace..." : "Start 14-Day Free Trial"}
                <Sparkles className="h-4 w-4" />
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export function TrialForm() {
  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-background">
      <div className="container max-w-5xl">
        <Suspense fallback={<div className="text-center text-muted-foreground text-xs py-12 font-semibold">Loading trial parameters...</div>}>
          <TrialFormContent />
        </Suspense>
      </div>
    </div>
  );
}
