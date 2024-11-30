'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from './translations';
import type { Language } from './translations';

type NestedKeyOf<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}.${NestedKeyOf<T[K]>}`
          : K
        : never;
    }[keyof T]
  : never;

type TranslationKeys = NestedKeyOf<typeof translations.en>;

export function useTranslation() {
  const { language } = useLanguage();
  
  const t = (key: TranslationKeys): string => {
    try {
      const keys = key.split('.');
      let value: any = translations[language as Language];
      
      for (const k of keys) {
        value = value[k];
      }
      
      if (value === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      
      return value;
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return key;
    }
  };

  return { t, language };
} 