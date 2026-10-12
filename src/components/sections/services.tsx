import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/reveal";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { services, type Service } from "@/content/services";

import { MobileVisual, OverflowVisual, SoftwareVisual, WebsiteVisual } from "./service-visuals";

const bySlug = (slug: string) => services.find((service) => service.slug === slug) as Service;

const featured: { service: Service; visual: ReactNode; className: string }[] = [
  { service: bySlug("websites"), visual: <WebsiteVisual />, className: "lg:col-span-7" },
  { service: bySlug("custom-software"), visual: <SoftwareVisual />, className: "lg:col-span-5" },
  { service: bySlug("mobile-apps"), visual: <MobileVisual />, className: "lg:col-span-5" },
  { service: bySlug("overflow"), visual: <OverflowVisual />, className: "lg:col-span-7" },
];

const featuredSlugs = new Set(featured.map((item) => item.service.slug));
const capabilities = services.filter((service) => !featuredSlugs.has(service.slug));

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 border-t border-hairline py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          index="02"
          label="Services"
          title={["Everything you need", "to launch, run and scale."]}
          description="From a credible marketing site to the custom systems behind your operations — one team designs, builds and supports all of it."
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-12">
          {featured.map(({ service, visual, className }, i) => (
            <Reveal key={service.slug} delay={(i % 2) * 0.1} className={className}>
              <SpotlightCard id={`service-${service.slug}`} className="flex h-full scroll-mt-28 flex-col">
                <div className="bg-blueprint relative h-64 overflow-hidden border-b border-border sm:h-72">
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40" />
                  {visual}
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <div className="flex items-center gap-3">
                    <service.icon className="size-5 text-muted-foreground" aria-hidden />
                    <h3 className="text-xl font-medium tracking-[-0.02em] sm:text-2xl">{service.title}</h3>
                  </div>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{service.summary}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {service.deliverables.map((item) => (
                      <li key={item}>
                        <Badge variant="chip">{item}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 flex items-end justify-between gap-6">
          <h3 className="text-2xl font-medium tracking-[-0.03em] sm:text-3xl">And everything around it</h3>
          <p className="eyebrow hidden sm:block">{capabilities.length} more capabilities</p>
        </div>

        <ul className="mt-8 grid border-t border-border lg:grid-cols-2 lg:gap-x-16">
          {capabilities.map((service, i) => (
            <li key={service.slug} id={`service-${service.slug}`} className="scroll-mt-28 border-b border-border">
              <Reveal y={14} amount={0.5} className="group grid grid-cols-[2.25rem_1fr] gap-x-4 py-6 sm:grid-cols-[2.75rem_1fr]">
                <span className="pt-1.5 font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-lg font-medium tracking-[-0.02em]">{service.title}</h4>
                    <service.icon
                      className="size-[1.125rem] shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                      aria-hidden
                    />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
                  <p className="mt-3 font-mono text-[0.6875rem] leading-relaxed text-muted-foreground">
                    {service.deliverables.join(" · ")}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
