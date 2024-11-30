'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const productDetails = {
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

// 新增产品图片数据
const productImages = [
  {
    src: '/product-front.jpg',
    alt: 'Product front view',
    title: 'Front View'
  },
  {
    src: '/product-side.jpg',
    alt: 'Product side view',
    title: 'Side View'
  },
  {
    src: '/product-detail.jpg',
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
         {/* 2D Product Viewer */}
         <Card className="p-6 relative">
           <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
             <motion.div
               key={selectedImage}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.5 }}
               className="relative w-full h-full"
             >
               <Image
                 src={productImages[selectedImage].src}
                 alt={productImages[selectedImage].alt}
                 fill
                 className="object-cover"
                 priority
               />
             </motion.div>
           </div>
           <div className="flex gap-2 justify-center">
             {productImages.map((image, index) => (
               <button
                 key={index}
                 onClick={() => setSelectedImage(index)}
                 className={`w-20 h-20 relative rounded-md overflow-hidden border-2 transition-all
                   ${selectedImage === index ? 'border-primary' : 'border-transparent'}`}
               >
                 <Image
                   src={image.src}
                   alt={image.alt}
                   fill
                   className="object-cover"
                 />
               </button>
             ))}
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
                       onClick={() => setSelectedImage(index)}
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

export default ProductShowcase;