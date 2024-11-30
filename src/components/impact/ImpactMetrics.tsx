'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Battery, LeafyGreen, Users } from 'lucide-react';
import { useTranslation } from '@/lib/translate';

const metrics = [
  {
    id: 1,
    icon: Users,
    value: 50000,
    unit: '+',
    title: 'activeUsers',
    trend: 'up',
    color: 'text-blue-500'
  },
  {
    id: 2,
    icon: Battery,
    value: 98.5,
    unit: '%',
    title: 'energyReduction',
    trend: 'up',
    color: 'text-green-500'
  },
  {
    id: 3,
    icon: LeafyGreen,
    value: 1786,
    unit: 'kg',
    title: 'co2Saved',
    trend: 'up',
    color: 'text-emerald-500'
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
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-full bg-opacity-10 ${metric.color}`}>
                <metric.icon className={`h-6 w-6 ${metric.color}`} />
              </div>
              <div className={`text-sm font-medium ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.trend === 'up' ? '↑' : '↓'} {t(`impact.trends.${metric.trend}`)}
              </div>
            </div>
            <div className="text-3xl font-bold text-brand-primary-800 mb-2">
              {metric.value}
              {metric.unit}
            </div>
            <div className="text-brand-neutral-500">
              {t(`impact.metrics.${metric.title}`)}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}