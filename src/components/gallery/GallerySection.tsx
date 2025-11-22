import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface GallerySectionProps {
  title: string;
  subtitle?: string;
  images: string[];
  initialCount?: number;
  id?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({ 
  title, 
  subtitle, 
  images, 
  initialCount = 8,
  id 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Determine which images to show
  const visibleImages = isExpanded ? images : images.slice(0, initialCount);
  const hasMore = images.length > initialCount;

  return (
    <section id={id} className="py-16 border-b border-black/5 last:border-0">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-dark-bg mb-3 transition-all duration-500 hover:text-warm-wine hover:drop-shadow-[0_0_15px_rgba(178,58,72,0.4)]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Masonry Layout using Tailwind Columns */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {visibleImages.map((src, index) => (
              <motion.div
                key={`${src}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index < initialCount ? index * 0.05 : 0 }}
                // Added transform-gpu and backface-visibility hidden to prevent flickering
                className="break-inside-avoid mb-4 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform-gpu"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <img
                  src={src}
                  alt={`${title} - ${index + 1}`}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out block"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group inline-flex items-center gap-2 bg-white border-2 border-accent-gold text-theme-text-dark font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-accent-gold hover:text-white hover:shadow-lg"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  View More Photos <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </button>
            {!isExpanded && (
                <p className="text-sm text-gray-500 mt-3">
                    Showing {initialCount} of {images.length} photos
                </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
