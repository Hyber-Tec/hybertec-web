import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { Contact } from "@/components/sections/contact";
import { WorkGrid } from "@/components/work/work-grid";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  description:
    "Selected HyberTec work: vertical SaaS, CRMs, member platforms, construction tech and brand websites — designed and engineered in-house.",
  alternates: { canonical: "/work/" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        label="Work"
        title={["Selected work."]}
        description={`${projects.length} products designed, engineered and shipped by HyberTec — from vertical SaaS and member platforms to construction tech and brand sites.`}
      />
      <section className="pb-24 sm:pb-32">
        <div className="container-page">
          <WorkGrid />
        </div>
      </section>
      <Contact />
    </>
  );
}
