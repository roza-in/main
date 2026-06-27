import React from "react";
import { Check, X, ShieldAlert, BadgeInfo } from "lucide-react";
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
}

export function Comparison({ competitorName, tagline, description, features }: ComparisonProps) {
  const renderValue = (val: boolean | string, isRozx: boolean) => {
    if (typeof val === "boolean") {
      return val ? (
        <div className={`mx-auto w-fit rounded-full p-1 ${isRozx ? "bg-emerald-500/10 text-emerald-600" : "bg-muted text-muted-foreground"}`}>
          <Check className="h-5 w-5" />
        </div>
      ) : (
        <div className="mx-auto w-fit rounded-full p-1 bg-rose-500/10 text-rose-600">
          <X className="h-5 w-5" />
        </div>
      );
    }
    return <span className="text-xs font-bold text-foreground/80">{val}</span>;
  };

  return (
    <div className="py-20 bg-background relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-100)_0%,_transparent_60%)] opacity-55 dark:opacity-35" />

      <div className="container max-w-5xl text-left">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wide">
            Rozx vs {competitorName}
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            {tagline}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Comparison Alert warning about hidden commissions */}
        <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-5 flex items-start gap-4 mb-12">
          <ShieldAlert className="h-6 w-6 text-rose-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-rose-950 dark:text-rose-200">Watch out for hidden client booking commission fees!</h4>
            <p className="text-xs text-rose-900/80 dark:text-rose-300/80 leading-relaxed">
              Unlike {competitorName}, which takes booking cuts or fees for new client discovery, Rozx charges flat, predictable subscriptions. You keep 100% of your earnings. No exceptions.
            </p>
          </div>
        </div>

        {/* Table comparison */}
        <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden mb-16">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="p-4 font-bold text-foreground w-[45%]">Feature Description</th>
                <th className="p-4 font-extrabold text-primary text-center bg-primary/5">Rozx</th>
                <th className="p-4 font-bold text-foreground text-center">{competitorName}</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, idx) => (
                <tr key={idx} className="border-b border-border/50 hover:bg-muted/15 transition-colors">
                  <td className="p-4 space-y-1">
                    <div className="font-bold text-foreground">{f.name}</div>
                    <div className="text-xs text-muted-foreground leading-snug">{f.desc}</div>
                  </td>
                  <td className="p-4 text-center bg-primary/5">{renderValue(f.rozx, true)}</td>
                  <td className="p-4 text-center">{renderValue(f.competitor, false)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Comparative summary card */}
        <div className="rounded-2xl border border-border bg-muted/10 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <div className="rounded-full bg-emerald-500/10 p-2 text-primary">
              <BadgeInfo className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-foreground text-sm">Need assistance moving your data from {competitorName}?</h4>
              <p className="text-xs text-muted-foreground mt-0.5">We migrate all your client books, services catalog, and staff rosters with zero downtime.</p>
            </div>
          </div>
          <Link href={ROUTES.app.register}>
            <Button variant="premium" className="font-bold text-xs">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
