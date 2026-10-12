import { useId } from "react";

import { cn } from "@/lib/utils";

import { MARK_GEOMETRY as G, MARK_PATH, MARK_VIEWBOX } from "./mark-path";

/**
 * Static brushed-chrome rendering of the official mark. Used as the hero
 * fallback (reduced motion, no WebGL) and as the poster while the shader loads.
 */
export function ChromeMark({ className }: { className?: string }) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={MARK_VIEWBOX}
      role="img"
      aria-label="HyberTec"
      className={cn("h-auto w-full", className)}
    >
      <defs>
        <linearGradient
          id={`${uid}-chrome`}
          gradientUnits="userSpaceOnUse"
          x1={G.left}
          y1={G.top}
          x2={G.left + G.width}
          y2={G.top + G.height}
        >
          <stop offset="0" stopColor="#fafafa" />
          <stop offset="0.22" stopColor="#8a8a8a" />
          <stop offset="0.38" stopColor="#f5f5f5" />
          <stop offset="0.5" stopColor="#d4d4d4" />
          <stop offset="0.62" stopColor="#525252" />
          <stop offset="0.78" stopColor="#e5e5e5" />
          <stop offset="1" stopColor="#737373" />
        </linearGradient>
      </defs>
      <path d={MARK_PATH} fill={`url(#${uid}-chrome)`} />
    </svg>
  );
}
