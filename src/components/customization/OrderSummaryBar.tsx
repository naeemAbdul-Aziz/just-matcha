import React from 'react';
import { Link } from 'react-router-dom';

interface OrderSummaryBarProps {
  base: string;
  collagen: boolean;
}

export const OrderSummaryBar: React.FC<OrderSummaryBarProps> = ({ base, collagen }) => {
  const basePrice = base === 'ceremonial' ? 45 : 35;
  const collagenPrice = collagen ? 12 : 0;
  const total = basePrice + collagenPrice;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-white/5 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
          <div className="flex flex-col">
            <span className="text-xs text-slate-500 uppercase tracking-wide">Total Estimate</span>
            <span className="text-2xl font-bold font-display">GH₵ {total}.00</span>
          </div>
          <div className="h-8 w-px bg-gray-200 dark:bg-white/10 hidden sm:block"></div>
          <div className="hidden sm:block text-sm text-slate-500">
            Ready in ~15 mins
          </div>
        </div>
        <div className="flex w-full sm:w-auto">
          <Link to="/checkout" className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full shadow-glow hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 min-w-[200px]">
            <span>Proceed to Payment</span>
            <span className="material-icons text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
