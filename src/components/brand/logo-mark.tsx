import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

import { MARK_PATH, MARK_VIEWBOX } from "./mark-path";

type LogoMarkProps = ComponentProps<"svg"> & {
  /** Accessible name. Ignored when `decorative` is set. */
  title?: string;
  /** Hide from assistive tech when a visible label sits next to the mark. */
  decorative?: boolean;
};

export function LogoMark({
  className,
  title = "HyberTec",
  decorative = false,
  ...props
}: LogoMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={MARK_VIEWBOX}
      fill="currentColor"
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : title}
      aria-hidden={decorative || undefined}
      className={cn("shrink-0", className)}
      {...props}
    >
      <path d={MARK_PATH} />
    </svg>
  );
}
