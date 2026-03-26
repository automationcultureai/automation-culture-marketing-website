"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import { Glow } from "@/components/ui/glow";
import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background";

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "white" | "glow";
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

  return (
    <section
      className={cn(
        "relative bg-background text-foreground",
        "py-12 sm:py-24 md:py-32 px-4",
        "overflow-hidden pb-0 sm:pb-0 md:pb-0"
      )}
    >
      {/* Mobile: glow centred behind text */}
      <AnimatedGradientBackground className="sm:hidden" position="50% 35%" />
      {/* Desktop: glow peaks up from behind dashboard image */}
      <AnimatedGradientBackground className="hidden sm:block" position="50% 75%" />

      <div className="relative z-10 mx-auto flex max-w-container flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {/* Badge */}
          {badge && (
            <Badge variant="outline" className="animate-appear gap-2">
              <span className="text-muted-foreground">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1">
                {badge.action.text}
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          )}

          {/* Title */}
          <h1 className="relative z-10 inline-block animate-hero-title text-4xl font-semibold leading-tight text-white drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-md relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-200 sm:text-xl">
            {description}
          </p>

          {/* Actions */}
          <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-400">
            {actions.map((action, index) => (
              <Button key={index} variant={action.variant ?? "default"} size="lg" asChild>
                <a href={action.href} className="flex items-center gap-2">
                  {action.icon}
                  {action.text}
                </a>
              </Button>
            ))}
          </div>

        </div>
      </div>

      {/* Image — full width, outside container — hidden on mobile */}
      <div className="hidden sm:block relative z-10 mt-16 pb-8 animate-hero-mockup -mx-4 px-10 sm:px-28">
        <Mockup type="responsive" className="shadow-[0_0_60px_rgba(161,161,170,0.4)]">
          <Image
            src={imageSrc ?? image.dark}
            alt={image.alt}
            width={1248}
            height={765}
            priority
            className="rounded-md w-full h-auto"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
        </Mockup>
      </div>
    </section>
  );
}
