"use client";

import { useLocale } from "@/lib/locale";
import { waLink, LINKS, PHONE_DISPLAY } from "@/lib/content";
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
                  href={waLink(t.hero.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-baseline gap-3"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-taupe">
                    {t.contacts.whatsapp}
                  </span>
                  <span className="border-b border-transparent text-base text-ivory transition-colors group-hover:border-gold group-hover:text-gold">
                    {PHONE_DISPLAY}
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
                <p className="mt-2 inline-block rounded-sm border border-gold/30 px-4 py-2 text-xs uppercase tracking-[0.15em] text-gold">
                  {t.contacts.kaspi}
                </p>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="md:col-span-2">
            <div className="grid gap-8 sm:grid-cols-2">
              {t.studios.cities.map((city) => (
                <div key={city.name}>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-taupe">
                    {city.name}
                  </p>
                  <ul className="mt-2 space-y-2.5">
                    {city.branches.map((branch) => (
                      <li key={branch.address} className="text-base leading-snug text-sand">
                        {branch.twoGis ? (
                          <a
                            href={branch.twoGis}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-b border-transparent transition-colors hover:border-gold hover:text-gold"
                          >
                            {branch.address}
                          </a>
                        ) : (
                          branch.address
                        )}
                        {branch.hours && (
                          <span className="block text-sm text-sand/60">{branch.hours}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
