"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { featureItems, industryItems, mainNavItems } from "@/config/navigation";
import { ROUTES } from "@/config/routes";
import { Button } from "@/components/ui/button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setExpandedSection(null);
  };

  const toggleSection = (label: string) => {
    setExpandedSection(expandedSection === label ? null : label);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="rounded-lg p-2.5 text-muted-foreground hover:bg-surface-2 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Toggle Menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs top-[57px] md:top-[65px]"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-card border-l border-border px-5 py-6 overflow-y-auto top-[57px] md:top-[65px] flex flex-col justify-between"
            >
              <div className="space-y-5">
                <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
                  {mainNavItems.map((item) => {
                    const isGroup = item.children && item.children.length > 0;
                    const isExpanded = expandedSection === item.label;

                    if (isGroup) {
                      return (
                        <div key={item.label} className="border-b border-border/40 py-1">
                          <button
                            onClick={() => toggleSection(item.label)}
                            className="flex w-full items-center justify-between py-2 text-sm font-semibold text-foreground text-left"
                            aria-expanded={isExpanded}
                          >
                            {item.label}
                            <ChevronDown
                              className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          
                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className="overflow-hidden pl-3 mt-1.5 space-y-1.5 border-l border-primary/20"
                              >
                                {item.children?.map((child) => {
                                  const IconComponent = child.icon;
                                  return (
                                    <Link
                                      key={child.label}
                                      href={child.href}
                                      onClick={toggleMenu}
                                      className="flex items-start gap-3 rounded-lg p-2 hover:bg-surface-2 transition-colors focus-visible:ring-1 focus-visible:ring-primary"
                                    >
                                      {IconComponent && (
                                        <div className="mt-0.5 rounded-md bg-primary/10 p-1.5 text-primary shrink-0">
                                          <IconComponent className="h-4 w-4" />
                                        </div>
                                      )}
                                      <div>
                                        <div className="text-xs font-semibold text-foreground flex items-center gap-1">
                                          {child.label}
                                          {child.label.includes("AI") && (
                                            <Sparkles className="h-3 w-3 text-accent fill-accent" />
                                          )}
                                        </div>
                                        {child.description && (
                                          <p className="text-[10px] text-muted-foreground line-clamp-1 leading-snug">
                                            {child.description}
                                          </p>
                                        )}
                                      </div>
                                    </Link>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={item.label}
                        href={item.href || "#"}
                        onClick={toggleMenu}
                        className="border-b border-border/40 py-2.5 text-sm font-semibold text-foreground transition-colors hover:text-primary block focus-visible:ring-1 focus-visible:ring-primary"
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 border-t border-border/55 pt-5 space-y-3">
                <Link href={ROUTES.app.login} onClick={toggleMenu} className="block w-full">
                  <Button variant="ghost" className="w-full justify-center h-10 text-sm">
                    Login
                  </Button>
                </Link>
                <Link href="/book-demo" onClick={toggleMenu} className="block w-full">
                  <Button variant="outline" className="w-full justify-center h-10 text-sm">
                    Book a Demo
                  </Button>
                </Link>
                <Link href={ROUTES.app.register} onClick={toggleMenu} className="block w-full">
                  <Button variant="premium" className="w-full justify-center h-10 text-sm">
                    Start Free Trial
                  </Button>
                </Link>
                <p className="text-center text-[10px] text-muted-foreground mt-3 leading-snug">
                  14-day free trial • No credit card required
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
