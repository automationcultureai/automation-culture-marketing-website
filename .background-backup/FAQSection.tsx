"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Is this actually free to start?",
    a: "Yes. Zero setup fee, zero retainer. You don't pay us anything until a job from our campaign is completed and you've been paid. We only invoice monthly for completed jobs.",
  },
  {
    q: "What counts as a 'completed job'?",
    a: "A job booked through our campaign that you complete and get paid for. If the lead books but cancels, or you don't end up completing the job — you don't pay. Simple.",
  },
  {
    q: "What kind of results should I expect?",
    a: "It depends on your list size and how long ago the leads went cold. Even a modest reactivation rate on a list of 200 contacts can be worth thousands of dollars. We'll give you an honest estimate before you commit.",
  },
  {
    q: "What if my list is messy or out of date?",
    a: "That's fine — most are. We handle validation, deduplication, and opt-out filtering before anything goes out. Just send us what you have.",
  },
  {
    q: "Will this annoy my old contacts?",
    a: "We write the emails to feel like a genuine, personal check-in — not a mass marketing blast. Each message is personalised to the contact. Unsubscribes are handled instantly and automatically. People rarely complain because it doesn't feel like spam.",
  },
  {
    q: "Do I need to do anything once the campaign is running?",
    a: "Barely. You review and approve the emails before we send. After that, bookings land in your calendar and you get a notification. Your only job is showing up to the job.",
  },
  {
    q: "What if I don't have Google Calendar?",
    a: "We support other calendar tools — reach out and we'll confirm compatibility before you sign up.",
  },
  {
    q: "How long does a campaign run?",
    a: "The initial campaign typically runs over 2–4 weeks, with up to 4 follow-up emails per lead. After that, we review results and discuss next steps with you.",
  },
  {
    q: "I only have 50 old leads — is that enough?",
    a: "Absolutely. Even small lists can generate meaningful revenue. A 10% reactivation rate on 50 leads is 5 booked jobs. If your average job is worth $300+, that's $1,500+ from a list you'd already written off.",
  },
  {
    q: "Why are you doing this on a performance model?",
    a: "Because we're confident it works — and we think it's the fairest way to start a relationship. You take zero risk. We take all of it. If we're wrong, we eat the loss. That's how sure we are.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-zinc-800 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-sm font-medium text-white sm:text-base">{q}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed text-zinc-400">{a}</p>
      )}
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="relative bg-zinc-950 px-4 py-24 sm:py-32">
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
          FAQ
        </motion.p>

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl"
        >
          The questions we&apos;d ask{" "}
          <span className="text-zinc-500">if we were you.</span>
        </motion.h2>

        {/* FAQ list */}
        <div className="mx-auto max-w-3xl rounded-xl border border-zinc-800 bg-zinc-900/50 px-6 sm:px-8">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-center text-sm text-zinc-500"
        >
          Still have a question?{" "}
          <a href="#contact" className="text-orange-400 transition-colors hover:text-orange-300">
            Drop us a message →
          </a>
        </motion.p>

      </div>
    </section>
  );
}
