"use client";

import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/GradientButton";
import { landingData } from "@/data/landing";
import {
  getInstagramLink,
  getMapsLink,
  getPhoneLink,
  getPrimaryContactLink,
} from "@/lib/links";

export function HeroSection() {
  const heroTitle = landingData.hero.title.replace(
    landingData.hero.highlightedWord,
    `<span class="font-serif italic text-gradient">${landingData.hero.highlightedWord}</span>`,
  );

  return (
    <section id="inicio" className="relative min-h-screen pt-28 pb-16 sm:pt-32">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.38em] text-[var(--gold)]"
          >
            {landingData.hero.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="max-w-3xl text-5xl leading-[0.92] font-semibold tracking-[-0.06em] sm:text-6xl lg:text-7xl"
            dangerouslySetInnerHTML={{ __html: heroTitle }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl"
          >
            {landingData.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <GradientButton
              href={getPrimaryContactLink()}
              label={landingData.hero.primaryCta}
              ariaLabel="Agendar atendimento no contato principal"
              external
            />
            <GradientButton
              href={getMapsLink()}
              label={landingData.hero.secondaryCta}
              ariaLabel="Abrir localizacao no Google Maps"
              external
              variant="secondary"
            />
            <GradientButton
              href={getInstagramLink()}
              label={landingData.hero.tertiaryCta}
              ariaLabel="Abrir Instagram oficial"
              external
              variant="ghost"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24 }}
            className="mt-10 grid gap-3 sm:grid-cols-3"
          >
            {landingData.socialProof.slice(0, 3).map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border bg-[rgba(255,253,249,0.88)] px-4 py-4 backdrop-blur-xl"
              >
                <p className="text-sm font-semibold text-[var(--muted-strong)]">
                  {item.label}
                </p>
                <p className="mt-1 text-lg font-semibold text-gradient">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12 }}
          className="relative"
        >
          <div className="absolute inset-x-[12%] top-8 h-40 rounded-full bg-[radial-gradient(circle,rgba(200,134,123,0.22),transparent_72%)] blur-3xl" />
          <div className="relative overflow-hidden rounded-[32px] border bg-[var(--surface)] shadow-[0_26px_72px_rgba(132,96,80,0.14)]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.28),rgba(255,248,242,0.58))]" />
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={landingData.hero.poster}
              aria-label={landingData.hero.mediaAlt}
              className="h-[430px] w-full object-cover sm:h-[520px] lg:h-[620px]"
            >
              <source src={landingData.hero.video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 border-t border-white/25" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),transparent)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,248,242,0.48))]" />
          </div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute -left-2 top-8 rounded-[28px] border bg-[rgba(255,253,249,0.94)] px-5 py-4 backdrop-blur-xl sm:-left-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              Experiencia premium
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Ambiente sofisticado, atendimento atencioso e foco total em voce.
            </p>
          </motion.div>
          <motion.a
            href={getPhoneLink()}
            target="_blank"
            rel="noreferrer"
            aria-label="Ligar para o salao"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute -right-2 bottom-8 flex items-center gap-3 rounded-full border bg-[rgba(255,253,249,0.97)] px-5 py-3 backdrop-blur-xl sm:-right-6"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--champagne)] shadow-[0_0_18px_rgba(245,223,189,0.85)]" />
            <span className="text-sm font-semibold">{landingData.business.phone}</span>
          </motion.a>
          <div className="absolute inset-x-[10%] bottom-0 h-px bg-[var(--gradient-premium)]" />
        </motion.div>
      </div>
    </section>
  );
}
