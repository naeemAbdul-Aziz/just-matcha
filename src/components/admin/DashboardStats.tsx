import React, { useEffect, useState } from 'react';
import { getOrders, seedDemoOrders, type StoredOrder } from '../../lib/orderStore';
import { formatPrice } from '../../lib/menuData';

const revenueToday = (orders: StoredOrder[]) => {
  const today = new Date().toDateString();
  return orders
    .filter((o) => o.status !== 'Cancelled' && new Date(o.timestamp).toDateString() === today)
    .reduce((sum, o) => sum + o.totalAmount, 0);
};

const topBoost = (orders: StoredOrder[]): string => {
  const counts: Record<string, number> = {};
  orders.forEach((o) => {
    Object.entries(o.customizations.boosts)
      .filter(([, v]) => v)
      .forEach(([k]) => { counts[k] = (counts[k] || 0) + 1; });
  });
  const top = Object.entries(counts).sort(([, a], [, b]) => b - a)[0];
  if (!top) return '—';
  const NAMES: Record<string, string> = { collagen: 'Collagen', maca: 'Maca Root', ashwagandha: 'Ashwagandha' };
  return NAMES[top[0]] || top[0];
};

export const DashboardStats: React.FC = () => {
  const [orders, setOrders] = useState<StoredOrder[]>([]);

  useEffect(() => {
    seedDemoOrders();
    setOrders(getOrders());
  }, []);

  const pending = orders.filter((o) => o.status === 'Pending').length;
  const preparing = orders.filter((o) => o.status === 'Preparing').length;
  const revenue = revenueToday(orders);
  const boost = topBoost(orders);

  const stats = [
    {
      label: 'Pending Orders',
      value: pending.toString(),
      icon: 'shopping_bag',
      iconBg: 'bg-amber-50 dark:bg-amber-900/20',
      iconColor: 'text-amber-600 dark:text-amber-400',
      badge: pending > 0 ? `${pending} need action` : 'All clear',
      badgeColor: pending > 0 ? 'text-amber-700 bg-amber-100 dark:bg-amber-900/40 dark:text-amber-300' : 'text-green-700 bg-green-100 dark:bg-green-900/40',
    },
    {
      label: 'Daily Revenue',
      value: formatPrice(revenue),
      icon: 'payments',
      iconBg: 'bg-green-50 dark:bg-green-900/20',
      iconColor: 'text-green-600 dark:text-green-400',
      badge: `${orders.filter((o) => new Date(o.timestamp).toDateString() === new Date().toDateString()).length} orders today`,
      badgeColor: 'text-green-700 bg-green-100 dark:bg-green-900/40',
    },
    {
      label: 'Preparing Now',
      value: preparing.toString(),
      icon: 'blender',
      iconBg: 'bg-blue-50 dark:bg-blue-900/20',
      iconColor: 'text-blue-600 dark:text-blue-400',
      badge: 'In progress',
      badgeColor: 'text-blue-700 bg-blue-100 dark:bg-blue-900/40',
    },
    {
      label: 'Top Add-on',
      value: boost,
      icon: 'star',
      iconBg: 'bg-purple-50 dark:bg-purple-900/20',
      iconColor: 'text-purple-600 dark:text-purple-400',
      badge: 'Most selected today',
      badgeColor: 'text-purple-700 bg-purple-100 dark:bg-purple-900/40',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((s) => (
        <div key={s.label} className="bg-white dark:bg-[#152a18] p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-start mb-4">
            <div className={`p-2.5 ${s.iconBg} rounded-xl`}>
              <span className={`material-symbols-sharp text-[22px] ${s.iconColor}`}>{s.icon}</span>
            </div>
            <span className={`text-[10px] font-bold px-2 py-1 rounded-lg ${s.badgeColor}`}>{s.badge}</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white truncate">{s.value}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{s.label}</p>
        </div>
      ))}
    </div>
  );
};
