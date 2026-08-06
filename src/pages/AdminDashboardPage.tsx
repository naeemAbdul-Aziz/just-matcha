import React from 'react';
import { Sidebar } from '../components/admin/Sidebar';
import { DashboardStats } from '../components/admin/DashboardStats';
import { OrderTable } from '../components/admin/OrderTable';

export const AdminDashboardPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-display transition-colors duration-300 min-h-screen flex">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-4 md:p-8 overflow-y-auto">
        {/* Header & Top Actions */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Order Management</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage today's drink orders and status updates.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-[#152a18] text-slate-500 dark:text-slate-400 shadow-sm border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors relative">
              <span className="material-symbols-sharp text-[20px]">notifications</span>
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-slate-900"></span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary-dark text-slate-900 font-semibold text-sm rounded-xl transition-colors shadow-sm shadow-primary/20">
              <span className="material-symbols-sharp text-[18px]">add</span>
              New Order
            </button>
          </div>
        </header>

        <DashboardStats />

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            <button className="px-4 py-2 rounded-xl text-sm font-semibold bg-primary text-slate-900 shadow-sm">All Orders</button>
            <button className="px-4 py-2 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-[#152a18] hover:shadow-sm transition-all">Pending</button>
            <button className="px-4 py-2 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-[#152a18] hover:shadow-sm transition-all">Preparing</button>
            <button className="px-4 py-2 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-[#152a18] hover:shadow-sm transition-all">Delivered</button>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <span className="material-symbols-sharp absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#152a18] border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                placeholder="Search order ID or customer..."
              />
            </div>
            <button className="p-2.5 bg-white dark:bg-[#152a18] border border-slate-200 dark:border-slate-700 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-sharp text-[20px]">filter_list</span>
            </button>
          </div>
        </div>

        <OrderTable />
      </main>
    </div>
  );
};
