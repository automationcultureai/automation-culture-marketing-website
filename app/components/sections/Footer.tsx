export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-zinc-800 bg-black px-4 py-10 pb-24 md:pb-10">
      <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(234,88,12,0.03) 0%, transparent 40%)" }} />
      <div className="relative mx-auto max-w-container">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-1 font-semibold text-base">
            <span className="text-white">Automation</span>
            <span className="text-orange-400">Culture</span>
          </a>

          {/* Tagline */}
          <p className="text-sm text-zinc-600">
            We automate the gruntwork. You take care of business.
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
                className="text-sm text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-zinc-900 pt-6 text-center">
          <p className="text-xs text-zinc-700">
            © {year} Automation Culture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
