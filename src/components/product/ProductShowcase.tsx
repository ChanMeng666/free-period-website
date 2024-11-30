'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Maximize2, RotateCw, ZoomIn } from 'lucide-react';

const productDetails: ProductDetails = {
  name: "FreePeriod Essential",
  description: "A revolutionary menstrual care product that combines comfort, sustainability, and innovation.",
  features: [
    {
      title: "Eco-Friendly Material",
      description: "Made from 100% biodegradable materials, reducing environmental impact."
    },
    {
      title: "Smart Absorption",
      description: "Advanced technology for optimal comfort and protection."
    },
    {
      title: "Easy Installation",
      description: "Simple and intuitive design for hassle-free use."
    }
  ],
  specifications: {
    "Material": "Organic Cotton, Biodegradable Polymers",
    "Duration": "Up to 12 hours",
    "Size Options": "Light, Regular, Heavy",
    "Packaging": "Plastic-free, Recyclable"
  },
  environmentalImpact: {
    co2Saved: 12.5,
    wastePrevented: 250,
    waterSaved: 1000
  }
};

export const ProductShowcase = () => {
  const [viewMode, setViewMode] = useState<ProductView['mode']>('3d');
  const [selectedFeature, setSelectedFeature] = useState<number>(0);

  return (
    <section className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our innovative solutions for modern menstrual care
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Product Viewer */}
          <Card className="p-6 relative aspect-square">
            <div className="absolute top-4 right-4 flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => {}}
                title="Rotate"
              >
                <RotateCw className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {}}
                title="Zoom"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {}}
                title="Fullscreen"
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="h-full flex items-center justify-center">
              {/* 3D viewer placeholder - will be replaced with Three.js */}
              <div className="w-64 h-64 bg-secondary rounded-full flex items-center justify-center">
                <p className="text-muted-foreground">3D Model Coming Soon</p>
              </div>
            </div>
          </Card>

          {/* Product Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold mb-4">{productDetails.name}</h3>
              <p className="text-muted-foreground mb-6">
                {productDetails.description}
              </p>
              
              <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-lg bg-secondary p-1 mb-6">
                  <Tab
                    className={({ selected }) =>
                      `w-full rounded-lg py-2.5 text-sm font-medium leading-5
                      ${selected
                        ? 'bg-background text-foreground shadow'
                        : 'text-muted-foreground hover:bg-background/50'
                      }`
                    }
                  >
                    Features
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      `w-full rounded-lg py-2.5 text-sm font-medium leading-5
                      ${selected
                        ? 'bg-background text-foreground shadow'
                        : 'text-muted-foreground hover:bg-background/50'
                      }`
                    }
                  >
                    Specifications
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      `w-full rounded-lg py-2.5 text-sm font-medium leading-5
                      ${selected
                        ? 'bg-background text-foreground shadow'
                        : 'text-muted-foreground hover:bg-background/50'
                      }`
                    }
                  >
                    Impact
                  </Tab>
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel className="space-y-4">
                    {productDetails.features.map((feature, index) => (
                      <Card
                        key={index}
                        className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => setSelectedFeature(index)}
                      >
                        <h4 className="font-semibold mb-2">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </Card>
                    ))}
                  </Tab.Panel>
                  <Tab.Panel className="space-y-4">
                    {Object.entries(productDetails.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b">
                        <span className="font-medium">{key}</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </Tab.Panel>
                  <Tab.Panel className="space-y-6">
                    <Card className="p-6">
                      <h4 className="font-semibold mb-4">Environmental Impact</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-muted-foreground">CO2 Saved</p>
                          <p className="text-2xl font-bold">{productDetails.environmentalImpact.co2Saved}kg</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Waste Prevented</p>
                          <p className="text-2xl font-bold">{productDetails.environmentalImpact.wastePrevented}kg</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Water Saved</p>
                          <p className="text-2xl font-bold">{productDetails.environmentalImpact.waterSaved}L</p>
                        </div>
                      </div>
                    </Card>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};