"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/lib/locale";
import { waLink } from "@/lib/content";

export default function HangingContact() {
  const { t } = useLocale();
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="fixed right-4 top-28 z-40 flex flex-col items-center sm:right-6 sm:top-24 md:right-10 md:top-28"
      style={{ transformOrigin: "top center" }}
      animate={reducedMotion ? undefined : { rotate: [-4, 4, -4] }}
      transition={
        reducedMotion ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut" }
      }
    >
      <svg
        width="34"
        height="64"
        viewBox="0 0 34 64"
        fill="none"
        aria-hidden="true"
        className="drop-shadow-[0_1px_2px_rgba(26,21,18,0.35)]"
      >
        <path
          d="M17 0 C 26 10, 8 20, 20 30 C 30 38, 10 48, 17 60"
          stroke="rgba(26,21,18,0.18)"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        <path
          d="M17 0 C 26 10, 8 20, 20 30 C 30 38, 10 48, 17 60"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <a
        href={waLink(t.hero.waMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.floatingContact.label}
        className="-mt-1 flex h-11 w-11 items-center justify-center rounded-full border border-gold bg-ink/90 text-ivory shadow-[0_12px_30px_-12px_rgba(26,21,18,0.55)] backdrop-blur transition-colors hover:bg-gold hover:text-ink sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-3"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.86.5 3.6 1.38 5.1L2 22l4.9-1.38C8.4 21.5 10.14 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.6 0-3.1-.43-4.4-1.2l-.32-.18-2.9.82.82-2.9-.18-.32C4.43 14.9 4 13.4 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
        </svg>
        <span className="hidden text-sm sm:inline">{t.floatingContact.label}</span>
      </a>
    </motion.div>
  );
}
