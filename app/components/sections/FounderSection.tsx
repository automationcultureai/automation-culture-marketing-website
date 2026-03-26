"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function FounderSection() {
  return (
    <section id="founder" className="relative bg-zinc-950 px-4 py-14 sm:py-24 md:py-32">

      <div className="relative mx-auto max-w-container">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-12 text-sm font-medium uppercase tracking-[0.2em] text-orange-400"
        >
          Who&apos;s Behind This
        </motion.p>

        {/* Mobile: founder bio */}
        <div className="md:hidden">
          <h2 className="text-3xl font-semibold text-white mb-5">Hi, I&apos;m Nick.</h2>
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              I started Automation Culture because I kept seeing the same thing — great local businesses with full contact lists and no systems to follow up. The leads are there. The trust is already built. That&apos;s money being left on the table.
            </p>
            <p>
              With AI and automation, turning that dormant list into real revenue is easier than it&apos;s ever been. All it takes is the right message at the right time.
            </p>
            <p>
              If you&apos;re a Melbourne service business with an old contact list — let&apos;s find out what&apos;s in there.
            </p>
          </div>
          <p className="mt-6 text-sm font-medium text-orange-400">— Nick, Founder, Automation Culture</p>
        </div>

        {/* Desktop: full founder layout */}
        <div className="hidden md:flex flex-col gap-16 md:flex-row md:gap-4">

          {/* Copy block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            <h2 className="mb-8 text-5xl font-semibold leading-tight text-white md:text-6xl">
              Hi, I&apos;m Nick.
            </h2>
            <div className="max-w-[600px] space-y-6 text-zinc-400 leading-[1.85]">
              <p>
                I started Automation Culture because I kept seeing the same
                thing — great local businesses with full contact lists but no
                systems in place to follow up.
              </p>
              <p>
                The leads are there. The trust is already built. That&apos;s money just
                being left on the table. I rather put it in your pocket and mine.
              </p>
              <p>
                All that&apos;s needed is the right message, at the right time. With the help
                of AI and automation tools, this is a lot easier than it used to be.
              </p>
              <p>
                If you&apos;re a Melbourne service business and
                want to find out what opportunities are waiting in your list — lets have a chat.
              </p>
            </div>
            <p className="mt-10 text-base font-medium text-orange-400">
              — Nick, Founder, Automation Culture
            </p>
          </motion.div>

          {/* Founder photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[400px] w-full flex-shrink-0 overflow-hidden rounded-xl md:h-auto md:w-[460px]"
          >
            <Image
              src="/images/nick.jpg"
              alt="Nick, Founder of Automation Culture"
              fill
              className="object-cover"
              style={{ objectPosition: "85% 13%", transform: "scale(0.8)", transformOrigin: "85% 13%" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
