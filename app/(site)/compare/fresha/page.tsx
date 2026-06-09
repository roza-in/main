import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";
import { Comparison } from "@/components/sections/comparison/comparison";

export const metadata: Metadata = generateMetadata({
  title: "Rozx vs Fresha: Compare Booking Features & Fees",
  description: "Learn why salons and day spas switch from Fresha to Rozx to eliminate booking commissions and customize their booking domains.",
  path: "/compare/fresha",
});

const features = [
  {
    name: "0% Client Booking Commissions",
    desc: "Fresha charges commissions on client bookings from their marketplace. Rozx charges flat, predictable subscriptions with ₹0 marketplace fees.",
    rozx: true,
    competitor: false,
  },
  {
    name: "Custom Website Domain Mapping",
    desc: "Map your own website domain (e.g. yourbusiness.com). Fresha links stay branded on their platform.",
    rozx: true,
    competitor: false,
  },
  {
    name: "Official WhatsApp Cloud API Campaigning",
    desc: "Send bulk newsletters, win-back prompts, and promotions on verified WhatsApp numbers without risk of bans.",
    rozx: true,
    competitor: false,
  },
  {
    name: "Rozx AI Copilot Operations assistant",
    desc: "Integrated AI writing campaigns, predicting inventory levels, and summarizing financial details in chat.",
    rozx: true,
    competitor: false,
  },
  {
    name: "Unlimited Staff Accounts & Rosters",
    desc: "Support and track coordinates for all your service providers without pricing tier upgrades.",
    rozx: true,
    competitor: true,
  },
  {
    name: "GST Invoice Generation & Registers",
    desc: "Automate tax percentages, create invoices, and closing register books at check-out.",
    rozx: true,
    competitor: true,
  }
];

export default function FreshaComparePage() {
  return (
    <Comparison
      competitorName="Fresha"
      tagline="Keep 100% of your earnings. Stop paying booking commissions."
      description="While Fresha offers basic software for salons, their discovery marketplace model takes cuts of bookings for repeat clients. Rozx acts as a dedicated operating system for your brand, charging flat subscriptions and helping you map your own booking domain."
      features={features}
    />
  );
}
