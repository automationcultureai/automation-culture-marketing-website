"use client";

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center md:hidden">
      <a
        href="#contact"
        className="rounded-full bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-900/40 transition-colors active:bg-orange-400"
      >
        Wake up my leads →
      </a>
    </div>
  );
}
