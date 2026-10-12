"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { Children, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

type RevealProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  delay?: number;
  y?: number;
  /** Fraction of the element that must be visible before it animates. */
  amount?: number;
  blur?: boolean;
};

/** Fades and lifts its content in the first time it scrolls into view. */
export function Reveal({ children, delay = 0, y = 28, amount = 0.25, blur = false, className, ...props }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: blur ? "blur(8px)" : undefined }}
      whileInView={{ opacity: 1, y: 0, filter: blur ? "blur(0px)" : undefined }}
      viewport={{ once: true, amount }}
      transition={{ duration: 1, ease: EASE_OUT, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  stagger?: number;
  delay?: number;
  y?: number;
  amount?: number;
};

/** Reveals each direct child in sequence once the group scrolls into view. */
export function Stagger({ children, className, itemClassName, stagger = 0.08, delay = 0, y = 24, amount = 0.15 }: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {Children.toArray(children).map((child, i) => (
        <motion.div
          key={i}
          className={cn(itemClassName)}
          variants={{
            hidden: { opacity: 0, y },
            show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_OUT } },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
