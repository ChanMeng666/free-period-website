'use client';

import { motion } from 'framer-motion';
import { ProductGrid } from '@/components/product/ProductGrid';
import { ProductHero } from '@/components/product/ProductHero';
import { ProductVideo } from '@/components/product/ProductVideo';
import { useTranslation } from '@/lib/translate';
import { PageContainer } from '@/components/layout/PageContainer';

export default function ProductsPage() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <ProductHero />
      <ProductVideo />
      <ProductGrid />
    </PageContainer>
  );
} 