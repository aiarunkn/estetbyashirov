"use client";

import { useLocale } from "@/lib/locale";
import { waLink } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-ink text-ivory"
    >
      {/* Фоновая композиция вместо фото — заменить на next/image, когда появится съёмка */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_75%_15%,#4a3b33_0%,#2a211c_45%,#1a1512_100%)]" />
        <div className="absolute -right-40 top-1/2 h-[130vmin] w-[130vmin] -translate-y-1/2 rounded-full border border-gold/15" />
        <div className="absolute -right-20 top-1/2 h-[90vmin] w-[90vmin] -translate-y-1/2 rounded-full border border-gold/10" />
        <span className="absolute right-[-4vw] top-1/2 hidden -translate-y-1/2 select-none font-display text-[38vh] italic leading-none text-ivory/[0.04] md:block">
          E
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-24 pt-32 md:px-8">
        <Reveal>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            {t.hero.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            {t.hero.title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-sand md:text-lg">
            {t.hero.tagline}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={waLink(t.hero.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-sand"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#products"
              className="rounded-full border border-ivory/30 px-8 py-3.5 text-sm text-ivory transition-colors hover:border-gold hover:text-gold"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </Reveal>
      </div>

      <a
        href="#philosophy"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-sand/70 transition-colors hover:text-gold"
      >
        {t.hero.scrollCue}
        <svg width="12" height="28" viewBox="0 0 12 28" fill="none" aria-hidden="true">
          <path d="M6 0v25M1 21l5 6 5-6" stroke="currentColor" strokeWidth="1" />
        </svg>
      </a>
    </section>
  );
}
