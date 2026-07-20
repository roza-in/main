"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Send, Instagram, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";
import { siteConfig } from "@/config/site";
import { footerNavItems } from "@/config/navigation";
import { footerConfig } from "@/config/footer";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to subscribe. Please try again.");
      }

      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : "An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSocialIcon = (key: string) => {
    switch (key) {
      case "instagram":
        return <Instagram className="h-4 w-4" />;
      case "linkedin":
        return <Linkedin className="h-4 w-4" />;
      case "twitter":
        return <Twitter className="h-4 w-4" />;
      case "facebook":
        return <Facebook className="h-4 w-4" />;
      case "youtube":
        return <Youtube className="h-4 w-4" />;
      case "threads":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.68 14.88c-.68 0-1.29-.26-1.76-.71a3.834 3.834 0 0 1-2.92-3.87c0-2.31 1.77-3.9 3.83-3.9 2.19 0 3.84 1.68 3.84 3.96 0 2.58-1.58 4.31-3.69 4.31-.77 0-1.39-.28-1.63-.67a2.022 2.022 0 0 1-1.84.67 1.83 1.83 0 0 1-1.73-1.87 1.815 1.815 0 0 1 1.86-1.87c.72 0 1.28.27 1.63.7l.08-.63h1.22l-.46 3.19c-.11.75.12 1.13.56 1.13 1.05 0 1.94-1.28 1.94-3.13 0-1.85-1.18-3.08-2.81-3.08-1.63 0-2.82 1.25-2.82 3.08 0 1.83 1.18 3.08 2.82 3.08a2.84 2.84 0 0 0 2.21-1.04l.97.77a4.27 4.27 0 0 1-3.18 1.27z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="border-t border-border bg-surface-1 text-foreground">
      {/* Top section: Main Navigation & Info */}
      <div className="container py-16 md:py-20 max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand & Description */}
          <div className="md:col-span-6 lg:col-span-3 space-y-5">
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/logo.png"
                alt="ROZX Logo"
                width={100}
                height={28}
                className="h-7 w-auto object-contain dark:brightness-110"
                style={{ width: "auto", height: "auto" }}
              />
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Booking and billing software with custom websites for salons, spas, and clinics.
              Manage appointments, customer records, and daily billing in one place.
            </p>

            <div className="space-y-2.5 text-xs text-muted-foreground">
              <div className="flex items-center gap-2.5 hover:text-foreground transition-colors">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="leading-snug">{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Combined Navigation Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:col-span-12 lg:col-span-6 lg:pl-8">
            {footerConfig.columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-bold text-foreground tracking-widest uppercase mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2.5 text-xs">
                  {col.links.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Form */}
          <div className="md:col-span-6 lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-foreground tracking-widest uppercase">
              Stay Updated
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Get weekly blueprints, marketing templates, and tax updates directly in your inbox.
            </p>
            
            {isSubmitted ? (
              <div className="text-xs font-semibold text-primary bg-primary/5 border border-primary/15 py-3 px-4 rounded-lg animate-fade-in text-center">
                ✓ Successfully subscribed! Thank you.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="relative flex items-center">
                  <input
                    type="email"
                    required
                    disabled={isSubmitting}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground placeholder-muted-foreground focus-visible:ring-1 focus-visible:ring-primary focus-visible:outline-none disabled:opacity-50 h-9"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="absolute right-1 top-1/2 -translate-y-1/2 rounded-md bg-primary p-1.5 text-primary-foreground hover:opacity-90 disabled:opacity-55 flex items-center justify-center h-7 w-7"
                    aria-label="Subscribe"
                  >
                    {isSubmitting ? (
                      <div className="h-3 w-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="h-3 w-3" />
                    )}
                  </button>
                </div>
                {submitError && (
                  <p className="text-[10px] text-destructive font-medium animate-fade-in">
                    ⚠️ {submitError}
                  </p>
                )}
              </form>
            )}

            {/* Social Media Links */}
            <div className="flex items-center gap-2 pt-2">
              {Object.entries(siteConfig.social).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-border bg-background p-2 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-200"
                  aria-label={key}
                >
                  {getSocialIcon(key)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section: Legal, copyright */}
      <div className="border-t border-border/60 py-6 text-[11px] text-muted-foreground bg-surface-2">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row max-w-6xl">
          <p>© {new Date().getFullYear()} Rozx. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerNavItems.legal.items.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
