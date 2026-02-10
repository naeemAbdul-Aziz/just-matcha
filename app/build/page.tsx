"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { LiquidGlass } from "@/components/LiquidGlass";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { slideUpVariants } from "@/lib/animations";
import { useDrinkBuilder } from "@/store/drink-builder";
import { useCart } from "@/store/cart";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PRESETS = [
  { value: 0, label: "Pure Matcha Energy", description: "0% Milk" },
  { value: 25, label: "Light Sweet, Balanced", description: "25% Milk" },
  { value: 50, label: "Just Right", description: "50% Milk" },
  { value: 75, label: "Creamy & Comforting", description: "75% Milk" },
  { value: 100, label: "Full Sweet Indulgence", description: "100% Milk" },
];

const SIZES = [
  { id: "small", label: "Small", price: 10, badge: "8oz" },
  { id: "medium", label: "Medium", price: 12, badge: "12oz" },
  { id: "large", label: "Large", price: 15, badge: "16oz" },
];

export default function BuildPage() {
  const router = useRouter();
  const {
    customization,
    setMatchaLevel,
    setSize,
    addExtra,
    removeExtra,
    reset,
  } = useDrinkBuilder();
  const { addItem } = useCart();
  const [hasCollagen, setHasCollagen] = useState(false);

  const currentPreset = PRESETS.reduce((prev, curr) => {
    return Math.abs(curr.value - customization.matchaLevel) <
      Math.abs(prev.value - customization.matchaLevel)
      ? curr
      : prev;
  });

  const selectedSize =
    SIZES.find((s) => s.id === customization.size) || SIZES[1];
  const totalPrice = selectedSize.price + (hasCollagen ? 40 : 0);

  const handleAddToOrder = () => {
    addItem({
      name: "Custom Matcha",
      customization: {
        ...customization,
        extras: hasCollagen ? ["Collagen Boost"] : [],
      },
      price: totalPrice,
      quantity: 1,
    });
    router.push("/checkout");
  };

  return (
    <main className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          className="text-center mb-12"
        >
          <Link
            href="/"
            className="inline-block mb-4 text-secondary hover:text-primary transition-colors"
          >
            ← Back
          </Link>
          <h1 className="text-5xl md:text-6xl font-serif text-primary mb-4">
            The Liquid Layering Engine
          </h1>
          <p className="text-lg text-secondary">
            Not a form. A visual, physics-based drink builder.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Visual Glass */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUpVariants}
            transition={{ delay: 0.2 }}
            className="flex justify-center sticky top-12"
          >
            <LiquidGlass matchaLevel={customization.matchaLevel} />
          </motion.div>

          {/* Controls */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUpVariants}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Current Selection */}
            <div>
              <h2 className="text-3xl font-serif text-primary mb-2">
                {currentPreset.label}
              </h2>
              <p className="text-secondary">{currentPreset.description}</p>
            </div>

            {/* Vertical Slider */}
            <div className="relative h-80">
              <input
                type="range"
                min="0"
                max="100"
                value={customization.matchaLevel}
                onChange={(e) => setMatchaLevel(Number(e.target.value))}
                className="absolute left-1/2 -translate-x-1/2 w-80 h-2 bg-border rounded-full appearance-none cursor-pointer
                  [writing-mode:vertical-lr] [direction:rtl]
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 
                  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary 
                  [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-soft
                  [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full 
                  [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:cursor-pointer 
                  [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:shadow-soft"
              />

              {/* Preset markers */}
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-border">
                {PRESETS.map((preset) => (
                  <button
                    key={preset.value}
                    onClick={() => setMatchaLevel(preset.value)}
                    className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary/40 hover:bg-secondary transition-colors"
                    style={{ top: `${preset.value}%` }}
                    title={preset.label}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <Card hover={false} className="p-6">
              <h3 className="text-lg font-serif text-primary mb-4">
                Choose Your Size
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {SIZES.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSize(size.id as any)}
                    className={`p-4 rounded-3xl border-2 transition-all ${
                      customization.size === size.id
                        ? "border-primary bg-matcha shadow-glow-matcha"
                        : "border-border hover:border-secondary"
                    }`}
                  >
                    <div className="text-center">
                      <p className="font-serif text-lg text-primary">
                        {size.label}
                      </p>
                      <p className="text-xs text-secondary mb-1">
                        {size.badge}
                      </p>
                      <p className="text-sm font-medium text-primary">
                        GH₵{size.price}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Collagen Add-on */}
            <Card hover={false} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-serif text-primary mb-1">
                    Collagen Boost ✨
                  </h3>
                  <p className="text-sm text-secondary">
                    Premium collagen for skin & wellness
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary font-medium">+GH₵40</span>
                  <button
                    onClick={() => setHasCollagen(!hasCollagen)}
                    className={`w-14 h-8 rounded-full transition-all ${
                      hasCollagen ? "bg-matcha" : "bg-border"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full bg-primary transition-transform ${
                        hasCollagen ? "translate-x-7" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </Card>

            {/* Price & Actions */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-2xl font-serif text-primary">
                <span>Total</span>
                <span>GH₵{totalPrice}</span>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="flex-1" onClick={handleAddToOrder}>
                  Add to Order
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    reset();
                    setHasCollagen(false);
                  }}
                >
                  Reset
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
