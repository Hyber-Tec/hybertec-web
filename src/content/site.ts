/**
 * Company-wide facts used across the site. Edit here, not in components.
 */
export const site = {
  name: "HyberTec",
  legalName: "HyberTec LLC",
  url: "https://www.hybertec.com",
  email: "hello@hybertec.com",
  location: "Gwinnett County, Georgia",
  locationShort: "Georgia, USA",
  founded: 2026,
  responseTime: "1 business day",
  tagline: "Software studio",
  description:
    "HyberTec is a software studio that designs and engineers business websites, custom software, CRMs, and iOS and Android apps — from first sketch to production and beyond.",
  socials: [{ label: "Instagram", handle: "@hybertecofficial", href: "https://www.instagram.com/hybertecofficial/" }],
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Work", href: "/work/" },
  { label: "Services", href: "/#services" },
  { label: "Studio", href: "/#studio" },
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
];
