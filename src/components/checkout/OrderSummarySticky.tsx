import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const OrderSummarySticky: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="lg:w-2/5 w-full relative">
      <div className="sticky top-24">
        <div className="bg-white dark:bg-slate-900 backdrop-blur-sm rounded-3xl p-5 md:p-6 lg:p-8 shadow-sm border border-slate-200 dark:border-white/10 relative overflow-hidden">
          
          {/* Mobile Header (Collapsible) */}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden flex justify-between items-center w-full"
          >
            <div className="text-left">
              <span className="block text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold mb-1">Your Custom Cup</span>
              <span className="text-2xl font-extrabold text-brand-dark dark:text-white tracking-tight">GH₵ 65.00</span>
            </div>
            <span className={`material-symbols-sharp transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>expand_more</span>
          </button>

          <div className={`pt-6 lg:pt-0 border-t border-gray-100 dark:border-white/10 mt-6 lg:border-0 lg:mt-0 ${isExpanded ? 'block' : 'hidden lg:block'}`}>
            <h2 className="hidden lg:block text-2xl font-bold text-brand-dark dark:text-white mb-6 relative z-10">Your Custom Cup</h2>

          {/* Product Visualization */}
          <div className="flex items-center gap-6 mb-8 relative z-10">
            <div className="w-24 h-32 rounded-xl bg-gradient-to-b from-[#e3fce9] to-[#bbf7c8] dark:from-[#1a3821] dark:to-[#13ec37]/30 shadow-inner flex items-center justify-center relative overflow-hidden group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA83jU4_vjUmuDIOGRD0nJg0RPNIrPpJjL6MFzBJjDelY0fqtnuCrrIGoXjfC_uzP3DMiFsJmuThpkLqo1IVRnqC4OZ5Bbq2pu9dusG-9FQBhKssjGFJgoHjL2R0RKcmzupNJdb6kaghCViuXIV0QwcQmNJ2J2_Y8jSCfMr25Xn0bbCCU5SsPcT20lJ7eAYHjXbOWNRvraz87gGJfiGYSp_rPjn5llpA5q9MR2X7EwzMUDsIDZaZ0jrOEU9RckipH70PjPvmp80Bhc"
                alt="Glass of iced matcha latte with milk layers"
                className="w-full h-full object-cover opacity-90 mix-blend-multiply dark:mix-blend-normal"
                data-alt="Close up of a layered matcha drink in a glass"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-brand-dark dark:text-white">Iced Matcha Latte</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Large Size (16oz)</p>
              <Link to="/customize" className="text-xs font-semibold text-brand-dark dark:text-primary underline decoration-primary/50 decoration-2 underline-offset-2 hover:decoration-primary transition-all">Edit layers</Link>
            </div>
          </div>

          {/* Itemized List */}
          <div className="space-y-4 mb-8 relative z-10">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Ceremonial Grade Base
              </span>
              <span className="font-medium text-brand-dark dark:text-white">GH₵ 40.00</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                Oat Milk Layer
              </span>
              <span className="font-medium text-brand-dark dark:text-white">GH₵ 10.00</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-300"></span>
                Collagen Boost
              </span>
              <span className="font-medium text-brand-dark dark:text-white">GH₵ 15.00</span>
            </div>
            <div className="flex justify-between items-center text-sm pt-2 border-t border-brand-dark/10 dark:border-white/10">
              <span className="text-slate-500 dark:text-slate-400">Delivery Fee</span>
              <span className="font-medium text-slate-500 dark:text-slate-400">Free</span>
            </div>
          </div>

          {/* Total */}
          <div className="hidden lg:flex justify-between items-end pt-6 border-t border-brand-dark/10 dark:border-white/10 relative z-10">
            <div>
              <span className="block text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold mb-1">Total to pay</span>
              <span className="text-xs text-slate-400">Incl. VAT</span>
            </div>
            <div className="text-right">
              <span className="block text-3xl font-extrabold text-brand-dark dark:text-white tracking-tight">GH₵ 65.00</span>
            </div>
          </div>
          </div>
        </div>

        {/* Mobile Button placeholder, but actual button is pinned at page level */}
      </div>
    </div>
  );
};
