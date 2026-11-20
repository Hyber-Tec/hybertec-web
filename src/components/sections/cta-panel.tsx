import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";

import { Reveal } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/section-heading";
import { SmartLink } from "@/components/smart-link";
import { Button } from "@/components/ui/button";
import { callToAction } from "@/content/home";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Closing call to action: a dark panel in both themes (the `dark` class turns
 * its subtree dark) with the main button and links into the other pages.
 */
export function CtaPanel({ className, current }: { className?: string; /** The page it's on, left out of the links. */ current?: string }) {
  const links = callToAction.links.filter((link) => link.href !== current);

  return (
    <section className={cn("py-16 sm:py-24", className)}>
      <div className="container-page">
        <Reveal>
          <div className="dark relative isolate overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-foreground sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div aria-hidden className="bg-blueprint mask-radial absolute inset-0 -z-10 opacity-60" />

            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <SectionLabel>{callToAction.eyebrow}</SectionLabel>
                <h2 className="mt-6 text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] font-medium tracking-[-0.045em]">
                  {callToAction.title}
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">{callToAction.description}</p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:col-span-5 lg:items-end">
                <Button asChild variant="brand" size="pill">
                  <SmartLink href="/contact/">
                    Start a project
                    <LuArrowUpRight
                      data-icon="inline-end"
                      className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                    />
                  </SmartLink>
                </Button>
                <a href={`mailto:${site.email}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  or email {site.email}
                </a>
              </div>
            </div>

            {links.length > 0 && (
              <nav aria-label="Before you get in touch" className="mt-12 border-t border-border pt-6">
                <ul className="flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-x-10">
                  {links.map((link) => (
                    <li key={link.href}>
                      <SmartLink
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                        <LuArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
