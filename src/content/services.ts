import type { IconType } from "react-icons";
import { LuLayers, LuLayoutDashboard, LuMonitor, LuRocket, LuSmartphone, LuUsers } from "react-icons/lu";

export type Service = {
  /** Anchor on the services page: /services/#<slug> */
  slug: string;
  title: string;
  /** One line for the homepage. */
  short: string;
  /** Two or three sentences for the services page. */
  summary: string;
  /** What the client gets. */
  deliverables: string[];
  /** Slug of a project in content/projects.ts shown as an example. */
  example?: string;
  icon: IconType;
};

/** The six services HyberTec offers, in the order the site shows them. */
export const services: Service[] = [
  {
    slug: "websites",
    title: "Business websites",
    short: "Clear, fast websites that explain what you do and bring in inquiries.",
    summary:
      "A website that explains what you do, loads quickly and makes it easy to get in touch. We plan the pages with you, design each one and set the site up so your team can edit the content.",
    deliverables: ["Custom design", "Content your team can edit", "SEO and analytics setup", "Fast, accessible pages"],
    example: "jsong-realty",
    icon: LuMonitor,
  },
  {
    slug: "custom-software",
    title: "Custom software",
    short: "Portals, dashboards and internal tools that replace spreadsheets and manual work.",
    summary:
      "Client portals, admin dashboards and internal tools built around the way your team already works. The goal is less copying between spreadsheets, fewer emails back and forth and fewer manual steps.",
    deliverables: ["Client and partner portals", "Admin dashboards", "Workflow automation", "Role-based access"],
    example: "takeoffprime",
    icon: LuLayoutDashboard,
  },
  {
    slug: "crm",
    title: "CRMs",
    short: "Customer records, pipelines, quotes and reports, set up around how you sell.",
    summary:
      "A CRM shaped around your sales process instead of a generic one. Customer records, pipelines, quotes, invoices and reports in one place, with the right access for each role.",
    deliverables: ["Sales pipelines", "Customer database", "Quotes and invoicing", "Reporting dashboards"],
    example: "hybercrm",
    icon: LuUsers,
  },
  {
    slug: "mobile-apps",
    title: "iOS and Android apps",
    short: "One codebase for iPhone and Android, released on the App Store and Google Play.",
    summary:
      "Apps for iPhone and Android built from one codebase, so both stay in step. We handle the App Store and Google Play submission and review.",
    deliverables: ["iOS and Android builds", "Push notifications", "Offline support", "Store submission"],
    icon: LuSmartphone,
  },
  {
    slug: "web-apps",
    title: "Web apps and SaaS",
    short: "Products people sign in to and pay for, with an admin side for you.",
    summary:
      "Software you sell or run online. We build the accounts, subscriptions, data model and admin tools, starting with a first version you can put in front of customers.",
    deliverables: ["A first version to launch", "Sign-in and subscriptions", "Data model and APIs", "Product analytics"],
    example: "hg-profit-options",
    icon: LuRocket,
  },
  {
    slug: "overflow",
    title: "Freelance overflow support",
    short: "Extra design and development capacity for agencies and freelancers.",
    summary:
      "When your own pipeline is full, we take on design and development work and deliver it to your standard. We can work under your brand, in your tools, with updates you can forward to your client.",
    deliverables: ["White-label delivery", "Design and development", "Your tools and workflow", "Clear written updates"],
    icon: LuLayers,
  },
];

/** Work that comes up inside most projects. */
export const capabilities = [
  { title: "Product and UI design", body: "User flows, wireframes, final screens and a clickable prototype before any code is written." },
  { title: "Integrations and APIs", body: "Calendars, email, accounting and other services connected so data moves on its own." },
  { title: "Payments and e-commerce", body: "Checkout, subscriptions and invoicing with Stripe, and product catalogs when you sell online." },
  { title: "Booking and scheduling", body: "Online booking, calendar sync, reminders and availability rules." },
  { title: "Data and reporting", body: "Dashboards, scheduled reports and exports from the data you already collect." },
  { title: "AI features", body: "Drafting text, pulling data out of documents and search, where they save your team time." },
  { title: "Desktop apps", body: "Windows, macOS and Linux apps for large files, offline work or local hardware." },
  { title: "SEO and performance", body: "Technical SEO, page speed and accessibility checks." },
  { title: "Hosting and maintenance", body: "Deployment, backups, monitoring, updates and fixes after launch." },
];

export const engagements = [
  {
    title: "Fixed-scope project",
    lead: "A defined website, app or platform.",
    body: "One price, one timeline and an itemized proposal, agreed before work starts. If you want to add something later, we quote it before we build it.",
    bestFor: "New websites, first product versions, client portals, internal tools",
    includes: ["Discovery and scope", "Design and engineering", "Launch and handover", "A fix period after launch"],
  },
  {
    title: "Ongoing partnership",
    lead: "A team for software that keeps changing.",
    body: "A set amount of design and engineering time each month. You set the priorities, and we plan, build and release with regular demos.",
    bestFor: "SaaS products, CRMs and internal platforms that keep growing",
    includes: ["Monthly planning", "Regular releases", "Priority support", "Scale up, down or pause"],
  },
  {
    title: "Overflow and white-label",
    lead: "Extra hands when your pipeline is full.",
    body: "We work inside your process and deliver under your brand. Your client deals with you, and you get a dependable team behind the work.",
    bestFor: "Agencies, freelancers and in-house teams at capacity",
    includes: ["NDA by default", "Your tools and workflow", "Client-ready updates", "Builds from your designs"],
  },
];

export const engagementNote =
  "Every engagement starts with a free call. Before any work begins, you get a written proposal with the scope and the price.";

/** Copy for the top of /services/. */
export const servicesIntro = {
  title: ["What we build."],
  description:
    "Six kinds of work, all designed, built and supported in-house. Most projects combine a few of them, and the same team stays with you after launch.",
  metaDescription:
    "Business websites, custom software, CRMs, iOS and Android apps, web apps and SaaS products, and overflow support for agencies, from the HyberTec software studio.",
};
