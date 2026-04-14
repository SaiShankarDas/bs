import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const regions = [
  {
    id: 'udaipur',
    title: 'Udaipur',
    path: '/udaipur',
    image: "/images/destinations/udaipur_bg.png"
  },
  {
    id: 'uttarakhand',
    title: 'Uttarakhand',
    path: '/uttarakhand',
    image: "/images/destinations/kedarnath.png"
  },
  {
    id: 'himachal',
    title: 'Himachal',
    path: '/himachal',
    image: "/images/destinations/himachal_bg.png"
  },
  {
    id: 'kashmir',
    title: 'Kashmir',
    path: '/kashmir',
    image: "/images/destinations/kashmir_bg.png"
  }
];

const SplashPage: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 h-screen w-full overflow-hidden bg-white selection:bg-theme-accent-orange-start/30">
      
      {regions.map((region) => {
        const isHovered = hoveredSection === region.id;
        const isAnyHovered = hoveredSection !== null;

        return (
          <div 
            key={region.id}
            className={`group relative w-full h-full flex items-center justify-center cursor-pointer overflow-hidden bg-black`}
            onMouseEnter={() => setHoveredSection(region.id)}
            onMouseLeave={() => setHoveredSection(null)}
            onClick={() => navigate(region.path)}
          >
            <div className="absolute inset-0 transition-transform duration-1000 scale-105 group-hover:scale-110 bg-cover bg-center" style={{ backgroundImage: `url('${region.image}')`, transformOrigin: 'center center' }} />
            <div className={`absolute inset-0 transition-opacity duration-700 ${isHovered ? 'bg-black/20' : isAnyHovered ? 'bg-black/60' : 'bg-black/40'}`} />
            <div className="relative z-10 text-center text-white p-4 md:p-8 transform transition-transform duration-700 group-hover:scale-105">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold uppercase tracking-widest drop-shadow-2xl"
                style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.6)" }}
              >
                {region.title}
              </motion.h2>
              <motion.p
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.3 }}
                 className="mt-2 md:mt-4 text-xs md:text-lg tracking-[0.3em] font-light"
              >
                 ESCAPES
              </motion.p>
            </div>
          </div>
        );
      })}

      {/* Center Logo Area */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none drop-shadow-2xl transition-transform duration-700 hover:scale-105">
        <div className="w-24 h-24 md:w-40 md:h-40 rounded-full bg-white/95 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.3)] flex items-center justify-center p-3 md:p-5 border-4 border-white/40">
          <img src="/images/Logo.png" alt="Bharatescapes Logo" className="w-full h-auto drop-shadow-md" />
        </div>
      </div>

    </div>
  );
};

export default SplashPage;
