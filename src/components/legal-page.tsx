import type { ReactNode } from "react";

import { enterDelay } from "@/components/motion/enter-text";
import { PageHeader } from "@/components/page-header";
import { SmartLink } from "@/components/smart-link";
import type { LegalDoc } from "@/content/legal";
import { cn } from "@/lib/utils";

const updatedFormat = new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" });

const number = (i: number) => String(i + 1).padStart(2, "0");

/** Shared layout for /terms/, /privacy/ and /refunds/. The copy lives in content/legal.ts. */
export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <PageHeader label="Legal" title={doc.title} description={<Inline text={doc.intro} />}>
        <p className="eyebrow enter-up mt-8" style={enterDelay(0.4)}>
          Last updated: <time dateTime={doc.updated}>{updatedFormat.format(new Date(doc.updated))}</time>
        </p>
      </PageHeader>

      <section className="pb-24 sm:pb-32">
        <div className="enter-up container-page grid gap-14 lg:grid-cols-12 lg:gap-10" style={enterDelay(0.45)}>
          <div className="hidden lg:col-span-4 lg:block">
            <nav aria-label="On this page" className="sticky top-32">
              <p className="eyebrow">On this page</p>
              <ol className="mt-5 space-y-3 text-sm text-muted-foreground">
                {doc.sections.map((section, i) => (
                  <li key={section.id}>
                    <SmartLink href={`#${section.id}`} className="flex gap-4 transition-colors hover:text-foreground">
                      <span className="pt-px font-mono text-xs text-foreground/60">{number(i)}</span>
                      {section.title}
                    </SmartLink>
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          <div className="lg:col-span-8">
            <div className="max-w-2xl">
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <h2 className="eyebrow">The short version</h2>
                <List items={doc.summary} className="mt-5 text-foreground/85" />
              </div>

              <div className="mt-12 sm:mt-16">
                {doc.sections.map((section, i) => (
                  <section
                    key={section.id}
                    id={section.id}
                    aria-labelledby={`${section.id}-title`}
                    className="scroll-mt-24 border-t border-border py-10 sm:py-12"
                  >
                    <h2 id={`${section.id}-title`} className="flex items-baseline gap-4 text-2xl font-medium tracking-[-0.03em]">
                      <span aria-hidden className="font-mono text-xs font-normal tracking-normal text-muted-foreground">
                        {number(i)}
                      </span>
                      {section.title}
                    </h2>
                    <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                      {section.body.map((block, j) =>
                        typeof block === "string" ? (
                          <p key={j}>
                            <Inline text={block} />
                          </p>
                        ) : (
                          <List key={j} items={block} />
                        ),
                      )}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function List({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("space-y-2.5", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className="mt-[0.8em] h-px w-3 shrink-0 bg-foreground/25" />
          <span>
            <Inline text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

/** `[label](href)` in the copy becomes a link. */
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/;

function Inline({ text }: { text: string }) {
  // With two capture groups, split() returns [text, label, href, text, label, href, …, text].
  const parts = text.split(LINK);
  return parts.map((part, i) => {
    if (i % 3 === 1) {
      return (
        <TextLink key={i} href={parts[i + 1]}>
          {part}
        </TextLink>
      );
    }
    return i % 3 === 0 ? part : null;
  });
}

const linkClass =
  "text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground";

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <SmartLink href={href} className={linkClass}>
        {children}
      </SmartLink>
    );
  }
  const external = href.startsWith("http");
  return (
    <a href={href} className={linkClass} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  );
}
