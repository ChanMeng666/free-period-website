'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const heroContent = {
  headline: "Revolutionizing Menstrual Care",
  subheadline: "Innovative, sustainable, and accessible solutions for everyone",
  cta: {
    primary: "Explore Products",
    secondary: "Learn More"
  }
};

// 预定义一些粒子的初始位置
const INITIAL_POSITIONS = [
  { x: 10, y: 20 }, { x: 80, y: 15 }, { x: 30, y: 70 },
  { x: 70, y: 40 }, { x: 20, y: 50 }, { x: 90, y: 30 },
  { x: 40, y: 85 }, { x: 60, y: 25 }, { x: 15, y: 60 },
  { x: 85, y: 75 }, { x: 25, y: 35 }, { x: 75, y: 65 },
  { x: 45, y: 15 }, { x: 65, y: 45 }, { x: 35, y: 85 },
  { x: 95, y: 55 }, { x: 5, y: 80 }, { x: 50, y: 95 },
  { x: 55, y: 5 }, { x: 45, y: 25 }
];


// Particle component with fixed initial position
const Particle = ({ index }: { index: number }) => {
  const position = INITIAL_POSITIONS[index % INITIAL_POSITIONS.length];
  const randomDuration = 20 + (index % 5) * 2; // 20-28秒的随机持续时间

  return (
    <div
      className="particle absolute w-2 h-2 bg-primary/20 rounded-full"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        animation: `float-${index % 4} ${randomDuration}s infinite ease-in-out`
      }}
    />
  );
};


const ParticlesBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <Particle key={i} index={i} />
      ))}
    </div>
  );
};

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  
  return (
    <motion.div 
      ref={containerRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-gradient" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <ParticlesBackground />
      </div>
      
      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {heroContent.headline}
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {heroContent.subheadline}
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button size="lg" className="text-lg">
            {heroContent.cta.primary}
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            {heroContent.cta.secondary}
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};