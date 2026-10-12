/**
 * Homepage copy. Keep claims factual — anything here is read by prospective
 * clients as a promise.
 */
export const hero = {
  badge: "Now booking new projects",
  /** Second sentence renders in the muted tone. */
  headline: [
    { text: "Software that runs" },
    { text: "your business." },
    { text: "Websites that", muted: true },
    { text: "grow it.", muted: true },
  ],
  description:
    "HyberTec designs and engineers business websites, custom platforms, CRMs and iOS & Android apps — from the first sketch to production, under one roof.",
  trust: ["Replies within 1 business day", "NDA on request", "Fixed-price proposals"],
  facts: ["Design & engineering in-house", "Web · iOS · Android · Desktop", "5 products live in production", "Based in Georgia, serving the US"],
};

export const studio = {
  statement:
    "HyberTec is a software studio for businesses that refuse to settle for templates. We design and engineer the websites, platforms and apps that make companies faster, sharper and easier to buy from — and we stay to keep them that way.",
  emphasis: ["software", "studio", "templates", "faster", "sharper", "stay"],
  stats: [
    { value: 5, suffix: "", label: "Products live in production" },
    { value: 3, suffix: "", label: "Platforms shipped — web, iOS and Android" },
    { value: 1, suffix: " day", label: "To reply to every new inquiry" },
    { value: 0, suffix: "", label: "Templates — every build starts from a blank canvas" },
  ],
  principles: [
    {
      title: "One accountable team",
      body: "Strategy, design, engineering and support under one roof, so nothing gets lost between hand-offs.",
    },
    {
      title: "Clear scope, no surprises",
      body: "A written scope, timeline and price before work starts. Changes are agreed up front — never slipped onto an invoice.",
    },
    {
      title: "Quality you can measure",
      body: "Fast load times, accessible interfaces and clean, documented code. Performance is a requirement, not a polish step.",
    },
    {
      title: "Visible progress",
      body: "Regular demos of working software and short written updates, so you always know what shipped and what's next.",
    },
    {
      title: "Modern, proven stack",
      body: "TypeScript, React, Next.js, native mobile toolchains and managed cloud — chosen for longevity, not novelty.",
    },
    {
      title: "We stay after launch",
      body: "Monitoring, improvements and support from the same people who built it and know it inside out.",
    },
  ],
};

export const process = [
  {
    title: "Discover",
    summary:
      "We learn the business, the users and the constraints, then define exactly what “done” means — before anyone writes code.",
    deliverables: ["Discovery call", "Scope document", "Fixed-price proposal"],
    duration: "3–7 days",
  },
  {
    title: "Design",
    summary:
      "We map the flows and design every screen, then assemble a clickable prototype you can test with real people.",
    deliverables: ["User flows & wireframes", "High-fidelity UI", "Clickable prototype"],
    duration: "1–3 weeks",
  },
  {
    title: "Build",
    summary:
      "We engineer in weekly sprints, with a live staging link from week one and a demo of working software every week.",
    deliverables: ["Weekly staging releases", "Demo recordings", "Tests on critical paths"],
    duration: "2–12 weeks",
  },
  {
    title: "Launch",
    summary:
      "We harden, test and ship — including data migration, App Store and Google Play submission, and training for your team.",
    deliverables: ["QA & accessibility pass", "Deployment & store submission", "Handoff docs & training"],
    duration: "3–10 days",
  },
  {
    title: "Support & grow",
    summary:
      "We keep it fast, secure and improving, review the analytics with you and plan the next release together.",
    deliverables: ["Monitoring & backups", "Updates & fixes", "Roadmap reviews"],
    duration: "Ongoing",
  },
];

/** What a smooth project needs from the client — shown under the process. */
export const clientCommitment =
  "From you: one decision-maker, about an hour a week for reviews, and feedback within two business days.";

