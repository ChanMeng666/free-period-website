'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useTranslation } from '@/lib/translate';

const products = [
  {
    id: 1,
    name: 'FreePeriod Essential',
    description: 'Our flagship product with advanced features',
    image: '/images/packaged-roll.jpg',
    category: 'dispenser'
  },
  {
    id: 2,
    name: 'FreePeriod Mini',
    description: 'Compact solution for smaller spaces',
    image: '/images/unpackaged-pad.jpg',
    category: 'dispenser'
  },
  {
    id: 3,
    name: 'FreePeriod Pro',
    description: 'Enterprise-grade solution with enhanced capacity',
    image: '/images/dispenser-front.jpg',
    category: 'dispenser'
  }
];

export function ProductGrid() {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brand-primary-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-brand-neutral-500">
                    {product.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 