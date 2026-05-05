import Link from "next/link";
import { BrandMark } from "@/components/shared/BrandMark";

const footerLinks = {
  Explore: [
    { href: "/services", label: "Services" },
    { href: "/services#pricing", label: "Pricing" },
    { href: "/portfolio", label: "Work" },
  ],
  Connect: [
    { href: "/contact", label: "Start a project" },
    { href: "mailto:hello@hybertec.com", label: "hello@hybertec.com" },
  ],
};

export function Footer() {
  return (
    <footer className="pb-10 pt-20">
      <div className="site-shell">
        <div className="surface-panel overflow-hidden">
          <div className="grid gap-10 px-6 py-10 md:grid-cols-[1.4fr_0.6fr_0.8fr] md:px-10">
            <div>
              <div className="mb-5">
                <BrandMark />
              </div>
              <p className="max-w-sm text-sm leading-7 text-cream-muted">
                Websites, software, and ongoing support — scoped clearly and
                shipped on time.
              </p>
            </div>

            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-cream-muted">
                  {section}
                </p>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-cream-muted transition-colors hover:text-cream"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 px-6 py-5 md:px-10">
            <div className="flex flex-col gap-2 text-xs uppercase tracking-[0.22em] text-cream-muted md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} HyberTec</p>
              <p>Based in Gwinnett County, Georgia</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
