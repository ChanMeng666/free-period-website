'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useTranslation } from '@/lib/translate';

export function ImpactChart() {
  const { t } = useTranslation();

  return (
    <Card className="p-6 mb-16">
      <h2 className="text-xl font-semibold text-brand-primary-800 mb-4">
        {t('impact.chart.title')}
      </h2>
      <div className="h-[300px] flex items-center justify-center text-brand-neutral-400">
        {t('impact.chart.placeholder')}
      </div>
    </Card>
  );
} 