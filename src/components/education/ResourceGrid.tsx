'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useTranslation } from '@/lib/translate';
import { Play, FileText, Video } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: 'guide',
    description: 'guide.description',
    type: 'article' as const,
    icon: FileText
  },
  {
    id: 2,
    title: 'tutorial',
    description: 'tutorial.description',
    type: 'video' as const,
    icon: Video
  },
  {
    id: 3,
    title: 'workshop',
    description: 'workshop.description',
    type: 'video' as const,
    icon: Play
  }
];

export function ResourceGrid() {
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {resources.map((resource, index) => (
        <motion.div
          key={resource.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 rounded-full bg-brand-primary-50">
                <resource.icon className="h-6 w-6 text-brand-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-brand-primary-800">
                {t(`education.resources.${resource.title}.title`)}
              </h3>
            </div>
            <p className="text-brand-neutral-500">
              {t(`education.resources.${resource.title}.description`)}
            </p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
} 