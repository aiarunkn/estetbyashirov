"use client";

import { useLocale } from "@/lib/locale";
import { waLink } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Club() {
  const { t } = useLocale();

  return (
    <section id="club" className="bg-mocha text-ivory">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gold">
              {t.club.eyebrow}
            </p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">{t.club.title}</h2>
            <p className="mt-6 text-base leading-relaxed text-sand">{t.club.text}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm bg-ivory/10 sm:grid-cols-3">
          {t.club.perks.map((perk, i) => (
            <Reveal key={perk.title} delay={i * 0.08} className="h-full">
              <div className="h-full bg-mocha p-7">
                <span className="font-display text-3xl italic text-gold/70">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-xl">{perk.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand/85">{perk.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <a
            href={waLink(t.club.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block border-b border-gold pb-1 text-sm text-gold transition-colors hover:text-sand"
          >
            {t.club.cta} →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
