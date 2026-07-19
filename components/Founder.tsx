"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale";
import Reveal from "@/components/Reveal";

export default function Founder() {
  const { t } = useLocale();

  return (
    <section id="founder" className="border-t border-espresso/10 bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="relative flex aspect-[4/5] items-end overflow-hidden rounded-sm bg-espresso p-8">
              <Image
                src={t.founder.portrait.src}
                alt={t.founder.portrait.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/85 to-transparent"
              />
              <div className="relative">
                <p className="font-display text-3xl text-ivory">{t.founder.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-gold">
                  {t.founder.role}
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-taupe">
                {t.founder.eyebrow}
              </p>
              <h2 className="font-display text-4xl leading-tight text-espresso md:text-5xl">
                {t.founder.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-4 text-base leading-relaxed text-mocha/90">
                {t.founder.story.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <blockquote className="mt-10 border-l-2 border-gold pl-6 font-display text-2xl italic leading-snug text-espresso">
                «{t.founder.quote}»
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
