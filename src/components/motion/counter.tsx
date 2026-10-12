"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

/** Counts up to `value` the first time it scrolls into view. */
export function Counter({ value, prefix = "", suffix = "", duration = 1.8, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;
    if (reduce) {
      node.textContent = `${prefix}${value}${suffix}`;
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        node.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, prefix, suffix, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
