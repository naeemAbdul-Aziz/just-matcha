import React, { useEffect, useState } from 'react';
import { getOrders, type StoredOrder } from '../../lib/orderStore';
import { formatPrice } from '../../lib/menuData';

export const AnalyticsTab: React.FC = () => {
  const [orders, setOrders] = useState<StoredOrder[]>([]);

  useEffect(() => {
    setOrders(getOrders());
  }, []);

  const totalRevenue = orders.filter((o) => o.status !== 'Cancelled').reduce((sum, o) => sum + o.totalAmount, 0);
  const totalOrders = orders.filter((o) => o.status !== 'Cancelled').length;

  return (
    <div className="space-y-6">
      {/* High level metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-[#152a18] p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Total All-Time Revenue</p>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{formatPrice(totalRevenue)}</h3>
        </div>
        <div className="bg-white dark:bg-[#152a18] p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Total Orders</p>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{totalOrders}</h3>
        </div>
      </div>

      {/* Basic Tailwind Chart Placeholder for Sales Trends */}
      <div className="bg-white dark:bg-[#152a18] p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-6">Revenue (Last 7 Days)</h3>
        <div className="h-48 flex items-end justify-between gap-2">
          {[40, 60, 35, 80, 50, 95, 70].map((h, i) => (
            <div key={i} className="w-full bg-slate-100 dark:bg-slate-800/50 rounded-t-lg relative group">
              <div 
                className="absolute bottom-0 w-full bg-primary rounded-t-lg transition-all duration-500 group-hover:opacity-80" 
                style={{ height: `${h}%` }}
              ></div>
              <div className="absolute -bottom-6 w-full text-center text-xs text-slate-400">Day {i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
