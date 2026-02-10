"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { slideUpVariants } from "@/lib/animations";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUpVariants}
          >
            <h1 className="text-7xl md:text-8xl font-serif text-primary mb-6">
              Just Matcha
            </h1>
            <p className="text-2xl md:text-3xl text-secondary mb-4 font-light">
              Unapologetic Flavors
            </p>
            <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-12">
              Layered matcha, balanced intentionally. Build your perfect matcha
              drink, your way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/build">
                <Button size="lg" variant="primary">
                  Build Your Matcha
                </Button>
              </Link>
              <Link href="/menu">
                <Button size="lg" variant="outline">
                  View Menu
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-secondary">
              <span className="text-sm">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                ↓
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-matcha/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUpVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
              Your Matcha, Your Rules
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Customize every detail of your drink, from matcha intensity to
              add-ons
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Choose Your Balance",
                description:
                  "Adjust matcha-to-milk ratio from 0-100%. Find your perfect intensity.",
                emoji: "⚖️",
              },
              {
                title: "Size Matters",
                description:
                  "Small, medium, or large. Pick the size that fits your vibe.",
                emoji: "🥤",
              },
              {
                title: "Add Your Touch",
                description:
                  "Collagen boost, extra shot, oat milk upgrade, and more.",
                emoji: "✨",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideUpVariants}
                transition={{ delay: index * 0.1 }}
                className="bg-canvas p-8 rounded-4xl border-2 border-border hover:border-primary transition-all hover:shadow-soft"
              >
                <div className="text-5xl mb-4">{feature.emoji}</div>
                <h3 className="text-2xl font-serif text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUpVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Ready to Create?
          </h2>
          <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
            Start building your perfect matcha drink. Pay now or pay when you
            arrive.
          </p>
          <Link href="/build">
            <Button size="lg" variant="primary">
              Start Building
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-secondary text-sm">
          <p>© 2026 Just Matcha. Unapologetic Flavors.</p>
        </div>
      </footer>
    </main>
  );
}
