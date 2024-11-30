'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className={language === 'en' ? 'bg-brand-primary-500' : ''}
      >
        EN
      </Button>
      <Button
        variant={language === 'zh' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('zh')}
        className={language === 'zh' ? 'bg-brand-primary-500' : ''}
      >
        中文
      </Button>
    </div>
  );
}; 