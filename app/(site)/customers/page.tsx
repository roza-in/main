import React from "react";
import Link from "next/link";
import { ArrowRight, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sanityClient } from "@/sanity/client/sanity";
import { caseStudiesQuery } from "@/sanity/queries/blog";

interface CaseStudy {
  slug: string;
  clientName: string;
  industry: string;
  title: string;
  summary: string;
  results: string;
  initials: string;
  colorClass: string;
}

const colorClasses = [
  "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
  "bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400",
  "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400"
];

function getInitials(name: string): string {
  if (!name) return "CS";
  const parts = name.split(" ").filter(p => p && p.toLowerCase() !== "and" && p !== "&");
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

export default async function CustomersPage() {
  let displayStudies: CaseStudy[] = [];

  try {
    const rawStudies = await sanityClient.fetch<any[]>(caseStudiesQuery);
    if (rawStudies && rawStudies.length > 0) {
      displayStudies = rawStudies.map((study, idx) => ({
        slug: study.slug?.current || "",
        clientName: study.clientName || "",
        industry: study.industry || "",
        title: study.title || "",
        summary: study.summary || "",
        results: study.results || "",
        initials: getInitials(study.clientName || ""),
        colorClass: colorClasses[idx % colorClasses.length],
      }));
    }
  } catch (error) {
    console.error("Failed to fetch case studies from Sanity:", error);
  }

  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-100)_0%,_transparent_60%)] opacity-55 dark:opacity-35" />

      <div className="container max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Customer Case Studies
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Read how salons, spas, clinics, and barbershops use Rozx to run operations,
            engage clients, and grow revenue.
          </p>
        </div>

        {/* Case Studies List / Empty State */}
        {displayStudies.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center max-w-md mx-auto space-y-3 shadow-sm mb-16">
            <Building className="h-8 w-8 text-muted-foreground/45 mx-auto" />
            <h3 className="text-sm font-bold text-foreground">No case studies published yet</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We are preparing detailed transformations and operational insights. Please check back soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {displayStudies.map((study) => (
              <div
                key={study.slug}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4 text-left">
                  <div className={`h-12 w-12 rounded-full flex items-center justify-center font-bold text-sm ${study.colorClass}`}>
                    {study.initials}
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-primary tracking-wider flex items-center gap-1">
                      <Building className="h-3 w-3" />
                      {study.industry}
                    </span>
                    <h3 className="font-extrabold text-foreground text-base leading-snug hover:text-primary transition-colors">
                      <Link href={`/customers/${study.slug}`}>{study.clientName}</Link>
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4">{study.summary}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 text-left space-y-4">
                  <div className="rounded-lg bg-emerald-500/5 p-3 border border-emerald-500/10">
                    <span className="text-[9px] uppercase font-bold text-emerald-600 dark:text-emerald-400 block tracking-wider">Metrics Achieved</span>
                    <span className="text-xs font-bold text-foreground mt-0.5 block">{study.results}</span>
                  </div>
                  
                  <Link
                    href={`/customers/${study.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                  >
                    Read Case Study
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Reassuring Banner */}
        <div className="rounded-3xl border border-border bg-muted/20 p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-3">Join our successful client base</h3>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-6">Create your 14-day free trial account today. We'll import all your past data for free.</p>
          <Link href="/start-trial">
            <Button variant="premium" className="font-bold text-sm">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
