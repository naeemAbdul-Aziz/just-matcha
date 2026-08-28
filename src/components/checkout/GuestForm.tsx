import React from 'react';

export interface GuestFormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  address: string;
}

interface GuestFormProps {
  data: GuestFormData;
  onChange: (data: GuestFormData) => void;
  onNext: () => void;
}

export const GuestForm: React.FC<GuestFormProps> = ({ data, onChange, onNext }) => {
  const update = (field: keyof GuestFormData) => (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange({ ...data, [field]: e.target.value });

  const isValid = data.email.trim() !== '' && data.phone.trim() !== '' && data.address.trim() !== '';

  return (
    <div className="space-y-8">
      <div className="space-y-2 mb-8">
        <h2 className="text-3xl lg:text-4xl font-serif text-brand-dark dark:text-white">Delivery Details</h2>
        <p className="text-slate-500 dark:text-slate-400 font-light text-lg">We need a few details to reach you.</p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Name Input */}
        <div>
          <label htmlFor="gf-name" className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 ml-4">Your Name</label>
          <input
            type="text"
            id="gf-name"
            autoComplete="name"
            value={data.name}
            onChange={update('name')}
            className="block w-full px-6 py-4 text-lg text-brand-dark dark:text-white bg-white dark:bg-[#222] border border-gray-200 dark:border-white/10 rounded-3xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="e.g. Ama"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="gf-email" className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 ml-4">Email Address <span className="text-red-400">*</span></label>
          <input
            type="email"
            id="gf-email"
            autoComplete="email"
            value={data.email}
            onChange={update('email')}
            className="block w-full px-6 py-4 text-lg text-brand-dark dark:text-white bg-white dark:bg-[#222] border border-gray-200 dark:border-white/10 rounded-3xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="e.g. ama@example.com"
          />
        </div>

        {/* Phone Input */}
        <div>
          <label htmlFor="gf-phone" className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 ml-4">Phone Number <span className="text-red-400">*</span></label>
          <input
            type="tel"
            id="gf-phone"
            autoComplete="tel"
            value={data.phone}
            onChange={update('phone')}
            className="block w-full px-6 py-4 text-lg text-brand-dark dark:text-white bg-white dark:bg-[#222] border border-gray-200 dark:border-white/10 rounded-3xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="e.g. +233 24 123 4567"
          />
        </div>

        {/* City Input */}
        <div>
          <label htmlFor="gf-city" className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 ml-4">City / Area</label>
          <input
            type="text"
            id="gf-city"
            autoComplete="address-level2"
            value={data.city}
            onChange={update('city')}
            className="block w-full px-6 py-4 text-lg text-brand-dark dark:text-white bg-white dark:bg-[#222] border border-gray-200 dark:border-white/10 rounded-3xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="e.g. East Legon"
          />
        </div>

        {/* Address Input */}
        <div className="relative">
          <label htmlFor="gf-address" className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 ml-4">Delivery Address &amp; Landmark <span className="text-red-400">*</span></label>
          <input
            type="text"
            id="gf-address"
            autoComplete="street-address"
            value={data.address}
            onChange={update('address')}
            className="block w-full px-6 py-4 pr-14 text-lg text-brand-dark dark:text-white bg-white dark:bg-[#222] border border-gray-200 dark:border-white/10 rounded-3xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="e.g. 123 Matcha Ave, Near the Mall"
          />
          <span className="material-symbols-sharp absolute right-5 top-[58px] text-slate-400 pointer-events-none">location_on</span>
        </div>
      </div>
      
      <div className="pt-8 flex justify-end">
        <button 
          onClick={onNext}
          disabled={!isValid}
          className={`w-auto px-6 py-2.5 rounded-full font-semibold text-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-sm ${
            isValid
              ? 'bg-brand-dark dark:bg-white text-white dark:text-brand-dark hover:opacity-90'
              : 'bg-gray-200 dark:bg-white/10 text-gray-400 dark:text-white/30 cursor-not-allowed'
          }`}
        >
          Review Order
          <span className="material-symbols-sharp text-lg">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
