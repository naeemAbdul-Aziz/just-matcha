import React from 'react';

export const GuestForm: React.FC = () => {
  return (
    <section aria-labelledby="contact-info" className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-8 h-8 rounded-full bg-primary/20 text-brand-dark dark:text-primary flex items-center justify-center font-bold text-sm">1</span>
        <h2 id="contact-info" className="text-xl font-bold text-brand-dark dark:text-white">Contact & Delivery</h2>
      </div>
      <div className="space-y-5">
        {/* Name Input */}
        <div className="relative group">
          <input
            type="text"
            id="name"
            className="block w-full px-4 py-4 text-brand-dark dark:text-white bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent peer transition-all shadow-sm placeholder-transparent"
            placeholder="Full Name"
          />
          <label
            htmlFor="name"
            className="absolute left-4 top-4 text-slate-400 dark:text-slate-500 transition-all duration-200 pointer-events-none origin-[0] peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-brand-dark peer-not-placeholder-shown:-translate-y-3 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:text-brand-dark"
          >
            Full Name
          </label>
        </div>

        {/* Phone & City Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="relative group">
            <input
              type="tel"
              id="phone"
              className="block w-full px-4 py-4 text-brand-dark dark:text-white bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent peer transition-all shadow-sm placeholder-transparent"
              placeholder="Phone Number"
              defaultValue="+233 "
            />
            <label
              htmlFor="phone"
              className="absolute left-4 top-4 text-slate-400 dark:text-slate-500 transition-all duration-200 pointer-events-none origin-[0] peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-brand-dark peer-not-placeholder-shown:-translate-y-3 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:text-brand-dark"
            >
              Phone Number
            </label>
          </div>
          <div className="relative group">
            <input
              type="text"
              id="city"
              className="block w-full px-4 py-4 text-brand-dark dark:text-white bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent peer transition-all shadow-sm placeholder-transparent"
              placeholder="City / Area"
            />
            <label
              htmlFor="city"
              className="absolute left-4 top-4 text-slate-400 dark:text-slate-500 transition-all duration-200 pointer-events-none origin-[0] peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-brand-dark peer-not-placeholder-shown:-translate-y-3 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:text-brand-dark"
            >
              City / Area
            </label>
          </div>
        </div>

        {/* Address/Landmark Input */}
        <div className="relative group">
          <input
            type="text"
            id="address"
            className="block w-full px-4 py-4 text-brand-dark dark:text-white bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent peer transition-all shadow-sm placeholder-transparent"
            placeholder="Delivery Address & Landmark"
          />
          <label
            htmlFor="address"
            className="absolute left-4 top-4 text-slate-400 dark:text-slate-500 transition-all duration-200 pointer-events-none origin-[0] peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-brand-dark peer-not-placeholder-shown:-translate-y-3 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:text-brand-dark"
          >
            Delivery Address & Landmark
          </label>
          <span className="material-icons absolute right-4 top-4 text-slate-300 pointer-events-none">location_on</span>
        </div>
      </div>
    </section>
  );
};
