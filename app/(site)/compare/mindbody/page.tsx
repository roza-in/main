import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";
import { Comparison } from "@/components/sections/comparison/comparison";

export const metadata: Metadata = generateMetadata({
  title: "Rozx vs Mindbody: Compare Enterprise Features",
  description: "Compare Rozx and Mindbody features for wellness spas, clinics, and multi-branch service operations.",
  path: "/compare/mindbody",
});

const features = [
  {
    name: "Consolidated Multi-Location Controls",
    desc: "Franchise panels to synchronize inventory, services, and staffing levels across 100+ branches instantly.",
    rozx: true,
    competitor: true,
  },
  {
    name: "API Access & Webhook Integrations",
    desc: "Develop custom booking features and sync databases using our open API and real-time webhook triggers.",
    rozx: true,
    competitor: "Extra Fee Charged",
  },
  {
    name: "Custom Booking Website",
    desc: "Map your own website domain (e.g. yourbusiness.com). Mindbody primarily links to their consumer directory app.",
    rozx: true,
    competitor: false,
  },
  {
    name: "Official WhatsApp Cloud API Campaigning",
    desc: "Deploy verified WhatsApp marketing campaigns. Mindbody relies on standard email and SMS automation.",
    rozx: true,
    competitor: false,
  },
  {
    name: "Flat Predictable Subscription",
    desc: "Subscriptions starting at ₹1,999/mo. Mindbody contracts frequently exceed ₹25,000/mo.",
    rozx: true,
    competitor: false,
  }
];

export default function MindbodyComparePage() {
  return (
    <Comparison
      competitorName="Mindbody"
      tagline="Enterprise power. Zero complexity."
      description="Mindbody is an industry standard for wellness centers but is notorious for complex interfaces, contract lock-ins, and high costs. Rozx delivers the same multi-branch capabilities, APIs, and analytics at flat, reasonable subscription rates."
      features={features}
    />
  );
}
