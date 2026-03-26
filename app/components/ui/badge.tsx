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
          "bg-orange-500/10 text-orange-400 ring-1 ring-orange-500/30": variant === "default",
          "bg-transparent text-zinc-400 ring-1 ring-zinc-700 hover:ring-zinc-500":
            variant === "outline",
          "bg-zinc-800 text-zinc-300": variant === "secondary",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
