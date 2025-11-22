import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-royal-blue text-cream-white pt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-saffron-gold">Plan My Escape</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-3 bg-cream-white/10 rounded-md placeholder-cream-white/70 focus:outline-none focus:ring-2 focus:ring-saffron-gold" />
              <input type="email" placeholder="Email" className="w-full p-3 bg-cream-white/10 rounded-md placeholder-cream-white/70 focus:outline-none focus:ring-2 focus:ring-saffron-gold" />
              <input type="text" placeholder="Travel Dates (e.g., Oct 2025)" className="w-full p-3 bg-cream-white/10 rounded-md placeholder-cream-white/70 focus:outline-none focus:ring-2 focus:ring-saffron-gold" />
              <textarea placeholder="Message" rows={4} className="w-full p-3 bg-cream-white/10 rounded-md placeholder-cream-white/70 focus:outline-none focus:ring-2 focus:ring-saffron-gold"></textarea>
              <button type="submit" className="w-full bg-saffron-gold text-royal-blue font-bold py-3 px-6 rounded-md text-lg hover:bg-opacity-90 transition-all duration-300">
                Send Inquiry
              </button>
            </form>
          </motion.div>

          {/* Map and Socials */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116033.55729938061!2d73.6501450431327!3d24.59602493976856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56550a14411%3A0xdbd8c28455b868b0!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1678886543210!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:text-saffron-gold transition-colors"><Instagram size={30} /></a>
              <a href="#" className="hover:text-saffron-gold transition-colors"><Youtube size={30} /></a>
              <a href="#" className="hover:text-saffron-gold transition-colors"><MessageCircle size={30} /></a>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center py-8 mt-16 border-t border-cream-white/20">
          <p>&copy; {new Date().getFullYear()} Bharatescapes | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
