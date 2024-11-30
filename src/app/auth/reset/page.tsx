'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTranslation } from '@/lib/translate';

export default function ResetPage() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // 模拟重置请求
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    setSent(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-brand-primary-800">
            {t('auth.reset.title')}
          </h1>
          <p className="mt-2 text-brand-neutral-500">
            {t('auth.reset.subtitle')}
          </p>
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-neutral-700">
                {t('auth.fields.email')}
              </label>
              <Input
                id="email"
                type="email"
                required
                className="mt-1"
                placeholder="you@example.com"
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? t('auth.reset.loading') : t('auth.reset.submit')}
            </Button>
          </form>
        ) : (
          <div className="text-center text-brand-primary-600">
            {t('auth.reset.success')}
          </div>
        )}

        <div className="mt-6 text-center">
          <Link
            href="/auth/login"
            className="text-sm text-brand-primary-600 hover:text-brand-primary-500"
          >
            {t('auth.reset.back')}
          </Link>
        </div>
      </Card>
    </motion.div>
  );
} 