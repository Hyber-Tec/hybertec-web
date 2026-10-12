"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { LuArrowUpRight, LuCheck } from "react-icons/lu";

import { LiquidMark } from "@/components/brand/liquid-mark";
import { EnterText, enterDelay } from "@/components/motion/enter-text";
import { SmartLink } from "@/components/smart-link";
import { Button } from "@/components/ui/button";
import { hero } from "@/content/home";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const markY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const markScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-24 lg:pt-28">
      <div aria-hidden className="bg-blueprint mask-radial absolute inset-0 -z-10 opacity-80" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(55%_50%_at_72%_32%,color-mix(in_oklch,var(--foreground)_9%,transparent),transparent_70%)]"
      />

      <div className="container-page grid flex-1 items-center gap-y-6 lg:grid-cols-12 lg:gap-x-10">
        <motion.div style={{ y: contentY, opacity: fade }} className="order-2 pb-10 lg:order-1 lg:col-span-7 lg:pb-0">
          <p
            className="enter-up inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground backdrop-blur"
            style={enterDelay(0.1)}
          >
            <span className="animate-pulse-dot size-1.5 rounded-full bg-foreground text-foreground" />
            {hero.badge}
          </p>

          <EnterText
            lines={hero.headline}
            delay={0.15}
            className="mt-7 text-[clamp(2.6rem,5.4vw,5.25rem)] leading-[0.98] font-medium tracking-[-0.05em]"
          />

          <p className="enter-up mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg" style={enterDelay(0.55)}>
            {hero.description}
          </p>

          <div className="enter-up mt-9 flex flex-wrap items-center gap-3" style={enterDelay(0.7)}>
            <Button asChild variant="solid" size="pill">
              <SmartLink href="/contact/">
                Start a project
                <LuArrowUpRight
                  data-icon="inline-end"
                  className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                />
              </SmartLink>
            </Button>
            <Button asChild variant="line" size="pill">
              <SmartLink href="/#work">See our work</SmartLink>
            </Button>
          </div>

          <ul className="enter-up mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground" style={enterDelay(0.8)}>
            {hero.trust.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <LuCheck className="size-3.5 text-foreground/70" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="enter-scale relative order-1 flex justify-center lg:order-2 lg:col-span-5" style={enterDelay(0.1)}>
          <motion.div style={{ y: markY, scale: markScale }} className="relative">
            <CornerFrame />
            <LiquidMark className="h-[32svh] max-h-[720px] min-h-[220px] sm:h-[40svh] lg:h-[62svh]" />
          </motion.div>
        </div>
      </div>

      <div className="enter-fade container-page" style={enterDelay(0.9)}>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-hairline py-6 md:grid-cols-4">
          {hero.facts.map((fact, i) => (
            <p key={fact} className="flex items-baseline gap-3 text-xs text-muted-foreground sm:text-sm">
              <span className="font-mono text-[0.6875rem] text-muted-foreground">0{i + 1}</span>
              {fact}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Blueprint corner brackets framing the mark. */
function CornerFrame() {
  const corner = "absolute size-4 border-foreground/25";
  return (
    <div aria-hidden className="pointer-events-none absolute -inset-4 sm:-inset-8">
      <span className={`${corner} top-0 left-0 border-t border-l`} />
      <span className={`${corner} top-0 right-0 border-t border-r`} />
      <span className={`${corner} bottom-0 left-0 border-b border-l`} />
      <span className={`${corner} right-0 bottom-0 border-r border-b`} />
      <span className="eyebrow absolute -top-6 left-0 hidden text-[0.625rem] sm:block">HT / 01</span>
      <span className="eyebrow absolute right-0 -bottom-6 hidden text-[0.625rem] sm:block">45°</span>
    </div>
  );
}
