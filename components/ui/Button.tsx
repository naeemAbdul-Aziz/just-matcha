import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { hoverScale, tapScale } from "@/lib/animations";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "rounded-4xl font-sans font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary text-canvas hover:shadow-soft-lg",
    secondary: "bg-matcha text-primary hover:shadow-glow-matcha",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-canvas",
  };

  const sizes = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  return (
    <motion.button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={hoverScale}
      whileTap={tapScale}
      {...props}
    >
      {children}
    </motion.button>
  );
}
