'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useNavigationStore } from '@/store/navigation';
import { MobileNav } from './MobileNav';
import { LanguageSwitch } from '@/components/ui/language-switch';
import { navItems } from '@/lib/constants';
import { useTranslation } from '@/lib/translate';
import { AuthButtons } from './AuthButtons';

const navAnimation = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

export const MainNav = () => {
  const { isScrolled } = useNavigationStore();
  const pathname = usePathname();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      useNavigationStore.setState({
        isScrolled: window.scrollY > 50,
        progress: (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300
        ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
      initial="initial"
      animate="animate"
      variants={navAnimation}
    >
      <div className="container mx-auto px-4">
        <nav className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/images/FreePeriodLogo.png"
              alt="FreePeriod Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-xl font-bold text-brand-primary-800">
              FreePeriod
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-brand-primary-600
                    ${pathname === item.href
                      ? 'text-brand-primary-700'
                      : 'text-brand-neutral-500'
                    }`}
                >
                  {t(`navigation.${item.label.toLowerCase()}`)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <LanguageSwitch />
            <div className="hidden lg:block">
              <AuthButtons />
            </div>
            <MobileNav />
          </div>
        </nav>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="h-0.5 bg-brand-primary-500 origin-left"
        style={{
          scaleX: useNavigationStore((state) => state.progress / 100)
        }}
      />
    </motion.header>
  );
};