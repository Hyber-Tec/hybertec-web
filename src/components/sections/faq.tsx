import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/content/home";
import { site } from "@/content/site";

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <section id="faq" className="relative scroll-mt-24 border-t border-hairline py-24 sm:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              stacked
              index="07"
              label="FAQ"
              title={["Questions,", "answered."]}
              description={
                <>
                  Can&apos;t find what you&apos;re looking for? Email{" "}
                  <a href={`mailto:${site.email}`} className="text-foreground underline underline-offset-4">
                    {site.email}
                  </a>{" "}
                  and we&apos;ll get back to you within {site.responseTime}.
                </>
              }
            />
          </div>
        </div>

        <Reveal className="lg:col-span-7">
          <Accordion type="single" collapsible defaultValue="item-0" className="border-t border-border">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="gap-6 py-6 text-left text-base font-medium tracking-[-0.01em] hover:no-underline sm:text-lg [&_[data-slot=accordion-trigger-icon]]:mt-1">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
