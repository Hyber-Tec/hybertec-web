import type { CSSProperties } from "react";

import { MARK_PATH, MARK_VIEWBOX } from "@/components/brand/mark-path";

const LETTERS = "HYBERTEC".split("");

/**
 * First-visit brand intro: the official mark's outline draws, its fill sweeps
 * in along the 45° chamfers, the wordmark rises, then the curtain lifts.
 * Pure CSS (see globals.css) so it plays from first paint without waiting for
 * JavaScript; the boot script hides it on repeat visits.
 */
export function IntroLoader() {
  return (
    <div aria-hidden className="intro-overlay fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="bg-blueprint mask-radial absolute inset-0 opacity-60" />

      <div className="intro-lockup relative flex items-center gap-5 sm:gap-7">
        <div className="relative aspect-[1498/2295] h-20 text-foreground sm:h-24">
          <svg viewBox={MARK_VIEWBOX} className="absolute inset-0 size-full overflow-visible">
            <path
              className="intro-outline"
              d={MARK_PATH}
              pathLength={1}
              fill="none"
              stroke="currentColor"
              strokeWidth={24}
              strokeLinejoin="round"
            />
          </svg>
          <div className="intro-fill absolute inset-0">
            <svg viewBox={MARK_VIEWBOX} className="size-full">
              <path d={MARK_PATH} fill="currentColor" />
            </svg>
          </div>
        </div>

        <span className="intro-divider h-12 w-px bg-foreground/30 sm:h-14" />

        <span className="flex overflow-hidden text-xl font-semibold tracking-[0.34em] text-foreground sm:text-2xl">
          {LETTERS.map((letter, i) => (
            <span key={i} className="intro-letter" style={{ "--i": i } as CSSProperties}>
              {letter}
            </span>
          ))}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px overflow-hidden bg-foreground/10">
        <div className="intro-progress h-full bg-foreground/70" />
      </div>
    </div>
  );
}
