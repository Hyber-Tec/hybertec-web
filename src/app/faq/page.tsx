import { enterDelay } from "@/components/motion/enter-text";
import { Reveal } from "@/components/motion/reveal";
import { PageHeader } from "@/components/page-header";
import { Inline } from "@/components/rich-text";
import { SectionLabel } from "@/components/section-heading";
import { CtaPanel } from "@/components/sections/cta-panel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqGroups, faqIntro, plainText } from "@/content/faq";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about working with HyberTec: cost, timelines, ownership of code and designs, NDAs, mobile apps and support after launch.",
  path: "/faq/",
});

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGroups
      .flatMap((group) => group.items)
      .map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: plainText(faq.a) },
      })),
  };

  return (
    <>
      <PageHeader
        label="FAQ"
        title={faqIntro.title}
        description={
          <>
            Can&apos;t find your question? Email{" "}
            <a href={`mailto:${site.email}`} className="link">
              {site.email}
            </a>{" "}
            and we&apos;ll reply within one business day.
          </>
        }
      >
        <nav aria-label="Topics" className="enter-up mt-10" style={enterDelay(0.4)}>
          <ul className="flex flex-wrap gap-2">
            {faqGroups.map((group, i) => (
              <li key={group.title}>
                <a
                  href={`#topic-${i + 1}`}
                  className="inline-flex items-center rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
                >
                  {group.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      <section className="pb-16 sm:pb-24">
        <div className="container-page">
          {faqGroups.map((group, gi) => (
            <div
              key={group.title}
              id={`topic-${gi + 1}`}
              className="grid scroll-mt-28 gap-6 border-t border-border py-10 sm:py-14 lg:grid-cols-12 lg:gap-10"
            >
              <Reveal y={12} className="lg:col-span-4">
                <SectionLabel index={String(gi + 1).padStart(2, "0")}>{group.title}</SectionLabel>
              </Reveal>
              <Reveal delay={0.05} className="lg:col-span-8">
                <Accordion type="single" collapsible defaultValue={gi === 0 ? "item-0" : undefined}>
                  {group.items.map((faq, i) => (
                    <AccordionItem key={faq.q} value={`item-${i}`} className="border-b border-border first:-mt-5 last:border-b-0">
                      <AccordionTrigger className="gap-6 py-5 text-left text-base font-medium tracking-[-0.01em] hover:no-underline sm:text-lg [&_[data-slot=accordion-trigger-icon]]:mt-1">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="max-w-2xl pb-6 text-base leading-relaxed text-muted-foreground">
                        <Inline text={faq.a} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <CtaPanel className="border-t border-hairline" current="/faq/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
