import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppIcon from './common/WhatsAppIcon';
import { Instagram } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = "https://wa.me/917976789334?text=Hi%20Bharatescapes%2C%0AI'd%20like%20to%20book%20a%20tour%20with%20Bharatescapes.%0ACan%20you%20share%20the%20best%20options%3F";
  const instaUrl = "https://www.instagram.com/bharatescapes/";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-center">
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-[#25D366] text-white rounded-full p-3.5 shadow-lg flex items-center justify-center w-14 h-14"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-full h-full" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10"></span>
      </motion.a>

      {/* Instagram Button */}
      <motion.a
        href={instaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-full p-3.5 shadow-lg flex items-center justify-center w-14 h-14 shadow-[#dc2743]/40"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.7 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Visit our Instagram"
      >
        <Instagram className="w-full h-full" />
        <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] opacity-75 animate-ping -z-10"></span>
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;
