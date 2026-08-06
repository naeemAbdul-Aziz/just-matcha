import React, { useState } from 'react';

export const PaymentMethod: React.FC = () => {
  const [selected, setSelected] = useState('delivery');

  return (
    <section aria-labelledby="payment-method" className="space-y-6 pt-4">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-brand-dark dark:text-white flex items-center justify-center font-bold text-sm">2</span>
        <h2 id="payment-method" className="text-xl font-bold text-brand-dark dark:text-white">Fulfillment Method</h2>
        <div className="ml-auto flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded">
          <span className="material-symbols-sharp text-sm">lock</span>
          Secure SSL
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Delivery Option */}
        <label className="relative cursor-pointer group">
          <input
            type="radio"
            name="fulfillment"
            className="peer sr-only"
            checked={selected === 'delivery'}
            onChange={() => setSelected('delivery')}
          />
          <div className="p-4 md:p-5 rounded-3xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 peer-checked:border-primary peer-checked:bg-gray-50 dark:peer-checked:bg-white/10 transition-all duration-300 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-brand-dark dark:text-white">
                <span className="material-symbols-sharp">local_shipping</span>
              </div>
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center transition-colors">
                <span className="material-symbols-sharp text-white text-xs opacity-0 peer-checked:opacity-100">check</span>
              </div>
            </div>
            <div>
              <span className="font-bold text-lg text-brand-dark dark:text-white block">Delivery</span>
              <span className="text-sm text-slate-500 dark:text-slate-400">Right to your doorstep</span>
            </div>
          </div>
        </label>

        {/* Dine In / Pick-up Option */}
        <label className="relative cursor-pointer group">
          <input
            type="radio"
            name="fulfillment"
            className="peer sr-only"
            checked={selected === 'pickup'}
            onChange={() => setSelected('pickup')}
          />
          <div className="p-4 md:p-5 rounded-3xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 peer-checked:border-primary peer-checked:bg-gray-50 dark:peer-checked:bg-white/10 transition-all duration-300 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-brand-dark dark:text-white">
                <span className="material-symbols-sharp">storefront</span>
              </div>
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center transition-colors">
                <span className="material-symbols-sharp text-white text-xs opacity-0 peer-checked:opacity-100">check</span>
              </div>
            </div>
            <div>
              <span className="font-bold text-lg text-brand-dark dark:text-white block">Pick-up / Dine-in</span>
              <span className="text-sm text-slate-500 dark:text-slate-400">Collect at the counter</span>
            </div>
          </div>
        </label>
      </div>
    </section>
  );
};
