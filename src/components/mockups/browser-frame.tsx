import Image from "next/image";
import { useId } from "react";

import { cn } from "@/lib/utils";

// Adapted from Magic UI's Safari mockup (MIT). Frame 1203×753, screen 1200×700:
// capture desktop screenshots at 1440×840 to fill the screen exactly.
const FRAME_W = 1203;
const FRAME_H = 753;
const SCREEN = { x: 1, y: 52, w: 1200, h: 700 };
const pct = (value: number, of: number) => `${(value / of) * 100}%`;

type BrowserFrameProps = {
  src: string;
  alt: string;
  url: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function BrowserFrame({ src, alt, url, className, priority, sizes = "(min-width: 1024px) 60vw, 100vw" }: BrowserFrameProps) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");

  return (
    <div className={cn("relative w-full", className)} style={{ aspectRatio: `${FRAME_W}/${FRAME_H}` }}>
      <div
        className="absolute z-0 overflow-hidden rounded-b-[0.9%] bg-muted"
        style={{
          left: pct(SCREEN.x, FRAME_W),
          top: pct(SCREEN.y, FRAME_H),
          width: pct(SCREEN.w, FRAME_W),
          height: pct(SCREEN.h, FRAME_H),
        }}
      >
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover object-top" />
      </div>

      <svg
        viewBox={`0 0 ${FRAME_W} ${FRAME_H}`}
        fill="none"
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 size-full"
      >
        <defs>
          <mask id={`${uid}-punch`} maskUnits="userSpaceOnUse">
            <rect width={FRAME_W} height={FRAME_H} fill="white" />
            <path d="M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z" fill="black" />
          </mask>
        </defs>
        <g mask={`url(#${uid}-punch)`}>
          <path
            d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z"
            className="fill-neutral-200 dark:fill-neutral-700"
          />
          <path
            d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z"
            className="fill-neutral-200 dark:fill-neutral-700"
          />
          <path
            d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z"
            className="fill-white dark:fill-neutral-800"
          />
          {[27, 47, 67].map((cx) => (
            <circle key={cx} cx={cx} cy="25" r="6" className="fill-neutral-200 dark:fill-neutral-700" />
          ))}
          <path
            d="M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z"
            className="fill-neutral-100 dark:fill-neutral-700/70"
          />
          <path
            d="M566.269 32.0852H572.426C573.277 32.0852 573.696 31.6663 573.696 30.7395V25.9851C573.696 25.1472 573.353 24.7219 572.642 24.6521V23.0842C572.642 20.6721 571.036 19.5105 569.348 19.5105C567.659 19.5105 566.053 20.6721 566.053 23.0842V24.6711C565.393 24.7727 565 25.1917 565 25.9851V30.7395C565 31.6663 565.418 32.0852 566.269 32.0852ZM567.272 22.97C567.272 21.491 568.211 20.6785 569.348 20.6785C570.478 20.6785 571.423 21.491 571.423 22.97V24.6394L567.272 24.6458V22.97Z"
            className="fill-neutral-400"
          />
          <text x="582" y="30.5" fontSize="12.5" fontFamily="var(--font-geist-sans), Arial, sans-serif" className="fill-neutral-500 dark:fill-neutral-400">
            {url}
          </text>
        </g>
      </svg>
    </div>
  );
}
