"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { industryItems } from "@/config/navigation";

export function Industries() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 120 } },
  };

  return (
    <section id="industries" className="py-20 bg-background relative overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full inline-block">
              Tailored Solutions
            </h2>
            <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Built for your industry. Optimized for your workflow.
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg">
              Every service business operates differently. Rozx adapts to your specific requirements
              with customizable features, terms, and industry workflows.
            </p>
          </div>
          <Link
            href="/platform"
            className="inline-flex items-center gap-1.5 font-bold text-primary hover:text-primary-dark hover:underline whitespace-nowrap self-start md:self-end"
          >
            Explore platform capabilities
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {industryItems.map((item) => {
            const IconComponent = item.icon;

            return (
              <motion.div key={item.label} variants={itemVariants}>
                <Link
                  href={item.href}
                  className="group block rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-muted/10"
                >
                  <div className="flex flex-col gap-4">
                    {IconComponent && (
                      <div className="inline-flex w-fit rounded-lg bg-emerald-500/10 p-2.5 text-primary transition-transform duration-300 group-hover:scale-110">
                        <IconComponent className="h-5 w-5" />
                      </div>
                    )}
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.label}
                      </h4>
                      {item.description && (
                        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
