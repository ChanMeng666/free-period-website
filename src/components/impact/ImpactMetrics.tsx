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

export function ImpactMetrics() {
  const { t } = useTranslation();

  const metrics = [
    {
      id: 1,
      icon: Users,
      value: t('impact.metrics.activeUsers.total'),  // "50,000+ 活跃用户"
      title: t('impact.metrics.activeUsers.title'),  // "活跃用户数"
      description: t('impact.metrics.activeUsers.description'), // "月度用户群持续增长"
      trend: 'up',
      color: 'blue',
      lastMonth: t('impact.metrics.activeUsers.lastMonth')  // "较上月增长10%"
    },
    {
      id: 2,
      icon: Battery,
      value: t('impact.metrics.energyReduction.total'),  // "15W对比传统1000W"
      title: t('impact.metrics.energyReduction.title'),  // "节能减排"
      description: t('impact.metrics.energyReduction.description'),  // "相比传统分发器"
      trend: 'up',
      color: 'green', 
      lastMonth: t('impact.metrics.energyReduction.lastMonth')  // "节省98.5%能耗"
    },
    {
      id: 3,
      icon: LeafyGreen,
      value: t('impact.metrics.co2Saved.total'),  // "年碳排放27.2对比1,814 kgCO2e" 
      title: t('impact.metrics.co2Saved.title'),  // "碳减排量"
      description: t('impact.metrics.co2Saved.description'),  // "减少碳排放"
      trend: 'up',
      color: 'emerald',
      lastMonth: t('impact.metrics.co2Saved.lastMonth')  // "每台减少1786kg碳排放"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {metrics.map((metric) => (
        <motion.div
          key={metric.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: metric.id * 0.1 }}
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-full bg-${metric.color}-50`}>
                <metric.icon className={`h-6 w-6 text-${metric.color}-500`} />
              </div>
              {metric.trend === 'up' && (
                <div className="text-sm font-medium text-green-600">
                  ↑ {t('impact.trends.up')}
                </div>
              )}
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="text-3xl font-bold text-brand-primary-800">
                {metric.value}
              </div>
              <h3 className="font-medium text-brand-primary-700">
                {metric.title}
              </h3>
              <p className="text-sm text-brand-neutral-500">
                {metric.description}
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-brand-neutral-100">
              <div className="flex justify-between items-center text-sm text-brand-neutral-500">
                {metric.lastMonth}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}