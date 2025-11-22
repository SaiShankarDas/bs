import React, { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

const TravellersCounter: React.FC = () => {
  const countRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && countRef.current) {
      const node = countRef.current;
      const controls = animate(0, 10000, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Math.round(value).toLocaleString();
        },
      });
      return () => controls.stop();
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      // Reduced top padding here
      className="pt-6 pb-20 md:pt-10 md:pb-28 doodle-bg-overlay flex flex-col items-center justify-center text-center"
    >
      <div className="container mx-auto px-6">
        {/* Top Line (Globe + Number) */}
        <div className="flex items-center justify-center space-x-3 mb-2">
          <span className="text-6xl md:text-7xl">🌍</span>
          <span className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-theme-accent-orange-start to-theme-accent-orange-end drop-shadow-[0_0_12px_rgba(255,109,0,0.5)]">
            <span ref={countRef}>0</span>+
          </span>
        </div>

        {/* Bottom Line */}
        <p className="font-playfair text-4xl md:text-5xl font-bold text-text-light leading-tight transition-all duration-500 hover:text-accent-gold hover:drop-shadow-[0_0_15px_rgba(255,199,0,0.3)]">
          travellers explored Udaipur <br className="hidden md:block" />
          with us!
        </p>
      </div>
    </section>
  );
};

export default TravellersCounter;
