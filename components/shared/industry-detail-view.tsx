import React from "react";
import Link from "next/link";
import { ROUTES } from "@/config/routes";
import {
  Check,
  ArrowLeft,
  ArrowRight,
  Scissors,
  Droplets,
  Heart,
  Pen,
  Hand,
  Paintbrush,
  Briefcase,
  Dumbbell,
  Camera,
  Dog,
  Car,
  Wrench,
  GraduationCap,
  ShieldCheck,
  Activity,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { type IndustryDetail } from "@/lib/constants/industries";

interface IndustryDetailViewProps {
  industry: IndustryDetail;
}

export function IndustryDetailView({ industry }: IndustryDetailViewProps) {
  const getIcon = () => {
    const iconClass = "h-8 w-8 text-primary";
    switch (industry.iconName) {
      case "salon": return <Scissors className={iconClass} />;
      case "spa": return <Droplets className={iconClass} />;
      case "barbershop": return <Scissors className={iconClass} />;
      case "nail-studio": return <Paintbrush className={iconClass} />;
      case "makeup-studio": return <Paintbrush className={iconClass} />;
      case "wellness-center": return <Heart className={iconClass} />;
      case "tattoo-studio": return <Pen className={iconClass} />;
      case "clinic": return <Hand className={iconClass} />;
      case "consulting": return <Briefcase className={iconClass} />;
      case "coaching-training": return <Dumbbell className={iconClass} />;
      case "photography-creative": return <Camera className={iconClass} />;
      case "pet-services": return <Dog className={iconClass} />;
      case "auto-services": return <Car className={iconClass} />;
      case "repair-service": return <Wrench className={iconClass} />;
      case "classes-events": return <GraduationCap className={iconClass} />;
      default: return <Heart className={iconClass} />;
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
      {/* Background Ambient Gradient Overlay */}
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

        {/* Industry Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 text-left">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
              <span className="shrink-0">{getIcon()}</span>
              <span className="uppercase tracking-wider">Rozx for {industry.name}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-foreground">
              Rozx for {industry.name}
            </h1>

            <p className="text-base sm:text-lg font-medium text-foreground/80 leading-relaxed">
              {industry.tagline}
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {industry.description}
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
              <span>0% Booking Commission • GST Invoicing • Multi-Branch Operations</span>
            </div>
          </div>

          {/* Right Column: Software Telemetry Preview Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-md relative overflow-hidden">
              
              {/* Header Badge & Title */}
              <div className="flex items-center justify-between border-b border-border/80 pb-4 mb-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider">
                  <Activity className="h-3.5 w-3.5" />
                  {industry.preview.badge}
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Live Sync ✓
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="text-left space-y-1 mb-5">
                <h3 className="text-lg font-extrabold text-foreground tracking-tight">
                  {industry.preview.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {industry.preview.subtitle}
                </p>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-2 bg-surface-2 p-3 rounded-xl border border-border mb-5 text-center">
                {industry.preview.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <p className="text-xs sm:text-sm font-extrabold text-foreground">{stat.value}</p>
                    <p className="text-[10px] text-muted-foreground font-medium truncate">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Live Activity Snippet List */}
              <div className="space-y-3 text-left">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {industry.preview.snippetTitle}
                </p>
                <div className="space-y-2">
                  {industry.preview.snippetItems.map((item, idx) => (
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

        {/* Specialized Workflows Callout */}
        <div className="border-t border-border/80 pt-16 mb-20 text-left">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Tailored Workflows</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              How Rozx Powers {industry.name} Operations
            </h2>
            <p className="text-sm text-muted-foreground">
              Customized features, term rules, and calendar mechanics designed for your specific vertical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.workflows.map((wf, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card p-6 shadow-xs text-left space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-primary/30">0{idx + 1}</span>
                  <div className="rounded-xl bg-primary/10 p-2 text-primary">
                    <Layers className="h-4 w-4" />
                  </div>
                </div>
                <p className="text-sm font-semibold text-foreground leading-relaxed">
                  {wf}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Capabilities Grid */}
        <div className="border-t border-border/80 pt-16 mb-20 text-left">
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Key Capabilities</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Built for Growth & Efficiency
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.featuresList.map((feat, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card p-6 shadow-xs text-left hover:border-primary/40 hover:shadow-md transition-all duration-200"
              >
                <div className="rounded-xl bg-primary/10 p-2 text-primary w-fit mb-4">
                  <Check className="h-4 w-4" />
                </div>
                <h3 className="font-bold text-foreground text-base tracking-tight mb-2">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Conversion Banner */}
        <div className="rounded-3xl border border-primary/30 bg-card p-8 sm:p-12 text-center space-y-6 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground max-w-2xl mx-auto">
            Ready to Upgrade Your {industry.name} Software?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Join thousands of service businesses across India. Get started in 2 minutes with zero booking commission.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href={ROUTES.app.register}>
              <Button variant="premium" size="lg" className="font-bold text-sm px-8 h-12 shadow-sm">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="font-semibold text-sm px-6 h-12">
                Explore Pricing
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
