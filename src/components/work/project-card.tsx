import { LuArrowUpRight } from "react-icons/lu";

import { SmartLink } from "@/components/smart-link";
import { PlatformBadges } from "@/components/work/platform-badges";
import { ProjectMockup } from "@/components/work/project-mockup";
import { kindLabel, type Project } from "@/content/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
  priority?: boolean;
  /** Full-width variant used for the lead project. */
  wide?: boolean;
  headingLevel?: "h2" | "h3";
};

/** Linked project card: device mockup on top, name and tagline below. */
export function ProjectCard({ project, className, priority, wide = false, headingLevel: Heading = "h3" }: ProjectCardProps) {
  return (
    <SmartLink
      href={`/work/${project.slug}/`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-neutral-100 transition-colors hover:border-foreground/20 dark:bg-neutral-900",
        className,
      )}
    >
      <div className={cn("bg-blueprint relative overflow-hidden border-b border-border", wide ? "aspect-[16/11] md:aspect-[21/9]" : "aspect-[16/11]")}>
        <div
          className={cn(
            "absolute inset-x-[7%] top-[9%] transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.015]",
            wide && "md:inset-x-[18%] md:top-[10%]",
          )}
        >
          <ProjectMockup project={project} priority={priority} phoneSide="right" />
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-background p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">
              {kindLabel[project.kind]} · {project.category}
            </p>
            <Heading className="mt-3 text-2xl font-medium tracking-[-0.03em] sm:text-3xl">{project.name}</Heading>
          </div>
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-brand-foreground">
            <LuArrowUpRight className="size-4" aria-hidden />
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{project.tagline}</p>
        <PlatformBadges platforms={project.platforms} className="mt-6 sm:mt-auto sm:pt-6" />
      </div>
    </SmartLink>
  );
}
