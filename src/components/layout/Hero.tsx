'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ParticlesBackground } from '@/components/ui/particles';
import { useTranslation } from '@/lib/translate';

export const Hero = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  
  return (
    <motion.div 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary-100 to-brand-secondary-100" />
      
      {/* Floating particles */}
      <ParticlesBackground />
      
      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 
          className="mb-6 text-brand-primary-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t('hero.headline')}
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-brand-neutral-500 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('hero.subheadline')}
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button 
            size="lg" 
            className="bg-brand-primary-500 hover:bg-brand-primary-600 text-white"
          >
            {t('hero.cta.primary')}
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-brand-primary-200 text-brand-primary-700 hover:bg-brand-primary-50"
          >
            {t('hero.cta.secondary')}
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};