import React from 'react';
import { Link } from 'react-router-dom';

export const OrderSummarySticky: React.FC = () => {
  return (
    <div className="lg:col-span-5 relative">
      <div className="sticky top-8">
        <div className="bg-primary/10 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-luxury border border-primary/20 relative overflow-hidden">
          {/* Decorative gradient blob */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

          <h2 className="text-2xl font-bold text-brand-dark dark:text-white mb-6 relative z-10">Your Custom Cup</h2>

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
          <div className="flex justify-between items-end pt-6 border-t border-brand-dark/10 dark:border-white/10 relative z-10">
            <div>
              <span className="block text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold mb-1">Total to pay</span>
              <span className="text-xs text-slate-400">Incl. VAT</span>
            </div>
            <div className="text-right">
              <span className="block text-3xl font-extrabold text-brand-dark dark:text-white tracking-tight">GH₵ 65.00</span>
            </div>
          </div>
        </div>

        {/* Mobile Button (Duplicate for better UX on mobile stacking) */}
        <div className="pt-8 lg:hidden pb-8">
          <Link to="/success" className="w-full bg-brand-dark hover:bg-black text-white font-bold text-lg py-5 rounded-xl shadow-luxury flex items-center justify-center gap-2 transition-all">
            <span>Complete Order</span>
            <span className="material-icons">arrow_forward</span>
          </Link>
          <p className="text-center text-xs text-slate-400 mt-4">By placing this order, you agree to our Terms of Service.</p>
        </div>
      </div>
    </div>
  );
};
