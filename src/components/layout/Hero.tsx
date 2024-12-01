// 'use client';

// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef } from 'react';
// import { Button } from '@/components/ui/button';
// import { ParticlesBackground } from '@/components/ui/particles';
// import { useTranslation } from '@/lib/translate';
// import Link from 'next/link';

// export const Hero = () => {
//   const { t } = useTranslation();
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollY } = useScroll();
  
//   const opacity = useTransform(scrollY, [0, 300], [1, 0]);
//   const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  
//   return (
//     <motion.div 
//       ref={containerRef}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//       style={{ opacity, scale }}
//     >
//       {/* Animated background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-brand-primary-100 to-brand-secondary-100" />
      
//       {/* Floating particles */}
//       <ParticlesBackground />
      
//       {/* Content */}
//       <motion.div 
//         className="relative z-10 max-w-4xl mx-auto px-4 text-center"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         <motion.h1 
//           className="mb-6 text-brand-primary-900"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           {t('hero.headline')}
//         </motion.h1>
        
//         <motion.p 
//           className="text-xl md:text-2xl text-brand-neutral-500 mb-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           {t('hero.subheadline')}
//         </motion.p>
        
//         <motion.div 
//           className="flex flex-col sm:flex-row gap-4 justify-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         >
//           <Link href="/auth/register">
//             <Button 
//               size="lg" 
//               className="bg-brand-primary-500 hover:bg-brand-primary-600 text-white w-full sm:w-auto"
//             >
//               {t('hero.cta.register')}
//             </Button>
//           </Link>
//           <Link href="/products">
//             <Button 
//               size="lg" 
//               variant="outline" 
//               className="border-brand-primary-200 text-brand-primary-700 hover:bg-brand-primary-50 w-full sm:w-auto"
//             >
//               {t('hero.cta.products')}
//             </Button>
//           </Link>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };


'use client';

import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ParticlesBackground } from '@/components/ui/particles';
import { useTranslation } from '@/lib/translate';
import Link from 'next/link';

export const Hero = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  
  return (
    <motion.div 
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-animate bg-gradient-to-br from-brand-primary-100 to-brand-secondary-100" />
      
      {/* Floating particles effect */}
      <ParticlesBackground />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-brand-primary-900 mb-6"
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
          
          {/* Impact metrics */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-brand-primary-600">98.5%</h3>
              <p className="text-brand-neutral-500">{t('hero.metrics.energy')}</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-brand-primary-600">50k+</h3>
              <p className="text-brand-neutral-500">{t('hero.metrics.users')}</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-brand-primary-600">20+</h3>
              <p className="text-brand-neutral-500">{t('hero.metrics.locations')}</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/auth/register">
              <Button 
                size="lg" 
                className="bg-brand-primary-500 hover:bg-brand-primary-600 text-white w-full sm:w-auto"
              >
                {t('hero.cta.register')}
              </Button>
            </Link>
            <Link href="/products">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-brand-primary-200 hover:bg-brand-primary-50 w-full sm:w-auto"
              >
                {t('hero.cta.products')}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-brand-primary-300 rounded-full p-2">
          <div className="w-2 h-2 bg-brand-primary-500 rounded-full" />
        </div>
      </motion.div>
    </motion.div>
  );
};