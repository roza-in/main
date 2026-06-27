import React from "react";
import Link from "next/link";
import { ROUTES } from "@/config/routes";
import { Check, ArrowLeft, ArrowRight, Scissors, Droplets, Heart, Pen, Hand, Paintbrush } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type IndustryDetail } from "@/lib/constants/industries";

interface IndustryDetailViewProps {
  industry: IndustryDetail;
}

export function IndustryDetailView({ industry }: IndustryDetailViewProps) {
  const getIcon = () => {
    switch (industry.iconName) {
      case "salon": return <Scissors className="h-10 w-10" />;
      case "spa": return <Droplets className="h-10 w-10" />;
      case "barbershop": return <Scissors className="h-10 w-10" />;
      case "nail-studio": return <Paintbrush className="h-10 w-10" />;
      case "makeup-studio": return <Paintbrush className="h-10 w-10" />;
      case "wellness-center": return <Heart className="h-10 w-10" />;
      case "tattoo-studio": return <Pen className="h-10 w-10" />;
      case "clinic": return <Hand className="h-10 w-10" />;
      default: return <Heart className="h-10 w-10" />;
    }
  };

  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-100)_0%,_transparent_60%)] opacity-55 dark:opacity-35" />

      <div className="container max-w-5xl">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Industries
        </Link>

        {/* Industry Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16 text-left">
          <div className="md:col-span-8 space-y-4">
            <div className="text-primary rounded-xl bg-primary/10 p-3.5 w-fit">
              {getIcon()}
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Rozx for {industry.name}
            </h1>
            <p className="text-base sm:text-lg font-medium text-foreground/80 leading-relaxed">
              {industry.tagline}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {industry.description}
            </p>
          </div>

          {/* Metric Highlight Card */}
          <div className="md:col-span-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-primary">
              {industry.metric}
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {industry.metricLabel}
            </p>
            <div className="pt-4">
              <Link href={ROUTES.app.register}>
                <Button variant="premium" className="w-full font-bold text-xs h-10 shadow-sm">
                  Start Your Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Workflows Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border/60 pt-16 mb-20 text-left">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Standardized Workflows</h2>
            <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
              {industry.workflows.map((flow, i) => (
                <div key={i} className="flex gap-3">
                  <span className="font-bold text-primary">{i + 1}.</span>
                  <p>{flow}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Industry checklist features */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground font-sans">Module Integration</h2>
            <div className="grid grid-cols-1 gap-4">
              {industry.featuresList.map((f, i) => (
                <div key={i} className="flex gap-3 items-start p-4 border border-border/60 rounded-xl bg-card shadow-sm hover:border-primary/30 transition-colors">
                  <div className="rounded-full bg-emerald-500/10 p-1 text-primary shrink-0"><Check className="h-4.5 w-4.5" /></div>
                  <div>
                    <h4 className="font-bold text-foreground text-xs sm:text-sm">{f.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Nav Link to Next Industry */}
        <div className="rounded-2xl border border-border bg-muted/10 p-6 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Need help choosing your workflow?</span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline text-sm"
          >
            Chat with an Advisor
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
