'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/translate';

export function AuthButtons() {
  const { t } = useTranslation();

  return (
    <motion.div 
      className="flex items-center gap-2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link href="/auth/login">
        <Button 
          variant="ghost" 
          size="sm"
          className="text-brand-neutral-700 hover:text-brand-primary-600 hover:bg-brand-primary-50"
        >
          {t('navigation.login')}
        </Button>
      </Link>
      <Link href="/auth/register">
        <Button 
          size="sm" 
          className="bg-brand-primary-500 text-white hover:bg-brand-primary-600 transition-colors"
        >
          {t('navigation.register')}
        </Button>
      </Link>
    </motion.div>
  );
}