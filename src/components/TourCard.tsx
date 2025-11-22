import React from 'react';
import { motion } from 'framer-motion';

interface TourCardProps {
  img: string;
  title: string;
  caption: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TourCard: React.FC<TourCardProps> = ({ img, title, caption }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer gpu-accelerated"
    >
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 will-change-transform"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-text-light">
        <div className="transform transition-transform duration-500 group-hover:-translate-y-2 will-change-transform">
            <h3 className="text-xl font-playfair font-bold">{title}</h3>
            <p className="text-sm font-poppins opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-1">{caption}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TourCard;
