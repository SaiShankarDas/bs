import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
    const { scrollYProgress } = useScroll();
    // Reduced parallax effect for a more stable feel
    const y = useTransform(scrollYProgress, [0, 0.2], ["0%", "20%"]);

  return (
    <section 
      id="hero" 
      className="relative h-screen w-full overflow-hidden video-overlay bg-cover bg-center bg-no-repeat z-0"
      style={{ backgroundImage: "url('https://iili.io/KZ3h9Vf.jpg')" }}
    >
          <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        poster="https://iili.io/KZ3h9Vf.jpg"
      >
        <source src="/videos/herobg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-text-light px-4">
        <motion.div style={{ y }} className="will-change-transform">
          <motion.h1 
            initial={{ opacity: 0, y: 30, letterSpacing: '4px' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0px' }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
            className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-text-light to-accent-gold/80 transition-all duration-500 hover:drop-shadow-[0_0_20px_rgba(255,199,0,0.4)]"
          >
            Explore Udaipur with Bharatescapes
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
            className="font-poppins text-lg md:text-2xl max-w-3xl mx-auto mb-12"
          >
            Offbeat experiences, breathtaking landscapes, and soulful escapes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/tours"
              className="inline-flex items-center bg-active-nav-gradient text-white font-medium py-3 px-8 rounded-[10px] text-lg transition-all duration-300 cursor-pointer"
            >
              View Tours <ArrowRight className="ml-2 h-5 w-5 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
