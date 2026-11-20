import { PageHeader } from "@/components/page-header";
import { CtaPanel } from "@/components/sections/cta-panel";
import { ProjectRow } from "@/components/work/project-row";
import { projects, workIntro } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Work",
  description: workIntro.metaDescription,
  path: "/work/",
});

export default function WorkPage() {
  return (
    <>
      <PageHeader label="Work" title={workIntro.title} description={workIntro.description} />
      <section className="pb-8">
        <div className="container-page">
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} total={projects.length} flip={i % 2 === 1} priority={i === 0} />
          ))}
        </div>
      </section>
      <CtaPanel className="border-t border-hairline" />
    </>
  );
}
