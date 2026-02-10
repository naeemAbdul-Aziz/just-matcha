import { Variants } from "framer-motion";

// Spring physics configurations
export const springConfig = {
  soft: { type: "spring" as const, stiffness: 100, damping: 15 },
  medium: { type: "spring" as const, stiffness: 200, damping: 20 },
  snappy: { type: "spring" as const, stiffness: 300, damping: 25 },
  fluid: { type: "spring" as const, stiffness: 150, damping: 18, mass: 0.5 },
};

// Fade variants
export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: springConfig.soft },
};

// Slide up variants
export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: springConfig.medium },
};

// Scale variants
export const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: springConfig.snappy },
};

// Hover scale effect
export const hoverScale = {
  scale: 1.02,
  transition: springConfig.snappy,
};

// Tap scale effect
export const tapScale = {
  scale: 0.98,
  transition: springConfig.snappy,
};
