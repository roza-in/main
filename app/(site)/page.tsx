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
import { defaultFaqItems } from "@/lib/constants/faq";
import { CTASection } from "@/components/sections/cta/cta-section";

export const metadata: Metadata = generateMetadata({
  path: "/",
});

export default function HomePage() {
  // Generate JSON-LD schemas for SEO
  const orgJsonLd = organizationSchema();
  const websiteJsonLd = websiteSchema();
  const appJsonLd = softwareApplicationSchema();
  const faqJsonLd = faqSchema(defaultFaqItems);

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
      
      <FAQ items={defaultFaqItems} />
      
      <CTASection />
    </>
  );
}
