import React from 'react';
import { SelectionCard } from '../common/SelectionCard';

export const PaymentMethod: React.FC<{ 
  selected: string, 
  onSelect: (val: string) => void, 
  onNext: () => void 
}> = ({ selected, onSelect, onNext }) => {
  return (
    <div className="space-y-8">
      <div className="space-y-2 mb-8">
        <h2 className="text-3xl lg:text-4xl font-serif text-brand-dark dark:text-white">How shall we serve you?</h2>
        <p className="text-slate-500 dark:text-slate-400 font-light text-lg">Select your preferred ritual experience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SelectionCard
          title="Doorstep Delivery"
          description="Your matcha glow brought right to your door in pristine thermal packaging."
          selected={selected === 'delivery'}
          onSelect={() => onSelect('delivery')}
        />
        <SelectionCard
          title="In-House Experience"
          description="Join us at the counter. Collect your handcrafted cup personally."
          selected={selected === 'pickup'}
          onSelect={() => onSelect('pickup')}
        />
      </div>

      <div className="pt-8 flex justify-end">
        <button 
          onClick={onNext}
          className="w-full sm:w-auto px-8 py-4 bg-soft-green dark:bg-primary text-brand-dark dark:text-white rounded-full font-semibold text-[17px] hover:opacity-90 transition-all pointer-events-auto active:scale-[0.98] flex items-center justify-center gap-3 shadow-sm"
        >
          {selected === 'delivery' ? 'Continue to Destination' : 'Complete Your Offering'}
          <span className="material-symbols-sharp text-xl">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
