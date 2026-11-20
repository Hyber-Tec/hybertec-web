import { LegalPage } from "@/components/legal-page";
import { refunds } from "@/content/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "Refunds and cancellation", description: refunds.description, path: "/refunds/" });

export default function RefundsPage() {
  return <LegalPage doc={refunds} />;
}
