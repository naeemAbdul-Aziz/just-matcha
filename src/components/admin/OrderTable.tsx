import React, { useState, useEffect, useMemo } from 'react';
import { getOrders, updateOrderStatus, seedDemoOrders, type StoredOrder, type OrderStatus } from '../../lib/orderStore';
import { formatPrice } from '../../lib/menuData';

const STATUSES: OrderStatus[] = ['Pending', 'Preparing', 'Out for Delivery', 'Delivered', 'Cancelled'];

const statusStyles: Record<OrderStatus, string> = {
  'Pending':          'text-slate-600 bg-slate-100 border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300',
  'Preparing':        'text-orange-700 bg-orange-50 border-orange-100 dark:bg-orange-900/20 dark:border-orange-800 dark:text-orange-400',
  'Out for Delivery': 'text-blue-700 bg-blue-50 border-blue-100 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-400',
  'Delivered':        'text-green-700 bg-green-50 border-green-100 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400',
  'Cancelled':        'text-red-600 bg-red-50 border-red-100 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400',
};

const statusDotStyles: Record<OrderStatus, string> = {
  'Pending':          'bg-slate-400',
  'Preparing':        'bg-orange-500',
  'Out for Delivery': 'bg-blue-500',
  'Delivered':        'bg-green-500',
  'Cancelled':        'bg-red-500',
};

interface StatusDropdownProps {
  orderId: string;
  current: OrderStatus;
  onUpdate: (id: string, status: OrderStatus) => void;
}

const StatusDropdown: React.FC<StatusDropdownProps> = ({ orderId, current, onUpdate }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`inline-flex items-center gap-1.5 justify-between w-36 px-3 py-1.5 text-xs font-semibold border rounded-lg hover:shadow-sm focus:outline-none transition-colors ${statusStyles[current]}`}
      >
        <span className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${statusDotStyles[current]}`}></span>
          {current}
        </span>
        <span className="material-symbols-sharp text-[14px]">{open ? 'expand_less' : 'expand_more'}</span>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-44 bg-white dark:bg-[#1a2e1c] border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl z-50 overflow-hidden">
          {STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => { onUpdate(orderId, s); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-xs font-medium flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${s === current ? 'text-primary font-bold' : 'text-slate-700 dark:text-slate-300'}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${statusDotStyles[s]}`}></span>
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const AdminOrderTable: React.FC = () => {
  const [orders, setOrders] = useState<StoredOrder[]>([]);
  const [filter, setFilter] = useState<OrderStatus | 'All'>('All');
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const reload = () => {
    seedDemoOrders();
    setOrders([...getOrders()].reverse()); // newest first
  };

  useEffect(() => {
    reload();
  }, []);

  const handleStatusUpdate = (id: string, status: OrderStatus) => {
    updateOrderStatus(id, status);
    reload();
  };

  const filtered = useMemo(() => {
    return orders.filter((o) => {
      const matchesFilter = filter === 'All' || o.status === filter;
      const q = search.toLowerCase();
      const matchesSearch = !q || 
        o.id.toLowerCase().includes(q) ||
        o.customer.name.toLowerCase().includes(q) ||
        o.drink.name.toLowerCase().includes(q) ||
        o.code.toLowerCase().includes(q);
      return matchesFilter && matchesSearch;
    });
  }, [orders, filter, search]);

  return (
    <div className="space-y-4">
      {/* Filters & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0" style={{ scrollbarWidth: 'none' }}>
          {(['All', ...STATUSES] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === s
                  ? 'bg-primary text-slate-900 shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-[#152a18] hover:shadow-sm'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-64 flex-shrink-0">
          <span className="material-symbols-sharp absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#152a18] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-slate-400"
            placeholder="Search order, customer…"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-[#152a18] rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/70 dark:bg-slate-800/20 border-b border-slate-100 dark:border-slate-800">
                <th className="px-5 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Order</th>
                <th className="px-5 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Customer</th>
                <th className="px-5 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Drink</th>
                <th className="px-5 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Fulfillment</th>
                <th className="px-5 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Total</th>
                <th className="px-5 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-5 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-5 py-16 text-center text-slate-400 text-sm">
                    <span className="material-symbols-sharp text-4xl block mb-2 opacity-30">search_off</span>
                    No orders found
                  </td>
                </tr>
              )}
              {filtered.map((order) => (
                <React.Fragment key={order.id}>
                  <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-5 py-4">
                      <span className="text-sm font-bold text-slate-900 dark:text-white block">{order.id}</span>
                      <span className="text-xs text-slate-400">{order.displayTime}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200 block">{order.customer.name || 'Guest'}</span>
                      <span className="text-xs text-slate-400 truncate block max-w-[140px]">{order.customer.phone}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-100 block">{order.drink.name}</span>
                      <span className="text-xs text-slate-400">{order.customizations.milkType} milk × {order.quantity}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${
                        order.fulfillment === 'delivery'
                          ? 'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800'
                          : 'bg-purple-50 text-purple-700 border-purple-100 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800'
                      }`}>
                        <span className="material-symbols-sharp text-[13px]">{order.fulfillment === 'delivery' ? 'local_shipping' : 'store'}</span>
                        {order.fulfillment === 'delivery' ? 'Delivery' : 'Pickup'}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm font-bold text-slate-900 dark:text-white">{formatPrice(order.totalAmount)}</td>
                    <td className="px-5 py-4">
                      <StatusDropdown orderId={order.id} current={order.status} onUpdate={handleStatusUpdate} />
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button
                        onClick={() => setExpandedId(expandedId === order.id ? null : order.id)}
                        className="text-slate-400 hover:text-primary transition-colors"
                        title="View details"
                      >
                        <span className="material-symbols-sharp text-[20px]">{expandedId === order.id ? 'expand_less' : 'expand_more'}</span>
                      </button>
                    </td>
                  </tr>
                  {expandedId === order.id && (
                    <tr className="bg-slate-50/50 dark:bg-slate-800/10">
                      <td colSpan={7} className="px-5 py-4">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                          <div>
                            <p className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Order Code</p>
                            <p className="font-mono text-primary font-bold">#{order.code}</p>
                          </div>
                          <div>
                            <p className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Email</p>
                            <p className="text-slate-700 dark:text-slate-200">{order.customer.email || '—'}</p>
                          </div>
                          <div>
                            <p className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Address</p>
                            <p className="text-slate-700 dark:text-slate-200">{order.customer.address || '—'}, {order.customer.city || ''}</p>
                          </div>
                          <div>
                            <p className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Add-ons</p>
                            <p className="text-slate-700 dark:text-slate-200">
                              {Object.entries(order.customizations.boosts).filter(([, v]) => v).map(([k]) => k).join(', ') || 'None'}
                            </p>
                          </div>
                          {order.customizations.cupMessage && (
                            <div className="col-span-2 sm:col-span-4">
                              <p className="font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Cup Message</p>
                              <p className="text-slate-700 dark:text-slate-200 italic">"{order.customizations.cupMessage}"</p>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-5 py-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Showing {filtered.length} of {orders.length} orders
          </span>
          <button
            onClick={reload}
            className="text-xs text-slate-400 hover:text-primary transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-sharp text-[14px]">refresh</span>
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Re-export as OrderTable for backwards compat ──────────────────────────
export { AdminOrderTable as OrderTable };
