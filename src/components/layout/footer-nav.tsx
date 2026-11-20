"use client";

import { usePathname } from "next/navigation";

import { SmartLink } from "@/components/smart-link";
import { isCurrent, type NavItem } from "@/content/site";
import { cn } from "@/lib/utils";

/** Footer link list that marks the current page. */
export function FooterNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  return items.map((item) => {
    const active = isCurrent(pathname, item.href);
    return (
      <li key={item.href}>
        <SmartLink
          href={item.href}
          aria-current={active ? "page" : undefined}
          className={cn("transition-colors hover:text-foreground", active && "text-foreground")}
        >
          {item.label}
        </SmartLink>
      </li>
    );
  });
}
