import Image from "next/image";
import { navItems, siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border-subtle bg-bg-primary py-10">
      <div className="site-container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#top" className="inline-flex" aria-label="Omega Developments">
            <Image
              src="/images/logo_without_background.png"
              alt=""
              width={190}
              height={82}
              className="h-10 w-auto"
            />
          </a>
          <p className="mt-3 text-sm text-text-muted">Transformons vos idées en réalité digitale.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition hover:bg-surface hover:text-text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="site-container mt-8 flex flex-col gap-3 border-t border-border-subtle pt-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 {siteConfig.name}.</span>
        <div className="flex gap-4">
          <a href="/mentions-legales" className="transition hover:text-text-primary">
            Mentions légales
          </a>
          <a href="/politique-de-confidentialite" className="transition hover:text-text-primary">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
}
