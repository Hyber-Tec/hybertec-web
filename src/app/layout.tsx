import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hybertec.com";
const socialImagePath = "/hybertec-logo-centered-bg-rm.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "HyberTec LLC",
  description:
    "We help businesses handle freelance requests with a reliable partner for websites, software builds, and ongoing product support.",
  keywords: ["web development", "software agency", "business websites", "custom web apps", "freelance partner"],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "HyberTec LLC",
    title: "HyberTec | Websites and Software for Growing Businesses",
    description:
      "We help businesses handle freelance requests with a reliable partner for websites, software builds, and ongoing product support.",
    images: [
      {
        url: socialImagePath,
        width: 1200,
        height: 1200,
        alt: "HyberTec logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HyberTec | Websites and Software for Growing Businesses",
    description:
      "We help businesses handle freelance requests with a reliable partner for websites, software builds, and ongoing product support.",
    images: [socialImagePath],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
