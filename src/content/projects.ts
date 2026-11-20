/**
 * Portfolio — every project shown on the site comes from this list.
 *
 * Adding a project:
 *  1. Add an entry below (copy an existing one). `slug` becomes the URL: /work/<slug>/
 *  2. Put screenshots in public/work/<slug>/ — or capture them automatically from the
 *     live site with `npm run capture -- --only <slug>` (see README → Portfolio).
 *       desktop.webp  → shown in a browser window   (capture: 1440×900 @2x)
 *       mobile.webp   → shown in a phone frame      (capture: 390×844 @3x)
 *  3. Mobile apps: set `kind: "mobile-app"`, list `platforms: ["ios", "android"]`, add store
 *     links, and give 1–3 phone screenshots in `media.screens` (390×844 or any 9:19.5 image).
 *
 * This file has no imports on purpose so the capture script can read it directly.
 */

export type Platform = "web" | "ios" | "android" | "desktop";
export type ProjectKind = "website" | "web-app" | "mobile-app" | "desktop-app";

export type ProjectImage = {
  src: string;
  alt: string;
  /** How the image is presented: inside a browser window, a phone, or as-is. */
  frame: "browser" | "phone" | "none";
};

export type Project = {
  slug: string;
  name: string;
  /** One line under the name on cards. */
  tagline: string;
  /** One or two sentences for the work page and the case-study intro. */
  summary: string;
  /** Industry or product category, e.g. "Construction tech". */
  category: string;
  kind: ProjectKind;
  platforms: Platform[];
  year: number;
  /** Live website or web app. */
  url?: string;
  /** Optional extra link, e.g. a public demo. */
  demo?: { label: string; href: string };
  appStoreUrl?: string;
  playStoreUrl?: string;
  /** What HyberTec delivered. */
  services: string[];
  stack: string[];
  /** Feature bullets for the case-study page. */
  highlights: string[];
  challenge: string;
  approach: string;
  media: {
    /** Browser-window screenshot (web projects). */
    desktop?: string;
    /** Phone screenshot of the responsive site or app. */
    mobile?: string;
    /** Additional phone screens for mobile apps (shown side by side). */
    screens?: string[];
    gallery?: ProjectImage[];
  };
  /** Shown on the homepage, in this order (the first three). */
  featured?: number;
  /** Options for `npm run capture`. Omit to capture `url` with defaults. */
  capture?: {
    url?: string;
    colorScheme?: "dark" | "light";
    /** CSS selectors clicked before capture (e.g. a theme toggle). */
    click?: string[];
    /** CSS selectors hidden before capture (e.g. floating chat widgets). */
    hide?: string[];
    /** Set false when the live site's mobile layout is not presentable. */
    mobile?: boolean;
  };
};

