import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CustomizerControlsProps {
  customerName: string;
  setCustomerName: (name: string) => void;
  base: string;
  setBase: (base: string) => void;
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
  base, setBase,
  milkType, setMilkType,
  matchaIntensity, setMatchaIntensity,
  sweetener, setSweetener,
  sweetnessLevel, setSweetnessLevel,
  boosts, setBoosts,
  cupMessage, setCupMessage
}) => {
  const navigate = useNavigate();

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

        {/* Base */}
        <section className="mb-16 lg:mb-20">
          <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-wider mb-4">Select Your Drink</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { id: 'ceremonial', name: 'Ceremonial Grade (GHC 45)' },
              { id: 'latte', name: 'Latte-Grade (GHC 35)' }
            ].map(b => (
              <button
                key={b.id}
                onClick={() => setBase(b.id)}
                className={`rounded-full px-6 py-3 min-h-[44px] text-[15px] tracking-wide transition-all duration-300 border ${
                  base === b.id 
                    ? 'bg-[#E4E3DD] text-black border-transparent font-bold' 
                    : 'bg-white dark:bg-[#222] text-slate-600 dark:text-slate-400 border-gray-200 dark:border-white/20 font-medium hover:border-gray-400'
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>
        </section>

        {/* Sweeteners */}
        <section className="mb-16 lg:mb-20">
          <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-wider mb-4">Sweeteners</h3>
          <div className="flex flex-wrap gap-3">
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
                className={`rounded-full px-6 py-3 min-h-[44px] text-[15px] tracking-wide transition-all duration-300 border ${
                  sweetener === s.id 
                    ? 'bg-[#E4E3DD] text-black border-transparent font-bold' 
                    : 'bg-white dark:bg-[#222] text-slate-600 dark:text-slate-400 border-gray-200 dark:border-white/20 font-medium hover:border-gray-400'
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
          <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-wider mb-4">Milk & Creamers</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { id: 'whole', name: 'Whole Milk' },
              { id: 'skim', name: 'Skim' },
              { id: 'oat', name: 'Oat Milk' },
              { id: 'almond', name: 'Almond Milk' },
              { id: 'coconut', name: 'Coconut Milk' },
              { id: 'water', name: 'Water (Clear Matcha)' }
            ].map(m => (
              <button
                key={m.id}
                onClick={() => setMilkType(m.id)}
                className={`rounded-full px-6 py-3 min-h-[44px] text-[15px] tracking-wide transition-all duration-300 border ${
                  milkType === m.id 
                    ? 'bg-[#E4E3DD] text-black border-transparent font-bold' 
                    : 'bg-white dark:bg-[#222] text-slate-600 dark:text-slate-400 border-gray-200 dark:border-white/20 font-medium hover:border-gray-400'
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
          <h3 className="text-xl font-black text-black dark:text-white uppercase tracking-wider mb-4">Flavor Boosts</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { id: 'collagen', name: 'Marine Collagen' },
              { id: 'maca', name: 'Maca Root' },
              { id: 'ashwagandha', name: 'Ashwagandha' }
            ].map(b => (
              <button
                key={b.id}
                onClick={() => setBoosts({ ...boosts, [b.id]: !boosts[b.id] })}
                className={`rounded-full px-6 py-3 min-h-[44px] text-[15px] tracking-wide transition-all duration-300 border ${
                  boosts[b.id] 
                    ? 'bg-[#E4E3DD] text-black border-transparent font-bold' 
                    : 'bg-white dark:bg-[#222] text-slate-600 dark:text-slate-400 border-gray-200 dark:border-white/20 font-medium hover:border-gray-400'
                }`}
              >
                {b.name}
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

        </div>
      </div>

      {/* Sticky Bottom Footer */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-6 lg:absolute lg:p-6 lg:pt-12 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7]/90 to-transparent lg:from-[#FDFBF7]/90 lg:via-[#FDFBF7]/80 lg:to-transparent dark:from-[#111111] dark:via-[#111111]/90 dark:to-transparent backdrop-blur-[2px] pointer-events-none flex justify-center z-50">
        <button 
          onClick={() => navigate('/checkout')} 
          className="w-full lg:max-w-sm py-4 bg-black text-white rounded-full font-bold text-base tracking-[0.2em] uppercase shadow-lg hover:bg-black/80 transition-all pointer-events-auto active:scale-[0.98]"
        >
          Continue
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
