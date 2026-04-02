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
    <section id="problem" className="relative bg-[#FAFAF8] px-4 py-12 sm:py-24 md:py-32">
      <div className="relative mx-auto max-w-container">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#C4394A]"
        >
          The Reality
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mb-6 max-w-3xl text-4xl font-semibold leading-tight text-[#1a1a1a] sm:text-5xl md:text-6xl" style={{ letterSpacing: "-0.02em" }}
        >
          Most businesses are sitting on <span className="bg-gradient-to-r from-[#f9a8b4] via-[#C4394A] to-[#A82D3D] bg-clip-text text-transparent">thousands</span> in revenue{" "}
          <span className="text-[#5C5A58]">they&apos;ve forgotten about.</span>
        </motion.h2>

        {/* Body — hidden on mobile to save space */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="hidden sm:block mb-16 max-w-[600px] space-y-4 text-[#5C5A58] sm:text-lg"
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
          <p className="text-[#9A9790]">
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
                whileHover={{ scale: 1.02, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 3px rgba(0,0,0,0.10), 0 8px 24px rgba(0,0,0,0.10)", transition: { type: "spring", stiffness: 300, damping: 30 } }}
                className="noise relative overflow-hidden cursor-default rounded-2xl border border-[#ECEAE6] bg-[#F2F0EC] px-4 pb-4 pt-3 sm:p-6"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)" }}
              >
                <Icon className="mb-3 h-7 w-7 text-[#C4394A]" />
                <h3 className="mb-3 text-base font-semibold leading-snug text-[#1a1a1a]">
                  {point.headline}
                </h3>
                <p className="text-sm leading-relaxed text-[#5C5A58]">
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
