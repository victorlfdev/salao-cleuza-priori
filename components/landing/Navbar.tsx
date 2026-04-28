"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";
import { landingData } from "@/data/landing";
import { getPrimaryContactLink } from "@/lib/links";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicos", href: "#servicos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Galeria", href: "#galeria" },
  { label: "Localizacao", href: "#localizacao" },
];

const initials = landingData.business.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2);

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div
        className={cn(
          "container-shell transition-all duration-300",
          isScrolled && "translate-y-0",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-5xl items-center justify-between rounded-full border bg-[rgba(255,250,246,0.78)] px-4 py-3 backdrop-blur-xl transition-all duration-300 sm:px-5",
            isScrolled && "shadow-[0_16px_42px_rgba(91,64,53,0.14)]",
          )}
        >
          <a
            href="#inicio"
            aria-label={`Ir para o inicio da landing ${landingData.business.name}`}
            className="flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border bg-white/70 text-sm font-semibold tracking-[0.25em] text-[var(--champagne)]">
              {initials}
            </span>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold">{landingData.business.name}</p>
              <p className="text-xs text-[var(--muted)]">{landingData.business.category}</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-label={`Ir para ${item.label}`}
                className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--champagne)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <GradientButton
                href={getPrimaryContactLink()}
                label="Agendar"
                ariaLabel="Agendar atendimento"
                external
                className="px-4 py-2.5"
              />
            </div>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white/70 text-[var(--text)] lg:hidden"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setIsOpen((value) => !value)}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="mx-auto mt-3 max-w-5xl rounded-3xl border bg-[rgba(255,250,246,0.94)] p-4 backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-label={`Ir para ${item.label}`}
                  className="rounded-2xl px-4 py-3 text-sm text-[var(--muted)] transition-colors hover:bg-[rgba(191,125,114,0.08)] hover:text-[var(--text)]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <GradientButton
                href={getPrimaryContactLink()}
                label="Agendar agora"
                ariaLabel="Agendar atendimento agora"
                external
                className="mt-2 w-full"
              />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
