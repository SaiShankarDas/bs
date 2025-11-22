import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import TourRoadmapItem from './TourRoadmapItem';
import { Tour } from '../../data/toursData';

interface TourRoadmapProps {
  tours: Tour[];
}

const TourRoadmap: React.FC<TourRoadmapProps> = ({ tours = [] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"]
  });

  return (
    <div ref={ref} className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative py-10">
      {/* The vertical line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-black/10 -translate-x-1/2">
        <motion.div
          className="w-full h-full bg-gradient-to-b from-accent-pink to-accent-gold origin-top will-change-transform"
          style={{ scaleY: scrollYProgress }}
        />
      </div>
      
      <div className="relative z-10 space-y-12 md:space-y-0">
        {tours.map((tour, index) => (
            <TourRoadmapItem key={index} tour={tour} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TourRoadmap;
