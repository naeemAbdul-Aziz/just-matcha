"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { slideUpVariants } from "@/lib/animations";
import Link from "next/link";

const MENU_ITEMS = [
  {
    id: 1,
    name: "Classic Matcha Latte",
    flavor: "Smooth, Balanced, Traditional",
    description: "Our signature blend with your choice of milk",
    price: 12,
  },
  {
    id: 2,
    name: "Citrus Matcha Sparkle",
    flavor: "Bright, Citrus, Clean",
    description: "Matcha meets yuzu and sparkling water",
    price: 14,
  },
  {
    id: 3,
    name: "Berry Matcha Cloud",
    flavor: "Sweet, Fruity, Creamy",
    description: "Strawberry-infused matcha with vanilla foam",
    price: 15,
  },
  {
    id: 4,
    name: "Pure Ceremonial",
    flavor: "Bold, Earthy, Authentic",
    description: "Traditional whisked matcha, nothing else",
    price: 10,
  },
  {
    id: 5,
    name: "Iced Matcha Tonic",
    flavor: "Refreshing, Herbal, Crisp",
    description: "Matcha with tonic water and fresh mint",
    price: 13,
  },
  {
    id: 6,
    name: "Coconut Matcha Dream",
    flavor: "Tropical, Rich, Indulgent",
    description: "Matcha with coconut milk and toasted coconut",
    price: 16,
  },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          className="text-center mb-16"
        >
          <Link
            href="/"
            className="inline-block mb-4 text-secondary hover:text-primary transition-colors"
          >
            ← Back
          </Link>
          <h1 className="text-5xl md:text-6xl font-serif text-primary mb-4">
            Our Menu
          </h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Curated matcha experiences. Each one crafted with intention.
          </p>
        </motion.div>

        {/* Menu Grid - Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MENU_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial="hidden"
              animate="visible"
              variants={slideUpVariants}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                {/* Drink Icon Placeholder */}
                <div className="w-16 h-16 rounded-full bg-matcha mb-4 flex items-center justify-center">
                  <span className="text-2xl">🍵</span>
                </div>

                <h3 className="text-2xl font-serif text-primary mb-2">
                  {item.name}
                </h3>

                <p className="text-sm text-secondary font-medium mb-3">
                  {item.flavor}
                </p>

                <p className="text-secondary mb-4 flex-grow">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-serif text-primary">
                    GH₵{item.price}
                  </span>
                  <Link
                    href="/build"
                    className="text-sm text-secondary hover:text-primary transition-colors"
                  >
                    Customize →
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="/build"
            className="inline-block text-lg text-secondary hover:text-primary transition-colors"
          >
            Or build your own from scratch →
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
