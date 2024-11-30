'use client';

import { motion } from 'framer-motion';
import { ProductGrid } from '@/components/product/ProductGrid';
import { ProductHero } from '@/components/product/ProductHero';
import { useTranslation } from '@/lib/translate';

export default function ProductsPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <ProductHero />
      <ProductGrid />
    </div>
  );
} 