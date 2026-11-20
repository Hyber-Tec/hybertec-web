import type { Metadata } from "next";

import { LegacyRedirect } from "@/components/legacy-redirect";

// The about page is now /studio/.
export const metadata: Metadata = { robots: { index: false }, alternates: { canonical: "/studio/" } };

export default function AboutRedirect() {
  return <LegacyRedirect to="/studio/" />;
}
