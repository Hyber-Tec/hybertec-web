import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, projects } from "@/features/portfolio/data/projects";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  // Adjacent projects for prev/next
  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-0 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 font-body text-sm">
            <Link href="/portfolio" className="text-cream-muted hover:text-lime transition-colors">
              Portfolio
            </Link>
            <span className="text-cream-muted/40">/</span>
            <span className="text-cream-muted">{project.client}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full bg-surface-2 border border-border text-cream-muted text-xs font-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="font-display font-800 text-4xl md:text-6xl text-cream leading-tight mb-4">
                {project.title}
              </h1>
              <p className="font-body text-cream-muted text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-3">
              {project.results.slice(0, 4).map((result, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-surface border border-border"
                >
                  <p className="font-display font-700 text-lime text-sm leading-snug">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative h-80 md:h-[480px] w-full">
          <Image
            src={project.hero}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
        </div>
      </section>

      {/* Case study body */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Meta row */}
          <div className="grid grid-cols-3 gap-6 mb-16 p-6 rounded-2xl bg-surface border border-border">
            <div>
              <p className="section-label mb-1">Client</p>
              <p className="font-body text-sm text-cream">{project.client}</p>
            </div>
            <div>
              <p className="section-label mb-1">Industry</p>
              <p className="font-body text-sm text-cream">{project.industry}</p>
            </div>
            <div>
              <p className="section-label mb-1">Year</p>
              <p className="font-body text-sm text-cream">{project.year}</p>
            </div>
          </div>

          {/* Problem */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-px bg-lime" />
              <span className="section-label">The Problem</span>
            </div>
            <p className="font-body text-cream-muted text-base leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-px bg-lime" />
              <span className="section-label">Our Approach</span>
            </div>
            <p className="font-body text-cream-muted text-base leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Stack */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-px bg-lime" />
              <span className="section-label">Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-surface border border-border font-body text-sm text-cream-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-px bg-lime" />
              <span className="section-label">Results</span>
            </div>
            <ul className="space-y-3">
              {project.results.map((result) => (
                <li key={result} className="flex items-start gap-3">
                  <span className="text-lime mt-0.5 flex-shrink-0">✦</span>
                  <span className="font-body text-base text-cream">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Live link */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border text-cream font-body font-500 text-sm hover:border-lime/30 hover:text-lime transition-colors"
            >
              View Live Site
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M4 4h8v8M4 12L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
          )}
        </div>
      </section>

      {/* Next project */}
      <section className="border-t border-border">
        <Link
          href={`/portfolio/${next.slug}`}
          className="group flex items-center justify-between max-w-7xl mx-auto px-6 py-12 hover:bg-surface/50 transition-colors"
        >
          <div>
            <p className="section-label mb-2">Next Project</p>
            <h3 className="font-display font-700 text-2xl text-cream group-hover:text-lime transition-colors">
              {next.title}
            </h3>
          </div>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="text-cream-muted group-hover:text-lime group-hover:translate-x-2 transition-all"
          >
            <path d="M6 16h20M18 8l8 8-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display font-800 text-3xl md:text-4xl text-cream mb-4">
            Want results like these?
          </h2>
          <p className="font-body text-cream-muted mb-8 max-w-sm mx-auto">
            Let's talk about what your business needs and how we can make it happen.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-lime text-bg font-body font-600 hover:bg-lime-dim transition-colors"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
