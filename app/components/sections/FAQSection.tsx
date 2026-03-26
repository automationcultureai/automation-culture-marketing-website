"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    q: "Is this actually free to start?",
    a: "Yes. Zero setup fee, zero retainer. You don't pay us anything until a job from our campaign is completed and you've been paid. We only invoice monthly for completed jobs.",
  },
  {
    q: "Will this annoy my old contacts?",
    a: "We write the emails to feel like a genuine, personal check-in — not a mass marketing blast. Each message is personalised to the contact. Unsubscribes are handled instantly and automatically. People rarely complain because it doesn't feel like spam.",
  },
  {
    q: "What kind of results should I expect?",
    a: "It depends on your list and how cold it is — there's no guarantee. But here's the thing: you're not risking anything to find out. If we run a campaign and nothing comes back, you pay nothing. The downside is zero.",
  },
  {
    q: "What if my list is messy or out of date?",
    a: "That's fine — most are. We handle validation, deduplication, and opt-out filtering before anything goes out. Just send us what you have.",
  },
  {
    q: "How much of my time will it take?",
    a: "Almost none. You provide a CSV of old leads and connect your Google Calendar. We set up the campaign, write the emails, and manage the sends. You get a notification when someone books. Your job is to show up and do the work.",
  },
  {
    q: "I only have 50 old leads — is that enough?",
    a: "Yes. Even a handful of reactivations from a small list is worth it — and since you pay nothing unless a job gets completed, there's genuinely no reason not to try. The worst case is nothing happens and it cost you nothing.",
  },
  {
    q: "What counts as a 'completed job?",
    a: "A job booked through our campaign that you complete and get paid for. If the lead books but cancels, or you don't end up completing the job — you don't pay. Simple.",
  },
  {
    q: "Why are you doing this on a performance model?",
    a: "Because we're confident it works — and we think it's the fairest way to start a relationship. You take zero risk. We take all of it. If we're wrong, we eat the loss. That's how sure we are.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className={`border-b border-zinc-800 last:border-0 py-5${index >= 4 ? " hidden sm:block" : ""}`}
    >
      <p className="text-sm font-medium text-white sm:text-base mb-2">{q}</p>
      <p className="text-sm leading-relaxed text-zinc-400">{a}</p>
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="relative bg-black px-4 py-14 sm:py-24 md:py-32">

      <div className="relative mx-auto max-w-container">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-8 sm:mb-12 text-sm font-medium uppercase tracking-[0.2em] text-orange-400"
        >
          FAQ
        </motion.p>

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mb-8 sm:mb-12 max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
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
