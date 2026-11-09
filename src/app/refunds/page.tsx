import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { refunds } from "@/content/legal";

export const metadata: Metadata = {
  description: refunds.description,
  alternates: { canonical: "/refunds/" },
};

export default function RefundsPage() {
  return <LegalPage doc={refunds} />;
}
