// 'use client';

// import { motion } from 'framer-motion';
// import { Card } from '@/components/ui/card';
// import { useTranslation } from '@/lib/translate';
// import type { EmissionData } from '@/types/product';

// const emissionData: EmissionData[] = [
//   {
//     type: 'Traditional Large Scale',
//     power: '1000W',
//     energy: '8,760 kWh',
//     emissions: '1,814 kgCO2e'
//   },
//   {
//     type: 'Traditional Medium Scale',
//     power: '500W',
//     energy: '4,380 kWh',
//     emissions: '907 kgCO2e'
//   },
//   {
//     type: 'Traditional Small Scale',
//     power: '200W',
//     energy: '1,752 kWh',
//     emissions: '362.8 kgCO2e'
//   },
//   {
//     type: 'FreePeriod 1.0',
//     power: '15W',
//     energy: '131.4 kWh',
//     emissions: '27.2 kgCO2e'
//   }
// ];

// export function ImpactChart() {
//   const { t } = useTranslation();

//   return (
//     <Card className="p-6 mb-16">
//       <h2 className="text-xl font-semibold text-brand-primary-800 mb-6">
//         {t('impact.chart.title')}
//       </h2>
//       <div className="space-y-8">
//         {emissionData.map((item, index) => (
//           <motion.div
//             key={item.type}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="relative"
//           >
//             <div className="flex justify-between items-center mb-2">
//               <span className="font-medium text-brand-primary-700">{item.type}</span>
//               <span className="text-brand-primary-500">{item.emissions}</span>
//             </div>
//             <div className="h-4 bg-brand-neutral-100 rounded-full overflow-hidden">
//               <motion.div
//                 className="h-full bg-brand-primary-500"
//                 initial={{ width: 0 }}
//                 animate={{ width: `${(parseFloat(item.emissions) / 1814) * 100}%` }}
//                 transition={{ duration: 1, delay: index * 0.1 }}
//               />
//             </div>
//             <div className="flex justify-between text-sm text-brand-neutral-500 mt-1">
//               <span>{item.power}</span>
//               <span>{item.energy}</span>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//       <div className="mt-8 p-4 bg-brand-primary-50 rounded-lg">
//         <p className="text-brand-primary-700 text-sm">
//           {t('impact.chart.v2note')}
//         </p>
//       </div>
//     </Card>
//   );
// }


'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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
              <div className="space-y-1">
                <span className="font-medium text-brand-primary-700">
                  {item.type}
                </span>
                <div className="flex items-center gap-4 text-sm text-brand-neutral-500">
                  <span>Power: {item.power}</span>
                  <span>Energy: {item.energy}</span>
                </div>
              </div>
              <span className="text-brand-primary-500 font-medium">
                {item.emissions}
              </span>
            </div>

            <div className="h-4 bg-brand-neutral-100 rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${
                  item.type.includes('FreePeriod')
                    ? 'bg-brand-primary-500'
                    : 'bg-brand-neutral-300'
                }`}
                initial={{ width: 0 }}
                animate={{ 
                  width: `${(parseFloat(item.emissions) / 1814) * 100}%` 
                }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>

            {item.type.includes('FreePeriod') && (
              <motion.div
                className="absolute -right-2 -top-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                98.5% Less
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-brand-primary-50 rounded-lg">
        <p className="text-brand-primary-700 text-sm">
          {t('impact.chart.v2note')}
        </p>
      </div>

      <div className="mt-8 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={emissionData.map(item => ({
              name: item.type,
              emissions: parseFloat(item.emissions),
              energy: parseFloat(item.energy.replace(/,/g, '')),
              power: parseInt(item.power)
            }))}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone"
              dataKey="emissions"
              stroke="#F43F5E"
              strokeWidth={2}
              dot={{ fill: '#F43F5E' }}
              name="CO2 Emissions (kgCO2e)"
            />
            <Line
              type="monotone" 
              dataKey="energy"
              stroke="#0EA5E9"
              strokeWidth={2}
              dot={{ fill: '#0EA5E9' }}
              name="Energy Usage (kWh)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}