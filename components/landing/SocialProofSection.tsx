"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { landingData } from "@/data/landing";

export function SocialProofSection() {
  return (
    <AnimatedSection className="section-space pt-4">
      <div className="container-shell">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {landingData.socialProof.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <GlassCard className="h-full p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border bg-white/70 text-[var(--gold)]">
                  <span
                    aria-hidden="true"
                    className="h-5 w-5 [&_svg]:h-5 [&_svg]:w-5"
                    dangerouslySetInnerHTML={{ __html: item.iconSvg }}
                  />
                </div>
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                  {item.label}
                </p>
                <p className="mt-3 text-2xl font-semibold text-gradient">{item.value}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
