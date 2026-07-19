"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale";
import { waLink } from "@/lib/content";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/Eyebrow";

export default function Products() {
  const { t } = useLocale();

  return (
    <section id="products" className="border-t border-espresso/10 bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <Eyebrow className="mb-4">{t.products.eyebrow}</Eyebrow>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-md font-display text-4xl leading-tight text-espresso md:text-5xl">
              {t.products.title}
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-mocha/80">
              {t.products.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.products.items.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-sm bg-ivory shadow-[0_1px_0_0_rgba(58,47,42,0.06)] transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(26,21,18,0.45)]">
                <div
                  className="relative flex aspect-[4/5] items-center justify-center overflow-hidden"
                  style={{ backgroundColor: product.accentSoft }}
                >
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={`Шампунь ESTET ${product.name}, ${product.volume}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <>
                      <div
                        className="flex h-3/5 w-1/3 flex-col items-center justify-center rounded-t-full px-2 text-center transition-transform duration-500 group-hover:-translate-y-1.5"
                        style={{ backgroundColor: product.accent }}
                      >
                        <span className="font-display text-[11px] tracking-[0.3em] text-ivory/90">
                          ESTET
                        </span>
                        <span className="mt-1 text-[8px] uppercase tracking-[0.18em] text-ivory/70">
                          {product.name}
                        </span>
                      </div>
                      <span
                        className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.2em]"
                        style={{ color: product.accent }}
                      >
                        {product.volume}
                      </span>
                    </>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl text-espresso">{product.name}</h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-taupe">
                    {product.line}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-mocha/85">
                    {product.benefit}
                  </p>
                  <a
                    href={waLink(product.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 self-start border-b border-gold pb-1 text-sm text-espresso transition-colors hover:text-gold"
                  >
                    {t.products.order}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
