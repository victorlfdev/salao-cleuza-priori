import Script from "next/script";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ExperienceSection } from "@/components/landing/ExperienceSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { Footer } from "@/components/landing/Footer";
import { GallerySection } from "@/components/landing/GallerySection";
import { HeroSection } from "@/components/landing/HeroSection";
import { InstagramSection } from "@/components/landing/InstagramSection";
import { LocationSection } from "@/components/landing/LocationSection";
import { Navbar } from "@/components/landing/Navbar";
import { ScrollPathBackground } from "@/components/landing/ScrollPathBackground";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { SocialProofSection } from "@/components/landing/SocialProofSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { landingData } from "@/data/landing";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: landingData.business.name,
  description: landingData.business.shortDescription,
  areaServed: landingData.business.city,
  telephone: landingData.business.phone,
  image: landingData.hero.poster,
  url: "https://example.com/",
  sameAs: [
    landingData.business.instagram,
    landingData.business.linktree,
    landingData.business.maps,
  ].filter(Boolean),
};

export default function Home() {
  return (
    <>
      <Script
        id="beauty-salon-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SmoothScroll />
      <div className="relative overflow-x-clip bg-[var(--bg)] text-[var(--text)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(221,182,122,0.18),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(200,134,123,0.12),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.18)_26%,transparent_46%)]" />
        <Navbar />
        <main className="spotlight relative z-0">
          <ScrollPathBackground />
          <div className="relative z-10">
            <HeroSection />
            <SocialProofSection />
            <ServicesSection />
            <ExperienceSection />
            <GallerySection />
            <InstagramSection />
            <LocationSection />
            <TestimonialsSection />
            <FAQSection />
            <FinalCTASection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
