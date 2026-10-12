import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import { LuArrowLeft, LuArrowRight, LuArrowUpRight } from "react-icons/lu";

import { BrowserFrame } from "@/components/mockups/browser-frame";
import { PhoneFrame } from "@/components/mockups/phone-frame";
import { Reveal } from "@/components/motion/reveal";
import { EnterText, enterDelay } from "@/components/motion/enter-text";
import { Contact } from "@/components/sections/contact";
import { SmartLink } from "@/components/smart-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlatformBadges } from "@/components/work/platform-badges";
import { ProjectMockup } from "@/components/work/project-mockup";
import { getProject, kindLabel, platformLabel, projects } from "@/content/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    description: `${project.name} — ${project.tagline} ${project.summary}`,
    alternates: { canonical: `/work/${project.slug}/` },
    openGraph: {
      title: `${project.name} — a HyberTec project`,
      description: project.summary,
      url: `/work/${project.slug}/`,
      images: project.media.desktop ? [{ url: project.media.desktop }] : undefined,
    },
  };
}

function hostname(url: string) {
  return new URL(url).hostname.replace(/^www\./, "");
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const meta = [
    { label: "Category", value: project.category },
    { label: "Type", value: kindLabel[project.kind] },
    { label: "Platforms", value: project.platforms.map((p) => platformLabel[p]).join(", ") },
    { label: "Year", value: String(project.year) },
  ];

  return (
    <>
      <header className="relative overflow-hidden pt-32 sm:pt-40">
        <div aria-hidden className="bg-blueprint mask-radial pointer-events-none absolute inset-0 -z-10 opacity-70" />
        <div className="container-page">
          <div className="enter-up" style={enterDelay(0)}>
            <SmartLink
              href="/work/"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <LuArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              All work
            </SmartLink>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow enter-up" style={enterDelay(0.05)}>
                Case study · {String(index + 1).padStart(2, "0")}
              </p>
              <EnterText
                lines={[project.name]}
                delay={0.1}
                className="mt-5 text-[clamp(3rem,8vw,7rem)] leading-[0.95] font-medium tracking-[-0.055em]"
              />
              <p className="enter-up mt-6 max-w-2xl text-xl leading-snug text-foreground/85 sm:text-2xl" style={enterDelay(0.25)}>
                {project.tagline}
              </p>
            </div>
            <div className="enter-up flex flex-wrap gap-3 lg:col-span-4 lg:justify-end" style={enterDelay(0.35)}>
              {project.url && (
                <Button asChild variant="solid" size="pill-md">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    Visit {hostname(project.url)}
                    <LuArrowUpRight className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button asChild variant="line" size="pill-md">
                  <a href={project.demo.href} target="_blank" rel="noopener noreferrer">
                    {project.demo.label}
                    <LuArrowUpRight />
                  </a>
                </Button>
              )}
              {project.appStoreUrl && <StoreLink href={project.appStoreUrl} icon={FaAppStoreIos} label="App Store" />}
              {project.playStoreUrl && <StoreLink href={project.playStoreUrl} icon={FaGooglePlay} label="Google Play" />}
            </div>
          </div>

          <div className="enter-up" style={enterDelay(0.45)}>
            <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-hairline pt-8 md:grid-cols-4">
              {meta.map((item) => (
                <div key={item.label}>
                  <dt className="eyebrow">{item.label}</dt>
                  <dd className="mt-2 text-sm">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="enter-up container-page mt-14" style={enterDelay(0.5)}>
          <div className="bg-blueprint relative overflow-hidden rounded-3xl border border-border bg-neutral-100 px-[6%] pt-[6%] dark:bg-neutral-900">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,color-mix(in_oklch,var(--foreground)_10%,transparent),transparent_75%)]"
            />
            <ProjectMockup project={project} priority className="relative mx-auto max-w-5xl" />
          </div>
        </div>
      </header>

      <section className="py-24 sm:py-32">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Overview</p>
            <p className="mt-5 text-lg leading-relaxed text-foreground/85">{project.summary}</p>
            <PlatformBadges platforms={project.platforms} className="mt-6" />
          </Reveal>
          <div className="grid gap-12 sm:grid-cols-2 lg:col-span-8">
            <Reveal delay={0.1}>
              <h2 className="text-2xl font-medium tracking-[-0.03em]">The challenge</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{project.challenge}</p>
            </Reveal>
            <Reveal delay={0.18}>
              <h2 className="text-2xl font-medium tracking-[-0.03em]">Our approach</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{project.approach}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-hairline py-24 sm:py-32">
        <div className="container-page">
          <Reveal>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] font-medium tracking-[-0.045em]">What we built</h2>
          </Reveal>
          <ol className="mt-12 grid border-t border-border md:grid-cols-2 md:gap-x-12">
            {project.highlights.map((highlight, i) => (
              <li key={highlight} className="border-b border-border">
                <Reveal y={12} amount={0.6} className="flex gap-6 py-6">
                  <span className="pt-1 font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-base leading-relaxed sm:text-lg">{highlight}</p>
                </Reveal>
              </li>
            ))}
          </ol>

          <div className="mt-16 grid gap-10 sm:grid-cols-2">
            <Reveal>
              <p className="eyebrow">What we delivered</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <li key={service}>
                    <Badge variant="chip" className="px-3.5 py-1.5 text-sm text-foreground">
                      {service}
                    </Badge>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow">Technology</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech}>
                    <Badge variant="chip" className="px-3.5 py-1.5 font-mono">
                      {tech}
                    </Badge>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {!!project.media.gallery?.length && (
        <section className="border-t border-hairline py-24 sm:py-32">
          <div className="container-page space-y-10">
            {project.media.gallery.map((image) => (
              <Reveal key={image.src}>
                <figure className="bg-blueprint overflow-hidden rounded-3xl border border-border bg-neutral-100 p-[5%] dark:bg-neutral-900">
                  {image.frame === "browser" && (
                    <BrowserFrame src={image.src} alt={image.alt} url={project.url ? hostname(project.url) : ""} className="mx-auto max-w-5xl drop-shadow-2xl" />
                  )}
                  {image.frame === "phone" && <PhoneFrame src={image.src} alt={image.alt} className="mx-auto max-w-xs drop-shadow-2xl" />}
                  {image.frame === "none" && (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={2400}
                      height={1460}
                      sizes="(min-width: 1024px) 80vw, 100vw"
                      className="mx-auto h-auto w-full max-w-5xl rounded-xl drop-shadow-2xl"
                    />
                  )}
                  <figcaption className="eyebrow mt-6 text-center">{image.alt}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="border-t border-hairline">
        <SmartLink href={`/work/${next.slug}/`} className="group block">
          <div className="container-page flex items-center justify-between gap-8 py-16 sm:py-24">
            <div>
              <p className="eyebrow">Next project</p>
              <p className="mt-4 text-[clamp(2.25rem,6vw,5rem)] leading-none font-medium tracking-[-0.05em] text-foreground/70 transition-colors group-hover:text-foreground">
                {next.name}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{next.tagline}</p>
            </div>
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-500 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background sm:size-20">
              <LuArrowRight className="size-5 transition-transform duration-500 group-hover:translate-x-1 sm:size-6" />
            </span>
          </div>
        </SmartLink>
      </section>

      <Contact />
    </>
  );
}

function StoreLink({ href, icon: Icon, label }: { href: string; icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <Button asChild variant="line" size="pill-md">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Icon />
        {label}
      </a>
    </Button>
  );
}
