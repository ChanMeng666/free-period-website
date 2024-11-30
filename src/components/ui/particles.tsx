'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ParticleProps {
  index: number;
}

const INITIAL_POSITIONS = [
  { x: 10, y: 20 }, { x: 80, y: 15 }, { x: 30, y: 70 },
  { x: 70, y: 40 }, { x: 20, y: 50 }, { x: 90, y: 30 },
  { x: 40, y: 85 }, { x: 60, y: 25 }, { x: 15, y: 60 },
  { x: 85, y: 75 }, { x: 25, y: 35 }, { x: 75, y: 65 }
];

const Particle = ({ index }: ParticleProps) => {
  const position = INITIAL_POSITIONS[index % INITIAL_POSITIONS.length];
  const randomDuration = 20 + (index % 5) * 2;

  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full bg-brand-primary-300/30 backdrop-blur-sm"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`
      }}
      animate={{
        x: [0, 50, -50, 0],
        y: [0, -50, 50, 0],
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

export const ParticlesBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {INITIAL_POSITIONS.map((_, i) => (
        <Particle key={i} index={i} />
      ))}
    </div>
  );
}; 