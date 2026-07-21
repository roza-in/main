"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { defaultFaqItems, type FAQItem } from "@/lib/constants/faq";
export type { FAQItem };
export { defaultFaqItems };

export function FAQ({ items = defaultFaqItems }: { items?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-24 bg-muted/20 border-y border-border/60 relative overflow-hidden">
      <div className="container max-w-4xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full inline-block">
            Frequently Asked Questions
          </h2>
          <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Got questions? We&apos;ve got answers.
          </h3>
          <p className="text-muted-foreground text-base sm:text-lg">
            Find quick answers about platform capabilities, billing, custom domains, and setup.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-xl border border-border bg-card overflow-hidden shadow-xs transition-all duration-200 hover:border-primary/40 hover:shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left font-semibold text-foreground focus-visible:ring-1 focus-visible:ring-primary focus-visible:outline-none"
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
                      <div className="border-t border-border/60 px-6 pb-6 pt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
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
