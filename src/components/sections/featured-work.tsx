import { ArrowLink } from "@/components/arrow-link";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/work/project-card";
import { homeWork } from "@/content/home";
import { featuredProjects } from "@/content/projects";
import { cn } from "@/lib/utils";

/** Homepage: the first three featured projects, linking into /work/. */
export function FeaturedWork({ index }: { index?: string }) {
  const projects = featuredProjects.slice(0, 3);

  return (
    <section className="relative border-t border-hairline py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          index={index}
          label="Work"
          title={[homeWork.title]}
          description={homeWork.description}
          action={<ArrowLink href="/work/">All work</ArrowLink>}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i === 2 ? 0.1 : 0} className={cn(i === 0 && "md:col-span-2")}>
              <ProjectCard project={project} priority={i === 0} wide={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
