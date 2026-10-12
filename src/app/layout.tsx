import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { IntroLoader } from "@/components/intro/intro-loader";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { BOOT_SCRIPT } from "@/components/theme/boot-script";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const title = "HyberTec LLC";
const shareTitle = "HyberTec — Software that runs your business. Websites that grow it.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  applicationName: site.legalName,
  keywords: [
    "software development company",
    "web development agency",
    "custom software development",
    "CRM development",
    "mobile app development",
    "business websites",
    "white-label development",
    "Atlanta software studio",
    "Georgia web design",
  ],
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.legalName,
    locale: "en_US",
    title: shareTitle,
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "HyberTec — software studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: site.description,
    images: ["/og.png"],
  },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  url: site.url,
  logo: `${site.url}/brand/hybertec-logo-512.png`,
  email: site.email,
  foundingDate: String(site.founded),
  description: site.description,
  address: { "@type": "PostalAddress", addressRegion: "GA", addressCountry: "US" },
  sameAs: site.socials.map((social) => social.href),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn(geistSans.variable, geistMono.variable, "dark")} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
      </head>
      <body>
        <SmoothScroll>
          <IntroLoader />
          <a
            href="#main"
            className="sr-only z-[90] rounded-full bg-foreground px-4 py-2 text-sm text-background focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </SmoothScroll>
        <div aria-hidden className="grain" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
