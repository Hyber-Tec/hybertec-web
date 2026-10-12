import { LuArrowUpRight, LuClock, LuMail, LuMapPin } from "react-icons/lu";
import { SiInstagram } from "react-icons/si";

import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { EnterText } from "@/components/motion/enter-text";
import { RevealText } from "@/components/motion/reveal-text";
import { SectionLabel } from "@/components/section-heading";
import { site } from "@/content/site";

const heading = ["Let's build", "something", "exceptional."];
const headingClass = "mt-6 text-[clamp(2.75rem,6vw,5.25rem)] leading-[0.98] font-medium tracking-[-0.05em]";

const nextSteps = [
  "We reply within one business day with a few questions.",
  "A free 30-minute discovery call to understand your goals.",
  "A clear proposal: scope, timeline and a fixed price.",
  "Kickoff — and you see progress from the first week.",
];

export function Contact({ index, headingLevel = "h2" }: { index?: string; headingLevel?: "h1" | "h2" }) {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-hairline py-24 sm:py-32">
      <div aria-hidden className="bg-blueprint mask-radial pointer-events-none absolute inset-0 -z-10 opacity-60" />
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal y={12}>
            <SectionLabel index={index}>Start a project</SectionLabel>
          </Reveal>
          {headingLevel === "h1" ? (
            <EnterText lines={heading} delay={0.1} className={headingClass} />
          ) : (
            <RevealText as="h2" lines={heading} className={headingClass} />
          )}
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Tell us about your website, software or app. You&apos;ll hear from a real person — not an autoresponder.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 space-y-4 text-sm">
            <ContactLine icon={LuMail} href={`mailto:${site.email}`}>
              {site.email}
            </ContactLine>
            <ContactLine icon={LuMapPin}>{site.location}</ContactLine>
            <ContactLine icon={LuClock}>Replies within {site.responseTime}</ContactLine>
            {site.socials.map((social) => (
              <ContactLine key={social.href} icon={SiInstagram} href={social.href} external>
                {social.handle}
              </ContactLine>
            ))}
          </Reveal>

          <Reveal delay={0.25} className="mt-12 border-t border-hairline pt-8">
            <p className="eyebrow">What happens next</p>
            <ol className="mt-5 space-y-3.5">
              {nextSteps.map((step, i) => (
                <li key={step} className="flex gap-4 text-sm text-muted-foreground">
                  <span className="font-mono text-xs text-foreground/60">{String(i + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

function ContactLine({
  icon: Icon,
  href,
  external,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  const content = (
    <>
      <span className="flex size-9 items-center justify-center rounded-full border border-border">
        <Icon className="size-4 text-muted-foreground" />
      </span>
      <span>{children}</span>
      {href && <LuArrowUpRight className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />}
    </>
  );
  return href ? (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-3 transition-colors hover:text-foreground"
    >
      {content}
    </a>
  ) : (
    <p className="flex items-center gap-3">{content}</p>
  );
}
