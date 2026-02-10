import React, { useState } from 'react';

export const PaymentMethod: React.FC = () => {
  const [selected, setSelected] = useState('momo');

  return (
    <section aria-labelledby="payment-method" className="space-y-6 pt-4">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-8 h-8 rounded-full bg-primary/20 text-brand-dark dark:text-primary flex items-center justify-center font-bold text-sm">2</span>
        <h2 id="payment-method" className="text-xl font-bold text-brand-dark dark:text-white">Payment Method</h2>
        <div className="ml-auto flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded">
          <span className="material-icons text-sm">lock</span>
          Secure SSL
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* MoMo Option */}
        <label className="relative cursor-pointer group">
          <input
            type="radio"
            name="payment"
            className="peer sr-only"
            checked={selected === 'momo'}
            onChange={() => setSelected('momo')}
          />
          <div className="p-6 rounded-2xl border-2 border-slate-100 dark:border-white/5 bg-white dark:bg-white/5 peer-checked:border-primary peer-checked:bg-primary/5 hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-between shadow-sm hover:shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                <span className="material-icons">smartphone</span>
              </div>
              <div className="w-5 h-5 rounded-full border border-slate-300 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center transition-colors">
                <span className="material-icons text-white text-xs opacity-0 peer-checked:opacity-100">check</span>
              </div>
            </div>
            <div>
              <span className="font-bold text-lg text-brand-dark dark:text-white block">Mobile Money</span>
              <span className="text-sm text-slate-500 dark:text-slate-400">MTN, Vodafone, AirtelTigo</span>
            </div>
          </div>
        </label>

        {/* Cash Option */}
        <label className="relative cursor-pointer group">
          <input
            type="radio"
            name="payment"
            className="peer sr-only"
            checked={selected === 'cash'}
            onChange={() => setSelected('cash')}
          />
          <div className="p-6 rounded-2xl border-2 border-slate-100 dark:border-white/5 bg-white dark:bg-white/5 peer-checked:border-primary peer-checked:bg-primary/5 hover:border-primary/50 transition-all duration-300 h-full flex flex-col justify-between shadow-sm hover:shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <span className="material-icons">payments</span>
              </div>
              <div className="w-5 h-5 rounded-full border border-slate-300 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center transition-colors">
                <span className="material-icons text-white text-xs opacity-0 peer-checked:opacity-100">check</span>
              </div>
            </div>
            <div>
              <span className="font-bold text-lg text-brand-dark dark:text-white block">Cash on Delivery</span>
              <span className="text-sm text-slate-500 dark:text-slate-400">Pay when your drink arrives</span>
            </div>
          </div>
        </label>
      </div>
    </section>
  );
};
