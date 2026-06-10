import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "takeoffprime",
    title: "TakeOffPrime — Construction Takeoff App",
    client: "TakeOffPrime",
    industry: "Construction",
    year: 2026,
    description:
      "Product site and desktop app for construction takeoff — drop a PDF, pick a symbol, and get a count you can drop straight into your bid.",
    tags: ["Product Site", "Desktop App", "Construction Tech"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    hero: "/takeoffprime-hero.jpeg",
    problem:
      "Estimators were counting symbols on construction PDFs by hand — slow, error-prone work that ate days per bid and didn't scale across multi-sheet plan sets.",
    solution:
      "A desktop takeoff tool that finds every instance of a selected symbol across all sheets, reads tags, and produces bid-ready counts — fully local, with a product site built to convert estimators into downloads.",
    results: [
      "98% count accuracy on symbol detection",
      "20× faster than manual counting",
      "Zero cloud upload — plans never leave the estimator's machine",
      "Ships on Windows, macOS, and Linux",
    ],
    liveUrl: "https://takeoffprime.com",
    featured: true,
  },
  {
    slug: "jsong-realty",
    title: "JSong Realty — Agent Brand Site",
    client: "JSong Realty (Keller Williams)",
    industry: "Real Estate",
    year: 2026,
    description:
      "A luxury personal-brand site for an Atlanta REALTOR® with listing search, featured properties, and neighborhood-focused content.",
    tags: ["Marketing Site", "Personal Brand", "Real Estate"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    hero: "/jsong-realty-hero.jpeg",
    problem:
      "An Atlanta agent competing in crowded intown and Buckhead markets needed a digital presence that matched the caliber of the homes — not another templated agent page lost among thousands.",
    solution:
      "Designed a dark-luxury brand site with an editorial hero, natural-language listing search, featured listings, client testimonials, and clear contact paths from every section.",
    results: [
      "A distinctive brand presence that stands apart from templated agent sites",
      "Natural-language search front and center in the hero",
      "Featured listings and testimonials structured for trust-building",
      "Mobile-first build for buyers browsing on the go",
    ],
    liveUrl: "https://jsongrealty.com",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
