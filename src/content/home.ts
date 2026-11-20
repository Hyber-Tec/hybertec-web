/**
 * Homepage copy. The homepage is a short overview: hero, a taste of the
 * services, a few projects and a way into the other pages. Keep claims
 * factual: anything here is read by prospective clients as a promise.
 */
export const hero = {
  eyebrow: "Design and engineering studio",
  /** Lines render in order; a muted line renders in the softer grey. */
  headline: [{ text: "Websites, apps and" }, { text: "custom software" }, { text: "for growing businesses.", muted: true }],
  description:
    "One team designs, builds and supports your project. You work with the same people from the first call to long after launch.",
  trust: ["Reply within 1 business day", "NDA on request", "Fixed-price proposals"],
};

export const homeServices = {
  title: "What we build",
  description: "Every project is designed, built and supported by the same team.",
};

export const homeWork = {
  title: "Selected work",
  description: "A few recent projects. Our team designed and built each one.",
};

/** The closing panel on most pages. */
export const callToAction = {
  eyebrow: "Start a project",
  title: "Have a project in mind?",
  description: "Tell us what you need. We reply within one business day, and the first call is free.",
  /** "Before you get in touch" links into the other pages. */
  links: [
    { label: "How a project runs", href: "/process/" },
    { label: "About the studio", href: "/studio/" },
    { label: "Common questions", href: "/faq/" },
    { label: "Talk to a founder", href: "/contact/#founders" },
  ],
};
