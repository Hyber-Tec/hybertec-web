import { LuArrowLeft } from "react-icons/lu";

import { MarkReveal } from "@/components/brand/mark-reveal";
import { SmartLink } from "@/components/smart-link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      <div aria-hidden className="bg-blueprint mask-radial pointer-events-none absolute inset-0 -z-10 opacity-80" />
      <div className="container-page flex flex-col items-center text-center">
        <MarkReveal className="h-28 w-auto text-foreground sm:h-36" strokeWidth={18} />
        <p className="eyebrow mt-12">Error 404</p>
        <h1 className="mt-4 text-[clamp(2.5rem,6vw,4.5rem)] leading-none font-medium tracking-[-0.05em]">
          This page isn&apos;t built yet.
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back to something that does.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild variant="solid" size="pill">
            <SmartLink href="/">
              <LuArrowLeft data-icon="inline-start" className="transition-transform duration-300 group-hover/button:-translate-x-0.5" />
              Back home
            </SmartLink>
          </Button>
          <Button asChild variant="line" size="pill">
            <SmartLink href="/work/">See our work</SmartLink>
          </Button>
        </div>
      </div>
    </section>
  );
}
