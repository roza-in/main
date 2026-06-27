import React from "react";
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo/metadata";
import { organizationSchema, websiteSchema, softwareApplicationSchema, faqSchema } from "@/lib/seo/schema";
import { Hero } from "@/components/sections/hero/hero";
import { Mockup } from "@/components/sections/mockup/mockup";
import { FeaturesGrid } from "@/components/sections/features/features-grid";
import { Industries } from "@/components/sections/industries/industries";
import { Testimonials } from "@/components/sections/testimonials/testimonials";
import { PricingPreview } from "@/components/sections/pricing/pricing-preview";
import { FAQ } from "@/components/sections/faq/faq";
import { CTASection } from "@/components/sections/cta/cta-section";

export const metadata: Metadata = generateMetadata({
  path: "/",
});

export default function HomePage() {
  // Generate JSON-LD schemas for SEO
  const orgJsonLd = organizationSchema();
  const websiteJsonLd = websiteSchema();
  const appJsonLd = softwareApplicationSchema();
  
  const faqData = [
    {
      question: "What is Rozx and who is it built for?",
      answer: "Rozx is booking and billing software for salons, spas, and clinics. We help you manage your daily operations, including client appointments, invoices, customer records, staff schedules, and a custom website. Instead of paying for 4 or 5 different apps, you get everything you need to run your business in one simple place."
    },
    {
      question: "Do you charge any commissions on my bookings or payments?",
      answer: "No. Unlike booking aggregators, Rozx is a pure subscription SaaS platform. We charge a flat, predictable monthly or annual rate. We do not take a cut of your appointment bookings, POS transactions, or membership plans. Any payment processing fees are set directly by your gateway provider (e.g. Razorpay, Stripe, Paytm) with 0% markup from us."
    },
    {
      question: "Can I connect my existing custom domain name to my Rozx website?",
      answer: "Yes, absolutely! On our Growth and Professional plans, you can map your own custom domain name (e.g. www.yourbusiness.com) to your Rozx-built customer website and booking portal. We provide automated SSL certificates, fast CDN delivery, and full SEO optimization for your custom site at no extra cost."
    },
    {
      question: "How does the 14-day free trial work?",
      answer: "The 14-day free trial gives you complete access to all features in your selected plan (Starter, Growth, or Professional). No credit card is required to sign up. You can configure your business branches, customize your booking portal, add staff members, and send test WhatsApp campaigns. If you choose not to subscribe at the end of the 14 days, your account will be paused, and no charges will occur."
    },
    {
      question: "Can I import my customer data and past booking history from another software?",
      answer: "Yes. We offer free migration assistance for all plans. You can upload your customer lists, services catalog, and staff rosters using our CSV templates, or our dedicated onboarding team can handle the migration directly from your previous platform (e.g. Zenoti, Fresha, Shortcuts, Boulevard) to ensure zero business downtime."
    },
    {
      question: "Is there a setup fee or contract lock-in period?",
      answer: "There are absolutely no setup fees, hidden charges, or lock-in contracts. All monthly plans are billed month-to-month, and you can upgrade, downgrade, or cancel your subscription at any time. If you opt for our annual billing plan, you are pre-paying for 12 months with a 20% discount applied."
    }
  ];
  const faqJsonLd = faqSchema(faqData);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Page Sections */}
      <Hero />
      <Mockup />
      
      <FeaturesGrid />
      
      <Industries />
      
      <Testimonials />
      
      <PricingPreview />
      
      <FAQ />
      
      <CTASection />
    </>
  );
}
