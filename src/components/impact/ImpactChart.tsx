'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useTranslation } from '@/lib/translate';
import type { EmissionData } from '@/types/product';

const emissionData: EmissionData[] = [
  {
    type: 'Traditional Large Scale',
    power: '1000W',
    energy: '8,760 kWh',
    emissions: '1,814 kgCO2e'
  },
  {
    type: 'Traditional Medium Scale',
    power: '500W',
    energy: '4,380 kWh',
    emissions: '907 kgCO2e'
  },
  {
    type: 'Traditional Small Scale',
    power: '200W',
    energy: '1,752 kWh',
    emissions: '362.8 kgCO2e'
  },
  {
    type: 'FreePeriod 1.0',
    power: '15W',
    energy: '131.4 kWh',
    emissions: '27.2 kgCO2e'
  }
];

export function ImpactChart() {
  const { t } = useTranslation();

  return (
    <Card className="p-6 mb-16">
      <h2 className="text-xl font-semibold text-brand-primary-800 mb-6">
        {t('impact.chart.title')}
      </h2>
      <div className="space-y-8">
        {emissionData.map((item, index) => (
          <motion.div
            key={item.type}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-brand-primary-700">{item.type}</span>
              <span className="text-brand-primary-500">{item.emissions}</span>
            </div>
            <div className="h-4 bg-brand-neutral-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-brand-primary-500"
                initial={{ width: 0 }}
                animate={{ width: `${(parseFloat(item.emissions) / 1814) * 100}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
            <div className="flex justify-between text-sm text-brand-neutral-500 mt-1">
              <span>{item.power}</span>
              <span>{item.energy}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 p-4 bg-brand-primary-50 rounded-lg">
        <p className="text-brand-primary-700 text-sm">
          {t('impact.chart.v2note')}
        </p>
      </div>
    </Card>
  );
}