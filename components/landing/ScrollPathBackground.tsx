"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollPathBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const paths = Array.from(
      document.querySelectorAll<SVGPathElement>("[data-scroll-stroke-path]"),
    );

    if (!paths.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = prefersReducedMotion ? "0" : `${length}`;
    });

    if (prefersReducedMotion) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const refreshScrollTrigger = () => {
      ScrollTrigger.refresh();
    };

    const ctx = gsap.context(() => {
      paths.forEach((path) => {
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".spotlight",
            start: "top+=120 top",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });
    }, rootRef);

    window.addEventListener("resize", refreshScrollTrigger);
    window.addEventListener("orientationchange", refreshScrollTrigger);

    return () => {
      window.removeEventListener("resize", refreshScrollTrigger);
      window.removeEventListener("orientationchange", refreshScrollTrigger);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute left-1/2 top-[25svh] hidden h-[100%] w-[300%] -translate-x-1/2 md:block">
        <svg
          width="2965"
          height="9212"
          viewBox="0 0 2965 9212"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-[100%] opacity-50"
          preserveAspectRatio="xMidYMin meet"
        >
          <path
            d="M2792.03 172.022C2792.03 172.022 883.031 446.022 655.531 1936.52C428.031 3427.02 2748.63 2029.79 2450.03 4282.52C2193.71 6216.34 -165.469 6669.52 958.031 4789.02C2081.53 2908.52 3924.03 8337.02 172.031 9039.02"
            stroke="rgba(70, 59, 0, 0.12)"
            strokeWidth="344"
            strokeLinecap="round"
          />
          <path
            data-scroll-stroke-path
            d="M2792.03 172.022C2792.03 172.022 883.031 446.022 655.531 1936.52C428.031 3427.02 2748.63 2029.79 2450.03 4282.52C2193.71 6216.34 -165.469 6669.52 958.031 4789.02C2081.53 2908.52 3924.03 8337.02 172.031 9039.02"
            stroke="url(#paint0_linear_scroll_desktop)"
            strokeWidth="344"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_scroll_desktop"
              x1="1754.03"
              y1="1019"
              x2="1754.03"
              y2="9779.02"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#AC9200" />
              <stop offset="1" stopColor="#463B00" />
            </linearGradient>
          </defs>
        </svg>
      </div>

    </div>
  );
}
