"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { slideUpVariants, fadeVariants } from "@/lib/animations";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center overflow-hidden">
      {/* Top Navigation / Wordmark */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeVariants}
        className="w-full pt-12 pb-6 px-8 flex justify-center items-center z-10"
      >
        <div className="flex flex-col items-center">
          <span className="text-[10px] tracking-[0.4em] font-bold uppercase mb-1 opacity-40">
            Accra • London
          </span>
          <h1 className="text-lg tracking-[0.25em] font-semibold uppercase">
            Just Matcha
          </h1>
        </div>
      </motion.header>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col items-center justify-center px-8 text-center max-w-md w-full relative">
        {/* Decorative subtle element - Ghanaian inspired organic shape */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.03] pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.9,-44.7C84.6,-31.3,88.9,-15.7,87.3,-0.9C85.7,13.9,78.2,27.8,69.5,40.1C60.8,52.4,50.9,63,38.9,70.8C26.9,78.6,13.5,83.6,-0.6,84.7C-14.7,85.8,-29.3,82.9,-42.2,75.7C-55.1,68.5,-66.2,57,-73.4,43.6C-80.6,30.2,-83.8,15.1,-84.1,-0.2C-84.4,-15.4,-81.8,-30.8,-74.3,-43.8C-66.8,-56.8,-54.4,-67.4,-40.7,-74.4C-27,-81.4,-13.5,-84.8,0.4,-85.5C14.3,-86.2,28.6,-84.2,44.7,-76.4Z"
              fill="currentColor"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Editorial Headline */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUpVariants}
          transition={{ delay: 0.2 }}
          className="relative z-10 space-y-8"
        >
          <h2
            className="text-[2.75rem] leading-[1.1] font-serif italic"
            style={{ textShadow: "0px 4px 12px rgba(0,0,0,0.02)" }}
          >
            Unapologetic flavors. <br />
            <span className="not-italic font-normal">Built your way.</span>
          </h2>
          <p className="text-base font-light tracking-wide opacity-70 max-w-[240px] mx-auto leading-relaxed">
            Layered matcha, <br /> balanced intentionally.
          </p>
        </motion.div>

        {/* Aesthetic Center Image (Subtle) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 mb-8 w-48 h-64 overflow-hidden rounded-full shadow-2xl shadow-citrus/10"
        >
          <div className="w-full h-full bg-gradient-to-br from-matcha via-canvas to-berry opacity-40" />
        </motion.div>
      </div>

      {/* Bottom Action / CTA Area */}
      <motion.footer
        initial="hidden"
        animate="visible"
        variants={slideUpVariants}
        transition={{ delay: 0.6 }}
        className="w-full px-8 pb-16 pt-4 flex flex-col items-center z-10"
      >
        <Link href="/build" className="w-full max-w-xs">
          <Button
            size="lg"
            className="w-full shadow-xl shadow-citrus/20 flex items-center justify-center space-x-3"
          >
            <span className="tracking-wide text-sm uppercase">
              Build Your Matcha
            </span>
            <span className="text-lg">→</span>
          </Button>
        </Link>

        <div className="mt-8 flex space-x-8 opacity-40 text-[10px] uppercase tracking-[0.2em] font-medium">
          <Link href="/menu" className="hover:opacity-100 transition-opacity">
            Menu
          </Link>
          <a href="#" className="hover:opacity-100 transition-opacity">
            Philosophy
          </a>
          <a href="#" className="hover:opacity-100 transition-opacity">
            Locations
          </a>
        </div>
      </motion.footer>
    </main>
  );
}
