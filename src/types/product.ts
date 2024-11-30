export interface ProductView {
    mode: '3d' | 'gallery' | 'comparison';
    interactions: {
      rotate: boolean;
      zoom: boolean;
      explode: boolean;
    };
    hotspots: Array<{
      position: { x: number; y: number; z: number };
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