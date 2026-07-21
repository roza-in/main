"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  // Load visibility preference from localStorage
  useEffect(() => {
    const isDismissed = localStorage.getItem("rozx-announcement-dismissed");
    if (isDismissed === "true") {
      queueMicrotask(() => setIsVisible(false));
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("rozx-announcement-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="relative z-50 overflow-hidden bg-primary/10 border-b border-primary/20 text-foreground"
        >
          <div className="container relative flex items-center justify-between py-2 px-4 sm:px-6 md:justify-center md:gap-4">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium">
              <span className="inline-flex items-center rounded-full bg-primary/20 px-2 py-0.5 text-[10px] text-primary font-bold uppercase tracking-wider">
                Offer
              </span>
              <p className="text-muted-foreground">
                Save up to 20% (up to ₹5,989/yr) on annual plans for your salon, spa, or clinic!
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
              >
                View Plans
                <ArrowRight className="h-3 w-3 transition-transform hover:translate-x-0.5" />
              </Link>
            </div>
            
            <button
              onClick={handleDismiss}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground hover:text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              aria-label="Dismiss announcement"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
