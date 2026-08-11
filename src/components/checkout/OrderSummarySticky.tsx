import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../ui/Image';

export interface OrderSummaryProps {
  onAction?: () => void;
  actionText?: string;
  actionIcon?: string;
  isActionDisabled?: boolean;
}

export const OrderSummarySticky: React.FC<OrderSummaryProps> = ({ 
  onAction, 
  actionText, 
  actionIcon, 
  isActionDisabled 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const basePrice = 65; // 40 + 10 + 15
  const totalPrice = (basePrice * quantity).toFixed(2);

  return (
    <div className="lg:w-2/5 w-full relative z-20">
      <div className="sticky top-24">
        <div className="bg-white dark:bg-[#222] rounded-[2.5rem] p-8 md:p-10 border border-gray-200 dark:border-white/10 relative overflow-hidden">


          {/* Mobile Header */}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="lg:hidden flex justify-between items-center w-full mb-2"
          >
            <div className="text-left flex flex-row items-center gap-2">
              <span className="material-symbols-sharp text-primary text-2xl">shopping_cart</span>
              <span className="font-serif font-bold text-brand-dark dark:text-white">Show Order Summary</span>
              <span className={`material-symbols-sharp text-sm text-slate-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>expand_more</span>
            </div>
            <div className="text-right">
              <span className="text-xl font-serif font-bold text-brand-dark dark:text-white tracking-tight">GH₵ {totalPrice}</span>
            </div>
          </button>

          <div className={`${isExpanded ? 'block' : 'hidden'} lg:block pt-6 border-t border-gray-200 dark:border-white/10 lg:border-0 lg:pt-0 mt-6 lg:mt-0`}>
            <div className="hidden lg:flex items-center gap-3 mb-8 relative z-10">
              <span className="material-symbols-sharp text-primary text-xl">spa</span>
              <h2 className="text-2xl font-serif font-bold text-brand-dark dark:text-white">Your Ritual</h2>
            </div>

          {/* Product Visualization */}
          <div className="flex items-center gap-6 mb-10 relative z-10">
            <div className="w-28 h-36 rounded-2xl bg-gradient-to-b from-[#e3fce9] to-[#bbf7c8] dark:from-[#1a3821] dark:to-[#13ec37]/30 shadow-inner flex items-center justify-center relative overflow-hidden group">
              <Image
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

          {/* Quantity Selector */}
          <div className="flex justify-between items-center py-6 border-t border-gray-200 dark:border-white/10 relative z-10">
            <span className="text-sm font-bold text-brand-dark dark:text-white uppercase tracking-widest">Quantity</span>
            <div className="flex items-center gap-4 bg-gray-50 dark:bg-white/5 rounded-full px-4 py-2 border border-gray-200 dark:border-white/10">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-gray-400 hover:text-brand-dark dark:hover:text-white transition-colors flex items-center justify-center"
              >
                <span className="material-symbols-sharp text-sm">remove</span>
              </button>
              <span className="font-bold text-brand-dark dark:text-white w-4 text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="text-gray-400 hover:text-brand-dark dark:hover:text-white transition-colors flex items-center justify-center"
              >
                <span className="material-symbols-sharp text-sm">add</span>
              </button>
            </div>
          </div>

          {/* Total */}
          <div className="hidden lg:flex justify-between items-end pt-8 border-t border-gray-200 dark:border-white/10 relative z-10">
            <div>
              <span className="block text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold mb-1">Total to pay</span>
              <span className="text-xs text-slate-400 font-light">Incl. VAT</span>
            </div>
            <div className="text-right">
              <span className="block text-4xl font-serif font-bold text-brand-dark dark:text-white tracking-tight">GH₵ {totalPrice}</span>
            </div>
          </div>

          {/* Unified CTA Button (Desktop Only) */}
          {onAction && actionText && (
            <div className="hidden lg:block pt-8 mt-2 relative z-10">
              <button
                onClick={onAction}
                disabled={isActionDisabled}
                className={`w-full py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all active:scale-[0.98] ${
                  isActionDisabled 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-white/10 dark:text-white/30' 
                  : 'bg-brand-dark dark:bg-white text-white dark:text-brand-dark'
                }`}
              >
                {actionText}
                {actionIcon && <span className="material-symbols-sharp">{actionIcon}</span>}
              </button>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};
