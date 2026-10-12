"use client";

import { useLayoutEffect } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

import { cn } from "@/lib/utils";

function applyTheme(theme: "light" | "dark") {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeToggle({ className }: { className?: string }) {
  // React's dev-mode remount resets <html> attributes; re-apply the saved choice.
  useLayoutEffect(() => {
    try {
      if (localStorage.getItem("theme") === "light") applyTheme("light");
    } catch {}
  }, []);

  function toggle() {
    const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
    const swap = () => applyTheme(next);
    if (document.startViewTransition && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.startViewTransition(swap);
    } else {
      swap();
    }
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className={cn(
        "relative inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground",
        className,
      )}
    >
      <LuSun className="size-[1.05rem] scale-100 rotate-0 transition-transform duration-500 dark:scale-0 dark:-rotate-90" />
      <LuMoon className="absolute size-[1.05rem] scale-0 rotate-90 transition-transform duration-500 dark:scale-100 dark:rotate-0" />
    </button>
  );
}
