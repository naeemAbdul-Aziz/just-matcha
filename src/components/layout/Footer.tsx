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
            <div className="space-y-4">
              <h4 className="text-white font-bold tracking-wider uppercase text-sm">Help & Contact</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="mailto:hello@justmatcha.co" className="hover:text-primary transition-colors">hello@justmatcha.co</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold tracking-wider uppercase text-sm">Social</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="https://instagram.com/justmatcha" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="https://tiktok.com/@justmatcha" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">TikTok</a></li>
                <li><a href="https://twitter.com/justmatcha" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Just Matcha. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/legal" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/legal" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
        <div className="absolute bottom-4 right-1/2 translate-x-1/2 text-[150px] font-serif font-bold text-white/5 select-none pointer-events-none whitespace-nowrap hidden lg:block">
          JUST MATCHA
        </div>
      </div>
    </footer>
  );
};
