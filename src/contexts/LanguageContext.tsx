'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Language } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {
    console.warn('LanguageProvider not found!');
  },
});

const LANGUAGE_KEY = 'preferred-language';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const savedLanguage = localStorage.getItem(LANGUAGE_KEY) as Language;
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
        setLanguageState(savedLanguage);
      } else {
        const browserLanguage = navigator.language.startsWith('zh') ? 'zh' : 'en';
        setLanguageState(browserLanguage);
      }
    } catch (error) {
      console.error('Failed to get language preference:', error);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    try {
      setLanguageState(lang);
      localStorage.setItem(LANGUAGE_KEY, lang);
      document.documentElement.lang = lang;
    } catch (error) {
      console.error('Failed to set language:', error);
    }
  };

  // 避免服务器端渲染时的不匹配
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  return context;
} 