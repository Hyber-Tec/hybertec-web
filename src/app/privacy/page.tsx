import { LegalPage } from "@/components/legal-page";
import { privacy } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "Privacy Policy", description: privacy.description, path: "/privacy/" });

export default function PrivacyPage() {
  return <LegalPage doc={privacy} />;
}
