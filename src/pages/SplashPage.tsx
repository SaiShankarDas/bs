import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SplashPage: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden bg-white selection:bg-theme-accent-orange-start/30">
      {/* Left Side - Udaipur */}
      <div 
        className={`relative flex-1 flex items-center justify-center cursor-pointer transition-all duration-700 ease-in-out md:h-full h-1/2
          ${hoveredSide === 'right' ? 'md:flex-[0.8]' : hoveredSide === 'left' ? 'md:flex-[1.2]' : 'md:flex-1'}
        `}
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => navigate('/udaipur')}
      >
        <div className="absolute inset-0 bg-[url('/images/Home/dream/tours.jpg')] bg-cover bg-center transition-transform duration-1000 scale-105" style={{ transformOrigin: 'center center' }} />
        <div className={`absolute inset-0 transition-opacity duration-700 ${hoveredSide === 'left' ? 'bg-black/20' : hoveredSide === 'right' ? 'bg-black/60' : 'bg-black/40'}`} />
        <div className="relative z-10 text-center text-white p-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold uppercase tracking-widest drop-shadow-2xl"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.6)" }}
          >
            Udaipur
          </motion.h2>
          <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3 }}
             className="mt-3 md:mt-4 text-sm md:text-xl tracking-[0.3em] font-light"
          >
             ESCAPES
          </motion.p>
        </div>
      </div>

      {/* Center Logo Area */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none drop-shadow-2xl transition-transform duration-700 hover:scale-105">
        <div className="w-28 h-28 md:w-44 md:h-44 rounded-full bg-white/95 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.3)] flex items-center justify-center p-3 md:p-5 border-4 border-white/40">
          <img src="/images/Logo.png" alt="Bharatescapes Logo" className="w-full h-auto drop-shadow-md" />
        </div>
      </div>

      {/* Right Side - Uttarakhand */}
      <div 
        className={`relative flex-1 flex items-center justify-center cursor-pointer transition-all duration-700 ease-in-out md:h-full h-1/2
          ${hoveredSide === 'left' ? 'md:flex-[0.8]' : hoveredSide === 'right' ? 'md:flex-[1.2]' : 'md:flex-1'}
        `}
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => navigate('/uttarakhand')}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center transition-transform duration-1000 scale-105" style={{ transformOrigin: 'center center' }} />
        <div className={`absolute inset-0 transition-opacity duration-700 ${hoveredSide === 'right' ? 'bg-black/20' : hoveredSide === 'left' ? 'bg-black/60' : 'bg-black/40'}`} />
        <div className="relative z-10 text-center text-white p-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold uppercase tracking-widest drop-shadow-2xl"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.6)" }}
          >
            Uttarakhand
          </motion.h2>
          <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3 }}
             className="mt-3 md:mt-4 text-sm md:text-xl tracking-[0.3em] font-light"
          >
             ESCAPES
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default SplashPage;
