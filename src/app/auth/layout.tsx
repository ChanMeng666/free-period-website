'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/translate';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-primary-50 to-brand-secondary-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {children}
      </div>
    </div>
  );
} 