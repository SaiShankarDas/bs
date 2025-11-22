import React from 'react';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Handshake, Map, Castle, Ship, MessageSquare, HeartHandshake, PartyPopper } from 'lucide-react';
import DomeGallery from '../components/dome/DomeGallery';
import { galleryImages } from '../data/galleryImages';
import WhyChooseCard from '../components/home/WhyChooseCard';
import TestimonialCard from '../components/home/TestimonialCard';
import { testimonialsData } from '../data/testimonialsData';
import TravellersCounter from '../components/home/TravellersCounter';

const summaryData = [
    {
        icon: Map,
        title: "Curated Tours",
        description: "From sunrise panoramas to heritage walks, our tours are crafted to immerse you in Udaipur's magic.",
        link: "/tours",
        image: "https://iili.io/KZFB8DG.jpg"
    },
    {
        icon: Handshake,
        title: "Trusted Partners",
        description: "We collaborate with the best to bring you authentic stays and experiences rooted in local culture.",
        link: "/stays",
        image: "https://iili.io/KZsWwbV.jpg"
    },
    {
        icon: PartyPopper,
        title: "Exciting Events",
        description: "Experience Udaipur's nightlife with live music, comedy, gaming, and unforgettable vibes.",
        link: "/events",
        image: "https://iili.io/Ktw92eV.jpg"
    }
];

const whyChooseData = [
    {
        icon: Castle,
        title: "Authentic Local Experiences",
        description: "We go beyond the tourist spots to show you the real, vibrant heart of Udaipur."
    },
    {
        icon: HeartHandshake,
        title: "Handpicked Partners",
        description: "Every partner is chosen for their character, comfort, and connection to local culture."
    },
    {
        icon: Ship,
        title: "Private Offbeat Tours",
        description: "Experience Udaipur's grandeur with exclusive tours tailored to your pace and interests."
    },
    {
        icon: MessageSquare,
        title: "24/7 Concierge Support",
        description: "From booking to departure, our team is always here to ensure a seamless journey."
    }
];

const HomePage: React.FC = () => {
  return (
    <PageTransition>
      <Hero />
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="container mx-auto px-6">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-center max-w-3xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-primary-start transition-all duration-500 hover:text-warm-gold-dark hover:drop-shadow-[0_0_15px_rgba(181,98,5,0.3)]">Your Offbeat Escape Awaits</h2>
                <p className="text-lg text-gray-700">Bharatescapes is more than a tour—it's a story. We curate every moment to connect you with the soul of Udaipur, from its majestic palaces to its hidden gems.</p>
            </motion.div>

            <motion.div 
                className="grid md:grid-cols-3 gap-12 mt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.2 }}
            >
                {summaryData.map((item) => (
                    <motion.div 
                        key={item.title}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
                        }}
                        className="group relative flex flex-col"
                    >
                        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-xl">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                        <div className="bg-black/20 backdrop-blur-lg border border-white/20 shadow-xl rounded-lg p-6 -mt-16 z-10 mx-4 flex-grow">
                            <div className="flex items-center mb-3">
                                <item.icon className="h-6 w-6 text-accent-gold mr-3" />
                                <h3 className="font-playfair text-2xl font-bold text-text-light">{item.title}</h3>
                            </div>
                            <p className="text-text-light mb-4">{item.description}</p>
                            <Link to={item.link} className="font-bold text-warm-wine hover:text-royal-amber transition-colors duration-300 inline-flex items-center">
                                Explore More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </section>

      {/* Reduced bottom padding here */}
      <section className="pt-20 md:pt-28 pb-6 md:pb-10 doodle-bg-overlay">
        <div className="container mx-auto px-6">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-center max-w-3xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-text-light transition-all duration-500 hover:text-accent-gold hover:drop-shadow-[0_0_15px_rgba(255,199,0,0.3)]">Why Choose Bharatescapes?</h2>
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

      <TravellersCounter />

      <section className="py-20 md:py-28 bg-warm-white text-dark-bg overflow-hidden">
        <div className="container mx-auto px-6 text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-primary-start transition-all duration-500 hover:text-warm-gold-dark hover:drop-shadow-[0_0_15px_rgba(181,98,5,0.3)]"
            >
                Glimpses of Udaipur
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className="text-lg text-gray-700 max-w-3xl mx-auto"
            >
                A whirlwind tour through the vibrant streets, serene lakes, and majestic palaces of the City of Lakes.
            </motion.p>
        </div>
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="w-full h-[70vh] md:h-screen mt-12"
        >
            <DomeGallery 
                images={galleryImages}
                grayscale={false}
                overlayBlurColor="#FFF8E7"
                imageBorderRadius="12px"
                openedImageBorderRadius="20px"
            />
        </motion.div>
      </section>
      
      <section className="py-20 md:py-28 doodle-bg-overlay">
        <div className="container mx-auto px-6">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-center max-w-3xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-text-light transition-all duration-500 hover:text-accent-gold hover:drop-shadow-[0_0_15px_rgba(255,199,0,0.3)]">Stories From Our Guests</h2>
            </motion.div>

            <motion.div 
                className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.2 }}
            >
                {testimonialsData.map((testimonial) => (
                    <TestimonialCard key={testimonial.name} testimonial={testimonial} />
                ))}
            </motion.div>
        </div>
      </section>

      {/* Reduced bottom padding for Our Story section */}
      <section className="pb-8 md:pb-12">
        <div className="container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative bg-warm-white rounded-lg shadow-xl p-10 md:p-16 text-center overflow-hidden"
            >
                <div className="relative z-10">
                    <h3 className="text-xl font-playfair font-bold text-dark-bg mb-2 transition-all duration-500 hover:text-warm-wine hover:drop-shadow-[0_0_15px_rgba(178,58,72,0.4)]">Our Story</h3>
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                        “Born from a passion to share Udaipur’s offbeat charm, Bharatescapes curates soulful experiences blending tradition, comfort, and authenticity.”
                    </p>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Reduced top padding for CTA section */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-20 doodle-bg-overlay">
        <div className="container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-center"
            >
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-text-light transition-all duration-500 hover:text-accent-gold hover:drop-shadow-[0_0_15px_rgba(255,199,0,0.3)]">Ready to plan your perfect getaway?</h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/contact"
                        className="group w-full sm:w-auto inline-flex items-center justify-center bg-active-nav-gradient text-white font-medium py-3 px-8 rounded-[10px] text-lg transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-theme-accent-orange-start/40"
                    >
                        📅 Plan My Trip
                    </Link>
                    <a
                        href="https://wa.me/917976789334?text=Hi%20Bharatescapes%2C%0AI'd%20like%20to%20book%20a%20tour%20with%20Bharatescapes.%0ACan%20you%20share%20the%20best%20options%3F"
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

export default HomePage;
