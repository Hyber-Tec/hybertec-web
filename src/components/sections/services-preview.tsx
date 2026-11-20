import { LuArrowRight } from "react-icons/lu";

import { ArrowLink } from "@/components/arrow-link";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SmartLink } from "@/components/smart-link";
import { homeServices } from "@/content/home";
import { services } from "@/content/services";

/** Homepage: the six services in one line each, linking into /services/. */
export function ServicesPreview({ index }: { index?: string }) {
  return (
    <section className="relative border-t border-hairline py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          index={index}
          label="Services"
          title={[homeServices.title]}
          description={homeServices.description}
          action={<ArrowLink href="/services/">All services</ArrowLink>}
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service, i) => (
            <li key={service.slug} className="bg-background">
              <SmartLink
                href={`/services/#${service.slug}`}
                className="group block h-full transition-colors hover:bg-surface"
              >
                <Reveal delay={(i % 3) * 0.06} y={16} className="flex h-full flex-col p-6 sm:p-8">
                  <span className="flex items-center justify-between">
                    <span className="font-mono text-xs text-brand">{String(i + 1).padStart(2, "0")}</span>
                    <service.icon className="size-5 text-muted-foreground transition-colors group-hover:text-foreground" aria-hidden />
                  </span>
                  <span className="mt-6 text-xl font-medium tracking-[-0.02em] sm:mt-10">{service.title}</span>
                  <span className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.short}</span>
                  <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm text-muted-foreground transition-colors group-hover:text-brand sm:pt-6">
                    Details
                    <LuArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Reveal>
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
