export type LocationType = 'hospital' | 'mall' | 'school' | 'office';

export type LocationStatus = 'active' | 'inactive' | 'coming';

export interface Location {
  id: string;
  name: string;
  address: string;
  position: {
    lat: number;
    lng: number;
  };
  type: LocationType;
  status: LocationStatus;
  lastRefill?: string;
  availableUnits?: number;
}