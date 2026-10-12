"use client";

import { useLenis } from "lenis/react";
import { LuArrowUp } from "react-icons/lu";

export function BackToTop() {
  const lenis = useLenis();

  return (
    <button
      type="button"
      onClick={() => (lenis ? lenis.scrollTo(0, { duration: 1.6 }) : window.scrollTo({ top: 0, behavior: "smooth" }))}
      className="group inline-flex items-center gap-2 font-mono tracking-wider uppercase transition-colors hover:text-foreground"
    >
      Back to top
      <span className="inline-flex size-6 items-center justify-center rounded-full border border-border transition-colors group-hover:border-foreground/40">
        <LuArrowUp className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </span>
    </button>
  );
}
