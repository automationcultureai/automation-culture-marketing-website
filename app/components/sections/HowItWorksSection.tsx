"use client";

import { Zap } from "lucide-react";
import { motion } from "framer-motion";

const service = {
  icon: Zap,
  title: "AI Reactivation Campaigns",
  tagline: "Your next booking is already in your contacts.",
  description:
    "Your old leads aren't dead, they're just sleeping and its our job to wake them up.",
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
      body: "Once a client shows up for the appointment, we take 10% cut. That's the entire model. We don't charge if the appointment falls through.",
    },
  ],
  outcomes: [
    "Every message tailored for each specific lead — not a template blast",
    "Leads book straight into your calendar. No back and forth.",
    "Automated booking confirmations and reminders to reduce no-shows.",
    "You only pay for completed appointments, not for cancelled bookings.",
  ],
  pricing: "Free to start. You only pay 10% when a job is completed. If we bring you nothing, you pay nothing.",
  accent: "#D4941A",
};

export function HowItWorksSection() {
  const Icon = service.icon;

  return (
    <section id="how-it-works" className="relative bg-[#FAFAF8] px-4 py-12 sm:py-24 md:py-32">
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
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-4xl font-semibold leading-tight text-[#1a1a1a] sm:text-5xl md:text-6xl" style={{ letterSpacing: "-0.02em" }}
          >
            We automate the boring stuff.{" "}
            <span className="text-[#5C5A58]">You do what you do best.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="mt-4 text-[#5C5A58] sm:text-lg"
          >
            {"With individually tailored email and SMS, our smart send follow-up sequence, and a booking page that connects straight to your calendar, we transform your old contact list into hot leads ready to put cash in your pocket."}
          </motion.p>
        </div>

        {/* Main service card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="noise rounded-2xl border border-[#ECEAE6] bg-[#F2F0EC] p-5 sm:p-8 md:p-12" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)" }}>

          {/* Top — icon + title */}
          <div className="flex items-start gap-4 mb-5 sm:mb-8">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-lg shrink-0"
              style={{ backgroundColor: "rgba(212,148,26,0.10)", border: "1px solid rgba(212,148,26,0.20)" }}
            >
              <Icon className="h-6 w-6" style={{ color: service.accent }} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#1a1a1a]">{service.title}</h3>
              <p className="mt-1 text-sm font-medium" style={{ color: service.accent }}>
                {service.tagline}
              </p>
            </div>
          </div>

          {/* Description — hidden on mobile */}
          <p className="hidden sm:block text-[#5C5A58] leading-relaxed max-w-2xl mb-12 sm:text-lg">
            {service.description}
          </p>

          {/* How it works */}
          <div className="mb-5 sm:mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#9A9790] mb-4 sm:mb-6">
              How it works
            </p>

            {/* Mobile: numbered list with body text */}
            <ol className="sm:hidden flex flex-col gap-4">
              {service.howItWorks.map((item, i) => (
                <li key={item.step} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4941A]/10 text-xs font-bold text-[#D4941A]">
                    {i + 1}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-[#1a1a1a] leading-snug">{item.heading}</span>
                    <span className="text-sm text-[#5C5A58] leading-relaxed">{item.body}</span>
                  </div>
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
                  whileHover={{ scale: 1.02, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 3px rgba(0,0,0,0.10), 0 8px 24px rgba(0,0,0,0.10)", transition: { type: "spring", stiffness: 300, damping: 30 } }}
                  className="noise relative overflow-hidden rounded-2xl border border-[#ECEAE6] bg-[#FAFAF8] p-6"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)" }}
                >
                  <div className="relative z-10">
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#D4941A]">
                      Step {item.step}
                    </p>
                    <h4 className="mb-2 text-base font-semibold leading-snug text-[#1a1a1a]">
                      {item.heading}
                    </h4>
                    <p className="text-sm leading-relaxed text-[#5C5A58]">
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider + Outcomes — hidden on mobile */}
          <div className="hidden sm:block border-t border-[#ECEAE6] mb-12" />

          {/* Outcomes + Pricing side by side — hidden on mobile */}
          <div className="hidden sm:grid gap-10 md:grid-cols-2">

            {/* Outcomes */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#9A9790] mb-4">
                What you get
              </p>
              <ul className="flex flex-col gap-3">
                {service.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#5C5A58]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4941A]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="rounded-xl p-6 flex flex-col justify-between gap-6"
              style={{ backgroundColor: "rgba(212,148,26,0.06)", border: "1px solid rgba(212,148,26,0.15)" }}
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] mb-3" style={{ color: service.accent }}>
                  {"So what's the catch?"}
                </p>
                <p className="text-[#1a1a1a] font-semibold text-lg leading-snug">
                  {"Genuinely — there isn't one. We make money by making you money, simple as that."}
                </p>
              </div>
              <a href="#offer" className="inline-flex items-center gap-1 text-sm font-medium transition-colors" style={{ color: service.accent }}>
                {"See the full offer →"}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
