import { cn } from "@/lib/utils";

interface MockupFrameProps {
  children: React.ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
}

export function MockupFrame({ children, className, size = "medium" }: MockupFrameProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-[#ECEAE6] bg-[#F2F0EC] shadow-2xl backdrop-blur-sm",
        "ring-1 ring-[#1a1a1a]/5",
        {
          "p-2": size === "small",
          "p-3": size === "medium",
          "p-4": size === "large",
        },
        className
      )}
    >
      {/* Window chrome dots */}
      <div className="mb-2 flex items-center gap-1.5 px-1">
        <div className="h-2.5 w-2.5 rounded-full bg-[#9A9790]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#9A9790]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#9A9790]" />
      </div>
      {children}
    </div>
  );
}

interface MockupProps {
  children: React.ReactNode;
  type?: "responsive" | "mobile" | "desktop";
  className?: string;
}

export function Mockup({ children, type = "responsive", className }: MockupProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl",
        {
          "w-full": type === "responsive",
          "w-[320px]": type === "mobile",
          "w-[900px]": type === "desktop",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
