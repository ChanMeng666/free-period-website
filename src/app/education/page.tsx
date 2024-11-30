'use client';

import { motion } from 'framer-motion';
import { ResourceGrid } from '@/components/education/ResourceGrid';
import { FAQSection } from '@/components/education/FAQSection';
import { DownloadSection } from '@/components/education/DownloadSection';
import { useTranslation } from '@/lib/translate';

export default function EducationPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-brand-primary-800 mb-4">{t('education.title')}</h1>
          <p className="text-brand-neutral-500 max-w-2xl mx-auto">
            {t('education.subtitle')}
          </p>
        </motion.div>

        <ResourceGrid />
        <DownloadSection />
        <FAQSection />
      </section>
    </div>
  );
} 