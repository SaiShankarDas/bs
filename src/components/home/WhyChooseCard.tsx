import React from 'react';
import { motion } from 'framer-motion';
import { LucideProps } from 'lucide-react';

interface WhyChooseCardProps {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  title: string;
  description: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const WhyChooseCard: React.FC<WhyChooseCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <motion.div 
      variants={cardVariants}
      className="text-center p-6"
    >
      <div className="flex items-center justify-center mb-4">
        <div className="bg-accent-gold/20 p-4 rounded-full">
          <Icon className="h-8 w-8 text-accent-gold" />
        </div>
      </div>
      <h3 className="font-playfair text-2xl font-bold text-text-light mb-2">{title}</h3>
      <p className="text-text-muted">{description}</p>
    </motion.div>
  );
};

export default WhyChooseCard;
