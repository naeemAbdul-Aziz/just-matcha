"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { slideUpVariants, scaleVariants } from "@/lib/animations";
import Link from "next/link";
import { use } from "react";

export default function OrderConfirmationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return (
    <main className="min-h-screen py-12 px-6 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleVariants}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-matcha flex items-center justify-center shadow-glow-matcha">
            <span className="text-5xl">✓</span>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl font-serif text-primary mb-4">
            Order Confirmed!
          </h1>
          <p className="text-lg text-secondary mb-8">
            Your matcha is being crafted with intention.
          </p>
        </motion.div>

        {/* Order ID Card */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          transition={{ delay: 0.3 }}
        >
          <Card hover={false} className="p-8 mb-8">
            <p className="text-sm text-secondary mb-2">Your Order Code</p>
            <h2 className="text-4xl font-serif text-primary mb-6 tracking-wider">
              {id}
            </h2>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-citrus/20 text-primary">
              <span className="text-xl">⏱️</span>
              <span className="text-sm font-medium">Ready in 5-7 minutes</span>
            </div>
          </Card>
        </motion.div>

        {/* Status Info */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          transition={{ delay: 0.4 }}
          className="space-y-4 mb-8"
        >
          <Card hover={false} className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-matcha flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📱</span>
              </div>
              <div className="text-left">
                <h3 className="font-serif text-lg text-primary mb-1">
                  Track Your Order
                </h3>
                <p className="text-sm text-secondary">
                  Save this code: <strong>{id}</strong>
                  <br />
                  You can check your order status anytime.
                </p>
              </div>
            </div>
          </Card>

          <Card hover={false} className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-berry flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🏪</span>
              </div>
              <div className="text-left">
                <h3 className="font-serif text-lg text-primary mb-1">
                  Pickup Location
                </h3>
                <p className="text-sm text-secondary">
                  Just Matcha Flagship Store
                  <br />
                  Accra, Ghana
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          transition={{ delay: 0.5 }}
          className="flex gap-4 justify-center"
        >
          <Link href="/build">
            <Button variant="outline">Order Another</Button>
          </Link>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          transition={{ delay: 0.6 }}
          className="text-sm text-secondary mt-12"
        >
          Questions? We're here to help.
        </motion.p>
      </div>
    </main>
  );
}
