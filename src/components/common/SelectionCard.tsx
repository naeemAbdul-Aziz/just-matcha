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
      <div className={`p-4 sm:p-5 lg:p-8 rounded-2xl lg:rounded-3xl border flex flex-col w-full min-h-[100px] lg:min-h-[140px]
        ${selected 
          ? 'border-primary bg-soft-green dark:bg-primary/20 dark:border-primary/80' 
          : 'border-gray-200 bg-white dark:bg-[#222] dark:border-white/10'
        }`}>
        
        <div className="flex justify-between items-start mb-3 lg:mb-6">
          {icon ? (
            <div className={`w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center ${selected ? 'bg-white text-primary' : 'bg-gray-50 text-brand-dark dark:bg-white/5 dark:text-gray-400'}`}>
               <span className="material-symbols-sharp text-base lg:text-xl">{icon}</span>
            </div>
          ) : <div></div>}
          
          <div className={`w-5 h-5 lg:w-6 lg:h-6 rounded-full border flex items-center justify-center flex-shrink-0
            ${selected ? 'border-primary' : 'border-gray-300 dark:border-gray-600'}
          `}>
             <div className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full
               ${selected ? 'bg-primary' : 'hidden'}
             `}></div>
          </div>
        </div>

        <span className="font-serif text-base lg:text-xl sm:text-2xl font-bold text-brand-dark dark:text-white leading-tight mb-1 lg:mb-2">{title}</span>

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
