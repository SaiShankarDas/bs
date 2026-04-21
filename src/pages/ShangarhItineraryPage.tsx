import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, MapPin, Calendar, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const itineraryDays = [
  {
    day: "Day 0",
    title: "Departure from Delhi",
    items: [
      "Depart from Delhi at 10:00 PM for an overnight journey to Shangarh.",
      "Meet your fellow travelers and the Bharatescapes host.",
      "Briefing about the journey and ice-breaking sessions.",
      "Comfortable overnight travel in a Tempo Traveller."
    ],
    quote: "The best journeys are the ones that lead us to hidden gems."
  },
  {
    day: "Day 1",
    title: "Village Exploration & Meadows",
    items: [
      "Check-in to hostel/hotel and freshen up.",
      "All set to explore the beautiful Shangarh village.",
      "Walk through the iconic Shangarh meadows.",
      "Try local delicacies like Siddu.",
      "Experience the golden hour at the sunset point.",
      "Bonfire, dancing in the meadows, and stargazing nights."
    ],
    quote: "# Meadows that feel like a dream, nights that stay forever."
  },
  {
    day: "Day 2",
    title: "Forest Trail & Trek to Ganjau",
    items: [
      "Light breakfast and pack your bags for adventure.",
      "Forest trail trek to GANJAU.",
      "Enjoy cooking by the stream in the lap of nature.",
      "Return to the stay by evening.",
      "Music, karaoke, and a warm mountain night."
    ],
    quote: "# Into the forest I go, to lose my mind and find my soul."
  },
  {
    day: "Day 3",
    title: "Raila Waterfall & Twin Towers",
    items: [
      "Breakfast and leave for Raila waterfall.",
      "Twin Tower exploration and a short hike to Bhatkanda meadows.",
      "Capture one last sunset full of beautiful memories.",
      "Start the return journey towards Delhi."
    ],
    quote: "# chasing waterfalls and sunsets, one peak at a time."
  },
  {
    day: "Day 4",
    title: "Back to Delhi",
    items: [
      "Reach Delhi by early morning, around 5:00 AM.",
      "End of the journey with hearts full of memories and stories to tell."
    ],
    quote: "Every end is a new beginning. Until next time, Himalayas!"
  }
];

const inclusions = [
  "Transportation (Tempo Traveller).",
  "Stay - 2 nights.",
  "Meals: 3 Breakfast & 3 Dinner.",
  "Treks & other activities.",
  "Experienced host by Bharatescapes."
];

const exclusions = [
  "Insurance.",
  "Any kind of personal expenses.",
  "Meals not mentioned in the inclusions.",
  "Anything not specifically mentioned under inclusions."
];

const ShangarhItineraryPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    people: '',
    pickup: 'Delhi'
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Bharatescapes,\n\nI'd like to book the Shangarh package for 1st-3rd May.\n\nMy Details:\nName: ${formData.name}\nNo. of people: ${formData.people}\nPickup Location: ${formData.pickup}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917976789334?text=${encodedMessage}`, '_blank');
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[url('/images/destinations/shangarh.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 mb-4 text-white/90 bg-black/30 backdrop-blur-sm px-6 py-2 rounded-full"
          >
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> 3D 2N</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Himachal Pradesh</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-playfair font-black mb-6 tracking-tight text-white drop-shadow-2xl"
          >
            Shangarh Escape
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-medium tracking-wide max-w-3xl mx-auto text-gray-200"
          >
            Discover the pristine meadows and hidden waterfalls of Sainj Valley.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex justify-center"
          >
            <a href="#booking-form" className="px-8 py-3.5 rounded-xl bg-active-nav-gradient text-white font-bold hover:scale-105 hover:shadow-lg transition-all group flex items-center gap-2">
              Book Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-28 bg-warm-white bg-opacity-90 relative">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden -mt-32 p-8 md:p-12 relative">
            {/* Itinerary Section */}
            <div className="mb-16">
              <h2 className="text-4xl font-playfair font-bold text-primary-start mb-10 text-center">Detailed Itinerary</h2>
              <div className="space-y-12 max-w-3xl mx-auto relative pl-6 md:pl-10">
                <div className="absolute left-6 md:left-[39px] top-6 bottom-6 w-0.5 bg-theme-accent-orange-start/30" />
                
                {itineraryDays.map((day, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative"
                  >
                    <span className="absolute -left-[30px] md:-left-[44px] top-1.5 w-5 h-5 rounded-full bg-theme-accent-orange-start ring-4 ring-white z-10 shadow-sm" />
                    
                    <div className="mb-4">
                      <span className="inline-block px-4 py-1.5 bg-warm-gold-dark/10 text-warm-gold-dark font-bold text-sm tracking-wider uppercase rounded-full mb-3">{day.day}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{day.title}</h3>
                    </div>
                    
                    <ul className="space-y-3 mb-6 text-gray-700 text-lg">
                      {day.items.map((item, idxi) => (
                        <li key={idxi} className="flex items-start gap-3">
                          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-warm-white/80 p-5 rounded-xl border-l-4 border-warm-gold-dark/60 shadow-sm">
                        <p className="italic text-warm-gold-dark font-medium leading-relaxed">"{day.quote}"</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-green-50/70 p-8 rounded-2xl border border-green-100"
              >
                <h3 className="text-2xl font-playfair font-bold text-green-800 mb-6 flex items-center gap-3">
                  <span className="p-2 bg-green-100 rounded-lg"><CheckCircle2 className="w-6 h-6 text-green-600" /></span> Inclusions
                </h3>
                <ul className="space-y-4">
                  {inclusions.map((inc, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{inc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-red-50/70 p-8 rounded-2xl border border-red-100"
              >
                <h3 className="text-2xl font-playfair font-bold text-red-800 mb-6 flex items-center gap-3">
                  <span className="p-2 bg-red-100 rounded-lg"><XCircle className="w-6 h-6 text-red-500" /></span> Exclusions
                </h3>
                <ul className="space-y-4">
                  {exclusions.map((exc, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{exc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            {/* CTA & Booking Form */}
            <div id="booking-form" className="pt-16 mt-8 border-t border-gray-200 scroll-mt-24">
              <div className="max-w-2xl mx-auto bg-warm-white/50 p-8 rounded-3xl border border-theme-accent-orange-start/20 shadow-lg">
                <div className="mb-8 text-center">
                  <span className="inline-block px-4 py-1.5 bg-accent-gold/20 text-accent-gold font-bold tracking-wider uppercase rounded-full mb-4">Special Batch</span>
                  <h3 className="text-3xl font-playfair font-bold mb-3 text-primary-start">1st - 3rd May</h3>
                  <p className="text-gray-600">Fill out the details below to reserve your spot via WhatsApp.</p>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all outline-none"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="people" className="block text-sm font-semibold text-gray-700 mb-2">No. of People</label>
                      <input 
                        type="number" 
                        id="people"
                        min="1"
                        required
                        value={formData.people}
                        onChange={(e) => setFormData({...formData, people: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all outline-none"
                        placeholder="e.g. 2"
                      />
                    </div>
                    <div>
                      <label htmlFor="pickup" className="block text-sm font-semibold text-gray-700 mb-2">Pickup Location</label>
                      <select 
                        id="pickup"
                        required
                        value={formData.pickup}
                        onChange={(e) => setFormData({...formData, pickup: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all outline-none"
                      >
                        <option value="Delhi">Delhi</option>
                        <option value="Chandigarh">Chandigarh</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 mt-4 rounded-xl bg-active-nav-gradient text-white font-bold hover:shadow-lg transition-all group flex items-center justify-center gap-2 text-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book Experience
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
              
              <div className="mt-8 text-center">
                <Link to="/himachal" className="inline-flex items-center text-gray-500 hover:text-primary-start font-medium transition-colors">
                  <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to Himachal Escapes
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ShangarhItineraryPage;
