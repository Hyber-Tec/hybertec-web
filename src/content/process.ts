/**
 * Copy for /process/. Durations are typical ranges; each proposal has its
 * own dated timeline.
 */
export const processIntro = {
  title: ["How a project runs."],
  description:
    "Five steps, in the same order every time. You always know what stage your project is in, what comes next and what it costs.",
};

export const steps = [
  {
    title: "Discover",
    duration: "3–7 days",
    summary:
      "We learn how your business works, who will use the software and what it has to do. Then we write down what “done” means and price it.",
    deliverables: ["Discovery call", "Written scope", "Fixed-price proposal"],
  },
  {
    title: "Design",
    duration: "1–3 weeks",
    summary:
      "We map the main flows, design each screen and build a clickable prototype you can try, and show to real users, before we write any code.",
    deliverables: ["User flows and wireframes", "Final screen designs", "Clickable prototype"],
  },
  {
    title: "Build",
    duration: "2–12 weeks",
    summary:
      "We build in weekly cycles. You get a staging link in the first week and a demo of working software every week after that.",
    deliverables: ["Weekly staging releases", "Demo recordings", "Tests on critical paths"],
  },
  {
    title: "Launch",
    duration: "3–10 days",
    summary:
      "We test, fix and ship. That includes moving your data, submitting apps to the App Store and Google Play, and training your team.",
    deliverables: ["Testing and accessibility check", "Deployment and store submission", "Handoff docs and training"],
  },
  {
    title: "Support",
    duration: "Ongoing",
    summary: "We keep your software updated, secure and backed up, and plan the next release with you.",
    deliverables: ["Monitoring and backups", "Updates and fixes", "Roadmap reviews"],
  },
];

/** What a smooth project needs from the client. */
export const clientCommitment = {
  title: "What we need from you",
  items: ["One person who can make decisions", "About an hour a week for reviews", "Feedback within two business days"],
};

/** Typical lengths by project type, also quoted in the FAQ. */
export const typicalTimelines = [
  { type: "Landing page", time: "1–2 weeks" },
  { type: "Business website", time: "2–4 weeks" },
  { type: "Web app or portal", time: "6–12 weeks" },
  { type: "Mobile app or full platform", time: "8–20 weeks" },
];

export const timelinesNote = "Your proposal includes a dated timeline, and you get a working staging link in the first week of the build.";
