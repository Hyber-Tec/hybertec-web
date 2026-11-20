/**
 * Copy for /contact/ and the options in the contact form. The form sends the
 * option text as it appears here, so changing a label changes what arrives
 * in the inbox.
 */
export const contactIntro = {
  eyebrow: "Contact",
  title: ["Start a", "project."],
  description:
    "Tell us about your website, software or app. We read every message ourselves and reply within one business day.",
};

export const nextSteps = [
  "We reply within one business day, usually with a few questions.",
  "We set up a free 30-minute call to talk through your goals.",
  "You get a written proposal with the scope, timeline and a fixed price.",
  "Once you approve it, we start, and you see progress in the first week.",
];

export const projectTypes = ["Business website", "Custom software", "CRM / portal", "Mobile app", "Overflow support", "Something else"];

export const timelines = ["As soon as possible", "Within 1–3 months", "In 3–6 months", "Just exploring"];

/**
 * The founders' business cards on /contact/#founders. Card images come from the
 * print files (4200×2400 PNG, resized to 1680×960 WebP) in public/team/, with a
 * vCard per person for "Save contact". Keep the details in step with the cards.
 */
export const foundersIntro = {
  title: ["Talk to a founder"],
  description: "Prefer to call or email a person? Reach either of us directly, or save a card to your phone.",
};

export const founders = [
  {
    name: "Goo Choi",
    title: "Chairman",
    phone: "+1 516 592 8973",
    tel: "+15165928973",
    email: "goo.choi@hybertec.com",
    card: "/team/goo-choi-card.webp",
    vcard: "/team/goo-choi.vcf",
  },
  {
    name: "David Kim",
    title: "Chairman",
    phone: "+1 470 846 0783",
    tel: "+14708460783",
    email: "david.kim@hybertec.com",
    card: "/team/david-kim-card.webp",
    vcard: "/team/david-kim.vcf",
  },
];

/** The logo side, shared by both cards. */
export const cardBack = "/team/card-back.webp";
