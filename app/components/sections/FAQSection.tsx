"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Is this actually free to start?",
    a: "Yes. Zero setup fee, zero retainer. You don't pay us anything until a booking from our campaign is completed and you've been paid. We only invoice monthly for completed jobs.",
  },
  {
    q: "Will this annoy my past clients?",
    a: "No — and this is important. We write every message to feel like a genuine, personal check-in from you, not a mass marketing blast. Each email and SMS is tailored to that specific client. Unsubscribes are handled instantly. People rarely complain because it doesn't read like spam.",
  },
  {
    q: "What kind of results should I expect?",
    a: "It depends on your list and how long it's been since those clients booked. There's no guarantee — but here's the thing: you're not risking anything to find out. If we run a campaign and nothing comes back, you pay nothing. The downside is zero.",
  },
  {
    q: "What if my client list is messy or out of date?",
    a: "That's fine — most are. We handle validation, deduplication, and opt-out filtering before anything goes out. Export whatever you have from your booking system or spreadsheet and send it across.",
  },
  {
    q: "How much of my time will this take?",
    a: "Almost none. You send us a CSV of past clients and connect your booking calendar. We write every message, manage the send schedule, and handle opt-outs. You get a notification when someone books. That's it.",
  },
  {
    q: "I only have 50 past clients — is that enough?",
    a: "Yes. Even a small list can generate real revenue — and since you pay nothing unless a booking is completed, there's no reason not to try. The worst case is nothing happens and it cost you nothing.",
  },
  {
    q: "What counts as a completed job?",
    a: "A booking made through our campaign that you complete and get paid for. If the client cancels before the appointment, or the appointment doesn't go ahead — you don't pay. Simple.",
  },
  {
    q: "Do you work with any beauty or health business, or are you selective?",
    a: "We work with a small number of clients at a time so every campaign gets proper attention. We're currently onboarding beauty clinics, salons, spas, allied health practices, and wellness businesses in Melbourne. If that's you, reach out and we'll let you know if it's a fit.",
  },
  {
    q: "Why are you doing this on a performance model?",
    a: "Because we're confident it works — and it's the fairest way to start a relationship. You take zero risk. We take all of it. If we're wrong, we eat the loss. That's how sure we are.",
  },
];

function FAQItem({ q, a, index, open, onToggle }: { q: string; a: string; index: number; open: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className="border-b border-[#ECEAE6] last:border-0"
    >
      <button
        className="w-full flex items-center justify-between py-4 sm:py-5 text-left gap-4"
        onClick={onToggle}
      >
        <span className="text-sm font-medium text-[#1a1a1a] sm:text-base">{q}</span>
        <ChevronDown className={`h-4 w-4 text-[#C4394A] shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 0.15s ease",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <p className="pb-4 sm:pb-5 text-sm leading-relaxed text-[#5C5A58]">{a}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<boolean[]>(faqs.map(() => false));

  const allOpen = openItems.every(Boolean);

  const toggleAll = () => {
    setOpenItems(faqs.map(() => !allOpen));
  };

  const toggleItem = (i: number) => {
    setOpenItems((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  return (
    <section id="faq" className="relative bg-[#FAFAF8] px-4 py-12 sm:py-24 md:py-32">
      <div className="relative mx-auto max-w-container">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-8 sm:mb-12 text-sm font-medium uppercase tracking-[0.2em] text-[#C4394A]"
        >
          FAQ
        </motion.p>

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mb-8 sm:mb-12 max-w-2xl text-4xl font-semibold leading-tight text-[#1a1a1a] sm:text-5xl md:text-6xl"
        >
          The questions we&apos;d ask{" "}
          <span className="text-[#5C5A58]">if we were you.</span>
        </motion.h2>

        {/* Expand all toggle */}
        <div className="mx-auto max-w-3xl flex justify-end mb-2">
          <button
            onClick={toggleAll}
            className="text-xs font-medium text-[#9A9790] hover:text-[#C4394A] transition-colors"
          >
            {allOpen ? "Collapse all" : "Expand all"}
          </button>
        </div>

        {/* FAQ list */}
        <div className="noise mx-auto max-w-3xl rounded-2xl border border-[#ECEAE6] bg-[#F2F0EC] px-6 sm:px-8" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)" }}>
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} open={openItems[i]} onToggle={() => toggleItem(i)} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-center text-sm text-[#9A9790]"
        >
          Still have a question?{" "}
          <a href="#contact" className="text-[#C4394A] transition-colors hover:text-[#AD2F3E]">
            Drop us a message →
          </a>
        </motion.p>

      </div>
    </section>
  );
}
