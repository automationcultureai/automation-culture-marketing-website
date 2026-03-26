"use client";

import { motion } from "framer-motion";

interface AnimatedGradientBackgroundProps {
  colors?: string[];
  className?: string;
  position?: string;
}

export function AnimatedGradientBackground({
  className = "",
  position = "50% 75%",
}: AnimatedGradientBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          background: `radial-gradient(ellipse 100% 80% at ${position}, #fde68a 0%, #fb923c 18%, #c2410c 35%, transparent 70%)`,
        }}
      />
    </div>
  );
}