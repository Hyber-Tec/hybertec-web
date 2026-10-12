"use client";

import { motion } from "motion/react";
import { LuBell, LuCheck } from "react-icons/lu";

const EASE = [0.16, 1, 0.3, 1] as const;
const inView = { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.5 } } as const;

const bar = "rounded-full bg-foreground/10";

/** Browser wireframe with Lighthouse-style score rings. */
export function WebsiteVisual() {
  const scores = ["Performance", "Accessibility", "SEO"];
  return (
    <motion.div {...inView} className="relative h-full w-full">
      <div className="absolute inset-x-6 top-6 bottom-0 overflow-hidden rounded-t-xl border border-b-0 border-border bg-background/80 sm:inset-x-10">
        <div className="flex items-center gap-1.5 border-b border-border px-3 py-2.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="size-2 rounded-full bg-foreground/15" />
          ))}
          <span className="ml-3 h-4 flex-1 rounded-md bg-foreground/[0.06]" />
        </div>
        <div className="grid grid-cols-5 gap-5 p-5">
          <div className="col-span-3 space-y-2.5">
            <motion.div variants={grow(0)} className={`${bar} h-3 w-11/12 origin-left bg-foreground/25`} />
            <motion.div variants={grow(0.08)} className={`${bar} h-3 w-3/4 origin-left bg-foreground/25`} />
            <motion.div variants={grow(0.16)} className={`${bar} mt-4 h-2 w-full origin-left`} />
            <motion.div variants={grow(0.22)} className={`${bar} h-2 w-5/6 origin-left`} />
            <motion.div variants={grow(0.3)} className="mt-4 h-6 w-24 origin-left rounded-full bg-foreground/80" />
          </div>
          <motion.div variants={grow(0.2)} className="bg-hatch col-span-2 origin-bottom rounded-lg border border-border" />
        </div>
        <div className="grid grid-cols-3 gap-3 px-5 pb-6">
          {scores.map((label, i) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <ScoreRing delay={0.3 + i * 0.12} />
              <span className="text-[0.625rem] text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ScoreRing({ delay }: { delay: number }) {
  return (
    <div className="relative size-12">
      <svg viewBox="0 0 48 48" className="size-full -rotate-90">
        <circle cx="24" cy="24" r="20" fill="none" strokeWidth="3" className="stroke-foreground/10" />
        <motion.circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          className="stroke-foreground"
          variants={{
            hidden: { pathLength: 0 },
            show: { pathLength: 1, transition: { duration: 1.4, ease: EASE, delay } },
          }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-mono text-[0.6875rem] font-medium">100</span>
    </div>
  );
}

/** Mini admin dashboard with KPIs and an animated bar chart. */
export function SoftwareVisual() {
  const bars = [38, 52, 44, 66, 58, 74, 63, 88, 80, 96];
  return (
    <motion.div {...inView} className="relative h-full w-full">
      <div className="absolute inset-x-6 top-6 bottom-0 flex overflow-hidden rounded-t-xl border border-b-0 border-border bg-background/80 sm:inset-x-8">
        <div className="hidden w-28 shrink-0 space-y-2.5 border-r border-border p-4 sm:block">
          <div className="mb-4 h-3 w-14 rounded-full bg-foreground/30" />
          {[70, 85, 60, 78, 55].map((w, i) => (
            <div key={i} className={`h-2 rounded-full ${i === 1 ? "bg-foreground/40" : "bg-foreground/10"}`} style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="flex-1 p-4">
          <div className="grid grid-cols-3 gap-2.5">
            {[
              ["Active", "1,284"],
              ["Pipeline", "$86k"],
              ["Tasks", "312"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-border p-2.5">
                <p className="text-[0.5625rem] text-muted-foreground">{label}</p>
                <p className="mt-1 font-mono text-xs font-medium sm:text-sm">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex h-24 items-end gap-1.5 rounded-lg border border-border p-3 sm:h-28">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 origin-bottom rounded-sm bg-foreground/70"
                style={{ height: `${h}%`, opacity: 0.35 + (i / bars.length) * 0.65 }}
                variants={{
                  hidden: { scaleY: 0 },
                  show: { scaleY: 1, transition: { duration: 1, ease: EASE, delay: 0.15 + i * 0.05 } },
                }}
              />
            ))}
          </div>
          <div className="mt-3 space-y-2">
            {[0, 1].map((row) => (
              <div key={row} className="flex items-center gap-2">
                <span className="size-4 rounded-full bg-foreground/15" />
                <span className="h-2 flex-1 rounded-full bg-foreground/10" />
                <span className="h-2 w-10 rounded-full bg-foreground/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/** Two wireframe phones and a push notification. */
export function MobileVisual() {
  return (
    <motion.div {...inView} className="relative flex h-full w-full items-end justify-center gap-4 overflow-hidden px-6">
      {[0, 1].map((phone) => (
        <motion.div
          key={phone}
          variants={{
            hidden: { y: 40, opacity: 0 },
            show: { y: phone ? 24 : 0, opacity: 1, transition: { duration: 1.1, ease: EASE, delay: phone * 0.12 } },
          }}
          className="relative h-56 w-32 shrink-0 rounded-t-[1.6rem] border border-b-0 border-border bg-background/80 p-2.5 pb-0 sm:h-60 sm:w-36"
        >
          <div className="mx-auto mb-3 h-3.5 w-12 rounded-full bg-foreground/90" />
          {phone === 0 ? (
            <div className="space-y-2 px-1">
              <div className="h-2.5 w-2/3 rounded-full bg-foreground/30" />
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg border border-border p-2">
                  <span className="size-5 shrink-0 rounded-md bg-foreground/15" />
                  <span className="h-1.5 flex-1 rounded-full bg-foreground/10" />
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2 px-1">
              <div className="h-2.5 w-1/2 rounded-full bg-foreground/30" />
              <div className="relative h-20 rounded-lg border border-border">
                <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="absolute inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)]">
                  <motion.path
                    d="M0 42 L14 36 L28 39 L42 26 L56 30 L70 16 L84 20 L100 6"
                    fill="none"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                    className="stroke-foreground"
                    variants={{
                      hidden: { pathLength: 0 },
                      show: { pathLength: 1, transition: { duration: 1.4, ease: EASE, delay: 0.4 } },
                    }}
                  />
                </svg>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                <span className="h-8 rounded-md border border-border" />
                <span className="h-8 rounded-md border border-border" />
              </div>
            </div>
          )}
        </motion.div>
      ))}
      <motion.div
        variants={{
          hidden: { y: -12, opacity: 0, scale: 0.96 },
          show: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.9, ease: EASE, delay: 0.9 } },
        }}
        className="absolute top-6 left-1/2 flex w-56 -translate-x-1/2 items-center gap-2.5 rounded-xl border border-border bg-popover/90 p-2.5 shadow-lg backdrop-blur"
      >
        <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
          <LuBell className="size-3.5" />
        </span>
        <span className="min-w-0">
          <span className="block text-[0.6875rem] font-medium">New booking confirmed</span>
          <span className="block truncate text-[0.625rem] text-muted-foreground">Tuesday · 4:30 PM · Synced</span>
        </span>
      </motion.div>
    </motion.div>
  );
}

/** Task board where overflow work lands and ships. */
export function OverflowVisual() {
  const tasks = [
    { label: "Landing page redesign", done: true },
    { label: "Stripe checkout integration", done: true },
    { label: "Client portal — reporting", done: true },
    { label: "Booking flow QA", done: false },
  ];
  return (
    <motion.div {...inView} className="relative h-full w-full">
      <div className="absolute inset-x-6 top-6 bottom-0 overflow-hidden rounded-t-xl border border-b-0 border-border bg-background/80 sm:inset-x-10">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <span className="text-[0.6875rem] font-medium">Sprint · Partner agency</span>
          <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[0.5625rem] text-muted-foreground">
            White-label
          </span>
        </div>
        <ul className="divide-y divide-border">
          {tasks.map((task, i) => (
            <motion.li
              key={task.label}
              variants={{
                hidden: { opacity: 0, x: -12 },
                show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE, delay: 0.1 + i * 0.12 } },
              }}
              className="flex items-center gap-3 px-4 py-3"
            >
              <span
                className={`flex size-4 shrink-0 items-center justify-center rounded-full border ${
                  task.done ? "border-foreground bg-foreground text-background" : "border-dashed border-foreground/40"
                }`}
              >
                {task.done && <LuCheck className="size-2.5" />}
              </span>
              <span className={`flex-1 text-xs ${task.done ? "text-foreground" : "text-muted-foreground"}`}>{task.label}</span>
              <span className="font-mono text-[0.5625rem] text-muted-foreground">{task.done ? "Shipped" : "In review"}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function grow(delay: number) {
  return {
    hidden: { scaleX: 0, scaleY: 0, opacity: 0 },
    show: { scaleX: 1, scaleY: 1, opacity: 1, transition: { duration: 0.9, ease: EASE, delay } },
  };
}
