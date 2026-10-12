import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

import type { RevealLine } from "./reveal-text";

type EnterTextProps = {
  lines: RevealLine[];
  as?: "h1" | "h2" | "p";
  className?: string;
  /** Seconds before the first word rises (added after the intro when it plays). */
  delay?: number;
  stagger?: number;
};

/**
 * Above-the-fold twin of <RevealText>: the same masked word-by-word rise, but
 * driven by CSS (`.enter-word` in globals.css) so it starts at first paint
 * instead of waiting for JavaScript.
 */
export function EnterText({ lines, as: Tag = "h1", className, delay = 0, stagger = 0.045 }: EnterTextProps) {
  const normalized = lines.map((line) => (typeof line === "string" ? { text: line } : line));
  let index = 0;

  return (
    <Tag className={className}>
      <span className="sr-only">{normalized.map((line) => line.text).join(" ")}</span>
      <span aria-hidden>
        {normalized.map((line, li) => (
          <span key={li} className={cn("block", line.muted && "text-muted-foreground", line.className)}>
            {line.text.split(" ").map((word, wi, words) => (
              <span key={wi} className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-top">
                <span className="enter-word" style={{ "--d": `${(delay + index++ * stagger).toFixed(3)}s` } as CSSProperties}>
                  {word}
                </span>
                {wi < words.length - 1 ? " " : null}
              </span>
            ))}
          </span>
        ))}
      </span>
    </Tag>
  );
}

/** Inline style helper for `.enter-*` CSS entrance classes. */
export function enterDelay(seconds: number) {
  return { "--d": `${seconds}s` } as CSSProperties;
}
