'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Battery, LeafyGreen } from 'lucide-react';
import { useTranslation } from '@/lib/translate';

export function ProductHero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-brand-primary-50 to-brand-secondary-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-brand-primary-800 mb-6">
          {t('products.hero.title')}
        </h1>
        
        <p className="text-xl text-brand-neutral-500 max-w-2xl mx-auto mb-8">
          {t('products.hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex items-center gap-2 text-green-600">
            <Battery className="h-5 w-5" />
            <span className="text-sm font-medium">15W Power Consumption</span>
          </div>
          <div className="hidden sm:block text-brand-neutral-300">|</div>
          <div className="flex items-center gap-2 text-emerald-600">
            <LeafyGreen className="h-5 w-5" />
            <span className="text-sm font-medium">98.5% CO2 Reduction</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
          <Card className="p-6 bg-white bg-opacity-90">
            <h3 className="font-semibold text-brand-primary-700 mb-2">
              {t('products.hero.v1.title')}
            </h3>
            <p className="text-sm text-brand-neutral-500">
              {t('products.hero.v1.description')}
            </p>
          </Card>
          
          <Card className="p-6 bg-brand-primary-50 bg-opacity-90">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-brand-primary-700">
                {t('products.hero.v2.title')}
              </h3>
              <Badge variant="secondary">
                {t('products.hero.v2.badge')}
              </Badge>
            </div>
            <p className="text-sm text-brand-neutral-500">
              {t('products.hero.v2.description')}
            </p>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}