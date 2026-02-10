"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { slideUpVariants } from "@/lib/animations";
import { useCart } from "@/store/cart";
import { generateOrderId } from "@/lib/order-id";
import {
  usePaystackCheckout,
  ghsToKobo,
  generatePaymentReference,
} from "@/lib/paystack";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Script from "next/script";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total } = useCart();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"paystack" | "cash">(
    "cash",
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const { initializePayment } = usePaystackCheckout();

  const handleSubmitOrder = async () => {
    if (!phone || phone.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }

    if (paymentMethod === "paystack" && (!email || !email.includes("@"))) {
      alert("Please enter a valid email for payment");
      return;
    }

    setIsProcessing(true);
    const orderId = generateOrderId();

    if (paymentMethod === "cash") {
      // Cash on pickup - skip payment
      await new Promise((resolve) => setTimeout(resolve, 1500));
      router.push(`/order/${orderId}`);
    } else {
      // Paystack payment (Mobile Money or Card)
      const config = {
        reference: generatePaymentReference(orderId),
        email: email,
        amount: ghsToKobo(total()), // Convert GHS to kobo
        metadata: {
          orderId,
          phone,
          custom_fields: [
            {
              display_name: "Order ID",
              variable_name: "order_id",
              value: orderId,
            },
            {
              display_name: "Phone Number",
              variable_name: "phone",
              value: phone,
            },
          ],
        },
      };

      initializePayment(
        config,
        (response) => {
          // Payment successful
          console.log("Payment successful:", response);
          // In production, verify payment on backend before redirecting
          router.push(
            `/order/${orderId}?payment=success&ref=${response.reference}`,
          );
        },
        () => {
          // Payment closed/cancelled
          setIsProcessing(false);
        },
      );
    }
  };

  if (items.length === 0) {
    return (
      <main className="min-h-screen py-12 px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-primary mb-4">
            Your cart is empty
          </h1>
          <Link href="/build">
            <Button>Build Your Matcha</Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          className="mb-12"
        >
          <Link
            href="/build"
            className="inline-block mb-4 text-secondary hover:text-primary transition-colors"
          >
            ← Back to Builder
          </Link>
          <h1 className="text-5xl font-serif text-primary mb-4">
            Almost There
          </h1>
          <p className="text-lg text-secondary">
            Pay now or pay when you arrive. Your matcha, your rules.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUpVariants}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl font-serif text-primary mb-6">
              Your Order
            </h2>
            <div className="space-y-4">
              {items.map((item) => (
                <Card key={item.id} hover={false} className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-serif text-lg text-primary">
                        {item.name}
                      </h3>
                      <p className="text-sm text-secondary">
                        {item.customization.matchaLevel}% milk •{" "}
                        {item.customization.size}
                      </p>
                      {item.customization.extras &&
                        item.customization.extras.length > 0 && (
                          <p className="text-xs text-secondary mt-1">
                            + {item.customization.extras.join(", ")}
                          </p>
                        )}
                    </div>
                    <p className="font-medium text-primary">GH₵{item.price}</p>
                  </div>
                </Card>
              ))}

              <div className="flex justify-between items-center text-2xl font-serif text-primary pt-4 border-t border-border">
                <span>Total</span>
                <span>GH₵{total()}</span>
              </div>
            </div>
          </motion.div>

          {/* Checkout Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUpVariants}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <Card hover={false} className="p-6">
              <h3 className="text-lg font-serif text-primary mb-4">
                Your Phone Number
              </h3>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0XX XXX XXXX"
                className="w-full px-4 py-3 rounded-3xl border-2 border-border focus:border-primary outline-none transition-colors bg-canvas text-primary"
              />
              <p className="text-xs text-secondary mt-2">
                We'll use this to track your order. No signup required.
              </p>
            </Card>

            <Card hover={false} className="p-6">
              <h3 className="text-lg font-serif text-primary mb-4">
                Payment Method
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => setPaymentMethod("cash")}
                  className={`w-full p-4 rounded-3xl border-2 transition-all text-left ${
                    paymentMethod === "cash"
                      ? "border-primary bg-matcha shadow-glow-matcha"
                      : "border-border hover:border-secondary"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif text-lg text-primary">
                        Cash on Pickup
                      </p>
                      <p className="text-sm text-secondary">
                        Pay when you collect
                      </p>
                    </div>
                    <span className="text-2xl">💵</span>
                  </div>
                </button>

                <button
                  onClick={() => setPaymentMethod("momo")}
                  className={`w-full p-4 rounded-3xl border-2 transition-all text-left ${
                    paymentMethod === "momo"
                      ? "border-primary bg-matcha shadow-glow-matcha"
                      : "border-border hover:border-secondary"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif text-lg text-primary">
                        Mobile Money
                      </p>
                      <p className="text-sm text-secondary">
                        Pay now with MoMo
                      </p>
                    </div>
                    <span className="text-2xl">📱</span>
                  </div>
                </button>
              </div>
            </Card>

            <Button
              size="lg"
              className="w-full"
              onClick={handleSubmitOrder}
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Place Order"}
            </Button>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
