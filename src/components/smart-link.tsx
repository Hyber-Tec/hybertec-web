"use client";

import { useLenis } from "lenis/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

const HEADER_OFFSET = -88;

function samePath(a: string, b: string) {
  const strip = (p: string) => p.replace(/\/+$/, "") || "/";
  return strip(a) === strip(b);
}

/**
 * next/link that smooth-scrolls (via Lenis) when the target is a hash on the
 * current page, and navigates normally otherwise.
 */
export function SmartLink({ href, onClick, ...props }: ComponentProps<typeof Link> & { href: string }) {
  const lenis = useLenis();
  const pathname = usePathname();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey) return;

    const url = new URL(href, window.location.href);
    if (!url.hash || !samePath(url.pathname, pathname)) return;

    const target = document.querySelector<HTMLElement>(decodeURIComponent(url.hash));
    if (!target) return;

    event.preventDefault();
    if (lenis) {
      lenis.scrollTo(target, { offset: HEADER_OFFSET, duration: 1.4 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
    window.history.replaceState(null, "", url.hash);
  }

  return <Link href={href} onClick={handleClick} {...props} />;
}
