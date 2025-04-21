'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/translate';
import { useLanguage } from '@/contexts/LanguageContext';

export function ProductVideo() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  // YouTube iframe URLs with language parameters
  const youtubeURLs = {
    en: "https://www.youtube.com/embed/CoxuaB0qD6o?si=HHzriROCPZiYnZJS&hl=en&cc_lang_pref=en",
    zh: "https://www.youtube.com/embed/CoxuaB0qD6o?si=HHzriROCPZiYnZJS&hl=zh-CN&cc_lang_pref=zh"
  };
  
  // Select URL based on current language
  const videoURL = language === 'zh' ? youtubeURLs.zh : youtubeURLs.en;

  // Custom translation function to handle missing keys
  const translate = (key: string): string => {
    try {
      // @ts-ignore - we know these keys exist now
      return t(key as any);
    } catch (error) {
      // Fallback texts if translation fails
      if (key === 'products.demo.title') return language === 'zh' ? 'FreePeriod演示视频' : 'The Demo Video for FreePeriod';
      if (key === 'products.demo.subtitle') return language === 'zh' ? '观看我们的产品演示，了解FreePeriod的实际应用。' : 'Watch our product demonstration to see FreePeriod in action.';
      return key;
    }
  };

  return (
    <section className="py-16 bg-brand-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-brand-primary-800 mb-4">
            {translate('products.demo.title')}
          </h2>
          <p className="text-lg text-brand-neutral-600 max-w-3xl mx-auto">
            {translate('products.demo.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl"
        >
          <iframe 
            width="100%" 
            height="100%" 
            src={videoURL}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
} 