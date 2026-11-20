import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/reveal";
import { RevealText } from "@/components/motion/reveal-text";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index?: string;
  label: string;
  title: string[];
  description?: ReactNode;
  /** Shown under the description, e.g. a link to the full page. */
  action?: ReactNode;
  className?: string;
  /** Put the description under the title instead of in a right-hand column. */
  stacked?: boolean;
  /** Smaller title for sections inside a page. */
  size?: "lg" | "md";
};

export function SectionHeading({
  index,
  label,
  title,
  description,
  action,
  className,
  stacked = false,
  size = "lg",
}: SectionHeadingProps) {
  return (
    <div className={cn("grid gap-8", !stacked && "lg:grid-cols-12 lg:items-end", className)}>
      <div className={cn(!stacked && "lg:col-span-7")}>
        <Reveal y={12}>
          <SectionLabel index={index}>{label}</SectionLabel>
        </Reveal>
        <RevealText
          as="h2"
          lines={title}
          className={cn(
            "mt-6 font-medium tracking-[-0.045em]",
            size === "lg" ? "text-[clamp(2.25rem,5.2vw,4.5rem)] leading-[1.02]" : "text-[clamp(2rem,3.8vw,3.25rem)] leading-[1.05]",
          )}
        />
      </div>
      {(description || action) && (
        <Reveal delay={0.15} className={cn(!stacked && "lg:col-span-5 lg:pb-2")}>
          <div className={cn("max-w-md", !stacked && "lg:ml-auto")}>
            {description && <div className="text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</div>}
            {action && <div className={cn(description && "mt-6")}>{action}</div>}
          </div>
        </Reveal>
      )}
    </div>
  );
}

/** Small mono label: an accent index number, a hairline and the label. */
export function SectionLabel({ index, children, className }: { index?: string; children: ReactNode; className?: string }) {
  return (
    <p className={cn("eyebrow flex items-center gap-3", className)}>
      {index && <span className="text-brand">{index}</span>}
      <span aria-hidden className="h-px w-8 bg-foreground/25" />
      {children}
    </p>
  );
}
