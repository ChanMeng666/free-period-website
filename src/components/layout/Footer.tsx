'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/translate';
import { motion } from 'framer-motion';
import { Github, Twitter, Mail, Instagram } from 'lucide-react';
import Image from 'next/image';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/your-github',
    icon: Github
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/your-twitter',
    icon: Twitter
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/your-instagram',
    icon: Instagram
  },
  {
    name: 'Email',
    href: 'mailto:contact@example.com',
    icon: Mail
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

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 border-t border-brand-neutral-100 dark:border-brand-neutral-800 pt-8 sm:mt-20 lg:mt-24"
          >
            <p className="text-sm text-brand-neutral-500 dark:text-brand-neutral-400">
              &copy; {currentYear} FreePeriod
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}