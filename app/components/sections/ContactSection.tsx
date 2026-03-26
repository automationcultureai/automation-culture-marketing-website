"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2 } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzwleja";

// Revenue estimate shown below the dropdown when a list size is selected
const REVENUE_ESTIMATES: Record<string, string> = {
  "Under 100": "Let's see what we find.",
  "100–500":   "Now we're talking.",
  "500–1000":  "This one's looking juicy.",
  "1000+":     "Mate. We need to talk.",
};

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", business: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative bg-gradient-to-b from-[#1a0f00] via-[#2a1500] to-black px-4 py-12 sm:py-24 md:py-32">

      {/* Hero-style radial glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #fb923c 0%, #c2410c 25%, transparent 65%)", opacity: 0.15 }} className="absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-container">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-24">

          {/* Left — copy */}
          <div className="flex flex-col justify-center gap-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-sm font-medium uppercase tracking-[0.2em] text-orange-400"
            >
              Get Started
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
            >
              {"Find out"}{" "}
              <span className="text-zinc-500">
                what&apos;s sitting in your contact list.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-zinc-400 sm:text-lg"
            >
              {"Free to find out. Free to start. You only pay when you win. Drop your details and we'll be in touch."}
            </motion.p>

            {/* Quote */}
            <blockquote className="border-l-2 border-orange-500/50 pl-5">
              <p className="text-zinc-400 leading-relaxed">
                &ldquo;I work with a small number of clients at a time so every campaign gets proper attention. If you&apos;re a Melbourne service business with an old contact list, a 20-minute call is all it takes to find out what&apos;s hiding in there.&rdquo;
              </p>
              <p className="mt-3 text-sm font-medium text-orange-400">— Nick</p>
            </blockquote>
          </div>

          {/* Right — form */}
          <div className="rounded-xl border border-orange-500/40 bg-zinc-900/50 p-4 sm:p-8 backdrop-blur-sm">
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-orange-400" />
                <h3 className="text-xl font-semibold text-white">{"You're in."}</h3>
                <p className="max-w-sm text-zinc-400">
                  {"We've got your details. Expect a messsage within the hour."}
                  <br />
                  <br />
                  {"Get ready to wake up those leads!"}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                    Your name <span className="text-orange-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Johnson"
                    className="rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-orange-500/60 focus:outline-none focus:ring-1 focus:ring-orange-500/40 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                    Email address <span className="text-orange-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@yourbusiness.com"
                    className="rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-orange-500/60 focus:outline-none focus:ring-1 focus:ring-orange-500/40 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-sm font-medium text-zinc-300">
                    Contact number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="04xx xxx xxx"
                    className="rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-orange-500/60 focus:outline-none focus:ring-1 focus:ring-orange-500/40 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="business" className="text-sm font-medium text-zinc-300">
                    Business name
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Johnson & Co."
                    className="rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-orange-500/60 focus:outline-none focus:ring-1 focus:ring-orange-500/40 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                    How many old leads are you sitting on?
                  </label>
                  <select
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-sm text-white focus:border-orange-500/60 focus:outline-none focus:ring-1 focus:ring-orange-500/40 transition-colors"
                  >
                    <option value="" disabled className="bg-zinc-900">Select a range</option>
                    <option value="Under 100" className="bg-zinc-900">Under 100</option>
                    <option value="100–500" className="bg-zinc-900">100–500</option>
                    <option value="500–1000" className="bg-zinc-900">500–1000</option>
                    <option value="1000+" className="bg-zinc-900">1000+</option>
                  </select>

                  {/* Revenue estimate card — always in DOM, fades in on selection */}
                  <div
                    style={{
                      opacity: formData.message ? 1 : 0,
                      transform: formData.message ? "translateY(0)" : "translateY(6px)",
                      transition: "opacity 400ms ease-out, transform 400ms ease-out",
                      pointerEvents: formData.message ? "auto" : "none",
                      position: "relative",
                      background: "#1A1410",
                      border: "1px solid rgba(249,115,22,0.25)",
                      borderRadius: "8px",
                      padding: "12px 16px",
                    }}
                  >
                    <div key={formData.message} className="animate-estimate-fade">
                      <p style={{ color: "#ffffff", fontSize: "14px", fontWeight: 500, lineHeight: 1.4 }}>
                        {REVENUE_ESTIMATES[formData.message] ?? ""}
                      </p>
                    </div>
                  </div>
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-400">
                    {"Something went wrong. Please try again or email us directly."}
                  </p>
                )}

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="w-full bg-orange-500 hover:bg-orange-400 text-white transition-shadow sm:shadow-[0_0_40px_rgba(249,115,22,0.8),0_0_100px_rgba(249,115,22,0.5),0_0_160px_rgba(249,115,22,0.2)] sm:hover:shadow-[0_0_60px_rgba(249,115,22,1),0_0_120px_rgba(249,115,22,0.6),0_0_200px_rgba(249,115,22,0.3)] sm:animate-nav-glow"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      {"Wake up my leads"}
                    </>
                  )}
                </Button>

                <p className="text-center text-sm text-zinc-600">
                  {"Nick reviews every submission personally. You'll usually hear back within the hour."}
                </p>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
