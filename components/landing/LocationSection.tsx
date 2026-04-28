"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GradientButton } from "@/components/ui/GradientButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { landingData } from "@/data/landing";
import { getMapsLink, getPhoneLink } from "@/lib/links";

export function LocationSection() {
  return (
    <AnimatedSection id="localizacao" className="section-space">
      <div className="container-shell grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <GlassCard className="relative min-h-[420px] overflow-hidden p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(221,182,122,0.18),transparent_18%),radial-gradient(circle_at_75%_35%,rgba(200,134,123,0.16),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.42),transparent_36%)]" />
          <div className="noise-overlay absolute inset-0" />
          <div className="relative flex h-full flex-col justify-between">
            <SectionHeading
              eyebrow="LOCALIZACAO"
              title={landingData.location.title}
              highlightedWord={landingData.business.name}
              description={landingData.location.subtitle}
            />
            <a
              href={getMapsLink()}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir localização do salão no Google Maps"
              className="relative block overflow-hidden rounded-[28px] border bg-[rgba(255,255,255,0.82)] p-6 transition-transform duration-300 hover:scale-[1.01]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-90"
                style={{ backgroundImage: "url('/beauty/maps.png')" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,253,249,0.52),rgba(255,253,249,0.74))]" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Cidade</p>
                <p className="mt-3 text-3xl font-semibold">{landingData.location.city}</p>
                <div className="mt-6 h-px w-full bg-[var(--gradient-premium)]" />
              </div>
            </a>
          </div>
        </GlassCard>

        <GlassCard className="flex flex-col justify-between gap-6 p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Contato direto</p>
            <p className="mt-4 text-3xl font-semibold">{landingData.location.phone}</p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Fale com o salão, tire dúvidas sobre horários e abra sua rota com rapidez para chegar com tranquilidade.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <GradientButton
              href={getMapsLink()}
              label="Abrir rota no Google Maps"
              ariaLabel="Abrir rota no Google Maps"
              external
            />
            <GradientButton
              href={getPhoneLink()}
              label="Ligar agora"
              ariaLabel="Ligar agora"
              external
              variant="secondary"
            />
          </div>
        </GlassCard>
      </div>
    </AnimatedSection>
  );
}
