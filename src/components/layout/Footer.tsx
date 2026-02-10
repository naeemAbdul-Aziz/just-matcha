import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark text-white py-20 rounded-t-[3rem] relative mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 border-b border-white/10 pb-16">
          <div>
            <h3 className="font-serif text-3xl mb-4">Join the Matcha Club</h3>
            <p className="text-white/60 mb-8 max-w-md">Get exclusive access to new blends, secret menu items, and brewing tips directly to your inbox.</p>
            <form className="flex gap-2 max-w-md">
              <input type="email" placeholder="Your email address" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white placeholder-white/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
              <button type="button" className="bg-primary text-background-dark px-8 py-3 rounded-full font-medium hover:bg-white transition-colors">
                Join
              </button>
            </form>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:justify-items-end">
            <div>
              <h4 className="font-serif text-lg mb-4">Shop</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><Link to="/customize" className="hover:text-primary transition-colors">All Drinks</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Kits & Tools</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><a href="#story" className="hover:text-primary transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Locations</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-4">Social</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">TikTok</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <p>© 2023 Just Matcha Ghana. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
        <div className="absolute bottom-4 right-1/2 translate-x-1/2 text-[150px] font-serif font-bold text-white/5 select-none pointer-events-none whitespace-nowrap hidden lg:block">
          JUST MATCHA
        </div>
      </div>
    </footer>
  );
};
