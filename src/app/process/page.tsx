import { LuUserCheck } from "react-icons/lu";

import { Reveal } from "@/components/motion/reveal";
import { PageHeader } from "@/components/page-header";
import { SectionLabel } from "@/components/section-heading";
import { CtaPanel } from "@/components/sections/cta-panel";
import { ProcessSteps } from "@/components/sections/process-steps";
import { clientCommitment, processIntro, timelinesNote, typicalTimelines } from "@/content/process";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Process",
  description:
    "How a HyberTec project runs: discover, design, build, launch and support, with a fixed price agreed up front and working software to review every week.",
  path: "/process/",
});

export default function ProcessPage() {
  return (
    <>
      <PageHeader label="Process" title={processIntro.title} description={processIntro.description} />

      <section className="pb-24 sm:pb-32">
        <div className="container-page grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <ProcessSteps />
          </div>

          <aside className="lg:col-span-5">
            <div className="space-y-4 lg:sticky lg:top-28">
              <Reveal className="rounded-2xl border border-border bg-surface p-7 sm:p-8">
                <SectionLabel>Typical timelines</SectionLabel>
                <table className="mt-6 w-full text-sm">
                  <caption className="sr-only">Typical project length by type</caption>
                  <tbody className="divide-y divide-border border-y border-border">
                    {typicalTimelines.map((row) => (
                      <tr key={row.type}>
                        <th scope="row" className="py-3.5 pr-4 text-left font-normal">
                          {row.type}
                        </th>
                        <td className="py-3.5 text-right font-mono text-xs whitespace-nowrap text-muted-foreground">{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{timelinesNote}</p>
              </Reveal>

              <Reveal delay={0.1} className="rounded-2xl border border-border p-7 sm:p-8">
                <p className="flex items-center gap-2.5 text-base font-medium">
                  <LuUserCheck className="size-4 text-brand" aria-hidden />
                  {clientCommitment.title}
                </p>
                <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                  {clientCommitment.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>

      <CtaPanel className="border-t border-hairline" current="/process/" />
    </>
  );
}