export const projects: Project[] = [
  {
    slug: "hybercrm",
    name: "Hyber CRM",
    tagline: "A CRM built for tutoring centers.",
    summary:
      "Our own SaaS product. Scheduling, time clock and payroll, session logs, progress reports and a portal for every role, in one real-time platform for tutoring centers.",
    category: "Vertical SaaS · Education",
    kind: "web-app",
    platforms: ["web", "ios", "android"],
    year: 2026,
    url: "https://hybercrm.com/",
    demo: { label: "Open live demo", href: "https://hybercrm.com/demo" },
    services: ["Product strategy", "UI and UX design", "Full-stack engineering", "Hosting"],
    stack: ["React", "TypeScript", "Vite", "Firebase"],
    highlights: [
      "Drag-and-drop live schedule with a lane per tutor and conflict detection",
      "Kiosk time clock with PIN sign-in, and payroll by pay period with rate history",
      "Guided session logs, with AI turning quick notes into clear sentences",
      "One-click progress reports with charts, drafted summaries and PDF export",
      "Separate portals for owners, tutors, parents and students, with role-based access",
      "Multiple locations, white-label branding and a full audit log",
    ],
    challenge:
      "Tutoring centers usually run on a patchwork of tools: one for scheduling, another for payroll, spreadsheets for session notes and email for parents. We wanted one system built around how a center actually runs.",
    approach:
      "We designed the product around a center's day. The live schedule prevents double-booking, the time clock feeds payroll, and session logs roll up into reports parents can read. A public demo lets prospects try it before they talk to anyone.",
    media: {
      desktop: "/work/hybercrm/desktop.webp",
      mobile: "/work/hybercrm/mobile.webp",
      gallery: [{ src: "/work/hybercrm/landing.webp", alt: "Hyber CRM marketing site", frame: "browser" }],
    },
    featured: 1,
    capture: { url: "https://hybercrm.com/demo", hide: ["#root > .fixed.bottom-3"] },
  },
  {
    slug: "takeoffprime",
    name: "TakeOffPrime",
    tagline: "From drawing sets to finished estimates.",
    summary:
      "A browser workspace for construction estimators. It turns large architectural PDF sets into unit counts, true-scale measurements and estimate proposals.",
    category: "Construction tech",
    kind: "web-app",
    platforms: ["web"],
    year: 2026,
    url: "https://takeoffprime.com/",
    services: ["UI and UX design", "Full-stack engineering", "Document processing", "Hosting"],
    stack: ["React", "TypeScript", "Vite", "Firebase"],
    highlights: [
      "Unit matrix that detects and counts unit types straight from the drawing sheets",
      "Routed lengths measured at true drawing scale and totaled per drawing set",
      "Regional pricing and sales-tax rates matched to produce estimate proposals",
      "Team workspaces: upload a set once and review the same takeoff together",
      "PDF drawing sets and Excel estimator workbooks in, Excel out",
      "Admin-approved accounts with Google or email sign-in",
    ],
    challenge:
      "Counting units and measuring runs by hand across a large drawing set is slow and error-prone, and it holds up every bid. The estimators needed the whole takeoff in one shared place.",
    approach:
      "We built one workspace that reads the drawing set, counts and measures at scale, and carries the numbers into pricing and a finished proposal.",
    media: {
      desktop: "/work/takeoffprime/desktop.webp",
      gallery: [{ src: "/work/takeoffprime/desktop-light.webp", alt: "TakeOffPrime in light mode", frame: "browser" }],
    },
    featured: 2,
    capture: { click: ['button[aria-label="Toggle color theme"]'], mobile: false },
  },
  {
    slug: "hg-profit-options",
    name: "HG Profit Options",
    tagline: "A membership platform for options-trading education.",
    summary:
      "A public site and an invite-only member area for a trading education program, with real-time alerts, strike-price targets, channel charts, a trading journal and live classes.",
    category: "Fintech · Education",
    kind: "web-app",
    platforms: ["web"],
    year: 2026,
    url: "https://hgprofitoptions.web.app/",
    services: ["Brand & UI design", "Full-stack engineering", "Member portal", "Notifications"],
    stack: ["Next.js", "TypeScript", "Firebase"],
    highlights: [
      "Real-time buy and sell alerts delivered in-app, in the browser and by email",
      "Member dashboard with weekly strike-price targets and a channel ladder chart",
      "Trading journal with manual entry and CSV import, win rate and streaks",
      "Live class schedule, classroom community and a files library",
      "Booking flow for free discovery calls, and complete legal pages",
    ],
    challenge:
      "Trading education depends on timely information. Members needed one place to get alerts, study the method and track their own trades, and the program needed a public site that explains it clearly.",
    approach:
      "We put alerts, targets, charts and the journal into a single member area, and built a public site where every page leads to a free call.",
    media: {
      desktop: "/work/hg-profit-options/desktop.webp",
      mobile: "/work/hg-profit-options/mobile.webp",
      gallery: [{ src: "/work/hg-profit-options/dashboard.webp", alt: "HG Profit Options member dashboard", frame: "none" }],
    },
    featured: 3,
    capture: { colorScheme: "dark" },
  },
  {
    slug: "jsong-realty",
    name: "JSong Realty",
    tagline: "A personal brand website for an Atlanta REALTOR®.",
    summary:
      "An editorial website for Joshua Song of Keller Williams Realty, with featured listings, neighborhood knowledge and a way to book a consultation from every section.",
    category: "Real estate",
    kind: "website",
    platforms: ["web"],
    year: 2026,
    url: "https://jsongrealty.com/",
    services: ["Brand direction", "Web design", "Front-end engineering", "SEO"],
    stack: ["Astro", "React", "TypeScript"],
    highlights: [
      "Editorial hero with serif display typography and an agent badge card",
      "Featured listings with price, specs and status, plus a full listings page",
      "Agent story, value points and client reviews",
      "Consultation and contact links in every section",
      "Built mobile-first for buyers browsing on their phones",
    ],
    challenge:
      "Intown and Buckhead are crowded markets. The site had to match the homes Joshua sells and stand apart from the standard agent page.",
    approach:
      "We built an editorial site with a restrained palette, serif display type and a clear path to a consultation from every section.",
    media: {
      desktop: "/work/jsong-realty/desktop.webp",
      mobile: "/work/jsong-realty/mobile.webp",
    },
    featured: 4,
  },
  {
    slug: "bibleprep",
    name: "Typing Bible",
    tagline: "Read the whole Bible by typing it, together.",
    summary:
      "A bilingual English and Korean web app. Members type through Scripture verse by verse, keep one progress across translations and join studies led by ministers.",
    category: "Faith & community",
    kind: "web-app",
    platforms: ["web"],
    year: 2026,
    url: "https://bibleprep.com/",
    services: ["Product design", "Full-stack engineering", "Bilingual content", "Analytics"],
    stack: ["Next.js", "TypeScript", "Firebase"],
    highlights: [
      "Typing reader with live feedback and saved progress",
      "One shared progress across English and Korean translations",
      "Bible studies hosted by verified ministers who track member progress",
      "Public rankings by verses typed",
      "Community board for notices, testimonies and questions",
    ],
    challenge:
      "The goal was to make reading the whole Bible an active, shared habit for English- and Korean-speaking communities.",
    approach:
      "Typing each verse keeps readers engaged, progress carries across both languages, and group studies and rankings keep members reading together.",
    media: {
      desktop: "/work/bibleprep/desktop.webp",
      mobile: "/work/bibleprep/mobile.webp",
    },
    featured: 5,
  },
];

export const featuredProjects = projects
  .filter((project) => project.featured !== undefined)
  .sort((a, b) => (a.featured ?? 0) - (b.featured ?? 0));

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const platformLabel: Record<Platform, string> = {
  web: "Web",
  ios: "iOS",
  android: "Android",
  desktop: "Desktop",
};

export const kindLabel: Record<ProjectKind, string> = {
  website: "Website",
  "web-app": "Web app",
  "mobile-app": "Mobile app",
  "desktop-app": "Desktop app",
};

/** Copy for the top of /work/. */
export const workIntro = {
  title: ["Selected work."],
  description:
    "Products we designed, built and launched, from SaaS platforms and member portals to a construction estimating tool and a real estate website.",
  metaDescription:
    "Projects HyberTec designed and built: SaaS platforms, member portals, a construction estimating tool and brand websites.",
};
