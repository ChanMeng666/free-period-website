'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { VideoPlayer } from '@/components/ui/video-player';
import { useTranslation } from '@/lib/translate';
import { FileText, Video, Play } from 'lucide-react';
import Image from 'next/image';

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
    icon: Video,
    videoUrl: '/videos/VideoTutorial.mp4'
  },
  {
    id: 3,
    title: 'workshop',
    description: 'workshop.description',
    type: 'video' as const,
    icon: Play,
    videoUrl: '/videos/OnlineWorkshop.mp4'
  }
] as const;

type ResourceType = typeof resources[number];

export function ResourceGrid() {
  const { t } = useTranslation();
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);

  const getTranslation = (key: ResourceType['title'], type: 'title' | 'description') => {
    return t(`education.resources.${key}.${type}` as const);
  };

  const handleCardClick = (resource: ResourceType) => {
    if (resource.type === 'video' && resource.videoUrl) {
      setSelectedVideo({
        url: resource.videoUrl,
        title: getTranslation(resource.title, 'title')
      });
    }
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {resources.map((resource, index) => (
        <motion.div
          key={resource.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card 
            className={`p-6 hover:shadow-lg transition-shadow ${
              resource.type === 'video' ? 'cursor-pointer' : ''
            }`}
            onClick={() => handleCardClick(resource)}
          >
            <div className="relative h-48">
              <Image
                src={`/article/${resource.type}-${resource.id}.jpg`}
                alt={resource.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 rounded-full bg-brand-primary-50">
                <resource.icon className="h-6 w-6 text-brand-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-brand-primary-800">
                {getTranslation(resource.title, 'title')}
              </h3>
            </div>
            <p className="text-brand-neutral-500">
              {getTranslation(resource.title, 'description')}
            </p>
          </Card>
        </motion.div>
      ))}

      {selectedVideo && (
        <VideoPlayer
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
        />
      )}
    </div>
  );
} 