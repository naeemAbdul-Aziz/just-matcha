import React from 'react';

const orders = [
  {
    id: "#JM-8821",
    time: "10:42 AM",
    customer: "Ama Osei",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrjoZSSqzf7zojqRn4nJt9yW5wRVr9h_KksO2Tu2AZAAlNZ3wK4RnuNhf7UMC65vjpit1pRfBEBaQFj5I7g8dD3JvTzuRSJImStSFGrzxGe_jYSrG3IcixDtKhcjy5U15HTgKWf59TKucoSPJAE-2AVXYztNisx0aSzj27nLxW0YLqlAQqoWsarQ91qMFsJ4JqOCfmQ51o5YZFLZCPsj0D5drLlahXpC9eb6c_MTkb_a3t5f0gfVKmgp8qe_aZOx_KZE41kZGAgqE",
    items: "Iced Matcha Latte",
    details: ["Almond Milk 50%", "+ Collagen"],
    payment: "MTN MoMo",
    paymentColor: "bg-yellow-50 text-yellow-700 border-yellow-100",
    paymentDot: "bg-yellow-500",
    total: "₵ 45.00",
    status: "Preparing",
    statusColor: "text-orange-700 bg-orange-50 border-orange-100",
  },
  {
    id: "#JM-8820",
    time: "10:38 AM",
    customer: "Kofi Boateng",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaJqvuGCBPM6iO4iL2VQbTLXyzbwYOFzdsrJX66lFgGALiYrxPJqaJaAP-8dEiQxwcWvkRzndPTKEKuCx2QGCMH0YNFkiK6EcgzNrjgCEc-nNQiGOkddRs5eX4xatHPrMEJ7__sFpkkKVS3ZOg158ZBHSMihTmL7kLdFZ3feWE3N7muelL9o2YWuDBER9TBtFZ6tJjazR6kdlYLzImLZv-_g1kii3bt0e_m40Hz2VAqUEkFlBYZVdw2F-7expFtiIWyjfAEO2thPo",
    items: "Ceremonial Grade Shot",
    details: ["Hot Water"],
    payment: "Cash",
    paymentColor: "bg-green-50 text-green-700 border-green-100",
    paymentDot: "bg-green-500",
    total: "₵ 25.00",
    status: "Pending",
    statusColor: "text-slate-600 bg-slate-100 border-slate-200",
  },
  {
    id: "#JM-8819",
    time: "10:15 AM",
    customer: "Efya Darko",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2uHz5L4brBkGeFUfo0AxtWqYZ76EqvaW3kfTyZ7y0yFmGh6m17vS6d_jDxioba8cvPJWJNZIfpLmKjrMj0i_2RAroCBy3g-8uYNY5oMJBXToIHq8Sqg2Z0PW2cqsAL14kuKpqjvxbgUtJiP6Zt6lSMyz7zmo3leC78T4M6BkigYJRmn4objhbtyHH0efXSzRcjbXqhixNugvcl4vv3dqLFCas5I25Of6ipELi7c-tjsdvNFDUHfckZGt2cDbG9wRhKPYs5-osSa8",
    items: "Vanilla Matcha Frappe",
    details: ["Oat Milk", "+ Extra Sweet"],
    payment: "Vodafone Cash",
    paymentColor: "bg-red-50 text-red-700 border-red-100",
    paymentDot: "bg-red-500",
    total: "₵ 55.00",
    status: "Delivered",
    statusColor: "text-green-700 bg-green-50 border-green-100",
  },
  {
    id: "#JM-8818",
    time: "09:55 AM",
    customer: "Yaw Asare",
    initials: "YA",
    items: "Dirty Matcha (Espresso)",
    details: ["Regular Milk"],
    payment: "MTN MoMo",
    paymentColor: "bg-yellow-50 text-yellow-700 border-yellow-100",
    paymentDot: "bg-yellow-500",
    total: "₵ 40.00",
    status: "Delivered",
    statusColor: "text-green-700 bg-green-50 border-green-100",
  }
];

export const OrderTable: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#152a18] rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 dark:bg-slate-800/20 border-b border-slate-100 dark:border-slate-800">
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Drink Details</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Payment</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Total</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {orders.map((order) => (
              <tr key={order.id} className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">
                  {order.id}
                  <span className="block text-xs font-normal text-slate-500 mt-0.5">{order.time}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    {order.avatar ? (
                      <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                        <img src={order.avatar} alt="Customer Avatar" className="h-full w-full object-cover" />
                      </div>
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary-dark font-bold text-xs">
                        {order.initials}
                      </div>
                    )}
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{order.customer}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-100">{order.items}</span>
                    <div className="flex flex-wrap gap-1">
                      {order.details && order.details.map((detail, index) => (
                        <span key={index} className="text-[10px] px-2 py-0.5 rounded-full bg-cream-accent border border-slate-200 text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400">{detail}</span>
                      ))}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${order.paymentColor}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${order.paymentDot}`}></span>
                    {order.payment}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">
                  {order.total}
                </td>
                <td className="px-6 py-4">
                  <div className="relative inline-block text-left group/dropdown">
                    <button type="button" className={`inline-flex items-center gap-2 justify-between w-32 px-3 py-1.5 text-xs font-semibold border rounded-lg hover:shadow-sm focus:outline-none transition-colors ${order.statusColor}`}>
                      {order.status}
                      <span className="material-icons text-[16px]">expand_more</span>
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                    <span className="material-icons text-[20px]">more_vert</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
        <span className="text-xs text-slate-500 dark:text-slate-400">Showing 1-4 of 24 orders</span>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50">
            <span className="material-icons text-[16px]">chevron_left</span>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-slate-900 font-semibold text-xs">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">2</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">3</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <span className="material-icons text-[16px]">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
};
