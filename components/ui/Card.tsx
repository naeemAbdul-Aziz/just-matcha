import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { scaleVariants } from "@/lib/animations";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  const Component = hover ? motion.div : "div";

  return (
    <Component
      className={cn(
        "bg-canvas border border-border rounded-3xl p-8 shadow-soft",
        className,
      )}
      {...(hover && {
        whileHover: {
          scale: 1.02,
          boxShadow: "0 8px 32px rgba(13, 39, 12, 0.12)",
        },
        transition: { type: "spring", stiffness: 300, damping: 25 },
      })}
    >
      {children}
    </Component>
  );
}
