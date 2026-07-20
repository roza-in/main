"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Book, Mail, Phone, MessageSquare } from "lucide-react";

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
    <div className="relative overflow-hidden bg-background">
      {/* Background ambient spots & grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-size-[100%_48px] opacity-10" />
      <div className="absolute top-0 left-[-15%] w-[60%] h-[60%] bg-radial from-primary/10 via-primary/5 to-transparent blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute top-[20%] right-[-15%] w-[60%] h-[60%] bg-radial from-primary/10 via-primary/5 to-transparent blur-[140px] -z-10 pointer-events-none" />

      {/* Hero Section */}
      <div className="pt-28 pb-20 relative overflow-hidden">
        <div className="container max-w-5xl text-center space-y-8">
          <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary uppercase tracking-wider inline-block">
            Support Center
          </span>
          <h1 className="text-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto tracking-tight leading-none">
            Rozx <span className="text-primary font-bold">Help Center</span>.
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Search our knowledge base for tutorials and troubleshooting guides.
          </p>
          
          <div className="relative max-w-xl mx-auto pt-2">
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
      </div>

      <div className="container max-w-5xl">

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
