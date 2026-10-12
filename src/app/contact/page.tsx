import type { Metadata } from "next";

import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  description:
    "Start a project with HyberTec. Tell us about your website, custom software, CRM or mobile app — we reply within one business day.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <Contact headingLevel="h1" />
    </div>
  );
}
