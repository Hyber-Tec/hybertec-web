"use client";

import { motion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

import { Badge } from "@/components/ui/badge";
import { steps } from "@/content/process";

/** The five process steps on a vertical line that fills in the accent color as you scroll. */
export function ProcessSteps() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.65", "end 0.55"] });
  const line = useSpring(scrollYProgress, { stiffness: 140, damping: 32, restDelta: 0.001 });

  return (
    <ol ref={listRef} className="relative space-y-14 sm:space-y-16">
      <span aria-hidden className="absolute top-5 bottom-5 left-5 w-px -translate-x-1/2 bg-border" />
      <motion.span aria-hidden style={{ scaleY: line }} className="absolute top-5 bottom-5 left-5 w-px origin-top -translate-x-1/2 bg-brand" />
      {steps.map((step, i) => (
        <Step key={step.title} step={step} index={i} total={steps.length} progress={scrollYProgress} />
      ))}
    </ol>
  );
}

function Step({
  step,
  index,
  total,
  progress,
}: {
  step: (typeof steps)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const at = index / (total - 1);
  const active = useTransform(progress, [Math.max(0, at - 0.06), at], [0, 1]);
  const inactive = useTransform(active, [0, 1], [1, 0]);
  const textOpacity = useTransform(active, [0, 1], [0.45, 1]);
  const number = String(index + 1).padStart(2, "0");

  return (
    <li className="relative grid grid-cols-[2.5rem_1fr] gap-6 sm:gap-8">
      <span className="relative flex size-10 items-center justify-center rounded-full border border-border bg-background font-mono text-xs">
        <motion.span aria-hidden style={{ opacity: active }} className="absolute inset-0 rounded-full bg-brand" />
        <motion.span style={{ opacity: inactive }} className="absolute text-muted-foreground">
          {number}
        </motion.span>
        <motion.span aria-hidden style={{ opacity: active }} className="absolute text-brand-foreground">
          {number}
        </motion.span>
      </span>

      <div className="pt-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <motion.h2 style={{ opacity: textOpacity }} className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
            {step.title}
          </motion.h2>
          <span className="eyebrow">{step.duration}</span>
        </div>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{step.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${step.title} deliverables`}>
          {step.deliverables.map((item) => (
            <li key={item}>
              <Badge variant="chip">{item}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
