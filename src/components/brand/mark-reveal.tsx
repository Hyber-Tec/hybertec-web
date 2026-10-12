"use client";

import { motion } from "motion/react";
import { useId } from "react";

import { MARK_GEOMETRY as G, MARK_PATH, MARK_VIEWBOX } from "./mark-path";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

// Rotated wipe whose leading edge runs parallel to the glyph's 45° chamfers,
// sweeping from the top-left to the bottom-right.
const CX = G.left + G.width / 2;
const CY = G.top + G.height / 2;
const SPAN = 3000;

type MarkRevealProps = {
  className?: string;
  /** Start the animation. Kept false until the element should play. */
  play?: boolean;
  delay?: number;
  /** Outline width in glyph units (the glyph is 2295 units tall). */
  strokeWidth?: number;
  onComplete?: () => void;
};

/**
 * "Blueprint to build": the official mark's outline is drawn first, then the
 * solid glyph sweeps in diagonally. Used by the intro loader and the 404 page.
 */
export function MarkReveal({
  className,
  play = true,
  delay = 0,
  strokeWidth = 24,
  onComplete,
}: MarkRevealProps) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const state = play ? "play" : "idle";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={MARK_VIEWBOX}
      role="img"
      aria-label="HyberTec"
      className={className}
      overflow="visible"
    >
      <defs>
        <clipPath id={`${uid}-wipe`}>
          <motion.rect
            y={CY - SPAN / 2}
            width={SPAN}
            height={SPAN}
            transform={`rotate(45 ${CX} ${CY})`}
            initial={{ attrX: CX - SPAN * 1.5 }}
            animate={state}
            variants={{
              idle: { attrX: CX - SPAN * 1.5 },
              play: {
                attrX: CX - SPAN / 2,
                transition: { duration: 0.75, ease: EASE_IN_OUT, delay: delay + 0.32 },
              },
            }}
            onAnimationComplete={(definition) => {
              if (definition === "play") onComplete?.();
            }}
          />
        </clipPath>
      </defs>

      <motion.path
        d={MARK_PATH}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={state}
        variants={{
          idle: { pathLength: 0, opacity: 0 },
          play: {
            pathLength: 1,
            opacity: [0, 0.9, 0.9, 0],
            transition: {
              pathLength: { duration: 0.85, ease: EASE_OUT, delay },
              opacity: { duration: 1.25, times: [0, 0.08, 0.7, 1], delay },
            },
          },
        }}
      />

      <path d={MARK_PATH} fill="currentColor" clipPath={`url(#${uid}-wipe)`} />
    </svg>
  );
}
