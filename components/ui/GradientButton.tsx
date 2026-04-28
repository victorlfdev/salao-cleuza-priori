"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GradientButtonProps = {
  href: string;
  label: string;
  ariaLabel: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export function GradientButton({
  href,
  label,
  ariaLabel,
  variant = "primary",
  className,
  external = false,
}: GradientButtonProps) {
  const baseClassName =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.02em] transition-colors";

  const variantClassName =
    variant === "primary"
      ? "premium-border bg-[var(--surface-soft)] text-[var(--text)]"
      : variant === "secondary"
        ? "border bg-[rgba(255,250,246,0.72)] text-[var(--text)] hover:border-[var(--champagne)] hover:bg-[rgba(255,250,246,0.94)]"
        : "text-[var(--muted-strong)] hover:text-[var(--text)]";

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseClassName, variantClassName, className)}
    >
      {label}
    </motion.span>
  );

  if (external) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
