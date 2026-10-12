import type { ReactNode } from "react";

import { EnterText, enterDelay } from "@/components/motion/enter-text";
import { SectionLabel } from "@/components/section-heading";

type PageHeaderProps = {
  index?: string;
  label: string;
  title: string[];
  description?: ReactNode;
  children?: ReactNode;
};

/** Top-of-page header for inner pages (work, contact, case studies). */
export function PageHeader({ index, label, title, description, children }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div aria-hidden className="bg-blueprint mask-radial pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <div className="container-page">
        <div className="enter-up" style={enterDelay(0)}>
          <SectionLabel index={index}>{label}</SectionLabel>
        </div>
        <EnterText
          lines={title}
          delay={0.1}
          className="mt-6 text-[clamp(3rem,8vw,7rem)] leading-[0.95] font-medium tracking-[-0.055em]"
        />
        {description && (
          <div className="enter-up mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg" style={enterDelay(0.3)}>
            {description}
          </div>
        )}
        {children}
      </div>
    </header>
  );
}
