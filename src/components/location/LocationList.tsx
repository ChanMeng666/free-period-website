'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { MapPin, Clock } from 'lucide-react';
import { useTranslation } from '@/lib/translate';

interface Location {
  id: string;
  name: string;
  address: string;
  type: 'hospital' | 'mall' | 'school';
  status: 'active' | 'coming';
}

interface LocationListProps {
  locations: Location[];
}

export function LocationList({ locations }: LocationListProps) {
  const { t } = useTranslation();

  return (
    <div className="space-y-4 h-[600px] overflow-y-auto">
      {locations.map((location, index) => (
        <motion.div
          key={location.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className={`p-2 rounded-full 
                  ${location.status === 'active' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-amber-100 text-amber-600'
                  }`}
                >
                  <MapPin className="h-5 w-5" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-brand-primary-800">
                  {location.name}
                </h3>
                <p className="text-brand-neutral-500 text-sm">
                  {location.address}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Clock className="h-4 w-4 text-brand-neutral-400" />
                  <span className="text-sm text-brand-neutral-500">
                    {t(`locations.type.${location.type}`)}
                  </span>
                  <span className={`text-sm px-2 py-0.5 rounded-full
                    ${location.status === 'active'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-amber-100 text-amber-600'
                    }`}
                  >
                    {t(`locations.status.${location.status}`)}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
} 