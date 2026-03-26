"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Who This Is For", href: "#who" },
  { label: "What We Do", href: "#how-it-works" },
  { label: "The Offer", href: "#offer" },
  { label: "About", href: "#founder" },
  { label: "FAQ", href: "#faq" },
  { label: "Get Started", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-zinc-800/60"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-container items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 font-semibold text-lg tracking-tight">
          <span className="text-white">Automation</span>
          <span className="text-orange-400">Culture</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button variant="default" size="sm" className="animate-nav-glow" asChild>
            <a href="#contact">Wake up my leads</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-zinc-800">
          <ul className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-zinc-300 hover:text-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button variant="default" size="sm" className="w-full" asChild>
                <a href="#contact" onClick={() => setMobileOpen(false)}>
                  Book a Discovery Call
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
