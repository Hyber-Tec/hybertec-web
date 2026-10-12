"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

type ScrollTextProps = {
  text: string;
  className?: string;
  /** Words that light up to full foreground; the rest settle slightly softer. */
  emphasis?: string[];
};

/**
 * Paragraph whose words light up one by one as it scrolls through the viewport.
 * Unlit words stay at an AA-contrast grey, so the text is always readable.
 */
export function ScrollText({ text, className, emphasis = [] }: ScrollTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");

  return (
    <p ref={ref} className={cn("flex flex-wrap", className)}>
      <span className="sr-only">{text}</span>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const clean = word.replace(/[^\w-]/g, "").toLowerCase();
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]} strong={emphasis.includes(clean)}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
  strong,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  strong: boolean;
}) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span aria-hidden className="relative mr-[0.25em] text-[color-mix(in_oklch,var(--foreground)_58%,var(--background))]">
      {children}
      <motion.span style={{ opacity }} className={cn("absolute inset-0", strong ? "text-foreground" : "text-foreground/90")}>
        {children}
      </motion.span>
    </span>
  );
}
