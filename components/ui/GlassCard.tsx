import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = ComponentPropsWithoutRef<"div">;

export function GlassCard({ className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-surface rounded-3xl shadow-[0_20px_56px_rgba(132,96,80,0.10)]",
        className,
      )}
      {...props}
    />
  );
}
