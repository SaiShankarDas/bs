import React, { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import GallerySection from '../components/gallery/GallerySection';
import { morningImages, eveningImages } from '../data/tourGalleryData';

const GalleryPage: React.FC = () => {
  // Fix for blue background glitch on fast scroll
  useEffect(() => {
    // Store the original background color
    const originalBg = document.body.style.backgroundColor;
    
    // Set body background to match the page theme (warm-white)
    // This prevents the dark blue body color from showing through during fast scrolls/repaints
    document.body.style.backgroundColor = '#FFF8E7';
    
    return () => {
      // Revert to original background on unmount
      document.body.style.backgroundColor = originalBg;
    };
  }, []);

  return (
    <PageTransition>
      {/* Added relative and z-index to ensure it sits solidly above the fixed background layer */}
      <div className="pt-32 pb-20 bg-warm-white min-h-screen relative z-10">
        {/* Header Section */}
        <div className="container mx-auto px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary-start mb-6 transition-all duration-500 hover:text-warm-gold-dark hover:drop-shadow-[0_0_15px_rgba(181,98,5,0.3)]">
              Captured Moments
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              A visual journey through the landscapes, smiles, and soulful experiences of Udaipur.
            </p>
          </motion.div>
        </div>

        {/* Morning Tour Gallery */}
        <GallerySection 
          id="morning-gallery"
          title="🌅 Morning Adventure Tour"
          subtitle="Sunrise hues, hidden waterfalls, and the serene curves of Rayta Hills."
          images={morningImages}
          initialCount={10}
        />

        {/* Evening Tour Gallery */}
        <GallerySection 
          id="evening-gallery"
          title="🌇 Evening Heritage & Sunset Tour"
          subtitle="Golden hour glows, ancient temples, and the vibrant skyline of the Old City."
          images={eveningImages}
          initialCount={10}
        />

      </div>
    </PageTransition>
  );
};

export default GalleryPage;
