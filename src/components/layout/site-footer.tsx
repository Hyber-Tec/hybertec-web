import { LuArrowUpRight } from "react-icons/lu";
import { SiInstagram } from "react-icons/si";

import { Logo } from "@/components/brand/logo";
import { BackToTop } from "@/components/layout/back-to-top";
import { FooterWordmark } from "@/components/layout/footer-wordmark";
import { SmartLink } from "@/components/smart-link";
import { services } from "@/content/services";
import { mainNav, site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-hairline">
      <div className="container-page">
        <div className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">{site.description}</p>
            <SmartLink
              href="/contact/"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <span className="underline decoration-foreground/30 underline-offset-[6px] transition-colors group-hover:decoration-foreground">
                Start a project
              </span>
              <LuArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </SmartLink>
          </div>

          <FooterColumn title="Studio" className="md:col-span-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <SmartLink href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </SmartLink>
              </li>
            ))}
            <li>
              <SmartLink href="/contact/" className="transition-colors hover:text-foreground">
                Contact
              </SmartLink>
            </li>
          </FooterColumn>

          <FooterColumn title="Services" className="md:col-span-3">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <SmartLink href={`/#service-${service.slug}`} className="transition-colors hover:text-foreground">
                  {service.title}
                </SmartLink>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact" className="md:col-span-2">
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-foreground">
                {site.email}
              </a>
            </li>
            <li>{site.location}</li>
            {site.socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <SiInstagram className="size-3.5" aria-hidden />
                  {social.handle}
                </a>
              </li>
            ))}
          </FooterColumn>
        </div>

        <div className="flex flex-col gap-4 border-t border-hairline py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center justify-between gap-6">
            <span className="hidden font-mono tracking-wider uppercase md:inline">Designed &amp; engineered in-house</span>
            <BackToTop />
          </div>
        </div>
      </div>

      <div className="container-page pb-6 text-foreground">
        <FooterWordmark />
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <p className="eyebrow">{title}</p>
      <ul className="mt-5 space-y-3 text-sm text-muted-foreground">{children}</ul>
    </div>
  );
}
