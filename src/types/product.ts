export interface ProductView {
    mode: 'gallery' | 'comparison';
    interactions: {
      zoom: boolean;
      pan: boolean;
    };
    hotspots: Array<{
      position: { x: number; y: number };
      content: string;
      type: 'feature' | 'spec' | 'demo';
    }>;
  }
  
  export interface ProductFeature {
    title: string;
    description: string;
    icon?: string;
  }
  
  export interface ProductDetails {
    name: string;
    description: string;
    features: ProductFeature[];
    specifications: Record<string, string>;
    environmentalImpact: {
      co2Saved: number;
      wastePrevented: number;
      waterSaved: number;
    };
  }