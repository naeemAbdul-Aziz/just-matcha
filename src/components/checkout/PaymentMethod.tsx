import React from 'react';

export const PaymentMethod: React.FC<{ 
  selected: string, 
  onSelect: (val: string) => void, 
  onNext: () => void 
}> = ({ selected, onSelect, onNext }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Delivery Option */}
        <label className="relative cursor-pointer group">
          <input
            type="radio"
            name="fulfillment"
            className="peer sr-only"
            checked={selected === 'delivery'}
            onChange={() => onSelect('delivery')}
          />
          <div className="p-4 md:p-5 rounded-3xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 peer-checked:border-brand-dark dark:peer-checked:border-white peer-checked:bg-[#E4E3DD] dark:peer-checked:bg-white/10 transition-all duration-300 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-brand-dark dark:text-white">
                <span className="material-symbols-sharp">local_shipping</span>
              </div>
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-brand-dark dark:peer-checked:border-white peer-checked:bg-brand-dark dark:peer-checked:bg-white flex items-center justify-center transition-colors">
                <span className="material-symbols-sharp text-white dark:text-brand-dark text-xs opacity-0 peer-checked:opacity-100">check</span>
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
            onChange={() => onSelect('pickup')}
          />
          <div className="p-4 md:p-5 rounded-3xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 peer-checked:border-brand-dark dark:peer-checked:border-white peer-checked:bg-[#E4E3DD] dark:peer-checked:bg-white/10 transition-all duration-300 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-brand-dark dark:text-white">
                <span className="material-symbols-sharp">storefront</span>
              </div>
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-brand-dark dark:peer-checked:border-white peer-checked:bg-brand-dark dark:peer-checked:bg-white flex items-center justify-center transition-colors">
                <span className="material-symbols-sharp text-white dark:text-brand-dark text-xs opacity-0 peer-checked:opacity-100">check</span>
              </div>
            </div>
            <div>
              <span className="font-bold text-lg text-brand-dark dark:text-white block">Pick-up / Dine-in</span>
              <span className="text-sm text-slate-500 dark:text-slate-400">Collect at the counter</span>
            </div>
          </div>
        </label>
      </div>
      <button 
        onClick={onNext}
        className="w-full bg-brand-dark dark:bg-white text-white dark:text-brand-dark font-bold text-base py-4 rounded-2xl hover:opacity-90 transition-opacity shadow-sm"
      >
        {selected === 'delivery' ? 'Continue to Delivery Details' : 'Continue to Payment'}
      </button>
    </div>
  );
};
