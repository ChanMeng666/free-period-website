'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { useTranslation } from '@/lib/translate';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const stories = [
  {
    id: 1,
    title: 'school',
    location: 'Hong Kong University',
    quote: 'The installation of FreePeriod dispensers has made a significant difference in our campus community.',
    author: 'Sarah Chen',
    role: 'Student Representative',
    impact: {
      users: 5000,
      co2Saved: 150,
      month: 'March'
    }
  },
  {
    id: 2,
    title: 'hospital',
    location: 'Central Hospital',
    quote: 'FreePeriod has helped us provide better care and support for our patients and staff.',
    author: 'Dr. Wong',
    role: 'Chief of Medicine',
    impact: {
      users: 3000,
      co2Saved: 90,
      month: 'February'
    }
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
            <Card className="p-6 h-full flex flex-col">
              <div className="relative h-40">
                <Image
                  src={`/images/impact-${story.id}.jpg`}
                  alt={story.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="flex items-start gap-4 mb-6">
                <Avatar className="w-12 h-12">
                  <div className="bg-brand-primary-100 w-full h-full flex items-center justify-center text-brand-primary-600 font-medium">
                    {story.author[0]}
                  </div>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold text-brand-primary-700">
                    {t(`impact.stories.${story.title}.location`)}
                  </h3>
                  <p className="text-brand-neutral-500 text-sm">
                    {story.author} • {story.role}
                  </p>
                </div>
              </div>

              <div className="relative mb-6 flex-grow">
                <Quote className="absolute -top-2 -left-2 h-6 w-6 text-brand-primary-200" />
                <p className="text-brand-neutral-500 italic pl-6">
                  "{t(`impact.stories.${story.title}.quote`)}"
                </p>
              </div>

              <div className="border-t pt-4 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-brand-primary-600">
                    {story.impact.users.toLocaleString()}+
                  </div>
                  <div className="text-xs text-brand-neutral-500">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-brand-primary-600">
                    {story.impact.co2Saved}kg
                  </div>
                  <div className="text-xs text-brand-neutral-500">CO2 Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-brand-primary-600">
                    {story.impact.month}
                  </div>
                  <div className="text-xs text-brand-neutral-500">Latest Data</div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}