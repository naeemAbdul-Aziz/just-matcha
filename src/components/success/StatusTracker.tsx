import React from 'react';

export const StatusTracker: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl p-8 shadow-sm">
      <h3 className="text-lg font-semibold mb-6 text-slate-900 dark:text-white">Order Status</h3>
      <div className="relative">
        {/* Vertical line connecting steps */}
        <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-100 dark:bg-slate-800"></div>
        <div className="space-y-8 relative">
          {/* Step 1: Completed */}
          <div className="flex items-start gap-4">
            <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="material-icons">receipt_long</span>
            </div>
            <div className="pt-2">
              <h4 className="font-bold text-slate-900 dark:text-white">Order Received</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">We got your order at 10:42 AM</p>
            </div>
          </div>

          {/* Step 2: Active */}
          <div className="flex items-start gap-4">
            <div className="relative z-10 flex-shrink-0 w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
              <div className="relative w-12 h-12 rounded-full bg-white dark:bg-slate-800 border-2 border-primary flex items-center justify-center text-primary">
                <span className="material-icons animate-pulse">blender</span>
              </div>
            </div>
            <div className="pt-2">
              <h4 className="font-bold text-primary dark:text-primary">Whisking your Matcha</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">Our barista is crafting your drink with care.</p>
            </div>
          </div>

          {/* Step 3: Pending */}
          <div className="flex items-start gap-4 opacity-50">
            <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center border border-slate-200 dark:border-slate-700">
              <span className="material-icons">local_shipping</span>
            </div>
            <div className="pt-2">
              <h4 className="font-medium text-slate-900 dark:text-white">Out for Delivery</h4>
              <p className="text-sm text-slate-500">Estimated 11:15 AM</p>
            </div>
          </div>

          {/* Step 4: Pending */}
          <div className="flex items-start gap-4 opacity-50">
            <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center border border-slate-200 dark:border-slate-700">
              <span className="material-icons">check</span>
            </div>
            <div className="pt-2">
              <h4 className="font-medium text-slate-900 dark:text-white">Delivered</h4>
              <p className="text-sm text-slate-500">Enjoy your glow!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
