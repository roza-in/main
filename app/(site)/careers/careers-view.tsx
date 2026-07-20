"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Shield, 
  Compass, 
  Award, 
  Sparkles, 
  Coffee, 
  GraduationCap, 
  Plane,
  Heart,
  ChevronDown, 
  ChevronUp 
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Job {
  _id: string;
  title: string;
  slug: { current: string };
  department: string;
  location: string;
  type: string;
  description: unknown[];
}

interface CareersViewProps {
  initialJobs: Job[];
}

export function CareersView({ initialJobs }: CareersViewProps) {
  const [jobs] = useState<Job[]>(initialJobs);
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const toggleJob = (id: string) => {
    if (expandedJob === id) {
      setExpandedJob(null);
    } else {
      setExpandedJob(id);
    }
  };

  function renderJobDescription(body: unknown): React.ReactNode[] {
    if (!body) return [];
    if (Array.isArray(body)) {
      return body.map((block: Record<string, unknown>, idx: number) => {
        if (block && block._type === "block" && Array.isArray(block.children)) {
          const text = (block.children as Array<{ text?: string }>).map((child) => child.text || "").join("");
          const style = (block.style as string) || "normal";
  
          if (style === "h2") {
            return (
              <h4 key={idx} className="text-xs sm:text-sm font-bold text-foreground mt-5 mb-2">
                {text}
              </h4>
            );
          }
          if (style === "h3") {
            return (
              <h5 key={idx} className="text-[11px] sm:text-xs font-bold text-foreground mt-4 mb-2">
                {text}
              </h5>
            );
          }
          if (block.listItem === "bullet") {
            return (
              <li key={idx} className="text-xs text-muted-foreground list-disc ml-5 mb-1 leading-relaxed">
                {text}
              </li>
            );
          }
  
          return (
            <p key={idx} className="text-xs text-muted-foreground mb-2.5 leading-relaxed">
              {text}
            </p>
          );
        }
        return null;
      });
    }
    return [];
  }

  const values = [
    {
      icon: Compass,
      title: "Client-Centric Craft",
      desc: "We prioritize user experience above everything. We build software that feels incredibly fluid, fast, and satisfying to use."
    },
    {
      icon: Shield,
      title: "Radical Transparency",
      desc: "Zero hidden agendas, transparent flat pricing, and honest support. We run our internal operations with the same clarity."
    },
    {
      icon: Users,
      title: "High Ownership & Speed",
      desc: "We don't manage hours; we manage outcomes. We value autonomy and empower developers to execute and ship ideas fast."
    }
  ];

  const perks = [
    {
      icon: Award,
      title: "Competitive Compensation",
      desc: "Top-tier base salary combined with performance-linked rewards."
    },
    {
      icon: Sparkles,
      title: "Hybrid / Remote Flexibility",
      desc: "Work from anywhere in India with flexible core hours."
    },
    {
      icon: GraduationCap,
      title: "Learning Stipend",
      desc: "We fund courses, books, and conference passes to grow your skills."
    },
    {
      icon: Coffee,
      title: "Modern Tech Setup",
      desc: "Get budget for a high-end laptop, external monitor, and accessories."
    },
    {
      icon: Plane,
      title: "Annual Offsites",
      desc: "We meet up twice a year to brainstorm, celebrate, and unwind."
    },
    {
      icon: Heart,
      title: "Comprehensive Health",
      desc: "Premium medical insurance for you and your dependents, plus wellness benefits."
    }
  ];

  return (
    <div className="relative overflow-hidden bg-background">
      {/* Background decoration grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[100%_48px] opacity-10" />

      {/* Hero Section */}
      <div className="pt-28 pb-20 relative overflow-hidden">
        <div className="container max-w-5xl text-center space-y-8">
          <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider inline-block">
            Careers
          </span>
          <h1 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto tracking-tight leading-none">
            Build the backbone of the <span className="text-primary font-bold">service economy</span>.
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            We are building high-performance booking and billing engines for salon and wellness teams. Join our lean engineering or design crew.
          </p>
        </div>
      </div>

      <div className="container max-w-4xl">

        {/* Culture Section */}
        <div className="mb-20">
          <h2 className="text-heading-2 text-xl sm:text-2xl text-foreground mb-8">What we stand for</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="border border-border bg-card rounded-xl p-6 shadow-xs space-y-3.5 hover:border-primary/45 transition-colors duration-250">
                  <div className="text-primary rounded-lg bg-primary/10 p-2 w-fit">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-bold text-foreground">{v.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Perks Section */}
        <div className="mb-20">
          <h2 className="text-heading-2 text-xl sm:text-2xl text-foreground mb-8">Perks & Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {perks.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="border border-border/80 bg-surface-1 rounded-xl p-5 space-y-2.5">
                  <div className="text-accent rounded-lg bg-accent/10 p-1.5 w-fit">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h4 className="text-xs font-bold text-foreground">{p.title}</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Open Roles Section */}
        <div className="mb-10">
          <h2 className="text-heading-2 text-xl sm:text-2xl text-foreground mb-6">Open Roles</h2>
          
          {jobs.length === 0 ? (
            <div className="border border-dashed border-border bg-surface-1 rounded-xl p-8 text-center space-y-3">
              <div className="inline-flex rounded-full bg-primary/10 p-3 text-primary">
                <Briefcase className="h-6 w-6" />
              </div>
              <h4 className="text-sm font-bold text-foreground">No Active Job Openings</h4>
              <p className="text-xs text-muted-foreground max-w-md mx-auto">
                While we don&apos;t have active positions listed right now, we are always looking for exceptional builders. Submit a general application below, and we will get back to you if a fit arises!
              </p>
              <div className="pt-2">
                <Link href="/careers/apply?job=general-application">
                  <Button variant="outline" className="text-xs h-8 cursor-pointer">
                    Apply Anyway
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {jobs.map((job) => (
                <div 
                  key={job._id}
                  className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                    expandedJob === job._id 
                      ? "border-primary bg-card shadow-xs" 
                      : "border-border bg-card hover:border-border-subtle"
                  }`}
                >
                  {/* Job Accordion Header */}
                  <button 
                    onClick={() => toggleJob(job._id)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-hidden cursor-pointer"
                  >
                    <div className="space-y-1.5">
                      <h3 className="text-sm sm:text-base font-bold text-foreground">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                        <span className="font-semibold text-primary">{job.department}</span>
                        <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{job.type}</span>
                      </div>
                    </div>
                    <div>
                      {expandedJob === job._id ? (
                        <ChevronUp className="h-4.5 w-4.5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-4.5 w-4.5 text-muted-foreground" />
                      )}
                    </div>
                  </button>

                  {/* Job Accordion Description Content */}
                  {expandedJob === job._id && (
                    <div className="border-t border-border/60 p-5 bg-surface-1/40 space-y-6">
                      <div className="text-left font-sans">
                        {renderJobDescription(job.description)}
                      </div>
                      <div className="pt-3 border-t border-border/40 flex items-center gap-3">
                        <Link href={`/careers/apply?job=${job.slug.current}`}>
                          <Button className="font-bold text-xs h-8.5 px-4.5 bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer">
                            Apply for this role
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
