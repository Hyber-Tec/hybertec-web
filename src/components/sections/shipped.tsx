import { LuArrowUpRight } from "react-icons/lu";

import { Stagger } from "@/components/motion/reveal";
import { SmartLink } from "@/components/smart-link";
import { featuredProjects } from "@/content/projects";

/** Strip of products we've shipped, right under the hero. */
export function Shipped() {
  return (
    <section aria-label="Products we've shipped" className="border-y border-hairline">
      <div className="container-page">
        <div className="flex items-center justify-between gap-4 py-5">
          <p className="eyebrow">Shipped &amp; running in production</p>
          <SmartLink href="/work/" className="eyebrow hidden transition-colors hover:text-foreground sm:block">
            All work →
          </SmartLink>
        </div>
        <Stagger
          className="grid divide-y divide-hairline border-t border-hairline lg:grid-cols-5 lg:divide-x lg:divide-y-0"
          itemClassName="lg:first:[&>a]:pl-0"
          stagger={0.06}
        >
          {featuredProjects.map((project) => (
            <SmartLink
              key={project.slug}
              href={`/work/${project.slug}/`}
              className="group relative flex h-full items-center justify-between gap-6 py-5 transition-colors lg:flex-col lg:items-stretch lg:px-6 lg:py-7"
            >
              <span className="flex items-start justify-between gap-3">
                <span className="text-lg font-medium tracking-[-0.02em] text-foreground/80 transition-colors group-hover:text-foreground sm:text-xl">
                  {project.name}
                </span>
                <LuArrowUpRight className="mt-1 size-4 shrink-0 -translate-x-1 translate-y-1 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
              </span>
              <span className="text-xs text-muted-foreground">{project.category}</span>
            </SmartLink>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
