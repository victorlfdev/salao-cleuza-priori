"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GradientButton } from "@/components/ui/GradientButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { landingData } from "@/data/landing";
import { getInstagramLink, getLinktreeLink } from "@/lib/links";

export function InstagramSection() {
  return (
    <AnimatedSection className="section-space">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="PRESENCA DIGITAL"
            title={landingData.instagram.title}
            highlightedWord="novidades"
            description={landingData.instagram.subtitle}
          />
          <p className="mt-6 text-lg font-semibold text-[var(--muted-strong)]">
            {landingData.instagram.handle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <GradientButton
              href={getInstagramLink()}
              label={landingData.instagram.cta}
              ariaLabel="Abrir Instagram"
              external
            />
            <GradientButton
              href={getLinktreeLink()}
              label="Abrir Linktree"
              ariaLabel="Abrir Linktree"
              external
              variant="secondary"
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-[15%] top-8 h-52 rounded-full bg-[radial-gradient(circle,rgba(200,134,123,0.2),transparent_65%)] blur-3xl" />
          <GlassCard className="relative mx-auto max-w-md overflow-hidden p-4">
            <div className="premium-border rounded-[28px] p-4">
              <div className="rounded-[24px] bg-[var(--surface)] p-4">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-[var(--gradient-premium)]" />
                  <div>
                    <p className="font-semibold">{landingData.business.name}</p>
                    <p className="text-sm text-[var(--muted)]">{landingData.instagram.handle}</p>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {landingData.gallery.images.slice(0, 4).map((image) => (
                    <div
                      key={image.src}
                      className="h-32 rounded-[22px] border bg-[var(--surface-light)] bg-cover bg-center"
                      style={{ backgroundImage: `url(${image.src})` }}
                    />
                  ))}
                </div>
                <div className="mt-5 rounded-[22px] border bg-white/88 p-4 text-sm leading-7 text-[var(--muted)]">
                  Conteudos, bastidores, resultados e inspiracoes para manter a marca ativa e fortalecer a conversao social do template.
                </div>
              </div>
            </div>
          </GlassCard>

          <motion.div
            animate={{ x: [0, 6, 0], y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute -left-2 top-10 rounded-full border bg-[rgba(255,253,249,0.96)] px-4 py-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)] backdrop-blur-xl"
          >
            Feed premium
          </motion.div>
          <motion.div
            animate={{ x: [0, -8, 0], y: [0, 8, 0] }}
            transition={{ duration: 5.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute -right-2 bottom-12 rounded-full border bg-[rgba(255,253,249,0.96)] px-4 py-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)] backdrop-blur-xl"
          >
            Reels + provas sociais
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
