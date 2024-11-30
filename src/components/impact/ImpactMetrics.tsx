'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useTranslation } from '@/lib/translate';

const metrics = [
  {
    id: 1,
    value: 50000,
    unit: '+',
    title: 'users',
    trend: 'up' as const
  },
  {
    id: 2,
    value: 1000,
    unit: 'kg',
    title: 'waste',
    trend: 'down' as const
  },
  {
    id: 3,
    value: 75,
    unit: '%',
    title: 'satisfaction',
    trend: 'up' as const
  }
];

export function ImpactMetrics() {
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-brand-primary-600 mb-2">
              {metric.value}
              {metric.unit}
            </div>
            <div className="text-brand-neutral-500">
              {t(`impact.metrics.${metric.title}`)}
            </div>
            <div className={`text-sm mt-2 ${
              metric.trend === 'up' 
                ? 'text-green-600' 
                : 'text-red-600'
            }`}>
              {t(`impact.trends.${metric.trend}`)}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
} 