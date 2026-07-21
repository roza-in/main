import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";
import { Comparison } from "@/components/sections/comparison/comparison";

export const metadata: Metadata = generateMetadata({
  title: "Rozx vs Mindbody: Feature & Pricing Comparison",
  description: "Compare Rozx and Mindbody for salons, spas, and wellness clinics in India. Transparent pricing and local GST invoicing.",
  path: "/compare/mindbody",
});

const features = [
  {
    name: "Transparent SaaS Pricing",
    desc: "Flat pricing starting at ₹999/month with no hidden setup fees or complex contracts.",
    rozx: true,
    competitor: "Variable / High Tiers",
  },
  {
    name: "Custom Website Domain Mapping",
    desc: "Host your custom domain booking site (e.g. www.yourbrand.com) with SSL included.",
    rozx: true,
    competitor: false,
  },
  {
    name: "WhatsApp Campaign Integration",
    desc: "Send broadcast campaigns and booking reminders via official WhatsApp Cloud API.",
    rozx: true,
    competitor: false,
  },
  {
    name: "GST-Compliant Invoicing & Thermal Printing",
    desc: "Itemize CGST and SGST with support for A4 PDFs and thermal receipt printers.",
    rozx: true,
    competitor: "US-Centric Tax Models",
  },
  {
    name: "Digital Intake Forms & Waivers",
    desc: "Collect signed disclaimers and progress notes with timestamped audit trails.",
    rozx: true,
    competitor: true,
  }
];

export default function MindbodyComparePage() {
  return (
    <Comparison
      competitorName="Mindbody"
      tagline="Streamlined operations tailored for Indian service businesses."
      description="Compare how Rozx offers a clean, affordable platform for appointment scheduling, GST billing, and custom domain booking tailored specifically for Indian salons, spas, and clinics."
      features={features}
    />
  );
}
