import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Testimonial } from '../../data/testimonialsData';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const charLimit = 120;
  const isLongQuote = testimonial.quote.length > charLimit;

  const textToShow = isLongQuote && !isExpanded 
    ? `${testimonial.quote.substring(0, charLimit)}...` 
    : testimonial.quote;

  return (
    <motion.div
      variants={cardVariants}
      layout
      className="bg-black/20 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-white/20 flex flex-col items-center text-center h-full"
    >
      <img 
        src={testimonial.image} 
        alt={testimonial.name} 
        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-accent-gold/50 shadow-md"
      />
      <h3 className="font-playfair text-xl font-bold text-text-light mb-2">{testimonial.name}</h3>
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < testimonial.rating ? 'text-accent-gold fill-current' : 'text-accent-gold/30'}`} 
          />
        ))}
      </div>
      
      <motion.div layout className="w-full flex flex-col flex-grow justify-between">
        <p className="text-text-light italic">"{textToShow}"</p>
        {isLongQuote ? (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sky-blue hover:text-accent-gold font-bold text-sm mt-3 transition-colors duration-300"
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        ) : (
          // Placeholder to ensure consistent layout even if there's no button
          <div></div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TestimonialCard;
