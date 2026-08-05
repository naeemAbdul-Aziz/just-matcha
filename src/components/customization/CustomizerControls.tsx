import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductVisualizer } from './ProductVisualizer';

interface CustomizerControlsProps {
  base: string;
  setBase: (base: string) => void;
  flavors: Record<string, number>;
  setFlavors: (flavors: Record<string, number>) => void;
  customerName: string;
  setCustomerName: (name: string) => void;
  cupMessage: string;
  setCupMessage: (msg: string) => void;
  collagen: boolean;
  setCollagen: (value: boolean) => void;
  milkLevel: number;
  setMilkLevel: (value: number) => void;
}

export const CustomizerControls: React.FC<CustomizerControlsProps> = ({
  base,
  setBase,
  flavors,
  setFlavors,
  customerName,
  setCustomerName,
  cupMessage,
  setCupMessage,
  collagen,
  setCollagen,
  milkLevel,
  setMilkLevel,
}) => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);

  const flavorOptions = [
    { id: 'strawberry', name: 'Strawberry', bgColor: 'bg-rose-300', color: 'bg-red-50 text-red-600 border-red-200', active: 'border-red-500 shadow-sm' },
    { id: 'vanilla', name: 'Vanilla', bgColor: 'bg-yellow-200', color: 'bg-yellow-50 text-yellow-700 border-yellow-200', active: 'border-yellow-500 shadow-sm' },
    { id: 'mango', name: 'Mango', bgColor: 'bg-orange-300', color: 'bg-orange-50 text-orange-600 border-orange-200', active: 'border-orange-500 shadow-sm' },
    { id: 'lavender', name: 'Lavender', bgColor: 'bg-purple-300', color: 'bg-purple-50 text-purple-600 border-purple-200', active: 'border-purple-500 shadow-sm' },
    { id: 'rose', name: 'Rose', bgColor: 'bg-pink-300', color: 'bg-pink-50 text-pink-600 border-pink-200', active: 'border-pink-500 shadow-sm' }
  ];

  const cupMessages = [
    'Smile', 
    'You matter', 
    'Your daily dose of green magic',
    'Two matcha, one love',
    'You are my favorite distraction',
    'Sip, smile, and shine on',
    'A little moment of peace, just for you',
    'You\'re doing amazing, sweetie!'
  ];

  const milkLevels = [
    { value: 0, title: 'Pure Matcha energy', label: '0%' },
    { value: 25, title: 'Light sweet, balanced.', label: '25%' },
    { value: 50, title: 'Just right, for most.', label: '50%' },
    { value: 75, title: 'Creamy & Comforting', label: '75%' },
    { value: 100, title: 'Full sweet indulgence', label: '100%' },
  ];

  const toggleFlavor = (id: string) => {
    const newFlavors = { ...flavors };
    if (newFlavors[id]) {
      delete newFlavors[id];
    } else {
      if (Object.keys(newFlavors).length >= 2) return; // Max 2 flavors
      newFlavors[id] = 30; // Default 30%
    }
    setFlavors(newFlavors);
  };

  const updateFlavorIntensity = (id: string, intensity: number) => {
    const newFlavors = { ...flavors };
    if (newFlavors[id]) {
      newFlavors[id] = intensity;
      setFlavors(newFlavors);
    }
  };

  const totalFlavorPercent = Object.values(flavors).reduce((a, b) => a + b, 0);
  const matchaPercent = Math.max(0, 100 - totalFlavorPercent);

  const getFlavorSummary = () => {
    const keys = Object.keys(flavors);
    if (keys.length === 0) return 'Pure Matcha';
    return keys.map(k => {
      const f = flavorOptions.find(opt => opt.id === k);
      return `${flavors[k]}% ${f?.name}`;
    }).join(', ');
  };

  // Helper styles for sleek accordion
  const stepWrapperClass = (step: number) => `
    transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden
    ${activeStep === step 
      ? 'bg-white dark:bg-surface-dark shadow-luxury rounded-[2.5rem] border border-primary/10 dark:border-white/5 my-4' 
      : 'bg-transparent border-b border-gray-200 dark:border-white/10 rounded-none my-0 hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer'}
  `;

  const stepHeaderClass = (_step: number) => `
    w-full flex items-center justify-between px-6 py-6 transition-colors text-left
  `;

  const stepNumberClass = (step: number) => `
    w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold tracking-widest
    ${activeStep === step ? 'bg-primary text-white' : 'bg-soft-green dark:bg-white/10 text-primary-dark dark:text-slate-400'}
  `;

  const stepTitleClass = (step: number) => `
    ${activeStep === step 
      ? 'font-serif text-2xl md:text-3xl text-text-dark dark:text-white' 
      : 'font-sans text-sm font-bold uppercase tracking-wider text-text-light dark:text-slate-400'}
  `;

  return (
    <div className="w-full flex flex-col pb-20">
      <div className="border-b border-gray-200/50 dark:border-white/10 pb-6 mb-8 md:pb-8 md:mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-2 md:mb-4 text-text-dark dark:text-white leading-tight whitespace-nowrap">
          Craft Your <span className="italic text-primary-dark">Ritual.</span>
        </h1>
        <p className="text-text-light dark:text-slate-400 text-sm md:text-lg font-light max-w-lg">Sweet, inviting, and purely authentic. Personalize every layer of your matcha.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Visual Anchor */}
        <div className="lg:col-span-5 xl:col-span-5 sticky top-32">
          <ProductVisualizer />
        </div>

        {/* Right Column: Sequential Flow (Accordion) */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col">
          
          {/* Step 01: Select Your Base */}
          <div className={stepWrapperClass(1)}>
            <button onClick={() => setActiveStep(1)} className={stepHeaderClass(1)}>
              <div className="flex items-center gap-4">
                <div className={stepNumberClass(1)}>1</div>
                <h2 className={stepTitleClass(1)}>
                  {activeStep === 1 ? 'Select Your Base' : `Base: ${base === 'ceremonial' ? 'Ceremonial' : 'Premium'}`}
                </h2>
              </div>
              <span className={`material-icons text-primary/50 transition-transform duration-300 ${activeStep === 1 ? 'rotate-180' : ''}`}>expand_more</span>
            </button>
            
            {activeStep === 1 && (
              <div className="px-6 pb-8 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="flex items-center justify-end mb-4">
                  <button className="text-xs text-primary font-medium tracking-wide uppercase hover:opacity-70 transition-opacity">Compare Grades</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="relative group cursor-pointer">
                    <input type="radio" name="base" className="peer sr-only" checked={base === 'ceremonial'} onChange={() => { setBase('ceremonial'); }} />
                    <div className="p-6 rounded-[2rem] border border-gray-100 bg-white dark:bg-black/20 hover:border-primary/20 transition-all duration-300 peer-checked:border-primary peer-checked:bg-soft-green/30 peer-checked:shadow-soft h-full flex flex-col">
                      <div className="flex justify-between items-start mb-3">
                        <span className="font-serif text-2xl text-text-dark dark:text-white">Ceremonial</span>
                        <div className="w-5 h-5 rounded-full border border-gray-300 dark:border-gray-600 peer-checked:border-primary flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                        </div>
                      </div>
                      <p className="text-sm text-text-light dark:text-slate-300 mb-6 font-light flex-grow">Highest quality, vibrant green. Best for pure enjoyment.</p>
                      <span className="text-xs font-bold text-primary-dark tracking-wider uppercase">GH₵ 45.00</span>
                    </div>
                  </label>
                  <label className="relative group cursor-pointer">
                    <input type="radio" name="base" className="peer sr-only" checked={base === 'premium'} onChange={() => { setBase('premium'); }} />
                    <div className="p-6 rounded-[2rem] border border-gray-100 bg-white dark:bg-black/20 hover:border-primary/20 transition-all duration-300 peer-checked:border-primary peer-checked:bg-soft-green/30 peer-checked:shadow-soft h-full flex flex-col">
                      <div className="flex justify-between items-start mb-3">
                        <span className="font-serif text-2xl text-text-dark dark:text-white">Premium</span>
                        <div className="w-5 h-5 rounded-full border border-gray-300 dark:border-gray-600 peer-checked:border-primary flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                        </div>
                      </div>
                      <p className="text-sm text-text-light dark:text-slate-300 mb-6 font-light flex-grow">Robust flavor designed to cut through milk. Ideal for mixed drinks.</p>
                      <span className="text-xs font-bold text-text-light tracking-wider uppercase">GH₵ 35.00</span>
                    </div>
                  </label>
                </div>
                <div className="flex justify-end mt-8">
                  <button onClick={() => setActiveStep(2)} className="group relative px-8 py-3 bg-soft-green text-text-dark rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                    <span className="absolute inset-0 w-full h-full bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></span>
                    <span className="relative flex items-center gap-2 font-medium tracking-wide">Next Step <span className="material-icons text-sm">arrow_forward</span></span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Step 02: Matcha/Milk Level */}
          <div className={stepWrapperClass(2)}>
            <button onClick={() => setActiveStep(2)} className={stepHeaderClass(2)}>
              <div className="flex items-center gap-4">
                <div className={stepNumberClass(2)}>2</div>
                <h2 className={stepTitleClass(2)}>
                  {activeStep === 2 ? 'Matcha/Milk Ratio' : `Milk Level: ${milkLevel}%`}
                </h2>
              </div>
              <span className={`material-icons text-primary/50 transition-transform duration-300 ${activeStep === 2 ? 'rotate-180' : ''}`}>expand_more</span>
            </button>
            
            {activeStep === 2 && (
              <div className="px-6 pb-8 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="flex flex-col gap-3">
                  {milkLevels.map(level => (
                    <button
                      key={level.value}
                      onClick={() => setMilkLevel(level.value)}
                      className={`relative w-full px-6 py-4 rounded-full flex items-center justify-between transition-all duration-500 border ${
                        milkLevel === level.value 
                          ? 'bg-soft-green/50 border-primary/30 text-text-dark shadow-sm'
                          : 'bg-white dark:bg-black/20 border-gray-100 dark:border-white/5 text-text-light hover:border-primary/20 hover:bg-soft-green/20'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${milkLevel === level.value ? 'border-primary' : 'border-gray-300 dark:border-gray-600'}`}>
                          <div className={`w-2.5 h-2.5 rounded-full bg-primary transition-all duration-300 ${milkLevel === level.value ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
                        </div>
                        <span className={`font-serif text-xl md:text-2xl transition-colors ${milkLevel === level.value ? 'text-primary-dark' : ''}`}>{level.label}</span>
                      </div>
                      <span className={`text-sm font-light tracking-wide text-right transition-colors ${milkLevel === level.value ? 'text-text-dark font-medium' : ''}`}>
                        {level.title}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="flex justify-end mt-8">
                  <button onClick={() => setActiveStep(3)} className="group relative px-8 py-3 bg-soft-green text-text-dark rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                    <span className="absolute inset-0 w-full h-full bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></span>
                    <span className="relative flex items-center gap-2 font-medium tracking-wide">Next Step <span className="material-icons text-sm">arrow_forward</span></span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Step 03: Flavor Infusion */}
          <div className={stepWrapperClass(3)}>
            <button onClick={() => setActiveStep(3)} className={stepHeaderClass(3)}>
              <div className="flex items-center gap-4">
                <div className={stepNumberClass(3)}>3</div>
                <h2 className={stepTitleClass(3)}>
                  {activeStep === 3 ? 'Flavor Infusion' : `Flavors: ${getFlavorSummary()}`}
                </h2>
              </div>
              <span className={`material-icons text-primary/50 transition-transform duration-300 ${activeStep === 3 ? 'rotate-180' : ''}`}>expand_more</span>
            </button>
            
            {activeStep === 3 && (
              <div className="px-6 pb-8 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-sm text-text-light font-light">Select up to 2 flavors.</span>
                  <span className="text-brand-dark font-bold text-xs uppercase tracking-widest bg-soft-green px-4 py-1.5 rounded-full">{matchaPercent}% Matcha</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-8 mb-4">
                  {/* CSS Cup Visualizer */}
                  <div className="flex-shrink-0 flex justify-center sm:justify-start">
                    <div className="relative w-28 h-40 border-2 border-primary/20 rounded-b-[2rem] rounded-t-lg shadow-inner overflow-hidden flex flex-col justify-start bg-white/40 dark:bg-black/20 backdrop-blur-sm">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-white/50 z-20"></div>
                      <div style={{ height: `${matchaPercent}%` }} className="bg-brand-dark/90 transition-all duration-700 ease-in-out w-full flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                        {matchaPercent > 15 && (
                          <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest relative z-10 transition-opacity opacity-70 group-hover:opacity-100">
                            {matchaPercent}%
                          </span>
                        )}
                      </div>
                      {Object.entries(flavors).map(([id, pct]) => {
                        const f = flavorOptions.find(opt => opt.id === id);
                        return (
                          <div key={id} style={{ height: `${pct}%` }} className={`${f?.bgColor || 'bg-gray-200'} transition-all duration-700 ease-in-out w-full flex items-center justify-center relative overflow-hidden border-t border-white/20 group`}>
                            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-black/5"></div>
                            {pct > 15 && (
                              <span className="text-[10px] font-bold text-black/50 uppercase tracking-widest relative z-10 transition-opacity opacity-70 group-hover:opacity-100">
                                {pct}%
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Flavor Options */}
                  <div className="flex-grow flex flex-wrap gap-3 content-start items-start">
                    {flavorOptions.map(f => {
                      const isSelected = !!flavors[f.id];
                      const isDisabled = !isSelected && Object.keys(flavors).length >= 2;
                      
                      return (
                        <div key={f.id} className={`flex flex-col rounded-[1.5rem] overflow-hidden transition-all duration-300 border ${isSelected ? 'border-transparent shadow-md' : 'border-gray-100 dark:border-white/5 bg-white dark:bg-black/20 hover:border-primary/20'} ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} w-full sm:w-auto`}>
                          <div 
                            className={`px-5 py-3 flex items-center gap-3 transition-colors ${isSelected ? f.color : 'text-text-light dark:text-slate-300'}`}
                            onClick={() => !isDisabled && toggleFlavor(f.id)}
                          >
                            <span className="font-medium text-sm tracking-wide">{f.name}</span>
                            {isSelected && (
                              <span className="ml-auto material-icons text-sm opacity-70 hover:opacity-100">close</span>
                            )}
                          </div>
                          {isSelected && (
                            <div className={`flex justify-between px-2 pb-2 pt-1 gap-1 ${f.color}`}>
                              {[20, 30, 40, 50].map(pct => (
                                <button 
                                  key={pct}
                                  onClick={(e) => { e.stopPropagation(); updateFlavorIntensity(f.id, pct); }}
                                  className={`text-xs px-2 py-1 rounded-full font-medium transition-all ${flavors[f.id] === pct ? 'bg-white/90 dark:bg-black/20 shadow-sm text-text-dark dark:text-white' : 'text-current opacity-60 hover:opacity-100 hover:bg-white/30'}`}
                                >
                                  {pct}%
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex justify-end mt-8">
                  <button onClick={() => setActiveStep(4)} className="group relative px-8 py-3 bg-soft-green text-text-dark rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                    <span className="absolute inset-0 w-full h-full bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></span>
                    <span className="relative flex items-center gap-2 font-medium tracking-wide">Next Step <span className="material-icons text-sm">arrow_forward</span></span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Step 04: Personalize Your Cup */}
          <div className={stepWrapperClass(4)}>
            <button onClick={() => setActiveStep(4)} className={stepHeaderClass(4)}>
              <div className="flex items-center gap-4">
                <div className={stepNumberClass(4)}>4</div>
                <h2 className={stepTitleClass(4)}>
                  {activeStep === 4 ? 'Personalize Your Cup' : `For: ${customerName || 'Guest'}`}
                </h2>
              </div>
              <span className={`material-icons text-primary/50 transition-transform duration-300 ${activeStep === 4 ? 'rotate-180' : ''}`}>expand_more</span>
            </button>
            
            {activeStep === 4 && (
              <div className="px-6 pb-8 animate-in fade-in slide-in-from-top-4 duration-500 space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-text-light dark:text-slate-400 mb-2 font-bold">Your Name</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Jules"
                    className="w-full bg-white dark:bg-black/20 border border-gray-100 dark:border-white/10 rounded-full px-6 py-4 font-serif text-lg text-text-dark focus:bg-white dark:focus:bg-surface-dark focus:border-primary/50 focus:ring-4 focus:ring-primary/10 outline-none transition-all shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-text-light dark:text-slate-400 mb-3 font-bold">Cup Message</label>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cupMessages.map(msg => (
                      <button
                        key={msg}
                        onClick={() => setCupMessage(msg)}
                        className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${cupMessage === msg ? 'bg-primary-dark border-primary-dark text-white shadow-md' : 'bg-white dark:bg-black/20 border-gray-100 dark:border-white/10 text-text-light dark:text-slate-300 hover:border-primary/30 hover:bg-soft-green/20'}`}
                      >
                        {msg}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      value={cupMessage}
                      onChange={(e) => setCupMessage(e.target.value)}
                      placeholder="Or write your own sweet message..."
                      className="w-full bg-white dark:bg-black/20 border border-gray-100 dark:border-white/10 rounded-full px-6 py-4 font-serif text-lg text-text-dark focus:bg-white dark:focus:bg-surface-dark focus:border-primary/50 focus:ring-4 focus:ring-primary/10 outline-none transition-all shadow-sm pr-12"
                    />
                    <span className="material-icons absolute right-6 top-1/2 -translate-y-1/2 text-primary/50">edit</span>
                  </div>
                </div>
                <div className="flex justify-end mt-8">
                  <button onClick={() => setActiveStep(5)} className="group relative px-8 py-3 bg-soft-green text-text-dark rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                    <span className="absolute inset-0 w-full h-full bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></span>
                    <span className="relative flex items-center gap-2 font-medium tracking-wide">Next Step <span className="material-icons text-sm">arrow_forward</span></span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Step 05: Boost Your Glow */}
          <div className={stepWrapperClass(5)}>
            <button onClick={() => setActiveStep(5)} className={stepHeaderClass(5)}>
              <div className="flex items-center gap-4">
                <div className={stepNumberClass(5)}>5</div>
                <h2 className={stepTitleClass(5)}>
                  {activeStep === 5 ? 'Boost Your Glow' : `Add-ons: ${collagen ? 'Marine Collagen' : 'None'}`}
                </h2>
              </div>
              <span className={`material-icons text-primary/50 transition-transform duration-300 ${activeStep === 5 ? 'rotate-180' : ''}`}>expand_more</span>
            </button>
            
            {activeStep === 5 && (
              <div className="px-6 pb-8 animate-in fade-in slide-in-from-top-4 duration-500">
                <label className={`flex items-center p-5 rounded-[2rem] border transition-all duration-300 cursor-pointer group ${collagen ? 'border-primary/30 bg-soft-green/30 shadow-md' : 'border-gray-100 dark:border-white/5 bg-white dark:bg-black/20 hover:border-primary/20 hover:bg-soft-green/10'}`}>
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-5 flex-shrink-0 bg-gray-100 shadow-inner">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHRF1EbJZpaMipMT-TTqVyNT9J1QYnxp0z7Fd7MeBK6VtiPUNzMrbQ2XL3rDWKn3ycPFPAnQGQ0xygWSSeOpN-13GPzOy8dtp7tWMhez4kj0EW5xHJURf09r4PTW3lbhkEZw1xZgNS17D3zN1FECNd5c7lKw4249SuF9WGaKB7xG37KZq3XMV7s6LhkGCodvMZWWwJBvIDAHfzLAauOpxTNuXmuN0jwtfXN4frXb80LaVYyS2DWkUd4afnUIhMlF81K5OvAjgt5bY" alt="Collagen powder texture" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-serif text-xl text-text-dark dark:text-white group-hover:text-primary-dark transition-colors">Marine Collagen Peptides</h3>
                      <span className="text-xs font-bold text-primary-dark tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">+ GH₵ 12.00</span>
                    </div>
                    <p className="text-sm font-light text-text-light dark:text-slate-400 leading-relaxed max-w-[90%]">Promotes skin elasticity and hydration. Odorless and tasteless.</p>
                  </div>
                  <div className="ml-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${collagen ? 'bg-primary border-primary' : 'border-gray-300 dark:border-gray-600 bg-transparent'}`}>
                      {collagen && <span className="material-icons text-white text-[14px]">check</span>}
                    </div>
                    <input type="checkbox" className="sr-only" checked={collagen} onChange={(e) => setCollagen(e.target.checked)} />
                  </div>
                </label>
                
                <div className="flex justify-end mt-10">
                  <button onClick={() => navigate('/checkout')} className="group relative px-10 py-4 bg-primary-dark text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/30">
                    <span className="absolute inset-0 w-full h-full bg-black/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></span>
                    <span className="relative flex items-center gap-2 font-bold tracking-wide">Review Order <span className="material-icons text-sm">check_circle</span></span>
                  </button>
                </div>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};
