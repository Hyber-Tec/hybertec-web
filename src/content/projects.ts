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
  /** "We …" sentence describing what HyberTec delivered — the headline of showcase cards. */
  outcome: string;
  /** Two or three sentences for cards and the case-study intro. */
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
  /** Shown in the homepage showcase, in this order. */
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
    tagline: "The all-in-one CRM for tutoring centers.",
    outcome:
      "We built and run the operating system for tutoring centers — scheduling, clock-ins, payroll and parent reports in one platform, with tutor apps on iOS and Android.",
    summary:
      "Our own vertical SaaS product. Scheduling, time clock and payroll, session logs, progress reports and portals for every role — one real-time platform that runs an entire tutoring center.",
    category: "Vertical SaaS · Education",
    kind: "web-app",
    platforms: ["web", "ios", "android"],
    year: 2026,
    url: "https://hybercrm.com/",
    demo: { label: "Open live demo", href: "https://hybercrm.com/demo" },
    services: ["Product strategy", "UI/UX design", "Full-stack engineering", "Cloud & hosting"],
    stack: ["React", "TypeScript", "Vite", "Firebase"],
    highlights: [
      "Drag-and-drop live schedule with per-tutor lanes and conflict detection",
      "Kiosk time clock with PIN, and payroll by pay period with rate history",
      "Guided session logs — AI turns quick notes into clear sentences",
      "One-click progress reports with charts, drafted summaries and PDF export",
      "Separate portals for owners, tutors, parents and students with role-based access",
      "Multi-location support, white-label branding and a full audit log",
    ],
    challenge:
      "Tutoring centers juggle schedules, tutors, payroll and parent communication across disconnected tools. Hyber CRM set out to replace that patchwork with one system built around how a center actually runs.",
    approach:
      "We designed one system around the center's real day: a live schedule that prevents conflicts, a time clock that feeds payroll, and session logs that roll up into parent-ready reports — with a public demo so prospects can try it before talking to sales.",
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
    outcome:
      "We turned large architectural drawing sets into unit counts, true-scale measurements and priced proposals — in one shared browser workspace.",
    summary:
      "A browser workspace for construction estimators that turns large architectural PDF sets into unit counts, true-scale measurements and estimate proposals.",
    category: "Construction tech",
    kind: "web-app",
    platforms: ["web"],
    year: 2026,
    url: "https://takeoffprime.com/",
    services: ["UI/UX design", "Full-stack engineering", "Document processing", "Cloud & hosting"],
    stack: ["React", "TypeScript", "Vite", "Firebase"],
    highlights: [
      "Unit matrix: detect and count unit types straight from drawing sheets",
      "Measure routed lengths at true drawing scale and roll them up per drawing set",
      "Match regional pricing and sales-tax rates to produce estimate proposals",
      "Team workspaces — upload once, review the same takeoff together",
      "PDF drawing sets and Excel estimator workbooks in, Excel out",
      "Admin-approved accounts with Google or email sign-in",
    ],
    challenge:
      "Counting units and measuring runs by hand across large drawing sets is slow, error-prone work that holds up every bid. The goal was to move the entire takeoff into one fast, shared workspace.",
    approach:
      "We built a focused workspace that reads the drawing set, counts and measures at scale, and carries the numbers straight into pricing and a finished proposal, so the whole estimating flow lives in one place.",
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
    outcome:
      "We built a members' platform for an options educator — live alerts, weekly strike targets, channel charts and a trading journal with CSV import.",
    summary:
      "Marketing site and invite-only member area for a trading education program — real-time alerts, strike-price targets, channel charts, a trading journal and live classes.",
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
      "Discovery-call booking funnel and complete legal pages",
    ],
    challenge:
      "Trading education depends on timely information. Members needed one place to receive alerts, study the method and track their own trades — and the program needed a front door that explains it clearly.",
    approach:
      "We unified the program into a single member area with a clear marketing front door: alerts, targets, charts and the journal live together, and every page funnels new visitors toward a free call.",
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
    tagline: "A luxury personal brand for an Atlanta REALTOR®.",
    outcome: "We gave an Atlanta REALTOR® a brand presence that reads like an editorial, not a template.",
    summary:
      "An editorial, dark-luxury website for Joshua Song of Keller Williams Realty — featured listings, neighborhood expertise and a consultation path from every section.",
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
      "Value pillars, agent story and client reviews structured for trust",
      "Consultation calls-to-action and contact paths from every section",
      "Mobile-first build for buyers browsing on the go",
    ],
    challenge:
      "In crowded Intown and Buckhead markets, the brief was a presence that matches the caliber of the homes — not another templated agent page.",
    approach:
      "We created a distinctive editorial brand site with a restrained luxury palette, real typographic hierarchy and conversion paths that turn browsing buyers and sellers into consultations.",
    media: {
      desktop: "/work/jsong-realty/desktop.webp",
      mobile: "/work/jsong-realty/mobile.webp",
    },
    featured: 4,
  },
  {
    slug: "bibleprep",
    name: "Typing Bible",
    tagline: "Read the whole Bible by typing it — together.",
    outcome:
      "We built a bilingual scripture-typing platform with minister-led group studies, rankings and a community board.",
    summary:
      "A bilingual English and Korean community web app: type through Scripture verse by verse, keep one shared progress across translations, and join minister-led studies.",
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
      "The goal: make reading the whole Bible an active, shared habit for bilingual English and Korean communities.",
    approach:
      "We turned reading into an active, shared practice: typing locks in every verse, progress carries across languages, and studies and rankings keep whole communities moving together.",
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
