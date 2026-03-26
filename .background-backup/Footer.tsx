export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 bg-black px-4 py-10">
      <div className="mx-auto max-w-container">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1 font-semibold text-base">
            <span className="text-white">Automation Culture</span>
            <span className="text-orange-400">AI</span>
          </a>

          {/* Tagline */}
          <p className="text-sm text-zinc-600">
            We automate the boring parts. You take the credit.
          </p>

          {/* Nav links */}
          <nav className="flex items-center gap-6">
            {[
              { label: "Services", href: "#services" },
              { label: "Work", href: "#case-studies" },
              { label: "Pricing", href: "#pricing" },
              { label: "Contact", href: "#contact" },
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
            © {year} Automation Culture.AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
