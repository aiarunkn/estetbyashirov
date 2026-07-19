"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

export default function Gallery() {
  const { t } = useLocale();

  return (
    <section id="gallery" className="bg-ivory">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <Eyebrow className="mb-4">{t.gallery.eyebrow}</Eyebrow>
          <h2 className="font-display text-4xl leading-tight text-espresso md:text-5xl">
            {t.gallery.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {t.gallery.moments.map((moment, i) => (
            <Reveal key={moment.label} delay={(i % 3) * 0.06}>
              <figure
                className={`group relative flex overflow-hidden rounded-sm bg-espresso text-ivory ${
                  i % 3 === 1 ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <Image
                  src={moment.image.src}
                  alt={moment.image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/80 to-transparent"
                />
                <figcaption className="relative mt-auto p-5">
                  <p className="font-display text-lg leading-tight">{moment.label}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] opacity-70">
                    {moment.sub}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
