import type { Metadata } from "next";

import { LegacyRedirect } from "@/components/legacy-redirect";

export const metadata: Metadata = { robots: { index: false }, alternates: { canonical: "/" } };

export default function AboutRedirect() {
  return <LegacyRedirect to="/#studio" />;
}
