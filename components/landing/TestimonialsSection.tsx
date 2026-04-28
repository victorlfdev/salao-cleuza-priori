"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { landingData } from "@/data/landing";

export function TestimonialsSection() {
  return (
    <AnimatedSection className="section-space">
      <div className="container-shell">
        <SectionHeading
          align="center"
          eyebrow="DEPOIMENTOS"
          title="O que clientes sentem depois da experiência"
          highlightedWord="experiência"
          description="Relatos de quem já viveu esse cuidado de perto e saiu do salão se sentindo ainda mais confiante."
        />
        {/* Substituir por avaliações reais do Google, Instagram ou WhatsApp. */}
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {landingData.testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <GlassCard className="h-full p-6">
                <div className="flex gap-1 text-[var(--gold)]">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <span key={starIndex}>★</span>
                  ))}
                </div>
                <p className="mt-5 text-base leading-8 text-[var(--muted-strong)]">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                  {testimonial.name}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
