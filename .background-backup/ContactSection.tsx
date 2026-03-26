"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2 } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzwleja";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
        setFormData({ name: "", email: "", business: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative bg-black px-4 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(249,115,22,0.08)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-container">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left — copy */}
          <div className="flex flex-col justify-center gap-6">
            <p className="text-sm font-medium uppercase tracking-widest text-orange-400">
              Get Started
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
              {"Let's see what's"}{" "}
              <span className="text-zinc-500">
                hiding in your contact list.
              </span>
            </h2>
            <p className="text-zinc-400 sm:text-lg">
              {"Drop your details and we'll be in touch within one business day. We'll have a quick 20-minute chat about your business, your leads, and whether we're a good fit. No pitch. No pressure."}
            </p>

            {/* Trust signals */}
            <ul className="flex flex-col gap-3">
              {[
                "Free to get started — you only pay on results",
                "20-minute call, no obligation",
                "We'll tell you upfront if we can help",
                "Currently taking on early access clients in Melbourne",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 backdrop-blur-sm">
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-orange-400" />
                <h3 className="text-xl font-semibold text-white">{"You're in."}</h3>
                <p className="max-w-xs text-zinc-400">
                  {"We'll be in touch within one business day. Get ready to wake up some dead leads."}
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
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="E.g. I've got about 200 old quotes and past customers I haven't followed up with in over a year..."
                    className="resize-none rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-orange-500/60 focus:outline-none focus:ring-1 focus:ring-orange-500/40 transition-colors"
                  />
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
                  className="w-full"
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

                <p className="text-center text-xs text-zinc-600">
                  {"We'll reply within 1 business day. No spam, ever."}
                </p>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}