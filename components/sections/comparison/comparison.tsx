import React from "react";
import { Check, X, Info, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ROUTES } from "@/config/routes";
import { Button } from "@/components/ui/button";

interface ComparisonFeature {
  name: string;
  desc: string;
  rozx: boolean | string;
  competitor: boolean | string;
}

interface ComparisonProps {
  competitorName: string;
  tagline: string;
  description: string;
  features: ComparisonFeature[];
  whoRozxSuits?: string;
  whoCompetitorSuits?: string;
}

export function Comparison({
  competitorName,
  tagline,
  description,
  features,
  whoRozxSuits = "Service businesses in India (salons, spas, clinics, studios) wanting flat subscription pricing, 0% booking commissions, custom domain ownership, and GST thermal invoicing.",
  whoCompetitorSuits = `Businesses looking primarily for a public consumer marketplace listing directory rather than building their own standalone website brand.`,
}: ComparisonProps) {
  const renderValue = (val: boolean | string, isRozx: boolean) => {
    if (typeof val === "boolean") {
      return val ? (
        <div className={`mx-auto w-fit rounded-full p-1.5 ${isRozx ? "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400" : "bg-muted text-muted-foreground"}`}>
          <Check className="h-4 w-4" />
        </div>
      ) : (
        <div className="mx-auto w-fit rounded-full p-1.5 bg-muted/60 text-muted-foreground/60">
          <X className="h-4 w-4" />
        </div>
      );
    }
    return <span className="text-xs font-bold text-foreground/90">{val}</span>;
  };

  return (
    <div className="py-20 md:py-24 bg-background relative overflow-hidden text-foreground">
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--color-primary-100)_0%,transparent_60%)] opacity-40 dark:opacity-20 pointer-events-none" />

      <div className="container max-w-6xl px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header Section */}
        <div className="max-w-3xl space-y-4 mb-12">
          <span className="rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider inline-block">
            Software Comparison: Rozx vs {competitorName}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            {tagline}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Transparent Positioning Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-2xl border border-primary/30 bg-card p-6 space-y-3 shadow-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
              <h3 className="text-base font-extrabold text-foreground">Who Rozx Best Suits</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {whoRozxSuits}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface-2 p-6 space-y-3 shadow-xs">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-muted-foreground shrink-0" />
              <h3 className="text-base font-extrabold text-foreground">Who {competitorName} May Suit</h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {whoCompetitorSuits}
            </p>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-2">
                  <th className="p-4 font-bold text-foreground w-[48%] text-xs sm:text-sm">Capability / Feature Breakdown</th>
                  <th className="p-4 font-extrabold text-primary text-center bg-primary/5 text-xs sm:text-sm border-x border-primary/10">Rozx</th>
                  <th className="p-4 font-bold text-foreground text-center text-xs sm:text-sm">{competitorName}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {features.map((f, idx) => (
                  <tr key={idx} className="hover:bg-surface-2/60 transition-colors">
                    <td className="p-4 space-y-1">
                      <div className="font-bold text-foreground text-xs sm:text-sm">{f.name}</div>
                      <div className="text-xs text-muted-foreground leading-snug">{f.desc}</div>
                    </td>
                    <td className="p-4 text-center bg-primary/5 border-x border-primary/10">{renderValue(f.rozx, true)}</td>
                    <td className="p-4 text-center">{renderValue(f.competitor, false)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Conversion Card */}
        <div className="rounded-3xl border border-primary/30 bg-card p-8 sm:p-12 text-center space-y-6 shadow-lg relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground max-w-2xl mx-auto">
            Switch to Rozx for Flat Pricing &amp; Custom Domain Control
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Get started in 2 minutes. Free manual catalog setup assistance provided by our Indian support team.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
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
    </div>
  );
}
