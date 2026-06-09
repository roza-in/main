"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MegaMenuProps {
  items: {
    label: string;
    href: string;
    description?: string;
    icon?: LucideIcon;
  }[];
  title: string;
  onItemClick?: () => void;
}

export function MegaMenu({ items, title, onItemClick }: MegaMenuProps) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 z-50 mt-1 w-[560px] rounded-xl border border-border bg-card/98 p-5 shadow-lg backdrop-blur-md">
      <div className="grid grid-cols-2 gap-3">
        {items.map((item) => {
          const IconComponent = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onItemClick}
              className="group flex items-start gap-3.5 rounded-lg p-2.5 transition-all duration-200 hover:bg-surface-2"
            >
              {IconComponent && (
                <div className="rounded-lg bg-primary/10 p-2 text-primary transition-all duration-200 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground shrink-0">
                  <IconComponent className="h-4.5 w-4.5" />
                </div>
              )}
              <div className="space-y-1">
                <div className="text-sm font-semibold text-foreground flex items-center gap-1.5 leading-none">
                  {item.label}
                  {item.label.includes("AI") && (
                    <span className="inline-flex items-center gap-0.5 rounded-full bg-accent/10 px-2 py-0.5 text-[9px] font-bold text-accent uppercase tracking-wider animate-pulse">
                      <Sparkles className="h-2 w-2 fill-current" />
                      AI
                    </span>
                  )}
                </div>
                {item.description && (
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
      
      {/* Mega Menu Footer Banner */}
      <div className="mt-4 border-t border-border/80 pt-3.5 flex items-center justify-between text-xs text-muted-foreground">
        <span>Need a custom operating setup? Talk to our integration team.</span>
        <Link
          href="/contact"
          onClick={onItemClick}
          className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
        >
          Contact Support
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
