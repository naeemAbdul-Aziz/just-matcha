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
  setSweetener: (s: string | null) => void;
  sweetnessLevel: number;
  setSweetnessLevel: (l: number) => void;
  boosts: Record<string, boolean>;
  setBoosts: (b: Record<string, boolean>) => void;
  cupMessage: string;
  setCupMessage: (m: string) => void;
}

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

  const renderPill = (id: string, label: string, selected: boolean, onClick: () => void, isSmall = false) => {
    return (
      <button
        key={id}
        onClick={onClick}
        className={`rounded-full font-medium transition-all duration-200 border whitespace-nowrap 
          ${isSmall ? 'px-4 py-2 text-xs' : 'px-5 py-2.5 text-sm'}
          ${selected 
            ? 'bg-[#E5E5DC] dark:bg-[#2A2A2A] text-slate-900 dark:text-white border-transparent font-bold shadow-sm' 
            : 'bg-white dark:bg-[#111111] text-gray-500 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5'}`}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden bg-white dark:bg-[#111111] rounded-t-[2rem] lg:rounded-[2.5rem]">
      {/* Scrollable Content Area */}
      <div className="flex-grow overflow-y-auto custom-scrollbar px-6 lg:px-10 pt-8 pb-32">
        
        <h2 className="font-serif text-3xl font-bold text-text-dark dark:text-white mb-8">Customize</h2>

        {/* 1. Name */}
        <div className="mb-10">
          <label className="block text-sm font-bold text-text-dark dark:text-white mb-3">Share Your Name</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="e.g. Jules"
            className="w-full bg-[#f5f5f7] dark:bg-black/20 border-2 border-transparent dark:border-white/10 rounded-xl px-4 py-3 font-serif text-base text-text-dark dark:text-white focus:bg-white dark:focus:bg-transparent focus:border-brand-dark dark:focus:border-white/30 outline-none transition-all placeholder:text-gray-400"
          />
        </div>

        {/* 2. Base */}
        <div className="mb-10">
          <label className="block text-sm font-bold text-text-dark dark:text-white mb-3">Select Your Drink</label>
          <div className="flex flex-wrap gap-2.5">
            {renderPill('ceremonial', 'Ceremonial Grade (GH₵ 45)', base === 'ceremonial', () => setBase('ceremonial'))}
            {renderPill('premium', 'Latte-Grade (GH₵ 35)', base === 'premium', () => setBase('premium'))}
          </div>
        </div>

        {/* 3. Milk & Creamers */}
        <div className="mb-10">
          <label className="block text-sm font-bold text-text-dark dark:text-white mb-3">Milk & Creamers</label>
          <div className="flex flex-wrap gap-2.5">
            {[
              { id: 'full_cream', label: 'Whole Milk' },
              { id: 'skimmed', label: 'Skim' },
              { id: 'oat', label: 'Oat Milk' },
              { id: 'almond', label: 'Almond Milk' },
              { id: 'coconut', label: 'Coconut Milk' },
              { id: 'none', label: 'Water (Clear Matcha)' }
            ].map(m => renderPill(m.id, m.label, milkType === m.id, () => setMilkType(m.id)))}
          </div>
        </div>

        {/* 4. Matcha Intensity */}
        <div className="mb-10">
          <label className="block text-sm font-bold text-text-dark dark:text-white mb-3">Matcha Intensity</label>
          <div className="flex flex-wrap gap-2.5">
            {[
              { val: 25, label: 'Mild (Light)' },
              { val: 50, label: 'Balanced' },
              { val: 75, label: 'Strong (Intense)' },
              { val: 100, label: 'Pure (Boldest)' }
            ].map(i => renderPill(i.val.toString(), i.label, matchaIntensity === i.val, () => setMatchaIntensity(i.val)))}
          </div>
        </div>

        {/* 5. Sweeteners */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            <label className="block text-sm font-bold text-text-dark dark:text-white">Sweeteners</label>
            {sweetener && (
              <button onClick={() => setSweetener(null)} className="text-xs font-semibold text-gray-400 hover:text-brand-dark uppercase tracking-wider">
                Clear
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2.5">
            {[
              { id: 'honey', label: 'Honey' },
              { id: 'maple_syrup', label: 'Maple Syrup' },
              { id: 'date_syrup', label: 'Date Syrup' },
              { id: 'vanilla', label: 'Vanilla' },
              { id: 'caramel', label: 'Caramel' },
              { id: 'biscoff', label: 'Biscoff' },
              { id: 'white_chocolate', label: 'White Chocolate' }
            ].map(s => renderPill(s.id, s.label, sweetener === s.id, () => setSweetener(s.id)))}
          </div>
        </div>

        {/* 6. Sweetness Level */}
        <div className="mb-10">
          <label className="block text-sm font-bold text-text-dark dark:text-white mb-3">Sweetness Level</label>
          <div className="flex flex-wrap gap-2.5">
            {[
              { val: 0, label: '0% (Barely There)' },
              { val: 25, label: '25% (Hint of Sweet)' },
              { val: 50, label: '50% (Standard)' },
              { val: 75, label: '75% (Sweeter)' },
              { val: 100, label: '100% (Extra Sweet)' }
            ].map(l => renderPill(l.val.toString(), l.label, sweetnessLevel === l.val, () => setSweetnessLevel(l.val)))}
          </div>
        </div>

        {/* 7. Flavor Boosts */}
        <div className="mb-10">
          <label className="block text-sm font-bold text-text-dark dark:text-white mb-3">Flavor Boosts (Optional)</label>
          <div className="flex flex-wrap gap-2.5">
            {[
              { id: 'collagen', label: 'Marine Collagen' },
              { id: 'maca', label: 'Maca Root' },
              { id: 'ashwagandha', label: 'Ashwagandha' },
              { id: 'lion_mane', label: "Lion's Mane" }
            ].map(b => (
              <button
                key={b.id}
                onClick={() => setBoosts({ ...boosts, [b.id]: !boosts[b.id] })}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 border whitespace-nowrap 
                  ${boosts[b.id] 
                    ? 'bg-[#E5E5DC] dark:bg-[#2A2A2A] text-slate-900 dark:text-white border-transparent font-bold shadow-sm' 
                    : 'bg-white dark:bg-[#111111] text-gray-500 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5'}`}
              >
                {b.label} {boosts[b.id] && '✓'}
              </button>
            ))}
          </div>
        </div>

        {/* 8. Cup Message */}
        <div className="mb-8">
          <label className="block text-sm font-bold text-text-dark dark:text-white mb-3">Add a Cup Message (Optional)</label>
          <input
            type="text"
            value={cupMessage}
            onChange={(e) => setCupMessage(e.target.value)}
            placeholder="e.g. Good morning! ✨"
            className="w-full bg-[#f5f5f7] dark:bg-black/20 border-2 border-transparent dark:border-white/10 rounded-xl px-4 py-3 font-serif text-base text-text-dark dark:text-white focus:bg-white dark:focus:bg-transparent focus:border-brand-dark dark:focus:border-white/30 outline-none transition-all placeholder:text-gray-400"
          />
        </div>

      </div>

      {/* Sticky Bottom Footer */}
      <div className="absolute bottom-0 left-0 w-full p-4 lg:p-6 bg-gradient-to-t from-white via-white to-transparent dark:from-[#111111] dark:via-[#111111] pointer-events-none">
        <div className="w-full h-8 bg-gradient-to-t from-white dark:from-[#111111] to-transparent absolute bottom-full left-0 pointer-events-none"></div>
        <button 
          onClick={() => navigate('/checkout')} 
          className="w-full py-4 bg-[#1c1c1e] dark:bg-white text-white dark:text-black rounded-[2rem] font-bold text-lg shadow-xl hover:bg-black dark:hover:bg-gray-200 transition-colors pointer-events-auto"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
