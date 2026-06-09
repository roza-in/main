"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { mainNavItems } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import { MegaMenu } from "./mega-menu";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on route change or clicking outside
  useEffect(() => {
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent, label: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveDropdown(activeDropdown === label ? null : label);
    } else if (event.key === "Escape") {
      setActiveDropdown(null);
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-border/80 bg-background/70 backdrop-blur-md shadow-xs h-14 md:h-16"
          : "bg-transparent h-16"
      }`}
    >
      <div className="container flex h-full items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center focus-visible:ring-2 focus-visible:ring-primary rounded-md px-1" aria-label="ROZX Home">
          <Image
            src="/logos/logo.png"
            alt="ROZX Logo"
            width={100}
            height={28}
            className="h-7 w-auto object-contain dark:brightness-110"
            style={{ width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5" ref={dropdownRef} aria-label="Main Navigation">
          {mainNavItems.map((item) => {
            const isGroup = item.children && item.children.length > 0;
            const isActive = pathname === item.href || 
              (isGroup && item.children?.some(child => pathname === child.href));

            if (isGroup) {
              const isOpen = activeDropdown === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => setActiveDropdown(isOpen ? null : item.label)}
                    onKeyDown={(e) => handleKeyDown(e, item.label)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold transition-all focus-visible:ring-2 focus-visible:ring-primary ${
                      isActive
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-surface-2"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                      >
                        <MegaMenu
                          items={item.children || []}
                          title={item.label}
                          onItemClick={() => setActiveDropdown(null)}
                        />
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
                className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition-all focus-visible:ring-2 focus-visible:ring-primary ${
                  isActive
                    ? "text-primary bg-primary/5 relative after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface-2"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/book-demo">
            <Button variant="ghost" className="font-semibold text-sm">
              Book a Demo
            </Button>
          </Link>
          <Link href="/start-trial">
            <Button variant="premium" className="font-semibold text-sm flex items-center gap-1.5">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Trigger */}
        <MobileMenu />
      </div>
    </header>
  );
}
