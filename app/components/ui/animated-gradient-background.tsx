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
        animate={{ opacity: 0.30 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          background: `radial-gradient(ellipse 140% 85% at ${position}, #fff0f2 0%, #f9a8b4 15%, #C4394A 38%, transparent 68%)`,
        }}
      />
    </div>
  );
}