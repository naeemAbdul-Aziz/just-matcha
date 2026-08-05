import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { Logo } from '../ui/Logo';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav className={cn(
      "fixed w-full z-50 top-0 transition-all duration-300 pt-4 md:pt-6 pb-2",
      scrolled ? "pt-2 md:pt-3" : ""
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className={cn(
          "rounded-full px-5 py-2.5 md:px-8 md:py-3 flex justify-between items-center transition-all duration-300",
          !scrolled ? "glass-effect shadow-sm" : "bg-white/80 backdrop-blur-md shadow-sm border border-white/20"
        )}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Logo className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <span className="font-serif font-bold text-xl tracking-tight text-text-dark">Just Matcha<span className="text-primary">.</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {isHome ? (
              <>
                <a href="#menu" className="text-sm font-medium text-text-dark hover:text-primary transition-colors uppercase tracking-wider">Menu</a>
                <a href="#story" className="text-sm font-medium text-text-dark hover:text-primary transition-colors uppercase tracking-wider">Our Story</a>
              </>
            ) : (
               <>
                <Link to="/" className="text-sm font-medium text-text-dark hover:text-primary transition-colors uppercase tracking-wider">Home</Link>
                <Link to="/customize" className="text-sm font-medium text-text-dark hover:text-primary transition-colors uppercase tracking-wider">Order Now</Link>
               </>
            )}
            <Link to="/customize" className="text-sm font-medium text-text-dark hover:text-primary transition-colors uppercase tracking-wider">Customize</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-white/50 rounded-full transition-colors group">
              <span className="material-icons text-text-dark group-hover:text-primary transition-colors">shopping_bag</span>
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white"></span>
            </button>
            <button className="md:hidden p-2 hover:bg-white/50 rounded-full transition-colors">
              <span className="material-icons text-text-dark">menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
