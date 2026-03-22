import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, MapPin, Calendar, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const itineraryDays = [
  {
    day: "Day 0",
    title: "The Journey Begins",
    items: [
      "Evening departure from Delhi.",
      "Meet your trip captain and fellow travelers — your travel tribe for the next few days.",
      "Quick briefing about the journey, itinerary & basic guidelines.",
      "Kickstart the trip with fun ice-breaking sessions, music & travel games.",
      "Enjoy the overnight road journey as the city lights slowly fade into mountain roads.",
      "Comfortable travel with scenic night drive towards Uttarakhand."
    ],
    quote: "The journey begins even before you reach the mountains — it starts with the people you travel with."
  },
  {
    day: "Day 1",
    title: "A Day of Spiritual & Scenic Beauty",
    items: [
      "Early morning arrival in Rishikesh.",
      "Sunrise breakfast at RISHIKESH.",
      "En-route halt at Devprayag.",
      "Witness confluence of Alaknanda & Bhagirathi rivers.",
      "Visit Dhari Devi Temple.",
      "Continue scenic drive through mountains.",
      "Reach Chopta by evening.",
      "Dinner & overnight stay at Chopta."
    ],
    quote: "# From rivers to ridges - a perfect Himalayan welcome."
  },
  {
    day: "Day 2",
    title: "The Trek Day (Adventure Peak)",
    items: [
      "Early morning trek begins.",
      "Trek to Tungnath Temple (highest Shiva temple)",
      "Continue trek to Chandrashila Summit.",
      "360° Himalayan views (Nanda Devi, Trishul, Chaukhamba)",
      "Descend back to base.",
      "Drive to Saari Village.",
      "Dinner & overnight stay."
    ],
    quote: "# Walk above the clouds, stand at the summit."
  },
  {
    day: "Day 3",
    title: "Calm & Closure",
    items: [
      "Morning trek to Deoriatal Lake.",
      "Reflection of Himalayan peaks in the lake.",
      "Relax, click pictures, soak the peace.",
      "Start return journey to Delhi.",
      "Overnight travel journey."
    ],
    quote: "# End the trip with calm, not chaos, with family not the strangers."
  }
];

const inclusions = [
  "Accommodation (as per the itinerary).",
  "Meals - 3 Breakfast and 3 Dinner.",
  "Transportation (Tempo Traveller)",
  "Support: 1 Mountaineering & First aid qualified professional expedition Leader.",
  "First aid & Medical kit.",
  "Cloakroom service at base camp.",
  "Mules/porters to carry the central luggage (NOT THE PERSONAL LUGGAGE).",
  "All necessary permits and entry fees, up to the amount charged for Indian.",
  "Services from Delhi to Delhi."
];

const exclusions = [
  "Insurance.",
  "Lunch.",
  "Any kind of personal expenses.",
  "Mule or porter to carry personal luggage.",
  "Emergency evacuation, hospitalization charge or etc.",
  "Rental Gear.",
  "Anything not specifically mentioned under the head.",
  "Anything not mentioned in inclusions."
];

const ChoptaItineraryPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    people: '',
    pickup: ''
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Bharatescapes,\n\nI'd like to book the Chopta-Tungnath package for 2-5th April.\n\nMy Details:\nName: ${formData.name}\nNo. of people: ${formData.people}\nPickup Location: ${formData.pickup}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917976789334?text=${encodedMessage}`, '_blank');
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[url('/destinations/chopta_tungnath_1774209147259.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 mb-4 text-white/90 bg-black/30 backdrop-blur-sm px-6 py-2 rounded-full"
          >
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> 3 Days, 4 Nights</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Uttarakhand</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-playfair font-black mb-6 tracking-tight text-white drop-shadow-2xl"
          >
            Chopta-Tungnath Trek
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-medium tracking-wide max-w-3xl mx-auto text-gray-200"
          >
            Experience the magic of the Himalayas with a trek to the highest Shiva temple.
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
                {/* Vertical Line */}
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
                    {/* Timeline dot */}
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
                  <h3 className="text-3xl font-playfair font-bold mb-3 text-primary-start">2nd - 5th April</h3>
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
                        <option value="" disabled>Select Location</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Rishikesh">Rishikesh</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Udaipur">Udaipur</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 mt-4 rounded-xl bg-active-nav-gradient text-white font-bold hover:shadow-lg transition-all group flex items-center justify-center gap-2 text-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
              
              <div className="mt-8 text-center">
                <Link to="/uttarakhand" className="inline-flex items-center text-gray-500 hover:text-primary-start font-medium transition-colors">
                  <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to Uttarakhand Escapes
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ChoptaItineraryPage;
