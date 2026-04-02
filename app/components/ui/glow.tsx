import { cn } from "@/lib/utils";

interface GlowProps {
  variant?: "top" | "bottom" | "center";
  className?: string;
}

export function Glow({ variant = "center", className }: GlowProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full",
        {
          "top-0 -translate-y-1/2": variant === "top",
          "bottom-0 translate-y-1/2": variant === "bottom",
          "top-1/2 -translate-y-1/2": variant === "center",
        },
        "h-64 w-full blur-3xl bg-[#C4394A]/10",
        className
      )}
    />
  );
}