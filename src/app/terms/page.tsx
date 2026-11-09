import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { terms } from "@/content/legal";

export const metadata: Metadata = {
  description: terms.description,
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return <LegalPage doc={terms} />;
}
