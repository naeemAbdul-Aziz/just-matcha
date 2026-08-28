import React from 'react';

interface StatusTrackerProps {
  fulfillment?: 'delivery' | 'pickup';
}

export const StatusTracker: React.FC<StatusTrackerProps> = ({ fulfillment = 'delivery' }) => {
  const steps = fulfillment === 'pickup'
    ? [
        { icon: 'receipt_long', label: 'Order Received', sub: 'Ready to prepare', done: true },
        { icon: 'blender', label: 'Whisking your Matcha', sub: 'Our barista is crafting your drink with care.', active: true },
        { icon: 'store', label: 'Ready for Collection', sub: 'Head to the counter and show your code', done: false },
      ]
    : [
        { icon: 'receipt_long', label: 'Order Received', sub: 'Ready to prepare', done: true },
        { icon: 'blender', label: 'Whisking your Matcha', sub: 'Our barista is crafting your drink with care.', active: true },
        { icon: 'local_shipping', label: 'Out for Delivery', sub: 'Estimated 20–30 mins', done: false },
        { icon: 'check', label: 'Delivered', sub: 'Enjoy your glow!', done: false },
      ];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] p-8 shadow-sm">
      <h3 className="text-lg font-semibold mb-6 text-slate-900 dark:text-white">Order Status</h3>
      <div className="relative">
        <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-100 dark:bg-slate-800"></div>
        <div className="space-y-8 relative">
          {steps.map((step, i) => (
            <div key={i} className={`flex items-start gap-4 ${!step.done && !step.active ? 'opacity-50' : ''}`}>
              <div className={`relative z-10 flex-shrink-0 w-12 h-12 flex items-center justify-center`}>
                {step.active ? (
                  <>
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
                    <div className="relative w-12 h-12 rounded-full bg-white dark:bg-slate-800 border-2 border-primary flex items-center justify-center text-primary">
                      <span className="material-symbols-sharp animate-pulse">{step.icon}</span>
                    </div>
                  </>
                ) : step.done ? (
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">
                    <span className="material-symbols-sharp">{step.icon}</span>
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                    <span className="material-symbols-sharp">{step.icon}</span>
                  </div>
                )}
              </div>
              <div className="pt-2">
                <h4 className={`font-bold ${step.active ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>{step.label}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">{step.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
