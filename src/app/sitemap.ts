import type { MetadataRoute } from "next";

import { projects } from "@/content/projects";
import { legalNav, site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const legal = legalNav.map((item) => item.href);
  const routes = ["/", "/work/", "/contact/", ...projects.map((project) => `/work/${project.slug}/`), ...legal];
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : route === "/work/" ? 0.8 : legal.includes(route) ? 0.3 : 0.6,
  }));
}
