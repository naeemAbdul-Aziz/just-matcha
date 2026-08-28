import React, { useEffect, useState, useMemo } from 'react';
import { getOrders, type StoredOrder } from '../../lib/orderStore';
import { formatPrice } from '../../lib/menuData';

interface CustomerCRM {
  email: string;
  name: string;
  phone: string;
  orderCount: number;
  totalSpent: number;
  lastOrderDate: string;
}

export const CustomersTab: React.FC = () => {
  const [orders, setOrders] = useState<StoredOrder[]>([]);

  useEffect(() => {
    setOrders(getOrders());
  }, []);

  const customers = useMemo(() => {
    const map = new Map<string, CustomerCRM>();
    orders.forEach((o) => {
      if (o.status === 'Cancelled') return;
      const key = o.customer.email || o.customer.phone || 'guest';
      const existing = map.get(key);
      if (existing) {
        existing.orderCount += 1;
        existing.totalSpent += o.totalAmount;
        if (new Date(o.timestamp) > new Date(existing.lastOrderDate)) {
          existing.lastOrderDate = o.timestamp;
        }
      } else {
        map.set(key, {
          email: o.customer.email,
          name: o.customer.name,
          phone: o.customer.phone,
          orderCount: 1,
          totalSpent: o.totalAmount,
          lastOrderDate: o.timestamp,
        });
      }
    });
    return Array.from(map.values()).sort((a, b) => b.totalSpent - a.totalSpent);
  }, [orders]);

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-[#152a18] rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/70 dark:bg-slate-800/20 border-b border-slate-100 dark:border-slate-800">
                <th className="px-5 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Customer</th>
                <th className="px-5 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Contact</th>
                <th className="px-5 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Orders</th>
                <th className="px-5 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Lifetime Value</th>
                <th className="px-5 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Last Order</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {customers.map((c, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-5 py-4">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{c.name || 'Guest'}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-xs text-slate-500 dark:text-slate-400 block">{c.email || 'No email'}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block">{c.phone || 'No phone'}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm text-slate-900 dark:text-white font-medium">{c.orderCount}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm font-bold text-primary">{formatPrice(c.totalSpent)}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {new Date(c.lastOrderDate).toLocaleDateString()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
