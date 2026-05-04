"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { landingData } from "@/data/landing";
import { cn } from "@/lib/utils";

const spans = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "sm:row-span-2",
  "",
  "",
  "sm:col-span-2",
];

export function GallerySection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current || window.innerWidth < 1024 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-gallery-item]");
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { y: index % 2 === 0 ? 24 : -24 },
          {
            y: index % 2 === 0 ? -24 : 24,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <AnimatedSection id="galeria" className="section-space">
      <div className="container-shell">
        <SectionHeading
          align="center"
          eyebrow="GALERIA"
          title={landingData.gallery.title}
          highlightedWord="detalhe"
          description={landingData.gallery.subtitle}
        />

        <div
          ref={gridRef}
          className="mt-12 grid auto-rows-[260px] gap-4 sm:grid-cols-3 sm:auto-rows-[260px] lg:auto-rows-[320px]"
        >
          {landingData.gallery.images.map((image, index) => (
            <motion.figure
              key={`${image.src}-${image.version ?? "base"}`}
              data-gallery-item
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className={cn(
                "group relative overflow-hidden rounded-[28px] border bg-[var(--surface-soft)]",
                spans[index],
              )}
            >
              {/*
                A query string opcional permite invalidar cache quando a imagem
                é substituída sem mudar o nome do arquivo.
              */}
              <Image
                src={image.version ? `${image.src}?v=${image.version}` : image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04] group-hover:rotate-[0.8deg]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,252,248,0.34)] via-[rgba(255,250,246,0.28)] to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm text-[var(--muted-strong)] bg-gradient-to-t from-[rgba(255,252,248,0.92)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {image.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
