import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";
import { Comparison } from "@/components/sections/comparison/comparison";

export const metadata: Metadata = generateMetadata({
  title: "Rozx vs Booksy: Feature & Pricing Comparison",
  description: "Compare Rozx and Booksy for salons, barbershops, and studios. Flat SaaS subscription pricing and custom domain website.",
  path: "/compare/booksy",
});

const features = [
  {
    name: "0% Booking Commission Model",
    desc: "Rozx operates strictly as a subscription platform with ₹0 booking commission fees.",
    rozx: true,
    competitor: "First Booking Commission",
  },
  {
    name: "Custom Website Domain Mapping",
    desc: "Map your custom website domain (e.g. www.yourbrand.com) with automated SSL included.",
    rozx: true,
    competitor: false,
  },
  {
    name: "Official WhatsApp Cloud API Campaigning",
    desc: "Dispatch official broadcast campaigns and appointment reminders via Meta WhatsApp API.",
    rozx: true,
    competitor: false,
  },
  {
    name: "GST Invoicing & Thermal Printing",
    desc: "Itemize CGST/SGST, SAC codes, and print directly on 80mm/58mm thermal printers.",
    rozx: true,
    competitor: "Standard Tax Tools",
  },
  {
    name: "Digital Intake Forms & Progress Notes",
    desc: "Attach disclaimers, waivers, and progress notes to client visits.",
    rozx: true,
    competitor: "Basic Notes",
  }
];

export default function BooksyComparePage() {
  return (
    <Comparison
      competitorName="Booksy"
      tagline="Flat subscription terms and custom domain booking for your brand."
      description="Compare how Rozx delivers dedicated software for your business with flat subscription pricing, custom domain website publishing, and GST billing."
      features={features}
    />
  );
}
