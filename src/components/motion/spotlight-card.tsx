"use client";

import { useRef, type ComponentProps, type PointerEvent } from "react";

import { cn } from "@/lib/utils";

/**
 * Card with a soft light that follows the pointer, lighting both the surface
 * and the border. Pure CSS variables — no re-renders on pointer move.
 */
export function SpotlightCard({ className, children, ...props }: ComponentProps<"div">) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    node.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      className={cn(
        "group/spot relative isolate overflow-hidden rounded-2xl border border-border bg-surface",
        "before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
        "before:bg-[radial-gradient(420px_circle_at_var(--spot-x,50%)_var(--spot-y,50%),color-mix(in_oklch,var(--foreground)_7%,transparent),transparent_65%)]",
        "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100",
        "after:[mask:linear-gradient(#000,#000)_content-box_exclude,linear-gradient(#000,#000)] after:p-px",
        "after:bg-[radial-gradient(260px_circle_at_var(--spot-x,50%)_var(--spot-y,50%),color-mix(in_oklch,var(--foreground)_38%,transparent),transparent_70%)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
