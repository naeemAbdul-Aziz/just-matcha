import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const OrderSummarySticky: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="lg:w-2/5 w-full relative z-20">
      <div className="sticky top-24">
        <div className="bg-white/80 dark:bg-black/40 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-white/40 dark:border-white/10 relative overflow-hidden">
          
          {/* Abstract Receipt Pattern */}
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Mobile Header (Collapsible) */}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden flex justify-between items-center w-full"
          >
            <div className="text-left">
              <span className="block text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold mb-1">Your Ritual</span>
              <span className="text-3xl font-serif font-bold text-brand-dark dark:text-white tracking-tight">GH₵ 65.00</span>
            </div>
            <span className={`material-symbols-sharp transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>expand_more</span>
          </button>

          <div className={`pt-8 lg:pt-0 border-t border-gray-200 dark:border-white/10 mt-8 lg:border-0 lg:mt-0 ${isExpanded ? 'block' : 'hidden lg:block'}`}>
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <span className="material-symbols-sharp text-primary text-xl">spa</span>
              <h2 className="text-2xl font-serif font-bold text-brand-dark dark:text-white">Your Ritual</h2>
            </div>

          {/* Product Visualization */}
          <div className="flex items-center gap-6 mb-10 relative z-10">
            <div className="w-28 h-36 rounded-2xl bg-gradient-to-b from-[#e3fce9] to-[#bbf7c8] dark:from-[#1a3821] dark:to-[#13ec37]/30 shadow-inner flex items-center justify-center relative overflow-hidden group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA83jU4_vjUmuDIOGRD0nJg0RPNIrPpJjL6MFzBJjDelY0fqtnuCrrIGoXjfC_uzP3DMiFsJmuThpkLqo1IVRnqC4OZ5Bbq2pu9dusG-9FQBhKssjGFJgoHjL2R0RKcmzupNJdb6kaghCViuXIV0QwcQmNJ2J2_Y8jSCfMr25Xn0bbCCU5SsPcT20lJ7eAYHjXbOWNRvraz87gGJfiGYSp_rPjn5llpA5q9MR2X7EwzMUDsIDZaZ0jrOEU9RckipH70PjPvmp80Bhc"
                alt="Glass of iced matcha latte with milk layers"
                className="w-full h-full object-cover opacity-90 mix-blend-multiply dark:mix-blend-normal transform transition-transform duration-700 group-hover:scale-110"
                data-alt="Close up of a layered matcha drink in a glass"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl text-brand-dark dark:text-white mb-1">Iced Matcha Latte</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 font-light">Large Size (16oz)</p>
              <Link to="/customize" className="text-xs font-bold text-primary uppercase tracking-widest hover:text-brand-dark transition-colors flex items-center gap-1 group">
                Edit Blend
                <span className="material-symbols-sharp text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Itemized List */}
          <div className="space-y-5 mb-10 relative z-10">
            <div className="flex justify-between items-center text-sm font-light">
              <span className="text-slate-600 dark:text-slate-300">
                Ceremonial Grade Base
              </span>
              <span className="font-medium text-brand-dark dark:text-white">GH₵ 40.00</span>
            </div>
            <div className="flex justify-between items-center text-sm font-light">
              <span className="text-slate-600 dark:text-slate-300">
                Oat Milk Layer
              </span>
              <span className="font-medium text-brand-dark dark:text-white">GH₵ 10.00</span>
            </div>
            <div className="flex justify-between items-center text-sm font-light">
              <span className="text-slate-600 dark:text-slate-300">
                Marine Collagen Boost
              </span>
              <span className="font-medium text-brand-dark dark:text-white">GH₵ 15.00</span>
            </div>
            <div className="flex justify-between items-center text-sm font-light pt-4 border-t border-gray-200 dark:border-white/10">
              <span className="text-slate-500 dark:text-slate-400">Delivery Fee</span>
              <span className="font-medium text-primary">Complimentary</span>
            </div>
          </div>

          {/* Total */}
          <div className="hidden lg:flex justify-between items-end pt-8 border-t border-gray-200 dark:border-white/10 relative z-10">
            <div>
              <span className="block text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold mb-1">Total to pay</span>
              <span className="text-xs text-slate-400 font-light">Incl. VAT</span>
            </div>
            <div className="text-right">
              <span className="block text-4xl font-serif font-bold text-brand-dark dark:text-white tracking-tight">GH₵ 65.00</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
