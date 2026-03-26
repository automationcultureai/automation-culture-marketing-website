import { Wrench, Sparkles, Heart, Home, Droplets, Building2 } from "lucide-react";

const industries = [
  {
    icon: Wrench,
    title: "Tradies",
    description:
      "Plumbers, electricians, builders, landscapers — sitting on old job quotes that never converted. That list is worth more than you think.",
  },
  {
    icon: Sparkles,
    title: "Cleaning Services",
    description:
      "Residential and commercial cleaners with lapsed clients or unanswered enquiries. One reactivation campaign can fill your calendar for months.",
  },
  {
    icon: Heart,
    title: "Beauty & Wellness",
    description:
      "Salons, spas, therapists, personal trainers. Past clients who loved your work but just fell off. They're easier to win back than you think.",
  },
  {
    icon: Droplets,
    title: "Health Practitioners",
    description:
      "Physios, chiros, dentists, and allied health professionals with patients overdue for a follow-up. A gentle nudge is all it takes.",
  },
  {
    icon: Home,
    title: "Home Services",
    description:
      "Pest control, pool care, HVAC, removalists. High-repeat services with a cold list — these are your best-fit leads because they've already bought once.",
  },
  {
    icon: Building2,
    title: "Any Service Business",
    description:
      "If you have a list of contacts who've shown interest but never converted — past customers, old enquiries, unconverted quotes — we can work with that.",
  },
];

export function WhoWeServeSection() {
  return (
    <section id="who" className="relative bg-zinc-950 px-4 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(234,88,12,0.08)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-container">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-orange-400">
            Who Is This For
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
            If you run a service business{" "}
            <span className="text-zinc-500">
              and have a contact list you haven&apos;t touched — this is for you.
            </span>
          </h2>
          <p className="mt-4 text-zinc-400 sm:text-lg">
            We built this specifically for businesses that do great work but don&apos;t have time to chase old leads. If any of this sounds familiar, you&apos;re the right fit.
          </p>
        </div>

        {/* Industry cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.title}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 flex flex-col gap-3 hover:border-orange-500/30 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 border border-orange-500/20">
                  <Icon className="h-5 w-5 text-orange-400" />
                </div>
                <h3 className="text-base font-semibold text-white">{industry.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{industry.description}</p>
              </div>
            );
          })}
        </div>

        {/* Qualifier */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 px-8 py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-zinc-400 sm:text-base max-w-xl">
            You don&apos;t need a huge list. We&apos;ve seen great results from lists as small as{" "}
            <span className="text-white font-medium">50 contacts</span>. The only requirement: you run a service business and have real leads — past customers, old enquiries, or unconverted quotes.
          </p>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-1 text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors"
          >
            See if this fits your business →
          </a>
        </div>

      </div>
    </section>
  );
}
