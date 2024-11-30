import { useLanguage } from '@/contexts/LanguageContext';

type TranslationType = {
  navigation: {
    home: string;
    products: string;
    locations: string;
    impact: string;
    education: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: {
      primary: string;
      secondary: string;
    };
  };
};

const translations: Record<'en' | 'zh', TranslationType> = {
  en: {
    navigation: {
      home: 'Home',
      products: 'Products',
      locations: 'Locations',
      impact: 'Impact',
      education: 'Education'
    },
    hero: {
      headline: 'Revolutionizing Menstrual Care',
      subheadline: 'Innovative, sustainable, and accessible solutions for everyone',
      cta: {
        primary: 'Explore Products',
        secondary: 'Learn More'
      }
    }
  },
  zh: {
    navigation: {
      home: '首页',
      products: '产品',
      locations: '位置',
      impact: '影响',
      education: '教育'
    },
    hero: {
      headline: '革新月经护理',
      subheadline: '创新、可持续、人人可及的解决方案',
      cta: {
        primary: '探索产品',
        secondary: '了解更多'
      }
    }
  }
};

export function useTranslation() {
  const { language } = useLanguage();
  
  return {
    t: (key: string): string => {
      const keys = key.split('.');
      let value: any = translations[language];
      for (const k of keys) {
        value = value?.[k];
      }
      return value || key;
    }
  };
} 