'use client';

import { motion } from 'framer-motion';
import { Hero } from '@/components/layout/Hero';
import { ProductShowcase } from '@/components/product/ProductShowcase';
import { ImpactMetrics } from '@/components/impact/ImpactMetrics';
import { LocationMap } from '@/components/map/LocationMap';
import { FeatureGrid } from '@/components/layout/FeatureGrid';
import { useTranslation } from '@/lib/translate';
import { Button } from '@/components/ui/button';

export default function Home() {
  const { t } = useTranslation();
  
  const features = [
    {
      title: t('features.sustainable.title'),
      description: t('features.sustainable.description'),
      icon: 'LeafyGreen'
    },
    {
      title: t('features.smart.title'),
      description: t('features.smart.description'),
      icon: 'ChipIcon'
    },
    {
      title: t('features.accessible.title'),
      description: t('features.accessible.description'),
      icon: 'AccessibilityIcon'
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-brand-primary-50 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container"
        >
          <h2 className="text-3xl font-bold text-center text-brand-primary-800 mb-12">
            {t('home.features.title')}
          </h2>
          <FeatureGrid features={features} />
        </motion.div>
      </section>

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Impact Metrics */}
      <section className="py-20 bg-brand-neutral-50">
        <div className="container">
          <motion.h2 
            className="text-3xl font-bold text-center text-brand-primary-800 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('home.impact.title')}
          </motion.h2>
          <ImpactMetrics />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-brand-primary-800 mb-4">
              {t('home.locations.title')}
            </h2>
            <p className="text-brand-neutral-500 max-w-2xl mx-auto">
              {t('home.locations.subtitle')}
            </p>
          </motion.div>
          <LocationMap />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-primary-50">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-brand-primary-800 mb-6">
              {t('home.cta.title')}
            </h2>
            <p className="text-brand-neutral-500 mb-8">
              {t('home.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-primary-500 hover:bg-brand-primary-600 text-white"
              >
                {t('home.cta.primary')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-brand-primary-200"
              >
                {t('home.cta.secondary')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}