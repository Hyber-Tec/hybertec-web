import { LegalPage } from "@/components/legal-page";
import { terms } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "Terms of Service", description: terms.description, path: "/terms/" });

export default function TermsPage() {
  return <LegalPage doc={terms} />;
}
