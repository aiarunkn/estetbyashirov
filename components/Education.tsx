"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale";
import { waLink } from "@/lib/content";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

export default function Education() {
  const { t } = useLocale();

  return (
    <section id="education" className="border-t border-espresso/10 bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <Eyebrow className="mb-4">{t.education.eyebrow}</Eyebrow>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-xl font-display text-4xl leading-tight text-espresso md:text-5xl">
              {t.education.title}
            </h2>
            <p className="max-w-md font-display text-xl italic leading-snug text-taupe">
              {t.education.subtitle}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-mocha/90 md:text-lg">
            {t.education.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {t.education.photos.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 3) * 0.06}>
              <div
                className={`group relative overflow-hidden rounded-sm ${
                  i % 3 === 1 ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-x-14 gap-y-12 md:grid-cols-2">
          {t.education.groups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 2) * 0.08}>
              <div className={group.items.length > 6 ? "md:row-span-2" : ""}>
                <h3 className="font-display text-2xl text-espresso">{group.title}</h3>
                <div className="mt-4 h-px w-12 bg-gold/60" aria-hidden="true" />
                <ul className="mt-5 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-mocha/90">
                      <span aria-hidden="true" className="mt-[9px] h-px w-4 shrink-0 bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.08}>
            <div>
              <h3 className="font-display text-2xl text-espresso">{t.education.after.title}</h3>
              <div className="mt-4 h-px w-12 bg-gold/60" aria-hidden="true" />
              <p className="mt-5 text-sm leading-relaxed text-mocha/90">
                {t.education.after.lead}
              </p>
              <ul className="mt-2.5 space-y-2.5">
                {t.education.after.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-mocha/90">
                    <span aria-hidden="true" className="mt-[9px] h-px w-4 shrink-0 bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-20 rounded-sm bg-espresso px-8 py-12 text-center md:px-16 md:py-16">
            <h3 className="font-display text-3xl leading-snug text-ivory md:text-4xl">
              {t.education.closing.title}
            </h3>
            <div className="mx-auto mt-6 max-w-2xl space-y-3 text-sm leading-relaxed text-sand md:text-base">
              {t.education.closing.text.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <a
              href={waLink(t.education.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-sand"
            >
              {t.education.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
