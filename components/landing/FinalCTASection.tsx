"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GradientButton } from "@/components/ui/GradientButton";
import { Marquee } from "@/components/ui/Marquee";
import { landingData } from "@/data/landing";
import {
  getInstagramLink,
  getMapsLink,
  getPrimaryContactLink,
} from "@/lib/links";

const ctaLinks = {
  primary: getPrimaryContactLink(),
  instagram: getInstagramLink(),
  maps: getMapsLink(),
};

export function FinalCTASection() {
  return (
    <AnimatedSection className="section-space pb-12">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[36px] border bg-[linear-gradient(180deg,rgba(255,253,249,0.96),rgba(248,238,229,0.86))]">
          <Marquee text="BELEZA • CUIDADO • AUTOESTIMA • ELEGÂNCIA • CLEUZA PRIORI •" />
          <div className="px-5 py-12 text-center sm:px-8 sm:py-16">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">
              AGENDE SEU HORÁRIO
            </p>
            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              {landingData.finalCta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {landingData.finalCta.subtitle}
            </p>
            <p className="mt-6 text-lg font-semibold text-[var(--muted-strong)]">
              {landingData.business.phone}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              {landingData.finalCta.buttons.map((button) => (
                <GradientButton
                  key={button.label}
                  href={ctaLinks[button.kind]}
                  label={button.label}
                  ariaLabel={button.label}
                  external
                  variant={button.variant}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
