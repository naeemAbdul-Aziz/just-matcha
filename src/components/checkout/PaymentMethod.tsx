import React from 'react';

export const PaymentMethod: React.FC<{ 
  selected: string, 
  onSelect: (val: string) => void, 
  onNext: () => void 
}> = ({ selected, onSelect, onNext }) => {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="space-y-2 mb-8">
        <h2 className="text-3xl lg:text-4xl font-serif text-brand-dark dark:text-white">How shall we serve you?</h2>
        <p className="text-slate-500 dark:text-slate-400 font-light text-lg">Select your preferred ritual experience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Delivery Option */}
        <label className="relative cursor-pointer group">
          <input
            type="radio"
            name="fulfillment"
            className="peer sr-only"
            checked={selected === 'delivery'}
            onChange={() => onSelect('delivery')}
          />
          <div className="p-8 rounded-[2rem] border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 peer-checked:border-primary dark:peer-checked:border-primary peer-checked:bg-soft-green dark:peer-checked:bg-primary/10 transition-all duration-500 h-full flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1">
            <div className="flex justify-between items-start mb-12">
              <div className="w-14 h-14 rounded-full bg-cream dark:bg-white/10 flex items-center justify-center text-primary transition-transform duration-500 group-hover:scale-110">
                <span className="material-symbols-sharp text-3xl">local_shipping</span>
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-gray-300 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center transition-colors">
                <span className="material-symbols-sharp text-white text-sm opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all duration-300">check</span>
              </div>
            </div>
            <div>
              <span className="font-serif font-bold text-2xl text-brand-dark dark:text-white block mb-2">Doorstep Delivery</span>
              <span className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">Your matcha glow brought right to your door in pristine thermal packaging.</span>
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
          <div className="p-8 rounded-[2rem] border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 peer-checked:border-primary dark:peer-checked:border-primary peer-checked:bg-soft-green dark:peer-checked:bg-primary/10 transition-all duration-500 h-full flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1">
            <div className="flex justify-between items-start mb-12">
              <div className="w-14 h-14 rounded-full bg-cream dark:bg-white/10 flex items-center justify-center text-primary transition-transform duration-500 group-hover:scale-110">
                <span className="material-symbols-sharp text-3xl">storefront</span>
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-gray-300 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center transition-colors">
                <span className="material-symbols-sharp text-white text-sm opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all duration-300">check</span>
              </div>
            </div>
            <div>
              <span className="font-serif font-bold text-2xl text-brand-dark dark:text-white block mb-2">In-House Experience</span>
              <span className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">Join us at the counter. Collect your handcrafted cup personally.</span>
            </div>
          </div>
        </label>
      </div>

      <div className="pt-8">
        <button 
          onClick={onNext}
          className="group relative w-full lg:w-auto px-12 py-5 bg-brand-dark dark:bg-white text-white dark:text-brand-dark rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 inline-flex items-center justify-center gap-3"
        >
          <span className="absolute inset-0 w-full h-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></span>
          <span className="relative z-10 font-bold text-lg tracking-wide whitespace-nowrap group-hover:text-white transition-colors">
            {selected === 'delivery' ? 'Continue to Destination' : 'Complete Your Offering'}
          </span>
          <span className="relative z-10 material-symbols-sharp group-hover:translate-x-1 transition-transform group-hover:text-white">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
