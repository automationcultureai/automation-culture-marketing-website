"use client";

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="border-t border-zinc-800 bg-black/95 backdrop-blur-md px-6 py-3">
        <a
          href="#contact"
          className="flex mx-auto max-w-xs items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition-colors active:bg-orange-400"
        >
          Wake up my leads →
        </a>
      </div>
    </div>
  );
}
