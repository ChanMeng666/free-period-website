'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/translate';

export function ProductHero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-brand-primary-50 to-brand-secondary-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-brand-primary-800 mb-6">
          {t('products.title')}
        </h1>
        <p className="text-xl text-brand-neutral-500 max-w-2xl mx-auto">
          {t('products.subtitle')}
        </p>
      </motion.div>
    </section>
  );
} 