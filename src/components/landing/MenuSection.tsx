import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../ui/Image';
import { FEATURED_ITEMS, formatPrice } from '../../lib/menuData';

// Hero images for the three featured drinks
const featuredImages: Record<string, string> = {
  'thirst-trap': 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS4aOOofiudUDHuhjejeMXUiNV1OWfvLKmg1z8FnINDNElSSdYNKTsN8Rr2f2dFFNDaTfGk5wrAmw0uHkY4ZNL_7EbS54rAOd2AdWDD75ekW5LHM19wHH-vrpE9sfJCB8cSiN8767o_8TYJSkEGztCuteHSkVqZP6gz6WLyP4dyDUtw-tmNf64RhQmDg14NDPmV8kjYopiDehXAf4hRJoXpRzCIUTzwWolJDFrU1c2eGh_LHu2xZgY0-mj281A5GNdkI8xqbdH-rA',
  'biscoff-behavior': '/biscoff-matcha.png',
  'matchatwi': '/ceremonial-clear.png',
};

export const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="pt-12 md:pt-24 pb-12 lg:pb-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-row justify-between items-end mb-8 md:mb-16 gap-4">
          <div className="flex-grow pr-4">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-text-dark mb-2">Curated Sips</h2>
            <p className="text-sm md:text-base text-text-light max-w-sm line-clamp-2">From the classic ceremonial whisk to adventurous fusions.</p>
          </div>
          <Link to="/customize" className="text-primary-dark hover:text-primary font-medium flex items-center gap-1 transition-colors whitespace-nowrap text-sm md:text-base pb-1">
            View Menu <span className="material-symbols-sharp text-sm">arrow_forward</span>
          </Link>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 pb-8 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
          {FEATURED_ITEMS.map((item) => (
            <Link to={`/customize?drink=${item.id}`} key={item.id} className="group cursor-pointer flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-auto snap-center block">
              <div className="relative bg-background-light rounded-3xl p-6 md:p-8 mb-4 md:mb-6 overflow-hidden transition-all duration-300 group-hover:bg-soft-green/30">
                {item.tag && (
                  <div className={`absolute top-4 right-4 ${item.tagColor} ${item.tagTextColor} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm z-10`}>
                    {item.tag}
                  </div>
                )}
                <Image
                  src={featuredImages[item.id] || '/cup.png'}
                  alt={item.name}
                  className="w-full aspect-square object-cover rounded-2xl mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-lg md:text-xl text-text-dark mb-1 group-hover:text-primary-dark transition-colors">{item.name}</h3>
                  <p className="text-xs md:text-sm text-text-light">{item.description}</p>
                </div>
                <span className="font-medium text-lg text-text-dark whitespace-nowrap flex-shrink-0 ml-4">{formatPrice(item.price)}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
