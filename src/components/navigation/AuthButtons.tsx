'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/translate';

export function AuthButtons() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      <Link href="/auth/login">
        <Button variant="ghost" size="sm">
          {t('navigation.login')}
        </Button>
      </Link>
      <Link href="/auth/register">
        <Button size="sm" className="bg-brand-primary-500 text-white hover:bg-brand-primary-600">
          {t('navigation.register')}
        </Button>
      </Link>
    </div>
  );
} 