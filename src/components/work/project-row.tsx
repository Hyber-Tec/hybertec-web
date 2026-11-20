import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";

import { Reveal } from "@/components/motion/reveal";
import { SmartLink } from "@/components/smart-link";
import { Button } from "@/components/ui/button";
import { PlatformBadges } from "@/components/work/platform-badges";
import { ProjectMockup } from "@/components/work/project-mockup";
import { kindLabel, type Project } from "@/content/projects";
import { cn } from "@/lib/utils";

type ProjectRowProps = {
  project: Project;
  index: number;
  total: number;
  /** Put the image on the right instead of the left (desktop). */
  flip?: boolean;
  priority?: boolean;
};

function hostname(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}

/** One project on /work/: a large device mockup beside the summary and key features. */
export function ProjectRow({ project, index, total, flip = false, priority }: ProjectRowProps) {
  const number = (n: number) => String(n).padStart(2, "0");

  return (
    <article className="grid items-center gap-10 border-t border-border py-14 sm:py-20 lg:grid-cols-12 lg:gap-14">
      <Reveal className={cn("lg:col-span-7", flip && "lg:order-2")}>
        <SmartLink
          href={`/work/${project.slug}/`}
          aria-label={`${project.name} case study`}
          className="group bg-blueprint relative block aspect-[16/11] overflow-hidden rounded-3xl border border-border bg-neutral-100 transition-colors hover:border-foreground/20 dark:bg-neutral-900"
        >
          <div className="absolute inset-x-[7%] top-[10%] transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.015]">
            <ProjectMockup project={project} priority={priority} phoneSide={flip ? "left" : "right"} />
          </div>
        </SmartLink>
      </Reveal>

      <Reveal delay={0.1} className={cn("lg:col-span-5", flip && "lg:order-1")}>
        <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>
            <span className="text-brand">{number(index + 1)}</span> / {number(total)}
          </span>
          <span aria-hidden className="h-px w-6 bg-foreground/20" />
          {kindLabel[project.kind]} · {project.category}
        </p>
        <h2 className="mt-6 text-[clamp(2rem,3.6vw,3rem)] leading-[1] font-medium tracking-[-0.045em]">{project.name}</h2>
        <p className="mt-4 text-lg leading-snug text-foreground/85">{project.tagline}</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">{project.summary}</p>

        <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
          {project.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-brand" />
              {highlight}
            </li>
          ))}
        </ul>

        <PlatformBadges platforms={project.platforms} className="mt-6" />

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Button asChild variant="solid" size="pill-md">
            <SmartLink href={`/work/${project.slug}/`}>
              Read the case study
              <LuArrowRight data-icon="inline-end" className="transition-transform duration-300 group-hover/button:translate-x-0.5" />
            </SmartLink>
          </Button>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {hostname(project.url)}
              <LuArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>
      </Reveal>
    </article>
  );
}
