"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given or declined
    const consent = localStorage.getItem("rozx_cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("rozx_cookie_consent", "all");
    setIsVisible(false);
    // Dispatch custom event to initialize analytics without reload
    window.dispatchEvent(new CustomEvent("rozx_cookie_consent_changed"));
  };

  const handleAcceptEssential = () => {
    localStorage.setItem("rozx_cookie_consent", "essential");
    setIsVisible(false);
    // Dispatch custom event to notify listeners
    window.dispatchEvent(new CustomEvent("rozx_cookie_consent_changed"));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md z-50 rounded-2xl border border-border bg-background/95 p-5 shadow-2xl backdrop-blur-md dark:bg-card/90"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-600 dark:text-emerald-400 shrink-0">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <div className="space-y-1 text-left">
                <h4 className="text-sm font-bold text-foreground">Privacy Preference</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We use cookies to secure dashboard access and analyze website traffic. Selecting &quot;Accept All&quot; helps us improve checkout and calendar operations. Read our{" "}
                  <a href="/cookies" className="text-primary hover:underline font-medium">
                    Cookie Policy
                  </a>{" "}
                  for details.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-1">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs font-semibold hover:bg-muted"
                onClick={handleAcceptEssential}
              >
                Essential Only
              </Button>
              <Button
                variant="premium"
                size="sm"
                className="text-xs font-bold px-4"
                onClick={handleAcceptAll}
              >
                Accept All
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
