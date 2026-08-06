import React from 'react';

export const GuestForm: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        {/* Phone Input */}
        <div className="relative group border-2 border-gray-200 dark:border-white/10 rounded-2xl bg-white dark:bg-black/5 focus-within:border-brand-dark dark:focus-within:border-white transition-colors">
          <input
            type="tel"
            id="phone"
            autoComplete="tel"
            className="block w-full px-4 pt-6 pb-2 text-base text-brand-dark dark:text-white bg-transparent border-none focus:outline-none focus:ring-0 peer placeholder-transparent"
            placeholder="Phone Number"
          />
          <label
            htmlFor="phone"
            className="absolute left-4 top-4 text-slate-400 dark:text-slate-500 font-medium transition-all duration-200 pointer-events-none origin-[0] peer-focus:-translate-y-2.5 peer-focus:scale-[0.85] peer-focus:text-brand-dark dark:peer-focus:text-white peer-not-placeholder-shown:-translate-y-2.5 peer-not-placeholder-shown:scale-[0.85] peer-not-placeholder-shown:text-brand-dark dark:peer-not-placeholder-shown:text-white"
          >
            Phone Number
          </label>
        </div>

        {/* City Input */}
        <div className="relative group border-2 border-gray-200 dark:border-white/10 rounded-2xl bg-white dark:bg-black/5 focus-within:border-brand-dark dark:focus-within:border-white transition-colors">
          <input
            type="text"
            id="city"
            autoComplete="address-level2"
            className="block w-full px-4 pt-6 pb-2 text-base text-brand-dark dark:text-white bg-transparent border-none focus:outline-none focus:ring-0 peer placeholder-transparent"
            placeholder="City / Area"
          />
          <label
            htmlFor="city"
            className="absolute left-4 top-4 text-slate-400 dark:text-slate-500 font-medium transition-all duration-200 pointer-events-none origin-[0] peer-focus:-translate-y-2.5 peer-focus:scale-[0.85] peer-focus:text-brand-dark dark:peer-focus:text-white peer-not-placeholder-shown:-translate-y-2.5 peer-not-placeholder-shown:scale-[0.85] peer-not-placeholder-shown:text-brand-dark dark:peer-not-placeholder-shown:text-white"
          >
            City / Area
          </label>
        </div>

        {/* Address Input */}
        <div className="relative group border-2 border-gray-200 dark:border-white/10 rounded-2xl bg-white dark:bg-black/5 focus-within:border-brand-dark dark:focus-within:border-white transition-colors">
          <input
            type="text"
            id="address"
            autoComplete="street-address"
            className="block w-full px-4 pt-6 pb-2 pr-12 text-base text-brand-dark dark:text-white bg-transparent border-none focus:outline-none focus:ring-0 peer placeholder-transparent"
            placeholder="Delivery Address & Landmark"
          />
          <label
            htmlFor="address"
            className="absolute left-4 top-4 text-slate-400 dark:text-slate-500 font-medium transition-all duration-200 pointer-events-none origin-[0] peer-focus:-translate-y-2.5 peer-focus:scale-[0.85] peer-focus:text-brand-dark dark:peer-focus:text-white peer-not-placeholder-shown:-translate-y-2.5 peer-not-placeholder-shown:scale-[0.85] peer-not-placeholder-shown:text-brand-dark dark:peer-not-placeholder-shown:text-white"
          >
            Delivery Address & Landmark
          </label>
          <span className="material-symbols-sharp absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none">location_on</span>
        </div>
      </div>
      <button 
        onClick={onNext}
        className="w-full bg-brand-dark dark:bg-white text-white dark:text-brand-dark font-bold text-base py-4 rounded-2xl hover:opacity-90 transition-opacity shadow-sm"
      >
        Continue to Fulfillment
      </button>
    </div>
  );
};
