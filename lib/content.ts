/**
 * Весь контент сайта в одном месте.
 * Структура готова к i18n: словарь ключуется локалью,
 * `ru` заполнен, `en` — краткие английские эквиваленты (заготовка).
 */

export type Locale = "ru" | "en";

/** TODO: реальный номер WhatsApp в международном формате, напр. "77001234567" */
export const WHATSAPP_NUMBER = "TODO";

/** TODO: реальные ссылки */
export const LINKS = {
  instagram: "https://instagram.com/TODO",
  twoGis: "https://2gis.kz/TODO",
  taplink: "https://taplink.cc/estet_premium",
};

export function waLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export interface Product {
  id: string;
  name: string;
  line: string;
  benefit: string;
  volume: string;
  /** Цвет этикетки — используется только на карточке товара */
  accent: string;
  accentSoft: string;
  waMessage: string;
  image?: string;
}

export interface StylerFeature {
  icon: "ceramic" | "heat" | "cold" | "airflow" | "attachments";
  title: string;
  text: string;
}

export interface Studio {
  name: string;
  address: string;
  hours: string;
  note?: string;
}

export interface Dictionary {
  meta: { title: string; description: string };
  nav: {
    products: string;
    styler: string;
    studios: string;
    about: string;
    contacts: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollCue: string;
    waMessage: string;
  };
  philosophy: {
    eyebrow: string;
    title: string;
    text: string[];
  };
  products: {
    eyebrow: string;
    title: string;
    intro: string;
    order: string;
    items: Product[];
  };
  styler: {
    eyebrow: string;
    title: string;
    subtitle: string;
    features: StylerFeature[];
    attachmentsNote: string;
    cta: string;
    waMessage: string;
  };
  studios: {
    eyebrow: string;
    title: string;
    milestone: string;
    milestoneDate: string;
    text: string[];
    items: Studio[];
    cta: string;
    waMessage: string;
  };
  founder: {
    eyebrow: string;
    title: string;
    name: string;
    role: string;
    story: string[];
    quote: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    moments: { label: string; sub: string }[];
  };
  club: {
    eyebrow: string;
    title: string;
    text: string;
    perks: { title: string; text: string }[];
    cta: string;
    waMessage: string;
  };
  contacts: {
    eyebrow: string;
    title: string;
    whatsapp: string;
    instagram: string;
    map: string;
    addressLabel: string;
    address: string;
    hoursLabel: string;
    hours: string;
    kaspi: string;
    closingLine: string;
    rights: string;
  };
  langToggle: { label: string; switchTo: Locale };
}

