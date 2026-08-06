import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StatusTracker } from '../components/success/StatusTracker';
import { OrderDetails } from '../components/success/OrderDetails';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: "easeIn" as const } }
};

export const OrderSuccessPage: React.FC = () => {
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
              </p>
            </div>

            {/* Unique Order Code Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 lg:p-8 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-sharp text-6xl text-primary">qr_code_2</span>
              </div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Your Unique Order Code</p>
              <div className="flex items-center gap-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-primary tracking-wide break-words">
                  #Matcha-Sweet-Berry
                </h2>
                <button className="p-2 text-slate-400 hover:text-primary transition-colors" title="Copy Code">
                  <span className="material-symbols-sharp">content_copy</span>
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-4">Keep this code handy for pick-up or support inquiries.</p>
            </div>

            {/* Progress Tracker */}
            <StatusTracker />
          </div>

          {/* Right Column: Summary & Map */}
          <div className="lg:col-span-5 space-y-6">
            <OrderDetails />

            {/* Map Preview Card */}
            <div className="bg-slate-200 dark:bg-slate-800 rounded-3xl h-40 md:h-48 w-full relative overflow-hidden group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCijjJGiJT8lsikuL9SexgqnvFWnyV9Gacpc25zIddLmpVo_ZUA5S0pJJGn2xMZ37fJ1xGBMoYDFiFJr8_t2_wxdVNlFfQaiYCewfWJgkaDWSidTaAS6E_huU_vZpg27LEa7AINCAIdd9bA2lQTTgqxD3C95aNvnm62WEbwzJ_qzOF2Wg0TLujUDOqt5JiCych9aRyEAmxS3oFRVhtfXnJs4mgA1r6OeRo13bU83hE8x-RYA1Ook0tImGCg5Q2O2YiiMBs3yvsemVY"
                alt="Map showing streets of Accra Ghana"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <button className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 hover:scale-105 transition-transform">
                  <span className="material-symbols-sharp text-primary">near_me</span>
                  Track on Map
                </button>
              </div>
            </div>

            {/* Secondary Actions */}
            <div className="grid grid-cols-2 gap-4">
              <button className="w-full py-3 px-4 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                Need Help?
              </button>
              <Link to="/customize" className="flex items-center justify-center w-full py-3 px-4 rounded-full bg-background-dark text-white font-bold hover:bg-black transition-colors shadow-lg shadow-background-dark/20">
                Shop Again
              </Link>
            </div>
          </div>
        </div>
      </main>


    </motion.div>
  );
};
