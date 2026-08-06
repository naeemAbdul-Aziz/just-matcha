import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface CustomizerControlsProps {
  customerName: string;
  setCustomerName: (name: string) => void;
  base: string;
  setBase: (base: string) => void;
  milkType: string;
  setMilkType: (type: string) => void;
  matchaIntensity: number;
  setMatchaIntensity: (val: number) => void;
  sweetener: string | null;
  setSweetener: (val: string | null) => void;
  sweetnessLevel: number;
  setSweetnessLevel: (val: number) => void;
  boosts: Record<string, boolean>;
  setBoosts: (boosts: Record<string, boolean>) => void;
  cupMessage: string;
  setCupMessage: (msg: string) => void;
}

export const CustomizerControls: React.FC<CustomizerControlsProps> = ({
  customerName, setCustomerName,
  base, setBase,
  milkType, setMilkType,
  matchaIntensity, setMatchaIntensity,
  sweetener, setSweetener,
  sweetnessLevel, setSweetnessLevel,
  boosts, setBoosts,
  cupMessage, setCupMessage,
}) => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const totalSteps = 5;

  const milkOptions = [
    { id: 'full_cream', label: 'Full Cream', desc: 'Rich & Classic' },
    { id: 'skimmed', label: 'Skimmed', desc: 'Light & Airy' },
    { id: 'oat', label: 'Oat', desc: 'Creamy Plant-Based' },
    { id: 'almond', label: 'Almond', desc: 'Nutty & Low-Cal' }
  ];

  const treatOptions = [
    { 
      id: 'vanilla', name: 'Vanilla Syrup', bgColor: 'bg-yellow-200', color: 'bg-yellow-50 text-yellow-700 border-yellow-200',
      description: ["Softens matcha's bitterness", 'Add warmth without overpowering', 'Best used lightly to keep balance']
    },
    { 
      id: 'caramel', name: 'Caramel', bgColor: 'bg-orange-300', color: 'bg-orange-50 text-orange-700 border-orange-200',
      description: ['Deep, buttery sweetness', "Can mute matcha's grassy notes", 'Best for dessert-style lattes']
    },
    { 
      id: 'white_chocolate', name: 'White Chocolate', bgColor: 'bg-stone-200', color: 'bg-slate-100 text-slate-700 border-slate-200',
      description: ['Creamy and rich', 'Smooths matcha completely', 'Ideal for first-time matcha drinkers']
    },
    { 
      id: 'biscoff', name: 'Biscoff', bgColor: 'bg-amber-300', color: 'bg-amber-50 text-amber-800 border-amber-300',
      description: ['Spiced, cookie-like sweetness', 'Strong flavour that dominates matcha', 'Best enjoyed as an occasional indulgence']
    }
  ];

  const naturalSweeteners = [
    {
      id: 'honey', name: 'Honey', bgColor: 'bg-amber-400', color: 'bg-amber-50 text-amber-800 border-amber-300',
      description: ['Naturally sweet with added minerals', 'Support digestion and immunity', "Best used sparingly to preserve matcha's flavour"]
    },
    {
      id: 'date_syrup', name: 'Date Syrup', bgColor: 'bg-orange-800', color: 'bg-orange-50 text-orange-900 border-orange-200',
      description: ['Whole-food sweetness with fibre', 'Adds gentle caramel notes', 'Slightly darkens colour and taste']
    },
    {
      id: 'maple_syrup', name: 'Maple Syrup', bgColor: 'bg-orange-400', color: 'bg-orange-50 text-orange-800 border-orange-300',
      description: ['Low-glycaemic natural sweetner', 'Smooth, rounded sweetness', "Can soften matcha's grassy edge"]
    }
  ];

  const functionalBoosts = [
    {
      id: 'ashwagandha', name: 'Ashwagandha', price: 15,
      description: ['Adaptogen traditionally used to support stress balance', 'Promotes calm and focus', 'Best enjoyed consistently, in small amounts']
    },
    {
      id: 'blue_spirulina', name: 'Blue Spirulina', price: 12,
      description: ['Antioxidant-rich and naturally vibrant', 'Supports focus and gentle energy', 'Neutral taste when used lightly']
    },
    {
      id: 'green_spirulina', name: 'Green Spirulina', price: 10,
      description: ['Rich in chlorophyll and plant protein', 'Supports vitality and detox pathways', 'Earthy flavour - balance carefully']
    },
    {
      id: 'collagen', name: 'Collagen', price: 18,
      description: ['Support skin, hair, nails, and joints', 'Tasteless and easy to dissolve', 'Ideal for daily ritual drinks']
    },
    {
      id: 'maca', name: 'Maca Powder', price: 14,
      description: ['Root traditionally used for energy and stamina', 'Supports hormone balance', 'Malty flavour pairs well with warm drinks']
    }
  ];

  const allFlavors = [...treatOptions, ...naturalSweeteners];

  const cupMessages = [
    'Your daily dose of green magic',
    'Two matcha, one love',
    'A little moment of peace',
    'Sip, smile, and shine on'
  ];

  const toggleBoost = (id: string) => {
    setBoosts({
      ...boosts,
      [id]: !boosts[id]
    });
  };

  const handleNext = () => {
    if (activeStep < totalSteps) {
      setActiveStep(activeStep + 1);
    } else {
      navigate('/checkout');
    }
  };

  const handleBack = () => {
    if (activeStep > 1) setActiveStep(activeStep - 1);
  };

  const renderSweetenerOption = (f: typeof treatOptions[0]) => {
    const isSelected = sweetener === f.id;
    
    return (
      <div key={f.id} className={`flex flex-col rounded-xl overflow-hidden transition-all duration-300 border-2 ${isSelected ? 'border-primary bg-white shadow-sm' : 'border-transparent bg-[#f5f5f7] dark:bg-black/20 hover:border-gray-200'} cursor-pointer w-full`}>
        <div 
          className={`px-4 py-4 flex flex-col gap-1 transition-colors ${isSelected ? f.color : 'text-text-light dark:text-slate-300'}`}
          onClick={() => setSweetener(isSelected ? null : f.id)}
        >
          <div className="flex items-center justify-between w-full">
            <span className="font-serif text-xl font-bold">{f.name}</span>
            {isSelected ? (
              <span className="material-symbols-sharp text-sm">check</span>
            ) : (
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center shrink-0"></div>
            )}
          </div>
          <ul className="text-xs space-y-1 mt-2 font-light opacity-80 leading-relaxed">
            {f.description.map((desc, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="opacity-60 text-[10px]">✦</span> {desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  // Pricing calculations for Review Step
  const basePrice = base === 'ceremonial' ? 45 : 35;
  const boostsPrice = Object.entries(boosts).reduce((acc, [id, selected]) => {
     if (selected) {
       const boost = functionalBoosts.find(b => b.id === id);
       return acc + (boost?.price || 0);
     }
     return acc;
  }, 0);
  const totalPrice = basePrice + boostsPrice;

  return (
    <div className="relative w-full h-full perspective-[1500px]">
      <AnimatePresence>
        {[1, 2, 3, 4, 5].map((stepIndex) => {
          if (stepIndex < activeStep) return null; // Swipe away past cards

          const isTop = stepIndex === activeStep;
          const offset = stepIndex - activeStep; // 0 for top, 1 for next...

          return (
            <motion.div
              key={stepIndex}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{
                opacity: offset > 2 ? 0 : 1,
                scale: 1 - (offset * 0.04),
                y: offset * -15, // Stack upwards
                rotate: offset === 0 ? 0 : offset % 2 === 0 ? -1.5 : 1.5,
                zIndex: 10 - offset
              }}
              exit={{ x: -400, opacity: 0, rotate: -5 }} // Smooth left swipe
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className={`absolute inset-0 bg-white dark:bg-[#111111] p-5 md:p-8 rounded-[2rem] border border-gray-100 dark:border-white/10 flex flex-col shadow-2xl ${isTop ? 'overflow-y-auto custom-scrollbar pointer-events-auto' : 'overflow-hidden pointer-events-none'}`}
            >
              
              {/* Dashed Progress */}
              <div className="flex items-center justify-between mb-8 flex-shrink-0">
                <div className="flex items-center gap-2 w-28">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div 
                      key={s} 
                      className={`h-1 rounded-full flex-grow transition-colors ${s <= stepIndex ? 'bg-brand-dark dark:bg-white' : 'bg-gray-200 dark:bg-white/10'}`}
                    />
                  ))}
                </div>
              </div>

              <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-4 flex-shrink-0">
                Question 0{stepIndex}
              </div>

              {/* Step Content */}
              <div className="flex-grow shrink-0 mb-8">
                
                {/* Step 1: The Foundation (Name & Base) */}
                {stepIndex === 1 && (
                  <div>
                    <h2 className="font-serif text-3xl text-text-dark dark:text-white mb-6 leading-tight">The Foundation</h2>
                    
                    <div className="mb-6">
                      <label className="block text-[10px] uppercase tracking-widest text-text-dark dark:text-slate-400 mb-2 font-bold">1. Share Your Name</label>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g. Jules"
                        className="w-full bg-[#f5f5f7] dark:bg-black/20 border-2 border-transparent dark:border-white/10 rounded-xl px-4 py-3 font-serif text-base text-text-dark focus:bg-white dark:focus:bg-surface-dark focus:border-primary outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-text-dark dark:text-slate-400 mb-2 font-bold">2. Select Your Drink</label>
                      <div className="grid grid-cols-1 gap-2">
                        <label className="relative group cursor-pointer">
                          <input type="radio" name="base" className="peer sr-only" checked={base === 'ceremonial'} onChange={() => { setBase('ceremonial'); }} />
                          <div className="px-5 py-4 rounded-2xl border-2 border-transparent bg-[#f5f5f7] dark:bg-black/20 transition-all duration-300 peer-checked:border-primary peer-checked:bg-white dark:peer-checked:bg-surface-dark flex items-center gap-4">
                            <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-primary flex items-center justify-center shrink-0 bg-white">
                              <div className="w-2 h-2 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="flex flex-col">
                              <span className="font-serif text-lg text-text-dark dark:text-white">Ceremonial Grade <span className="text-xs font-sans text-gray-500 ml-2">GH₵ 45.00</span></span>
                              <span className="text-sm text-text-light dark:text-slate-400 font-light line-clamp-1">Highest quality, vibrant green.</span>
                            </div>
                          </div>
                        </label>
                        <label className="relative group cursor-pointer">
                          <input type="radio" name="base" className="peer sr-only" checked={base === 'premium'} onChange={() => { setBase('premium'); }} />
                          <div className="px-5 py-4 rounded-2xl border-2 border-transparent bg-[#f5f5f7] dark:bg-black/20 transition-all duration-300 peer-checked:border-primary peer-checked:bg-white dark:peer-checked:bg-surface-dark flex items-center gap-4">
                            <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:border-primary flex items-center justify-center shrink-0 bg-white">
                              <div className="w-2 h-2 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="flex flex-col">
                              <span className="font-serif text-lg text-text-dark dark:text-white">Latte-Grade Matcha <span className="text-xs font-sans text-gray-500 ml-2">GH₵ 35.00</span></span>
                              <span className="text-sm text-text-light dark:text-slate-400 font-light line-clamp-1">Best if you want your matcha to feel like a treat.</span>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: The Liquid & Intensity */}
                {stepIndex === 2 && (
                  <div>
                    <h2 className="font-serif text-3xl text-text-dark dark:text-white mb-6 leading-tight">Liquid & Intensity</h2>
                    
                    <div className="mb-6">
                      <label className="block text-[10px] uppercase tracking-widest text-text-dark dark:text-slate-400 mb-2 font-bold">3. Preferred Milk</label>
                      <div className="grid grid-cols-2 gap-2">
                        {milkOptions.map(milk => (
                          <button
                            key={milk.id}
                            onClick={() => setMilkType(milk.id)}
                            className={`p-3 rounded-xl border-2 text-left transition-all duration-300 ${milkType === milk.id ? 'border-primary bg-white shadow-sm' : 'border-transparent bg-[#f5f5f7] dark:bg-black/20 hover:border-gray-200'}`}
                          >
                            <span className={`block font-serif text-sm ${milkType === milk.id ? 'text-primary-dark font-bold' : 'text-text-dark'}`}>{milk.label}</span>
                            <span className="text-[10px] text-gray-500 font-light mt-0.5">{milk.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-text-dark dark:text-slate-400 mb-3 font-bold">4. Matcha Intensity</label>
                      <div className="flex items-center justify-between gap-2">
                        {[
                          { val: 25, label: 'Mild' },
                          { val: 50, label: 'Balanced' },
                          { val: 75, label: 'Strong' },
                          { val: 100, label: 'Pure' }
                        ].map(level => (
                          <button
                            key={level.val}
                            onClick={() => setMatchaIntensity(level.val)}
                            className={`flex flex-col items-center justify-center flex-1 py-3 px-1 rounded-2xl border-2 transition-all duration-300 ${matchaIntensity === level.val ? 'bg-[#3b6318] border-[#3b6318] text-white shadow-md scale-105 z-10' : 'bg-[#f5f5f7] dark:bg-black/20 border-transparent text-gray-500 hover:border-gray-200'}`}
                          >
                            <span className="font-bold text-sm mb-0.5">{level.val}%</span>
                            <span className="text-[10px] uppercase tracking-wider font-medium opacity-80">{level.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Sweetness & Flavor */}
                {stepIndex === 3 && (
                  <div>
                    <h2 className="font-serif text-3xl text-text-dark dark:text-white mb-6 leading-tight">Sweetness & Flavor</h2>
                    
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <label className="block text-[10px] uppercase tracking-widest text-text-dark dark:text-slate-400 font-bold">6. Your Sweet Spot</label>
                        <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded-md">{sweetnessLevel}%</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        {[
                          { val: 0, title: 'Barely There', desc: '(clean, pure matcha taste)' },
                          { val: 25, title: 'Hint of Sweet', desc: '(just a touch)' },
                          { val: 50, title: 'Balanced Bliss', desc: '(right in the middle)' },
                          { val: 75, title: 'Sweet Spot', desc: '(noticeably sweet, still refined)' },
                          { val: 100, title: 'Sugar Rush', desc: '(for the true sweet tooth)' }
                        ].map(level => (
                          <button
                            key={level.val}
                            onClick={() => setSweetnessLevel(level.val)}
                            className={`relative w-full px-4 py-3 rounded-xl flex items-center gap-4 transition-all duration-300 border-2 text-left ${
                              sweetnessLevel === level.val 
                                ? 'bg-white border-orange-400 shadow-sm'
                                : 'bg-[#f5f5f7] dark:bg-black/20 border-transparent text-text-light hover:border-gray-200'
                            }`}
                          >
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors ${sweetnessLevel === level.val ? 'bg-orange-400 text-white shadow-inner' : 'bg-gray-200 dark:bg-white/10 text-gray-400'}`}>
                              <span className="font-black text-lg">{level.val}%</span>
                            </div>
                            <div className="flex flex-col">
                              <span className={`font-serif text-base transition-colors ${sweetnessLevel === level.val ? 'text-orange-950 font-bold' : 'text-text-dark dark:text-slate-300'}`}>{level.title}</span>
                              <span className="text-xs font-light text-gray-500 tracking-wide">{level.desc}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <label className="block text-[10px] uppercase tracking-widest text-text-dark dark:text-slate-400 mb-2 font-bold">5. Pick Your Sweetener (Optional)</label>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 ml-1">If you want it to feel like a treat</h3>
                        <div className="flex flex-col gap-3">
                          {treatOptions.map(renderSweetenerOption)}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 ml-1">If you want it light & functional</h3>
                        <div className="flex flex-col gap-3">
                          {naturalSweeteners.map(renderSweetenerOption)}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Functional Boosts */}
                {stepIndex === 4 && (
                  <div>
                    <h2 className="font-serif text-3xl text-text-dark dark:text-white mb-2 leading-tight">Support Your Body</h2>
                    <p className="text-text-light text-sm mb-6">Select functional boosts to elevate your matcha ritual.</p>
                    
                    <div className="flex flex-col gap-3">
                      {functionalBoosts.map(boost => {
                        const isSelected = !!boosts[boost.id];
                        
                        return (
                          <label key={boost.id} className={`relative block p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer group ${isSelected ? 'border-primary bg-white shadow-sm' : 'border-transparent bg-[#f5f5f7] dark:bg-black/20 hover:border-gray-200'}`}>
                            <div className="flex items-center gap-4">
                              <div className="flex-grow min-w-0">
                                <div className="flex justify-between items-center mb-1">
                                  <h3 className="font-serif text-xl font-bold text-text-dark dark:text-white transition-colors leading-tight">{boost.name}</h3>
                                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors bg-white ${isSelected ? 'border-primary' : 'border-gray-300 dark:border-gray-600'}`}>
                                    {isSelected && <span className="material-symbols-sharp text-primary text-[12px]">check</span>}
                                  </div>
                                </div>
                                <span className="block text-[10px] font-bold text-gray-500 tracking-wider mb-2">+ GH₵ {boost.price.toFixed(2)}</span>
                                <ul className="text-xs space-y-1 font-light opacity-80 leading-relaxed text-text-light dark:text-slate-300">
                                  {boost.description.map((desc, i) => (
                                    <li key={i} className="flex items-start gap-1.5">
                                      <span className="opacity-60 text-[10px]">✦</span> {desc}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <input type="checkbox" className="sr-only" checked={isSelected} onChange={() => toggleBoost(boost.id)} />
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 5: Personalize & Review */}
                {stepIndex === 5 && (
                  <div>
                    <h2 className="font-serif text-3xl text-text-dark dark:text-white mb-6 leading-tight">Review Order</h2>
                    
                    <div className="bg-[#f5f5f7] dark:bg-black/20 rounded-2xl p-5 mb-6 border border-gray-100 dark:border-white/5">
                      <div className="flex justify-between items-start mb-4">
                         <div>
                            <h3 className="font-serif text-lg font-bold text-text-dark">{customerName ? `${customerName}'s Matcha` : 'Your Custom Matcha'}</h3>
                            <p className="text-sm text-gray-500">{base === 'ceremonial' ? 'Ceremonial Grade' : 'Latte-Grade'} • {matchaIntensity}% Intensity</p>
                         </div>
                         <span className="font-serif font-bold text-brand-dark">GH₵ {totalPrice.toFixed(2)}</span>
                      </div>

                      <div className="space-y-2 mb-4 text-sm text-text-dark border-t border-gray-200 dark:border-white/10 pt-4">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Milk Base</span>
                          <span className="font-medium capitalize">{milkType.replace('_', ' ')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Sweetness</span>
                          <span className="font-medium">
                            {sweetnessLevel}% {sweetener ? allFlavors.find(f => f.id === sweetener)?.name : 'Unsweetened'}
                          </span>
                        </div>
                        {Object.keys(boosts).length > 0 && (
                          <div className="flex justify-between">
                            <span className="text-gray-500">Boosts</span>
                            <span className="font-medium text-right">
                              {Object.entries(boosts).filter(([_, v]) => v).map(([id]) => functionalBoosts.find(b => b.id === id)?.name).join(', ')}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-text-dark dark:text-slate-400 mb-2 font-bold">Cup Message</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                        {cupMessages.map(msg => (
                          <button
                            key={msg}
                            onClick={() => setCupMessage(msg)}
                            className={`p-2 rounded-xl text-xs font-medium border-2 transition-all duration-300 text-left ${cupMessage === msg ? 'bg-white border-primary text-brand-dark shadow-sm' : 'bg-[#f5f5f7] dark:bg-black/20 border-transparent text-gray-500 hover:border-gray-200'}`}
                          >
                            "{msg}"
                          </button>
                        ))}
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          value={cupMessage}
                          onChange={(e) => setCupMessage(e.target.value)}
                          placeholder="Write a custom message..."
                          className="w-full bg-[#f5f5f7] dark:bg-black/20 border-2 border-transparent dark:border-white/10 rounded-xl px-4 py-3 font-serif text-sm text-text-dark focus:bg-white dark:focus:bg-surface-dark focus:border-primary outline-none transition-all pr-12"
                        />
                        <span className="material-symbols-sharp absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">edit</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Persistent Navigation Controls */}
              <div className="mt-auto flex items-center justify-between flex-shrink-0 pt-5 border-t border-gray-100 dark:border-white/10 bg-white dark:bg-[#111111] sticky bottom-0 z-20 pb-4">
                {activeStep > 1 ? (
                  <button 
                    onClick={handleBack}
                    className="font-medium text-sm text-gray-400 hover:text-brand-dark transition-colors px-4 py-2"
                  >
                    Back
                  </button>
                ) : (
                  <div className="px-4 py-2"></div>
                )}
                <button 
                  onClick={handleNext} 
                  className="px-8 py-3.5 bg-brand-dark text-white rounded-xl font-medium tracking-wide hover:bg-[#1d1d1f] transition-colors flex items-center justify-center shadow-lg"
                >
                  {stepIndex === totalSteps ? 'Confirm Order' : 'Next'}
                </button>
              </div>

            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  );
};
