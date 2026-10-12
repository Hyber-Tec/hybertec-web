"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

import { EASE_OUT } from "./reveal";

export type RevealLine = string | { text: string; muted?: boolean; className?: string };

type RevealTextProps = {
  /** Lines are revealed one after another; words within a line are staggered. */
  lines: RevealLine[];
  as?: "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
  lineClassName?: string;
  /** When provided, the animation is driven by this flag instead of viewport entry. */
  play?: boolean;
  delay?: number;
  stagger?: number;
};

/**
 * Masked, word-by-word headline reveal. Each word slides up from behind its
 * own clipping box, so the text never overlaps neighbouring content mid-animation.
 */
export function RevealText({
  lines,
  as = "h2",
  className,
  lineClassName,
  play,
  delay = 0,
  stagger = 0.045,
}: RevealTextProps) {
  const controlled = play !== undefined;
  let wordIndex = 0;

  const normalized = lines.map((line) => (typeof line === "string" ? { text: line } : line));

  const content = normalized.map((line, li) => (
    <span key={li} className={cn("block", lineClassName, line.muted && "text-muted-foreground", line.className)}>
      {line.text.split(" ").map((word, wi, words) => {
        const i = wordIndex++;
        return (
          <span key={wi} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-top">
            <motion.span
              className="inline-block will-change-transform"
              variants={{
                hidden: { y: "105%" },
                show: { y: "0%", transition: { duration: 1.1, ease: EASE_OUT, delay: delay + i * stagger } },
              }}
            >
              {word}
            </motion.span>
            {wi < words.length - 1 ? "\u00a0" : null}
          </span>
        );
      })}
    </span>
  ));

  const Tag = motion[as];
  const trigger = controlled
    ? { animate: play ? "show" : "hidden" }
    : { whileInView: "show", viewport: { once: true, amount: 0.4 } };

  return (
    <Tag className={className} initial="hidden" {...trigger}>
      <span className="sr-only">{normalized.map((line) => line.text).join(" ")}</span>
      <span aria-hidden>{content}</span>
    </Tag>
  );
}
