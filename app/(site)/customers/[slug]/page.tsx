import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Trophy, ArrowRight, AlertCircle, Sparkles, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import { sanityClient } from "@/sanity/client/sanity";
import { caseStudyBySlugQuery } from "@/sanity/queries/blog";

export const revalidate = 3600; // Cache and update once per hour

export async function generateStaticParams() {
  try {
    const caseStudySlugsQuery = `*[_type == "case-study" && defined(slug.current)].slug.current`;
    const slugs = await sanityClient.fetch<string[]>(caseStudySlugsQuery);
    if (!slugs) return [];
    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    console.error("Failed to fetch case study slugs for generateStaticParams:", error);
    return [];
  }
}

interface CaseStudyDetails {
  slug: string;
  clientName: string;
  industry: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  resultsList: string[];
  metricsText: string;
  initials: string;
  colorClass: string;
}

const colorsMap: Record<string, string> = {
  "aura-unisex-salon-bengaluru-no-show-reduction": "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
  "gents-zone-barbershop-jaipur-gst-digital-transformation": "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400",
  "nail-bar-hyderabad-franchise-scale-staff-management": "bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400",
  "radiant-aesthetics-clinic-mumbai-client-retention-crm": "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400",
  "serene-luxury-spa-pune-multi-branch-revenue-growth": "bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400"
};

function getInitials(name: string): string {
  if (!name) return "CS";
  const parts = name.split(" ").filter(p => p && p.toLowerCase() !== "and" && p !== "&");
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

export default async function CustomerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let study: CaseStudyDetails | null = null;

  try {
    const rawStudy = await sanityClient.fetch<any>(caseStudyBySlugQuery, { slug });
    if (rawStudy) {
      const resultsText = rawStudy.results || "";
      
      let resultsList: string[] = [];
      if (resultsText.includes("\n")) {
        resultsList = resultsText.split("\n");
      } else {
        resultsList = resultsText.split(/\.\s+/);
      }
      
      resultsList = resultsList
        .map((line: string) => line.trim().replace(/^-\s*/, ""))
        .filter(Boolean)
        .map((line: string) => line.endsWith(".") ? line : line + ".");

      let metricsText = "Success Metric";
      if (resultsList.length > 0) {
        const firstSentence = resultsList[0];
        const parts = firstSentence.split(/—|\s+-\s+/);
        metricsText = parts[0].trim();
        if (metricsText.endsWith(".")) {
          metricsText = metricsText.slice(0, -1);
        }
      }

      study = {
        slug: rawStudy.slug?.current || "",
        clientName: rawStudy.clientName || "",
        industry: rawStudy.industry || "",
        title: rawStudy.title || "",
        summary: rawStudy.summary || "",
        challenge: rawStudy.challenge || "",
        solution: rawStudy.solution || "",
        resultsList: resultsList.length > 0 ? resultsList : ["Success achieved"],
        metricsText,
        initials: getInitials(rawStudy.clientName || ""),
        colorClass: colorsMap[slug] || "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
      };
    }
  } catch (error) {
    console.error(`Failed to fetch case study ${slug} from Sanity:`, error);
  }

  if (!study) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:100%_48px] opacity-10" />

      <div className="container max-w-4xl text-left">
        <Link
          href="/customers"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Case Studies
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12 border-b border-border/60 pb-10">
          <div className="md:col-span-8 space-y-4">
            <div className={`h-12 w-12 rounded-full flex items-center justify-center font-bold text-sm shadow-xs ${study.colorClass}`}>
              {study.initials}
            </div>
            <span className="text-[10px] uppercase font-bold text-primary tracking-wider block">
              {study.industry}
            </span>
            <h1 className="text-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
              {study.title}
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {study.summary}
            </p>
          </div>

          <div className="md:col-span-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/10 p-6 text-center space-y-2 shrink-0 shadow-xs hover:border-emerald-500/35 transition-all duration-300">
            <Trophy className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mx-auto animate-pulse" />
            <div className="text-heading-2 text-lg sm:text-xl md:text-2xl font-extrabold text-foreground leading-tight">
              {study.metricsText}
            </div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
              Core Metric Achieved
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-2xl border border-rose-500/10 dark:border-rose-500/20 bg-rose-500/[0.02] dark:bg-rose-500/[0.04] p-6 hover:shadow-sm hover:border-rose-500/25 transition-all duration-300 space-y-4 flex flex-col justify-start">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-rose-500 shrink-0" />
              The Challenge
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {study.challenge}
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-500/10 dark:border-emerald-500/20 bg-emerald-500/[0.02] dark:bg-emerald-500/[0.04] p-6 hover:shadow-sm hover:border-emerald-500/25 transition-all duration-300 space-y-4 flex flex-col justify-start">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-emerald-500 shrink-0" />
              The Solution
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {study.solution}
            </p>
          </div>
        </div>

        <div className="space-y-6 mb-20">
          <h3 className="text-xl font-bold text-foreground tracking-tight flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            Results Achieved
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {study.resultsList.map((res, i) => (
              <div 
                key={i} 
                className="flex gap-3.5 items-start p-5 border border-border/70 bg-card rounded-2xl shadow-xs hover:border-primary/30 hover:shadow-sm transition-all duration-300"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-foreground/90 leading-relaxed">{res}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-muted/20 p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-3">See how Rozx can transform your business</h3>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-6">
            Join our growing community of service businesses. Create your 14-day free trial account today.
          </p>
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
