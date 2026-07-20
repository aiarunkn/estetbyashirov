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

            <Reveal delay={0.1}>
              <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-sm">
                <Image
                  src={t.studios.openingImage.src}
                  alt={t.studios.openingImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </Reveal>

          <div className="flex flex-col justify-center gap-10">
            {t.studios.cities.map((city, ci) => (
              <Reveal key={city.name} delay={ci * 0.08}>
                <div>
                  <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gold">
                    {city.name}
                  </h3>
                  <div className="flex flex-col gap-4">
                    {city.branches.map((branch) => (
                      <address
                        key={branch.address}
                        className="rounded-sm border border-espresso/10 bg-cream px-6 py-5 not-italic"
                      >
                        <div className="flex items-baseline justify-between gap-6">
                          <p className="font-display text-lg leading-snug text-espresso">
                            {branch.address}
                          </p>
                          {branch.note && (
                            <span className="shrink-0 text-[10px] uppercase tracking-[0.18em] text-gold">
                              {branch.note}
                            </span>
                          )}
                        </div>
                        {branch.hours && (
                          <p className="mt-1.5 text-sm text-mocha/70">{branch.hours}</p>
                        )}
                        <div className="mt-4 flex flex-wrap items-center gap-5">
                          <a
                            href={waLink(t.studios.waMessage)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-b border-gold pb-0.5 text-sm text-espresso transition-colors hover:text-gold"
                          >
                            {t.studios.cta}
                          </a>
                          {branch.twoGis && (
                            <a
                              href={branch.twoGis}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-taupe transition-colors hover:text-gold"
                            >
                              {t.studios.twoGisLabel}
                            </a>
                          )}
                        </div>
                      </address>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
