'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { useTranslation } from '@/lib/translate';
import { Calendar } from 'lucide-react';

export function ImpactCalendar() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  // 构建带有自定义参数的日历 URL
  const calendarUrl = `${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL}&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&mode=MONTH&hl=${t('common.language')}`;

  return (
    <Card className="mt-12 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="h-6 w-6 text-brand-primary-500" />
          <h3 className="text-xl font-semibold text-brand-primary-800">
            {t('impact.calendar.title')}
          </h3>
        </div>
        <div className="text-sm text-brand-neutral-500">
          {t('impact.calendar.upcoming')}
        </div>
      </div>
      
      <div className="relative rounded-lg overflow-hidden" style={{ height: '600px' }}>
        <iframe
          src={calendarUrl}
          style={{ 
            border: 0,
            width: '100%',
            height: '100%',
            borderRadius: '0.5rem'
          }}
          frameBorder="0"
          scrolling="no"
          onLoad={() => setIsLoading(false)}
          title="FreePeriod Events Calendar"
        />
        
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-brand-neutral-50 rounded-lg">
            <div className="animate-pulse flex items-center gap-2">
              <Calendar className="h-5 w-5 text-brand-primary-500" />
              <span className="text-brand-neutral-500">{t('common.loading')}</span>
            </div>
          </div>
        )}
      </div>

      {!isLoading && (
        <div className="mt-4 text-sm text-brand-neutral-500 text-center">
          {t('impact.calendar.noEvents')}
        </div>
      )}
    </Card>
  );
} 