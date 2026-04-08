"use client";

import { createContext, useState } from "react";
import { en } from "@/messages/en";
import { pt } from "@/messages/pt";

type Locale = "en" | "pt";
type Messages = typeof en;

type NestedKey<T> = {
  [K in keyof T]: T[K] extends object
    ? `${K & string}.${NestedKey<T[K]>}`
    : K & string;
}[keyof T];

type TranslationKey = NestedKey<Messages>;

type I18nContextType = {
  locale: Locale;
  changeLocale: (l: Locale) => void;
  t: (key: TranslationKey) => string;
};

const messages = { en, pt };

export const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  const changeLocale = (l: Locale) => {
    setLocale(l);
    document.cookie = `locale=${l}; path=/`;
  };

  const t = (key: TranslationKey): string => {
    const keys = key.split(".") as string[];
    let value: unknown = messages[locale];

    for (const k of keys) {
      if (typeof value === "object" && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };

  return (
    <I18nContext.Provider value={{ locale, changeLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}
