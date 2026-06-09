"use client";

import React, { useState, useRef } from "react";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Shield, 
  Compass, 
  Award, 
  Sparkles, 
  Coffee, 
  GraduationCap, 
  Plane,
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Loader2, 
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Job {
  _id: string;
  title: string;
  slug: { current: string };
  department: string;
  location: string;
  type: string;
  description: any[];
}

interface CareersViewProps {
  initialJobs: Job[];
}

export function CareersView({ initialJobs }: CareersViewProps) {
  const [jobs] = useState<Job[]>(initialJobs);
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string>("");
  
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  
  const formRef = useRef<HTMLDivElement>(null);

  const toggleJob = (id: string, title: string) => {
    if (expandedJob === id) {
      setExpandedJob(null);
    } else {
      setExpandedJob(id);
    }
  };

  const handleApplyClick = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters.";
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address.";
    }
    
    const phoneRegex = /^[+]?[\d\s\-()]{10,15}$/;
    if (!phoneRegex.test(phone.replace(/\s+/g, ""))) {
      errors.phone = "Please enter a valid phone number (10 to 15 digits).";
    }
    
    if (!selectedRole) {
      errors.role = "Please select a role to apply for.";
    }
    
    try {
      new URL(resumeUrl);
    } catch (_) {
      errors.resumeUrl = "Please enter a valid URL (e.g. Google Drive, Dropbox link).";
    }

    if (portfolioUrl.trim() !== "") {
      try {
        new URL(portfolioUrl);
      } catch (_) {
        errors.portfolioUrl = "Please enter a valid URL (e.g. LinkedIn profile link).";
      }
    }
    
    if (coverLetter.trim().length < 10) {
      errors.coverLetter = "Tell us a bit more about yourself (at least 10 characters).";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setErrorMessage("");
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          role: selectedRole,
          resumeUrl,
          portfolioUrl,
          coverLetter,
        }),
      });
      
      const data = await res.json();
      
      if (res.ok && data.success) {
        setSubmitStatus("success");
        // Reset form
        setName("");
        setEmail("");
        setPhone("");
        setResumeUrl("");
        setPortfolioUrl("");
        setCoverLetter("");
        setSelectedRole("");
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error || "An error occurred while submitting your application.");
        if (data.errors) {
          // Flatten standard array Zod error format if returned
          const flatErrors: Record<string, string> = {};
          Object.entries(data.errors).forEach(([k, v]) => {
            if (Array.isArray(v)) flatErrors[k] = v[0];
          });
          setFieldErrors(flatErrors);
        }
      }
    } catch (err) {
      setSubmitStatus("error");
      setErrorMessage("Network error: Failed to submit form. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  function renderJobDescription(body: any): React.ReactNode[] {
    if (!body) return [];
    if (Array.isArray(body)) {
      return body.map((block: any, idx: number) => {
        if (block && block._type === "block" && block.children) {
          const text = block.children.map((child: any) => child.text).join("");
          const style = block.style || "normal";
  
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
    }
  ];

  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-background">
      {/* Background decoration grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:100%_48px] opacity-10" />

      <div className="container max-w-4xl text-left">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 mb-20">
          <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wide inline-block">
            Careers
          </span>
          <h1 className="text-display text-4xl sm:text-5xl md:text-6xl tracking-tight">
            Build the OS for <span className="text-primary">Local Commerce</span>.
          </h1>
          <p className="text-body text-muted-foreground leading-relaxed max-measure">
            We are assembling a team of passionate developers, designers, and creators to simplify daily operations for salons, spas, and wellness centers globally.
          </p>
        </div>

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
        <div className="mb-20">
          <h2 className="text-heading-2 text-xl sm:text-2xl text-foreground mb-6">Open Roles</h2>
          
          {jobs.length === 0 ? (
            <div className="border border-dashed border-border bg-surface-1 rounded-xl p-8 text-center space-y-3">
              <div className="inline-flex rounded-full bg-primary/10 p-3 text-primary">
                <Briefcase className="h-6 w-6" />
              </div>
              <h4 className="text-sm font-bold text-foreground">No Active Job Openings</h4>
              <p className="text-xs text-muted-foreground max-w-md mx-auto">
                While we don't have active positions listed right now, we are always looking for exceptional builders. Submit a general application below, and we will get back to you if a fit arises!
              </p>
              <div className="pt-2">
                <Button 
                  onClick={() => handleApplyClick("General Application")}
                  variant="outline" 
                  className="text-xs h-8"
                >
                  Apply Anyway
                </Button>
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
                    onClick={() => toggleJob(job._id, job.title)}
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
                        <Button 
                          onClick={() => handleApplyClick(job.title)}
                          className="font-bold text-xs h-8.5 px-4.5 bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
                          Apply for this role
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Application Form Section */}
        <div 
          ref={formRef} 
          className="rounded-xl border border-border bg-card p-6 sm:p-8 relative overflow-hidden shadow-xs"
        >
          <div className="space-y-6 max-w-2xl">
            <div className="space-y-1.5">
              <h3 className="text-heading-3 text-lg font-bold text-foreground">Submit Application</h3>
              <p className="text-xs text-muted-foreground">
                Join us in Delhi or remote-first. Fill out the form, and we will get back to you within 3-5 business days.
              </p>
            </div>

            {submitStatus === "success" ? (
              <div className="rounded-lg bg-success/10 border border-success/35 p-6 text-center space-y-3.5">
                <div className="inline-flex rounded-full bg-success/20 p-2.5 text-success">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="text-sm font-bold text-foreground">Application Received Successfully!</h4>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-md mx-auto">
                  Thank you for applying to Rozx. We have sent a confirmation email to your address. Our recruitment team will review your profile and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitStatus === "error" && (
                  <div className="rounded-md bg-destructive/10 border border-destructive/20 p-3.5 text-xs text-destructive">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full text-xs h-9 px-3.5 rounded-lg border bg-background focus:outline-hidden transition-colors ${
                        fieldErrors.name ? "border-destructive focus:ring-destructive" : "border-border"
                      }`}
                    />
                    {fieldErrors.name && (
                      <p className="text-[10px] text-destructive">{fieldErrors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full text-xs h-9 px-3.5 rounded-lg border bg-background focus:outline-hidden transition-colors ${
                        fieldErrors.email ? "border-destructive focus:ring-destructive" : "border-border"
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="text-[10px] text-destructive">{fieldErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground">Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 99999 99999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full text-xs h-9 px-3.5 rounded-lg border bg-background focus:outline-hidden transition-colors ${
                        fieldErrors.phone ? "border-destructive focus:ring-destructive" : "border-border"
                      }`}
                    />
                    {fieldErrors.phone && (
                      <p className="text-[10px] text-destructive">{fieldErrors.phone}</p>
                    )}
                  </div>

                  {/* Applying Position */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-foreground">Applying For *</label>
                    <select
                      required
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      className={`w-full text-xs h-9 px-3 rounded-lg border bg-background focus:outline-hidden transition-colors ${
                        fieldErrors.role ? "border-destructive focus:ring-destructive" : "border-border"
                      }`}
                    >
                      <option value="">Select a position...</option>
                      <option value="General Application">General Application</option>
                      {jobs.map((j) => (
                        <option key={j._id} value={j.title}>{j.title}</option>
                      ))}
                    </select>
                    {fieldErrors.role && (
                      <p className="text-[10px] text-destructive">{fieldErrors.role}</p>
                    )}
                  </div>
                </div>

                {/* Resume URL */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground flex justify-between">
                    <span>Resume Link (Google Drive, Dropbox, Notion, etc.) *</span>
                  </label>
                  <input 
                    type="url" 
                    required
                    placeholder="https://drive.google.com/..."
                    value={resumeUrl}
                    onChange={(e) => setResumeUrl(e.target.value)}
                    className={`w-full text-xs h-9 px-3.5 rounded-lg border bg-background focus:outline-hidden transition-colors ${
                      fieldErrors.resumeUrl ? "border-destructive focus:ring-destructive" : "border-border"
                    }`}
                  />
                  {fieldErrors.resumeUrl && (
                    <p className="text-[10px] text-destructive">{fieldErrors.resumeUrl}</p>
                  )}
                </div>

                {/* Portfolio / LinkedIn URL */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground">Portfolio / LinkedIn Profile Link (Optional)</label>
                  <input 
                    type="url" 
                    placeholder="https://linkedin.com/in/..."
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    className={`w-full text-xs h-9 px-3.5 rounded-lg border bg-background focus:outline-hidden transition-colors ${
                      fieldErrors.portfolioUrl ? "border-destructive focus:ring-destructive" : "border-border"
                    }`}
                  />
                  {fieldErrors.portfolioUrl && (
                    <p className="text-[10px] text-destructive">{fieldErrors.portfolioUrl}</p>
                  )}
                </div>

                {/* Cover Letter */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground">Why do you want to join Rozx? *</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell us a bit about your experiences and why you're interested in building the Operating System for local commerce..."
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    className={`w-full text-xs p-3.5 rounded-lg border bg-background focus:outline-hidden transition-colors ${
                      fieldErrors.coverLetter ? "border-destructive focus:ring-destructive" : "border-border"
                    }`}
                  />
                  {fieldErrors.coverLetter && (
                    <p className="text-[10px] text-destructive">{fieldErrors.coverLetter}</p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="font-bold text-xs h-9.5 px-6 bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
