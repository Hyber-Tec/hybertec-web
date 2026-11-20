import { LuArrowRight, LuArrowUpRight, LuCheck } from "react-icons/lu";

import { enterDelay } from "@/components/motion/enter-text";
import { Reveal } from "@/components/motion/reveal";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { CtaPanel } from "@/components/sections/cta-panel";
import { SmartLink } from "@/components/smart-link";
import { Button } from "@/components/ui/button";
import { getProject } from "@/content/projects";
import { capabilities, engagementNote, engagements, services, servicesIntro, type Service } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Services",
  description: servicesIntro.metaDescription,
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader label="Services" title={servicesIntro.title} description={servicesIntro.description}>
        <nav aria-label="Services on this page" className="enter-up mt-10" style={enterDelay(0.4)}>
          <ul className="flex flex-wrap gap-2">
            {services.map((service) => (
              <li key={service.slug}>
                <SmartLink
                  href={`#${service.slug}`}
                  className="inline-flex items-center rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
                >
                  {service.title}
                </SmartLink>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      <section className="pb-16 sm:pb-24">
        <div className="container-page">
          {services.map((service, i) => (
            <ServiceRow key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-24 border-t border-hairline py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading
            label="Also part of the work"
            title={["Inside most projects"]}
            size="md"
            description="These come up in most of what we build, so you don't need a separate vendor for them."
          />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <li key={item.title} className="bg-background">
                <Reveal y={14} amount={0.4} className="h-full p-7">
                  <h3 className="text-base font-medium tracking-[-0.01em]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="engagement" className="scroll-mt-24 border-t border-hairline py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading label="Engagement" title={["Ways to work together"]} size="md" description={engagementNote} />
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {engagements.map((model, i) => (
              <Reveal key={model.title} delay={i * 0.08} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-7 sm:p-8">
                  <p className="font-mono text-xs text-brand">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-6 text-2xl font-medium tracking-[-0.03em]">{model.title}</h3>
                  <p className="mt-3 text-base text-foreground/85">{model.lead}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{model.body}</p>

                  <div className="mt-8 border-t border-border pt-6">
                    <p className="eyebrow">Good for</p>
                    <p className="mt-2 text-sm">{model.bestFor}</p>
                  </div>

                  <ul className="mt-6 space-y-2.5">
                    {model.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm">
                        <LuCheck className="size-4 shrink-0 text-brand" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-10">
                    <Button asChild variant="line" size="pill-md">
                      <SmartLink href="/contact/">
                        Ask for a proposal
                        <LuArrowUpRight className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                      </SmartLink>
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaPanel className="border-t border-hairline" />
    </>
  );
}

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const example = service.example ? getProject(service.example) : undefined;

  return (
    <article id={service.slug} className="scroll-mt-28 border-t border-border py-12 sm:py-16">
      <Reveal y={18} amount={0.3} className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs text-brand">{String(index + 1).padStart(2, "0")}</p>
          <div className="mt-5 flex items-start gap-3.5 text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.05]">
            <service.icon className="mt-[calc((1.05em-1.5rem)/2)] size-6 shrink-0 text-muted-foreground" aria-hidden />
            <h2 className="font-medium tracking-[-0.04em]">{service.title}</h2>
          </div>
          {example && (
            <SmartLink
              href={`/work/${example.slug}/`}
              className="group mt-7 inline-flex items-center gap-3 rounded-full border border-border py-1.5 pr-3.5 pl-1.5 text-sm transition-colors hover:border-brand/40"
            >
              <span className="rounded-full bg-brand-soft px-2.5 py-1 font-mono text-[0.6875rem] tracking-wider text-brand uppercase">
                Example
              </span>
              {example.name}
              <LuArrowRight className="size-3.5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
            </SmartLink>
          )}
        </div>
        <div className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-foreground/85">{service.summary}</p>
          <p className="eyebrow mt-8">What you get</p>
          <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {service.deliverables.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <LuCheck className="size-4 shrink-0 text-brand" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </article>
  );
}
