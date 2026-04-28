"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { landingData } from "@/data/landing";

export function ExperienceSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [32, -32]);

  return (
    <AnimatedSection id="experiencia" className="section-space">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <SectionHeading
            eyebrow={landingData.experience.eyebrow}
            title={landingData.experience.title}
            highlightedWord="cuidado"
            description={landingData.experience.description}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {landingData.experience.highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <GlassCard className="h-full p-5">
                  <p className="text-sm font-semibold tracking-[0.03em] text-[var(--muted-strong)]">
                    {highlight}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        <div ref={imageRef} className="relative">
          <div className="absolute inset-x-[18%] top-8 h-48 rounded-full bg-[radial-gradient(circle,rgba(214,179,106,0.2),transparent_65%)] blur-3xl" />
          <motion.div style={{ y }} className="relative overflow-hidden rounded-[32px] border">
            <Image
              src={landingData.experience.image}
              alt={landingData.experience.title}
              width={900}
              height={1120}
              className="h-[500px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,248,242,0.48)] via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
