import { LegacyHashRedirect } from "@/components/legacy-hash-redirect";
import { CtaPanel } from "@/components/sections/cta-panel";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services-preview";

export default function HomePage() {
  return (
    <>
      <LegacyHashRedirect />
      <Hero />
      <ServicesPreview index="01" />
      <FeaturedWork index="02" />
      <CtaPanel />
    </>
  );
}
