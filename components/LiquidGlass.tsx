"use client";

import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface LiquidGlassProps {
  matchaLevel: number; // 0-100
  className?: string;
}

export function LiquidGlass({ matchaLevel, className }: LiquidGlassProps) {
  // Transform matchaLevel to visual percentages
  // 0 = 100% green, 100 = 10% green
  const greenHeight = useTransform(
    useMotionValue(matchaLevel),
    [0, 100],
    [100, 10],
  );

  const whiteHeight = useTransform(
    useMotionValue(matchaLevel),
    [0, 100],
    [0, 90],
  );

  return (
    <div className={cn("relative w-64 h-96 mx-auto", className)}>
      {/* Glass container */}
      <div className="absolute inset-0 rounded-5xl border-4 border-primary/20 overflow-hidden bg-canvas/50 backdrop-blur-sm">
        {/* White layer (milk) */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-canvas to-white/90"
          initial={{ height: "0%" }}
          animate={{ height: `${100 - matchaLevel * 0.9}%` }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 18,
            mass: 0.5,
          }}
        />

        {/* Green layer (matcha) */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-matcha via-secondary/40 to-matcha/60"
          initial={{ height: "100%" }}
          animate={{ height: `${100 - matchaLevel * 0.9}%` }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 18,
            mass: 0.5,
          }}
        />
      </div>

      {/* Glass shine effect */}
      <div className="absolute inset-0 rounded-5xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
    </div>
  );
}
