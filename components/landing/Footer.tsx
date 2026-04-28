import { landingData } from "@/data/landing";

export function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="container-shell flex flex-col gap-8 text-sm text-[var(--muted)] lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-md">
          <p className="text-lg font-semibold text-[var(--text)]">
            {landingData.business.name}
          </p>
          <p className="mt-3 leading-7">{landingData.footer.description}</p>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <div className="flex flex-wrap gap-4">
            {landingData.footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="transition-colors hover:text-[var(--champagne)]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p>© 2026 {landingData.business.name}. Todos os direitos reservados.</p>
          <p>Landing page desenvolvida por [Seu Nome/Estudio]</p>
        </div>
      </div>
    </footer>
  );
}
