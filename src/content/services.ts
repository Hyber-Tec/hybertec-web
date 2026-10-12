import type { IconType } from "react-icons";
import {
  LuBot,
  LuCalendarCheck,
  LuChartColumn,
  LuCloud,
  LuCode,
  LuGauge,
  LuLayers,
  LuLayoutDashboard,
  LuLifeBuoy,
  LuMonitor,
  LuPenTool,
  LuPlug,
  LuRocket,
  LuShoppingBag,
  LuSmartphone,
  LuUsers,
} from "react-icons/lu";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  deliverables: string[];
  icon: IconType;
};

export const services: Service[] = [
  {
    slug: "websites",
    title: "Business websites",
    summary:
      "Modern marketing sites for businesses that need to look credible, explain their offer clearly, and convert more visitors into leads.",
    deliverables: ["Brand-grade design", "CMS you can edit", "SEO & analytics setup", "Sub-second page loads"],
    icon: LuMonitor,
  },
  {
    slug: "custom-software",
    title: "Custom software",
    summary:
      "Client portals, internal dashboards, intake workflows, and operational tools that replace spreadsheets and cut the manual back-and-forth.",
    deliverables: ["Client & partner portals", "Admin dashboards", "Workflow automation", "Role-based access"],
    icon: LuLayoutDashboard,
  },
  {
    slug: "overflow",
    title: "Freelance overflow support",
    summary:
      "A reliable execution partner when requests keep piling up — we take on design and development work and deliver it to your standard, under your brand if needed.",
    deliverables: ["White-label delivery", "Design & development", "Fast turnaround", "Clear async updates"],
    icon: LuLayers,
  },
  {
    slug: "crm",
    title: "CRM & business systems",
    summary:
      "Pipelines, customer records, quoting, and reporting shaped around how your team actually sells — not how an off-the-shelf tool assumes you do.",
    deliverables: ["Sales pipelines", "Customer database", "Quotes & invoicing", "Reporting dashboards"],
    icon: LuUsers,
  },
  {
    slug: "mobile-apps",
    title: "iOS & Android apps",
    summary:
      "Native-quality mobile apps from a single codebase, designed for real-world use and shipped through the App Store and Google Play.",
    deliverables: ["iOS & Android builds", "Push notifications", "Offline-ready data", "Store submission"],
    icon: LuSmartphone,
  },
  {
    slug: "web-apps",
    title: "Web apps & SaaS products",
    summary:
      "From MVP to multi-tenant platform: authentication, billing, data models, and an interface people enjoy using every day.",
    deliverables: ["MVP in weeks", "Auth & subscriptions", "Scalable data models", "Product analytics"],
    icon: LuRocket,
  },
  {
    slug: "desktop-apps",
    title: "Desktop applications",
    summary:
      "Fast, local-first tools for Windows, macOS, and Linux when your workflow needs heavy files, offline work, or hardware access.",
    deliverables: ["Cross-platform builds", "Local-first storage", "Auto-updates", "Installer & signing"],
    icon: LuCode,
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    summary:
      "Storefronts and checkout flows built to sell — product catalogs, payments, inventory, and the integrations behind them.",
    deliverables: ["Custom storefronts", "Stripe & payments", "Inventory sync", "Conversion tuning"],
    icon: LuShoppingBag,
  },
  {
    slug: "design",
    title: "UI/UX & product design",
    summary:
      "Research-backed interface design, design systems, and interactive prototypes that make complex products feel simple.",
    deliverables: ["UX flows & wireframes", "High-fidelity UI", "Design systems", "Clickable prototypes"],
    icon: LuPenTool,
  },
  {
    slug: "ai-automation",
    title: "AI & automation",
    summary:
      "Practical AI features and automations — document processing, assistants, smart search, and workflows that run themselves.",
    deliverables: ["LLM integrations", "Document extraction", "Smart search", "Workflow bots"],
    icon: LuBot,
  },
  {
    slug: "integrations",
    title: "APIs & integrations",
    summary:
      "We connect the tools you already use — payments, calendars, email, accounting, and third-party APIs — into one reliable system.",
    deliverables: ["REST & webhook APIs", "Third-party integrations", "Data migrations", "Sync jobs"],
    icon: LuPlug,
  },
  {
    slug: "cloud",
    title: "Cloud, hosting & DevOps",
    summary:
      "Secure, observable infrastructure with automated deployments, backups, and monitoring so launches are boring in the best way.",
    deliverables: ["CI/CD pipelines", "Cloud hosting", "Backups & monitoring", "Security hardening"],
    icon: LuCloud,
  },
  {
    slug: "data-reporting",
    title: "Data & reporting",
    summary:
      "Dashboards, scheduled reports and data pipelines that turn the numbers you already collect into decisions your team can act on.",
    deliverables: ["KPI dashboards", "Automated reports", "Data pipelines", "Exports & APIs"],
    icon: LuChartColumn,
  },
  {
    slug: "booking-scheduling",
    title: "Booking & scheduling",
    summary:
      "Appointment booking, calendars, reminders and availability rules built into your website, portal or app — synced with the tools you use.",
    deliverables: ["Online booking", "Calendar sync", "Reminders", "Availability rules"],
    icon: LuCalendarCheck,
  },
  {
    slug: "seo-performance",
    title: "SEO & performance",
    summary:
      "Technical SEO, Core Web Vitals, and accessibility audits that make your site faster, easier to find, and usable by everyone.",
    deliverables: ["Core Web Vitals", "Technical SEO", "Accessibility (WCAG)", "Analytics & tracking"],
    icon: LuGauge,
  },
  {
    slug: "support",
    title: "Maintenance & support",
    summary:
      "Ongoing updates, new features, and dependable support after launch — one team that already knows your product inside out.",
    deliverables: ["Monthly improvements", "Bug fixes & updates", "Uptime monitoring", "Priority response"],
    icon: LuLifeBuoy,
  },
];

