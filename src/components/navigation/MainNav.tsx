'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useNavigationStore } from '@/store/navigation';
import { MobileNav } from './MobileNav';
import { LanguageSwitch } from '@/components/ui/language-switch';
import { AuthButtons } from './AuthButtons';
import { navItems } from '@/lib/constants';
import { useTranslation } from '@/lib/translate';
import { ThemeToggle } from '@/components/ui/theme-toggle';

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
  const { isScrolled, progress } = useNavigationStore();
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm dark:bg-gray-900/80' 
          : 'bg-transparent'}`}
      initial="initial"
      animate="animate"
      variants={navAnimation}
    >
      <div className="container mx-auto px-4">
        <nav className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/images/FreePeriodLogo.png"
              alt="FreePeriod Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-xl font-bold text-brand-primary-800 dark:text-brand-primary-200">
              FreePeriod
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors hover:text-brand-primary-600
                    ${pathname === item.href
                      ? 'text-brand-primary-700 dark:text-brand-primary-300'
                      : 'text-brand-neutral-500 dark:text-brand-neutral-400'
                    }`}
                >
                  {t(`navigation.${item.label.toLowerCase()}`)}
                  {pathname === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary-500"
                      layoutId="activeNav"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side Actions */}
          {/* <div className="flex items-center gap-4">
            <LanguageSwitch />
            <div className="hidden lg:block">
              <AuthButtons />
            </div>
            <MobileNav />
          </div> */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
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
          scaleX: progress / 100
        }}
      />
    </motion.header>
  );
};