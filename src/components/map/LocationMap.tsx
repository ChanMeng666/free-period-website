'use client';

import { useLoadScript, GoogleMap, MarkerF, InfoWindowF } from '@react-google-maps/api';
import { useState, useMemo, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from '@/lib/translate';
import { MapPin, Clock, Info } from 'lucide-react';

interface Location {
  id: string;
  position: google.maps.LatLngLiteral;
  title: string;
  address: string;
  status: 'active' | 'inactive' | 'coming';
  type: 'hospital' | 'mall' | 'school' | 'office';
  lastRefill?: string;
  availableUnits?: number;
}

interface LocationMapProps {
  initialCenter?: google.maps.LatLngLiteral;
  zoom?: number;
  locations?: Location[];
}

const statusColors = {
  active: 'bg-green-100 text-green-600',
  inactive: 'bg-red-100 text-red-600',
  coming: 'bg-amber-100 text-amber-600'
};

export function LocationMap({ 
  initialCenter = { lat: 22.3193, lng: 114.1694 },
  zoom = 11,
  locations = []
}: LocationMapProps) {
  const { t } = useTranslation();
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  const mapOptions = useMemo(() => ({
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
      },
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      }
    ],
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    zoomControlOptions: {
      position: isLoaded ? google.maps.ControlPosition.RIGHT_TOP : undefined
    }
  }), [isLoaded]);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);

    if (isLoaded) {
      const controlDiv = document.createElement('div');
      controlDiv.className = 'bg-white rounded-lg shadow-md m-4 p-2';
      controlDiv.innerHTML = `
        <button class="px-4 py-2 text-sm font-medium text-brand-primary-600 hover:bg-brand-primary-50 rounded-md">
          ${t('locations.map.center')}
        </button>
      `;
      
      controlDiv.firstElementChild?.addEventListener('click', () => {
        map.setCenter(initialCenter);
      });

      map.controls[google.maps.ControlPosition.TOP_LEFT].push(controlDiv);
    }
  }, [initialCenter, t, isLoaded]);

  if (!isLoaded) {
    return (
      <Card className="w-full h-[600px] flex items-center justify-center">
        <div className="animate-pulse flex items-center gap-2">
          <MapPin className="h-5 w-5 text-brand-primary-500" />
          <span>{t('locations.loading')}</span>
        </div>
      </Card>
    );
  }

  return (
    <Card className="w-full h-[600px] overflow-hidden">
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
            onClick={() => setSelectedLocation(location)}
            icon={{
              url: `/markers/${location.status}.svg`,
              scaledSize: new google.maps.Size(32, 32)
            }}
          />
        ))}

        {selectedLocation && (
          <InfoWindowF
            position={selectedLocation.position}
            onCloseClick={() => setSelectedLocation(null)}
          >
            <div className="p-2 max-w-xs">
              <div className="flex items-start gap-2 mb-2">
                <div className="p-1.5 rounded-full bg-brand-primary-50">
                  <MapPin className="h-4 w-4 text-brand-primary-500" />
                </div>
                <div>
                  <h3 className="font-medium text-brand-primary-800">
                    {selectedLocation.title}
                  </h3>
                  <p className="text-sm text-brand-neutral-500">
                    {selectedLocation.address}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-2">
                <Badge className={statusColors[selectedLocation.status]}>
                  {t(`locations.status.${selectedLocation.status}`)}
                </Badge>
                <Badge variant="outline">
                  {t(`locations.type.${selectedLocation.type}`)}
                </Badge>
              </div>

              {selectedLocation.status === 'active' && (
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-1 text-brand-neutral-500">
                    <Clock className="h-4 w-4" />
                    <span>
                      {t('locations.lastRefill')}: {selectedLocation.lastRefill}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-brand-neutral-500">
                    <Info className="h-4 w-4" />
                    <span>
                      {t('locations.available')}: {selectedLocation.availableUnits}
                    </span>
                  </div>
                </div>
              )}

              <button
                className="mt-3 w-full px-3 py-1.5 text-sm text-white bg-brand-primary-500 rounded-md hover:bg-brand-primary-600 transition-colors"
                onClick={() => {
                  window.open(
                    `https://www.google.com/maps/dir/?api=1&destination=${selectedLocation.position.lat},${selectedLocation.position.lng}`,
                    '_blank'
                  );
                }}
              >
                {t('locations.getDirections')}
              </button>
            </div>
          </InfoWindowF>
        )}
      </GoogleMap>
    </Card>
  );
}