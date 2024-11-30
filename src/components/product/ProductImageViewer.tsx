'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface ProductImage {
  src: string;
  alt: string;
  title: string;
}

interface ProductImageViewerProps {
  images: ProductImage[];
  onImageChange?: (index: number) => void;
}

export const ProductImageViewer = ({ images, onImageChange }: ProductImageViewerProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageChange = (index: number) => {
    setSelectedImage(index);
    onImageChange?.(index);
  };

  return (
    <Card className="p-6 relative">
      <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex gap-2 justify-center">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleImageChange(index)}
            className={`w-20 h-20 relative rounded-md overflow-hidden border-2 transition-all
              ${selectedImage === index ? 'border-brand-primary-500' : 'border-transparent'}`}
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
  );
}; 