'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './button';
import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative inline-flex rounded-md shadow-sm bg-brand-neutral-100 p-1">
      <AnimatePresence initial={false}>
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
      </AnimatePresence>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={`relative z-10 px-4 font-medium transition-colors
          ${language === 'en' 
            ? 'text-white' 
            : 'text-brand-neutral-600 hover:text-brand-primary-600'
          }`}
      >
        EN
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('zh')}
        className={`relative z-10 px-4 font-medium transition-colors
          ${language === 'zh'
            ? 'text-white'
            : 'text-brand-neutral-600 hover:text-brand-primary-600'
          }`}
      >
        中文
      </Button>
    </div>
  );
}