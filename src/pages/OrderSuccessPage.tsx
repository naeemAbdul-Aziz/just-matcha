import React, { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StatusTracker } from '../components/success/StatusTracker';
import { type StoredOrder } from '../lib/orderStore';
import { formatPrice } from '../lib/menuData';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: "easeIn" as const } }
};

const BOOST_NAMES: Record<string, string> = {
  collagen: 'Marine Collagen',
  maca: 'Maca Root',
  ashwagandha: 'Ashwagandha',
};

const BOOST_PRICES: Record<string, number> = {
  collagen: 25,
  maca: 15,
  ashwagandha: 20,
};

export const OrderSuccessPage: React.FC = () => {
  const location = useLocation();
  const order = location.state?.order as StoredOrder | undefined;

  const activeBoosts = order
    ? Object.entries(order.customizations.boosts).filter(([, v]) => v)
    : [];

  const handleCopyCode = useCallback(() => {
    if (order?.code) {
      navigator.clipboard.writeText(`#${order.code}`).catch(() => {});
    }
  }, [order]);

  const handleHelp = () => {
    const msg = order
      ? `Hi, I need help with order ${order.id} (#${order.code})`
      : 'Hi, I need help with my order.';
    window.open(`https://wa.me/233000000000?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-display antialiased min-h-screen flex flex-col">

      <main className="flex-grow flex items-center justify-center pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Abstract Background Illustrations */}
        <div className="absolute top-20 left-10 opacity-[0.03] pointer-events-none transform -rotate-12">
          <span className="material-symbols-sharp text-7xl text-primary">local_cafe</span>
        </div>
        <div className="absolute bottom-20 right-10 opacity-[0.03] pointer-events-none transform rotate-12">
          <span className="material-symbols-sharp text-7xl text-primary">eco</span>
        </div>

        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          {/* Left Column: Status & Confirmation */}
          <div className="lg:col-span-7 space-y-8">
            {/* Success Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-dark dark:text-primary text-sm font-semibold mb-2">
                <span className="material-symbols-sharp text-sm">check_circle</span>
                Order Confirmed
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
                Sit back, your glow is on the way.
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg">
                We've received your order and our matcha masters are getting to work.
                {order?.customer?.name ? ` See you soon, ${order.customer.name.split(' ')[0]}!` : ''}
              </p>
            </div>

            {/* Order Code Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 lg:p-8 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-sharp text-6xl text-primary">qr_code_2</span>
              </div>
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Your Order ID</p>
                  <p className="text-sm font-mono text-slate-500 dark:text-slate-400 mb-3">{order?.id || '#JM-????'}</p>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Pickup Code</p>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-primary tracking-wide">
                      #{order?.code || 'Matcha-Sweet-Glow'}
                    </h2>
                    <button 
                      onClick={handleCopyCode}
                      className="p-2 text-slate-400 hover:text-primary transition-colors" 
                      title="Copy Code"
                    >
                      <span className="material-symbols-sharp">content_copy</span>
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Total Paid</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">{order ? formatPrice(order.totalAmount) : '—'}</p>
                  <p className="text-xs text-slate-400 mt-1">{order?.displayTime || ''}</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4">Keep this code handy for pick-up or support inquiries.</p>
            </div>

            {/* Order Items Summary */}
            {order && (
              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">What you ordered</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-300">{order.drink.name} × {order.quantity}</span>
                    <span className="font-medium text-slate-900 dark:text-white">{formatPrice(order.drink.price * order.quantity)}</span>
                  </div>
                  {activeBoosts.map(([id]) => (
                    <div key={id} className="flex justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">{BOOST_NAMES[id] || id}</span>
                      <span className="font-medium text-slate-900 dark:text-white">{formatPrice(BOOST_PRICES[id] || 0)}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-sm pt-3 border-t border-slate-100 dark:border-slate-800 font-bold">
                    <span className="text-slate-900 dark:text-white">Total</span>
                    <span className="text-slate-900 dark:text-white">{formatPrice(order.totalAmount)}</span>
                  </div>
                  {order.fulfillment === 'delivery' && order.customer.address && (
                    <p className="text-xs text-slate-400 pt-2 flex items-center gap-1">
                      <span className="material-symbols-sharp text-sm text-primary">location_on</span>
                      {order.customer.address}, {order.customer.city}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Progress Tracker */}
            <StatusTracker fulfillment={order?.fulfillment || 'delivery'} />
          </div>

          {/* Right Column: Actions */}
          <div className="lg:col-span-5 space-y-6">
            {/* Secondary Actions */}
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={handleHelp}
                className="w-full py-3 px-4 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-sharp text-[18px]">chat</span>
                Need Help?
              </button>
              <Link to="/customize" className="flex items-center justify-center w-full py-3 px-4 rounded-full bg-background-dark text-white font-bold hover:bg-black transition-colors shadow-lg shadow-background-dark/20">
                Shop Again
              </Link>
            </div>

            {/* Contact info reminder */}
            {order?.customer?.phone && (
              <div className="bg-primary/5 dark:bg-primary/10 rounded-3xl p-6 border border-primary/10">
                <p className="text-sm font-semibold text-primary-dark dark:text-primary mb-1">We'll contact you at</p>
                <p className="text-slate-700 dark:text-slate-200 font-medium">{order.customer.phone}</p>
                {order.customer.email && <p className="text-slate-500 dark:text-slate-400 text-sm">{order.customer.email}</p>}
              </div>
            )}
          </div>
        </div>
      </main>
    </motion.div>
  );
};
