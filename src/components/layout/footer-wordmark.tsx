"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useId, useRef, type PointerEvent } from "react";

const W = 1200;
const H = 172;
const text = {
  x: W / 2,
  y: H - 6,
  textAnchor: "middle",
  textLength: W - 16,
  lengthAdjust: "spacing",
  fontSize: 212,
  fontWeight: 600,
  fontFamily: "var(--font-geist-sans), ui-sans-serif, sans-serif",
} as const;

/**
 * Oversized HYBERTEC wordmark for the footer. Always spans the full width
 * (SVG textLength), draws its outline on first view, and lights up under the
 * pointer with a soft spotlight. Adapted from Aceternity's text-hover-effect.
 */
export function FooterWordmark() {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const ref = useRef<SVGSVGElement>(null);
  const x = useSpring(useMotionValue(W / 2), { stiffness: 180, damping: 26 });
  const y = useSpring(useMotionValue(H / 2), { stiffness: 180, damping: 26 });
  const radius = useSpring(0, { stiffness: 120, damping: 22 });

  function handleMove(event: PointerEvent<SVGSVGElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(((event.clientX - rect.left) / rect.width) * W);
    y.set(((event.clientY - rect.top) / rect.height) * H);
  }

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${W} ${H}`}
      aria-hidden
      className="block h-auto w-full select-none"
      onPointerMove={handleMove}
      onPointerEnter={() => radius.set(300)}
      onPointerLeave={() => radius.set(0)}
    >
      <defs>
        <linearGradient id={`${uid}-ghost`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.14" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.02" />
        </linearGradient>
        <motion.radialGradient id={`${uid}-spot`} gradientUnits="userSpaceOnUse" cx={x} cy={y} r={radius}>
          <stop offset="0" stopColor="white" stopOpacity="1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </motion.radialGradient>
        <mask id={`${uid}-mask`} maskUnits="userSpaceOnUse" x="0" y="0" width={W} height={H}>
          <rect width={W} height={H} fill={`url(#${uid}-spot)`} />
        </mask>
      </defs>

      <text {...text} fill={`url(#${uid}-ghost)`}>
        HYBERTEC
      </text>
      <motion.text
        {...text}
        fill="none"
        stroke="currentColor"
        strokeOpacity={0.28}
        strokeWidth={1.2}
        initial={{ strokeDasharray: 1400, strokeDashoffset: 1400 }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 3.2, ease: [0.65, 0, 0.35, 1] }}
      >
        HYBERTEC
      </motion.text>
      <text {...text} fill="currentColor" fillOpacity={0.9} mask={`url(#${uid}-mask)`}>
        HYBERTEC
      </text>
    </svg>
  );
}
