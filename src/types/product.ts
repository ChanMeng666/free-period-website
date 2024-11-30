// export interface ProductView {
//     mode: 'gallery' | 'comparison';
//     interactions: {
//       zoom: boolean;
//       pan: boolean;
//     };
//     hotspots: Array<{
//       position: { x: number; y: number };
//       content: string;
//       type: 'feature' | 'spec' | 'demo';
//     }>;
//   }
  
//   export interface ProductFeature {
//     title: string;
//     description: string;
//     icon?: string;
//   }
  
//   export interface ProductDetails {
//     name: string;
//     description: string;
//     features: ProductFeature[];
//     specifications: Record<string, string>;
//     environmentalImpact: {
//       co2Saved: number;
//       wastePrevented: number;
//       waterSaved: number;
//     };
//   }


// types/product.ts

export interface ProductVersion {
  title: string;
  subtitle: string;
  description: string;
  features: ProductFeature[];
  specifications: ProductSpecs;
  environmentalImpact: EnvironmentalImpact;
}

export interface ProductFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ProductSpecs {
  power: string;
  energy: string;
  emissions: string;
  type: string;
}

export interface EnvironmentalImpact {
  co2Reduction: number;
  energySaving: number;
  wasteReduction: number;
}

export interface EmissionData {
  type: string;
  power: string;
  energy: string;
  emissions: string;
}