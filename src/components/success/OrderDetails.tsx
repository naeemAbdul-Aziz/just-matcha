import React from 'react';
import { Image } from '../ui/Image';

export const OrderDetails: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] p-6 shadow-lg shadow-slate-200/50 dark:shadow-none">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <h3 className="font-semibold text-lg text-slate-900 dark:text-white">Your Order</h3>
        <span className="text-sm text-slate-500">2 Items</span>
      </div>

      {/* Item 1 */}
      <div className="flex gap-4 mb-6">
        <div className="h-20 w-20 rounded-[1.5rem] bg-slate-50 dark:bg-slate-800 flex-shrink-0 overflow-hidden relative">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8U_x3JjpsW_seuA-QuK4gFxtxHxVovhLG_9g7mxIvvmJvD9CcBJm4GHw5esRswL672kv49M7BfS0ZLqPDe22etlYuK0krLUgquMrHsmSjEKU6leuGFptMS-UPTkgkpn9yXmDNL3-sZVTbxy5xRrqSplqq72Xc7Of70x3sSLX5r9zMBZM_lrztW9IZOrtgnAXtOixd_-KxU86DR1B9kpe4g9hsC1nsEaYNHgOOEszVBK83sMe_d2ul8lEVZHVki0FsjUYODwlHwGA"
            alt="Biscoff Behavior matcha latte"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <h4 className="font-bold text-slate-800 dark:text-slate-100">Biscoff Behavior</h4>
            <span className="font-semibold text-slate-900 dark:text-white">GH₵ 100.00</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">Large • Oat Milk • Standard Sweet</p>
          <p className="text-xs text-slate-500">+ Marine Collagen</p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="flex gap-4 mb-6">
        <div className="h-20 w-20 rounded-[1.5rem] bg-slate-50 dark:bg-slate-800 flex-shrink-0 overflow-hidden relative">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfIkhQo-5jpyEIQLA6AYzQdnzmlM5Zd1Y7wURPHKXQeBNw8ZEogoP-dyeuquRaAVHIP__hlH0-vubVl5bUJRm3fYvKtYnl93F8UrdpJfiwH3rYBrk5aXTuPo-tbTbbPmH30iLJWBoQGL01R6CLYfTv2ybWzVeWY0ySW_iqF3f9dSeEPH4sZafSs3a0rt1Yk-ANna_fKiq99q78KEizIe9IzKjYM42vXUeMhN4WzmCpgVSV5I5j0SaXHisLNdGyKM_Ysfv_hAGrzo4"
            alt="Thirst Trap matcha"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <h4 className="font-bold text-slate-800 dark:text-slate-100">Thirst Trap</h4>
            <span className="font-semibold text-slate-900 dark:text-white">GH₵ 80.00</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">Large • Almond Milk • Extra Sweet</p>
        </div>
      </div>

      {/* Totals */}
      <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-2">
        <div className="flex justify-between text-sm text-slate-500">
          <span>Subtotal</span>
          <span>GH₵ 180.00</span>
        </div>
        <div className="flex justify-between text-sm text-slate-500">
          <span>Marine Collagen</span>
          <span>GH₵ 25.00</span>
        </div>
        <div className="flex justify-between text-sm text-slate-500">
          <span>Delivery</span>
          <span>GH₵ 20.00</span>
        </div>
        <div className="flex justify-between text-base font-bold text-slate-900 dark:text-white pt-2">
          <span>Total</span>
          <span>GH₵ 225.00</span>
        </div>
      </div>
    </div>
  );
};
