import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/landing/HeroSection';
import { MenuSection } from '../components/landing/MenuSection';
import { StorySection } from '../components/landing/StorySection';
import { FAQSection } from '../components/landing/FAQSection';
import { Link } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: "easeIn" as const } }
};

export const LandingPage: React.FC = () => {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <HeroSection />
      <MenuSection />
      <StorySection />
      <FAQSection />

      {/* Floating "Custom Order" Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        <Link to="/customize" className="bg-background-dark text-white p-4 rounded-full shadow-2xl hover:bg-primary hover:text-background-dark transition-all duration-300 group flex items-center gap-3">
          <span className="material-symbols-sharp animate-pulse">add</span>
          <span className="font-medium max-w-0 group-hover:max-w-[150px] whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out">Custom Order</span>
        </Link>
      </div>
    </motion.div>
  );
};
