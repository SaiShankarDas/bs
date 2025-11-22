import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { eventsData } from '../data/eventsData';
import EventCard from '../components/events/EventCard';
import { ArrowRight } from 'lucide-react';

const EventsPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 doodle-bg-overlay">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-text-light transition-all duration-500 hover:text-accent-gold hover:drop-shadow-[0_0_15px_rgba(255,199,0,0.3)]">
              Events that bring people Together
            </h1>
            <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto mt-4">
              Experience music, laughter, and fun nights every week!
            </p>
          </motion.div>

          {/* Events Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.15 }}
          >
            {eventsData.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center bg-active-nav-gradient text-white font-medium py-3 px-8 rounded-[10px] text-lg transition-all duration-300 cursor-pointer shadow-lg hover:shadow-theme-accent-orange-start/40 hover:scale-105"
            >
              Join the Next Event
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default EventsPage;
