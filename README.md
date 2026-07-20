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

Ключевые данные:

| Что | Где в `lib/content.ts` |
|---|---|
| Номер WhatsApp | `WHATSAPP_NUMBER` (ссылки строятся через `waLink()` → `wa.clck.bar`) |
| Отображаемый номер | `PHONE_DISPLAY` |
| Instagram | объект `LINKS` |
| Филиалы по городам (адрес, часы, 2ГИС) | `studios.cities` — поля `hours` и `twoGis` опциональны и появляются на сайте, как только заполнены |

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

## Языки (RU/KZ)

Словарь двуязычный: `content.ru` и `content.kz` в `lib/content.ts`.
Переключатель **KZ/RU** в шапке работает и запоминает выбор (localStorage).

## Деплой на Vercel

```bash
npm i -g vercel && vercel
```

или подключите репозиторий на [vercel.com](https://vercel.com) — фреймворк определится автоматически, настройки не нужны.
