"use client";

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="border-t border-zinc-800 bg-black/95 backdrop-blur-md px-4 py-3">
        <a
          href="#contact"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3.5 text-sm font-semibold text-black transition-colors active:bg-zinc-100"
        >
          Wake up my leads →
        </a>
      </div>
    </div>
  );
}
