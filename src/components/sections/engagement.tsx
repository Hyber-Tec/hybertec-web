import { LuArrowUpRight, LuCheck } from "react-icons/lu";

import { Reveal, Stagger } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SmartLink } from "@/components/smart-link";
import { Button } from "@/components/ui/button";
import { engagementNote, engagements, valueLine } from "@/content/home";
import { cn } from "@/lib/utils";

export function Engagement() {
  return (
    <section id="engage" className="relative scroll-mt-24 border-t border-hairline py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          index="05"
          label="Ways to work together"
          title={["Flexible engagement,", "one standard of quality."]}
          description="Start with a defined project, keep us on as your product team, or bring us in when your own pipeline overflows. Every proposal is scoped to your goals."
        />

        <Stagger className="mt-16 grid gap-4 lg:grid-cols-3" stagger={0.1}>
          {engagements.map((model) => (
            <article
              key={model.title}
              className={cn(
                "flex h-full flex-col rounded-2xl border p-7 sm:p-8",
                model.highlight ? "border-foreground bg-foreground text-background" : "border-border bg-surface",
              )}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-medium tracking-[-0.03em]">{model.title}</h3>
                {model.highlight && (
                  <span className="rounded-full border border-background/25 px-2.5 py-1 font-mono text-[0.625rem] tracking-wider uppercase">
                    Recommended
                  </span>
                )}
              </div>
              <p className={cn("mt-3 text-base", model.highlight ? "text-background/85" : "text-foreground/85")}>{model.lead}</p>
              <p className={cn("mt-3 text-sm leading-relaxed", model.highlight ? "text-background/65" : "text-muted-foreground")}>
                {model.body}
              </p>

              <div className={cn("mt-8 border-t pt-6", model.highlight ? "border-background/15" : "border-border")}>
                <p className={cn("eyebrow", model.highlight && "text-background/60")}>Best for</p>
                <p className="mt-2 text-sm">{model.bestFor}</p>
              </div>

              <ul className="mt-6 space-y-2.5">
                {model.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <LuCheck className={cn("size-4 shrink-0", model.highlight ? "text-background/70" : "text-muted-foreground")} />
                    {item}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={model.highlight ? "solid" : "line"}
                size="pill-md"
                className={cn("mt-10 lg:mt-auto", model.highlight && "bg-background text-foreground hover:bg-background/90")}
              >
                <SmartLink href="/contact/">
                  Request a proposal
                  <LuArrowUpRight className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                </SmartLink>
              </Button>
            </article>
          ))}
        </Stagger>

        <Reveal className="mx-auto mt-20 max-w-3xl text-center">
          <p className="text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.1] font-medium tracking-[-0.035em] text-balance">{valueLine}</p>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{engagementNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
