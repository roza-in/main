import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";
import { Comparison } from "@/components/sections/comparison/comparison";

export const metadata: Metadata = generateMetadata({
  title: "Rozx vs Booksy: Compare Booking Features & Subscriptions",
  description: "Find out why barbershops and nail studios choose Rozx over Booksy to reduce commission cuts on bookings.",
  path: "/compare/booksy",
});

const features = [
  {
    name: "0% Commission Cuts on New Clients",
    desc: "Booksy charges commission fees on first bookings made by new clients through their directory. Rozx is 100% commission-free.",
    rozx: true,
    competitor: false,
  },
  {
    name: "Custom Booking Website",
    desc: "Map your own website domain (e.g. yourbusiness.com). Booksy primarily directs clients to their platform directory.",
    rozx: true,
    competitor: false,
  },
  {
    name: "Automated Marketing & WhatsApp Campaigns",
    desc: "Run retention automation campaigns and WhatsApp confirmations. Booksy is restricted to standard app notifications.",
    rozx: true,
    competitor: false,
  },
  {
    name: "Advanced Client History CRM",
    desc: "Maintain detailed formula files, style tags, and lifetime visit tracking values on profiles.",
    rozx: true,
    competitor: true,
  },
  {
    name: "Flat Subscription Model",
    desc: "One transparent subscription. No extra marketing fees or client acquisition commissions.",
    rozx: true,
    competitor: false,
  }
];

export default function BooksyComparePage() {
  return (
    <Comparison
      competitorName="Booksy"
      tagline="Your clients. Your brand. 0% marketplace commissions."
      description="Booksy functions primarily as a marketplace aggregator, which means they acquire new clients but charge commission cuts on those bookings. Rozx gives you a dedicated client portal under your own domain name with flat SaaS subscription terms."
      features={features}
    />
  );
}
