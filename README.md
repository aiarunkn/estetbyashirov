# ESTET by Ashirov Azamat — сайт

Премиальный маркетинговый сайт: линия ухода за волосами, стайлер 8-в-1 и бьюти-студии.
Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion. Полностью статический, готов к Vercel.

## Запуск

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production-сборка
```

## Как редактировать контент

Весь текст и данные — в одном файле: **`lib/content.ts`**.

Обязательно замените `TODO`-заглушки:

| Что | Где в `lib/content.ts` |
|---|---|
| Номер WhatsApp | константа `WHATSAPP_NUMBER` (формат `77001234567`, без `+`) |
| Instagram / 2ГИС | объект `LINKS` |
| Адреса и часы студий | `studios.items` |
| Адрес и часы в футере | `contacts.address`, `contacts.hours` |
| Отображаемый номер в футере | `components/Contacts.tsx` (строка `+7 ··· ··· ·· ··`) |

## Как добавить фотографии

1. Положите файлы в `public/images/` с такими именами:

   | Файл | Назначение |
   |---|---|
   | `hero.jpg` | главный фон (широкий кадр) |
   | `product-coconut.jpg` / `product-protein.jpg` / `product-ginger.jpg` | флаконы шампуней |
   | `styler-box.jpg`, `styler-use.jpg` | стайлер: флэтлей коробки и кадр «в работе» |
   | `founder.jpg` | портрет основателя (белый костюм) |
   | `studio-opening.jpg`, `event-*.jpg` | события, открытие 3-й студии — для галереи |

2. В соответствующем компоненте (`Hero`, `Products`, `Founder`, `Gallery`, `Styler`) замените типографический блок-заглушку на `next/image`:

   ```tsx
   import Image from "next/image";

   <Image
     src="/images/product-coconut.jpg"
     alt="Шампунь ESTET Coconut Oil, 500 мл"
     fill
     sizes="(max-width: 768px) 100vw, 33vw"
     className="object-cover"
   />
   ```

   Пути к фото товаров уже прописаны в `content.ts` (`products.items[].image`).
   Для hero добавьте `priority`.

## Как включить английскую версию

Словарь уже двуязычный: `content.en` в `lib/content.ts` содержит краткие английские заготовки.
Допишите/отредактируйте тексты в `en` — переключатель **EN/RU** в шапке уже работает.

## Деплой на Vercel

```bash
npm i -g vercel && vercel
```

или подключите репозиторий на [vercel.com](https://vercel.com) — фреймворк определится автоматически, настройки не нужны.
