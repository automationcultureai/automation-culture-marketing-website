"use client";

import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const service = {
  icon: Mail,
  title: "AI Reactivation Campaigns",
  tagline: "Your next booking is already in your contacts.",
  description:
    "Most businesses are sitting on a goldmine of old leads they've completely forgotten about. We build AI-powered reactivation campaigns that work through your entire contact list and send genuinely personalised emails — each one written for that specific contact, not a mass blast. Leads can book directly into your calendar. You just show up.",
  howItWorks: [
    {
      step: "01",
      heading: "Send Us Your List",
      body: "You give us a CSV of old leads or past clients. That's it. We handle everything from here. Keep in mind, the more information you give us on the customer, the more we have to work with.",
    },
    {
      step: "02",
      heading: "We Write Every Email/SMS In Your Voice",
      body: "Our AI generates personalised email sequences for every single lead — not a template blast. Each email is written to that person based on what you do and who they are.",
    },
    {
      step: "03",
      heading: "Leads Book Directly",
      body: "Every email contains a unique booking link tied to your Google Calendar. Leads self-book. You get a notification. No chasing, no phone tag.",
    },
    {
      step: "04",
      heading: "You Complete the Job. We Invoice.",
      body: "Once a job is marked complete, we take 10% of the job value. That's the entire model. If nothing converts, you owe nothing.",
    },
  ],
  outcomes: [
    "Personalised email sequences — not a mass blast",
    "Up to 4 follow-up messages per lead on a smart schedule",
    "Unique booking page per lead, connected to your Google Calendar",
    "Automated booking confirmations and reminders to reduce no-shows",
    "Replies go straight to your inbox — we stay out of the middle",
    "Live dashboard: sent, opened, clicked, booked, completed",
    "Automatic opt-out handling — fully compliant",
    "You only pay when a job is completed",
  ],
  pricing: "Free to start. You only pay 10% when a job is completed. If we bring you nothing, you pay nothing.",
  accent: "#f97316",
};

export function HowItWorksSection() {
  const Icon = service.icon;

  return (
    <section id="how-it-works" className="relative bg-zinc-950 px-4 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(234,88,12,0.08)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-container">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-orange-400">
            What We Do
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
            One product.{" "}
            <span className="text-zinc-500">Built to get you paid.</span>
          </h2>
          <p className="mt-4 text-zinc-400 sm:text-lg">
            {"We're not trying to do everything. We do one thing exceptionally well — and it puts money back in your pocket from leads you'd already written off."}
          </p>
        </div>

        {/* Main service card */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-12">

          {/* Top — icon + title */}
          <div className="flex items-start gap-4 mb-8">
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

          {/* Description */}
          <p className="text-zinc-400 leading-relaxed max-w-2xl mb-12 sm:text-lg">
            {service.description}
          </p>

          {/* How it works */}
          <div className="mb-12">
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-6">
              How it works
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {service.howItWorks.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-orange-500/30"
                >
                  {/* Ghost number */}
                  <div
                    className="pointer-events-none absolute right-3 top-0 select-none font-bold leading-none text-white/[0.04]"
                    style={{ fontSize: "90px" }}
                  >
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <p className="mb-3 text-xs font-medium uppercase tracking-widest text-orange-400">
                      Step {item.step}
                    </p>
                    <h4 className="mb-2 text-base font-semibold leading-snug text-white">
                      {item.heading}
                    </h4>
                    <p className="text-sm leading-relaxed text-zinc-400">
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-zinc-800 mb-12" />

          {/* Outcomes + Pricing side by side */}
          <div className="grid gap-10 md:grid-cols-2">

            {/* Outcomes */}
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4">
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
                <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ color: service.accent }}>
                  {"What's the catch?"}
                </p>
                <p className="text-white font-semibold text-lg leading-snug">
                  {"There isn't one. No setup fee, no retainer, no lock-in. We only get paid when you do."}
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
