import React from 'react';

export const GuestForm: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="space-y-2 mb-8">
        <h2 className="text-3xl lg:text-4xl font-serif text-brand-dark dark:text-white">Where to deliver your glow</h2>
        <p className="text-slate-500 dark:text-slate-400 font-light text-lg">We need a few details to reach you.</p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Phone Input */}
        <div className="relative group">
          <input
            type="tel"
            id="phone"
            autoComplete="tel"
            className="block w-full px-8 pt-8 pb-4 text-lg text-brand-dark dark:text-white bg-white/60 dark:bg-black/20 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-3xl focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-black/40 peer placeholder-transparent transition-all shadow-sm"
            placeholder="Phone Number"
          />
          <label
            htmlFor="phone"
            className="absolute left-8 top-6 text-slate-400 dark:text-slate-500 font-medium transition-all duration-300 pointer-events-none origin-[0] peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-primary peer-not-placeholder-shown:-translate-y-3 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:text-slate-400"
          >
            Phone Number
          </label>
        </div>

        {/* City Input */}
        <div className="relative group">
          <input
            type="text"
            id="city"
            autoComplete="address-level2"
            className="block w-full px-8 pt-8 pb-4 text-lg text-brand-dark dark:text-white bg-white/60 dark:bg-black/20 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-3xl focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-black/40 peer placeholder-transparent transition-all shadow-sm"
            placeholder="City / Area"
          />
          <label
            htmlFor="city"
            className="absolute left-8 top-6 text-slate-400 dark:text-slate-500 font-medium transition-all duration-300 pointer-events-none origin-[0] peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-primary peer-not-placeholder-shown:-translate-y-3 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:text-slate-400"
          >
            City / Area
          </label>
        </div>

        {/* Address Input */}
        <div className="relative group">
          <input
            type="text"
            id="address"
            autoComplete="street-address"
            className="block w-full px-8 pt-8 pb-4 pr-16 text-lg text-brand-dark dark:text-white bg-white/60 dark:bg-black/20 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-3xl focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-black/40 peer placeholder-transparent transition-all shadow-sm"
            placeholder="Delivery Address & Landmark"
          />
          <label
            htmlFor="address"
            className="absolute left-8 top-6 text-slate-400 dark:text-slate-500 font-medium transition-all duration-300 pointer-events-none origin-[0] peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-primary peer-not-placeholder-shown:-translate-y-3 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:text-slate-400"
          >
            Delivery Address & Landmark
          </label>
          <span className="material-symbols-sharp absolute right-8 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none">location_on</span>
        </div>
      </div>
      
      <div className="pt-8">
        <button 
          onClick={onNext}
          className="group relative w-full lg:w-auto px-12 py-5 bg-brand-dark dark:bg-white text-white dark:text-brand-dark rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 inline-flex items-center justify-center gap-3"
        >
          <span className="absolute inset-0 w-full h-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></span>
          <span className="relative z-10 font-bold text-lg tracking-wide whitespace-nowrap group-hover:text-white transition-colors">
            Continue to Payment
          </span>
          <span className="relative z-10 material-symbols-sharp group-hover:translate-x-1 transition-transform group-hover:text-white">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
