"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SmartLink } from "@/components/smart-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlatformBadges } from "@/components/work/platform-badges";
import { ProjectMockup } from "@/components/work/project-mockup";
import { featuredProjects, type Project } from "@/content/projects";
import { useMediaQuery } from "@/hooks/use-media-query";

export function Work() {
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stackRef, offset: ["start start", "end end"] });
  const total = featuredProjects.length;

  return (
    <section id="work" className="relative scroll-mt-24 border-t border-hairline pt-24 pb-16 sm:pt-32">
      <div className="container-page">
        <SectionHeading
          index="01"
          label="Selected work"
          title={["Products we've", "designed & shipped."]}
          description="Real products running in production — vertical SaaS, member platforms, construction tech and brand sites. Each one designed and engineered by HyberTec."
        />

        <div ref={stackRef} className="mt-16 space-y-6 lg:mt-10 lg:space-y-0">
          {featuredProjects.map((project, index) => (
            <WorkCard key={project.slug} project={project} index={index} total={total} progress={scrollYProgress} />
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <Button asChild variant="line" size="pill">
            <SmartLink href="/work/">
              View all work
              <LuArrowRight data-icon="inline-end" className="transition-transform duration-300 group-hover/button:translate-x-0.5" />
            </SmartLink>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

type WorkCardProps = {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

function WorkCard({ project, index, total, progress }: WorkCardProps) {
  // Cards pin and stack on large screens only; on phones they simply scroll.
  const stacked = useMediaQuery("(min-width: 1024px)");
  const remaining = total - index - 1;
  const start = index / total;
  // Cards that are covered by later ones recede slightly and dim.
  const scale = useTransform(progress, [start, 1], [1, 1 - remaining * 0.035]);
  const shade = useTransform(progress, [start, Math.min(1, start + 1 / total)], [0, remaining ? 0.45 : 0]);

  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center" style={stacked ? { paddingTop: `${index * 14}px` } : undefined}>
      <motion.article
        style={stacked ? { scale } : undefined}
        className="relative w-full origin-top overflow-hidden rounded-3xl border border-border bg-neutral-100 lg:h-[min(76vh,700px)] dark:bg-neutral-900"
      >
        {stacked && (
          <motion.div aria-hidden style={{ opacity: shade }} className="pointer-events-none absolute inset-0 z-20 bg-background" />
        )}

        <div className="grid h-full lg:grid-cols-12">
          <div className="relative z-10 flex flex-col p-7 sm:p-10 lg:col-span-5 lg:p-12">
            <p className="eyebrow flex items-center gap-3">
              <span className="text-foreground">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-muted-foreground">/ {String(total).padStart(2, "0")}</span>
              <span aria-hidden className="h-px w-6 bg-foreground/20" />
              {project.category}
            </p>

            <h3 className="mt-8 text-[clamp(2rem,3.6vw,3.25rem)] leading-[1] font-medium tracking-[-0.045em]">{project.name}</h3>
            <p className="mt-5 text-base leading-snug text-foreground/85 sm:text-lg">{project.outcome}</p>

            <PlatformBadges platforms={project.platforms} className="mt-6" />
            <ul className="mt-2 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li key={tech}>
                  <Badge variant="chip" className="font-mono text-[0.6875rem]">
                    {tech}
                  </Badge>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 lg:mt-auto">
              <Button asChild variant="solid" size="pill-md">
                <SmartLink href={`/work/${project.slug}/`}>
                  Case study
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
                  Visit live site
                  <LuArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </div>
          </div>

          <div className="bg-blueprint relative min-h-[240px] overflow-hidden border-t border-border lg:col-span-7 lg:border-t-0 lg:border-l">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(70%_60%_at_60%_40%,color-mix(in_oklch,var(--foreground)_10%,transparent),transparent_75%)]"
            />
            <div className="relative px-6 pt-8 sm:px-10 sm:pt-12 lg:absolute lg:top-1/2 lg:left-[7%] lg:w-[118%] lg:-translate-y-1/2 lg:p-0">
              <ProjectMockup project={project} priority={index === 0} phoneSide="left" />
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
