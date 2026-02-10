import React from 'react';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  return (
    <header className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full matcha-gradient opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-soft-green/30 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Text Content */}
        <div className="order-2 lg:order-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-soft-green/50 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-text-dark/80">Handcrafted in Ghana</span>
          </div>

          <h1 className="font-serif text-5xl lg:text-7xl leading-[1.1] text-text-dark">
            Unapologetic <br/>
            <span className="italic text-primary-dark">Flavors.</span>
          </h1>

          <p className="text-lg text-text-light max-w-md font-light leading-relaxed">
            Sweet, inviting, and purely authentic. Experience the luxury of layered ceremonial matcha, whisked with soul and delivered fresh to your door.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
            <Link to="/customize" className="group relative px-8 py-4 bg-soft-green text-text-dark rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
              <span className="absolute inset-0 w-full h-full bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></span>
              <span className="relative flex items-center gap-2 font-medium tracking-wide">
                Order Your Cup
                <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </span>
            </Link>

            <button className="flex items-center gap-3 text-text-dark hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-primary transition-colors">
                <span className="material-icons text-lg">play_arrow</span>
              </div>
              <span className="font-medium text-sm">See the pour</span>
            </button>
          </div>

          <div className="pt-12 flex items-center gap-8 border-t border-gray-200/50">
            <div className="text-center">
              <p className="font-serif text-2xl text-text-dark">4.9</p>
              <p className="text-xs text-text-light uppercase tracking-wide">Rating</p>
            </div>
            <div className="h-8 w-px bg-gray-300"></div>
            <div className="text-center">
              <p className="font-serif text-2xl text-text-dark">10k+</p>
              <p className="text-xs text-text-light uppercase tracking-wide">Sips Served</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="order-1 lg:order-2 relative group">
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 transition-transform duration-700 hover:scale-[1.01]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdlfbjuoRJzkOHiOEJmjdA9Qvu2Y1AfXriYzkITVqbf3jVpAHXYrh754V7Xxq79MYp2HaZuaXq0jWWW4mVEN5NX2eFxytN-JtgitjaVvo0M7gA0Z0gQ_7AX7gUe5EsWw4NAKiFL1xCzcobAYlrLGjyayNj-dcOzGfJ9847G2VBc-ue6wIAUtxhT8oHQHgORqo2zrzn63qHQ2-5juGfmzC1JQuNZajYAmIR5wGd9rH8FPFu2eRH3ZvEB-mpTvyk3-KUikou8XUX1Eg"
              alt="Close up of a layered matcha latte with ice and milk swirl in a clear glass"
              className="w-full h-full object-cover"
              data-alt="Luxurious layered matcha drink photography"
            />

            {/* Floating Badge */}
            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg transform transition-transform group-hover:translate-y-[-5px]">
              <div className="flex items-center gap-3">
                <div className="bg-soft-green p-2 rounded-full">
                  <span className="material-icons text-primary-dark text-lg">eco</span>
                </div>
                <div>
                  <p className="text-xs text-text-light uppercase tracking-wider font-bold">Grade</p>
                  <p className="text-sm font-serif text-text-dark">Ceremonial Premium</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements behind image */}
          <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-primary/20 rounded-[2.5rem]"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <span className="material-icons text-sm">keyboard_arrow_down</span>
      </div>
    </header>
  );
};
