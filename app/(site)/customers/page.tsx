import React from "react";
import Link from "next/link";
import { ArrowRight, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawStudies = await sanityClient.fetch<Record<string, any>[]>(caseStudiesQuery);
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
    <div className="relative overflow-hidden bg-background">
      {/* Background ambient spots & grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[100%_48px] opacity-10" />
      <div className="absolute top-0 left-[-15%] w-[60%] h-[60%] bg-radial from-primary/10 via-primary/5 to-transparent blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute top-[20%] right-[-15%] w-[60%] h-[60%] bg-radial from-primary/10 via-primary/5 to-transparent blur-[140px] -z-10 pointer-events-none" />

      {/* Hero Section */}
      <div className="pt-28 pb-20 relative overflow-hidden">
        <div className="container max-w-5xl text-center space-y-8">
          <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider inline-block">
            Case Studies
          </span>
          <h1 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto tracking-tight leading-none">
            Customer <span className="text-primary font-bold">Case Studies</span>.
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Read how salons, spas, clinics, and barbershops use Rozx to run operations, engage clients, and grow revenue.
          </p>
        </div>
      </div>

      <div className="container max-w-5xl">

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
          <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-6">Create your 14-day free trial account today. We&apos;ll import all your past data for free.</p>
          <Link href={ROUTES.app.register}>
            <Button variant="premium" className="font-bold text-sm">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
