import React, { useEffect, useState } from 'react';
import { getInventory, updateInventoryStock, type InventoryItem } from '../../lib/orderStore';

export const InventoryTab: React.FC = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);

  const load = () => {
    setInventory(getInventory());
  };

  useEffect(() => {
    load();
  }, []);

  const handleRestock = (id: string, currentStock: number) => {
    updateInventoryStock(id, currentStock + 50); // Simple restock by 50 units
    load();
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-[#152a18] rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/70 dark:bg-slate-800/20 border-b border-slate-100 dark:border-slate-800">
                <th className="px-5 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Item</th>
                <th className="px-5 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Category</th>
                <th className="px-5 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Stock Level</th>
                <th className="px-5 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {inventory.map((item) => {
                const isLow = item.stock < 20;
                return (
                  <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-5 py-4">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">{item.name}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{item.category}</span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-bold ${isLow ? 'text-red-500' : 'text-slate-900 dark:text-white'}`}>
                          {item.stock} {item.unit}
                        </span>
                        {isLow && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                            LOW STOCK
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button
                        onClick={() => handleRestock(item.id, item.stock)}
                        className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary/10 text-primary-dark dark:text-primary hover:bg-primary/20 transition-colors"
                      >
                        Restock +50
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
