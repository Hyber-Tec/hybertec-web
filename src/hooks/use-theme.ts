"use client";

import { useSyncExternalStore } from "react";

export type Theme = "dark" | "light";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

const getSnapshot = (): Theme => (document.documentElement.classList.contains("dark") ? "dark" : "light");

/** Current color theme, kept in sync with the `dark` class on <html>. */
export function useTheme(): Theme {
  return useSyncExternalStore(subscribe, getSnapshot, () => "dark");
}
