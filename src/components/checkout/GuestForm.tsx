import React from 'react';

export const GuestForm: React.FC = () => {
  return (
    <section aria-labelledby="contact-info" className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-brand-dark dark:text-white flex items-center justify-center font-bold text-sm">1</span>
        <h2 id="contact-info" className="text-xl font-bold text-brand-dark dark:text-white">Contact & Delivery</h2>
      </div>
      <div className="bg-white dark:bg-black/5 border-2 border-gray-200 dark:border-white/10 rounded-[2rem] overflow-hidden flex flex-col transition-colors">
        {/* Name Input */}
        <div className="relative group border-b-2 border-gray-100 dark:border-white/5 focus-within:bg-gray-50/50 dark:focus-within:bg-white/5 transition-colors">
          <input
            type="text"
            id="name"
            className="block w-full px-6 pt-7 pb-3 text-base text-brand-dark dark:text-white bg-transparent border-none focus:outline-none focus:ring-0 peer placeholder-transparent"
            placeholder="Full Name"
          />
          <label
            htmlFor="name"
            className="absolute left-6 top-5 text-slate-400 dark:text-slate-500 font-medium transition-all duration-200 pointer-events-none origin-[0] peer-focus:-translate-y-3 peer-focus:scale-[0.8] peer-focus:text-brand-dark dark:peer-focus:text-white peer-not-placeholder-shown:-translate-y-3 peer-not-placeholder-shown:scale-[0.8] peer-not-placeholder-shown:text-brand-dark dark:peer-not-placeholder-shown:text-white"
          >
            Full Name
          </label>
        </div>

        {/* Phone Input */}
        <div className="relative group border-b-2 border-gray-100 dark:border-white/5 focus-within:bg-gray-50/50 dark:focus-within:bg-white/5 transition-colors">
          <input
            type="tel"
            id="phone"
            className="block w-full px-6 pt-7 pb-3 text-base text-brand-dark dark:text-white bg-transparent border-none focus:outline-none focus:ring-0 peer placeholder-transparent"
            placeholder="Phone Number"
          />
          <label
            htmlFor="phone"
            className="absolute left-6 top-5 text-slate-400 dark:text-slate-500 font-medium transition-all duration-200 pointer-events-none origin-[0] peer-focus:-translate-y-3 peer-focus:scale-[0.8] peer-focus:text-brand-dark dark:peer-focus:text-white peer-not-placeholder-shown:-translate-y-3 peer-not-placeholder-shown:scale-[0.8] peer-not-placeholder-shown:text-brand-dark dark:peer-not-placeholder-shown:text-white"
          >
            Phone Number
          </label>
        </div>

        {/* City Input */}
        <div className="relative group border-b-2 border-gray-100 dark:border-white/5 focus-within:bg-gray-50/50 dark:focus-within:bg-white/5 transition-colors">
          <input
            type="text"
            id="city"
            className="block w-full px-6 pt-7 pb-3 text-base text-brand-dark dark:text-white bg-transparent border-none focus:outline-none focus:ring-0 peer placeholder-transparent"
            placeholder="City / Area"
          />
          <label
            htmlFor="city"
            className="absolute left-6 top-5 text-slate-400 dark:text-slate-500 font-medium transition-all duration-200 pointer-events-none origin-[0] peer-focus:-translate-y-3 peer-focus:scale-[0.8] peer-focus:text-brand-dark dark:peer-focus:text-white peer-not-placeholder-shown:-translate-y-3 peer-not-placeholder-shown:scale-[0.8] peer-not-placeholder-shown:text-brand-dark dark:peer-not-placeholder-shown:text-white"
          >
            City / Area
          </label>
        </div>

        {/* Address Input */}
        <div className="relative group focus-within:bg-gray-50/50 dark:focus-within:bg-white/5 transition-colors">
          <input
            type="text"
            id="address"
            className="block w-full px-6 pt-7 pb-3 text-base text-brand-dark dark:text-white bg-transparent border-none focus:outline-none focus:ring-0 peer placeholder-transparent"
            placeholder="Delivery Address & Landmark"
          />
          <label
            htmlFor="address"
            className="absolute left-6 top-5 text-slate-400 dark:text-slate-500 font-medium transition-all duration-200 pointer-events-none origin-[0] peer-focus:-translate-y-3 peer-focus:scale-[0.8] peer-focus:text-brand-dark dark:peer-focus:text-white peer-not-placeholder-shown:-translate-y-3 peer-not-placeholder-shown:scale-[0.8] peer-not-placeholder-shown:text-brand-dark dark:peer-not-placeholder-shown:text-white"
          >
            Delivery Address & Landmark
          </label>
          <span className="material-symbols-sharp absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none">location_on</span>
        </div>
      </div>
    </section>
  );
};
