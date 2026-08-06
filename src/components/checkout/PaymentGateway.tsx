import React from 'react';

export const PaymentGateway: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="p-6 md:p-8 rounded-3xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-black/5 flex flex-col items-center text-center gap-4 transition-colors">
        <div className="w-16 h-16 rounded-full bg-[#09A5DB]/10 flex items-center justify-center mb-2">
          <span className="material-symbols-sharp text-3xl text-[#09A5DB]">lock</span>
        </div>
        <h3 className="font-bold text-lg text-brand-dark dark:text-white">Secure Checkout via Paystack</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
          You will be securely redirected to Paystack to complete your purchase. We accept all major credit cards and mobile money.
        </p>
        <div className="flex items-center gap-3 pt-4 opacity-60 grayscale dark:invert">
          {/* Faux icons for cards / momo */}
          <div className="h-6 w-10 bg-gray-300 rounded"></div>
          <div className="h-6 w-10 bg-gray-300 rounded"></div>
          <div className="h-6 w-10 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};
