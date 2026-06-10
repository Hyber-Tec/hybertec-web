import { SectionHeader } from "@/components/shared/SectionHeader";
import { PricingTable } from "@/features/pricing/components/PricingTable";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Websites, custom software, and ongoing support from HyberTec. Clear scope, modern builds, and no surprise invoices.",
};

const serviceDetails = [
  {
    category: "Websites",
    icon: "◈",
    items: [
      "Marketing sites and landing pages",
      "Mobile-first responsive builds",
      "Forms, lead capture, and basic SEO",
    ],
  },
  {
    category: "Software",
    icon: "⬡",
    items: [
      "Client portals and internal dashboards",
      "Booking flows and admin tools",
      "API integrations and databases",
    ],
  },
  {
    category: "Support",
    icon: "◐",
    items: [
      "Content updates and new pages",
      "Hosting, SSL, and maintenance",
      "Performance fixes and improvements",
    ],
  },
];

const faqs = [
  {
    q: "Do I have to commit to a long-term contract?",
    a: "Plans are designed to stay flexible. We scope the first phase clearly, then keep support month-to-month when possible.",
  },
  {
    q: "Can you handle smaller requests?",
    a: "Yes. Smaller website edits, landing pages, forms, and workflow fixes are a good fit when the scope is clear.",
  },
  {
    q: "How long does a new website take?",
    a: "Simple sites usually take 2-3 weeks. Larger websites and software builds are scoped around the actual work needed.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* About */}
      <section className="pt-20 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_0.85fr] md:items-center">
            <SectionHeader
              label="About HyberTec"
              title="Reliable digital execution for service businesses"
              subtitle="HyberTec helps businesses turn scattered website and software requests into clear, maintainable builds."
            />

            <div className="rounded-3xl bg-surface border border-border p-6">
              {[
                { value: "2026", label: "Founded" },
                { value: "40+", label: "Projects shipped" },
                { value: "US-wide", label: "Client reach" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-border py-4 first:pt-0 last:border-0 last:pb-0"
                >
                  <span className="font-body text-sm text-cream-muted">{item.label}</span>
                  <span className="font-display font-700 text-xl text-cream">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Capabilities"
            title="What we build"
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {serviceDetails.map((service) => (
              <div
                key={service.category}
                className="p-6 rounded-2xl bg-surface border border-border"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl text-lime">{service.icon}</span>
                  <h3 className="font-display font-700 text-lg text-cream">
                    {service.category}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-lime text-sm mt-0.5 flex-shrink-0">✓</span>
                      <span className="font-body text-sm text-cream-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="Pricing"
            title="Cheaper monthly options"
            align="center"
            className="mb-10"
          />
          <PricingTable />

          <p className="text-center font-body text-xs text-cream-muted mt-8">
            Need something custom?{" "}
            <Link href="/contact" className="text-lime hover:underline">
              Let's talk
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader
            label="FAQ"
            title="Common questions"
            align="center"
            className="mb-10"
          />

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="p-6 rounded-2xl bg-surface border border-border"
              >
                <h4 className="font-display font-700 text-base text-cream mb-2">
                  {faq.q}
                </h4>
                <p className="font-body text-sm text-cream-muted leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display font-800 text-3xl md:text-5xl text-cream mb-4">
            Not sure which plan fits?
          </h2>
          <p className="font-body text-cream-muted mb-8 max-w-md mx-auto">
            Book a free 30-minute call and we'll figure out exactly what you need — no pressure.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-lime text-bg font-body font-600 text-base hover:bg-lime-dim transition-colors"
          >
            Book a Free Discovery Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
