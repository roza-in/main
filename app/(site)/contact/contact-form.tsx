"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, MapPin, Copy, Check, ArrowRight, Send, Loader2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address").max(100),
  company: z.string().max(100).optional(),
  subject: z.string().min(2, "Subject is required").max(150),
  message: z.string().min(10, "Message must be at least 10 characters").max(3000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const subjectOptions = [
  "General Inquiry",
  "Pricing & Plans",
  "Enterprise / Custom Setup",
  "Migration Assistance",
  "Technical Support",
  "Partnership",
  "Other",
];

export function ContactForm() {
  const [copied, setCopied] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject:
        typeof window !== "undefined"
          ? new URLSearchParams(window.location.search).get("subject") ?? "General Inquiry"
          : "General Inquiry",
    },
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitState("success");
        reset();
      } else {
        setSubmitState("error");
      }
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <div className="relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[100%_48px] opacity-10" />

      {/* Hero Section */}
      <div className="pt-28 pb-20 relative overflow-hidden">
        <div className="container max-w-5xl text-center space-y-8">
          <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider inline-block">
            Get in touch
          </span>
          <h1 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto tracking-tight leading-none">
            Contact our <span className="text-primary font-bold">team</span>.
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Have questions about multi-location branch configs, payment settle cycles, or Custom SLA setups? We respond within 12 hours.
          </p>
        </div>
      </div>

      <div className="container max-w-5xl">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left — Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            {/* Email Support Card */}
            <div className="rounded-xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/45 transition-all duration-200 shadow-xs">
              <div className="space-y-4 text-left">
                <div className="rounded-lg bg-primary/10 p-2.5 text-primary w-fit">
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="text-heading-3 text-base font-bold text-foreground">Email Support</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  For workspace setups, account migrations, or custom API access requests. All inquiries are tracked and answered.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between gap-3 text-left">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-xs font-bold text-foreground hover:text-primary transition-colors truncate"
                >
                  {siteConfig.contact.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  id="copy-email-btn"
                  className="flex items-center gap-1 rounded-lg border border-border bg-surface-2 px-3 py-1 text-xs font-semibold text-muted-foreground hover:bg-surface-3 hover:text-foreground transition-all shrink-0 min-h-[32px]"
                  aria-label="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-primary" />
                      <span className="text-primary text-[10px] font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span className="text-[10px]">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="rounded-xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/45 transition-all duration-200 shadow-xs">
              <div className="space-y-4 text-left">
                <div className="rounded-lg bg-primary/10 p-2.5 text-primary w-fit">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-heading-3 text-base font-bold text-foreground">Registered Address</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Our central operations coordinates. Office entry is restricted to scheduled appointments only.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-border text-left">
                <span className="text-xs font-bold text-foreground/80 leading-relaxed block">
                  {siteConfig.contact.address}
                </span>
              </div>
            </div>

            {/* Book Demo Card */}
            <div className="rounded-xl border border-border bg-surface-1 p-5 text-left space-y-3 shadow-xs">
              <h3 className="text-heading-3 text-sm font-bold text-foreground">Schedule a live walkthrough</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Skip email lists. Book a direct Zoom demo to see Rozx configured for your business type.
              </p>
              <Link href="/book-demo">
                <Button variant="premium" className="font-bold text-xs inline-flex items-center gap-1.5 h-8.5 px-4.5">
                  Book a Live Demo
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-border bg-card p-6 shadow-xs">
              <h2 className="text-heading-3 text-base font-bold text-foreground mb-6">Send us a message</h2>

              {submitState === "success" ? (
                <div id="contact-success" className="flex flex-col items-center justify-center text-center py-12 space-y-3">
                  <div className="rounded-full bg-primary/10 p-4 text-primary mb-2">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="text-heading-3 text-base font-bold text-foreground">Message sent!</h3>
                  <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
                    We have received your message and will respond within 12 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitState("idle")}
                    className="text-xs font-bold text-primary hover:underline mt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  id="contact-form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4"
                  noValidate
                >
                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-semibold text-foreground">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="contact-name"
                        {...register("name")}
                        placeholder="Priya Sharma"
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      />
                      {errors.name && (
                        <p className="text-[10px] text-destructive">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-semibold text-foreground">
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        {...register("email")}
                        placeholder="priya@example.in"
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      />
                      {errors.email && (
                        <p className="text-[10px] text-destructive">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Company (optional) + Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-company" className="text-xs font-semibold text-foreground">
                        Company <span className="text-muted-foreground font-normal">(optional)</span>
                      </label>
                      <input
                        id="contact-company"
                        {...register("company")}
                        placeholder="Luxe Salon & Spa"
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contact-subject" className="text-xs font-semibold text-foreground">
                        Subject <span className="text-destructive">*</span>
                      </label>
                      <select
                        id="contact-subject"
                        {...register("subject")}
                        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      >
                        {subjectOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.subject && (
                        <p className="text-[10px] text-destructive">{errors.subject.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-foreground">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      {...register("message")}
                      rows={5}
                      placeholder="Tell us about your business and what you need..."
                      className="w-full rounded-lg border border-input bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="text-[10px] text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Error banner */}
                  {submitState === "error" && (
                    <p className="text-xs text-destructive bg-destructive/10 rounded-lg px-3 py-2">
                      Something went wrong. Please try again or email us directly at {siteConfig.contact.email}.
                    </p>
                  )}

                  {/* Submit */}
                  <div className="pt-1">
                    <Button
                      type="submit"
                      id="contact-submit"
                      variant="premium"
                      disabled={submitState === "loading"}
                      className="w-full sm:w-auto font-bold text-xs h-9 px-6 inline-flex items-center gap-2"
                    >
                      {submitState === "loading" ? (
                        <>
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-3.5 w-3.5" />
                          Send Message
                        </>
                      )}
                    </Button>
                    <p className="text-[10px] text-muted-foreground mt-2">
                      We respond within 12 business hours on weekdays.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
