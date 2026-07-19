"use client";

import { useLocale } from "@/lib/locale";
import { waLink, LINKS } from "@/lib/content";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

export default function Contacts() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer id="contacts" className="bg-ink text-ivory">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-24 md:px-8 md:pt-32">
        <Reveal>
          <Eyebrow tone="gold" className="mb-4">
            {t.contacts.eyebrow}
          </Eyebrow>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            {t.contacts.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <Reveal>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-baseline gap-3"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-taupe">
                    {t.contacts.whatsapp}
                  </span>
                  <span className="border-b border-transparent text-base text-ivory transition-colors group-hover:border-gold group-hover:text-gold">
                    {/* TODO: реальный номер */}
                    +7 ··· ··· ·· ··
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-baseline gap-3"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-taupe">
                    {t.contacts.instagram}
                  </span>
                  <span className="border-b border-transparent text-base text-ivory transition-colors group-hover:border-gold group-hover:text-gold">
                    @estet_premium
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={LINKS.twoGis}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-transparent text-base text-ivory transition-colors hover:border-gold hover:text-gold"
                >
                  {t.contacts.map}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-6 text-sm">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">
                  {t.contacts.addressLabel}
                </p>
                <p className="mt-1 text-base text-sand">{t.contacts.address}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">
                  {t.contacts.hoursLabel}
                </p>
                <p className="mt-1 text-base text-sand">{t.contacts.hours}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="inline-block rounded-sm border border-gold/30 px-4 py-2 text-xs uppercase tracking-[0.15em] text-gold">
              {t.contacts.kaspi}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-24 text-center font-display text-4xl italic leading-tight text-sand/90 sm:text-5xl md:text-6xl">
            {t.contacts.closingLine}
          </p>
        </Reveal>

        <div className="mt-20 flex flex-col items-center justify-between gap-3 border-t border-ivory/10 pt-8 text-xs text-sand/50 sm:flex-row">
          <p>
            © {year} ESTET by Ashirov Azamat · {t.contacts.rights}
          </p>
          <p className="uppercase tracking-[0.2em]">Kazakhstan</p>
        </div>
      </div>
    </footer>
  );
}
