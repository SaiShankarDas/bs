import React, { useRef } from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { ArrowRight, Map, HeartHandshake, Mountain, Sunrise, ChevronLeft, ChevronRight } from 'lucide-react';
import WhyChooseCard from '../components/home/WhyChooseCard';
import TravellersCounter from '../components/home/TravellersCounter';

const carouselData = [
    {
        title: "Chopta-Tungnath Trek",
        description: "Experience the magic of the Himalayas with a trek to the highest Shiva temple.",
        link: "/uttarakhand/chopta-tungnath",
        image: "/destinations/chopta_tungnath_1774209147259.png"
    },
    {
        title: "Rishikesh",
        description: "A serene and spiritual destination by the Ganges river, perfect for yoga and adventure.",
        link: "/contact",
        image: "/destinations/rishikesh_1774209162979.png",
        comingSoon: true
    },
    {
        title: "Char Dham",
        description: "Embark on a divine journey to the four sacred shrines in the high-altitude Himalayas.",
        link: "/contact",
        image: "/destinations/char_dham_1774209180840.png",
        comingSoon: true
    },
    {
        title: "Munsiyari",
        description: "A breathtaking paradise offering panoramic views of the majestic Panchachuli peaks.",
        link: "/contact",
        image: "/destinations/munsiyari_1774209199141.png",
        comingSoon: true
    }
];

const whyChooseData = [
    {
        icon: Mountain,
        title: "High Altitude Thrills",
        description: "Expertly guided treks through Alpine meadows leading to sacred, majestic peaks."
    },
    {
        icon: HeartHandshake,
        title: "Premium Handpicked Stays",
        description: "Cozy camps and comfortable lodgings ensuring you rest well after a day of exploration."
    },
    {
        icon: Map,
        title: "Seamless Planning",
        description: "From transport to permits, we handle all the logistics so you can focus on the adventure."
    },
    {
        icon: Sunrise,
        title: "Spiritual Connection",
        description: "Engage with the divine energy of Tungnath and the peaceful serenity of the mountains."
    }
];



const UttarakhandPage: React.FC = () => {
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
      {/* Hero Section Inline */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
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
              Uttarakhand<br />Escapes
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium tracking-wide max-w-3xl mx-auto text-white"
            style={{ textShadow: "0px 2px 8px rgba(0, 0, 0, 0.9)" }}
          >
            Journey to the Abode of Gods. Discover majestic mountain peaks, serene rivers, and spiritual bliss.
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
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-primary-start transition-all duration-500 hover:text-warm-gold-dark hover:drop-shadow-[0_0_15px_rgba(181,98,5,0.3)]">Elevate Your Spirit</h2>
                <p className="text-lg text-gray-700">Immerse yourself in the tranquility of the Himalayas. Our Chopta-Tungnath package is designed for adventurers seeking sweeping views and spiritual solace.</p>
            </motion.div>

            <div className="relative mt-20 max-w-7xl mx-auto">
                {/* Navigation Arrows */}
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

                {/* Carousel Container */}
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
                                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    <p className="text-gray-200 mb-4 text-sm leading-relaxed">{item.description}</p>
                                    {item.comingSoon ? (
                                        <span className="font-bold text-gray-400 inline-flex items-center text-sm uppercase tracking-wider cursor-not-allowed">
                                            Coming Soon
                                        </span>
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
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-text-light transition-all duration-500 hover:text-accent-gold hover:drop-shadow-[0_0_15px_rgba(255,199,0,0.3)]">Why Choose Uttarakhand Escapes?</h2>
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
                        📅 Plan My Trek
                    </Link>
                    <a
                        href="https://wa.me/917976789334?text=Hi%20Bharatescapes%2C%0AI'd%20like%20to%20know%20more%20about%20the%20Chopta%20Tungnath%20package."
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

export default UttarakhandPage;
