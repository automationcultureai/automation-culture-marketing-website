"use client";

import { motion } from "framer-motion";

export function FounderSection() {
  return (
    <section id="founder" className="relative bg-zinc-950 px-4 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(234,88,12,0.07)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-container">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-sm font-medium uppercase tracking-widest text-orange-400"
        >
          Who&apos;s Behind This
        </motion.p>

        <div className="flex flex-col gap-16 md:flex-row md:items-start">

          {/* Copy block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            <h2 className="mb-8 text-4xl font-semibold leading-tight text-white">
              Hi, I&apos;m Nick.
            </h2>
            <div className="max-w-[500px] space-y-5 text-zinc-400 leading-relaxed">
              <p>
                I built Automation Culture AI because I kept seeing the same
                thing — great local businesses with full contact lists and empty
                follow-up systems.
              </p>
              <p>
                The leads were there. The trust was already built. The money was
                sitting on the table.
              </p>
              <p>
                All it needed was the right message, at the right time, sent
                consistently. AI makes that possible at a scale no human can
                match.
              </p>
              <p>
                I take on a small number of clients at a time so every campaign
                gets my full attention. If you&apos;re a Melbourne service
                business and you want to find out what&apos;s sitting in your
                list — let&apos;s have a conversation.
              </p>
            </div>
            <p className="mt-10 text-base font-medium text-orange-400">
              — Nick, Founder, Automation Culture AI
            </p>
          </motion.div>

          {/* Abstract portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[280px] w-full flex-shrink-0 overflow-hidden rounded-xl border border-zinc-800 md:w-[280px]"
            style={{ background: "#0A0A0A" }}
          >
            <svg
              viewBox="0 0 280 280"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="bgGrad" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#1a1a0f" />
                  <stop offset="100%" stopColor="#0A0A0A" />
                </radialGradient>
                <radialGradient id="glowGrad" cx="50%" cy="35%" r="40%">
                  <stop offset="0%" stopColor="#F97316" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="280" height="280" fill="url(#bgGrad)" />
              <rect width="280" height="280" fill="url(#glowGrad)" />
              {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                <line key={`h${n}`} x1="0" y1={n * 48 + 16} x2="280" y2={n * 48 + 16}
                  stroke="#F97316" strokeOpacity="0.04" strokeWidth="1" />
              ))}
              {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                <line key={`v${n}`} x1={n * 48 + 16} y1="0" x2={n * 48 + 16} y2="280"
                  stroke="#F97316" strokeOpacity="0.04" strokeWidth="1" />
              ))}
              <ellipse cx="140" cy="108" rx="42" ry="48" fill="#1E1E1E" stroke="#F97316" strokeOpacity="0.2" strokeWidth="1" />
              <path d="M68 240 Q78 190 140 182 Q202 190 212 240 Z" fill="#1A1A1A" stroke="#F97316" strokeOpacity="0.15" strokeWidth="1" />
              <ellipse cx="140" cy="108" rx="54" ry="62" fill="none" stroke="#F97316" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="4 6" />
              <circle cx="126" cy="104" r="3.5" fill="#F97316" fillOpacity="0.4" />
              <circle cx="154" cy="104" r="3.5" fill="#F97316" fillOpacity="0.4" />
              <path d="M128 122 Q140 130 152 122" stroke="#F97316" strokeOpacity="0.3" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <circle cx="24" cy="24" r="2" fill="#F97316" fillOpacity="0.3" />
              <circle cx="256" cy="24" r="2" fill="#F97316" fillOpacity="0.3" />
              <circle cx="24" cy="256" r="2" fill="#F97316" fillOpacity="0.3" />
              <circle cx="256" cy="256" r="2" fill="#F97316" fillOpacity="0.3" />
            </svg>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
