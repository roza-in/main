"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { ChevronRight } from "lucide-react";

export interface LegalSection {
  id: string;
  title: string;
}

interface LegalDocLayoutProps {
  title: string;
  description: string;
  lastUpdated?: string;
  sections: LegalSection[];
  activePolicy?: "privacy" | "terms" | "refund-policy" | "cookies";
  children: React.ReactNode;
}

export function LegalDocLayout({
  title,
  description,
  lastUpdated = siteConfig.legal.lastUpdated,
  sections,
  children,
}: LegalDocLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");

  useEffect(() => {
    if (typeof window === "undefined" || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="pt-24 pb-20 relative bg-background text-foreground">
      {/* Container */}
      <div className="container max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Document Header */}
        <header className="border-b border-border/80 pb-8 mb-10 text-left">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
              {title}
            </h1>
            <span className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground border border-border">
              Last updated: {lastUpdated}
            </span>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
            {description}
          </p>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Table of Contents Sidebar (Desktop) */}
          <aside className="hidden md:block md:col-span-3">
            <div className="sticky top-28 space-y-4 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Table of Contents
              </h2>
              <nav aria-label="Table of contents" className="space-y-1">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`group flex items-center justify-between rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary font-bold border-l-2 border-primary pl-2"
                          : "text-muted-foreground hover:text-foreground hover:bg-surface-2"
                      }`}
                    >
                      <span className="truncate">{section.title}</span>
                      <ChevronRight
                        className={`h-3 w-3 shrink-0 transition-transform ${
                          isActive ? "translate-x-0.5 text-primary" : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                    </a>
                  );
                })}
              </nav>

              {/* Contact box in sidebar */}
              <div className="pt-4 border-t border-border/60 text-[11px] text-muted-foreground space-y-1.5">
                <p className="font-semibold text-foreground">Questions?</p>
                <p>Contact our team at:</p>
                <a
                  href={`mailto:${siteConfig.legal.contactEmail}`}
                  className="font-bold text-primary hover:underline block truncate"
                >
                  {siteConfig.legal.contactEmail}
                </a>
              </div>
            </div>
          </aside>

          {/* Document Content Area */}
          <article className="md:col-span-9 text-left">
            
            {/* Mobile Table of Contents Quick Select */}
            <div className="block md:hidden mb-8 rounded-xl border border-border bg-surface-2 p-4">
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between font-bold text-xs text-foreground uppercase tracking-wider">
                  <span>Table of Contents ({sections.length} sections)</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                </summary>
                <nav aria-label="Mobile table of contents" className="mt-3 space-y-1.5 border-t border-border/60 pt-3">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block py-1 text-xs text-muted-foreground hover:text-primary"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </details>
            </div>

            {/* Document Content */}
            <div className="space-y-10 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {children}
            </div>

            {/* Footer Legal Notice & Jurisdiction */}
            <div className="mt-16 pt-8 border-t border-border/80 text-xs text-muted-foreground space-y-2">
              <p>
                <strong className="text-foreground font-semibold">Legal Operator:</strong> {siteConfig.legal.entityName}
              </p>
              <p>
                <strong className="text-foreground font-semibold">Governing Law:</strong> {siteConfig.legal.governingLaw} (Jurisdiction: {siteConfig.legal.jurisdiction}).
              </p>
              <p>
                For legal notices or data inquiries, reach out to{" "}
                <a href={`mailto:${siteConfig.legal.contactEmail}`} className="text-primary hover:underline font-bold">
                  {siteConfig.legal.contactEmail}
                </a>.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
