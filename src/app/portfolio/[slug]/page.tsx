import type { Metadata } from "next";

import { LegacyRedirect } from "@/components/legacy-redirect";

// Case studies moved from /portfolio/<slug> to /work/<slug>.
const legacySlugs = ["takeoffprime", "jsong-realty"];

export const dynamicParams = false;

export function generateStaticParams() {
  return legacySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/portfolio/[slug]">): Promise<Metadata> {
  return { robots: { index: false }, alternates: { canonical: `/work/${(await params).slug}/` } };
}

export default async function LegacyCaseStudyRedirect({ params }: PageProps<"/portfolio/[slug]">) {
  return <LegacyRedirect to={`/work/${(await params).slug}/`} />;
}
