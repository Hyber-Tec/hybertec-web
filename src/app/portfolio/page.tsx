import type { Metadata } from "next";

import { LegacyRedirect } from "@/components/legacy-redirect";

// The portfolio moved to /work — keep old links working.
export const metadata: Metadata = { robots: { index: false }, alternates: { canonical: "/work/" } };

export default function PortfolioRedirect() {
  return <LegacyRedirect to="/work/" />;
}
