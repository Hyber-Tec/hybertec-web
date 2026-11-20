"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

/** Sections that used to live on the one-page homepage, and where they are now. */
const MOVED: Record<string, string> = {
  work: "/work/",
  services: "/services/",
  studio: "/studio/",
  process: "/process/",
  engage: "/services/#engagement",
  stack: "/studio/#tools",
  faq: "/faq/",
  contact: "/contact/",
};

/**
 * Keeps old links like /#faq or /#service-crm working by forwarding them to
 * the page the section moved to. Renders nothing.
 */
export function LegacyHashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const to = MOVED[id] ?? (id.startsWith("service-") ? `/services/#${id.slice("service-".length)}` : undefined);
    if (to) router.replace(to);
  }, [router]);

  return null;
}
