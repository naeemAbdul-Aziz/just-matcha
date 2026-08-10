import React from 'react';

export const PaymentGateway: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="space-y-2 mb-8">
        <h2 className="text-3xl lg:text-4xl font-serif text-brand-dark dark:text-white">Complete your offering</h2>
        <p className="text-slate-500 dark:text-slate-400 font-light text-lg">Secure and seamless transactions.</p>
      </div>

      <div className="p-10 md:p-12 rounded-[2rem] border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-black/20 backdrop-blur-md flex flex-col items-center text-center gap-6 shadow-sm">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-2">
          <span className="material-symbols-sharp text-4xl text-primary">lock</span>
        </div>
        <h3 className="font-serif font-bold text-2xl text-brand-dark dark:text-white">Secure Checkout via Paystack</h3>
        <p className="text-base text-slate-500 dark:text-slate-400 max-w-md font-light leading-relaxed">
          You will be securely redirected to our payment partner to finalize your ritual. We seamlessly accept all major cards and mobile money.
        </p>
        <div className="flex items-center gap-4 pt-6 opacity-40 grayscale dark:invert">
          <div className="h-8 w-12 bg-gray-400 rounded-md"></div>
          <div className="h-8 w-12 bg-gray-400 rounded-md"></div>
          <div className="h-8 w-12 bg-gray-400 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};
