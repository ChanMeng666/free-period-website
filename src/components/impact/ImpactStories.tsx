'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useTranslation } from '@/lib/translate';

const stories = [
  {
    id: 1,
    title: 'school',
    location: 'Hong Kong University',
    quote: 'The installation of FreePeriod dispensers has made a significant difference in our campus community.',
    author: 'Sarah Chen',
    role: 'Student Representative'
  },
  {
    id: 2,
    title: 'hospital',
    location: 'Central Hospital',
    quote: 'FreePeriod has helped us provide better care and support for our patients and staff.',
    author: 'Dr. Wong',
    role: 'Chief of Medicine'
  }
];

export function ImpactStories() {
  const { t } = useTranslation();

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-brand-primary-800 text-center mb-8">
        {t('impact.stories.title')}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {stories.map((story, index) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-brand-primary-700 mb-2">
                {t(`impact.stories.${story.title}.location`)}
              </h3>
              <p className="text-brand-neutral-500 italic mb-4">
                "{t(`impact.stories.${story.title}.quote`)}"
              </p>
              <div className="text-sm">
                <div className="font-medium text-brand-primary-600">
                  {story.author}
                </div>
                <div className="text-brand-neutral-400">
                  {story.role}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 