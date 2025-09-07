'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/translate';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import Image from 'next/image';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/ChanMeng666',
    icon: Github
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/free-period/',
    icon: Linkedin
  }
];

const footerLinks = [
  {
    title: 'navigation.company',
    links: [
      { label: 'navigation.about', href: '/about' },
      { label: 'navigation.impact', href: '/impact' },
      { label: 'navigation.contact', href: '/contact' }
    ]
  },
  {
    title: 'navigation.products',
    links: [
      { label: 'navigation.features', href: '/features' },
      { label: 'navigation.locations', href: '/locations' },
      { label: 'navigation.education', href: '/education' }
    ]
  }
];

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="xl:grid xl:grid-cols-3 xl:gap-8"
          >
            {/* Brand */}
            <div className="space-y-8">
              <Image
                src="/images/main-logo.png"
                alt="FreePeriod Logo"
                width={120}
                height={40}
                className="h-20 w-auto"
              />
              <div className="flex space-x-6">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-neutral-400 hover:text-brand-primary-500 dark:hover:text-brand-primary-400"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              {footerLinks.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-semibold text-brand-neutral-900 dark:text-white">
                    {t(group.title)}
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-brand-neutral-500 hover:text-brand-primary-500 dark:text-brand-neutral-400 dark:hover:text-brand-primary-400"
                        >
                          {t(link.label)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Developer Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 border-t border-brand-neutral-100 dark:border-brand-neutral-800 pt-8"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Developer Brand */}
              <div className="flex items-center gap-4">
                <Image
                  src="/images/chan_logo.svg"
                  alt="Chan Meng Developer Logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 flex-shrink-0"
                />
                <div>
                  <p className="text-sm font-medium text-brand-neutral-900 dark:text-white">
                    {t('footer.developer.craftedBy')} <span className="font-semibold">{t('footer.developer.name')}</span>
                  </p>
                  <p className="text-xs text-brand-neutral-500 dark:text-brand-neutral-400">
                    {t('footer.developer.title')}
                  </p>
                </div>
              </div>

              {/* Contact & Portfolio */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6">
                <div className="flex items-center gap-4">
                  <a
                    href={`mailto:${t('footer.developer.email')}`}
                    className="flex items-center gap-2 text-sm text-brand-neutral-600 hover:text-brand-primary-500 dark:text-brand-neutral-400 dark:hover:text-brand-primary-400 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>{t('footer.developer.email')}</span>
                  </a>
                  <a
                    href="https://github.com/ChanMeng666"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-brand-neutral-600 hover:text-brand-primary-500 dark:text-brand-neutral-400 dark:hover:text-brand-primary-400 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span>{t('footer.developer.portfolio')}</span>
                  </a>
                </div>
                
                {/* Subtle CTA */}
                <div className="text-sm text-brand-neutral-500 dark:text-brand-neutral-400">
                  <span>{t('footer.developer.cta.question')} </span>
                  <a
                    href={`mailto:${t('footer.developer.email')}?subject=${encodeURIComponent(t('footer.developer.emailSubject'))}&body=${encodeURIComponent(t('footer.developer.emailBody'))}`}
                    className="font-medium text-brand-primary-600 hover:text-brand-primary-700 dark:text-brand-primary-400 dark:hover:text-brand-primary-300 transition-colors"
                  >
                    {t('footer.developer.cta.action')}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 border-t border-brand-neutral-100 dark:border-brand-neutral-800 pt-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <p className="text-sm text-brand-neutral-500 dark:text-brand-neutral-400">
                {t('footer.copyright').replace('2024', currentYear.toString())}
              </p>
              <div className="flex items-center gap-2 text-xs text-brand-neutral-400 dark:text-brand-neutral-500">
                <Code2 className="h-3 w-3" />
                <span>{t('footer.developer.sourceCode')}</span>
                <a
                  href="https://github.com/ChanMeng666/free-period-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary-600 hover:text-brand-primary-700 dark:text-brand-primary-400 dark:hover:text-brand-primary-300 transition-colors"
                >
                  {t('footer.developer.repository')}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}