"use client";

import { motion } from "framer-motion";
import { Clock, FileText, DollarSign } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    headline: "Is this you? You're too busy to follow up",
    description:
      "Running the business leaves no time to chase old leads manually.",
  },
  {
    icon: FileText,
    headline: "How about this? You have a list. You just never use it.",
    description:
      "Hundreds of past clients sitting in a spreadsheet, doing nothing.",
  },
  {
    icon: DollarSign,
    headline: "Every month you wait your competitors are earning money that could be yours.",
    description:
      "Old leads don't wait forever. They book with whoever reaches out.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="relative bg-black px-4 py-12 sm:py-24 md:py-32">

      <div className="relative mx-auto max-w-container">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-orange-400"
        >
          The Reality
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mb-6 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          Most businesses are sitting on <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">thousands</span> in revenue{" "}
          <span className="text-zinc-500">they&apos;ve forgotten about.</span>
        </motion.h2>

        {/* Body — hidden on mobile to save space */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="hidden sm:block mb-16 max-w-[600px] space-y-4 text-zinc-400 sm:text-lg"
        >
          <p>
            You worked hard to nurture and win those clients. You did good work. Then life
            got busy, and following up fell to the bottom of the list. It always
            does.
          </p>
          <p>
            Meanwhile, those leads have moved on — not because they didn&apos;t
            like you, but because someone else showed up first.
          </p>
          <p className="text-zinc-300">
            That&apos;s the only difference between your pipeline and theirs.
          </p>
        </motion.div>

        {/* Pain point cards — add top margin on mobile since body is hidden */}
        <div className="grid gap-4 sm:grid-cols-3 mt-8 sm:mt-0">
          {painPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 600, damping: 35 } }}
                className="group relative overflow-hidden cursor-default rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-6 transition-colors duration-200 hover:border-orange-500/30"
              >
                <Icon className="mb-5 h-7 w-7 text-orange-400/70" />
                <h3 className="mb-3 text-base font-semibold leading-snug text-white">
                  {point.headline}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {point.description}
                </p>
                <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
