'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useTranslation } from '@/lib/translate';

const downloads = [
  {
    id: 1,
    title: 'brochure',
    format: 'PDF',
    size: '2.5 MB'
  },
  {
    id: 2,
    title: 'manual',
    format: 'PDF',
    size: '1.8 MB'
  }
];

export function DownloadSection() {
  const { t } = useTranslation();

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-brand-primary-800 text-center mb-8">
        {t('education.downloads.title')}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {downloads.map((download, index) => (
          <motion.div
            key={download.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-brand-primary-800 mb-2">
                    {t(`education.downloads.${download.title}.title`)}
                  </h3>
                  <p className="text-sm text-brand-neutral-500">
                    {download.format} • {download.size}
                  </p>
                </div>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 