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
        "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4394A] disabled:pointer-events-none disabled:opacity-50",
        {
          // Variants
          "bg-[#C4394A] text-white hover:bg-[#AD2F3E]":
  variant === "default",
          "bg-[#FAFAF8] text-[#1a1a1a] hover:bg-[#F2F0EC]":
  variant === "white",
          "bg-transparent text-[#1a1a1a] border border-[#ECEAE6] hover:border-[#1a1a1a] hover:bg-[#F2F0EC]":
            variant === "ghost",
          "bg-transparent text-[#1a1a1a] border border-[#1a1a1a]/30 hover:border-[#1a1a1a]/60 hover:bg-[#1a1a1a]/5":
            variant === "outline",
          "bg-transparent text-[#1a1a1a]":
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
