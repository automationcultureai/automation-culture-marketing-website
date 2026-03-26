"use client";

import { Zap } from "lucide-react";
import { motion } from "framer-motion";

const service = {
  icon: Zap,
  title: "AI Reactivation Campaigns",
  tagline: "Your next booking is already in your contacts.",
  description:
    "Your old leads aren't dead, they're just sleeping and its your our job to wake up.",
  howItWorks: [
    {
      step: "01",
      heading: "Send Us Your List",
      body: "You give us a CSV of old leads or past clients. That's it. We handle the rest. Keep in mind, the more information you give us on the customer, the more we have to work with.",
    },
    {
      step: "02",
      heading: "We Write Every Email/SMS In Your Voice",
      body: "Our AI generates personalised email and SMS sequences for every single lead — not a template blast. Each email is written to that person based on their history with you.",
    },
    {
      step: "03",
      heading: "Leads Book Directly",
      body: "Every email contains a unique booking link tied to your Google Calendar. Leads self-book. You get a notification. No chasing, no phone tag. Dead simple.",
    },
    {
      step: "04",
      heading: "You Complete the Job. We Invoice.",
      body: "Once a job is marked complete, we take 10% of the job value. That's the entire model. We don't charge if the job falls through.",
    },
  ],
  outcomes: [
    "Every message tailored for each specific lead — not a template blast",
    "Leads book straight into your calendar. No back and forth.",
    "Automated booking confirmations and reminders to reduce no-shows.",
    "You only pay when a job is done, not for bookings that cancel.",
  ],
  pricing: "Free to start. You only pay 10% when a job is completed. If we bring you nothing, you pay nothing.",
  accent: "#f97316",
};

export function HowItWorksSection() {
  const Icon = service.icon;

  return (
    <section id="how-it-works" className="relative bg-zinc-950 px-4 py-12 sm:py-24 md:py-32">

      {/* Warm ambient glow — builds toward offer section */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, #fb923c 0%, #c2410c 25%, transparent 65%)", opacity: 0.08 }} className="absolute inset-0" />
      </div>

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
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
          >
            The leads you&apos;ve written off{" "}
            <span className="text-zinc-500">are still worth money.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="mt-4 text-zinc-400 sm:text-lg"
          >
            {"With individually tailored email and SMS, our smart send follow-up sequence, and a booking page that connects straight to your calendar, we transform your old contact list into hot leads ready to put cash in your pocket."}
          </motion.p>
        </div>

        {/* Main service card */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 sm:p-8 md:p-12">

          {/* Top — icon + title */}
          <div className="flex items-start gap-4 mb-5 sm:mb-8">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-lg shrink-0"
              style={{ backgroundColor: `${service.accent}18`, border: `1px solid ${service.accent}30` }}
            >
              <Icon className="h-6 w-6" style={{ color: service.accent }} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-1 text-sm font-medium" style={{ color: service.accent }}>
                {service.tagline}
              </p>
            </div>
          </div>

          {/* Description — hidden on mobile */}
          <p className="hidden sm:block text-zinc-400 leading-relaxed max-w-2xl mb-12 sm:text-lg">
            {service.description}
          </p>

          {/* How it works */}
          <div className="mb-5 sm:mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 mb-4 sm:mb-6">
              How it works
            </p>

            {/* Mobile: simple numbered list */}
            <ol className="sm:hidden flex flex-col gap-3">
              {service.howItWorks.map((item, i) => (
                <li key={item.step} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-xs font-bold text-orange-400">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-white leading-snug">{item.heading}</span>
                </li>
              ))}
            </ol>

            {/* Desktop: full step cards */}
            <div className="hidden sm:grid gap-4 sm:grid-cols-2">
              {service.howItWorks.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + i * 0.15,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -4, transition: { type: "spring", stiffness: 600, damping: 35 } }}
                  className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition-colors duration-200 hover:border-orange-500/30"
                >
                  <div className="relative z-10">
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-orange-400">
                      Step {item.step}
                    </p>
                    <h4 className="mb-2 text-base font-semibold leading-snug text-white">
                      {item.heading}
                    </h4>
                    <p className="text-sm leading-relaxed text-zinc-400">
                      {item.body}
                    </p>
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider + Outcomes — hidden on mobile */}
          <div className="hidden sm:block border-t border-zinc-800 mb-12" />

          {/* Outcomes + Pricing side by side — hidden on mobile */}
          <div className="hidden sm:grid gap-10 md:grid-cols-2">

            {/* Outcomes */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 mb-4">
                What you get
              </p>
              <ul className="flex flex-col gap-3">
                {service.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing callout */}
            <div
              className="rounded-lg p-6 flex flex-col justify-between gap-6"
              style={{ backgroundColor: `${service.accent}10`, border: `1px solid ${service.accent}20` }}
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] mb-3" style={{ color: service.accent }}>
                  {"So what's the catch?"}
                </p>
                <p className="text-white font-semibold text-lg leading-snug">
                  {"Genuinely — there isn't one. We make money by making you money, simple as that."}
                </p>
              </div>
              <a href="#offer" className="inline-flex items-center gap-1 text-sm font-medium transition-colors" style={{ color: service.accent }}>
                {"See the full offer →"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
