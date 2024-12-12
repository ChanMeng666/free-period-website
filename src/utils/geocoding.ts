interface GeocodeResult {
    latitude: number;
    longitude: number;
    formatted_address: string;
  }
  
  export async function geocodeAddress(address: string): Promise<google.maps.LatLngLiteral | null> {
    try {
      const result = await maps_geocode({ address });
      if (!result) return null;
      
      return {
        lat: result.latitude,
        lng: result.longitude
      };
    } catch (error) {
      console.error('Geocoding error:', error);
      return null;
    }
  }
  
  // 批量地理编码工具
  export async function batchGeocode(locations: Array<{address: string}>): Promise<Array<google.maps.LatLngLiteral | null>> {
    const results = await Promise.all(
      locations.map(loc => geocodeAddress(loc.address))
    );
    return results;
  }