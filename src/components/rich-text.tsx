import type { ReactNode } from "react";

import { SmartLink } from "@/components/smart-link";

/** `[label](href)` in the copy becomes a link. */
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/;

/** Renders copy with `[label](href)` links (legal pages, FAQ answers). */
export function Inline({ text }: { text: string }) {
  // With two capture groups, split() returns [text, label, href, text, label, href, …, text].
  const parts = text.split(LINK);
  return parts.map((part, i) => {
    if (i % 3 === 1) {
      return (
        <TextLink key={i} href={parts[i + 1]}>
          {part}
        </TextLink>
      );
    }
    return i % 3 === 0 ? part : null;
  });
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <SmartLink href={href} className="link">
        {children}
      </SmartLink>
    );
  }
  const external = href.startsWith("http");
  return (
    <a href={href} className="link" {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  );
}
