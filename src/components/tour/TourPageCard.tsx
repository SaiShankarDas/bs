import React from 'react';
import { motion } from 'framer-motion';
import { Tour } from '../../data/toursData';
import { Plus } from 'lucide-react';

interface TourPageCardProps {
  tour: Tour;
  onImageClick?: (img: string) => void; // Made optional since we removed the click handler logic in parent
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const TourPageCard: React.FC<TourPageCardProps> = ({ tour }) => {
  return (
    <motion.div variants={cardVariants} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col gpu-accelerated">
      <div className="relative group">
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img
            src={tour.img}
            alt={tour.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 will-change-transform"
            loading="lazy"
            decoding="async"
          />
        </div>
        {/* Removed overlay with Plus icon as per previous request */}
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="font-playfair text-xl font-bold text-theme-text-dark mb-2">{tour.title}</h3>
        <p className="text-gray-600 text-sm flex-grow">{tour.caption}</p>
      </div>
    </motion.div>
  );
};

export default TourPageCard;
