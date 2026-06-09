"use client";

import React, { useEffect, useRef, useState } from "react";

interface LazySectionProps {
  children: React.ReactNode;
  height?: string;
}

export function LazySection({ children, height = "400px" }: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // start loading 200px before entering viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="w-full">
      {isVisible ? (
        children
      ) : (
        <div
          style={{ height }}
          className="w-full animate-pulse bg-muted/5 rounded-xl"
        />
      )}
    </div>
  );
}
