"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Award, BookOpen, Share2 } from "lucide-react";

interface GuideDetails {
  slug: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  steps: string[];
}

const guideDetailsList: Record<string, GuideDetails> = {
  "migration-zenoti-to-rozx": {
    slug: "migration-zenoti-to-rozx",
    title: "How to Migrate from Zenoti to Rozx Without Business Downtime",
    description: "A complete step-by-step roadmap to export your client catalog, booking slots, and staff histories from Zenoti and import them into Rozx.",
    duration: "10 min read",
    level: "Intermediate",
    steps: [
      "Step 1: Export Client Profiles from Zenoti: Go to Reports -> Guest Registry, export all customer files including telephone records and email IDs to a CSV format.",
      "Step 2: Export Services List: Go to Configurations -> Services, export catalog categories, SAC tax codes, pricing details, and duration times.",
      "Step 3: Export Stylist/Provider Rosters: Export staff profiles, tier divisions (Junior, Senior, Master), and commission percentages.",
      "Step 4: Load Templates in Rozx: Log in to your Rozx Dashboard, go to Settings -> Imports, download the Rozx CSV templates, and copy the values into columns.",
      "Step 5: File Validation & Run Import: Upload the populated CSV files. Our validator checks for duplicates or missing GST tax codes. Click 'Run Import' to populate your database.",
      "Step 6: Live Schedule Switchover: Point your DNS coordinates or booking widget link from Zenoti to your new Rozx website domain. Active bookings are synced by our onboarding advisors."
    ]
  },
  "setting-up-whatsapp-business-api": {
    slug: "setting-up-whatsapp-business-api",
    title: "Setting Up Meta Cloud WhatsApp API for Booking Reminders",
    description: "Learn how to register a phone number on Meta Developer Portal, verify your business parameters, and connect WhatsApp to Rozx.",
    duration: "15 min read",
    level: "Advanced",
    steps: [
      "Step 1: Create Meta Developer Account: Go to developer.facebook.com, register as a Meta Developer, and set up a new Business Application.",
      "Step 2: Add WhatsApp Product: Under App Dashboard -> Add Product, select WhatsApp. Get access credentials (temporary token and phone number ID).",
      "Step 3: Setup Permanent API Token: Go to your Meta Business Manager, create a System User, and generate a permanent access token with whatsapp_business_messaging permissions.",
      "Step 4: Add Phone Number: Add your real business phone number to the WhatsApp Cloud account. Verify it via SMS or voice code call.",
      "Step 5: Connect API in Rozx Dashboard: Copy your access token, phone number ID, and business account ID into Settings -> Channels -> WhatsApp in Rozx.",
      "Step 6: Setup Templates & Triggers: Create reminder messages (e.g. Appointment Confirmation, 24-Hour Reminder, Feedback Request). Submit templates for Meta approval, then trigger them automatically."
    ]
  },
  "configuring-gst-taxes": {
    slug: "configuring-gst-taxes",
    title: "Configuring GST Tax Rates and Custom Invoice Templates",
    description: "Guide on configuring single/split tax rates for products and services inside the Rozx checkout Point of Sale dashboard.",
    duration: "8 min read",
    level: "Beginner",
    steps: [
      "Step 1: Add GSTIN Details: Go to Settings -> Invoices -> Corporate Information, input your registered corporate entity name and GSTIN number.",
      "Step 2: Setup Tax Categories: Go to POS Settings -> Tax Rates. Create standard tax classes: GST 18% (split CGST 9% + SGST 9%) for services, and GST 12% or 5% for retail inventory.",
      "Step 3: Link Tax Categories to Services: Navigate to Services Menu. Edit each item and assign its tax category class from the dropdown menu.",
      "Step 4: Design Custom Invoice Layout: Customize header logos, footers, checkout receipts, disclaimers, and payment UPI QR codes.",
      "Step 5: Test Register Checkout: Process a draft checkout transaction on a dummy staff card, verify tax calculations on the invoice receipt, and close the POS register."
    ]
  }
};

interface GuideDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function GuideDetailPage({ params }: GuideDetailPageProps) {
  const resolvedParams = await params;
  const slugStr = resolvedParams.slug || "";
  const guide = guideDetailsList[slugStr];

  if (!guide) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:100%_48px] opacity-10" />

      <div className="container max-w-3xl text-left">
        {/* Back Link */}
        <Link
          href="/guides"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Guides
        </Link>

        {/* Header */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between text-[10px] text-muted-foreground">
            <span className="inline-flex items-center gap-1 rounded bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary uppercase">
              <Award className="h-3.5 w-3.5" />
              {guide.level} Setup
            </span>
            <span className="flex items-center gap-1 text-[10px]">
              <Clock className="h-3.5 w-3.5" />
              {guide.duration}
            </span>
          </div>

          <h1 className="text-display text-2xl sm:text-3xl md:text-4xl tracking-tight">
            {guide.title}
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {guide.description}
          </p>

          <hr className="border-border/60" />
        </div>

        {/* Steps List */}
        <div className="space-y-6 mb-16 font-sans">
          {guide.steps.map((step, idx) => {
            const split = step.split(":");
            const title = split[0];
            const detail = split.slice(1).join(":");

            return (
              <div key={idx} className="flex gap-4 items-start p-5 border border-border bg-card rounded-xl shadow-sm">
                <div className="h-7 w-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm sm:text-base leading-none mb-1.5">{title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
