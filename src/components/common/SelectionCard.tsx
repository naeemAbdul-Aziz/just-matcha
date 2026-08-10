import React from 'react';

interface SelectionCardProps {
  title: string;
  description?: string;
  price?: string;
  icon?: string;
  selected: boolean;
  onSelect: () => void;
  isMulti?: boolean;
}

export const SelectionCard: React.FC<SelectionCardProps> = ({
  title,
  description,
  price,
  icon,
  selected,
  onSelect,
  isMulti = false,
}) => {
  return (
    <label className="relative cursor-pointer group flex w-full">
      <input
        type={isMulti ? "checkbox" : "radio"}
        className="peer sr-only"
        checked={selected}
        onChange={onSelect}
      />
      <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col w-full min-h-[140px]
        ${selected 
          ? 'border-primary bg-soft-green dark:bg-primary/20 dark:border-primary/80' 
          : 'border-gray-200 bg-white dark:bg-[#222] dark:border-white/10'
        }`}>
        
        <div className="flex justify-between items-start mb-6">
          {icon ? (
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${selected ? 'bg-white text-primary' : 'bg-gray-50 text-brand-dark dark:bg-white/5 dark:text-gray-400'}`}>
               <span className="material-symbols-sharp text-xl">{icon}</span>
            </div>
          ) : <div></div>}
          
          <div className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0
            ${selected ? 'border-primary' : 'border-gray-300 dark:border-gray-600'}
          `}>
             <div className={`w-3 h-3 rounded-full
               ${selected ? 'bg-primary' : 'hidden'}
             `}></div>
          </div>
        </div>

        <span className="font-serif text-xl sm:text-2xl font-bold text-brand-dark dark:text-white leading-tight mb-2">{title}</span>

        {description && (
          <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-4">
            {description}
          </p>
        )}

        <div className="mt-auto pt-2">
          {price && (
            <span className={`text-sm font-bold tracking-widest ${selected ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}>
              {price}
            </span>
          )}
        </div>
      </div>
    </label>
  );
};
