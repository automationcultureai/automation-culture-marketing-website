const stats = [
  {
    number: "8",
    suffix: " Day Smart Send Sequence",
    sub: "Dynamic Email & SMS sequence — every message individually tailored by AI, not a mass blast",
  },
  {
    number: "0%",
    suffix: " Upfront",
    sub: "You only pay once we make you money",
  },
  {
    number: "10%",
    suffix: " Commission Fee",
    sub: "Flat fee for early access clients - no set up or retainer fee",
  },
];

const allStats = [...stats, ...stats];

export function SocialProofBar() {
  return (
    <section className="bg-zinc-900/50 border-t border-b border-zinc-700 py-8 overflow-hidden">
      <div className="flex w-max animate-ticker">
        {allStats.map((stat, i) => (
          <div
            key={i}
            className="flex-none min-w-[280px] text-center px-10 border-r border-zinc-800 last:border-r-0"
          >
            <div className="font-bold text-[32px] leading-none mb-2">
              {stat.number && (
                <span className="text-orange-400">{stat.number}</span>
              )}
              <span className="text-white text-2xl">{stat.suffix}</span>
            </div>
            <div className="text-sm text-zinc-500 leading-snug">{stat.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
