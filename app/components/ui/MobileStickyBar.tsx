"use client";

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center md:hidden">
      <a
        href="#contact"
        className="rounded-full bg-[#D4941A] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/30 transition-colors active:bg-[#B07A14]"
      >
        Get Started →
      </a>
    </div>
  );
}
