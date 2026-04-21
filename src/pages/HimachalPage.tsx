import React, { useRef } from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { ArrowRight, Map, HeartHandshake, Mountain, Sunrise, ChevronLeft, ChevronRight } from 'lucide-react';
import WhyChooseCard from '../components/home/WhyChooseCard';
import TravellersCounter from '../components/home/TravellersCounter';

const carouselData = [
    {
        title: "Shangarh",
        description: "A hidden gem in the Sainj Valley, known for its pristine meadows and ancient temples.",
        link: "/himachal/shangarh",
        image: "/images/destinations/shangarh.png",
        comingSoon: false
    },
    {
        title: "Bir Barot",
        description: "Experience the thrill of paragliding and the serenity of the Barot Valley.",
        link: "/contact",
        image: "/images/destinations/bir_barot.png",
        comingSoon: true
    },
    {
        title: "Manali Sissu Rohtang Pass",
        description: "Epic road trips through snow-capped peaks, vibrant valleys, and the Atal Tunnel.",
        link: "/contact",
        image: "/images/destinations/manali.png",
        comingSoon: true
    },
    {
        title: "Mcleodganj Dharamkot Triund",
        description: "Trek to Triund and explore the spiritual vibe of Dharamshala and Mcleodganj.",
        link: "/contact",
        image: "/images/destinations/mcleodganj.png",
        comingSoon: true
    },
    {
        title: "Jibhi Shoja Tirthan",
        description: "Unwind by the Tirthan river and stay in cozy wooden cottages amidst pine forests.",
        link: "/contact",
        image: "/images/destinations/jibhi.png",
        comingSoon: true
    },
    {
        title: "Kasol Kheerganga Trek",
        description: "A mystical journey featuring hot water springs and the starlit skies of Parvati Valley.",
        link: "/contact",
        image: "/images/destinations/kasol.png",
        comingSoon: true
    }
];

const whyChooseData = [
    {
        icon: Mountain,
        title: "Majestic Valleys",
        description: "Curated experiences in some of the most breathtaking valleys and mountain passes."
    },
    {
        icon: HeartHandshake,
        title: "Cozy Homestays",
        description: "Authentic lodging experiences that connect you closely with the local culture."
    },
    {
        icon: Map,
        title: "Seamless Logistics",
        description: "From transport to hidden trails, we manage everything so you can fully enjoy the journey."
    },
    {
        icon: Sunrise,
        title: "Unforgettable Vibes",
        description: "Whether it's cafe-hopping or stargazing, the vibe is always magical."
    }
];

const HimachalPage: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <PageTransition>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/destinations/himachal_bg.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center px-6 mt-16 max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-playfair font-black mb-6 tracking-tight drop-shadow-2xl"
            style={{ filter: "drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.9))" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-orange-50 to-theme-accent-orange-end">
              Himachal<br />Escapes
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium tracking-wide max-w-3xl mx-auto text-white"
            style={{ textShadow: "0px 2px 8px rgba(0, 0, 0, 0.9)" }}
          >
            Journey to the Land of Snow. Discover majestic mountain passes, lush green valleys, and vibrant culture.
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="container mx-auto px-6">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-center max-w-3xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-primary-start transition-all duration-500 hover:text-warm-gold-dark hover:drop-shadow-[0_0_15px_rgba(181,98,5,0.3)]">Explore the Infinite</h2>
                <p className="text-lg text-gray-700">From the spiritual heights of Mcleodganj to the mystical trails of Kheerganga, our packages are curated for dreamers and adventurers.</p>
            </motion.div>

            <div className="relative mt-20 max-w-7xl mx-auto">
                <button 
                  onClick={scrollLeft}
                  className="absolute left-0 top-1/2 -content absolute -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 bg-white/80 hover:bg-white text-primary-start p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hidden md:flex"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button 
                  onClick={scrollRight}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 bg-white/80 hover:bg-white text-primary-start p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hidden md:flex"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div 
                  ref={carouselRef}
                  className="flex overflow-x-auto gap-6 md:gap-8 pb-12 snap-x snap-mandatory hide-scrollbar px-4 md:px-8"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {carouselData.map((item, index) => (
                        <motion.div 
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative flex flex-col min-w-[280px] md:min-w-[350px] max-w-[350px] flex-shrink-0 snap-center"
                        >
                            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                
                                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full">
                                  <h3 className="font-playfair text-3xl font-bold text-white mb-2 drop-shadow-md translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h3>
                                  <div className="h-[110px] flex flex-col justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    <p className="text-gray-200 mb-4 text-sm leading-relaxed line-clamp-3">{item.description}</p>
                                    {item.comingSoon ? (
                                        <a 
                                            href={`https://wa.me/917976789334?text=Hi%20Bharatescapes%2C%0AI%20am%20interested%20in%20the%20upcoming%20${encodeURIComponent(item.title)}%20escape.`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-bold text-accent-gold hover:text-white transition-colors duration-300 inline-flex items-center text-sm uppercase tracking-wider cursor-pointer"
                                        >
                                            Notify Me <ArrowRight className="ml-2 h-4 w-4" />
                                        </a>
                                    ) : (
                                        <Link to={item.link} className="font-bold text-accent-gold hover:text-white transition-colors duration-300 inline-flex items-center text-sm uppercase tracking-wider">
                                            Explore <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    )}
                                  </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      <section className="pt-20 md:pt-28 pb-6 md:pb-10 doodle-bg-overlay">
        <div className="container mx-auto px-6">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-center max-w-3xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-text-light transition-all duration-500 hover:text-accent-gold hover:drop-shadow-[0_0_15px_rgba(255,199,0,0.3)]">Why Choose Himachal Escapes?</h2>
            </motion.div>

            <motion.div 
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.15 }}
            >
                {whyChooseData.map((item) => (
                    <WhyChooseCard key={item.title} {...item} />
                ))}
            </motion.div>
        </div>
      </section>

      <TravellersCounter location="" />
      

      <section className="pt-8 pb-16 md:pt-12 md:pb-20 doodle-bg-overlay">
        <div className="container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-center"
            >
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-text-light transition-all duration-500 hover:text-accent-gold hover:drop-shadow-[0_0_15px_rgba(255,199,0,0.3)]">Ready for the Ascent?</h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/contact"
                        className="group w-full sm:w-auto inline-flex items-center justify-center bg-active-nav-gradient text-white font-medium py-3 px-8 rounded-[10px] text-lg transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-theme-accent-orange-start/40"
                    >
                        📅 Plan My Trip
                    </Link>
                    <a
                        href="https://wa.me/917976789334?text=Hi%20Bharatescapes%2C%0AI'd%20like%20to%20know%20more%20about%20the%20Himachal%20packages."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-full sm:w-auto inline-flex items-center justify-center bg-active-nav-gradient text-white font-medium py-3 px-8 rounded-[10px] text-lg transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-theme-accent-orange-start/40"
                    >
                        💬 Chat on WhatsApp
                    </a>
                </div>
            </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HimachalPage;
