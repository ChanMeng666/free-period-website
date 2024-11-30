'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProductImageViewer } from './ProductImageViewer';
import { Battery, Leaf, Activity } from 'lucide-react';
import { useTranslation } from '@/lib/translate';
import type { ProductVersion } from '@/types/product';

const productVersions: Record<string, ProductVersion> = {
  v1: {
    title: "FreePeriod 1.0",
    subtitle: "Revolutionary Sustainable Dispenser",
    description: "Our first-generation smart dispenser achieved a breakthrough 98.5% reduction in carbon emissions.",
    features: [
      {
        title: "Ultra-Efficient Design",
        description: "Only 15W power consumption compared to traditional 1000W machines",
        icon: "Battery"
      },
      {
        title: "Smart Monitoring",
        description: "Intelligent power management reduces energy waste",
        icon: "Activity"
      },
      {
        title: "Proven Impact",
        description: "27.2 kgCO2e annual emissions vs 1,814 kgCO2e traditional",
        icon: "Leaf"
      }
    ],
    specifications: {
      power: "15W",
      energy: "131.4 kWh/year",
      emissions: "27.2 kgCO2e/year",
      type: "Non-Cooling Products"
    },
    environmentalImpact: {
      co2Reduction: 98.5,
      energySaving: 98.5,
      wasteReduction: 1000
    }
  },
  v2: {
    title: "FreePeriod 2.0",
    subtitle: "The Next Evolution",
    description: "Setting new standards in sustainable dispensing with enhanced efficiency.",
    features: [
      {
        title: "Enhanced Efficiency",
        description: "Further reduced power consumption",
        icon: "Battery"
      },
      {
        title: "Advanced Monitoring",
        description: "Next-generation smart energy management",
        icon: "Activity"
      },
      {
        title: "Future-Ready",
        description: "Designed for maximum sustainability",
        icon: "Leaf"
      }
    ],
    specifications: {
      power: "Coming Soon",
      energy: "Coming Soon",
      emissions: "Coming Soon",
      type: "Smart Dispenser"
    },
    environmentalImpact: {
      co2Reduction: 99,
      energySaving: 99,
      wasteReduction: 1200
    }
  }
};

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Battery':
      return <Battery className="h-6 w-6" />;
    case 'Activity':
      return <Activity className="h-6 w-6" />;
    case 'Leaf':
      return <Leaf className="h-6 w-6" />;
    default:
      return null;
  }
};

export function ProductShowcase() {
  const { t } = useTranslation();
  const [selectedVersion, setSelectedVersion] = useState('v1');

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-brand-primary-800 mb-4">
            {t('products.evolution.title')}
          </h2>
          <p className="text-brand-neutral-500 max-w-2xl mx-auto">
            {t('products.evolution.subtitle')}
          </p>
        </motion.div>

        <Tab.Group onChange={(index) => setSelectedVersion(index === 0 ? 'v1' : 'v2')}>
          <Tab.List className="flex space-x-1 rounded-xl bg-brand-primary-100 p-1 mb-8">
            <Tab className={({ selected }) =>
              `w-full rounded-lg py-2.5 text-sm font-medium leading-5
              ${selected
                ? 'bg-white text-brand-primary-700 shadow'
                : 'text-brand-primary-500 hover:bg-white/[0.12] hover:text-brand-primary-600'
              }`
            }>
              FreePeriod 1.0
            </Tab>
            <Tab className={({ selected }) =>
              `w-full rounded-lg py-2.5 text-sm font-medium leading-5
              ${selected
                ? 'bg-white text-brand-primary-700 shadow'
                : 'text-brand-primary-500 hover:bg-white/[0.12] hover:text-brand-primary-600'
              }`
            }>
              FreePeriod 2.0
              <Badge variant="secondary" className="ml-2">Coming Soon</Badge>
            </Tab>
          </Tab.List>

          <div className="grid lg:grid-cols-2 gap-8">
            <ProductImageViewer 
              images={[
                {
                  src: `/images/product-${selectedVersion}.jpg`,
                  alt: productVersions[selectedVersion].title,
                  title: productVersions[selectedVersion].title
                }
              ]}
            />

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Tab.Panels>
                  {Object.entries(productVersions).map(([version, data]) => (
                    <Tab.Panel key={version} className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-brand-primary-800 mb-2">
                          {data.title}
                        </h3>
                        <p className="text-brand-neutral-500">
                          {data.description}
                        </p>
                      </div>

                      <div className="grid gap-4">
                        {data.features.map((feature, index) => (
                          <Card key={index} className="p-4">
                            <div className="flex items-start gap-4">
                              <div className="p-2 rounded-full bg-brand-primary-50 text-brand-primary-500">
                                {getIcon(feature.icon || '')}
                              </div>
                              <div>
                                <h4 className="font-semibold text-brand-primary-700 mb-1">
                                  {feature.title}
                                </h4>
                                <p className="text-sm text-brand-neutral-500">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>

                      <div className="border-t pt-6">
                        <h4 className="font-semibold text-brand-primary-700 mb-4">
                          {t('products.specifications.title')}
                        </h4>
                        <dl className="grid grid-cols-2 gap-4">
                          <div>
                            <dt className="text-sm text-brand-neutral-500">Power Rating</dt>
                            <dd className="font-medium">{data.specifications.power}</dd>
                          </div>
                          <div>
                            <dt className="text-sm text-brand-neutral-500">Annual Energy</dt>
                            <dd className="font-medium">{data.specifications.energy}</dd>
                          </div>
                          <div>
                            <dt className="text-sm text-brand-neutral-500">Carbon Emissions</dt>
                            <dd className="font-medium">{data.specifications.emissions}</dd>
                          </div>
                          <div>
                            <dt className="text-sm text-brand-neutral-500">Type</dt>
                            <dd className="font-medium">{data.specifications.type}</dd>
                          </div>
                        </dl>
                      </div>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </motion.div>
            </div>
          </div>
        </Tab.Group>
      </div>
    </section>
  );
}