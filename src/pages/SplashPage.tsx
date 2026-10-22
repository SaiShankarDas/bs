import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

const otherDestinations = [
  {
    id: 'uttarakhand',
    title: 'Uttarakhand',
    subtitle: 'The Dev Bhoomi',
    path: '/uttarakhand',
    image: "/images/destinations/kedarnath.webp"
  },
  {
    id: 'himachal',
    title: 'Himachal',
    subtitle: 'The Mountain Paradise',
    path: '/himachal',
    image: "/images/destinations/himachal_bg.webp"
  },
  {
    id: 'kashmir',
    title: 'Kashmir',
    subtitle: 'Paradise on Earth',
    path: '/kashmir',
    image: "/images/destinations/kashmir_bg.webp"
  }
];

const SplashPage: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="relative w-full min-h-screen bg-[#0a0a0a] overflow-x-hidden selection:bg-theme-accent-orange-start/30">

      {/* ===================== UDAIPUR HERO SECTION ===================== */}
      <section
        className="relative w-full h-screen flex flex-col items-center justify-center cursor-pointer group overflow-hidden"
        onClick={() => navigate('/udaipur')}
      >
        {/* Background Image with Ken Burns */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/destinations/udaipur_bg.webp')` }}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 12, ease: 'easeOut' }}
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

        {/* Vignette */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)'
        }} />

        {/* Animated golden light streak */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1"
          style={{ background: 'linear-gradient(90deg, transparent, #FFAA00, #FF6D00, transparent)' }}
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/95 backdrop-blur-md shadow-[0_0_60px_rgba(255,167,0,0.3)] flex items-center justify-center p-3 md:p-4 border-2 border-white/30">
              <img src="/images/Logo.webp" alt="Bharatescapes Logo" className="w-full h-auto drop-shadow-md" width="400" height="131" />
            </div>
          </motion.div>

          {/* Tagline above title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            className="text-xs md:text-sm tracking-[0.4em] uppercase text-white/70 font-light mb-4"
          >
            Our Signature Destination
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-playfair font-bold uppercase tracking-wider text-white"
            style={{
              textShadow: '0 4px 30px rgba(0,0,0,0.5), 0 0 80px rgba(255,167,0,0.15)'
            }}
          >
            Udaipur
          </motion.h1>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
            className="w-24 md:w-36 h-[2px] my-5 origin-center"
            style={{ background: 'linear-gradient(90deg, transparent, #FFAA00, #FF6D00, transparent)' }}
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-base md:text-xl tracking-[0.25em] font-light text-white/80"
          >
            THE CITY OF LAKES
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="mt-8"
          >
            <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/30 text-white/90 text-sm md:text-base tracking-wider hover:bg-white/10 hover:border-white/50 transition-all duration-500 group-hover:border-[#FFAA00]/50 group-hover:shadow-[0_0_30px_rgba(255,170,0,0.15)]">
              Explore Udaipur
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
            </span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <span className="text-white/50 text-[10px] md:text-xs tracking-[0.3em] uppercase">More Destinations</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-white/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===================== OTHER DESTINATIONS STRIP ===================== */}
      <section className="relative w-full bg-[#0a0a0a]">
        {/* Section header */}
        <div className="text-center py-10 md:py-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm tracking-[0.4em] uppercase text-white/40 mb-3"
          >
            Explore Beyond
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-4xl font-playfair font-bold text-white/90 tracking-wide"
          >
            Other Destinations
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-16 md:w-24 h-[1px] mx-auto mt-4 origin-center"
            style={{ background: 'linear-gradient(90deg, transparent, #FFAA00, transparent)' }}
          />
        </div>

        {/* Destination cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-4 md:px-8 lg:px-16 pb-10 md:pb-16">
          {otherDestinations.map((dest, index) => {
            const isHovered = hoveredCard === dest.id;
            return (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[16/10] md:aspect-[4/3]"
                onClick={() => navigate(dest.path)}
                onMouseEnter={() => setHoveredCard(dest.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url('${dest.image}')` }}
                />

                {/* Overlays */}
                <div className={`absolute inset-0 transition-all duration-700 ${
                  isHovered
                    ? 'bg-gradient-to-t from-black/70 via-black/20 to-transparent'
                    : 'bg-gradient-to-t from-black/60 via-black/30 to-black/10'
                }`} />

                {/* Border glow on hover */}
                <div className={`absolute inset-0 rounded-2xl transition-all duration-700 ${
                  isHovered ? 'ring-1 ring-[#FFAA00]/40 shadow-[0_0_30px_rgba(255,170,0,0.1)]' : 'ring-1 ring-white/5'
                }`} />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10">
                  <motion.p
                    className={`text-[10px] md:text-xs tracking-[0.3em] uppercase font-light mb-1.5 transition-all duration-500 ${
                      isHovered ? 'text-[#FFAA00]/90' : 'text-white/50'
                    }`}
                  >
                    {dest.subtitle}
                  </motion.p>
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold text-white tracking-wide"
                    style={{ textShadow: '0 2px 15px rgba(0,0,0,0.5)' }}
                  >
                    {dest.title}
                  </h3>
                  <div className={`flex items-center gap-2 mt-3 transition-all duration-500 ${
                    isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                  }`}>
                    <span className="text-xs md:text-sm tracking-wider text-white/80">Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFAA00]" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default SplashPage;
