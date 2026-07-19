"use client";

import { useLocale } from "@/lib/locale";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

export default function Philosophy() {
  const { t } = useLocale();

  return (
    <section id="philosophy" className="bg-ivory">
      <div className="mx-auto max-w-4xl px-5 py-24 text-center md:px-8 md:py-36">
        <Reveal>
          <Eyebrow className="mb-6">{t.philosophy.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-3xl leading-snug text-espresso sm:text-4xl md:text-5xl">
            {t.philosophy.title}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mx-auto mt-8 h-px w-16 bg-gold/60" aria-hidden="true" />
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-mocha/90 md:text-lg">
            {t.philosophy.text.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
