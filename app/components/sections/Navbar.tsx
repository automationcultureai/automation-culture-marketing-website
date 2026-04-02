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
  { label: "Client Login", href: "https://app.automationculture.com.au", external: true },
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
          ? "bg-[#FAFAF8]/90 backdrop-blur-md border-b border-[#D4941A]/20"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-container items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 font-semibold text-lg tracking-tight">
          <span className="text-[#1a1a1a]">Automation</span>
          <span className="text-[#D4941A]">Culture</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-sm text-[#5C5A58] hover:text-[#1a1a1a] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button variant="default" size="sm" className="bg-[#D4941A] hover:bg-[#B07A14]" asChild>
            <a href="#contact">Wake up my leads</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#5C5A58] hover:text-[#1a1a1a]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#ECEAE6]">
          <ul className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-[#5C5A58] hover:text-[#1a1a1a] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button variant="default" size="sm" className="w-full bg-[#D4941A] hover:bg-[#B07A14]" asChild>
                <a href="#contact" onClick={() => setMobileOpen(false)}>
                  Wake up my leads
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
