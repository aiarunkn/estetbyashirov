import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { LocaleProvider } from "@/lib/locale";
import { content } from "@/lib/content";
import ScrollThread from "@/components/ScrollThread";
import HangingContact from "@/components/HangingContact";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: content.ru.meta.title,
  description: content.ru.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <LocaleProvider>
          <ScrollThread />
          {children}
          <HangingContact />
        </LocaleProvider>
      </body>
    </html>
  );
}
