// Stats — numeral, optional prefix/symbol, and white suffix text kept identical to original
const stats = [
  {
    // "8 Day Smart Send Sequence" — "8" counts up, rest is static
    numeral: 8,
    prefix: "",
    symbol: "",
    whiteText: " Day Smart Send Sequence",
    sub: "Dynamic Email & SMS sequence — every message individually tailored by AI, not a mass blast",
    countTo: 8,
  },
  {
    // "$0 Upfront" — "$" static, "0" fades in (counting to zero is meaningless)
    numeral: 0,
    prefix: "$",
    symbol: "",
    whiteText: " Upfront",
    sub: "You only pay once we make you money",
    fadeIn: true,
  },
  {
    // "10% Success Fee Only" — "10" counts DOWN from 100, "%" static
    numeral: 10,
    prefix: "",
    symbol: "%",
    whiteText: " Success Fee Only",
    sub: "Flat fee for early access clients - no set up fee or retainer",
    countTo: 10,
    countFrom: 100,
  },
] as const;

const allStats = [...stats, ...stats];

export function SocialProofBar() {
  return (
    <section
      className="relative bg-zinc-900/50 border-t border-b border-zinc-700 py-8 overflow-hidden"
      data-count-trigger
    >
      <div className="flex w-max animate-ticker">
        {allStats.map((stat, i) => {
          // Only the first three items (the originals) get count-up attributes.
          // The duplicates (i >= stats.length) always show the final numeral so the
          // looping ticker looks consistent after the animation has already fired.
          const isLive = i < stats.length;

          return (
            <div
              key={i}
              className="flex-none min-w-[280px] text-center px-10 border-r border-zinc-800 last:border-r-0"
            >
              <div className="font-bold text-[32px] leading-none mb-2">
                <span className="text-orange-400">
                  {/* Dollar sign (or any prefix) — always visible */}
                  {stat.prefix}

                  {/* The numeral itself */}
                  {isLive && "countTo" in stat ? (
                    // Counts from countFrom (default 0) to countTo via AnimationController
                    <span
                      data-count-to={String(stat.countTo)}
                      {...("countFrom" in stat ? { "data-count-from": String(stat.countFrom) } : {})}
                    >
                      {"countFrom" in stat ? String(stat.countFrom) : "0"}
                    </span>
                  ) : isLive && "fadeIn" in stat ? (
                    // $0 — fades in; starts hidden via inline style
                    <span data-count-fade style={{ opacity: 0 }}>{stat.numeral}</span>
                  ) : (
                    // Duplicate ticker set — show final value immediately
                    <span>{stat.numeral}</span>
                  )}

                  {/* Percent symbol (or any suffix symbol) — always visible */}
                  {stat.symbol}
                </span>
                <span className="text-white text-2xl">{stat.whiteText}</span>
              </div>
              <div className="text-sm text-zinc-500 leading-snug">{stat.sub}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
