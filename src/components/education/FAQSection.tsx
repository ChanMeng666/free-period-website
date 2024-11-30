'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from '@/lib/translate';

const faqs = [
  {
    id: 1,
    question: 'usage',
    category: 'general'
  },
  {
    id: 2,
    question: 'maintenance',
    category: 'technical'
  },
  {
    id: 3,
    question: 'availability',
    category: 'general'
  }
];

export function FAQSection() {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section>
      <h2 className="text-2xl font-bold text-brand-primary-800 text-center mb-8">
        {t('education.faq.title')}
      </h2>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq) => (
          <Card
            key={faq.id}
            className="overflow-hidden cursor-pointer"
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
          >
            <div className="p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-brand-primary-800">
                  {t(`education.faq.${faq.question}.question`)}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-brand-primary-500 transition-transform
                    ${openId === faq.id ? 'rotate-180' : ''}`}
                />
              </div>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <p className="text-brand-neutral-500">
                      {t(`education.faq.${faq.question}.answer`)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
} 