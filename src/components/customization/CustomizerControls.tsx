import React from 'react';

interface CustomizerControlsProps {
  base: string;
  setBase: (base: string) => void;
  sweetness: number;
  setSweetness: (value: number) => void;
  collagen: boolean;
  setCollagen: (value: boolean) => void;
}

export const CustomizerControls: React.FC<CustomizerControlsProps> = ({
  base,
  setBase,
  sweetness,
  setSweetness,
  collagen,
  setCollagen,
}) => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-10">
      <div className="border-b border-gray-100 dark:border-white/10 pb-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900 dark:text-white">Customize Your Ritual</h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg">Crafted in Ghana, personalized by you.</p>
      </div>

      {/* Step 1: Base Selection */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">01. Select Your Base</h2>
          <button className="text-xs text-primary font-medium hover:underline">Compare Grades</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Option 1: Ceremonial */}
          <label className="relative group cursor-pointer">
            <input
              type="radio"
              name="base"
              className="peer sr-only"
              checked={base === 'ceremonial'}
              onChange={() => setBase('ceremonial')}
            />
            <div className="p-5 rounded-xl border-2 border-transparent bg-white dark:bg-surface-dark hover:border-gray-200 dark:hover:border-white/10 transition-all peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:shadow-soft">
              <div className="flex justify-between items-start mb-2">
                <span className="font-bold text-lg">Ceremonial Grade</span>
                <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 peer-checked:border-primary flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary opacity-0 peer-checked:opacity-100"></div>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">Highest quality, vibrant green, delicate sweetness. Best for pure enjoyment.</p>
              <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">GH₵ 45.00</span>
            </div>
          </label>

          {/* Option 2: Premium Latte */}
          <label className="relative group cursor-pointer">
            <input
              type="radio"
              name="base"
              className="peer sr-only"
              checked={base === 'premium'}
              onChange={() => setBase('premium')}
            />
            <div className="p-5 rounded-xl border-2 border-transparent bg-white dark:bg-surface-dark hover:border-gray-200 dark:hover:border-white/10 transition-all peer-checked:border-primary peer-checked:bg-primary/5 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <span className="font-bold text-lg">Premium Latte</span>
                <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 peer-checked:border-primary flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary opacity-0 peer-checked:opacity-100"></div>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">Robust flavor profile designed to cut through milk. Ideal for mixed drinks.</p>
              <span className="text-xs font-bold text-slate-500 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded">GH₵ 35.00</span>
            </div>
          </label>
        </div>
      </div>

      {/* Step 2: Sweetness Slider */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">02. Sweetness & Milk Ratio</h2>
          <span className="text-primary font-bold" id="sweetness-label">{sweetness}% • {sweetness === 50 ? 'Just Right' : sweetness < 50 ? 'Less Sweet' : 'Extra Sweet'}</span>
        </div>
        <div className="relative px-2 py-4">
          {/* Custom Ticks */}
          <div className="absolute top-1/2 left-0 w-full flex justify-between px-2 -translate-y-1/2 pointer-events-none z-0">
            <div className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="25"
            value={sweetness}
            onChange={(e) => setSweetness(parseInt(e.target.value))}
            className="w-full relative z-10 focus:outline-none focus:ring-0"
          />
          <div className="flex justify-between mt-4 text-xs font-medium text-slate-400">
            <span>Pure Energy</span>
            <span>Indulgence</span>
          </div>
        </div>

        {/* Flavor Tags */}
        <div className="flex gap-3 mt-4 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-xs font-semibold">
            <span className="material-icons text-sm">wb_sunny</span> Balanced
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-semibold">
            <span className="material-icons text-sm">water_drop</span> Creamy
          </span>
        </div>
      </div>

      {/* Step 3: Boost Your Glow */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">03. Boost Your Glow</h2>
        </div>
        <label className={`flex items-center p-4 rounded-xl border ${collagen ? 'border-primary/50 bg-primary/5' : 'border-gray-200 dark:border-white/10 bg-white dark:bg-surface-dark'} cursor-pointer hover:border-primary/50 transition-all group`}>
          <div className="relative w-16 h-16 rounded-lg overflow-hidden mr-4 flex-shrink-0 bg-gray-100">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHRF1EbJZpaMipMT-TTqVyNT9J1QYnxp0z7Fd7MeBK6VtiPUNzMrbQ2XL3rDWKn3ycPFPAnQGQ0xygWSSeOpN-13GPzOy8dtp7tWMhez4kj0EW5xHJURf09r4PTW3lbhkEZw1xZgNS17D3zN1FECNd5c7lKw4249SuF9WGaKB7xG37KZq3XMV7s6LhkGCodvMZWWwJBvIDAHfzLAauOpxTNuXmuN0jwtfXN4frXb80LaVYyS2DWkUd4afnUIhMlF81K5OvAjgt5bY"
              alt="Collagen powder texture"
              className="w-full h-full object-cover"
              data-alt="Detail of collagen powder texture"
            />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Marine Collagen Peptides</h3>
              <span className="text-sm font-bold text-slate-500">+ GH₵ 12.00</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-[90%]">Promotes skin elasticity and hydration. Odorless and tasteless.</p>
          </div>
          <div className="ml-4">
            <input
              type="checkbox"
              className="form-checkbox h-6 w-6 text-primary rounded border-gray-300 dark:border-gray-600 focus:ring-primary dark:bg-white/5"
              checked={collagen}
              onChange={(e) => setCollagen(e.target.checked)}
            />
          </div>
        </label>
      </div>

      {/* Additional Details Accordion (Visual only) */}
      <div className="border-t border-gray-100 dark:border-white/10 pt-6 mt-2">
        <button className="flex w-full justify-between items-center text-left group">
          <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">Nutritional Information</span>
          <span className="material-icons text-slate-400 group-hover:text-primary transition-colors">expand_more</span>
        </button>
      </div>
    </div>
  );
};
