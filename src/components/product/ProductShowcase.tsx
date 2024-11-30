'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { Card } from '@/components/ui/card';
import { ProductImageViewer } from './ProductImageViewer';
import type { ProductDetails } from '@/types/product';

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

const productImages = [
  {
    src: '/images/product-front.jpg',
    alt: 'Product front view',
    title: 'Front View'
  },
  {
    src: '/images/product-side.jpg',
    alt: 'Product side view',
    title: 'Side View'
  },
  {
    src: '/images/product-detail.jpg',
    alt: 'Product detail view',
    title: 'Detail View'
  }
];

export const ProductShowcase = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-brand-primary-800 mb-4">Our Products</h2>
          <p className="text-brand-neutral-500 max-w-2xl mx-auto">
            Discover our innovative solutions for modern menstrual care
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <ProductImageViewer 
            images={productImages}
            onImageChange={setSelectedImage}
          />

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-brand-primary-800 mb-4">
                {productDetails.name}
              </h3>
              <p className="text-brand-neutral-500 mb-6">
                {productDetails.description}
              </p>
              
              <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-lg bg-brand-neutral-50 p-1 mb-6">
                  {['Features', 'Specifications', 'Impact'].map((category) => (
                    <Tab
                      key={category}
                      className={({ selected }) =>
                        `w-full rounded-lg py-2.5 text-sm font-medium leading-5
                        ${selected
                          ? 'bg-white text-brand-primary-700 shadow'
                          : 'text-brand-neutral-500 hover:text-brand-primary-600 hover:bg-white/50'
                        }`
                      }
                    >
                      {category}
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel className="space-y-4">
                    {productDetails.features.map((feature, index) => (
                      <Card
                        key={index}
                        className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                      >
                        <h4 className="font-semibold text-brand-primary-700 mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-brand-neutral-500">
                          {feature.description}
                        </p>
                      </Card>
                    ))}
                  </Tab.Panel>
                  <Tab.Panel className="space-y-4">
                    {Object.entries(productDetails.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-brand-neutral-100">
                        <span className="font-medium text-brand-primary-700">{key}</span>
                        <span className="text-brand-neutral-500">{value}</span>
                      </div>
                    ))}
                  </Tab.Panel>
                  <Tab.Panel>
                    <Card className="p-6">
                      <h4 className="font-semibold text-brand-primary-700 mb-4">
                        Environmental Impact
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-brand-neutral-500">CO2 Saved</p>
                          <p className="text-2xl font-bold text-brand-primary-600">
                            {productDetails.environmentalImpact.co2Saved}kg
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-brand-neutral-500">Waste Prevented</p>
                          <p className="text-2xl font-bold text-brand-primary-600">
                            {productDetails.environmentalImpact.wastePrevented}kg
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-brand-neutral-500">Water Saved</p>
                          <p className="text-2xl font-bold text-brand-primary-600">
                            {productDetails.environmentalImpact.waterSaved}L
                          </p>
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

export default ProductShowcase;