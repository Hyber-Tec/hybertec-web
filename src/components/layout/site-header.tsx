"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import { useState, type CSSProperties } from "react";
import { LuArrowUpRight, LuMenu } from "react-icons/lu";

import { Logo } from "@/components/brand/logo";
import { SmartLink } from "@/components/smart-link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { mainNav, site } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 32));

  return (
    <header className="enter-down fixed inset-x-0 top-0 z-50" style={{ "--d": "0.45s" } as CSSProperties}>
      <div className={cn("transition-[padding] duration-500 ease-out", scrolled && "px-3 pt-3")}>
        <div
          className={cn(
            "mx-auto flex items-center justify-between border transition-[max-width,height,padding,background-color,border-color,border-radius,box-shadow] duration-500 ease-out",
            scrolled
              ? "h-14 max-w-5xl rounded-full border-border bg-background/70 py-0 pr-2 pl-5 shadow-[0_12px_40px_-16px_rgb(0_0_0/0.45)] backdrop-blur-xl"
              : "h-[4.5rem] max-w-[82rem] rounded-none border-transparent bg-transparent px-5 sm:px-8 lg:px-12",
          )}
        >
          <SmartLink href="/" aria-label="HyberTec home" className="rounded-md">
            <Logo markClassName={cn("transition-[height] duration-500", scrolled ? "h-6" : "h-7")} />
          </SmartLink>

          <nav aria-label="Primary" className="hidden items-center lg:flex" onMouseLeave={() => setHovered(null)}>
            {mainNav.map((item) => {
              const active = item.href === "/work/" && pathname.startsWith("/work");
              return (
                <SmartLink
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHovered(item.href)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm transition-colors",
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {hovered === item.href && (
                    <motion.span
                      layoutId="nav-hover"
                      className="absolute inset-0 rounded-full bg-foreground/[0.07]"
                      transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </SmartLink>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            <Button asChild variant="solid" size="pill-sm" className="hidden sm:inline-flex">
              <SmartLink href="/contact/">
                Start a project
                <LuArrowUpRight data-icon="inline-end" className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
              </SmartLink>
            </Button>
            <MobileMenu pathname={pathname} />
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex size-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-foreground/[0.06] lg:hidden"
        >
          <LuMenu className="size-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-none border-l-border p-0 data-[side=right]:sm:max-w-md">
        <div className="flex h-full flex-col px-6 pt-20 pb-8">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription className="eyebrow">Navigate</SheetDescription>
          <nav aria-label="Mobile" className="mt-6 flex flex-col">
            {[{ label: "Home", href: "/" }, ...mainNav].map((item, i) => (
              <SheetClose asChild key={item.href}>
                <SmartLink
                  href={item.href}
                  className={cn(
                    "flex items-baseline justify-between border-b border-hairline py-4 text-3xl font-medium tracking-[-0.03em] transition-colors hover:text-muted-foreground",
                    item.href === "/work/" && pathname.startsWith("/work") && "text-muted-foreground",
                  )}
                >
                  {item.label}
                  <span className="font-mono text-xs text-muted-foreground">{String(i).padStart(2, "0")}</span>
                </SmartLink>
              </SheetClose>
            ))}
          </nav>
          <div className="mt-auto space-y-4">
            <SheetClose asChild>
              <Button asChild variant="solid" size="pill" className="w-full">
                <SmartLink href="/contact/">
                  Start a project <LuArrowUpRight data-icon="inline-end" />
                </SmartLink>
              </Button>
            </SheetClose>
            <a href={`mailto:${site.email}`} className="block text-center text-sm text-muted-foreground">
              {site.email}
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
