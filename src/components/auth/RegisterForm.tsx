'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from '@/lib/translate';
import { Eye, EyeOff, Loader2 } from 'lucide-react';

export function RegisterForm() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = t('auth.errors.firstNameRequired');
      valid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = t('auth.errors.lastNameRequired');
      valid = false;
    }

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
    } else if (formData.password.length < 8) {
      newErrors.password = t('auth.errors.passwordLength');
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
      // 模拟注册请求
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: t('auth.register.success'),
        description: t('auth.register.successMessage'),
      });

      // 重定向到登录页面
    } catch (error) {
      toast({
        variant: 'destructive',
        title: t('auth.register.error'),
        description: t('auth.register.errorMessage'),
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
            {t('auth.register.title')}
          </motion.h1>
          <motion.p 
            className="mt-2 text-brand-neutral-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {t('auth.register.subtitle')}
          </motion.p>
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
                className={`mt-1 ${errors.firstName ? 'border-red-500 focus:ring-red-500' : ''}`}
                value={formData.firstName}
                onChange={(e) => {
                  setFormData({ ...formData, firstName: e.target.value });
                  if (errors.firstName) setErrors({ ...errors, firstName: '' });
                }}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-brand-neutral-700">
                {t('auth.fields.lastName')}
              </label>
              <Input
                id="lastName"
                type="text"
                required
                className={`mt-1 ${errors.lastName ? 'border-red-500 focus:ring-red-500' : ''}`}
                value={formData.lastName}
                onChange={(e) => {
                  setFormData({ ...formData, lastName: e.target.value });
                  if (errors.lastName) setErrors({ ...errors, lastName: '' });
                }}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>

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
                autoComplete="new-password"
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

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
            ) : null}
            {loading ? t('auth.register.loading') : t('auth.register.submit')}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/auth/login"
            className="text-sm text-brand-primary-600 hover:text-brand-primary-500 transition-colors"
          >
            {t('auth.register.login')}
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}