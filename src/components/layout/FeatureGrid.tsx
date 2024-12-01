'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  LeafyGreen, 
  Cpu,
  Users,
  type LucideIcon
} from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeatureGridProps {
  features: Feature[];
}

const iconMap: Record<string, LucideIcon> = {
  'LeafyGreen': LeafyGreen,
  'ChipIcon': Cpu,
  'AccessibilityIcon': Users
};

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => {
        const Icon = iconMap[feature.icon];
        return (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-brand-primary-50">
                  {Icon && <Icon className="h-6 w-6 text-brand-primary-500" />}
                </div>
                <h3 className="text-lg font-semibold text-brand-primary-800">
                  {feature.title}
                </h3>
              </div>
              <p className="text-brand-neutral-500">
                {feature.description}
              </p>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}