import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { generateMetadata } from "@/lib/seo/metadata";
import { organizationSchema, websiteSchema, softwareApplicationSchema, faqSchema } from "@/lib/seo/schema";
import { Hero } from "@/components/sections/hero/hero";
import { LazySection } from "@/components/shared/lazy-section";

const FeaturesGrid = dynamic(() => import("@/components/sections/features/features-grid").then((m) => m.FeaturesGrid), {
  loading: () => null,
});

const Industries = dynamic(() => import("@/components/sections/industries/industries").then((m) => m.Industries), {
  loading: () => null,
});

const Testimonials = dynamic(() => import("@/components/sections/testimonials/testimonials").then((m) => m.Testimonials), {
  loading: () => null,
});

const PricingPreview = dynamic(() => import("@/components/sections/pricing/pricing-preview").then((m) => m.PricingPreview), {
  loading: () => null,
});

const FAQ = dynamic(() => import("@/components/sections/faq/faq").then((m) => m.FAQ), {
  loading: () => null,
});

const CTASection = dynamic(() => import("@/components/sections/cta/cta-section").then((m) => m.CTASection), {
  loading: () => null,
});

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
      answer: "Rozx is a complete Service Business Operating System. It is designed for client-focused, appointment-based service companies, such as hair salons, wellness spas, aesthetic clinics, barbershops, makeup studios, and wellness centers. It replaces multiple fragmented tools by consolidating online bookings, calendar, payments, automated marketing, loyalty points, customer CRM, and a custom website into one dashboard."
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
      
      <LazySection height="550px">
        <FeaturesGrid />
      </LazySection>
      
      <LazySection height="500px">
        <Industries />
      </LazySection>
      
      <LazySection height="550px">
        <Testimonials />
      </LazySection>
      
      <LazySection height="600px">
        <PricingPreview />
      </LazySection>
      
      <LazySection height="500px">
        <FAQ />
      </LazySection>
      
      <LazySection height="400px">
        <CTASection />
      </LazySection>
    </>
  );
}
