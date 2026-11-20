/**
 * Company-wide facts used across the site. Edit here, not in components.
 */
export const site = {
  name: "HyberTec",
  legalName: "HyberTec LLC",
  url: "https://www.hybertec.com",
  /** General contact address: shown on the site and used by the contact form's email fallback. */
  email: "hybertecofficial@gmail.com",
  /** Billing, refunds and privacy requests. Used by the legal pages only (content/legal.ts). */
  billingEmail: "billing@hybertec.com",
  /** Used by the legal pages only. The marketing pages don't show a location. */
  location: "Cumming, Georgia",
  founded: 2026,
  responseTime: "1 business day",
  description:
    "HyberTec is a software studio. We design, build and support business websites, custom software, CRMs, mobile apps and SaaS products.",
  socials: [{ label: "Instagram", handle: "@hybertecofficial", href: "https://www.instagram.com/hybertecofficial/" }],
} as const;

export type NavItem = { label: string; href: string };

/** Every page in the header and footer. The header highlights the current one. */
export const mainNav: NavItem[] = [
  { label: "Work", href: "/work/" },
  { label: "Services", href: "/services/" },
  { label: "Studio", href: "/studio/" },
  { label: "Process", href: "/process/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact", href: "/contact/" },
];

/** Small links in the footer's bottom bar. Page copy lives in content/legal.ts. */
export const legalNav: NavItem[] = [
  { label: "Terms", href: "/terms/" },
  { label: "Privacy", href: "/privacy/" },
  { label: "Refunds", href: "/refunds/" },
];

/** True when `href` is the current page or a page under it (/work/ for /work/hybercrm/). */
export function isCurrent(pathname: string, href: string) {
  const strip = (p: string) => p.replace(/\/+$/, "") || "/";
  const path = strip(pathname);
  const target = strip(href);
  return target === "/" ? path === "/" : path === target || path.startsWith(`${target}/`);
}
