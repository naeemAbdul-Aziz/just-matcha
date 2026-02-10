import React from 'react';
import { HeroSection } from '../components/landing/HeroSection';
import { MenuSection } from '../components/landing/MenuSection';
import { StorySection } from '../components/landing/StorySection';
import { Link } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <MenuSection />
      <StorySection />

      {/* Floating "Custom Order" Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        <Link to="/customize" className="bg-background-dark text-white p-4 rounded-full shadow-2xl hover:bg-primary hover:text-background-dark transition-all duration-300 group flex items-center gap-3">
          <span className="material-icons animate-pulse">add</span>
          <span className="font-medium max-w-0 group-hover:max-w-[150px] whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out">Custom Order</span>
        </Link>
      </div>
    </div>
  );
};
