"use client";

import { motion } from "framer-motion";
import { Scissors, Stethoscope } from "lucide-react";
import Image from "next/image";

const industries = [
  {
    icon: Scissors,
    title: "Beauty",
    description:
      "Salons, spas, clinics, lash artists, massage therapists, beauty educators. Your rebooking rate is everything — and past clients who loved your work are the easiest revenue you'll ever win back.",
  },
  {
    icon: Stethoscope,
    title: "Health & Wellness",
    description:
      "Pilates, yoga studios, physios, chiros, psychologists, naturopaths, personal trainers, allied health practitioners. Lapsed patients and clients don't disappear — they just need the right nudge at the right time.",
  },
];

export function WhoWeServeSection() {
  return (
    <section id="who" className="relative bg-[#FAFAF8] px-4 py-12 sm:py-24 md:py-32 overflow-hidden">

      {/* Background image — right side, desktop only */}
      <motion.div
        className="hidden sm:block absolute right-0 top-0 h-full w-1/2 pointer-events-none"
        style={{ maskImage: "linear-gradient(to right, transparent 0%, black 35%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 35%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Image
          src="/images/golden girl 2.png"
          alt=""
          fill
          className="object-cover object-top opacity-50"
        />
      </motion.div>

      <div className="relative mx-auto max-w-container">

        {/* Header */}
        <div className="mb-8 sm:mb-16 max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#D4941A]"
          >
            Who This Is For
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-4xl font-semibold leading-tight text-[#1a1a1a] sm:text-5xl md:text-6xl" style={{ letterSpacing: "-0.02em" }}
          >
            Built specifically for{" "}<span className="bg-gradient-to-r from-[#ECC878] via-[#D4941A] to-[#B07A14] bg-clip-text text-transparent">beauty and wellness</span>{" "}businesses{" "}
            <span className="text-[#5C5A58]">
              with a lapsed client list.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="mt-4 text-[#5C5A58] sm:text-lg"
          >
            We built this specifically for businesses that do great work but don&apos;t have time to chase old leads. If any of this sounds familiar, you&apos;re the right fit.
          </motion.p>
        </div>

        {/* Mobile: full industry cards */}
        <div className="sm:hidden grid gap-4 mb-8">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.title}
                className="noise relative overflow-hidden rounded-2xl border border-[#ECEAE6] bg-[#F2F0EC] p-6 flex flex-col gap-3"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)" }}
              >
                <Icon className="h-7 w-7 text-[#D4941A]" />
                <h3 className="text-base font-semibold text-[#1a1a1a]">{industry.title}</h3>
                <p className="text-sm text-[#5C5A58] leading-relaxed">{industry.description}</p>
              </div>
            );
          })}
        </div>

        {/* Desktop: full industry cards grid */}
        <div className="hidden sm:grid gap-4 sm:grid-cols-2 mb-12">
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
                whileHover={{ scale: 1.02, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 3px rgba(0,0,0,0.10), 0 8px 24px rgba(0,0,0,0.10)", transition: { type: "spring", stiffness: 300, damping: 30 } }}
                className="noise relative overflow-hidden rounded-2xl border border-[#ECEAE6] bg-[#F2F0EC] p-6 flex flex-col gap-3"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)" }}
              >
                <Icon className="h-7 w-7 text-[#D4941A]" />
                <h3 className="text-base font-semibold text-[#1a1a1a]">{industry.title}</h3>
                <p className="text-sm text-[#5C5A58] leading-relaxed">{industry.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Qualifier */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl px-8 py-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between" style={{ backgroundColor: "rgba(212,148,26,0.06)", border: "1px solid rgba(212,148,26,0.15)" }}>
          <div className="flex flex-col gap-2 max-w-xl">
            <p className="text-sm font-semibold text-[#1a1a1a] leading-snug">
              You don&apos;t need a huge list.
            </p>
            <p className="text-sm text-[#9A9790] leading-relaxed">
              Campaigns work with lists as small as{" "}
              <span className="text-[#D4941A] font-semibold">50 contacts</span>. The only requirement: you run a beauty or health and wellness business and have a list of past clients who haven&apos;t booked in a while.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-[#D4941A] hover:bg-[#B07A14] px-5 py-3 text-sm font-semibold text-white transition-colors"
          >
            See if this fits your business →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
