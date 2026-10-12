import type { MetadataRoute } from "next";

import { projects } from "@/content/projects";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/work/", "/contact/", ...projects.map((project) => `/work/${project.slug}/`)];
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : route === "/work/" ? 0.8 : 0.6,
  }));
}
