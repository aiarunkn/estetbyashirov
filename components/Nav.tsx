"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/lib/locale";

export default function Nav() {
  const { t, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#founder", label: t.nav.about },
    { href: "#products", label: t.nav.products },
    { href: "#styler", label: t.nav.styler },
    { href: "#studios", label: t.nav.studios },
    { href: "#education", label: t.nav.education },
    { href: "#contacts", label: t.nav.contacts },
  ];

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-ivory/95 shadow-[0_1px_0_0_rgba(58,47,42,0.08),0_8px_30px_-18px_rgba(26,21,18,0.35)] backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Основная навигация"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8"
      >
        <a href="#top" className="group leading-none">
          <span
            className={`font-display text-2xl tracking-[0.18em] transition-colors ${
              solid ? "text-espresso" : "text-ivory"
            }`}
          >
            ESTET
          </span>
          <span
            className={`block text-[10px] uppercase tracking-[0.22em] transition-colors ${
              solid ? "text-taupe" : "text-sand"
            }`}
          >
            by Ashirov Azamat
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm transition-colors hover:text-gold ${
                  solid ? "text-espresso" : "text-ivory"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLocale(t.langToggle.switchTo)}
            className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:text-gold ${
              solid ? "text-taupe" : "text-sand"
            }`}
            aria-label={t.langToggle.switchTo === "kz" ? "Қазақ тіліне ауысу" : "Переключить на русский"}
          >
            {t.langToggle.label}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`flex h-10 w-10 items-center justify-center lg:hidden ${
              solid ? "text-espresso" : "text-ivory"
            }`}
            aria-expanded={open}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
              {open ? (
                <path d="M3 1l16 14M19 1L3 15" stroke="currentColor" strokeWidth="1.5" />
              ) : (
                <path d="M0 1h22M0 8h22M0 15h22" stroke="currentColor" strokeWidth="1.5" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-espresso/10 bg-ivory px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-xl text-espresso hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
