import React from 'react';

export const DashboardStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {/* Card 1 */}
      <div className="bg-white dark:bg-[#152a18] p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <span className="material-symbols-sharp text-primary text-[24px]">shopping_bag</span>
          </div>
          <span className="text-xs font-semibold text-green-600 bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded-md">+12%</span>
        </div>
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">12</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Pending Orders</p>
      </div>

      {/* Card 2 */}
      <div className="bg-white dark:bg-[#152a18] p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <span className="material-symbols-sharp text-yellow-600 dark:text-yellow-400 text-[24px]">payments</span>
          </div>
        </div>
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">₵ 2,450</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Daily Revenue</p>
      </div>

      {/* Card 3 */}
      <div className="bg-white dark:bg-[#152a18] p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <span className="material-symbols-sharp text-blue-600 dark:text-blue-400 text-[24px]">blender</span>
          </div>
        </div>
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Collagen</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Top Add-on Today</p>
      </div>

      {/* Card 4 */}
      <div className="bg-white dark:bg-[#152a18] p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <span className="material-symbols-sharp text-purple-600 dark:text-purple-400 text-[24px]">schedule</span>
          </div>
        </div>
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">14m</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Avg. Prep Time</p>
      </div>
    </div>
  );
};
