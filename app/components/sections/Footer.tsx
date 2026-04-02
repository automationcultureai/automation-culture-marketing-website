export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#ECEAE6] bg-[#FAFAF8] px-4 py-5 pb-20 sm:py-10 md:pb-10">
      <div className="relative mx-auto max-w-container">

        {/* Mobile: simple centred logo + tagline */}
        <div className="sm:hidden flex flex-col items-center gap-2 text-center">
          <a href="#" className="flex items-center gap-1 font-semibold text-base">
            <span className="text-[#1a1a1a]">Automation</span>
            <span className="text-[#C4394A]">Culture</span>
          </a>
          <p className="text-sm text-[#9A9790]">We automate the gruntwork. You take care of business.</p>
        </div>

        {/* Desktop: full footer with nav */}
        <div className="hidden sm:flex flex-col items-center gap-4 sm:flex-row sm:justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-1 font-semibold text-base">
            <span className="text-[#1a1a1a]">Automation</span>
            <span className="text-[#C4394A]">Culture</span>
          </a>

          {/* Tagline */}
          <p className="text-sm text-zinc-600">
            We automate the boring stuff. You do what you do best.
          </p>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {[
              { label: "Who This Is For", href: "#who" },
              { label: "What We Do", href: "#how-it-works" },
              { label: "The Offer", href: "#offer" },
              { label: "About", href: "#founder" },
              { label: "FAQ", href: "#faq" },
              { label: "Get Started", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#9A9790] hover:text-[#5C5A58] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-3 pt-3 sm:mt-8 sm:border-t sm:border-[#ECEAE6] sm:pt-6 text-center">
          <p className="text-xs text-[#9A9790]">
            © {year} Automation Culture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
