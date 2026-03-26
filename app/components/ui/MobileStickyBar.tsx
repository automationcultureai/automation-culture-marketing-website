"use client";

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center md:hidden">
      <a
        href="#contact"
        className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black shadow-lg shadow-black/30 transition-colors active:bg-zinc-100"
      >
        Wake up my leads →
      </a>
    </div>
  );
}
