import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectionCard } from '../common/SelectionCard';
import { MENU_CATEGORIES, getItemsByCategory, getMenuItemById, formatPrice, type MenuCategory } from '../../lib/menuData';

interface CustomizerControlsProps {
  customerName: string;
  setCustomerName: (name: string) => void;
  selectedDrinkId: string;
  setSelectedDrinkId: (id: string) => void;
  milkType: string;
  setMilkType: (milk: string) => void;
  matchaIntensity: number;
  setMatchaIntensity: (intensity: number) => void;
  sweetener: string | null;
  setSweetener: (sweetener: string | null) => void;
  sweetnessLevel: number;
  setSweetnessLevel: (level: number) => void;
  boosts: Record<string, boolean>;
  setBoosts: (boosts: Record<string, boolean>) => void;
  cupMessage: string;
  setCupMessage: (msg: string) => void;
}

const DiscreteSlider = ({ value, onChange, steps }: { value: number, onChange: (val: number) => void, steps: {val: number, label: string}[] }) => {
  return (
    <div className="relative w-full py-6 mt-4 mb-6">
      {/* Track */}
      <div className="absolute top-1/2 left-0 w-full h-1.5 bg-gray-200 dark:bg-white/10 rounded-full -translate-y-1/2 overflow-hidden">
        {/* Tick Marks (Visual Indicators on Track) */}
        <div className="absolute w-full h-full flex justify-between px-1">
          {steps.map(step => (
            <div key={`tick-${step.val}`} className="h-full w-0.5 bg-white/50 dark:bg-black/50 z-0"></div>
          ))}
        </div>
      </div>
      {/* Active Fill */}
      <div className="absolute top-1/2 left-0 h-1.5 bg-primary rounded-full -translate-y-1/2 transition-all duration-500 ease-out" style={{ width: `${value}%` }}></div>
      
      <div className="relative flex justify-between">
        {steps.map(step => (
          <div key={step.val} className="flex flex-col items-center gap-3 cursor-pointer group" onClick={() => onChange(step.val)}>
            <div className={`w-5 h-5 rounded-full border-4 transition-all duration-300 z-10 
              ${value >= step.val 
                ? 'bg-primary border-white dark:border-black shadow-md' 
                : 'bg-white dark:bg-[#222] border-gray-300 dark:border-gray-600'} 
              group-hover:scale-125`}
            ></div>
            <span className={`text-[10px] sm:text-[11px] uppercase tracking-widest font-extrabold transition-colors duration-300 absolute top-8 whitespace-nowrap
              ${value === step.val ? 'text-primary dark:text-primary' : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-600'}
            `}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CustomizerControls: React.FC<CustomizerControlsProps> = ({
  customerName, setCustomerName,
  selectedDrinkId, setSelectedDrinkId,
  milkType, setMilkType,
  matchaIntensity, setMatchaIntensity,
  sweetener, setSweetener,
  sweetnessLevel, setSweetnessLevel,
  boosts, setBoosts,
  cupMessage, setCupMessage
}) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('signature');
  const selectedDrink = getMenuItemById(selectedDrinkId);

  return (
    <div className="w-full h-full flex flex-col relative font-display">
      
      {/* Scrollable Content */}
      <div className="flex-grow overflow-y-auto pb-32 lg:pb-48 scroll-smooth relative" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        
        {/* Sticky Glass Header */}
        <div className="sticky top-0 z-40 w-full px-6 sm:px-8 lg:px-12 pt-8 lg:pt-12 pb-6 mb-8 bg-[#FDFBF7]/85 dark:bg-[#111111]/85 backdrop-blur-xl border-b border-black/5 dark:border-white/5 transition-colors duration-1000">
          <h2 className="text-4xl lg:text-5xl font-serif text-text-dark dark:text-white tracking-tight">Customize</h2>
        </div>

        <div className="px-6 sm:px-8 lg:px-12">
          {/* Name */}
        <section className="mb-16 lg:mb-20">
          <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-wider mb-4">Share Your Name</h3>
          <div className="relative">
            <input 
              type="text" 
              placeholder="e.g. Jules" 
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full bg-transparent border-b-2 border-gray-200 dark:border-white/20 px-2 py-3 text-2xl text-text-dark dark:text-white placeholder-gray-300 dark:placeholder-gray-700 focus:border-text-dark dark:focus:border-white outline-none transition-colors font-serif italic"
            />
          </div>
        </section>

        {/* Select Your Drink — Categorized Menu */}
        <section className="mb-16 lg:mb-20">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-wider">Select Your Drink</h3>
          </div>

          {/* Category Tabs */}
          <div className="flex overflow-x-auto gap-2 pb-4 snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden mb-6" style={{ scrollbarWidth: 'none' }}>
            {MENU_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`snap-center flex-shrink-0 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 border shadow-sm whitespace-nowrap ${
                  activeCategory === cat.id 
                    ? 'bg-soft-green dark:bg-primary border-primary text-brand-dark dark:text-white shadow-md'
                    : 'bg-white dark:bg-[#222] border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                {cat.emoji} {cat.label}
              </button>
            ))}
          </div>

          {/* Drink Cards for Active Category */}
          <div className="flex flex-col gap-4">
            {getItemsByCategory(activeCategory).map(item => (
              <SelectionCard
                key={item.id}
                title={item.name}
                description={item.description}
                price={formatPrice(item.price)}
                selected={selectedDrinkId === item.id}
                onSelect={() => setSelectedDrinkId(item.id)}
              />
            ))}
          </div>

          {/* Selected Drink Summary */}
          {selectedDrink && (
            <div className="mt-6 p-4 rounded-2xl bg-soft-green/30 dark:bg-primary/10 border border-primary/20 animate-fade-in-up">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">Selected</span>
                  <p className="text-lg font-serif font-bold text-brand-dark dark:text-white">{selectedDrink.name}</p>
                </div>
                <span className="text-xl font-bold text-brand-dark dark:text-white">{formatPrice(selectedDrink.price)}</span>
              </div>
            </div>
          )}
        </section>

        {/* Sweeteners */}
        <section className="mb-16 lg:mb-20">
          <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-wider mb-6">Sweeteners</h3>
          <div className="flex overflow-x-auto gap-3 pb-4 snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
            {[
              { id: 'honey', name: 'Honey' },
              { id: 'maple_syrup', name: 'Maple Syrup' },
              { id: 'date_syrup', name: 'Date Syrup' },
              { id: 'vanilla', name: 'Vanilla' },
              { id: 'caramel', name: 'Caramel' },
              { id: 'biscoff', name: 'Biscoff' },
              { id: 'white_chocolate', name: 'White Chocolate' }
            ].map(s => (
              <button
                key={s.id}
                onClick={() => setSweetener(sweetener === s.id ? null : s.id)}
                className={`snap-center flex-shrink-0 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 border shadow-sm ${
                  sweetener === s.id 
                    ? 'bg-soft-green dark:bg-primary border-primary text-brand-dark dark:text-white shadow-md'
                    : 'bg-white dark:bg-[#222] border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </section>

        {/* Sweetness Level */}
        {sweetener && (
          <section className="mb-20 animate-fade-in-up">
            <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-wider mb-4 flex items-center justify-between">
              Sweetness Level
              <span className="text-sm font-medium text-black/50 dark:text-white/50">{sweetnessLevel}%</span>
            </h3>
            <DiscreteSlider 
              value={sweetnessLevel} 
              onChange={setSweetnessLevel} 
              steps={[
                {val: 0, label: 'Barely'},
                {val: 25, label: 'Hint'},
                {val: 50, label: 'Standard'},
                {val: 75, label: 'Sweeter'},
                {val: 100, label: 'Extra'}
              ]}
            />
          </section>
        )}

        {/* Milk Options */}
        <section className="mb-16 lg:mb-20">
          <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-wider mb-6">Milk & Creamers</h3>
          <div className="flex overflow-x-auto gap-3 pb-4 snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
            {[
              { id: 'whole', name: 'Whole Milk' },
              { id: 'skim', name: 'Skim' },
              { id: 'oat', name: 'Oat Milk' },
              { id: 'almond', name: 'Almond Milk' },
              { id: 'coconut', name: 'Coconut Milk' },
              { id: 'water', name: 'Water (Clear)' }
            ].map(m => (
              <button
                key={m.id}
                onClick={() => setMilkType(m.id)}
                className={`snap-center flex-shrink-0 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 border shadow-sm ${
                  milkType === m.id 
                    ? 'bg-soft-green dark:bg-primary border-primary text-brand-dark dark:text-white shadow-md'
                    : 'bg-white dark:bg-[#222] border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>
        </section>

        {/* Intensity */}
        <section className="mb-20">
          <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-wider mb-4 flex items-center justify-between">
            Matcha Intensity
            <span className="text-sm font-medium text-black/50 dark:text-white/50">
              {matchaIntensity < 33 ? 'Mild' : matchaIntensity < 66 ? 'Balanced' : matchaIntensity < 90 ? 'Strong' : 'Pure'}
            </span>
          </h3>
          <DiscreteSlider 
            value={matchaIntensity} 
            onChange={setMatchaIntensity} 
            steps={[
              {val: 0, label: 'Light'},
              {val: 50, label: 'Balanced'},
              {val: 100, label: 'Intense'}
            ]}
          />
        </section>

        {/* Flavor Boosts */}
        <section className="mb-16 lg:mb-20">
          <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-wider mb-6">Flavor Boosts</h3>
          <div className="flex overflow-x-auto gap-3 pb-4 snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
            {[
              { id: 'collagen', name: 'Marine Collagen', price: '+GH₵ 25' },
              { id: 'maca', name: 'Maca Root', price: '+GH₵ 15' },
              { id: 'ashwagandha', name: 'Ashwagandha', price: '+GH₵ 20' }
            ].map(b => (
              <button
                key={b.id}
                onClick={() => setBoosts({ ...boosts, [b.id]: !boosts[b.id] })}
                className={`snap-center flex-shrink-0 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 border shadow-sm flex flex-col items-center justify-center min-w-[130px] ${
                  boosts[b.id] 
                    ? 'bg-soft-green dark:bg-primary border-primary text-brand-dark dark:text-white shadow-md'
                    : 'bg-white dark:bg-[#222] border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                <span>{b.name}</span>
                <span className={`text-[10px] font-medium tracking-wide mt-0.5 ${boosts[b.id] ? 'opacity-90' : 'opacity-60'}`}>{b.price}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Cup Message */}
        <section className="mb-4">
          <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-wider mb-4">Personalize Your Cup</h3>
          <div className="relative">
            <input 
              type="text" 
              placeholder="e.g. You got this!" 
              value={cupMessage}
              onChange={(e) => setCupMessage(e.target.value)}
              className="w-full bg-transparent border-b-2 border-gray-200 dark:border-white/20 px-2 py-3 text-xl text-text-dark dark:text-white placeholder-gray-300 dark:placeholder-gray-700 focus:border-text-dark dark:focus:border-white outline-none transition-colors font-serif italic pr-10"
            />
            <span className="material-symbols-sharp absolute right-2 top-1/2 -translate-y-1/2 text-gray-300 dark:text-gray-700">edit</span>
          </div>
        </section>

        {/* Footer Next Step Button (Flows at the end on mobile) */}
        <div className="mt-8 lg:hidden flex justify-center w-full pb-8">
          <button 
            onClick={() => navigate('/checkout')} 
            className="w-auto px-6 py-2.5 bg-soft-green dark:bg-primary text-brand-dark dark:text-white rounded-full font-semibold text-sm hover:opacity-90 transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-sm"
          >
            Next Step
            <span className="material-symbols-sharp text-lg">arrow_forward</span>
          </button>
        </div>

        </div>
      </div>

      {/* Sticky Bottom Footer (Desktop Only) */}
      <div className="hidden lg:flex absolute bottom-0 left-0 w-full p-6 pt-12 bg-gradient-to-t from-[#FDFBF7]/90 via-[#FDFBF7]/80 to-transparent dark:from-[#111111] dark:via-[#111111]/90 dark:to-transparent backdrop-blur-[2px] pointer-events-none justify-end z-50">
        <button 
          onClick={() => navigate('/checkout')} 
          className="px-8 py-4 bg-soft-green dark:bg-primary text-brand-dark dark:text-white rounded-full font-semibold text-[17px] hover:opacity-90 transition-all pointer-events-auto active:scale-[0.98] flex items-center justify-center gap-3 mr-4 shadow-sm"
        >
          Next Step
          <span className="material-symbols-sharp text-xl">arrow_forward</span>
        </button>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};
