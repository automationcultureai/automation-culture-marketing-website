"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { Mockup } from "@/components/ui/mockup";
import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "white" | "glow";
  className?: string;
}

interface HeroProps {
  badge?: {
    text: string;
    action: {
      text: string;
      href: string;
    };
  };
  title: React.ReactNode;
  description: React.ReactNode;
  actions: HeroAction[];
  image: {
    light: string;
    dark: string;
    alt: string;
  };
}

export function HeroSection({
  badge,
  title,
  description,
  actions,
  image,
}: HeroProps) {
  const { resolvedTheme } = useTheme();
  const imageSrc = resolvedTheme === "light" ? image.light : image.dark;

  const { scrollY } = useScroll();
  const rotateX = useTransform(scrollY, [0, 600], [1, 12]);

  return (
    <section
      className={cn(
        "relative bg-[#FAFAF8] text-foreground",
        "py-12 sm:py-24 md:py-32 px-4",
        "overflow-hidden pb-12 sm:pb-0 md:pb-0"
      )}
    >


      {/* Mobile: subtle glow rising from bottom */}
      <div className="sm:hidden pointer-events-none absolute inset-0">
        <div style={{ background: "radial-gradient(ellipse 140% 50% at 50% 100%, rgba(196,57,74,0.18) 0%, rgba(196,57,74,0.07) 55%, transparent 80%)" }} className="absolute inset-0" />
      </div>



      <div className="relative z-10 mx-auto flex max-w-container flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {/* Badge */}
          {badge && (
            <Badge variant="outline" className="animate-appear animate-badge-shimmer gap-2 bg-[#C4394A]/8 ring-[#C4394A]/25">
              <span className="text-muted-foreground">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1 text-[#C4394A]">
                {badge.action.text}
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          )}

          {/* Title */}
          <h1 className="relative z-10 inline-block animate-hero-title text-4xl font-semibold leading-tight text-[#1a1a1a] drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-md relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-200 sm:text-xl">
            {description}
          </p>

          {/* Actions */}
          <div className="relative z-10 flex animate-appear justify-center gap-2 sm:gap-4 opacity-0 delay-400">
            {actions.map((action, index) => (
              <Button key={index} variant={action.variant ?? "default"} size="lg" className={`text-sm px-4 py-2.5 sm:text-base sm:px-6 sm:py-3 ${action.className ?? ""}`} asChild>
                <a href={action.href} className="flex items-center justify-center gap-2">
                  {action.icon}
                  {action.text}
                </a>
              </Button>
            ))}
          </div>

        </div>
      </div>

      {/* Image — full width, outside container — hidden on mobile */}
      <div className="hidden sm:block relative z-10 mt-16 pb-8 animate-hero-mockup -mx-4 px-10 sm:px-28" style={{ perspective: "800px" }}>
        <motion.div style={{ rotateX, transformOrigin: "50% 0%", boxShadow: "0 60px 120px rgba(0,0,0,0.18), 0 100px 200px rgba(0,0,0,0.10)", borderRadius: "12px", maskImage: "linear-gradient(to bottom, black 87%, transparent 91%)", WebkitMaskImage: "linear-gradient(to bottom, black 87%, transparent 91%)" }}>
        <Mockup type="responsive">
          <Image
            src={imageSrc ?? image.dark}
            alt={image.alt}
            width={1248}
            height={765}
            priority
            className="rounded-xl w-full h-auto"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
        </Mockup>
        </motion.div>
      </div>
    </section>
  );
}
