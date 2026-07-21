"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface MegaMenuProps {
  items: {
    label: string;
    href: string;
    description?: string;
    icon?: LucideIcon;
  }[];
  title?: string;
  onItemClick?: () => void;
}

export function MegaMenu({ items, onItemClick }: MegaMenuProps) {
  const isLargeSet = items.length > 8;

  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 z-50 mt-1 rounded-2xl border border-border bg-card/98 p-4 shadow-xl backdrop-blur-md transition-all duration-200 ${
        isLargeSet ? "w-210" : "w-140"
      }`}
    >
      <div
        className={`grid ${
          isLargeSet ? "grid-cols-3 gap-2" : "grid-cols-2 gap-3"
        }`}
      >
        {items.map((item) => {
          const IconComponent = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onItemClick}
              className="group flex items-start gap-2.5 rounded-xl p-2 transition-all duration-200 hover:bg-surface-2"
            >
              {IconComponent && (
                <div className="rounded-lg bg-primary/10 p-2 text-primary transition-all duration-200 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground shrink-0 mt-0.5">
                  <IconComponent className="h-4 w-4" />
                </div>
              )}
              <div className="space-y-0.5 min-w-0">
                <div className="text-xs sm:text-sm font-bold text-foreground flex items-center gap-1 leading-snug truncate">
                  {item.label}
                </div>
                {item.description && (
                  <p className="text-[11px] text-muted-foreground leading-tight line-clamp-1">
                    {item.description}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Mega Menu Footer Banner */}
      <div className="mt-3.5 border-t border-border/70 pt-3 flex items-center justify-between text-xs text-muted-foreground">
        <span>Looking for custom business setup? Talk to our integration team.</span>
        <Link
          href="/contact"
          onClick={onItemClick}
          className="inline-flex items-center gap-1 font-bold text-primary hover:underline shrink-0"
        >
          Contact Support
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
