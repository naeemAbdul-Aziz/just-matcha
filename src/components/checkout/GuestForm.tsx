import React from 'react';

export const GuestForm: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="space-y-8">
      <div className="space-y-2 mb-8">
        <h2 className="text-3xl lg:text-4xl font-serif text-brand-dark dark:text-white">Delivery Details</h2>
        <p className="text-slate-500 dark:text-slate-400 font-light text-lg">We need a few details to reach you.</p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Phone Input */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 ml-4">Phone Number</label>
          <input
            type="tel"
            id="phone"
            autoComplete="tel"
            className="block w-full px-6 py-4 text-lg text-brand-dark dark:text-white bg-white dark:bg-[#222] border border-gray-200 dark:border-white/10 rounded-3xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="e.g. +233 24 123 4567"
          />
        </div>

        {/* City Input */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 ml-4">City / Area</label>
          <input
            type="text"
            id="city"
            autoComplete="address-level2"
            className="block w-full px-6 py-4 text-lg text-brand-dark dark:text-white bg-white dark:bg-[#222] border border-gray-200 dark:border-white/10 rounded-3xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="e.g. East Legon"
          />
        </div>

        {/* Address Input */}
        <div className="relative">
          <label htmlFor="address" className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 ml-4">Delivery Address & Landmark</label>
          <input
            type="text"
            id="address"
            autoComplete="street-address"
            className="block w-full px-6 py-4 pr-14 text-lg text-brand-dark dark:text-white bg-white dark:bg-[#222] border border-gray-200 dark:border-white/10 rounded-3xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="e.g. 123 Matcha Ave, Near the Mall"
          />
          <span className="material-symbols-sharp absolute right-5 top-[42px] text-slate-400 pointer-events-none">location_on</span>
        </div>
      </div>
      
      <div className="pt-8 flex justify-end">
        <button 
          onClick={onNext}
          className="w-auto px-6 py-2.5 bg-brand-dark dark:bg-white text-white dark:text-brand-dark rounded-full font-semibold text-sm hover:opacity-90 transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-sm"
        >
          Review Order
          <span className="material-symbols-sharp text-lg">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
