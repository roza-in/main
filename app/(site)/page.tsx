import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { generateMetadata } from "@/lib/seo/metadata";
import { organizationSchema, websiteSchema, softwareApplicationSchema, faqSchema } from "@/lib/seo/schema";
import { Hero } from "@/components/sections/hero/hero";
import { LazySection } from "@/components/shared/lazy-section";

const FeaturesGrid = dynamic(() => import("@/components/sections/features/features-grid").then((m) => m.FeaturesGrid), {
  loading: () => <div className="h-[550px] w-full animate-pulse bg-muted/5 rounded-xl" />,
});

const Industries = dynamic(() => import("@/components/sections/industries/industries").then((m) => m.Industries), {
  loading: () => <div className="h-[500px] w-full animate-pulse bg-muted/5 rounded-xl" />,
});

const Testimonials = dynamic(() => import("@/components/sections/testimonials/testimonials").then((m) => m.Testimonials), {
  loading: () => <div className="h-[550px] w-full animate-pulse bg-muted/5 rounded-xl" />,
});

const PricingPreview = dynamic(() => import("@/components/sections/pricing/pricing-preview").then((m) => m.PricingPreview), {
  loading: () => <div className="h-[600px] w-full animate-pulse bg-muted/5 rounded-xl" />,
});

const FAQ = dynamic(() => import("@/components/sections/faq/faq").then((m) => m.FAQ), {
  loading: () => <div className="h-[500px] w-full animate-pulse bg-muted/5 rounded-xl" />,
});

const CTASection = dynamic(() => import("@/components/sections/cta/cta-section").then((m) => m.CTASection), {
  loading: () => <div className="h-[400px] w-full animate-pulse bg-muted/5 rounded-xl" />,
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
      answer: "Rozx is a complete Service Business Operating System. It is designed for client-focused, appointment-based service companies, such as hair salons, wellness spas, aesthetic clinics, barbershops, makeup studios, and wellness centers."
    },
    {
      question: "Do you charge any commissions on my bookings or payments?",
      answer: "No. Unlike booking aggregators, Rozx is a pure subscription SaaS platform. We charge a flat, predictable monthly or annual rate."
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
