'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTranslation } from '@/lib/translate';

export default function RegisterPage() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // 模拟注册请求
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
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
            {t('auth.register.title')}
          </h1>
          <p className="mt-2 text-brand-neutral-500">
            {t('auth.register.subtitle')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-brand-neutral-700">
                {t('auth.fields.firstName')}
              </label>
              <Input
                id="firstName"
                type="text"
                required
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-brand-neutral-700">
                {t('auth.fields.lastName')}
              </label>
              <Input
                id="lastName"
                type="text"
                required
                className="mt-1"
              />
            </div>
          </div>

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

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-brand-neutral-700">
              {t('auth.fields.password')}
            </label>
            <Input
              id="password"
              type="password"
              required
              className="mt-1"
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? t('auth.register.loading') : t('auth.register.submit')}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/auth/login"
            className="text-sm text-brand-primary-600 hover:text-brand-primary-500"
          >
            {t('auth.register.login')}
          </Link>
        </div>
      </Card>
    </motion.div>
  );
} 