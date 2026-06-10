import { PortfolioGrid } from "@/features/portfolio/components/PortfolioGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Case studies from web development projects across home services, real estate, e-commerce, and professional services.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-20 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-5 h-px bg-lime" />
            <span className="section-label">Portfolio</span>
          </div>
          <h1 className="font-display font-800 text-5xl md:text-7xl text-cream leading-tight mb-6">
            Work that moves
            <br />
            the <span className="text-lime italic">needle.</span>
          </h1>
          <p className="font-body text-cream-muted text-lg max-w-xl leading-relaxed">
            Each project below is a full case study — the problem, the solution,
            and the numbers that came out the other side.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}
