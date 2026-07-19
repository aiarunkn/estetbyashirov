"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale";
import { waLink } from "@/lib/content";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

export default function Studios() {
  const { t } = useLocale();

  return (
    <section id="studios" className="bg-ivory">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow className="mb-4">{t.studios.eyebrow}</Eyebrow>
            <h2 className="max-w-md font-display text-4xl leading-tight text-espresso md:text-5xl">
              {t.studios.title}
            </h2>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-mocha/90">
              {t.studios.text.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="mt-10 border-l-2 border-gold pl-6">
              <p className="font-display text-3xl italic text-espresso">
                {t.studios.milestoneDate}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-taupe">
                {t.studios.milestone}
              </p>
            </div>

            <a
              href={waLink(t.studios.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-full border border-espresso px-8 py-3.5 text-sm text-espresso transition-colors hover:border-gold hover:bg-gold hover:text-ink"
            >
              {t.studios.cta}
            </a>
          </Reveal>

          <div className="flex flex-col justify-center gap-4">
            <Reveal>
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                <Image
                  src={t.studios.openingImage.src}
                  alt={t.studios.openingImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            {t.studios.items.map((studio, i) => (
              <Reveal key={studio.name} delay={i * 0.08}>
                <address className="flex items-baseline justify-between gap-6 rounded-sm border border-espresso/10 bg-cream px-6 py-5 not-italic">
                  <div>
                    <h3 className="font-display text-xl text-espresso">{studio.name}</h3>
                    <p className="mt-1 text-sm text-mocha/80">{studio.address}</p>
                    <p className="mt-0.5 text-sm text-mocha/60">{studio.hours}</p>
                  </div>
                  {studio.note && (
                    <span className="shrink-0 text-[10px] uppercase tracking-[0.18em] text-gold">
                      {studio.note}
                    </span>
                  )}
                </address>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
