import { LuArrowRight } from "react-icons/lu";

import { Counter } from "@/components/motion/counter";
import { Reveal, Stagger } from "@/components/motion/reveal";
import { ScrollText } from "@/components/motion/scroll-text";
import { SectionLabel } from "@/components/section-heading";
import { BrowserFrame } from "@/components/mockups/browser-frame";
import { SmartLink } from "@/components/smart-link";
import { industries, ownProduct, studio } from "@/content/home";
import { getProject } from "@/content/projects";
import { cn } from "@/lib/utils";

export function Studio() {
  const crm = getProject(ownProduct.slug);

  return (
    <section id="studio" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <Reveal y={12}>
          <SectionLabel index="03">The studio</SectionLabel>
        </Reveal>

        <ScrollText
          text={studio.statement}
          emphasis={studio.emphasis}
          className="mt-10 max-w-6xl text-[clamp(1.75rem,3.9vw,3.5rem)] leading-[1.12] font-medium tracking-[-0.035em]"
        />

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-hairline pt-10 lg:grid-cols-4 lg:gap-0">
          {studio.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className={cn("lg:pr-8", i > 0 && "lg:border-l lg:border-hairline lg:pl-8")}>
              <p className="text-[clamp(2.75rem,5vw,4.25rem)] leading-none font-medium tracking-[-0.05em]">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SmartLink
              href={`/work/${ownProduct.slug}/`}
              className="group relative flex h-full min-h-[30rem] flex-col overflow-hidden rounded-3xl border border-border bg-neutral-100 transition-colors hover:border-foreground/25 dark:bg-neutral-900"
            >
              <div className="relative z-10 p-7 sm:p-9">
                <p className="eyebrow">{ownProduct.eyebrow}</p>
                <h3 className="mt-5 max-w-lg text-2xl leading-tight font-medium tracking-[-0.03em] sm:text-3xl">{ownProduct.title}</h3>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">{ownProduct.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                  Explore Hyber CRM
                  <LuArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
              <div className="bg-blueprint relative mt-auto h-56 overflow-hidden border-t border-border sm:h-64">
                <div className="absolute top-8 -right-[12%] left-7 transition-transform duration-700 ease-out group-hover:-translate-y-2 sm:left-9">
                  <BrowserFrame
                    src={crm?.media.desktop ?? ""}
                    alt="Hyber CRM admin dashboard"
                    url="hybercrm.com"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="drop-shadow-2xl"
                  />
                </div>
              </div>
            </SmartLink>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-3xl border border-border p-7 sm:p-9">
              <p className="eyebrow">Industries we&apos;ve shipped for</p>
              <ul className="mt-6 divide-y divide-border border-y border-border">
                {industries.map((industry) => (
                  <li key={industry.name} className="flex items-baseline justify-between gap-4 py-4">
                    <span className="text-base tracking-[-0.01em]">{industry.name}</span>
                    <span className="text-right font-mono text-[0.6875rem] text-muted-foreground">{industry.proof}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground lg:mt-auto lg:pt-6">
                Also a fit for professional services, startups and SaaS founders, membership businesses and nonprofits.
              </p>
            </div>
          </Reveal>
        </div>

        <Stagger className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {studio.principles.map((principle, i) => (
            <div key={principle.title} className="h-full bg-background p-7 sm:p-8">
              <p className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-8 text-lg font-medium tracking-[-0.02em]">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{principle.body}</p>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
