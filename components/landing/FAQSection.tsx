"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { landingData } from "@/data/landing";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <AnimatedSection className="section-space">
      <div className="container-shell">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Perguntas frequentes para remover objecoes"
          highlightedWord="objecoes"
          description="Uma estrutura reutilizavel para responder duvidas, reduzir friccao e acelerar o clique nos CTAs."
        />

        <div className="mx-auto mt-12 max-w-4xl space-y-3">
          {landingData.faq.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-[26px] border bg-[rgba(255,250,246,0.76)] transition-colors hover:border-[var(--champagne)]"
              >
                <button
                  type="button"
                  aria-label={`Abrir pergunta ${item.question}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-base font-semibold sm:text-lg">{item.question}</span>
                  <span className="text-xl text-[var(--champagne)]">{isOpen ? "−" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 text-sm leading-7 text-[var(--muted)] sm:px-6 sm:text-base">
                        {item.answer}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
