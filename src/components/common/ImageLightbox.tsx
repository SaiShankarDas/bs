import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ImageLightboxProps {
  src: string | null;
  onClose: () => void;
}

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
};

const ImageLightbox: React.FC<ImageLightboxProps> = ({ src, onClose }) => {
  return (
    <AnimatePresence>
      {src && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh] w-full"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
          >
            <img src={src} alt="Enlarged tour view" className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl" />
          </motion.div>
          <motion.button
            className="absolute top-5 right-5 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
            onClick={onClose}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }}
            exit={{ opacity: 0, scale: 0.5 }}
            aria-label="Close image view"
          >
            <X size={28} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightbox;
