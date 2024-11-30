'use client';

import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';
import { useState, useMemo, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { useTranslation } from '@/lib/translate';

interface Location {
  id: string;
  position: google.maps.LatLngLiteral;
  title: string;
  status: 'active' | 'inactive';
}

interface LocationMapProps {
  initialCenter?: google.maps.LatLngLiteral;
  zoom?: number;
  locations?: Location[];
}

export function LocationMap({ 
  initialCenter = { lat: 22.3193, lng: 114.1694 }, // 默认香港中心
  zoom = 11,
  locations = []
}: LocationMapProps) {
  const { t } = useTranslation();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const mapOptions = useMemo<google.maps.MapOptions>(() => ({
    disableDefaultUI: false,
    clickableIcons: true,
    scrollwheel: true,
    styles: [
      {
        featureType: "all",
        elementType: "geometry",
        stylers: [{ color: "#F8FAFC" }]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#E0F2FE" }]
      }
    ]
  }), []);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  if (!isLoaded) {
    return (
      <Card className="w-full h-[400px] flex items-center justify-center">
        <div className="animate-pulse">{t('locations.loading')}</div>
      </Card>
    );
  }

  return (
    <Card className="w-full h-[400px] overflow-hidden">
      <GoogleMap
        options={mapOptions}
        zoom={zoom}
        center={initialCenter}
        mapContainerClassName="w-full h-full"
        onLoad={onLoad}
      >
        {locations.map((location) => (
          <MarkerF
            key={location.id}
            position={location.position}
            title={t(`locations.${location.status}`)}
            icon={{
              url: `/markers/${location.status}.svg`,
              scaledSize: new google.maps.Size(32, 32)
            }}
          />
        ))}
      </GoogleMap>
    </Card>
  );
} 