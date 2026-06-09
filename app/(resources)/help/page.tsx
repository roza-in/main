"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Book, HelpCircle, Mail, Phone, ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const helpCategories = [
  {
    title: "Getting Started",
    desc: "Create accounts, complete business settings, and configure staff lists.",
    articles: ["Setting up your first branch", "Inviting staff members", "Customizing your booking link"]
  },
  {
    title: "Calendar & Bookings",
    desc: "Manage slots, block off stylist times, handle walk-ins, and waitlists.",
    articles: ["Preventing double bookings", "Handling walk-in registrations", "Waitlist notifications setup"]
  },
  {
    title: "POS & Billing",
    desc: "Configure UPI terminals, print receipt registers, and apply GST invoices.",
    articles: ["Setting up Razorpay and UPI", "Closing register drawers daily", "Configuring tax SAC codes"]
  },
  {
    title: "Marketing Automation",
    desc: "Deploy WhatsApp Cloud campaigns, review booster links, and coupons.",
    articles: ["Meta Business verification guide", "Creating Win-back campaigns", "Google reviews reminder trigger"]
  }
];

export default function HelpIndexPage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-100)_0%,_transparent_60%)] opacity-55 dark:opacity-35" />

      <div className="container max-w-5xl">
        {/* Header with Search */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Help Center
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Search our knowledge base for tutorials and troubleshooting guides.
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tutorials (e.g. UPI payment, WhatsApp templates...)"
              className="w-full rounded-xl border border-border bg-card pl-12 pr-4 py-3.5 text-sm text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 shadow-sm"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {helpCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm text-left hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-foreground mb-1">{cat.title}</h3>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{cat.desc}</p>
              
              <ul className="space-y-2.5 pt-3 border-t border-border/60">
                {cat.articles.map((art, artIdx) => (
                  <li key={artIdx}>
                    <Link
                      href="/guides"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                    >
                      <Book className="h-3.5 w-3.5" />
                      {art}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Support Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="border border-border bg-card rounded-xl p-5 shadow-sm space-y-3 text-left">
            <div className="text-primary rounded-lg bg-primary/10 p-2.5 w-fit">
              <Mail className="h-5 w-5" />
            </div>
            <h4 className="text-sm font-bold text-foreground">Email Support</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">Submit a ticket for account queries.</p>
            <a href="mailto:hello@rozx.in" className="text-xs font-bold text-primary hover:underline block pt-1">hello@rozx.in</a>
          </div>

          <div className="border border-border bg-card rounded-xl p-5 shadow-sm space-y-3 text-left">
            <div className="text-primary rounded-lg bg-primary/10 p-2.5 w-fit">
              <Phone className="h-5 w-5" />
            </div>
            <h4 className="text-sm font-bold text-foreground">Phone Support</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">Call our onboarding advisors.</p>
            <a href="tel:+917905861940" className="text-xs font-bold text-primary hover:underline block pt-1">+91 79058 61940</a>
          </div>

          <div className="border border-border bg-card rounded-xl p-5 shadow-sm space-y-3 text-left">
            <div className="text-primary rounded-lg bg-primary/10 p-2.5 w-fit">
              <MessageSquare className="h-5 w-5" />
            </div>
            <h4 className="text-sm font-bold text-foreground">Live chat</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">Available Monday to Friday 9 AM - 6 PM.</p>
            <Link href="/contact" className="text-xs font-bold text-primary hover:underline block pt-1">Start Live Chat →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