export const engagements = [
  {
    title: "Fixed-scope project",
    lead: "A defined website, app or platform.",
    body: "One fixed price, one timeline and one itemized proposal — agreed before any code is written. Change requests are quoted before they're built, never billed after.",
    bestFor: "New websites, MVPs, client portals, internal tools",
    includes: ["Discovery & scope", "Design & engineering", "Launch & handover", "Post-launch warranty"],
  },
  {
    title: "Product partnership",
    lead: "An ongoing team for products that keep evolving.",
    body: "A dedicated monthly allocation of design and engineering time. Your roadmap, our team, regular demos and priority response.",
    bestFor: "Growing SaaS, CRMs and operational platforms",
    includes: ["Monthly planning", "Continuous releases", "Priority support", "Scale up, down or pause"],
    highlight: true,
  },
  {
    title: "Overflow & white-label",
    lead: "Extra hands when the work piles up.",
    body: "We plug into your agency's process and deliver under your brand — invisible to your client, accountable to you.",
    bestFor: "Agencies, freelancers and in-house teams at capacity",
    includes: ["NDA by default", "Your tools & workflow", "Client-ready updates", "Design-to-code from your files"],
  },
];

export const engagementNote =
  "Every engagement starts with a free discovery call and ends with a fixed, itemized proposal. No surprise invoices.";

export const valueLine = "We're rarely the cheapest quote. We aim to be the last one you need.";

export const industries = [
  { name: "Education & tutoring", proof: "Hyber CRM" },
  { name: "Construction tech", proof: "TakeOffPrime" },
  { name: "Finance & trading education", proof: "HG Profit Options" },
  { name: "Real estate", proof: "JSong Realty" },
  { name: "Faith & community", proof: "Typing Bible" },
  { name: "Agencies & studios", proof: "White-label delivery" },
];

export const ownProduct = {
  eyebrow: "We run our own software",
  title: "We don't just build software for clients — we operate our own.",
  body: "Hyber CRM is a HyberTec product: a live SaaS platform that tutoring centers run their entire business on. Building it taught us what it takes to keep software fast, secure and improving long after launch — and every client project benefits.",
  slug: "hybercrm",
};

export const faqs = [
  {
    q: "How much does a project cost?",
    a: "Every project is quoted as a fixed, itemized price after a free discovery call. Cost depends on scope — pages, features, integrations and platforms — so you only pay for what you actually need. The proposal shows what each part costs, so you can phase or trim anything before we start.",
  },
  {
    q: "How long will it take?",
    a: "Landing pages take 1–2 weeks, business websites 2–4 weeks, web apps and portals 6–12 weeks, and mobile apps or full platforms 8–20 weeks. You'll get a dated timeline in the proposal and a working staging link from the first week of the build.",
  },
  {
    q: "Who owns the code and designs?",
    a: "You do. On custom projects the source code, designs and content are yours, and repositories, domains, hosting and app-store accounts are set up in your name — so there's no lock-in. If you ever move on, you take everything with you.",
  },
  {
    q: "Do you build mobile apps for both iOS and Android?",
    a: "Yes. We ship cross-platform apps to both the App Store and Google Play and handle the submission and review process. We also build desktop software for Windows, macOS and Linux.",
  },
  {
    q: "Can you work on our existing website or app?",
    a: "Yes. We start with a short technical audit, then fix, extend or rebuild in phases — whichever gives you the best result for the budget.",
  },
  {
    q: "Will I talk to the people actually building it?",
    a: "Always. There's no account-manager layer: you work directly with the designers and engineers on your project, through a shared channel and regular demos.",
  },
  {
    q: "Do you work with agencies and freelancers?",
    a: "Yes — it's one of our core services. We work under NDA, deliver unbranded, use your tools and send updates you can forward to your client as your own.",
  },
  {
    q: "What happens after launch?",
    a: "Every launch includes a post-launch warranty period for fixes. After that you can keep us on a monthly partnership for updates, monitoring and new features, or take full ownership with complete handoff documentation.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes — before the first detailed conversation if you'd like. Your idea, data and code stay confidential.",
  },
  {
    q: "Where are you located?",
    a: "We're a registered Georgia LLC based in Gwinnett County, metro Atlanta. We work with clients across the US remotely, and meet in person locally when it helps.",
  },
];

export const projectTypes = ["Business website", "Custom software", "CRM / portal", "Mobile app", "Overflow support", "Something else"];

export const timelines = ["As soon as possible", "Within 1–3 months", "In 3–6 months", "Just exploring"];
