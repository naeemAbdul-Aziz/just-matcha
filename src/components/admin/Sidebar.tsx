import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 bg-white dark:bg-[#152a18] border-r border-slate-100 dark:border-slate-800 z-50">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">J</div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Just Matcha</h1>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl bg-primary/10 text-primary-dark dark:text-primary">
          <span className="material-icons text-[20px]">dashboard</span>
          Dashboard
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
          <span className="material-icons text-[20px]">receipt_long</span>
          Orders
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
          <span className="material-icons text-[20px]">inventory_2</span>
          Inventory
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
          <span className="material-icons text-[20px]">analytics</span>
          Analytics
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
          <span className="material-icons text-[20px]">people</span>
          Customers
        </a>
        {/* Back to Site Link for demo purposes */}
        <Link to="/" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors mt-4">
          <span className="material-icons text-[20px]">arrow_back</span>
          Back to Site
        </Link>
      </nav>

      <div className="p-4 border-t border-slate-100 dark:border-slate-800">
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
          <span className="material-icons text-[20px]">settings</span>
          Settings
        </a>
        <div className="mt-4 flex items-center gap-3 px-4">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkBtpgK8Knm_sezKSmJlrt1Jso488vZ5jCiHMQNo3wYw5kpozk77gaYCYFOX8u8_WP0Y7mhSKTrDAijYE2-sL7tvutLDUjs6ok2zQCqKBETEQHMehaCf5MBnPI-thwM90GNga-CYLvjii99a9l_HBcB_vSkhV3f7-en4Q4ZqnjoHxCB3zHu9uD3GrRDjG5asKMIOG5Zcol7HDH6iecB-KtQPpKTa4s_dyGwVpehkPkQmt0D-kp4UjWAmDRAFLh_-tRqoO2rENc8lg"
            className="w-9 h-9 rounded-full object-cover border border-slate-200 dark:border-slate-700"
            data-alt="Admin User Profile"
            alt="Admin Profile"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">Adwoa Mensah</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Store Manager</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
