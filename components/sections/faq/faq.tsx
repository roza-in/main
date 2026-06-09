"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is Rozx and who is it built for?",
    answer: "Rozx is booking and billing software for salons, spas, and clinics. We help you manage your daily operations, including client appointments, invoices, customer records, staff schedules, and a custom website. Instead of paying for 4 or 5 different apps, you get everything you need to run your business in one simple place.",
  },
  {
    question: "Do you charge any commissions on my bookings or payments?",
    answer: "No. Unlike booking aggregators, Rozx is a pure subscription SaaS platform. We charge a flat, predictable monthly or annual rate. We do not take a cut of your appointment bookings, POS transactions, or membership plans. Any payment processing fees are set directly by your gateway provider (e.g. Razorpay, Stripe, Paytm) with 0% markup from us.",
  },
  {
    question: "Can I connect my existing custom domain name to my Rozx website?",
    answer: "Yes, absolutely! On our Growth and Professional plans, you can map your own custom domain name (e.g. www.yourbusiness.com) to your Rozx-built customer website and booking portal. We provide automated SSL certificates, fast CDN delivery, and full SEO optimization for your custom site at no extra cost.",
  },
  {
    question: "How does the 14-day free trial work?",
    answer: "The 14-day free trial gives you complete access to all features in your selected plan (Starter, Growth, or Professional). No credit card is required to sign up. You can configure your business branches, customize your booking portal, add staff members, and send test WhatsApp campaigns. If you choose not to subscribe at the end of the 14 days, your account will be paused, and no charges will occur.",
  },
  {
    question: "Can I import my customer data and past booking history from another software?",
    answer: "Yes. We offer free migration assistance for all plans. You can upload your customer lists, services catalog, and staff rosters using our CSV templates, or our dedicated onboarding team can handle the migration directly from your previous platform (e.g. Zenoti, Fresha, Shortcuts, Boulevard) to ensure zero business downtime.",
  },
  {
    question: "Is there a setup fee or contract lock-in period?",
    answer: "There are absolutely no setup fees, hidden charges, or lock-in contracts. All monthly plans are billed month-to-month, and you can upgrade, downgrade, or cancel your subscription at any time. If you opt for our annual billing plan, you are pre-paying for 12 months with a 20% discount applied.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-muted/20 border-y border-border/60 relative overflow-hidden">
      <div className="container max-w-4xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full inline-block">
            Frequently Asked Questions
          </h2>
          <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Got questions? We've got answers.
          </h3>
          <p className="text-muted-foreground text-base sm:text-lg">
            Find quick answers to common questions about setting up, billing, and migrating to Rozx.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-xl border border-border bg-card overflow-hidden shadow-sm transition-colors duration-200 hover:border-primary/40"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-foreground focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 text-sm sm:text-base">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="border-t border-border/60 px-5 pb-5 pt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
