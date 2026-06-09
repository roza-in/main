"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, Zap, Globe, CreditCard, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const integrationsList = [
  {
    category: "Payments",
    icon: CreditCard,
    items: [
      { name: "Razorpay", desc: "Process UPI, NetBanking, and credit/debit card payments in India." },
      { name: "Stripe", desc: "Accept international card payments with automated global compliance." },
      { name: "Paytm Business", desc: "Collect payments via Paytm wallet, UPI QR, and netbanking." },
      { name: "Cashfree", desc: "Settle checkout payouts instantly using multiple gateway routers." }
    ]
  },
  {
    category: "Messaging & Notifications",
    icon: Mail,
    items: [
      { name: "Official WhatsApp Cloud API", desc: "Dispatch template reminders and newsletters using verified brand numbers." },
      { name: "Twilio SMS Gateway", desc: "Fallback SMS text reminders and OTP codes across global telecom carriers." },
      { name: "SendGrid Email", desc: "Send html invoice copies, confirmation summaries, and marketing emails." }
    ]
  },
  {
    category: "Calendars & Sync",
    icon: Calendar,
    items: [
      { name: "Google Calendar", desc: "Synchronize client booking times with staff personal calendars." },
      { name: "Outlook Calendar", desc: "Schedules and meetings sync to Outlook calendars." },
      { name: "Apple iCal", desc: "Keep staff schedules updated on Apple devices." }
    ]
  },
  {
    category: "Domains & Hosting",
    icon: Globe,
    items: [
      { name: "GoDaddy", desc: "Map GoDaddy domains to custom Rozx customer booking portals." },
      { name: "Namecheap", desc: "Set up Namecheap custom domains with SSL certificate parameters." },
      { name: "Google Domains", desc: "Connect Google domains for booking portal integration." }
    ]
  }
];

export default function IntegrationsPage() {
  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--color-primary-100)_0%,_transparent_60%)] opacity-55 dark:opacity-35" />

      <div className="container max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Integrations Catalog
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Connect Rozx with the payment gateways, messaging networks, and calendar systems
            your business already uses daily.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="space-y-12 mb-16">
          {integrationsList.map((cat, idx) => {
            const CatIcon = cat.icon;
            return (
              <div key={idx} className="space-y-6 text-left">
                <div className="flex items-center gap-3.5 border-b border-border/60 pb-3">
                  <div className="text-primary bg-primary/10 rounded-lg p-2">
                    <CatIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{cat.category}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="rounded-xl border border-border bg-card p-5 shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="font-bold text-foreground text-sm flex items-center justify-between">
                          <span>{item.name}</span>
                          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold text-primary uppercase">Active</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Banner */}
        <div className="rounded-2xl border border-border bg-muted/10 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-left">
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-foreground text-sm">Need a custom integration or webhook?</h4>
              <p className="text-xs text-muted-foreground">Our developer platform supports custom REST APIs and webhook integrations on Professional plans.</p>
            </div>
          </div>
          <Link href="/contact?subject=custom_integration">
            <Button variant="outline" className="font-bold text-xs bg-background">
              Contact Developers
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
