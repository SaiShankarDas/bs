import React from 'react';
import { motion } from 'framer-motion';
import { LucideProps } from 'lucide-react';

interface EventCardProps {
  event: {
    title: string;
    description: string;
    image: string;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    imagePosition?: string; // Add optional prop for image positioning
  };
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const Icon = event.icon;
  return (
    <motion.div
      variants={cardVariants}
      className="bg-white/5 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden border border-white/10 group gpu-accelerated"
    >
      <div className="relative overflow-hidden"> {/* Added overflow-hidden to contain the zoom effect */}
        <img 
          src={event.image} 
          alt={event.title} 
          className={`w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform ${event.imagePosition || 'object-center'}`} 
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full">
            <Icon className="h-6 w-6 text-accent-gold" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-playfair text-2xl font-bold text-text-light mb-2">{event.title}</h3>
        <p className="font-poppins text-text-muted">{event.description}</p>
      </div>
    </motion.div>
  );
};

export default EventCard;
