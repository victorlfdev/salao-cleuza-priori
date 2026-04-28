"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type MarqueeProps = {
  text: string;
};

export function Marquee({ text }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    }, trackRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden border-y py-4">
      <div ref={trackRef} className="flex w-max gap-6 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.45em] text-[var(--muted)] sm:text-sm">
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