export const content: Record<Locale, Dictionary> = {
  ru: {
    meta: {
      title: "ESTET by Ashirov Azamat — премиальный уход за волосами и бьюти-студии",
      description:
        "ESTET — премиальная линия ухода за волосами, профессиональный стайлер 8-в-1 и сеть бьюти-студий в Казахстане. Тихая роскошь в каждой детали.",
    },
    nav: {
      products: "Продукты",
      styler: "Стайлер",
      studios: "Студии",
      about: "О бренде",
      contacts: "Контакты",
      cta: "Записаться",
    },
    hero: {
      eyebrow: "Premium Hair Care · Kazakhstan",
      title: "Красота начинается с ухода",
      tagline:
        "Премиальная косметика для волос, профессиональный стайлинг и бьюти-студии, где о вас заботятся до мелочей.",
      ctaPrimary: "Записаться",
      ctaSecondary: "Каталог",
      scrollCue: "Листайте вниз",
      waMessage: "Здравствуйте! Хочу записаться в студию ESTET.",
    },
    philosophy: {
      eyebrow: "Философия",
      title: "Тихая роскошь — это забота, которую не нужно доказывать",
      text: [
        "ESTET создан для тех, кто ценит качество без лишних слов. Мы соединяем натуральные ингредиенты, профессиональные формулы и внимание к деталям.",
        "Каждый продукт — результат работы мастеров, которые каждый день видят волосы клиентов и знают, что им действительно нужно.",
      ],
    },
    products: {
      eyebrow: "Уход за волосами",
      title: "Линия шампуней ESTET",
      intro:
        "Профессиональные формулы на основе натуральных экстрактов. Создано для ежедневного ухода салонного уровня — дома.",
      order: "Заказать",
      items: [
        {
          id: "coconut",
          name: "Coconut Oil",
          line: "Softening Shampoo · Coconut Essence",
          benefit:
            "Мягкое очищение и глубокое питание. Кокосовое масло разглаживает волосы и возвращает им естественный блеск.",
          volume: "500 мл",
          accent: "#4C5B43",
          accentSoft: "#E8EBE2",
          waMessage: "Здравствуйте! Хочу заказать шампунь ESTET Coconut Oil (500 мл).",
          image: "/images/product-coconut.jpg",
        },
        {
          id: "protein",
          name: "Protein",
          line: "Restructuring Shampoo",
          benefit:
            "Восстановление структуры изнутри. Протеиновый комплекс укрепляет повреждённые и ослабленные волосы.",
          volume: "500 мл",
          accent: "#8A6E5E",
          accentSoft: "#F1EAE1",
          waMessage: "Здравствуйте! Хочу заказать шампунь ESTET Protein.",
          image: "/images/product-protein.jpg",
        },
        {
          id: "ginger",
          name: "Ginger Essence",
          line: "Ginger Shampoo",
          benefit:
            "Стимуляция роста и сила от корней. Экстракт имбиря активирует кожу головы и дарит ощущение свежести.",
          volume: "500 мл",
          accent: "#A9853F",
          accentSoft: "#F2ECDD",
          waMessage: "Здравствуйте! Хочу заказать шампунь ESTET Ginger Essence.",
          image: "/images/product-ginger.jpg",
        },
      ],
    },
    styler: {
      eyebrow: "Профессиональный инструмент",
      title: "Стайлер ESTET 8-в-1",
      subtitle:
        "Один инструмент — все укладки. Салонный результат дома: сушка, объём, локоны и гладкость без вреда для волос.",
      features: [
        {
          icon: "ceramic",
          title: "Керамическое покрытие",
          text: "Равномерное распределение тепла — бережно к структуре волоса.",
        },
        {
          icon: "heat",
          title: "Умный контроль температуры",
          text: "Интеллектуальная система защищает волосы от перегрева.",
        },
        {
          icon: "cold",
          title: "Холодный режим двойным кликом",
          text: "Мгновенная фиксация укладки потоком холодного воздуха.",
        },
        {
          icon: "airflow",
          title: "Поток воздуха 35 м/с",
          text: "Уникальная скорость потока — быстрая сушка без экстремальных температур.",
        },
        {
          icon: "attachments",
          title: "8 сменных насадок",
          text: "Диффузор, круглые щётки, овальная щётка, концентратор, цилиндры для локонов.",
        },
      ],
      attachmentsNote:
        "В комплекте: диффузор, круглые щётки, овальная щётка, концентратор и цилиндрические насадки для локонов.",
      cta: "Узнать цену и заказать",
      waMessage: "Здравствуйте! Интересует профессиональный стайлер ESTET 8-в-1.",
    },
    studios: {
      eyebrow: "Бьюти-студии",
      title: "Пространство, где время замедляется",
      milestone: "Открытие третьей студии",
      milestoneDate: "07.02.2025",
      text: [
        "Студии ESTET — это не просто услуги, а ритуал заботы: внимательные мастера, продуманный интерьер и атмосфера, в которую хочется возвращаться.",
        "Седьмого февраля 2025 года мы открыли третью студию — шаг, который стал возможен благодаря доверию наших гостей.",
      ],
      items: [
        {
          name: "ESTET · Студия №1",
          address: "TODO: адрес первой студии",
          hours: "TODO: часы работы",
        },
        {
          name: "ESTET · Студия №2",
          address: "TODO: адрес второй студии",
          hours: "TODO: часы работы",
        },
        {
          name: "ESTET · Студия №3",
          address: "TODO: адрес третьей студии",
          hours: "TODO: часы работы",
          note: "Открыта 07.02.2025",
        },
      ],
      cta: "Записаться в студию",
      waMessage: "Здравствуйте! Хочу записаться в бьюти-студию ESTET.",
    },
    founder: {
      eyebrow: "Основатель",
      title: "Человек за брендом",
      name: "Аширов Азамат",
      role: "Основатель ESTET",
      story: [
        "ESTET начался с простого убеждения: премиальный уход — это не про цену, а про отношение. К клиенту, к продукту, к каждой детали.",
        "Сегодня ESTET — это собственная линия косметики для волос, профессиональный инструмент и три бьюти-студии. Но суть не изменилась: мы делаем то, чем гордимся сами.",
      ],
      quote: "Настоящее качество не требует громких слов.",
    },
    gallery: {
      eyebrow: "Моменты",
      title: "Жизнь ESTET",
      moments: [
        { label: "Открытие третьей студии", sub: "07.02.2025" },
        { label: "Гости и команда", sub: "Вечер открытия" },
        { label: "Атмосфера студии", sub: "Детали интерьера" },
        { label: "Backstage", sub: "Работа мастеров" },
        { label: "Продукция ESTET", sub: "Линия ухода" },
        { label: "События бренда", sub: "Моменты вместе" },
      ],
    },
    club: {
      eyebrow: "Клуб ESTET",
      title: "Ближний круг",
      text: "После первой покупки вы становитесь частью закрытого клуба ESTET — с привилегиями, которые мы не анонсируем публично.",
      perks: [
        {
          title: "Бонусы с каждой покупки",
          text: "Накопительная система на продукцию и услуги студий.",
        },
        {
          title: "Ранний доступ",
          text: "Новинки линии ухода — сначала для участников клуба.",
        },
        {
          title: "Закрытые события",
          text: "Приглашения на открытия и мероприятия бренда.",
        },
      ],
      cta: "Присоединиться",
      waMessage: "Здравствуйте! Хочу узнать подробнее о клубе ESTET.",
    },
    contacts: {
      eyebrow: "Контакты",
      title: "Мы рядом",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      map: "Мы на 2ГИС",
      addressLabel: "Адрес",
      address: "TODO: адрес студии",
      hoursLabel: "Часы работы",
      hours: "TODO: часы работы",
      kaspi: "Принимаем Kaspi Red",
      closingLine: "Красота — в деталях",
      rights: "Все права защищены",
    },
    langToggle: { label: "EN", switchTo: "en" },
  },

  en: {
    meta: {
      title: "ESTET by Ashirov Azamat — premium hair care & beauty studios",
      description:
        "ESTET — premium hair-care line, professional 8-in-1 styler and beauty studios in Kazakhstan. Quiet luxury in every detail.",
    },
    nav: {
      products: "Products",
      styler: "Styler",
      studios: "Studios",
      about: "About",
      contacts: "Contacts",
      cta: "Book now",
    },
    hero: {
      eyebrow: "Premium Hair Care · Kazakhstan",
      title: "Beauty begins with care",
      tagline:
        "Premium hair cosmetics, professional styling and beauty studios where every detail matters.",
      ctaPrimary: "Book now",
      ctaSecondary: "Catalogue",
      scrollCue: "Scroll down",
      waMessage: "Hello! I'd like to book a visit to ESTET studio.",
    },
    philosophy: {
      eyebrow: "Philosophy",
      title: "Quiet luxury is care that needs no proof",
      text: [
        "ESTET is made for those who value quality without loud words: natural ingredients, professional formulas, attention to detail.",
        "Every product is shaped by masters who work with clients' hair every day.",
      ],
    },
    products: {
      eyebrow: "Hair care",
      title: "ESTET shampoo line",
      intro:
        "Professional formulas with natural extracts — salon-level daily care at home.",
      order: "Order",
      items: [
        {
          id: "coconut",
          name: "Coconut Oil",
          line: "Softening Shampoo · Coconut Essence",
          benefit: "Gentle cleansing and deep nourishment with coconut oil.",
          volume: "500 ml",
          accent: "#4C5B43",
          accentSoft: "#E8EBE2",
          waMessage: "Hello! I'd like to order ESTET Coconut Oil shampoo (500 ml).",
          image: "/images/product-coconut.jpg",
        },
        {
          id: "protein",
          name: "Protein",
          line: "Restructuring Shampoo",
          benefit: "Protein complex restores damaged and weakened hair.",
          volume: "500 ml",
          accent: "#8A6E5E",
          accentSoft: "#F1EAE1",
          waMessage: "Hello! I'd like to order ESTET Protein shampoo.",
          image: "/images/product-protein.jpg",
        },
        {
          id: "ginger",
          name: "Ginger Essence",
          line: "Ginger Shampoo",
          benefit: "Ginger extract stimulates the scalp and strengthens roots.",
          volume: "500 ml",
          accent: "#A9853F",
          accentSoft: "#F2ECDD",
          waMessage: "Hello! I'd like to order ESTET Ginger Essence shampoo.",
          image: "/images/product-ginger.jpg",
        },
      ],
    },
    styler: {
      eyebrow: "Professional tool",
      title: "ESTET 8-in-1 Styler",
      subtitle:
        "One tool — every look. Salon results at home: drying, volume, curls and smoothness without damage.",
      features: [
        {
          icon: "ceramic",
          title: "Ceramic coating",
          text: "Even heat distribution, gentle on hair structure.",
        },
        {
          icon: "heat",
          title: "Intelligent heat control",
          text: "Smart system protects hair from overheating.",
        },
        {
          icon: "cold",
          title: "Double-click cold setting",
          text: "Instant fixation with a stream of cool air.",
        },
        {
          icon: "airflow",
          title: "35 m/s airflow",
          text: "Unique airflow speed — fast drying without extreme heat.",
        },
        {
          icon: "attachments",
          title: "8 interchangeable attachments",
          text: "Diffuser, round brushes, oval brush, concentrator, barrels.",
        },
      ],
      attachmentsNote:
        "Included: diffuser, round brushes, oval brush, concentrator and curling barrels.",
      cta: "Get price & order",
      waMessage: "Hello! I'm interested in the ESTET 8-in-1 professional styler.",
    },
    studios: {
      eyebrow: "Beauty studios",
      title: "A space where time slows down",
      milestone: "Third studio opening",
      milestoneDate: "07.02.2025",
      text: [
        "ESTET studios are a ritual of care: attentive masters, refined interiors and an atmosphere you want to return to.",
        "On February 7, 2025 we opened our third studio — made possible by the trust of our guests.",
      ],
      items: [
        { name: "ESTET · Studio 1", address: "TODO: address", hours: "TODO: hours" },
        { name: "ESTET · Studio 2", address: "TODO: address", hours: "TODO: hours" },
        {
          name: "ESTET · Studio 3",
          address: "TODO: address",
          hours: "TODO: hours",
          note: "Opened 07.02.2025",
        },
      ],
      cta: "Book a visit",
      waMessage: "Hello! I'd like to book a visit to ESTET beauty studio.",
    },
    founder: {
      eyebrow: "Founder",
      title: "The person behind the brand",
      name: "Ashirov Azamat",
      role: "Founder of ESTET",
      story: [
        "ESTET began with a simple belief: premium care is not about price — it's about attitude. To the client, the product, every detail.",
        "Today ESTET is its own hair-care line, a professional tool and three beauty studios. The essence hasn't changed: we make what we are proud of.",
      ],
      quote: "True quality needs no loud words.",
    },
    gallery: {
      eyebrow: "Moments",
      title: "Life of ESTET",
      moments: [
        { label: "Third studio opening", sub: "07.02.2025" },
        { label: "Guests & team", sub: "Opening night" },
        { label: "Studio atmosphere", sub: "Interior details" },
        { label: "Backstage", sub: "Masters at work" },
        { label: "ESTET products", sub: "Care line" },
        { label: "Brand events", sub: "Moments together" },
      ],
    },
    club: {
      eyebrow: "ESTET Club",
      title: "The inner circle",
      text: "After your first purchase you join the closed ESTET club — with privileges we don't announce publicly.",
      perks: [
        { title: "Bonuses on every purchase", text: "Loyalty system for products and studio services." },
        { title: "Early access", text: "New products — first for club members." },
        { title: "Private events", text: "Invitations to openings and brand events." },
      ],
      cta: "Join",
      waMessage: "Hello! I'd like to learn more about the ESTET club.",
    },
    contacts: {
      eyebrow: "Contacts",
      title: "We are near",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      map: "Find us on 2GIS",
      addressLabel: "Address",
      address: "TODO: studio address",
      hoursLabel: "Hours",
      hours: "TODO: working hours",
      kaspi: "Kaspi Red accepted",
      closingLine: "Beauty lives in the details",
      rights: "All rights reserved",
    },
    langToggle: { label: "RU", switchTo: "ru" },
  },
};
