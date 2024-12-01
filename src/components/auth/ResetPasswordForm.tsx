'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from '@/lib/translate';
import { Loader2 } from 'lucide-react';

export function ResetPasswordForm() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = () => {
    if (!email) {
      setError(t('auth.errors.emailRequired'));
      return false;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t('auth.errors.emailInvalid'));
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail()) return;

    setLoading(true);
    
    try {
      // 模拟重置密码请求
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSent(true);
      toast({
        title: t('auth.reset.success'),
        description: t('auth.reset.successMessage'),
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: t('auth.reset.error'),
        description: t('auth.reset.errorMessage'),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-8">
        <div className="text-center mb-8">
          <motion.h1 
            className="text-2xl font-bold text-brand-primary-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t('auth.reset.title')}
          </motion.h1>
          <motion.p 
            className="mt-2 text-brand-neutral-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {t('auth.reset.subtitle')}
          </motion.p>
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
                autoComplete="email"
                required
                className={`mt-1 ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder="you@example.com"
              />
              {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : null}
              {loading ? t('auth.reset.loading') : t('auth.reset.submit')}
            </Button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-brand-primary-600"
          >
            {t('auth.reset.success')}
          </motion.div>
        )}

        <div className="mt-6 text-center">
          <Link
            href="/auth/login"
            className="text-sm text-brand-primary-600 hover:text-brand-primary-500 transition-colors"
          >
            {t('auth.reset.back')}
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}