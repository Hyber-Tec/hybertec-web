import { cn } from "@/lib/utils";

import { LogoMark } from "./logo-mark";

type LogoProps = {
  className?: string;
  markClassName?: string;
  /** Show the divider + HYBERTEC wordmark next to the mark (business-card lockup). */
  wordmark?: boolean;
};

export function Logo({ className, markClassName, wordmark = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3 text-foreground", className)}>
      <LogoMark decorative className={cn("h-7 w-auto", markClassName)} />
      {wordmark && (
        <>
          <span aria-hidden className="h-4 w-px bg-foreground/25" />
          <Wordmark />
        </>
      )}
      <span className="sr-only">HyberTec</span>
    </span>
  );
}

/** Wide-tracked uppercase wordmark, matching the HyberTec business card. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "-mr-[0.34em] text-[0.8125rem] leading-none font-semibold tracking-[0.34em]",
        className,
      )}
    >
      HYBERTEC
    </span>
  );
}
