/**
 * Copy for /studio/, the about page. Keep claims factual: anything here is
 * read by prospective clients as a promise.
 */
export const studio = {
  title: ["About HyberTec."],
  intro:
    "HyberTec is an independent software studio. We design and build websites, custom software and mobile apps for businesses across the US, and we keep supporting them after launch.",
  facts: [
    { label: "Clients", value: "Across the US" },
    { label: "Team", value: "Design and engineering in-house" },
    { label: "Platforms", value: "Web, iOS and Android" },
    { label: "Replies", value: "Within 1 business day" },
  ],
};

export const principles = [
  {
    title: "One team, start to finish",
    body: "The people who scope your project also design, build and support it. There's no account manager in between, so nothing gets lost in hand-offs.",
  },
  {
    title: "Scope and price in writing",
    body: "Before work starts, you get a written scope, timeline and price. If something changes, we agree on it before we build it.",
  },
  {
    title: "Progress you can see",
    body: "You get a staging link early on and a demo of working software every week, with short written updates in between.",
  },
  {
    title: "Support after launch",
    body: "Updates, fixes and new features come from the people who built your software and already know how it works.",
  },
];

export const ownProduct = {
  eyebrow: "Our own product",
  title: "We run our own software, too.",
  body: "Hyber CRM is a HyberTec product: a SaaS platform tutoring centers use for scheduling, payroll, session logs and parent reports. Running it every day shows us what software needs after launch, and our client projects benefit from that.",
  slug: "hybercrm",
};

/** Each row links to the project's case study when `slug` is set. */
export const industries = [
  { name: "Education and tutoring", proof: "Hyber CRM", slug: "hybercrm" },
  { name: "Construction", proof: "TakeOffPrime", slug: "takeoffprime" },
  { name: "Trading education", proof: "HG Profit Options", slug: "hg-profit-options" },
  { name: "Real estate", proof: "JSong Realty", slug: "jsong-realty" },
  { name: "Faith and community", proof: "Typing Bible", slug: "bibleprep" },
  { name: "Agencies and studios", proof: "White-label work" },
];
