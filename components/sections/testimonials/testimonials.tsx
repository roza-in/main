"use client";

import React from "react";
import { motion } from "motion/react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  plan: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Rozx has completely transformed how we manage our multi-location salon chain. Staff scheduling, booking notifications, and payments now run on autopilot.",
    author: "Priya Nair",
    role: "Founder & Creative Director",
    company: "Nirvana Hair & Spa",
    initials: "PN",
    plan: "Growth Plan",
  },
  {
    quote: "We switched from another popular software, and the reduction in complexity was instant. The automated marketing and WhatsApp reminders have brought our no-show rate to under 1%.",
    author: "Arjun Mehta",
    role: "Operations Manager",
    company: "Edge Barbershop",
    initials: "AM",
    plan: "Starter Plan",
  },
  {
    quote: "Having our custom-domain website seamlessly sync with our live calendar and POS has saved us hours of admin work. The AI analytics dashboard is like having a CFO.",
    author: "Dr. Natasha Roy",
    role: "Clinical Director",
    company: "Glow Aesthetic & Skin Care",
    initials: "NR",
    plan: "Professional Plan",
  },
  {
    quote: "Our nail studios have seen a 25% increase in repeat bookings since implementing the Rozx loyalty system. The SMS reminders and billing setup is incredibly clean.",
    author: "Kritika Kapoor",
    role: "Co-Owner",
    company: "Polished Nail Art Studio",
    initials: "KK",
    plan: "Growth Plan",
  },
  {
    quote: "The multi-gateway invoicing and instant payouts keep our cash flow steady. Our customers frequently compliment our clean, fast booking interface.",
    author: "Sanjay Sen",
    role: "General Manager",
    company: "Aura Wellness Retreat",
    initials: "SS",
    plan: "Professional Plan",
  },
  {
    quote: "The white-label options and custom integrations allowed our franchise group to standardize operations across 12 cities in just two weeks.",
    author: "Devendra Patil",
    role: "Director of Franchise Operations",
    company: "The Grooming Club Group",
    initials: "DP",
    plan: "Enterprise Plan",
  },
];

export function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 90, damping: 15 } },
  };

  const col1 = [testimonials[0], testimonials[3]];
  const col2 = [testimonials[1], testimonials[4]];
  const col3 = [testimonials[2], testimonials[5]];

  return (
    <section className="py-20 md:py-24 bg-surface-1 border-t border-border/40 relative overflow-hidden">
      {/* Decorative background grid line element */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:100%_48px] opacity-[0.07]" />

      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className="max-w-2xl text-left space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
            Wall of Love
          </span>
          <h2 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl">
            Trusted by top service teams.
          </h2>
          <p className="text-body text-muted-foreground leading-relaxed">
            See how salon chains, aesthetic clinics, and wellness retreats standardize operations, reduce administrative overhead, and drive customer retention.
          </p>
        </div>

        {/* Testimonials Masonry Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
        >
          {/* Column 1 */}
          <div className="space-y-6">
            {col1.map((t, idx) => (
              <TestimonialCard key={idx} testimonial={t} variants={cardVariants} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {col2.map((t, idx) => (
              <TestimonialCard key={idx} testimonial={t} variants={cardVariants} />
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            {col3.map((t, idx) => (
              <TestimonialCard key={idx} testimonial={t} variants={cardVariants} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, variants }: { testimonial: Testimonial; variants: any }) {
  return (
    <motion.div
      variants={variants}
      className="rounded-xl border border-border bg-card p-6 shadow-xs hover:shadow-sm hover:border-primary/40 transition-all duration-200 flex flex-col justify-between"
    >
      <div>
        {/* Quote message */}
        <p className="text-[13px] sm:text-sm text-foreground/90 leading-relaxed font-normal">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Author info */}
      <div className="mt-6 pt-5 border-t border-border/60 flex items-center gap-3">
        {/* Uniform Minimal Avatar */}
        <div className="h-8.5 w-8.5 rounded-full bg-surface-3 border border-border/60 text-muted-foreground flex items-center justify-center font-bold text-xs select-none">
          {testimonial.initials}
        </div>
        <div className="text-left space-y-0.5">
          <h4 className="text-xs font-bold text-foreground leading-none">
            {testimonial.author}
          </h4>
          <p className="text-[10px] text-muted-foreground leading-none">
            {testimonial.role}, <span className="font-semibold text-foreground/70">{testimonial.company}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
