import type { MetadataRoute } from "next";

import { projects } from "@/content/projects";
import { legalNav, mainNav, site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const legal = legalNav.map((item) => item.href);
  const pages = mainNav.map((item) => item.href);
  const caseStudies = projects.map((project) => `/work/${project.slug}/`);
  const routes = ["/", ...pages, ...caseStudies, ...legal];
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : pages.includes(route) ? 0.8 : legal.includes(route) ? 0.3 : 0.6,
  }));
}
