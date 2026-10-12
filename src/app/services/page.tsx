import type { Metadata } from "next";

import { LegacyRedirect } from "@/components/legacy-redirect";

// Services now live on the homepage.
export const metadata: Metadata = { robots: { index: false }, alternates: { canonical: "/" } };

export default function ServicesRedirect() {
  return <LegacyRedirect to="/#services" />;
}
