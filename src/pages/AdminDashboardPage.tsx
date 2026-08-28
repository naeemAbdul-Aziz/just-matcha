import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DashboardStats } from '../components/admin/DashboardStats';
import { AdminOrderTable } from '../components/admin/OrderTable';
import { InventoryTab } from '../components/admin/InventoryTab';
import { AnalyticsTab } from '../components/admin/AnalyticsTab';
import { CustomersTab } from '../components/admin/CustomersTab';
import { clearOrders, seedDemoOrders } from '../lib/orderStore';

// ── Simple password gate ───────────────────────────────────────────────────
const ADMIN_PASSWORD = 'matcha2024'; // Change before production

const LoginGate: React.FC<{ onAuth: () => void }> = ({ onAuth }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('jm_admin_auth', '1');
      onAuth();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1f0f] flex items-center justify-center p-4">
      {/* Ambient BG */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-sm"
      >
        <div className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl ${shake ? 'animate-[shake_0.4s_ease]' : ''}`}>
          {/* Logo area */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 mb-4">
              <span className="material-symbols-sharp text-primary text-3xl">eco</span>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Just Matcha</h1>
            <p className="text-white/50 text-sm mt-1">Admin Access</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                autoFocus
                className={`w-full px-4 py-3.5 bg-white/5 border rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${error ? 'border-red-500/60 ring-1 ring-red-500/30' : 'border-white/10 focus:border-primary/50'}`}
                placeholder="Enter admin password"
              />
              {error && (
                <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                  <span className="material-symbols-sharp text-[14px]">error</span>
                  Incorrect password
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-primary hover:bg-primary-dark text-slate-900 font-bold rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-primary/30"
            >
              Enter Dashboard
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/" className="text-white/30 hover:text-white/60 text-xs transition-colors flex items-center justify-center gap-1">
              <span className="material-symbols-sharp text-[14px]">arrow_back</span>
              Back to store
            </Link>
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-5px); }
          80% { transform: translateX(5px); }
        }
      `}</style>
    </div>
  );
};

// ── Main Dashboard ─────────────────────────────────────────────────────────
export const AdminDashboardPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem('jm_admin_auth') === '1'
  );
  const [activeTab, setActiveTab] = useState<'dashboard' | 'orders' | 'inventory' | 'analytics' | 'customers'>('dashboard');
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem('jm_admin_auth');
    setIsAuthenticated(false);
  };

  const handleResetData = () => {
    clearOrders();
    seedDemoOrders();
    setShowResetConfirm(false);
    window.location.reload();
  };

  if (!isAuthenticated) {
    return <LoginGate onAuth={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="bg-slate-50 dark:bg-[#0d1f0f] text-slate-800 dark:text-slate-100 font-display min-h-screen flex">
      
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 bg-white dark:bg-[#111f13] border-r border-slate-100 dark:border-white/5 z-50">
        <div className="p-6 flex items-center gap-3 border-b border-slate-100 dark:border-white/5">
          <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
            <span className="material-symbols-sharp text-primary text-lg">eco</span>
          </div>
          <div>
            <h1 className="text-base font-bold text-slate-900 dark:text-white">Just Matcha</h1>
            <p className="text-xs text-slate-400">Admin Panel</p>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-0.5">
          {[
            { id: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
            { id: 'orders', icon: 'receipt_long', label: 'Orders' },
            { id: 'inventory', icon: 'inventory_2', label: 'Inventory' },
            { id: 'analytics', icon: 'analytics', label: 'Analytics' },
            { id: 'customers', icon: 'people', label: 'Customers' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-xl transition-all ${
                activeTab === item.id
                  ? 'bg-primary/10 text-primary-dark dark:text-primary font-semibold'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 font-medium'
              }`}
            >
              <span className="material-symbols-sharp text-[19px]">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-slate-100 dark:border-white/5 space-y-0.5">
          <button
            onClick={() => setShowResetConfirm(true)}
            className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-all"
          >
            <span className="material-symbols-sharp text-[19px]">restart_alt</span>
            Reset Demo Data
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl transition-all"
          >
            <span className="material-symbols-sharp text-[19px]">logout</span>
            Log out
          </button>
          <Link to="/" className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl transition-all">
            <span className="material-symbols-sharp text-[19px]">open_in_new</span>
            View Store
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-4 md:p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
              {new Date().toLocaleDateString('en-GH', { weekday: 'long', day: 'numeric', month: 'long' })}
            </p>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Order Management</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Manage orders, update statuses, and track today's performance.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative w-10 h-10 rounded-xl bg-white dark:bg-[#152a18] border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-500 shadow-sm hover:bg-slate-50 transition-colors">
              <span className="material-symbols-sharp text-[20px]">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#152a18]"></span>
            </button>
          </div>
        </header>

        {/* Dynamic Content */}
        {activeTab === 'dashboard' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <DashboardStats />
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Recent Orders</h3>
              </div>
              <AdminOrderTable />
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <AdminOrderTable />
          </div>
        )}

        {activeTab === 'inventory' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <InventoryTab />
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <AnalyticsTab />
          </div>
        )}

        {activeTab === 'customers' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <CustomersTab />
          </div>
        )}
      </main>

      {/* Reset Confirm Modal */}
      <AnimatePresence>
        {showResetConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={() => setShowResetConfirm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-[#152a18] rounded-2xl p-6 max-w-sm w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <span className="material-symbols-sharp text-red-500">warning</span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white">Reset all orders?</h3>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                This will clear all orders and reload the demo data. This cannot be undone.
              </p>
              <div className="flex gap-3">
                <button onClick={() => setShowResetConfirm(false)} className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-semibold text-sm hover:bg-slate-50 transition-colors">
                  Cancel
                </button>
                <button onClick={handleResetData} className="flex-1 py-2.5 rounded-xl bg-red-500 text-white font-semibold text-sm hover:bg-red-600 transition-colors">
                  Reset
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
