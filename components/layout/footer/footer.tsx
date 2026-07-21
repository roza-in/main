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
            viewBox="0 0 192 192"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z" />
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
