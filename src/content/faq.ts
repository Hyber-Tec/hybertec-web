/**
 * Copy for /faq/. Answers are plain text; write links as [label](/path/) and
 * they render as links (and as plain text in the search-engine data).
 */
export type Faq = { q: string; a: string };

export const faqIntro = {
  title: ["Common questions."],
};

export const faqGroups: { title: string; items: Faq[] }[] = [
  {
    title: "Cost and timing",
    items: [
      {
        q: "How much does a project cost?",
        a: "It depends on the scope: the number of pages or screens, the features, the integrations and the platforms. After a free discovery call, we send a fixed, itemized price. Each part is priced separately, so you can trim or phase anything before we start.",
      },
      {
        q: "How long does a project take?",
        a: "A landing page usually takes 1–2 weeks, a business website 2–4 weeks, a web app or portal 6–12 weeks, and a mobile app or full platform 8–20 weeks. Your proposal includes a dated timeline. See [how a project runs](/process/).",
      },
    ],
  },
  {
    title: "What we build",
    items: [
      {
        q: "Do you build apps for both iOS and Android?",
        a: "Yes. We build cross-platform apps and handle the App Store and Google Play submission and review. We also build desktop software for Windows, macOS and Linux.",
      },
      {
        q: "Can you work on our existing website or app?",
        a: "Yes. We start with a short technical review, then fix, extend or rebuild it in phases, whichever makes the most sense for your budget.",
      },
      {
        q: "Do you work with agencies and freelancers?",
        a: "Yes, it's one of our core services. We work under NDA, deliver unbranded work, use your tools and write updates you can pass on to your client.",
      },
    ],
  },
  {
    title: "Working together",
    items: [
      {
        q: "Will I work with the people building it?",
        a: "Yes. There's no account manager in between. You talk directly with the designers and engineers on your project, in a shared channel and in regular demos.",
      },
      {
        q: "Do you sign NDAs?",
        a: "Yes, before the first detailed conversation if you like. Your idea, data and code stay confidential.",
      },
      {
        q: "Do you work with clients remotely?",
        a: "Yes. We work with clients across the US. Projects run on video calls, a shared channel and regular demos, and we meet in person when it helps.",
      },
    ],
  },
  {
    title: "Ownership and support",
    items: [
      {
        q: "Who owns the code and designs?",
        a: "You do. On custom projects, the code, designs and content are yours, and we set up repositories, domains, hosting and app store accounts in your name. If you ever move on, you take everything with you. Your agreement spells this out.",
      },
      {
        q: "What happens after launch?",
        a: "Each launch includes a period for fixes, as set out in your agreement. After that, you can keep us on a monthly plan for updates, monitoring and new features, or take over yourself with full handoff documentation.",
      },
    ],
  },
];

/** `[label](href)` → `label`, for structured data. */
export function plainText(text: string) {
  return text.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, "$1");
}
