// 'use client';

// import { motion } from 'framer-motion';
// import { Card } from '@/components/ui/card';
// import { MapPin, Clock } from 'lucide-react';
// import { useTranslation } from '@/lib/translate';

// interface Location {
//   id: string;
//   name: string;
//   address: string;
//   type: 'hospital' | 'mall' | 'school';
//   status: 'active' | 'coming';
// }

// interface LocationListProps {
//   locations: Location[];
// }

// export function LocationList({ locations }: LocationListProps) {
//   const { t } = useTranslation();

//   return (
//     <div className="space-y-4 h-[600px] overflow-y-auto">
//       {locations.map((location, index) => (
//         <motion.div
//           key={location.id}
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.3, delay: index * 0.1 }}
//         >
//           <Card className="p-4 hover:shadow-md transition-shadow">
//             <div className="flex items-start gap-4">
//               <div className="flex-shrink-0">
//                 <div className={`p-2 rounded-full 
//                   ${location.status === 'active' 
//                     ? 'bg-green-100 text-green-600' 
//                     : 'bg-amber-100 text-amber-600'
//                   }`}
//                 >
//                   <MapPin className="h-5 w-5" />
//                 </div>
//               </div>
//               <div className="flex-grow">
//                 <h3 className="text-lg font-semibold text-brand-primary-800">
//                   {location.name}
//                 </h3>
//                 <p className="text-brand-neutral-500 text-sm">
//                   {location.address}
//                 </p>
//                 <div className="flex items-center gap-2 mt-2">
//                   <Clock className="h-4 w-4 text-brand-neutral-400" />
//                   <span className="text-sm text-brand-neutral-500">
//                     {t(`locations.type.${location.type}`)}
//                   </span>
//                   <span className={`text-sm px-2 py-0.5 rounded-full
//                     ${location.status === 'active'
//                       ? 'bg-green-100 text-green-600'
//                       : 'bg-amber-100 text-amber-600'
//                     }`}
//                   >
//                     {t(`locations.status.${location.status}`)}
//                   </span>
//                 </div>
//               </div>
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
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Info } from 'lucide-react';
import { useTranslation } from '@/lib/translate';

interface Location {
  id: string;
  name: string;
  address: string;
  type: 'hospital' | 'mall' | 'school' | 'office';
  status: 'active' | 'inactive' | 'coming';
  lastRefill?: string;
  availableUnits?: number;
  distance?: number;
}

interface LocationListProps {
  locations: Location[];
  onLocationSelect?: (location: Location) => void;
}

const statusColors = {
  active: 'bg-green-100 text-green-600 border-green-200',
  inactive: 'bg-red-100 text-red-600 border-red-200',
  coming: 'bg-amber-100 text-amber-600 border-amber-200'
};

export function LocationList({ locations, onLocationSelect }: LocationListProps) {
  const { t } = useTranslation();

  return (
    <div className="space-y-4 h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-brand-primary-200 scrollbar-track-transparent">
      {locations.map((location, index) => (
        <motion.div
          key={location.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          onClick={() => onLocationSelect?.(location)}
        >
          <Card className="p-4 hover:shadow-md transition-all cursor-pointer border-l-4 hover:border-l-brand-primary-500"
            style={{ 
              borderLeftColor: location.status === 'active' ? '#10B981' 
                : location.status === 'coming' ? '#F59E0B' 
                : '#EF4444'
            }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className={`p-2 rounded-full 
                  ${location.status === 'active' 
                    ? 'bg-green-100 text-green-600' 
                    : location.status === 'coming'
                    ? 'bg-amber-100 text-amber-600'
                    : 'bg-red-100 text-red-600'
                  }`}
                >
                  <MapPin className="h-5 w-5" />
                </div>
              </div>

              <div className="flex-grow space-y-2">
                <div>
                  <h3 className="text-lg font-semibold text-brand-primary-800">
                    {location.name}
                  </h3>
                  <p className="text-brand-neutral-500 text-sm">
                    {location.address}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">
                    {t(`locations.type.${location.type}`)}
                  </Badge>
                  <Badge className={statusColors[location.status]}>
                    {t(`locations.status.${location.status}`)}
                  </Badge>
                  {location.distance && (
                    <Badge variant="outline" className="text-brand-primary-600">
                      {location.distance.toFixed(1)} km
                    </Badge>
                  )}
                </div>

                {location.status === 'active' && (
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-brand-neutral-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{t('locations.lastRefill')}: {location.lastRefill}</span>
                    </div>
                    <div className="hidden sm:block text-brand-neutral-300">•</div>
                    <div className="flex items-center gap-1">
                      <Info className="h-4 w-4" />
                      <span>
                        {t('locations.available')}: {location.availableUnits} {t('locations.units')}
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex justify-end pt-2">
                  <button
                    className="text-sm text-brand-primary-600 hover:text-brand-primary-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(
                        `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`,
                        '_blank'
                      );
                    }}
                  >
                    {t('locations.getDirections')} →
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}

      {locations.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full text-brand-neutral-500">
          <MapPin className="h-12 w-12 mb-4" />
          <p>{t('locations.noResults')}</p>
        </div>
      )}
    </div>
  );
}