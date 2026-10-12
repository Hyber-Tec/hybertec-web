"use client";

import { motion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { LuArrowUpRight, LuUserCheck } from "react-icons/lu";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SmartLink } from "@/components/smart-link";
import { Badge } from "@/components/ui/badge";
import { clientCommitment, process } from "@/content/home";

export function Process() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.65", "end 0.55"] });
  const line = useSpring(scrollYProgress, { stiffness: 140, damping: 32, restDelta: 0.001 });

  return (
    <section id="process" className="relative scroll-mt-24 border-t border-hairline py-24 sm:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              stacked
              index="04"
              label="Process"
              title={["A clear path", "from idea to", "production."]}
              description="Five steps, the same every time — so you always know where your project stands, what comes next and what it costs."
            />
            <Reveal delay={0.2} className="mt-10">
              <SmartLink
                href="/contact/"
                className="group inline-flex items-center gap-2 text-sm font-medium underline decoration-foreground/30 underline-offset-[6px] transition-colors hover:decoration-foreground"
              >
                Book a discovery call
                <LuArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </SmartLink>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ol ref={listRef} className="relative space-y-14 lg:pt-2">
            <span aria-hidden className="absolute top-5 bottom-5 left-5 w-px -translate-x-1/2 bg-border" />
            <motion.span
              aria-hidden
              style={{ scaleY: line }}
              className="absolute top-5 bottom-5 left-5 w-px origin-top -translate-x-1/2 bg-foreground"
            />
            {process.map((step, i) => (
              <Step key={step.title} step={step} index={i} total={process.length} progress={scrollYProgress} />
            ))}
          </ol>
          <Reveal className="mt-16 ml-[3.5rem] sm:ml-[4.5rem]">
            <p className="flex gap-3 rounded-2xl border border-border bg-surface p-5 text-sm leading-relaxed text-muted-foreground">
              <LuUserCheck className="mt-0.5 size-4 shrink-0 text-foreground" aria-hidden />
              {clientCommitment}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Step({
  step,
  index,
  total,
  progress,
}: {
  step: (typeof process)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const at = index / (total - 1);
  const active = useTransform(progress, [Math.max(0, at - 0.06), at], [0, 1]);
  const inactive = useTransform(active, [0, 1], [1, 0]);
  const textOpacity = useTransform(active, [0, 1], [0.4, 1]);

  return (
    <li className="relative grid grid-cols-[2.5rem_1fr] gap-6 sm:gap-8">
      <span className="relative flex size-10 items-center justify-center rounded-full border border-border bg-background font-mono text-xs">
        <motion.span aria-hidden style={{ opacity: active }} className="absolute inset-0 rounded-full bg-foreground" />
        <motion.span style={{ opacity: inactive }} className="absolute text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </motion.span>
        <motion.span style={{ opacity: active }} className="absolute text-background">
          {String(index + 1).padStart(2, "0")}
        </motion.span>
      </span>

      <div className="pt-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <motion.h3 style={{ opacity: textOpacity }} className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
            {step.title}
          </motion.h3>
          <span className="eyebrow">{step.duration}</span>
        </div>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{step.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
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
