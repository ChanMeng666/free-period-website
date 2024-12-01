// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { navItems } from '@/lib/constants';
// import { useTranslation } from '@/lib/translate';

// const menuVariants = {
//   closed: {
//     opacity: 0,
//     x: "100%",
//     transition: {
//       duration: 0.2,
//       ease: "easeInOut"
//     }
//   },
//   open: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.3,
//       ease: "easeInOut"
//     }
//   }
// };

// const menuItemVariants = {
//   closed: { x: 50, opacity: 0 },
//   open: (i: number) => ({
//     x: 0,
//     opacity: 1,
//     transition: {
//       delay: i * 0.1,
//       duration: 0.3,
//       ease: "easeOut"
//     }
//   })
// };

// export const MobileNav = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { t } = useTranslation();

//   return (
//     <div className="lg:hidden">
//       <Button
//         variant="ghost"
//         size="icon"
//         className="relative z-50"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//       </Button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial="closed"
//             animate="open"
//             exit="closed"
//             variants={menuVariants}
//             className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm"
//           >
//             <nav className="flex flex-col items-center justify-center h-full">
//               {navItems.map((item, i) => (
//                 <motion.div
//                   key={item.href}
//                   custom={i}
//                   variants={menuItemVariants}
//                   initial="closed"
//                   animate="open"
//                   exit="closed"
//                 >
//                   <Link
//                     href={item.href}
//                     className="text-2xl font-medium text-brand-primary-800 py-4 hover:text-brand-primary-600 transition-colors"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.label}
//                   </Link>
//                 </motion.div>
//               ))}
//               <motion.div
//                 className="mt-8 flex flex-col items-center gap-4"
//                 variants={menuItemVariants}
//                 custom={navItems.length}
//               >
//                 <Link
//                   href="/auth/login"
//                   className="text-lg text-brand-primary-600 hover:text-brand-primary-500"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {t('navigation.login')}
//                 </Link>
//                 <Link
//                   href="/auth/register"
//                   className="px-6 py-2 bg-brand-primary-500 text-white rounded-md hover:bg-brand-primary-600"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {t('navigation.register')}
//                 </Link>
//               </motion.div>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }; 

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navItems } from '@/lib/constants';
import { useTranslation } from '@/lib/translate';

const menuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const menuItemVariants = {
  closed: { x: 50, opacity: 0 },
  open: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeOut"
    }
  })
};

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="relative z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? "close" : "menu"}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.div>
        </AnimatePresence>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm"
          >
            <nav className="flex flex-col items-center justify-center h-full">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  custom={i}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link
                    href={item.href}
                    className={`text-2xl font-medium py-4 transition-colors
                      ${pathname === item.href
                        ? 'text-brand-primary-600 dark:text-brand-primary-400'
                        : 'text-brand-neutral-800 dark:text-brand-neutral-200 hover:text-brand-primary-600'
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {t(`navigation.${item.label.toLowerCase()}`)}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                className="mt-8 flex flex-col items-center gap-4"
                variants={menuItemVariants}
                custom={navItems.length}
              >
                <Link
                  href="/auth/login"
                  className="text-lg text-brand-primary-600 hover:text-brand-primary-500"
                  onClick={() => setIsOpen(false)}
                >
                  {t('navigation.login')}
                </Link>
                <Link
                  href="/auth/register"
                  className="px-6 py-2 bg-brand-primary-500 text-white rounded-md hover:bg-brand-primary-600"
                  onClick={() => setIsOpen(false)}
                >
                  {t('navigation.register')}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};