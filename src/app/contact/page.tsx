import { LuArrowUpRight, LuClock, LuMail } from "react-icons/lu";
import { SiInstagram } from "react-icons/si";

import { ContactForm } from "@/components/contact/contact-form";
import { Founders } from "@/components/contact/founders";
import { EnterText, enterDelay } from "@/components/motion/enter-text";
import { SectionLabel } from "@/components/section-heading";
import { contactIntro, nextSteps } from "@/content/contact";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Start a project with HyberTec. Tell us about your website, custom software, CRM or mobile app, and we'll reply within one business day.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div aria-hidden className="bg-blueprint mask-radial pointer-events-none absolute inset-0 -z-10 opacity-60" />
        {/* Phones: heading, form, then details. Desktop: heading and details left, form right. */}
        <div className="container-page grid gap-y-12 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-10 lg:gap-y-10">
          <div className="lg:col-span-5 lg:row-start-1">
            <div className="enter-up" style={enterDelay(0)}>
              <SectionLabel>{contactIntro.eyebrow}</SectionLabel>
            </div>
            <EnterText
              lines={contactIntro.title}
              delay={0.1}
              className="mt-6 text-[clamp(2.75rem,6vw,5.25rem)] leading-[0.98] font-medium tracking-[-0.05em]"
            />
            <p className="enter-up mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg" style={enterDelay(0.25)}>
              {contactIntro.description}
            </p>
          </div>

          <div className="enter-up lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1" style={enterDelay(0.2)}>
            <ContactForm />
          </div>

          <div className="lg:col-span-5 lg:row-start-2">
            <div className="enter-up space-y-4 text-sm" style={enterDelay(0.35)}>
              <ContactLine icon={LuMail} href={`mailto:${site.email}`}>
                {site.email}
              </ContactLine>
              <ContactLine icon={LuClock}>Replies within {site.responseTime}</ContactLine>
              {site.socials.map((social) => (
                <ContactLine key={social.href} icon={SiInstagram} href={social.href} external>
                  {social.handle}
                </ContactLine>
              ))}
            </div>

            <div className="enter-up mt-12 border-t border-hairline pt-8" style={enterDelay(0.45)}>
              <p className="eyebrow">What happens next</p>
              <ol className="mt-5 space-y-3.5">
                {nextSteps.map((step, i) => (
                  <li key={step} className="flex gap-4 text-sm text-muted-foreground">
                    <span className="font-mono text-xs text-brand">{String(i + 1).padStart(2, "0")}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
      <Founders />
    </>
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
        <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-brand" />
      </span>
      <span>{children}</span>
      {href && <LuArrowUpRight className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />}
    </>
  );
  return href ? (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex w-fit items-center gap-3 transition-colors hover:text-foreground"
    >
      {content}
    </a>
  ) : (
    <p className="flex items-center gap-3">{content}</p>
  );
}
