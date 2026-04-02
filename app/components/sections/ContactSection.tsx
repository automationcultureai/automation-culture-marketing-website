"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2 } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzwleja";

// Revenue estimate shown below the dropdown when a list size is selected
const REVENUE_ESTIMATES: Record<string, string> = {
  "Under 100": "Let's see what we find.",
  "100–500":   "Tha's what I'm talking about.",
  "500–1000":  "This one's looking juicy.",
  "1000+":     "*Rubs hands together*",
};

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    industry: "",
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
        setFormData({ name: "", email: "", phone: "", business: "", industry: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative bg-[#FAFAF8] px-4 py-12 sm:py-24 md:py-32">

      <div className="relative mx-auto max-w-container">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-24">

          {/* Left — copy */}
          <div className="flex flex-col justify-center gap-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-sm font-medium uppercase tracking-[0.2em] text-[#C4394A]"
            >
              Get Started
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-4xl font-semibold leading-tight text-[#1a1a1a] sm:text-5xl md:text-6xl"
            >
              {"Find out"}{" "}
              <span className="text-[#5C5A58]">
                what&apos;s sitting in your contact list.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-[#5C5A58] sm:text-lg"
            >
              {"Free to find out. Free to start. You only pay when you win. Drop your details and we'll be in touch."}
            </motion.p>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="border-l-2 border-[#C4394A]/40 pl-5">
              <p className="text-[#5C5A58] leading-relaxed">
                &ldquo;I work with a small number of clients at a time so every campaign gets proper attention. If you&apos;re a Melbourne beauty or wellness business with an old contact list, a 20-minute call is all it takes to find out what&apos;s hiding in there.&rdquo;
              </p>
              <p className="mt-3 text-sm font-medium text-[#C4394A]">— Nick</p>
            </motion.blockquote>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="noise rounded-2xl border border-[#C4394A]/30 bg-white p-4 sm:p-8 backdrop-blur-sm" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)" }}>
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-[#C4394A]" />
                <h3 className="text-xl font-semibold text-[#1a1a1a]">{"You're in."}</h3>
                <p className="max-w-sm text-[#5C5A58]">
                  {"We've got your details. Expect a messsage within the hour."}
                  <br />
                  <br />
                  {"Get ready to wake up those leads!"}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-medium uppercase tracking-[0.1em] text-[#5C5A58]">
                    Your name <span className="text-[#C4394A]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alex Johnson"
                    className="form-field rounded-xl border border-[#ECEAE6] bg-[#F2F0EC] px-4 py-2.5 text-sm text-[#1a1a1a] placeholder:text-[#9A9790] focus:border-[#C4394A]/40 focus:outline-none focus:ring-1 focus:ring-[#C4394A]/15 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-medium uppercase tracking-[0.1em] text-[#5C5A58]">
                    Email address <span className="text-[#C4394A]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@yourbusiness.com"
                    className="form-field rounded-xl border border-[#ECEAE6] bg-[#F2F0EC] px-4 py-2.5 text-sm text-[#1a1a1a] placeholder:text-[#9A9790] focus:border-[#C4394A]/40 focus:outline-none focus:ring-1 focus:ring-[#C4394A]/15 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-medium uppercase tracking-[0.1em] text-[#5C5A58]">
                    Contact number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="04xx xxx xxx"
                    className="form-field rounded-xl border border-[#ECEAE6] bg-[#F2F0EC] px-4 py-2.5 text-sm text-[#1a1a1a] placeholder:text-[#9A9790] focus:border-[#C4394A]/40 focus:outline-none focus:ring-1 focus:ring-[#C4394A]/15 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="business" className="text-xs font-medium uppercase tracking-[0.1em] text-[#5C5A58]">
                    Business name
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Johnson & Co."
                    className="form-field rounded-xl border border-[#ECEAE6] bg-[#F2F0EC] px-4 py-2.5 text-sm text-[#1a1a1a] placeholder:text-[#9A9790] focus:border-[#C4394A]/40 focus:outline-none focus:ring-1 focus:ring-[#C4394A]/15 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="industry" className="text-xs font-medium uppercase tracking-[0.1em] text-[#5C5A58]">
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="form-field rounded-xl border border-[#ECEAE6] bg-[#F2F0EC] px-4 py-2.5 text-sm text-[#1a1a1a] focus:border-[#C4394A]/40 focus:outline-none focus:ring-1 focus:ring-[#C4394A]/15 transition-colors"
                  >
                    <option value="">Select your industry</option>
                    <option value="Beauty & Wellness">Beauty &amp; Wellness</option>
                    <option value="Health Practitioners">Health Practitioners</option>
                    <option value="Allied Health">Allied Health</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-medium uppercase tracking-[0.1em] text-[#5C5A58]">
                    How many old leads are you sitting on?
                  </label>
                  <select
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-field rounded-xl border border-[#ECEAE6] bg-[#F2F0EC] px-4 py-2.5 text-sm text-[#1a1a1a] focus:border-[#C4394A]/40 focus:outline-none focus:ring-1 focus:ring-[#C4394A]/15 transition-colors"
                  >
                    <option value="" disabled>Select a range</option>
                    <option value="Under 100">Under 100</option>
                    <option value="100–500">100–500</option>
                    <option value="500–1000">500–1000</option>
                    <option value="1000+">1000+</option>
                  </select>

                  {/* Revenue estimate card — always in DOM, fades in on selection */}
                  <div
                    style={{
                      opacity: formData.message ? 1 : 0,
                      transform: formData.message ? "translateY(0)" : "translateY(6px)",
                      transition: "opacity 400ms ease-out, transform 400ms ease-out",
                      pointerEvents: formData.message ? "auto" : "none",
                      position: "relative",
                      background: "#F2F0EC",
                      border: "1px solid #ECEAE6",
                      borderRadius: "8px",
                      padding: "12px 16px",
                    }}
                  >
                    <div key={formData.message} className="animate-estimate-fade">
                      <p style={{ color: "#1a1a1a", fontSize: "14px", fontWeight: 500, lineHeight: 1.4 }}>
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
                  className="w-full bg-[#C4394A] hover:bg-[#AD2F3E] text-white transition-shadow text-sm py-2 sm:text-base sm:py-3 sm:shadow-lg sm:animate-nav-glow"
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

                <p className="text-center text-sm text-[#9A9790]">
                  {"Nick reviews every submission personally. You'll usually hear back within the hour."}
                </p>

              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
