import Link from "next/link";
import { ArrowRight, ShieldCheck, Layers, Award, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";

const corePrinciples = [
  {
    title: "0% Booking Commission Guarantee",
    desc: "We charge flat, predictable subscription fees starting at ₹999/mo. We never take a percentage cut of your appointment revenue.",
    tag: "Fair Commercials"
  },
  {
    title: "GST Thermal POS & Invoicing",
    desc: "Built specifically for Indian tax regulations with itemized CGST/SGST, SAC codes, and instant 80mm/58mm thermal receipt printing.",
    tag: "India Localized"
  },
  {
    title: "Custom Domain Brand Ownership",
    desc: "Your clients book on your brand's custom domain (www.yourbrand.com) with SSL included, building your brand rather than a third-party marketplace.",
    tag: "Brand Control"
  }
];

export function AboutView() {
  return (
    <div className="relative overflow-hidden bg-background text-foreground">
      {/* Hero Section */}
      <div className="pt-28 pb-20 relative overflow-hidden">
        {/* Background ambient spots & grid */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[100%_48px] opacity-10" />
        <div className="absolute top-0 left-[-15%] w-[60%] h-[60%] bg-radial from-primary/10 via-primary/5 to-transparent blur-[140px] -z-10 pointer-events-none" />
        <div className="absolute top-[20%] right-[-15%] w-[60%] h-[60%] bg-radial from-primary/10 via-primary/5 to-transparent blur-[140px] -z-10 pointer-events-none" />

        <div className="container max-w-5xl text-center space-y-8">
          <span className="rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider inline-block">
            About Rozx
          </span>
          <h1 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto tracking-tight leading-none">
            Software built for <span className="text-primary font-bold">Indian service businesses</span>.
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            We are building a simple, high-performance booking, CRM, and GST billing platform designed to help salons, spas, clinics, and studios operate smoothly.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link href={ROUTES.app.register}>
              <Button size="lg" variant="premium" className="font-bold text-sm px-8 h-12 shadow-sm">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="font-semibold text-sm px-6 h-12">
                Explore Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Story & Mission Section */}
      <div className="py-24 border-t border-border/40 relative">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Giving Merchants Full Ownership of Their Client Relationships
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Traditional booking aggregators often charge heavy per-appointment commission cuts and lock client data inside third-party marketplaces. Rozx was created to change that.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                We provide service business owners with their own dedicated booking website, real-time staff calendar grid, WhatsApp notification triggers, and desktop POS checkout — all for a predictable flat subscription.
              </p>
            </div>

            <div className="lg:col-span-6 bg-card border border-border rounded-3xl p-8 shadow-md space-y-6">
              <h3 className="text-lg font-bold text-foreground tracking-tight border-b border-border/80 pb-4">
                What Sets Rozx Apart
              </h3>

              <div className="space-y-4 text-xs">
                {corePrinciples.map((cp, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl border border-border bg-surface-2 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-foreground text-sm flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        {cp.title}
                      </span>
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary uppercase">
                        {cp.tag}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pl-6">
                      {cp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Development Timeline */}
      <div className="py-24 border-t border-border/40 bg-surface-2/40">
        <div className="container max-w-5xl space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
              Platform Journey
            </span>
            <h2 className="text-heading-2 text-foreground">Built for Performance & Scale</h2>
            <p className="text-xs sm:text-sm text-muted-foreground">Continuous engineering focused on speed, zero-conflict calendars, and GST compliance.</p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto text-left">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs flex items-start gap-4">
              <div className="rounded-xl bg-primary/10 p-3 text-primary shrink-0">
                <Zap className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-extrabold text-foreground">Rozx SaaS Platform Release</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">Production Ready</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Engineered multi-tenant SaaS infrastructure (`api/`, `app/`, `main/`) with Prisma PostgreSQL database, Razorpay payments, official Meta WhatsApp Cloud API integration, and thermal POS receipt printing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Operational Principles */}
      <div className="py-24 border-t border-border/40 bg-background">
        <div className="container max-w-5xl space-y-16 text-center">
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
              Our Principles
            </span>
            <h3 className="text-3xl font-extrabold text-foreground tracking-tight">Customer-Focused SaaS Engineering</h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
              We focus on building reliable software for business owners who value clarity, speed, and complete data ownership.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-border/60 pt-4 max-w-4xl mx-auto text-left">
            <div className="md:px-8 space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <ShieldCheck className="h-4.5 w-4.5" />
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wide">Flat Pricing</h4>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">Clear, transparent monthly or annual subscription plans with no per-booking percentage commissions.</p>
            </div>
            
            <div className="md:px-8 space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <Layers className="h-4.5 w-4.5" />
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wide">Data Isolation</h4>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">Strict tenant scoping and database security protocols to keep merchant customer CRM files private.</p>
            </div>
            
            <div className="md:px-8 space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <Award className="h-4.5 w-4.5" />
                <h4 className="text-xs font-bold text-foreground uppercase tracking-wide">Local Support</h4>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">Responsive support assistance (`hello@rozx.in`) and guided onboarding for catalog setup.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="py-20 border-t border-border/60">
        <div className="container max-w-5xl">
          <div className="rounded-3xl border border-primary/30 bg-card p-8 sm:p-12 text-center space-y-6 shadow-lg relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground max-w-2xl mx-auto">
              Ready to Upgrade Your Business Operations?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed font-light">
              Join salons, spas, clinics, and studios across India using Rozx for appointment scheduling and GST billing.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link href={ROUTES.app.register}>
                <Button size="lg" variant="premium" className="font-bold text-sm px-8 h-12 shadow-sm">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="font-semibold text-sm px-6 h-12">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
