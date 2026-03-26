import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "white" | "ghost" | "outline" | "glow" | "destructive";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
}

export function Button({
  children,
  className,
  variant = "default",
  size = "md",
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:pointer-events-none disabled:opacity-50",
        {
          // Variants
          "bg-orange-500 text-white hover:bg-orange-400":
  variant === "default",
          "bg-white text-black hover:bg-zinc-100":
  variant === "white",
          "bg-transparent text-white border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900":
            variant === "ghost",
          "bg-transparent text-white border border-zinc-700 hover:border-orange-500/50 hover:bg-orange-500/5":
            variant === "outline",
          "bg-transparent text-white hover:bg-white/5":
  variant === "glow",
          "bg-red-600 text-white hover:bg-red-700": variant === "destructive",
          // Sizes
          "px-3 py-1.5 text-sm": size === "sm",
          "px-4 py-2 text-sm": size === "md",
          "px-6 py-3 text-base": size === "lg",
          "p-2": size === "icon",
        },
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
