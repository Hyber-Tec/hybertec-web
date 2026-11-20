import { LuArrowRight } from "react-icons/lu";

import { BrowserFrame } from "@/components/mockups/browser-frame";
import { enterDelay } from "@/components/motion/enter-text";
import { Reveal } from "@/components/motion/reveal";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { CtaPanel } from "@/components/sections/cta-panel";
import { SmartLink } from "@/components/smart-link";
import { getProject } from "@/content/projects";
import { stackGroups } from "@/content/stack";
import { industries, ownProduct, principles, studio } from "@/content/studio";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Studio",
  description:
    "HyberTec is an independent software studio. One team designs, builds and supports websites, custom software and mobile apps for businesses across the US.",
  path: "/studio/",
});

export default function StudioPage() {
  const crm = getProject(ownProduct.slug);

  return (
    <>
      <PageHeader label="Studio" title={studio.title}>
        <p
          className="enter-up mt-10 max-w-4xl text-[clamp(1.375rem,2.6vw,2.125rem)] leading-[1.25] font-medium tracking-[-0.025em] text-foreground/90"
          style={enterDelay(0.3)}
        >
          {studio.intro}
        </p>
        <dl className="enter-up mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-hairline pt-8 md:grid-cols-4" style={enterDelay(0.45)}>
          {studio.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="eyebrow">{fact.label}</dt>
              <dd className="mt-2 text-sm sm:text-base">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      <section className="border-t border-hairline py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading index="01" label="How we work" title={["What to expect from us"]} size="md" />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {principles.map((principle, i) => (
              <li key={principle.title} className="bg-background">
                <Reveal delay={(i % 2) * 0.08} y={16} className="h-full p-7 sm:p-9">
                  <p className="font-mono text-xs text-brand">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-8 text-xl font-medium tracking-[-0.02em]">{principle.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">{principle.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-hairline py-24 sm:py-32">
        <div className="container-page grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SmartLink
              href={`/work/${ownProduct.slug}/`}
              className="group relative flex h-full min-h-[30rem] flex-col overflow-hidden rounded-3xl border border-border bg-neutral-100 transition-colors hover:border-foreground/20 dark:bg-neutral-900"
            >
              <div className="relative z-10 p-7 sm:p-9">
                <p className="eyebrow flex items-center gap-3">
                  <span className="text-brand">02</span>
                  <span aria-hidden className="h-px w-8 bg-foreground/25" />
                  {ownProduct.eyebrow}
                </p>
                <h2 className="mt-6 max-w-lg text-2xl leading-tight font-medium tracking-[-0.03em] sm:text-3xl">{ownProduct.title}</h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">{ownProduct.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand">
                  Read the Hyber CRM case study
                  <LuArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
              <div className="bg-blueprint relative mt-auto h-56 overflow-hidden border-t border-border sm:h-64">
                <div className="absolute top-8 -right-[12%] left-7 transition-transform duration-700 ease-out group-hover:-translate-y-2 sm:left-9">
                  <BrowserFrame
                    src={crm?.media.desktop ?? ""}
                    alt="Hyber CRM admin dashboard"
                    url="hybercrm.com"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="drop-shadow-xl"
                  />
                </div>
              </div>
            </SmartLink>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-3xl border border-border p-7 sm:p-9">
              <p className="eyebrow flex items-center gap-3">
                <span className="text-brand">03</span>
                <span aria-hidden className="h-px w-8 bg-foreground/25" />
                Who we&apos;ve built for
              </p>
              <ul className="mt-8 divide-y divide-border border-y border-border">
                {industries.map((industry) => (
                  <li key={industry.name}>
                    {industry.slug ? (
                      <SmartLink
                        href={`/work/${industry.slug}/`}
                        className="group flex items-baseline justify-between gap-4 py-4 transition-colors hover:text-brand"
                      >
                        <span className="text-base tracking-[-0.01em]">{industry.name}</span>
                        <span className="text-right font-mono text-[0.6875rem] text-muted-foreground transition-colors group-hover:text-brand">
                          {industry.proof}
                        </span>
                      </SmartLink>
                    ) : (
                      <p className="flex items-baseline justify-between gap-4 py-4">
                        <span className="text-base tracking-[-0.01em]">{industry.name}</span>
                        <span className="text-right font-mono text-[0.6875rem] text-muted-foreground">{industry.proof}</span>
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="tools" className="scroll-mt-24 border-t border-hairline py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading
            index="04"
            label="Tools"
            title={["What we build with"]}
            size="md"
            description="Proven, well-supported tools, picked for each project so your software stays easy to maintain."
          />
          <dl className="mt-14 grid gap-x-10 gap-y-10 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-5">
            {stackGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.05} y={14}>
                <dt className="eyebrow">{group.title}</dt>
                <dd className="mt-4">
                  <ul className="space-y-2 text-sm">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <CtaPanel className="border-t border-hairline" current="/studio/" />
    </>
  );
}
