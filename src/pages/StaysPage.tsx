import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { ArrowRight, Handshake } from 'lucide-react';

const StaysPage: React.FC = () => {
  return (
    <PageTransition>
      <section id="trusted-partners" className="pt-32 pb-20 md:pb-28 text-text-light">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-center mb-4 text-text-light transition-all duration-500 hover:text-accent-gold hover:drop-shadow-[0_0_15px_rgba(255,199,0,0.3)]">Trusted Partners</h1>
            <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-16">"We collaborate with the best to bring you authentic stays and experiences rooted in local culture. Discover our handpicked partners."</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Whereabout Hostel Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="relative bg-white rounded-xl shadow-2xl overflow-hidden group hover:shadow-[0_0_30px_rgba(255,199,0,0.2)] transition-all duration-500"
            >
              <div className="aspect-[4/3] p-8 flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
                <img 
                  src="https://iili.io/f3YQpHl.png" 
                  alt="Whereabout Hostel Logo" 
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 bg-white border-t border-gray-100">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="font-playfair text-2xl font-bold text-theme-text-dark">Whereabout</h2>
                    <p className="text-accent-gold font-semibold">Hospitality Partner</p>
                  </div>
                  <a 
                    href="https://www.instagram.com/whereabouthostel" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-theme-text-dark hover:text-accent-gold transition-colors duration-300"
                  >
                    <ArrowRight className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* More Partners Coming Soon Card */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative aspect-[4/3] sm:aspect-auto overflow-hidden rounded-xl shadow-lg flex flex-col items-center justify-center bg-white/5 border-2 border-dashed border-white/30 hover:border-accent-gold/50 transition-colors duration-300"
              >
                <Handshake className="w-12 h-12 text-white/50 mb-4" />
                <p className="font-playfair text-2xl text-center text-white/70">More Partners<br/>Coming Soon</p>
            </motion.div>
          </div>

          {/* Be Our Partner CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mt-20"
          >
            <p className="text-lg text-text-muted mb-6">Do you offer unique experiences or stays in Udaipur?</p>
            <a 
              href="https://wa.me/917976789334?text=Hi%20Bharatescapes%2C%20I%20want%20to%20become%20a%20partner."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-accent-gold text-accent-gold font-bold rounded-full text-lg hover:bg-accent-gold hover:text-dark-bg transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,199,0,0.4)]"
            >
              <Handshake className="mr-2 h-5 w-5" />
              Be Our Partner
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default StaysPage;
