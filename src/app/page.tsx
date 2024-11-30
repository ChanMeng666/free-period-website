'use client';

import { Hero } from '@/components/layout/Hero';
import { ProductShowcase } from '@/components/product/ProductShowcase';
import { LocationMap } from '@/components/map/LocationMap';
import { useTranslation } from '@/lib/translate';

const demoLocations = [
  {
    id: '1',
    position: { lat: 22.3193, lng: 114.1694 },
    title: 'Central Location',
    status: 'active' as const
  },
  {
    id: '2',
    position: { lat: 22.3583, lng: 114.1272 },
    title: 'Kowloon Location',
    status: 'inactive' as const
  }
];

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <div>
      <Hero />
      <ProductShowcase />
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-center text-3xl font-bold text-brand-primary-800 mb-8">
          {t('locations.title')}
        </h2>
        <LocationMap locations={demoLocations} />
      </section>
    </div>
  );
}