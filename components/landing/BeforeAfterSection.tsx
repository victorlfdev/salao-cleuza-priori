"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { landingData } from "@/data/landing";

export function BeforeAfterSection() {
  return (
    <AnimatedSection className="section-space">
      <div className="container-shell">
        <SectionHeading
          align="center"
          title={landingData.beforeAfter.title}
          highlightedWord="beleza"
          description={landingData.beforeAfter.subtitle}
        />
        {/* Substituir os placeholders por fotos reais autorizadas pelas clientes. */}
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {landingData.beforeAfter.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="rounded-[28px] border bg-[var(--surface-soft)] p-4"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="relative overflow-hidden rounded-3xl">
                  <Image
                    src={item.beforeImage}
                    alt={`${item.title} antes`}
                    width={560}
                    height={720}
                    className="h-64 w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full border bg-[rgba(255,255,255,0.84)] px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-[var(--champagne)]">
                    Antes
                  </span>
                </div>
                <div className="relative overflow-hidden rounded-3xl">
                  <Image
                    src={item.afterImage}
                    alt={`${item.title} depois`}
                    width={560}
                    height={720}
                    className="h-64 w-full object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full border bg-[rgba(255,255,255,0.84)] px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-[var(--champagne)]">
                    Depois
                  </span>
                </div>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
