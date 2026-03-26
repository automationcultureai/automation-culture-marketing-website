import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function OfferSection() {
  return (
    <section id="offer" className="relative bg-black px-4 py-24 sm:py-32">
      {/* Also serves as #pricing anchor */}
      <span id="pricing" className="absolute -top-20" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(249,115,22,0.06)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-container">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-orange-400">
            The Offer
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
            Zero risk.{" "}
            <span className="text-zinc-500">You only pay when it works.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400 sm:text-lg">
            {"We're so confident in what we build that we don't charge you a cent until a job is completed. No retainers. No setup fees. No lock-in contracts."}
          </p>
        </div>

        {/* Offer bubble */}
        <div className="mx-auto max-w-2xl rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 mb-12 flex flex-col gap-6">
          <p className="text-2xl font-semibold text-white leading-snug">
            {'"If we bring you back 10 old clients and you make '}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">$3,000</span>
            {' — you pay us '}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">$300</span>
            {'. If we bring you nothing, you pay nothing."'}
          </p>

          <div className="border-t border-zinc-800" />

          <p className="text-zinc-400 leading-relaxed">
            {"That's the whole deal. We set up the campaign, write every email, manage the sending schedule, handle opt-outs, and give your leads a booking page connected to your calendar. You get notified when someone books. Your only job is to show up and deliver."}
          </p>

          <p className="text-zinc-500 leading-relaxed text-sm">
            {"No setup fee. No retainer. No lock-in. We take 10% of completed jobs only — and if we bring you nothing, you pay nothing."}
          </p>
        </div>

        {/* Pricing card — narrow and centred */}
        <div className="mx-auto max-w-2xl">
          <div className="relative rounded-xl border border-orange-500/40 bg-gradient-to-b from-orange-950/40 to-zinc-900/60 p-8 md:p-12">

            {/* Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-xs font-semibold text-white">
                Early Access Offer
              </span>
            </div>

            {/* Spots */}
            <p className="text-center text-sm font-medium text-orange-400 mb-6 mt-2">
              5 early access spots available — join before this offer closes
            </p>

            {/* Price */}
            <div className="mb-8 text-center">
              <div className="flex items-end justify-center gap-2">
                <span className="text-6xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">10%</span>
                <span className="mb-2 text-zinc-400">per completed job</span>
              </div>
              <p className="mt-2 text-sm text-zinc-500">Minimum $20 per completed job. Invoiced monthly.</p>
            </div>

            <div className="mb-8 border-t border-zinc-800" />

            {/* Checklist */}
            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {[
                "Personalised email sequences",
                "Up to 4 follow-ups per lead, automated",
                "Unique booking page per lead",
                "Google Calendar availability sync",
                "Booking confirmations & reminders",
                "Client dashboard — live stats & bookings",
                "Automatic opt-out & compliance handling",
                "No setup fee",
                "No lock-in contract",
                "Replies go direct to your inbox",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mb-8 border-t border-zinc-800" />

            <p className="mb-6 text-center text-sm text-zinc-400">
              {"Early access clients lock in this model permanently. New clients after this cohort will pay a setup fee and monthly retainer. You won't."}
            </p>

            <Button size="lg" className="w-full" asChild>
              <a href="#contact">{"Claim your free campaign"}</a>
            </Button>

            <p className="mt-4 text-center text-xs text-zinc-600">
              {"Currently onboarding early access clients in Melbourne. Spots are limited."}
            </p>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-12 text-center text-sm text-zinc-600">
          {"This early access offer is strictly limited to 5 clients. Once those spots are filled, pricing moves to a setup fee plus monthly retainer. This offer will not come back."}
        </p>

      </div>
    </section>
  );
}
