import React from "react";
import { siteConfig } from "@/config/site";

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    sameAs: [
      "https://twitter.com/rozx_in",
      "https://linkedin.com/company/rozx",
      "https://instagram.com/rozx.in",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8000-000-000",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Rozx Platform",
    operatingSystem: "Web, iOS, Android",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1250",
    },
    description:
      "All-in-one business management, appointment scheduling, and CRM platform built for Indian salons, spas, clinics, and wellness centers.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Rozx?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rozx is a multi-tenant business management and booking software tailored for Indian wellness businesses, salons, spas, and clinics.",
        },
      },
      {
        "@type": "Question",
        name: "Does Rozx support WhatsApp notifications and Razorpay payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Rozx features native automated WhatsApp notifications (reminders, booking confirmations) and full Razorpay integration for UPI, card, and net banking payments.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a free trial for Rozx?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Rozx offers a 14-day free trial with full access to all scheduling, CRM, billing, and analytics features.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
