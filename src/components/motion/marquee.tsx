import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  /** Seconds for one full loop. */
  duration?: number;
  gap?: string;
  pauseOnHover?: boolean;
};

/** CSS-only infinite marquee: two identical tracks translated by their own width. */
export function Marquee({
  children,
  className,
  reverse = false,
  duration = 40,
  gap = "3rem",
  pauseOnHover = true,
}: MarqueeProps) {
  const style = { "--marquee-duration": `${duration}s`, "--marquee-gap": gap, gap } as CSSProperties;

  return (
    <div className={cn("group/marquee mask-fade-x flex overflow-hidden", className)} style={style}>
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1 || undefined}
          className={cn(
            "flex min-w-full shrink-0 items-center justify-around",
            reverse ? "animate-marquee-reverse" : "animate-marquee",
            pauseOnHover && "group-hover/marquee:[animation-play-state:paused]",
          )}
          style={{ gap }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
