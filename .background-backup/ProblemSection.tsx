"use client";

import { motion } from "framer-motion";
import { Clock, FileText, DollarSign } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    headline: "You're too busy to follow up",
    description:
      "Running the business leaves no time to chase old leads manually.",
  },
  {
    icon: FileText,
    headline: "You have a list. You just never use it.",
    description:
      "Hundreds of past clients sitting in a spreadsheet, doing nothing.",
  },
  {
    icon: DollarSign,
    headline: "Every month you wait is money someone else earns.",
    description:
      "Old leads don't wait forever. They book with whoever reaches out.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="relative bg-black px-4 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(234,88,12,0.07)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-container">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3 text-sm font-medium uppercase tracking-widest text-orange-400"
        >
          The Reality
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl"
        >
          Most businesses are sitting on thousands in revenue{" "}
          <span className="text-zinc-500">they&apos;ve forgotten about.</span>
        </motion.h2>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-[600px] space-y-4 text-zinc-400 sm:text-lg"
        >
          <p>
            You worked hard to win those clients. You did good work. Then life
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

        {/* Pain point cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          {painPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group cursor-default rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-orange-500/30"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-orange-500/20 bg-orange-500/10 transition-colors duration-200 group-hover:bg-orange-500/15">
                  <Icon className="h-5 w-5 text-orange-400" />
                </div>
                <h3 className="mb-3 text-base font-semibold leading-snug text-white">
                  {point.headline}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
