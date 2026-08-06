import React from 'react';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  return (
    <header className="relative min-h-screen flex items-end justify-center pb-20 overflow-hidden bg-black">
      {/* Cinematic Fullscreen Image */}
      <img
        src="/hero.png"
        alt="Cinematic Matcha Hero"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Gradient Overlay for CTA visibility */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>

      {/* Main CTA */}
      <div className="relative z-20 flex flex-col items-center">
        <Link to="/customize" className="group relative px-8 py-4 bg-primary text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-1">
          <span className="absolute inset-0 w-full h-full bg-primary-dark scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></span>
          <span className="relative flex items-center gap-3 font-bold tracking-wide whitespace-nowrap text-lg">
            Order Your Cup
            <span className="material-symbols-sharp text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </span>
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-1 opacity-70 z-20 text-white">
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <span className="material-symbols-sharp text-sm">keyboard_arrow_down</span>
      </div>
    </header>
  );
};
