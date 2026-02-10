"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { slideUpVariants } from "@/lib/animations";

// Mock order data for demonstration
const MOCK_ORDERS = [
  {
    id: "1",
    orderId: "MATCHA-GLOW-482",
    customerPhone: "****5678",
    items: [{ name: "Classic Matcha Latte", matchaLevel: 50, quantity: 1 }],
    status: "pending",
    createdAt: new Date(Date.now() - 5 * 60000),
  },
  {
    id: "2",
    orderId: "SWIFT-ZEST-913",
    customerPhone: "****1234",
    items: [{ name: "Citrus Matcha Sparkle", matchaLevel: 25, quantity: 2 }],
    status: "mixing",
    createdAt: new Date(Date.now() - 10 * 60000),
  },
  {
    id: "3",
    orderId: "CALM-VIBE-204",
    customerPhone: "****9876",
    items: [{ name: "Berry Matcha Cloud", matchaLevel: 75, quantity: 1 }],
    status: "ready",
    createdAt: new Date(Date.now() - 15 * 60000),
  },
];

function OrderCard({ order }: { order: (typeof MOCK_ORDERS)[0] }) {
  const getTimeAgo = (date: Date) => {
    const minutes = Math.floor((Date.now() - date.getTime()) / 60000);
    return `${minutes}m ago`;
  };

  return (
    <Card hover={false} className="mb-4">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-2xl font-serif text-primary font-bold">
            {order.orderId}
          </h3>
          <p className="text-sm text-secondary">{order.customerPhone}</p>
        </div>
        <span className="text-xs text-secondary">
          {getTimeAgo(order.createdAt)}
        </span>
      </div>

      {/* Drink visualization */}
      <div className="space-y-2 mb-4">
        {order.items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            {/* Layered icon representation */}
            <div className="w-12 h-12 rounded-full border-2 border-primary/20 overflow-hidden flex flex-col">
              <div
                className="bg-matcha"
                style={{ height: `${100 - item.matchaLevel * 0.9}%` }}
              />
              <div className="bg-canvas flex-1" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-primary">{item.name}</p>
              <p className="text-xs text-secondary">
                {item.matchaLevel}% sweet • Qty: {item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        <button className="flex-1 py-2 px-4 rounded-3xl bg-matcha text-primary font-medium hover:shadow-glow-matcha transition-all">
          Next Stage
        </button>
        <button className="py-2 px-4 rounded-3xl border-2 border-border text-secondary hover:border-primary hover:text-primary transition-all">
          Details
        </button>
      </div>
    </Card>
  );
}

export default function AdminPage() {
  const pendingOrders = MOCK_ORDERS.filter((o) => o.status === "pending");
  const mixingOrders = MOCK_ORDERS.filter((o) => o.status === "mixing");
  const readyOrders = MOCK_ORDERS.filter((o) => o.status === "ready");

  return (
    <main className="min-h-screen py-8 px-6 bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          className="mb-8"
        >
          <h1 className="text-4xl font-serif text-canvas mb-2">
            Kitchen Display System
          </h1>
          <p className="text-matcha">
            Real-time order management • {MOCK_ORDERS.length} active orders
          </p>
        </motion.div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pending Column */}
          <div>
            <div className="bg-citrus/20 rounded-3xl p-4 mb-4">
              <h2 className="text-2xl font-serif text-canvas">
                Pending
                <span className="ml-2 text-lg text-citrus">
                  ({pendingOrders.length})
                </span>
              </h2>
            </div>
            {pendingOrders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>

          {/* Mixing Column */}
          <div>
            <div className="bg-matcha/20 rounded-3xl p-4 mb-4">
              <h2 className="text-2xl font-serif text-canvas">
                Mixing
                <span className="ml-2 text-lg text-matcha">
                  ({mixingOrders.length})
                </span>
              </h2>
            </div>
            {mixingOrders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>

          {/* Ready Column */}
          <div>
            <div className="bg-berry/20 rounded-3xl p-4 mb-4">
              <h2 className="text-2xl font-serif text-canvas">
                Ready
                <span className="ml-2 text-lg text-berry">
                  ({readyOrders.length})
                </span>
              </h2>
            </div>
            {readyOrders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
