'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useTranslation } from '@/lib/translate';

export function LocationSearch() {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');

  return (
    <Card className="p-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-neutral-400 h-5 w-5" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('locations.search.placeholder')}
          className="w-full pl-10 pr-4 py-2 rounded-md border border-brand-neutral-200 
            focus:outline-none focus:ring-2 focus:ring-brand-primary-500 focus:border-transparent"
        />
      </div>
    </Card>
  );
} 