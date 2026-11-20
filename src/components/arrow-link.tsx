import type { ReactNode } from "react";
import { LuArrowRight } from "react-icons/lu";

import { SmartLink } from "@/components/smart-link";
import { cn } from "@/lib/utils";

/** Accent text link with an arrow, for "All work"-style links into another page. */
export function ArrowLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <SmartLink href={href} className={cn("group inline-flex items-center gap-2 text-sm font-medium text-brand", className)}>
      <span className="underline decoration-brand/30 underline-offset-[6px] transition-colors group-hover:decoration-brand">{children}</span>
      <LuArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </SmartLink>
  );
}
