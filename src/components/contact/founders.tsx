import { LuDownload, LuMail, LuPhone } from "react-icons/lu";

import { BusinessCard } from "@/components/contact/business-card";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { cardBack, founders, foundersIntro } from "@/content/contact";

/** The founders' business cards in 3D, with direct phone and email and a vCard to save. */
export function Founders() {
  return (
    <section id="founders" className="scroll-mt-24 border-t border-hairline py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading label="Founders" title={foundersIntro.title} size="md" description={foundersIntro.description} />

        <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-8 lg:gap-12">
          {founders.map((founder, i) => (
            <article key={founder.email}>
              <Reveal
                delay={i * 0.12}
                y={40}
                className="bg-blueprint flex items-center justify-center rounded-3xl border border-border bg-neutral-100 px-[9%] py-[12%] perspective-[1400px] dark:bg-neutral-900"
              >
                <BusinessCard front={founder.card} back={cardBack} name={founder.name} phase={i * 2.1} />
              </Reveal>
              <p className="eyebrow mt-4 text-center">Click or tap the card to flip it</p>

              <Reveal delay={i * 0.12 + 0.1} y={16} className="mt-8 flex flex-wrap items-end justify-between gap-x-6 gap-y-5 px-1">
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.02em]">{founder.name}</h3>
                  <p className="eyebrow mt-1.5">{founder.title}</p>
                  <ul className="mt-5 space-y-2.5 text-sm">
                    <li>
                      <a href={`tel:${founder.tel}`} className="inline-flex items-center gap-3 transition-colors hover:text-muted-foreground">
                        <LuPhone className="size-4 text-muted-foreground" aria-hidden />
                        {founder.phone}
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${founder.email}`} className="inline-flex items-center gap-3 transition-colors hover:text-muted-foreground">
                        <LuMail className="size-4 text-muted-foreground" aria-hidden />
                        {founder.email}
                      </a>
                    </li>
                  </ul>
                </div>
                <Button asChild variant="line" size="pill-md">
                  <a href={founder.vcard} download={`${founder.name}.vcf`}>
                    <LuDownload data-icon="inline-start" />
                    Save contact
                  </a>
                </Button>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
