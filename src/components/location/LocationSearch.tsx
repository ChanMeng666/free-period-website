// 'use client';

// import { useState } from 'react';
// import { Search } from 'lucide-react';
// import { Card } from '@/components/ui/card';
// import { useTranslation } from '@/lib/translate';

// export function LocationSearch() {
//   const { t } = useTranslation();
//   const [query, setQuery] = useState('');

//   return (
//     <Card className="p-4">
//       <div className="relative">
//         <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-neutral-400 h-5 w-5" />
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder={t('locations.search.placeholder')}
//           className="w-full pl-10 pr-4 py-2 rounded-md border border-brand-neutral-200 
//             focus:outline-none focus:ring-2 focus:ring-brand-primary-500 focus:border-transparent"
//         />
//       </div>
//     </Card>
//   );
// } 


'use client';

import { useState, useEffect } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { useTranslation } from '@/lib/translate';

interface LocationSearchProps {
  onSearch?: (query: string) => void;
  onFilterChange?: (filters: LocationFilters) => void;
  userLocation?: google.maps.LatLngLiteral;
}

interface LocationFilters {
  types: string[];
  status: string[];
  radius: number;
}

const initialFilters: LocationFilters = {
  types: ['hospital', 'mall', 'school', 'office'],
  status: ['active', 'coming'],
  radius: 5
};

export function LocationSearch({ 
  onSearch,
  onFilterChange,
  userLocation 
}: LocationSearchProps) {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<LocationFilters>(initialFilters);
  const [isLocating, setIsLocating] = useState(false);

  const handleFilterChange = (newFilters: LocationFilters) => {
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const getCurrentLocation = () => {
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // Update parent component with new location
        onFilterChange?.({
          ...filters,
          userLocation: { lat: latitude, lng: longitude }
        });
        setIsLocating(false);
      },
      (error) => {
        console.error('Error getting location:', error);
        setIsLocating(false);
      }
    );
  };

  return (
    <Card className="p-4">
      <div className="flex gap-2">
        <div className="relative flex-grow">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-neutral-400 h-5 w-5" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              onSearch?.(e.target.value);
            }}
            placeholder={t('locations.search.placeholder')}
            className="w-full pl-10 pr-4 py-2 rounded-md border border-brand-neutral-200 
              focus:outline-none focus:ring-2 focus:ring-brand-primary-500 focus:border-transparent
              placeholder:text-brand-neutral-400"
          />
        </div>

        <Button
          variant="outline"
          size="icon"
          className={`relative ${isLocating ? 'animate-pulse' : ''}`}
          onClick={getCurrentLocation}
          title={t('locations.search.useLocation')}
        >
          <MapPin className="h-5 w-5" />
        </Button>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="relative"
              title={t('locations.search.filters')}
            >
              <Filter className="h-5 w-5" />
              {(filters.types.length < initialFilters.types.length ||
               filters.status.length < initialFilters.status.length) && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-primary-500 rounded-full" />
              )}
            </Button>
          </PopoverTrigger>
          
          <PopoverContent className="w-80 p-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-brand-neutral-700 mb-2">
                  {t('locations.filters.type')}
                </h4>
                <div className="space-y-2">
                  {['hospital', 'mall', 'school', 'office'].map(type => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox
                        id={`type-${type}`}
                        checked={filters.types.includes(type)}
                        onCheckedChange={(checked) => {
                          const newTypes = checked
                            ? [...filters.types, type]
                            : filters.types.filter(t => t !== type);
                          handleFilterChange({ ...filters, types: newTypes });
                        }}
                      />
                      <label
                        htmlFor={`type-${type}`}
                        className="text-sm text-brand-neutral-600"
                      >
                        {t(`locations.type.${type}`)}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-brand-neutral-700 mb-2">
                  {t('locations.filters.status')}
                </h4>
                <div className="space-y-2">
                  {['active', 'inactive', 'coming'].map(status => (
                    <div key={status} className="flex items-center space-x-2">
                      <Checkbox
                        id={`status-${status}`}
                        checked={filters.status.includes(status)}
                        onCheckedChange={(checked) => {
                          const newStatus = checked
                            ? [...filters.status, status]
                            : filters.status.filter(s => s !== status);
                          handleFilterChange({ ...filters, status: newStatus });
                        }}
                      />
                      <label
                        htmlFor={`status-${status}`}
                        className="text-sm text-brand-neutral-600"
                      >
                        {t(`locations.status.${status}`)}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-brand-neutral-700 mb-2">
                  {t('locations.filters.radius')}
                </h4>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={filters.radius}
                  onChange={(e) => {
                    handleFilterChange({
                      ...filters,
                      radius: parseInt(e.target.value)
                    });
                  }}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-brand-neutral-500">
                  <span>1km</span>
                  <span>{filters.radius}km</span>
                  <span>20km</span>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleFilterChange(initialFilters)}
                >
                  {t('locations.filters.reset')}
                </Button>
                <Button
                  size="sm"
                  onClick={() => document.body.click()} // Close popover
                >
                  {t('locations.filters.apply')}
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Active Filters */}
      {(filters.types.length < initialFilters.types.length ||
       filters.status.length < initialFilters.status.length) && (
        <div className="flex flex-wrap gap-2 mt-3">
          {filters.types.map(type => (
            <Badge
              key={type}
              variant="secondary"
              className="cursor-pointer"
              onClick={() => {
                handleFilterChange({
                  ...filters,
                  types: filters.types.filter(t => t !== type)
                });
              }}
            >
              {t(`locations.type.${type}`)} ×
            </Badge>
          ))}
          {filters.status.map(status => (
            <Badge
              key={status}
              variant="secondary"
              className="cursor-pointer"
              onClick={() => {
                handleFilterChange({
                  ...filters,
                  status: filters.status.filter(s => s !== status)
                });
              }}
            >
              {t(`locations.status.${status}`)} ×
            </Badge>
          ))}
        </div>
      )}
    </Card>
  );
}