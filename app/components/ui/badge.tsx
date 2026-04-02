import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        {
          "bg-[#C4394A]/10 text-[#C4394A] ring-1 ring-[#C4394A]/25": variant === "default",
          "bg-[#F2F0EC] text-[#5C5A58] ring-1 ring-[#1a1a1a]/12":
            variant === "outline",
          "bg-[#F2F0EC] text-[#9A9790]": variant === "secondary",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
