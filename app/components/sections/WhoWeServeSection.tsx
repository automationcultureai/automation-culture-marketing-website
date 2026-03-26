"use client";

import { motion } from "framer-motion";
import { HardHat, Sparkles, Scissors, Stethoscope, Droplets, Briefcase } from "lucide-react";

const industries = [
  {
    icon: HardHat,
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
    icon: Scissors,
    title: "Beauty & Wellness",
    description:
      "Salons, spas, therapists, personal trainers. Past clients who loved your work but just fell off. They're easier to win back than you think.",
  },
  {
    icon: Stethoscope,
    title: "Health Practitioners",
    description:
      "Physios, chiros, dentists, and allied health professionals with patients overdue for a follow-up. A gentle nudge is all it takes.",
  },
  {
    icon: Droplets,
    title: "Home Services",
    description:
      "Pest control, pool care, HVAC, removalists. High-repeat services with a cold list — these are your best-fit leads because they've already bought once.",
  },
  {
    icon: Briefcase,
    title: "Any Service Business",
    description:
      "If you have a list of contacts who've shown interest but never converted — past customers, old enquiries, unconverted quotes — we can work with that.",
  },
];

export function WhoWeServeSection() {
  return (
    <section id="who" className="relative bg-zinc-950 px-4 py-14 sm:py-24 md:py-32">

      <div className="relative mx-auto max-w-container">

        {/* Header */}
        <div className="mb-8 sm:mb-16 max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-orange-400"
          >
            Who This Is For
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
          >
            You&apos;re a service business{" "}
            <span className="text-zinc-500">
              and have a contact list you haven&apos;t touched in ages.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="mt-4 text-zinc-400 sm:text-lg"
          >
            We built this specifically for businesses that do great work but don&apos;t have time to chase old leads. If any of this sounds familiar, you&apos;re the right fit.
          </motion.p>
        </div>

        {/* Mobile: compact industry tag list */}
        <div className="sm:hidden flex flex-wrap gap-2 mb-8">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.title}
                className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm font-medium text-white"
              >
                <Icon className="h-4 w-4 text-orange-400/70 shrink-0" />
                {industry.title}
              </div>
            );
          })}
        </div>

        {/* Desktop: full industry cards grid */}
        <div className="hidden sm:grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            const delay = (i % 3) * 0.1 + Math.floor(i / 3) * 0.2;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 600, damping: 35 } }}
                className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 flex flex-col gap-3 hover:border-orange-500/30 transition-colors duration-200"
              >
                <Icon className="h-7 w-7 text-orange-400/70" />
                <h3 className="text-base font-semibold text-white">{industry.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{industry.description}</p>
                <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
              </motion.div>
            );
          })}
        </div>

        {/* Qualifier */}
        <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 px-8 py-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between shadow-[0_0_40px_-8px_rgba(249,115,22,0.25)]">
          <div className="flex flex-col gap-2 max-w-xl">
            <p className="text-base font-semibold text-white leading-snug">
              You don&apos;t need a huge list.
            </p>
            <p className="text-zinc-300 sm:text-base leading-relaxed">
              Campaigns work with lists as small as{" "}
              <span className="text-orange-400 font-semibold">50 contacts</span>. The only requirement: you run a service business and have real leads — past customers, old enquiries, or unconverted quotes.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-orange-500 hover:bg-orange-400 px-5 py-3 text-sm font-semibold text-white transition-colors"
          >
            See if this fits your business →
          </a>
        </div>

      </div>
    </section>
  );
}
