import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../ui/Image';

const products = [
  {
    id: 1,
    name: "The Signature Iced",
    description: "Ceremonial grade, oat milk, honey.",
    price: "GH₵ 80.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAS4aOOofiudUDHuhjejeMXUiNV1OWfvLKmg1z8FnINDNElSSdYNKTsN8Rr2f2dFFNDaTfGk5wrAmw0uHkY4ZNL_7EbS54rAOd2AdWDD75ekW5LHM19wHH-vrpE9sfJCB8cSiN8767o_8TYJSkEGztCuteHSkVqZP6gz6WLyP4dyDUtw-tmNf64RhQmDg14NDPmV8kjYopiDehXAf4hRJoXpRzCIUTzwWolJDFrU1c2eGh_LHu2xZgY0-mj281A5GNdkI8xqbdH-rA",
    tag: "Bestseller",
    tagColor: "bg-white",
    tagTextColor: "text-text-dark",
    urlParams: "?base=ceremonial&milk=oat&sweetener=honey&intensity=50"
  },
  {
    id: 2,
    name: "Biscoff Cloud",
    description: "Premium grade, oat milk, biscoff.",
    price: "GH₵ 85.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5HjKZMgpfW3JPuFZW0aw90OwfOJJl_FjsJzoyF8Hu-eesgdmJyQhRxMl3faG0jyWMQOeG7pHD3qRmmUOgZAmg3Be5Eg_fQ84nCrMB1Zgs-eueHnShVkpSXmdVBAmt1aIxexWOKNUo1uilMNrgC1eXaDNvDid6XPgG-S9RJgnBCoLWHX3xKnIo5YTrpqBjMcZp503N8NLHLm48UxLZKeNTzi0Oo8fIwMQ1SGh1_AjEOmsQ50MCRx69r4FBIVbNBpd79QNyrS0tehk",
    tag: "Trending",
    tagColor: "bg-amber-800",
    tagTextColor: "text-white",
    urlParams: "?base=latte&milk=oat&sweetener=biscoff&intensity=75"
  },
  {
    id: 3,
    name: "Ceremonial Clear",
    description: "Pure ceremonial grade, spring water.",
    price: "GH₵ 65.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVwkLKiGCTL_j4bipQtgNKCP2a89Bl3mgT0uj-mPpx0lpA1CiUE2n-6T8ptTF-jT1MVfrAhmfilheFNVJKQkqO9BZHqNRqt53VTKmsDXGpyTfp01I7bPQK-7vfD84ZhzaI8vPRNbUnBDRLe-KrrYxF9bQlvC3kCVvi_c7FK6-_HmkS5ZU4MN6OLn1Zn-4k1vdUDgc-Fb1RUqWcrnKvpCAz1LnLE_3CgWOoVMn1HKmxTQWUi6VNf6LmP9cVUWaTt4Nu_lsxWmQPsfw",
    tag: "Purist",
    tagColor: "bg-primary-dark",
    tagTextColor: "text-white",
    urlParams: "?base=ceremonial&milk=water&intensity=100"
  }
];

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
          {products.map((product) => (
            <Link to={`/customize${product.urlParams}`} key={product.id} className="group cursor-pointer flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-auto snap-center block">
              <div className="relative bg-background-light rounded-3xl p-6 md:p-8 mb-4 md:mb-6 overflow-hidden transition-all duration-300 group-hover:bg-soft-green/30">
                {product.tag && (
                  <div className={`absolute top-4 right-4 ${product.tagColor} ${product.tagTextColor} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm z-10`}>
                    {product.tag}
                  </div>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover rounded-2xl mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-lg md:text-xl text-text-dark mb-1 group-hover:text-primary-dark transition-colors">{product.name}</h3>
                  <p className="text-xs md:text-sm text-text-light">{product.description}</p>
                </div>
                <span className="font-medium text-lg text-text-dark whitespace-nowrap flex-shrink-0 ml-4">{product.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
