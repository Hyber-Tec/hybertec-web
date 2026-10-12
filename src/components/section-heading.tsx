import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/reveal";
import { RevealText } from "@/components/motion/reveal-text";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: string[];
  description?: ReactNode;
  className?: string;
  /** Put the description under the title instead of in a right-hand column. */
  stacked?: boolean;
};

export function SectionHeading({ index, label, title, description, className, stacked = false }: SectionHeadingProps) {
  return (
    <div className={cn("grid gap-8", !stacked && "lg:grid-cols-12 lg:items-end", className)}>
      <div className={cn(!stacked && "lg:col-span-7")}>
        <Reveal y={12}>
          <SectionLabel index={index}>{label}</SectionLabel>
        </Reveal>
        <RevealText
          as="h2"
          lines={title}
          className="mt-6 text-[clamp(2.25rem,5.2vw,4.5rem)] leading-[1.02] font-medium tracking-[-0.045em]"
        />
      </div>
      {description && (
        <Reveal delay={0.15} className={cn(!stacked && "lg:col-span-5 lg:pb-2")}>
          <div className={cn("max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg", !stacked && "lg:ml-auto")}>
            {description}
          </div>
        </Reveal>
      )}
    </div>
  );
}

export function SectionLabel({ index, children }: { index?: string; children: ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3">
      {index && <span className="text-foreground">{index}</span>}
      <span aria-hidden className="h-px w-8 bg-foreground/25" />
      {children}
    </p>
  );
}
