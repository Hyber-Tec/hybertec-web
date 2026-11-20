import type { Metadata } from "next";

import { site } from "@/content/site";

export const shareImage = { url: "/og.png", width: 1200, height: 630, alt: "HyberTec, software studio" };

/**
 * Title, description, canonical URL and share cards for one page. Next merges
 * metadata shallowly, so a page's `openGraph` replaces the root layout's: this
 * repeats the shared fields every time.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  /** Shown as "<title> | HyberTec". */
  title: string;
  description: string;
  /** With trailing slash, e.g. "/services/". */
  path: string;
  image?: string;
}): Metadata {
  const images = image ? [{ url: image }] : [shareImage];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.legalName,
      locale: "en_US",
      url: path,
      title: `${title} | ${site.name}`,
      description,
      images,
    },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description, images: images.map((i) => i.url) },
  };
}
