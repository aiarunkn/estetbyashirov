"use client";

import { useLocale } from "@/lib/locale";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

/* Тональности плиток; фото событий подключаются на их место через next/image */
const tileTones = [
  "bg-espresso text-ivory",
  "bg-sand text-espresso",
  "bg-taupe text-ivory",
  "bg-mocha text-ivory",
  "bg-cream text-espresso",
  "bg-ink text-ivory",
];

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
                className={`group relative flex overflow-hidden rounded-sm ${tileTones[i % tileTones.length]} ${
                  i % 3 === 1 ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center font-display text-8xl italic opacity-[0.07] transition-transform duration-700 group-hover:scale-110"
                >
                  E
                </span>
                <figcaption className="relative mt-auto p-5">
                  <p className="font-display text-lg leading-tight">{moment.label}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] opacity-60">
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
