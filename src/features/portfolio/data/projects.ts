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
  {
    slug: "peak-hvac",
    title: "Peak HVAC — Lead Gen Platform",
    client: "Peak HVAC Services",
    industry: "Home Services",
    year: 2025,
    description:
      "A conversion-optimized marketing site with live quoting and scheduling that tripled inbound leads in 90 days.",
    tags: ["Marketing Site", "Lead Gen", "Local SEO"],
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Resend", "Vercel"],
    hero: "/hybertec-logo-centered.jpeg",
    problem:
      "Peak HVAC relied entirely on word-of-mouth. Their old site had no clear CTA, loaded slowly on mobile, and wasn't indexed by Google for local searches.",
    solution:
      "We rebuilt from scratch on Next.js 15 with a mobile-first design, structured data for local SEO, an inline quote calculator, and automated email follow-ups via Resend.",
    results: [
      "312% increase in organic search traffic in 90 days",
      "3× increase in inbound monthly leads",
      "98 Lighthouse performance score on mobile",
      "Average quote-to-call conversion rate: 41%",
    ],
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    slug: "riverstone-realty",
    title: "Riverstone Realty — Property Portal",
    client: "Riverstone Realty Group",
    industry: "Real Estate",
    year: 2025,
    description:
      "A filterable property portal with MLS data integration, virtual tours, and a client dashboard for agents.",
    tags: ["Web App", "Dashboard", "API Integration"],
    stack: ["Next.js 15", "Prisma", "Supabase", "TypeScript", "Mapbox"],
    hero: "/hybertec-logo-centered.jpeg",
    problem:
      "Agents were manually sending spreadsheets of available listings to clients. There was no way for buyers to search, save, or schedule viewings online.",
    solution:
      "Built a multi-tenant property portal with real-time MLS feed integration, interactive Mapbox filtering, saved searches, and an agent dashboard to manage showings.",
    results: [
      "Agents save ~8 hours/week on manual outreach",
      "Average time-on-site increased from 1:12 to 4:38",
      "14 properties closed within 30 days of portal launch",
      "100% of active agents migrated from spreadsheets in week 1",
    ],
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    slug: "retail-commerce",
    title: "Retail Commerce — E-Commerce Rebuild",
    client: "Retail Commerce Group",
    industry: "Retail",
    year: 2024,
    description:
      "A full brand refresh and e-commerce build for a retail business expanding beyond local sales.",
    tags: ["E-Commerce", "Branding", "SEO"],
    stack: ["Next.js 15", "Shopify Storefront API", "TypeScript", "Tailwind CSS"],
    hero: "/hybertec-logo-centered.jpeg",
    problem:
      "The business was selling mostly through local channels. Their online presence was a basic template site with weak product presentation and no SEO strategy.",
    solution:
      "Delivered a custom Next.js storefront on top of Shopify's headless API, with a content strategy, refreshed brand system, and repeat-purchase flows.",
    results: [
      "Online revenue went from $0 to $18K/month in 4 months",
      "Repeat-purchase flows now account for 60% of monthly revenue",
      "Launch campaign drove 3K new visitors",
      "Cart abandonment rate reduced from 78% to 41%",
    ],
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    slug: "lawson-consulting",
    title: "Lawson Consulting — Authority Site",
    client: "Lawson Business Consulting",
    industry: "Professional Services",
    year: 2024,
    description:
      "A high-authority content platform with gated lead magnets that established the founder as a regional thought leader.",
    tags: ["Marketing Site", "Content Strategy", "Lead Magnets"],
    stack: ["Next.js 15", "MDX", "ConvertKit", "Tailwind CSS", "Vercel"],
    hero: "/hybertec-logo-centered.jpeg",
    problem:
      "The founder had 20+ years of expertise but no digital footprint. They were losing pitches to younger firms with stronger online presence.",
    solution:
      "Built an authority-focused content site with a resource library, gated PDF guides (integrated with ConvertKit), and SEO-optimized case study articles.",
    results: [
      "Email list grew from 0 to 1,200 subscribers in 6 months",
      "Ranked page 1 for 3 target keywords within 90 days",
      "2 enterprise contracts sourced directly from organic traffic",
      "Speaking invitations at 2 regional business conferences",
    ],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
