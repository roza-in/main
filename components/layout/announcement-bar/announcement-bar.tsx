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
      setIsVisible(false);
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
          className="relative z-50 overflow-hidden bg-emerald-950 border-b border-emerald-900 text-emerald-100"
        >
          <div className="container relative flex items-center justify-between py-2.5 px-4 sm:px-6 md:justify-center md:gap-4">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm font-medium">
              <span className="inline-flex items-center rounded-full bg-emerald-800/80 px-2 py-0.5 text-xs text-emerald-300 font-semibold uppercase tracking-wider">
                Offer
              </span>
              <p className="text-emerald-200">
                Start your 14-day free trial today. Save 20% on annual subscriptions!
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-1 font-semibold text-white underline hover:no-underline"
              >
                View Plans
                <ArrowRight className="h-3 w-3 transition-transform hover:translate-x-0.5" />
              </Link>
            </div>
            
            <button
              onClick={handleDismiss}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-md p-1 text-emerald-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Dismiss announcement"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
