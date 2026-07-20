"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { 
  CheckCircle2, 
  Loader2, 
  ArrowRight, 
  ArrowLeft,
  Briefcase 
} from "lucide-react";
import { Button } from "@/components/ui/button";

function formatJobTitle(slug: string | null): string {
  if (!slug || slug === "general-application") return "General Application";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function ApplyFormContent() {
  const searchParams = useSearchParams();
  const jobSlug = searchParams.get("job") || "general-application";
  const displayTitle = formatJobTitle(jobSlug);

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
    
    try {
      new URL(resumeUrl);
    } catch {
      errors.resumeUrl = "Please enter a valid URL (e.g. Google Drive, Dropbox link).";
    }

    if (portfolioUrl.trim() !== "") {
      try {
        new URL(portfolioUrl);
      } catch {
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
          jobSlug,
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
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error || "An error occurred while submitting your application.");
        if (data.errors) {
          const flatErrors: Record<string, string> = {};
          Object.entries(data.errors).forEach(([k, v]) => {
            if (Array.isArray(v)) flatErrors[k] = v[0];
          });
          setFieldErrors(flatErrors);
        }
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error: Failed to submit form. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container max-w-2xl text-left">
      {/* Back Link */}
      <Link
        href="/careers"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to Open Positions
      </Link>

      <div className="rounded-xl border border-border bg-card p-6 sm:p-8 relative overflow-hidden shadow-xs">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-[10px] font-bold text-primary uppercase tracking-wide">
              <Briefcase className="h-3 w-3" />
              {displayTitle}
            </span>
            <h1 className="text-display text-2xl sm:text-3xl tracking-tight">
              Submit Application
            </h1>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Complete the details below to submit your profile. Our team will review your application and get back to you within 3-5 business days.
            </p>
          </div>

          {submitStatus === "success" ? (
            <div className="rounded-lg bg-success/10 border border-success/35 p-6 text-center space-y-3.5">
              <div className="inline-flex rounded-full bg-success/20 p-2.5 text-success">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h4 className="text-sm font-bold text-foreground">Application Submitted!</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Thank you for applying to Rozx. We have sent a confirmation receipt to your email. Our recruitment team will review your details and reach out shortly.
              </p>
              <div className="pt-2">
                <Link href="/careers">
                  <Button variant="outline" className="text-xs h-8">
                    Return to Careers
                  </Button>
                </Link>
              </div>
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
                    placeholder="Aarav Mehta"
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
                    placeholder="aarav@example.in"
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

              {/* Resume URL */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-foreground">
                  Resume Link (Google Drive, Dropbox, Notion, etc.) *
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
                  rows={5}
                  placeholder="Tell us a bit about your background and why you're interested in helping build the booking and billing platform for local commerce..."
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

              {/* Submit Button */}
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
  );
}

export function ApplyView() {
  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-background">
      {/* Background decoration grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[100%_48px] opacity-10" />
      
      <Suspense fallback={
        <div className="container max-w-2xl text-center py-20">
          <Loader2 className="h-6 w-6 animate-spin mx-auto mb-2 text-primary" />
          <p className="text-xs text-muted-foreground">Loading application form...</p>
        </div>
      }>
        <ApplyFormContent />
      </Suspense>
    </div>
  );
}
