"use client";

import Image from "next/image";
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
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/product-coconut.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%] md:object-[80%_15%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,#1a1512_0%,rgba(26,21,18,0.92)_28%,rgba(26,21,18,0.55)_55%,rgba(26,21,18,0.25)_75%,rgba(26,21,18,0.4)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" />
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
