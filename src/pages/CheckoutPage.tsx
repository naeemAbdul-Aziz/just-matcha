import React from 'react';
import { Link } from 'react-router-dom';
import { GuestForm } from '../components/checkout/GuestForm';
import { PaymentMethod } from '../components/checkout/PaymentMethod';
import { OrderSummarySticky } from '../components/checkout/OrderSummarySticky';

export const CheckoutPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full py-6 px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-icons text-brand-dark dark:text-primary text-3xl">spa</span>
          <span className="text-2xl font-bold text-brand-dark dark:text-white tracking-tight">Just Matcha</span>
        </div>
        <Link to="/customize" className="group flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-brand-dark dark:text-slate-400 dark:hover:text-primary transition-colors">
          <span className="material-icons text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Customizer
        </Link>
      </nav>

      <main className="flex-grow container mx-auto px-4 lg:px-12 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Guest Details & Payment */}
          <div className="lg:col-span-7 space-y-10 pt-4">
            <header className="space-y-2">
              <h1 className="text-3xl lg:text-4xl font-extrabold text-brand-dark dark:text-white">Secure Checkout</h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg">No account needed. Just pure matcha bliss.</p>
            </header>

            <GuestForm />
            <PaymentMethod />

            <div className="pt-6 hidden lg:block">
              <Link to="/success" className="w-full bg-brand-dark hover:bg-black text-white font-bold text-lg py-5 rounded-xl shadow-luxury hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                <span>Complete Order</span>
                <span className="material-icons">arrow_forward</span>
              </Link>
              <p className="text-center text-xs text-slate-400 mt-4">By placing this order, you agree to our Terms of Service.</p>
            </div>
          </div>

          {/* Right Column: Order Summary (Sticky) */}
          <OrderSummarySticky />
        </div>
      </main>
    </div>
  );
};
