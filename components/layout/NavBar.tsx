"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useMemo, useState } from "react";
import { navItems } from "@/config/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { buttonStyles } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.replace("#", "")),
    []
  );
  const activeSection = useActiveSection(sectionIds);

  const renderLink = (item: (typeof navItems)[number]) => {
    const id = item.href.replace("#", "");
    const active = activeSection === id;

    return (
      <a
        key={item.href}
        href={item.href}
        onClick={() => setOpen(false)}
        className={cn(
          "rounded-lg px-3 py-2 text-sm font-semibold text-text-secondary transition hover:bg-surface hover:text-text-primary",
          active && "bg-surface-strong text-text-primary"
        )}
        aria-current={active ? "page" : undefined}
      >
        {item.label}
      </a>
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/0 bg-bg-primary/58 backdrop-blur-xl">
      <nav className="site-container flex min-h-20 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3" aria-label="Omega Developments">
          <Image
            src="/images/logo_without_background.png"
            alt=""
            width={220}
            height={96}
            priority
            className="h-12 w-auto"
          />
        </a>

        <div className="hidden items-center gap-1 rounded-lg border border-border-subtle bg-bg-secondary/70 p-1 md:flex">
          {navItems.slice(0, -1).map(renderLink)}
        </div>

        <a
          href="#contact"
          className={buttonStyles({ className: "hidden md:inline-flex" })}
        >
          Contact
        </a>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-lg border border-border-subtle bg-surface text-text-primary md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border-subtle bg-bg-primary/96 px-4 pb-5 pt-2 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-md flex-col gap-1">
            {navItems.map(renderLink)}
          </div>
        </div>
      )}
    </header>
  );
}
