'use client';

import { motion } from 'framer-motion';
import { Button } from './button';
import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative inline-flex rounded-md shadow-sm">
      <motion.div
        className="absolute inset-0 bg-brand-primary-500"
        initial={false}
        animate={{
          x: language === 'en' ? 0 : '100%'
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
        style={{
          borderRadius: 'inherit',
          width: '50%'
        }}
      />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={`relative z-10 px-4 ${
          language === 'en' ? 'text-white' : 'text-brand-primary-600'
        }`}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('zh')}
        className={`relative z-10 px-4 ${
          language === 'zh' ? 'text-white' : 'text-brand-primary-600'
        }`}
      >
        中文
      </Button>
    </div>
  );
} 