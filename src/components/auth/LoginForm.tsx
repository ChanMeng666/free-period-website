'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from '@/lib/translate';
import { Eye, EyeOff, Loader2 } from 'lucide-react';

export function LoginForm() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!formData.email) {
      newErrors.email = t('auth.errors.emailRequired');
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('auth.errors.emailInvalid');
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = t('auth.errors.passwordRequired');
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    
    try {
      // 模拟登录请求
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: t('auth.login.success'),
        description: t('auth.login.successMessage'),
      });

      // 重定向到主页或之前的页面
    } catch (error) {
      toast({
        variant: 'destructive',
        title: t('auth.login.error'),
        description: t('auth.login.errorMessage'),
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
            {t('auth.login.title')}
          </motion.h1>
          <motion.p 
            className="mt-2 text-brand-neutral-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {t('auth.login.subtitle')}
          </motion.p>
        </div>

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
              className={`mt-1 ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: '' });
              }}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-brand-neutral-700">
              {t('auth.fields.password')}
            </label>
            <div className="relative mt-1">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                className={errors.password ? 'border-red-500 focus:ring-red-500' : ''}
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  if (errors.password) setErrors({ ...errors, password: '' });
                }}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-neutral-500 hover:text-brand-neutral-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox
                id="remember-me"
                checked={formData.remember}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, remember: checked as boolean })
                }
                className="text-brand-primary-600 focus:ring-brand-primary-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-brand-neutral-700">
                {t('auth.login.remember')}
              </label>
            </div>

            <Link
              href="/auth/reset"
              className="text-sm text-brand-primary-600 hover:text-brand-primary-500 transition-colors"
            >
              {t('auth.login.forgot')}
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
            ) : null}
            {loading ? t('auth.login.loading') : t('auth.login.submit')}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/auth/register"
            className="text-sm text-brand-primary-600 hover:text-brand-primary-500 transition-colors"
          >
            {t('auth.login.register')}
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}