import Image from "next/image";
import { useId } from "react";

import { cn } from "@/lib/utils";

// Adapted from Magic UI's iPhone mockup (MIT). Frame 433×882, screen 389.5×843.5:
// capture mobile screenshots at 390×844 to fill the screen exactly.
const FRAME_W = 433;
const FRAME_H = 882;
const SCREEN = { x: 21.25, y: 19.25, w: 389.5, h: 843.5, r: 55.75 };
const pct = (value: number, of: number) => `${(value / of) * 100}%`;

type PhoneFrameProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function PhoneFrame({ src, alt, className, priority, sizes = "(min-width: 1024px) 20vw, 45vw" }: PhoneFrameProps) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");

  return (
    <div className={cn("relative w-full", className)} style={{ aspectRatio: `${FRAME_W}/${FRAME_H}` }}>
      <div
        className="absolute z-0 overflow-hidden bg-muted"
        style={{
          left: pct(SCREEN.x, FRAME_W),
          top: pct(SCREEN.y, FRAME_H),
          width: pct(SCREEN.w, FRAME_W),
          height: pct(SCREEN.h, FRAME_H),
          borderRadius: `${pct(SCREEN.r, SCREEN.w)} / ${pct(SCREEN.r, SCREEN.h)}`,
        }}
      >
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover object-top" />
      </div>

      <svg viewBox={`0 0 ${FRAME_W} ${FRAME_H}`} fill="none" aria-hidden className="pointer-events-none absolute inset-0 size-full">
        <defs>
          <mask id={`${uid}-punch`} maskUnits="userSpaceOnUse">
            <rect width={FRAME_W} height={FRAME_H} fill="white" />
            <rect x={SCREEN.x} y={SCREEN.y} width={SCREEN.w} height={SCREEN.h} rx={SCREEN.r} ry={SCREEN.r} fill="black" />
          </mask>
        </defs>
        <g mask={`url(#${uid}-punch)`}>
          <path
            d="M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z"
            className="fill-neutral-300 dark:fill-neutral-600"
          />
          <path d="M0 171C0 170.448 0.447715 170 1 170H3V204H1C0.447715 204 0 203.552 0 203V171Z" className="fill-neutral-300 dark:fill-neutral-600" />
          <path d="M1 234C1 233.448 1.44772 233 2 233H3.5V300H2C1.44772 300 1 299.552 1 299V234Z" className="fill-neutral-300 dark:fill-neutral-600" />
          <path d="M1 319C1 318.448 1.44772 318 2 318H3.5V385H2C1.44772 385 1 384.552 1 384V319Z" className="fill-neutral-300 dark:fill-neutral-600" />
          <path d="M430 279H432C432.552 279 433 279.448 433 280V384C433 384.552 432.552 385 432 385H430V279Z" className="fill-neutral-300 dark:fill-neutral-600" />
          <path
            d="M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z"
            className="fill-neutral-100 dark:fill-neutral-900"
          />
        </g>
        <path
          d="M154 48.5C154 38.2827 162.283 30 172.5 30H259.5C269.717 30 278 38.2827 278 48.5C278 58.7173 269.717 67 259.5 67H172.5C162.283 67 154 58.7173 154 48.5Z"
          className="fill-neutral-950"
        />
        <circle cx="259.5" cy="48.5" r="5.5" className="fill-neutral-800" />
      </svg>
    </div>
  );
}
