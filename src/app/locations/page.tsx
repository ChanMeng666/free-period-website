'use client';

import { motion } from 'framer-motion';
import { LocationMap } from '@/components/map/LocationMap';
import { LocationList } from '@/components/location/LocationList';
import { LocationSearch } from '@/components/location/LocationSearch';
import { useTranslation } from '@/lib/translate';

const demoLocations = [
  {
    id: '1',
    name: 'Central Hospital',
    address: '123 Healthcare Avenue, Central',
    position: { lat: 22.3193, lng: 114.1694 },
    type: 'hospital' as const,
    status: 'active' as const
  },
  {
    id: '2',
    name: 'City Mall',
    address: '456 Shopping Street, Kowloon',
    position: { lat: 22.3583, lng: 114.1272 },
    type: 'mall' as const,
    status: 'active' as const
  },
  {
    id: '3',
    name: 'University Campus',
    address: '789 Education Road, New Territories',
    position: { lat: 22.4134, lng: 114.2105 },
    type: 'school' as const,
    status: 'coming' as const
  }
];

export default function LocationsPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-brand-primary-800 mb-4">{t('locations.title')}</h1>
          <p className="text-brand-neutral-500 max-w-2xl mx-auto">
            {t('locations.subtitle')}
          </p>
        </motion.div>

        <LocationSearch />
        
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <LocationMap locations={demoLocations} />
          <LocationList locations={demoLocations} />
        </div>
      </section>
    </div>
  );
} 