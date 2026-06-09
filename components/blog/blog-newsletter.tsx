"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to subscribe. Please try again.");
      }

      setIsSubmitted(true);
      setEmail("");
    } catch (err: any) {
      setSubmitError(err?.message || "An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-xl border border-border bg-surface-1 p-6 sm:p-8 max-w-3xl mx-auto relative overflow-hidden text-center shadow-xs">
      <div className="max-w-md mx-auto space-y-4">
        <h3 className="text-heading-3 text-base sm:text-lg font-bold text-foreground">Subscribe to our Operations Newsletter</h3>
        <p className="text-xs text-muted-foreground leading-normal">Get our weekly growth strategies and compliance templates directly in your inbox.</p>
        
        {isSubmitted ? (
          <div className="text-xs font-bold text-primary bg-primary/10 border border-primary/20 py-2.5 px-4 rounded-lg animate-fade-in">
            Thank you! You have successfully subscribed to our newsletter.
          </div>
        ) : (
          <form className="flex flex-col sm:flex-row gap-2 justify-center max-w-sm mx-auto" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              placeholder="Enter your email"
              className="rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary flex-1 h-9"
            />
            <Button type="submit" variant="premium" className="font-bold text-xs h-9 px-4 shrink-0" disabled={isSubmitting}>
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        )}

        {submitError && (
          <p className="text-[10px] text-destructive font-semibold mt-2">{submitError}</p>
        )}
      </div>
    </div>
  );
}
