'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Info } from 'lucide-react';
import { useTranslation } from '@/lib/translate';
import type { Location } from '@/types/location';

interface LocationListProps {
  locations: Location[];
  selectedLocation?: Location | null;
  onLocationSelect?: (location: Location) => void;
}

export function LocationList({ 
  locations,
  selectedLocation,
  onLocationSelect 
}: LocationListProps) {
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
          <Card 
            className={`p-4 hover:shadow-md transition-all cursor-pointer border-l-4
              ${selectedLocation?.id === location.id ? 'ring-2 ring-brand-primary-500' : ''}
              ${location.status === 'active' ? 'border-l-green-500' : 
                location.status === 'coming' ? 'border-l-amber-500' : 
                'border-l-red-500'}`
            }
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
                    {t(`locations.type.${location.type}` as const)}
                  </Badge>
                  <Badge className={`
                    ${location.status === 'active' 
                      ? 'bg-green-100 text-green-600 border-green-200'
                      : location.status === 'coming' 
                      ? 'bg-amber-100 text-amber-600 border-amber-200'
                      : 'bg-red-100 text-red-600 border-red-200'
                    }`}
                  >
                    {t(`locations.status.${location.status}` as const)}
                  </Badge>
                </div>

                {location.status === 'active' && (
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-brand-neutral-500">
                    {location.lastRefill && (
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>
                          {t('locations.details.lastRefill')}: {location.lastRefill}
                        </span>
                      </div>
                    )}
                    {location.lastRefill && location.availableUnits && (
                      <div className="hidden sm:block text-brand-neutral-300">•</div>
                    )}
                    {location.availableUnits !== undefined && (
                      <div className="flex items-center gap-1">
                        <Info className="h-4 w-4" />
                        <span>
                          {t('locations.details.available')}: {location.availableUnits} {t('locations.details.units')}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex justify-end pt-2 border-t border-gray-100">
                  <button
                    className="text-sm text-brand-primary-600 hover:text-brand-primary-700 
                      transition-colors flex items-center gap-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(
                        `https://www.google.com/maps/dir/?api=1&destination=${
                          encodeURIComponent(location.address)
                        }`,
                        '_blank'
                      );
                    }}
                  >
                    {t('locations.details.getDirections')}
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}

      {locations.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center h-full text-brand-neutral-500"
        >
          <MapPin className="h-12 w-12 mb-4 text-brand-neutral-400" />
          <p className="text-lg font-medium">{t('locations.search.noResults')}</p>
          <p className="text-sm text-brand-neutral-400 mt-2">
            {t('locations.search.tryAdjustingSearch')}
          </p>
        </motion.div>
      )}
    </div>
  );
}