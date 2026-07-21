import React from "react";
import Link from "next/link";
import { ROUTES } from "@/config/routes";
import { 
  Check, 
  ArrowLeft, 
  ArrowRight, 
  Zap, 
  Calendar, 
  Users, 
  CreditCard, 
  Globe, 
  Megaphone, 
  Gift, 
  BarChart3,
  ShieldCheck,
  Activity,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { type FeatureDetail } from "@/lib/constants/features";

interface FeatureDetailViewProps {
  feature: FeatureDetail;
}

export function FeatureDetailView({ feature }: FeatureDetailViewProps) {
  const getIcon = () => {
    const iconClass = "h-8 w-8 text-primary";
    switch (feature.iconName) {
      case "appointments": return <Calendar className={iconClass} />;
      case "crm": return <Users className={iconClass} />;
      case "payments": return <CreditCard className={iconClass} />;
      case "website-builder": return <Globe className={iconClass} />;
      case "marketing": return <Megaphone className={iconClass} />;
      case "loyalty": return <Gift className={iconClass} />;
      case "analytics": return <BarChart3 className={iconClass} />;
      default: return <Zap className={iconClass} />;
    }
  };

  const getStatusBadgeClass = (statusColor?: string) => {
    switch (statusColor) {
      case "emerald":
        return "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 border-emerald-500/30";
      case "indigo":
        return "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400 border-indigo-500/30";
      case "amber":
        return "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 border-amber-500/30";
      default:
        return "bg-surface-2 text-muted-foreground border-border";
    }
  };

  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-background text-foreground">
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--color-primary-100)_0%,transparent_60%)] opacity-40 dark:opacity-20 pointer-events-none" />

      <div className="container max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 text-left">
          <Link
            href="/platform"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Platform Overview
          </Link>
        </div>

        {/* Feature Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 text-left">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
              <span className="shrink-0">{getIcon()}</span>
              <span className="uppercase tracking-wider">Rozx Feature Module</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-foreground">
              {feature.name}
            </h1>

            <p className="text-base sm:text-lg font-medium text-foreground/80 leading-relaxed">
              {feature.tagline}
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {feature.fullDesc}
            </p>

            {/* CTAs & Trust Pill */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link href={ROUTES.app.register}>
                <Button variant="premium" size="lg" className="font-bold text-sm px-6 h-12 shadow-sm">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="font-semibold text-sm px-5 h-12">
                  View Pricing Plans
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
              <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>0% Booking Commission • Instant 2-Minute Setup • No Credit Card Required</span>
            </div>
          </div>

          {/* Right Column: Software Telemetry Preview Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-md relative overflow-hidden">
              
              {/* Header Badge & Title */}
              <div className="flex items-center justify-between border-b border-border/80 pb-4 mb-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider">
                  <Activity className="h-3.5 w-3.5" />
                  {feature.preview.badge}
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Live Sync ✓
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="text-left space-y-1 mb-5">
                <h3 className="text-lg font-extrabold text-foreground tracking-tight">
                  {feature.preview.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {feature.preview.subtitle}
                </p>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-2 bg-surface-2 p-3 rounded-xl border border-border mb-5 text-center">
                {feature.preview.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <p className="text-xs sm:text-sm font-extrabold text-foreground">{stat.value}</p>
                    <p className="text-[10px] text-muted-foreground font-medium truncate">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Feature Activity Snippet List */}
              <div className="space-y-3 text-left">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {feature.preview.snippetTitle}
                </p>
                <div className="space-y-2">
                  {feature.preview.snippetItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between gap-3 p-2.5 rounded-lg border border-border/70 bg-background text-xs"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-foreground truncate">{item.title}</p>
                        <p className="text-[11px] text-muted-foreground truncate">{item.meta}</p>
                      </div>
                      {item.status && (
                        <span
                          className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-md border ${getStatusBadgeClass(
                            item.statusColor
                          )}`}
                        >
                          {item.status}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Capabilities Grid */}
        <div className="border-t border-border/80 pt-16 mb-20 text-left">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Core Modules</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              What&apos;s Included in {feature.name}
            </h2>
            <p className="text-sm text-muted-foreground">
              Built specifically for Indian service businesses to operate efficiently and scale without friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feature.capabilities.map((c, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card p-6 shadow-xs text-left hover:border-primary/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-primary/10 p-2 text-primary">
                      <Check className="h-4 w-4" />
                    </div>
                    {c.tag && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border">
                        {c.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-foreground text-base tracking-tight">{c.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="border-t border-border/80 pt-16 mb-20 text-left">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Questions & Answers</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {feature.faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-3">
                <div className="flex items-start gap-2.5">
                  <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <h3 className="font-bold text-foreground text-sm sm:text-base leading-snug">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Conversion Banner */}
        <div className="rounded-3xl border border-primary/30 bg-card p-8 sm:p-12 text-center space-y-6 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground max-w-2xl mx-auto">
            Ready to Streamline Your Business with Rozx?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Get started in under 2 minutes. Simple transparent pricing starting at ₹999/mo with 0% booking commissions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href={ROUTES.app.register}>
              <Button variant="premium" size="lg" className="font-bold text-sm px-8 h-12 shadow-sm">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="font-semibold text-sm px-6 h-12">
                Talk to Sales
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
