"use client";

import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";

export function MobileMotionConfig({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "never"}>
      {children}
    </MotionConfig>
  );
}
