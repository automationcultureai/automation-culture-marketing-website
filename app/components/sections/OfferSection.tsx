"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const checklistItems = [
  "Every message tailored to that lead — email and SMS",
  "Leads book straight into your calendar",
  "Automatic reminders — fewer no-shows, nothing falls through",
  "Live dashboard — sent, opened, clicked, booked, completed",
  "No setup fee. No lock-in. You only pay when a job is done",
];

export function OfferSection() {
  return (
    <section id="offer" className="relative bg-[#FAFAF8] px-4 py-12 sm:py-24 md:py-32">
      {/* Also serves as #pricing anchor */}
      <span id="pricing" className="absolute -top-20" />



      <div className="relative mx-auto max-w-container" style={{ zIndex: 1 }}>

        {/* Header */}
        <div className="mb-8 sm:mb-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#D4941A]"
          >
            The Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-4xl font-semibold leading-tight text-[#1a1a1a] sm:text-5xl md:text-6xl"
          >
            Zero risk.{" "}
            <span className="text-[#5C5A58]">You only pay when it works.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="mx-auto mt-4 max-w-xl text-[#5C5A58] sm:text-lg"
          >
            {"No retainers. No setup fees. No lock-in contracts."}
          </motion.p>
        </div>

        {/* Offer bubble — hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="hidden sm:flex mx-auto max-w-2xl rounded-2xl border border-[#ECEAE6] bg-[#F2F0EC] p-8 mb-12 flex-col gap-6"
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)" }}
        >
          <p className="text-2xl font-semibold text-[#1a1a1a] leading-snug">
            {'"If we bring you back 10 old clients and you make '}
            <span className="bg-gradient-to-r from-[#ECC878] via-[#D4941A] to-[#B07A14] bg-clip-text text-transparent">$3,000</span>
            {' — you pay us '}
            <span className="bg-gradient-to-r from-[#ECC878] via-[#D4941A] to-[#B07A14] bg-clip-text text-transparent">$300</span>
            {'. If we bring you nothing, you pay nothing."'}
          </p>

          <div className="border-t border-[#ECEAE6]" />

          <p className="text-[#5C5A58] leading-relaxed">
            {"That's the whole deal. We set up the campaign, write every email, manage the sending schedule, handle opt-outs, and give your leads a booking page connected to your calendar. You get notified when someone books. Your only job is to deliver your service."}
          </p>


        </motion.div>

        {/* Pricing card — narrow and centred */}
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="noise relative rounded-2xl border border-[#D4941A]/30 bg-gradient-to-br from-[#E8A820] to-[#B07A14] p-5 sm:p-8 md:p-12"
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)" }}
          >
            {/* Shine overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 40%, transparent 60%, rgba(0,0,0,0.12) 100%)" }} />

            {/* Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="animate-badge-shimmer inline-flex rounded-full bg-gradient-to-r from-[#ECC878] to-[#D4941A] px-3 py-1 text-xs font-semibold text-white">
                Early Access Offer
              </span>
            </div>

            {/* Spots */}
            <p className="text-center text-sm font-normal text-white/90 mb-4 sm:mb-6 mt-1 sm:mt-2">
              5 early access spots available — limited time only
            </p>

            {/* Price */}
            <div className="mb-5 sm:mb-8 text-center">
              <div className="flex flex-col items-center">
                <span className="text-7xl sm:text-8xl font-bold bg-gradient-to-r from-white to-[#ffecc0] bg-clip-text text-transparent">10%</span>
                <span className="text-sm text-white/80 mt-2">success fee per completed job.</span>
              </div>
              <p className="mt-3 text-sm text-white/50">Industry standard: $2,000 setup fee + $800/month retainer. We charge neither.</p>
            </div>

            <div className="mb-4 sm:mb-8 border-t border-white/10" />

            {/* Checklist — sequential 80ms stagger, translateY 10px */}
            <div className="mb-4 sm:mb-8 grid gap-2 sm:gap-3 sm:grid-cols-2">
              {checklistItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08, ease: "easeOut" }}
                  className="flex items-start gap-2 text-sm text-white/85"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                  {item}
                </motion.div>
              ))}
            </div>

            <div className="mb-4 sm:mb-8 border-t border-white/10" />

            <p className="mb-4 sm:mb-6 text-center text-sm text-white/70">
              {"Early access clients lock in this model permanently. New clients after this cohort will pay a setup fee and monthly retainer. You won't."}
            </p>

            <Button size="lg" className="w-full animate-nav-glow text-sm py-2 sm:text-base sm:py-3 bg-[#fef3d6] text-[#7A5010] hover:bg-[#fde9b8]" asChild>
              <a href="#contact">{"Claim your spot"}</a>
            </Button>

            <p className="mt-4 text-center text-xs text-white/50">
              {"Currently onboarding early access clients in Melbourne. Spots are limited."}
            </p>
          </motion.div>
        </div>

        {/* Footer note */}
        <p className="mt-6 sm:mt-12 text-center text-sm text-[#9A9790]">
          {"This early access offer is strictly limited to 5 clients. Once those spots are filled, pricing moves to a setup fee plus monthly retainer. This offer will not come back."}
        </p>

      </div>
    </section>
  );
}
