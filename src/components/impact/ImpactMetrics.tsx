// 'use client';

// import { motion } from 'framer-motion';
// import { Card } from '@/components/ui/card';
// import { Battery, LeafyGreen, Users } from 'lucide-react';
// import { useTranslation } from '@/lib/translate';

// const metrics = [
//   {
//     id: 1,
//     icon: Users,
//     value: 50000,
//     unit: '+',
//     title: 'activeUsers',
//     trend: 'up',
//     color: 'text-blue-500'
//   },
//   {
//     id: 2,
//     icon: Battery,
//     value: 98.5,
//     unit: '%',
//     title: 'energyReduction',
//     trend: 'up',
//     color: 'text-green-500'
//   },
//   {
//     id: 3,
//     icon: LeafyGreen,
//     value: 1786,
//     unit: 'kg',
//     title: 'co2Saved',
//     trend: 'up',
//     color: 'text-emerald-500'
//   }
// ];

// export function ImpactMetrics() {
//   const { t } = useTranslation();

//   return (
//     <div className="grid md:grid-cols-3 gap-8 mb-16">
//       {metrics.map((metric, index) => (
//         <motion.div
//           key={metric.id}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: index * 0.1 }}
//         >
//           <Card className="p-6">
//             <div className="flex items-center justify-between mb-4">
//               <div className={`p-2 rounded-full bg-opacity-10 ${metric.color}`}>
//                 <metric.icon className={`h-6 w-6 ${metric.color}`} />
//               </div>
//               <div className={`text-sm font-medium ${
//                 metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
//               }`}>
//                 {metric.trend === 'up' ? '↑' : '↓'} {t(`impact.trends.${metric.trend}`)}
//               </div>
//             </div>
//             <div className="text-3xl font-bold text-brand-primary-800 mb-2">
//               {metric.value}
//               {metric.unit}
//             </div>
//             <div className="text-brand-neutral-500">
//               {t(`impact.metrics.${metric.title}`)}
//             </div>
//           </Card>
//         </motion.div>
//       ))}
//     </div>
//   );
// }

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
    color: 'text-blue-500',
    description: 'users.description'
  },
  {
    id: 2,
    icon: Battery,
    value: 98.5,
    unit: '%',
    title: 'energyReduction',
    trend: 'up',
    color: 'text-green-500',
    description: 'energy.description'
  },
  {
    id: 3,
    icon: LeafyGreen,
    value: 1786,
    unit: 'kg',
    title: 'co2Saved',
    trend: 'up',
    color: 'text-emerald-500',
    description: 'co2.description'
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
              <div 
                className={`text-sm font-medium flex items-center gap-1 ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {metric.trend === 'up' ? '↑' : '↓'} 
                {t(`impact.trends.${metric.trend}`)}
              </div>
            </div>

            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-3xl font-bold text-brand-primary-800">
                {metric.value.toLocaleString()}
              </span>
              <span className="text-lg text-brand-primary-600">
                {metric.unit}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-brand-neutral-800">
                {t(`impact.metrics.${metric.title}`)}
              </h3>
              <p className="text-sm text-brand-neutral-500">
                {t(`impact.metrics.${metric.description}`)}
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-brand-neutral-100">
              <div className="flex justify-between items-center text-sm">
                <span className="text-brand-neutral-500">
                  {t('impact.metrics.lastMonth')}
                </span>
                <span 
                  className={metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}
                >
                  +{(metric.value * 0.1).toFixed(1)}%
                </span>
              </div>
              <div className="mt-2 h-2 bg-brand-neutral-100 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${
                    metric.trend === 'up' ? 'bg-green-500' : 'bg-red-500'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min((metric.value * 0.1), 100)}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}