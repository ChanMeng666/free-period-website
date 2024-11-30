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