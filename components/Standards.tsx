"use client";

import { useLocale } from "@/lib/locale";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

export default function Standards() {
  const { t } = useLocale();

  return (
    <section className="bg-mocha text-ivory">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center md:px-8 md:py-32">
        <Reveal>
          <Eyebrow tone="gold" className="mb-6">
            {t.standards.eyebrow}
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-3xl leading-snug sm:text-4xl md:text-5xl">
            {t.standards.title}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mx-auto mt-8 h-px w-16 bg-gold/60" aria-hidden="true" />
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-sand md:text-lg">
            {t.standards.text.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
