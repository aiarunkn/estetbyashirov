"use client";

import { useLocale } from "@/lib/locale";
import { waLink, type StylerFeature } from "@/lib/content";
import Reveal from "@/components/Reveal";

const icons: Record<StylerFeature["icon"], React.ReactNode> = {
  ceramic: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <rect x="8" y="4" width="16" height="24" rx="8" />
      <path d="M12 10c2 2 6 2 8 0M12 16c2 2 6 2 8 0M12 22c2 2 6 2 8 0" />
    </svg>
  ),
  heat: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M16 4v14" />
      <circle cx="16" cy="23" r="5" />
      <circle cx="16" cy="23" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  cold: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M16 3v26M6 8.5l20 15M26 8.5l-20 15M16 8l-3.5-3.5M16 8l3.5-3.5M16 24l-3.5 3.5M16 24l3.5 3.5" />
    </svg>
  ),
  airflow: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M4 10h14a4 4 0 1 0-4-4M4 16h20a4 4 0 1 1-4 4M4 22h10" />
    </svg>
  ),
  attachments: (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <circle cx="9" cy="9" r="4.5" />
      <circle cx="23" cy="9" r="4.5" />
      <circle cx="9" cy="23" r="4.5" />
      <rect x="18.5" y="18.5" width="9" height="9" rx="1.5" />
    </svg>
  ),
};

export default function Styler() {
  const { t } = useLocale();

  return (
    <section id="styler" className="bg-espresso text-ivory">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gold">
                {t.styler.eyebrow}
              </p>
              <h2 className="font-display text-4xl leading-tight md:text-5xl">
                {t.styler.title}
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-sand">
                {t.styler.subtitle}
              </p>
            </Reveal>

            {/* Типографическая витрина вместо флэтлея коробки — заменить фото */}
            <Reveal delay={0.12}>
              <div className="mt-12 hidden rounded-sm border border-ivory/10 bg-mocha/40 p-10 lg:block">
                <p className="font-display text-7xl italic leading-none text-gold">8</p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-sand">
                  {t.styler.features[4].title}
                </p>
                <div className="mt-8 h-px bg-ivory/10" aria-hidden="true" />
                <p className="mt-6 text-sm leading-relaxed text-sand/80">
                  {t.styler.attachmentsNote}
                </p>
              </div>
            </Reveal>
          </div>

          <div>
            <ul className="divide-y divide-ivory/10 border-y border-ivory/10">
              {t.styler.features.map((feature, i) => (
                <Reveal key={feature.icon} delay={i * 0.06}>
                  <li className="flex gap-5 py-6">
                    <span className="h-8 w-8 shrink-0 text-gold">{icons[feature.icon]}</span>
                    <div>
                      <h3 className="font-display text-xl">{feature.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-sand/85">
                        {feature.text}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.2}>
              <a
                href={waLink(t.styler.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-sand"
              >
                {t.styler.cta}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
