"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function FounderSection() {
  return (
    <section id="founder" className="relative bg-[#FAFAF8] px-4 py-14 sm:py-24 md:py-32">
      <div className="relative mx-auto max-w-container">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-12 text-sm font-medium uppercase tracking-[0.2em] text-[#C4394A]"
        >
          Who You&apos;re Working With
        </motion.p>

        <div className="max-w-3xl">

          {/* Pull quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-3xl font-semibold leading-snug text-[#1a1a1a] sm:text-4xl md:text-5xl" style={{ letterSpacing: "-0.02em" }}>
              &ldquo;The leads are there. The trust is already built.{" "}
              <span className="text-[#5C5A58]">All it takes is the right message at the right time.&rdquo;</span>
            </p>
          </motion.blockquote>

          {/* Avatar + attribution */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex items-center gap-4"
          >
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-[#C4394A]">
              <Image
                src="/images/nick.jpg"
                alt="Nick, Founder of Automation Culture"
                fill
                className="object-cover"
                style={{ objectPosition: "85% 13%" }}
              />
            </div>
            <div>
              <p className="font-semibold text-[#1a1a1a]">Nick</p>
              <p className="text-sm text-[#9A9790]">Founder, Automation Culture</p>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="my-8 sm:my-10 border-t border-[#ECEAE6]" />

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 text-[#5C5A58] leading-relaxed sm:text-lg"
          >
            <p>
              I started Automation Culture because I kept seeing the same thing — great local businesses with full contact lists but no systems in place to follow up.
            </p>
            <p>
              Money is being left on the table that I&apos;d rather put in your pocket and mine. With AI and automation, turning a dormant list into real revenue is easier than it&apos;s ever been.
            </p>
            <p>
              If you&apos;re a Melbourne service business with an old contact list — let&apos;s find out what&apos;s in there.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
