import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Tour } from '../../data/toursData';

interface TourRoadmapItemProps {
  tour: Tour;
  index: number;
}

const TourRoadmapItem: React.FC<TourRoadmapItemProps> = ({ tour, index }) => {
  const isEven = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const variants = {
    hidden: { opacity: 0, x: isEven ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const mobileVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div ref={ref} className="md:my-16 relative">
      {/* Timeline Dot */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 -translate-x-1/2 md:left-1/2 w-6 h-6 rounded-full bg-warm-white border-4 border-accent-gold shadow-md z-20"></div>

      <div className={`flex items-center ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        {/* Card Content */}
        <motion.div 
          className="w-full md:w-5/12 ml-16 md:ml-0"
          variants={isMobile ? mobileVariants : variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-xl border border-black/5 gpu-accelerated">
            <div className="relative mb-4">
              <div className="w-full rounded-md overflow-hidden shadow-md">
                <img 
                  src={tour.img} 
                  alt={tour.title} 
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 ease-in-out hover:scale-105 will-change-transform" 
                  loading="lazy" 
                  decoding="async"
                />
              </div>
            </div>
            <h3 className="font-playfair text-xl md:text-2xl font-bold text-theme-text-dark">{tour.title}</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">{tour.caption}</p>
          </div>
        </motion.div>

        {/* Spacer for desktop */}
        <div className="hidden md:block w-7/12"></div>
      </div>
    </div>
  );
};

export default TourRoadmapItem;
