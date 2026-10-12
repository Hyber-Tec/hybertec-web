import { Marquee } from "@/components/motion/marquee";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { stackRows } from "@/content/stack";

export function Stack() {
  return (
    <section id="stack" className="relative scroll-mt-24 overflow-hidden border-t border-hairline py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          index="06"
          label="Technology"
          title={["Modern tools,", "chosen to last."]}
          description="We pick proven, well-supported technology for every layer — so your product stays fast, secure and easy to evolve for years."
        />
      </div>

      <Reveal className="mt-16 space-y-4" y={16}>
        {stackRows.map((row, i) => (
          <Marquee key={i} reverse={i % 2 === 1} duration={i ? 60 : 52} gap="0.75rem">
            {row.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <tech.icon className="size-4" aria-hidden />
                {tech.name}
              </span>
            ))}
          </Marquee>
        ))}
      </Reveal>
    </section>
  );
}
