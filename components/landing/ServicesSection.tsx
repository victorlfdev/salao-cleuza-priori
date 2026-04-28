"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GradientButton } from "@/components/ui/GradientButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { landingData } from "@/data/landing";
import { getPrimaryContactLink } from "@/lib/links";
import { cn } from "@/lib/utils";

const cardSpans = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
];

export function ServicesSection() {
  return (
    <AnimatedSection id="serviços" className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="SERVIÇOS"
          title="Serviços para transformar seu visual"
          highlightedWord="transformar"
          description="Uma base premium para apresentar especialidades, reforçar autoridade e conduzir o clique para agendamento em qualquer negócio de beleza."
        />

        <div className="mt-12 grid auto-rows-[320px] gap-4 md:auto-rows-[280px] md:grid-cols-3 lg:auto-rows-[290px] xl:auto-rows-[270px]">
          {landingData.services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className={cn(
                "group relative min-h-[320px] overflow-hidden rounded-[28px] border bg-[var(--surface-soft)] md:min-h-[280px] lg:min-h-[290px] xl:min-h-[270px]",
                cardSpans[index],
              )}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,252,248,0.66)] via-[rgba(255,249,244,0.46)] to-[rgba(255,249,244,0.12)] transition-colors duration-500 group-hover:from-[rgba(255,252,248,0.92)]" />
              <div className="absolute inset-x-0 top-0 h-px bg-transparent transition-all duration-500 group-hover:bg-[var(--gradient-premium)]" />
              <div className="relative flex h-full flex-col justify-end p-6 sm:p-7">
                <span className="mb-4 inline-flex w-fit max-w-full rounded-full border bg-[rgba(255,255,255,0.92)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  {service.badge}
                </span>
                <h3 className="max-w-xs text-2xl font-semibold tracking-[-0.03em]">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-[var(--muted-strong)]">
                  {service.description}
                </p>
                <div className="mt-5 opacity-100 transition-opacity duration-500 sm:opacity-0 sm:group-hover:opacity-100">
                  <GradientButton
                    href={getPrimaryContactLink()}
                    label="Agendar"
                    ariaLabel={`Agendar ${service.title}`}
                    external
                    variant="secondary"
                    className="px-4 py-2.5"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
