import React from 'react';
import { Image } from '../ui/Image';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="pt-24 pb-12 lg:pb-16 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded-tr-[5rem] rounded-bl-[5rem] overflow-hidden shadow-xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuZthOPiJLe7ky_2ddsPwDprGY_o5hBSJlZLypChQ3gulUleuwtiRNf0IQDtx464VCulQU-LoQ5BU-VBDL_g_aKqBxP63EIkifsTGXk59gp60Xfwg3qvirSdSEK3Ol94xA2wFZL5nFj8OCaetfcoAZf5d-9K5_1UYGBr66etG7k5QAGzdFaxeWAf4BB_NZxxdHhHVuBbFmHgakSO4nFaHnYAymxD55w_ZYS3VMEd6PTK5ClpX3wedmMGDq3oI6Jp-e2LPFQhJvUW0"
                alt="Hands preparing matcha with bamboo whisk in a traditional bowl"
                className="w-full h-full object-cover"
                data-alt="Traditional matcha preparation process"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="space-y-8">
            <h2 className="font-serif text-4xl lg:text-5xl text-text-dark">Rooted in Ghana. <br/>Inspired by Tradition.</h2>

            <div className="space-y-6 text-text-light text-lg font-light leading-relaxed">
              <p>
                Just Matcha isn't just a drink; it's a movement. We source the finest ceremonial grade leaves and infuse them with the warmth and vibrancy of Ghanaian hospitality.
              </p>
              <p>
                Every cup tells a story of meticulous cultivation, handcrafted preparation, and unapologetic flavor. We believe that luxury should be accessible, sweet, and most importantly, shared.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex flex-col gap-2">
                <span className="material-symbols-sharp text-primary-dark text-3xl">spa</span>
                <h4 className="font-serif text-lg text-text-dark">100% Organic</h4>
                <p className="text-sm text-text-light">Sourced from sustainable farms with zero additives.</p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="material-symbols-sharp text-primary-dark text-3xl">volunteer_activism</span>
                <h4 className="font-serif text-lg text-text-dark">Community First</h4>
                <p className="text-sm text-text-light">Every purchase supports local growers in Ghana.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
