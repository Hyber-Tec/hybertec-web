import { site } from "./site";

/**
 * Copy for the legal pages: /terms/, /privacy/ and /refunds/.
 * Plain words and short sentences. Never put a price, an amount or a client
 * name here: prices are quoted per client, and a client's signed agreement
 * wins where it differs from these pages. Links are written [label](href).
 * Change `updated` whenever a page's text changes.
 */

/** A paragraph, or a bulleted list when it's an array. */
export type LegalBlock = string | string[];

/**
 * Starts a paragraph that is a question only the founders can answer. The
 * page shows it highlighted, and a production build refuses to publish a page
 * that still has one (components/legal-page.tsx): replace the whole paragraph
 * with the answer.
 */
export const FOUNDERS_TO_DECIDE = "[FOUNDERS TO DECIDE]";

export type LegalSection = {
  /** Anchor, e.g. /refunds/#cancelling */
  id: string;
  title: string;
  body: LegalBlock[];
};

export type LegalDoc = {
  /** The page heading, one entry per line. */
  title: string[];
  /** Meta description. */
  description: string;
  /** Lead paragraph under the heading. */
  intro: string;
  /** ISO date, shown as "Last updated". */
  updated: string;
  /** "The short version" box above the sections. */
  summary: string[];
  sections: LegalSection[];
};

const hello = `[${site.email}](mailto:${site.email})`;
const billing = `[${site.billingEmail}](mailto:${site.billingEmail})`;
const portal = "billing.hybertec.com";
const address = `${site.legalName}, ${site.location}, USA.`;

// Shared by the terms and the refunds page so the two always say the same thing.
const quotedPrices = "We don't list prices on this website. Each client's price is quoted in a written proposal or agreement.";
const agreementOnEnding = "If your agreement has its own terms for ending the work, those terms apply.";

const failedPayments: LegalBlock[] = [
  "If a payment fails, Stripe tries again automatically:",
  [
    "Card payments are retried up to 8 times over about 2 weeks.",
    "Bank debits are retried only if they failed for insufficient funds, and at most twice.",
  ],
  "Stripe also emails you a link to pay or to update your payment method.",
  "If the last retry fails, your subscription is marked unpaid. It is not cancelled. We'll contact you, and we may pause your service until the balance is paid.",
];

const priceChanges: LegalBlock[] = [
  "We may change the price of a plan. If we do, we'll email you at least 30 days before the change.",
  "A new price starts on a billing date. Until then, you pay the old price.",
  "If you don't want to continue at the new price, you can cancel before it starts.",
];

export const terms: LegalDoc = {
  title: ["Terms of Service."],
  description:
    "The terms for using hybertec.com and the HyberTec billing portal, and for paying for HyberTec services. A signed client agreement comes first.",
  intro:
    "These terms cover this website, our billing portal and paying for our services. If you have a signed agreement with us, it comes first.",
  updated: "2026-11-10",
  summary: [
    "Prices are quoted to each client in a written proposal or agreement. We don't list them on this website.",
    "If your signed agreement says something different from these terms, your agreement wins.",
    "Payments go through Stripe. We never see your full card or bank account number.",
    "Monthly plans renew automatically until you cancel. You can cancel any time in the billing portal.",
    "Georgia law applies.",
  ],
  sections: [
    {
      id: "who-we-are",
      title: "Who we are",
      body: [
        `${site.legalName} is a software studio based in ${site.location}, USA. In these terms, “HyberTec”, “we” and “us” mean ${site.legalName}. “You” means you, or the business you act for.`,
        `These terms apply when you use this website (hybertec.com) or our billing portal (${portal}), and when you pay us for our services. By using this website or the billing portal, you agree to these terms.`,
      ],
    },
    {
      id: "our-services",
      title: "Our services",
      body: [
        "We design and build custom software, websites, apps and CRMs. We also offer hosting and support plans.",
        "The work we do for each client is set out in a written proposal or agreement. It says what we'll deliver, when, and what it costs.",
        "If your signed agreement and these terms say different things, your agreement wins.",
      ],
    },
    {
      id: "billing-portal",
      title: "Billing portal accounts",
      body: [
        `Our billing portal at ${portal} is for clients. Accounts are by invitation only. We invite your team members by email, and nobody can sign up on their own.`,
        "You can sign in with Google, with an emailed sign-in link or with a password.",
        "Please:",
        [
          "Keep your sign-in details safe, and don't share your account.",
          `Tell us at ${hello} as soon as someone should no longer have access, for example when they leave your company.`,
          "Tell us right away if you think someone used your account without permission.",
        ],
        "We may remove access to an account to protect it, your data or the portal.",
      ],
    },
    {
      id: "prices-and-payments",
      title: "Prices and payments",
      body: [
        quotedPrices,
        "The billing portal charges a monthly subscription. One-time project fees aren't billed there: your own agreement with us covers them.",
        "Your billing day is the day of the month you paid your first invoice. We charge the monthly subscription automatically on that day each month until the plan is cancelled. By starting a plan, you authorize these charges.",
        "Payments are processed by Stripe. You can pay by card, including Apple Pay and Google Pay, or by US bank account debit (ACH).",
        "You enter card and bank details only on Stripe's pages. We never see or store your full card or bank account number.",
        "We don't add card surcharges. You pay the price we quoted.",
        "Prices don't include taxes. If a tax ever applies, it will be shown on your invoice.",
      ],
    },
    {
      id: "failed-payments",
      title: "Failed payments",
      body: failedPayments,
    },
    {
      id: "cancelling",
      title: "Cancelling",
      body: [
        "You can cancel your subscription at any time in the billing portal. Cancelling is handled by Stripe's customer portal.",
        "Your subscription ends at the end of the month you've already paid for. We don't give a partial refund for that month. Until it ends, you can undo the cancellation.",
        `We can also cancel it for you. Email ${billing}.`,
        agreementOnEnding,
        "Refunds are explained on our [Refunds and cancellation](/refunds/) page.",
      ],
    },
    {
      id: "price-changes",
      title: "Price changes",
      body: priceChanges,
    },
    {
      id: "content-and-ownership",
      title: "Your content and ownership",
      body: [
        "You keep ownership of the content you give us, such as text, images, logos and data.",
        "You allow us to use it to do the work you asked for and to run the services you pay for. Please only give us content you have the right to share.",
        "Who owns the code, designs and other work we create for you is set out in your agreement.",
        `The content of this website, including the HyberTec name, logo and text, belongs to ${site.legalName}. Names and logos of products shown in our work belong to their owners.`,
      ],
    },
    {
      id: "acceptable-use",
      title: "Acceptable use",
      body: [
        "Use this website and the billing portal only for lawful purposes. Please don't:",
        [
          "Try to get into accounts or data that aren't yours.",
          "Try to break, overload or get around the security of our systems.",
          "Upload or send malware or other harmful code.",
          "Pretend to be someone else.",
        ],
      ],
    },
    {
      id: "warranties",
      title: "Warranties",
      body: [
        "We provide this website and the billing portal on an “as is” and “as available” basis. We don't promise they will always be available or free of errors.",
        "Any warranty for the work we do for you, such as a post-launch fix period, is set out in your agreement.",
        "To the extent the law allows, we make no other warranties, written or implied.",
      ],
    },
    {
      id: "liability",
      title: "Limits on liability",
      body: [
        "To the extent the law allows:",
        [
          "We are not liable for indirect or consequential losses, such as lost profits, lost revenue or lost data.",
          "Our total liability for any claim about this website, the billing portal or these terms is limited to the amount you paid us in the 12 months before the claim.",
        ],
        "Your agreement may set different limits for the work we do for you. Nothing in these terms limits liability that the law does not allow us to limit.",
      ],
    },
    {
      id: "ending-access",
      title: "Suspending or ending access",
      body: [
        "You can stop using this website or the billing portal at any time. To end a plan, see [Cancelling](#cancelling).",
        "We may suspend or end someone's access to the billing portal if they break these terms or put our systems or other clients at risk.",
        "When service ends, the parts of these terms that are meant to last still apply, such as amounts owed, ownership, limits on liability and governing law.",
      ],
    },
    {
      id: "changes",
      title: "Changes to these terms",
      body: [
        "We may update these terms. The date at the top of this page shows when they last changed.",
        "If a change matters for clients with an active plan, we'll email them before it takes effect.",
        "If you keep using this website or the billing portal after a change, the updated terms apply.",
      ],
    },
    {
      id: "governing-law",
      title: "Governing law",
      body: [
        "These terms are governed by the laws of the State of Georgia, USA.",
        "If something goes wrong, please contact us first so we can try to fix it. If we can't resolve it, any dispute will be handled by the state or federal courts in Georgia.",
      ],
    },
    {
      id: "contact",
      title: "Contact us",
      body: [[`Questions about these terms: ${hello}`, `Billing questions: ${billing}`], address],
    },
  ],
};

export const privacy: LegalDoc = {
  title: ["Privacy Policy."],
  description:
    "What personal data HyberTec collects through hybertec.com and the billing portal, why, who processes it and how to ask us to see, correct or delete it.",
  intro:
    "What we collect, why we collect it and what you can ask us to do with it. This policy covers this website and our billing portal.",
  updated: "2026-11-09",
  summary: [
    "This website uses no cookies, analytics or ads.",
    "Card and bank details go straight to Stripe. We never see your full card or bank account number.",
    "Our service providers are Google, Stripe and GitHub.",
    "We don't sell personal data.",
    `You can ask us to see, correct or delete your data. Email ${hello}.`,
  ],
  sections: [
    {
      id: "who-we-are",
      title: "Who we are",
      body: [
        `${site.legalName} is a software studio based in ${site.location}, USA. We are responsible for the personal data described in this policy.`,
        `This policy covers this website (hybertec.com) and our billing portal (${portal}). If we've signed an NDA or an agreement with you, its confidentiality terms apply too.`,
      ],
    },
    {
      id: "visiting-this-website",
      title: "Visiting this website",
      body: [
        "This website doesn't use cookies, analytics, ads or tracking tools. It doesn't load scripts or fonts from other companies.",
        "Your browser keeps two small settings for this site on your device:",
        [
          "Your light or dark theme, if you change it.",
          "A note that the opening animation has played, so it only plays once per visit.",
        ],
        "These settings never leave your browser, and we can't see them. You can remove them by clearing your browser's data for this site.",
        "This website is hosted on GitHub Pages. Like most web hosts, GitHub may log technical details of each visit, such as your IP address. See [GitHub's privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).",
        "We link to other sites, such as Instagram and the websites of projects we've built. Their own privacy policies apply there.",
      ],
    },
    {
      id: "contacting-us",
      title: "Contacting us",
      body: [
        "When you email us or use our contact form, we receive what you send. That's usually your name, email address, company and message.",
        "Right now, our contact form opens your own email app with your message filled in. You then send it to us as a normal email.",
        "If we start using a form service to deliver form messages, that service will receive what you type and pass it on to us. We'll update this policy when that happens.",
        "We use your message to reply and to discuss your project. Our email runs on Google Workspace.",
      ],
    },
    {
      id: "billing-portal",
      title: "Using the billing portal",
      body: [
        "The billing portal is only for clients we invite. If you use it, we keep:",
        [
          "Account details: your name, email address, company and how you sign in.",
          "Payment details: the IDs Stripe gives your account and payments, your card brand and last four digits, and your bank's name if you pay by bank debit.",
          "Invoices, receipts and your payment history.",
          "Emails we send you about your account and billing. We send them from Google Workspace (Gmail).",
          "A log of account and billing actions, kept for security and accounting.",
        ],
        "You enter card and bank details only on Stripe's own pages (Stripe Checkout and Stripe's customer portal). We never see or store your full card or bank account number. See [Stripe's Privacy Policy](https://stripe.com/privacy).",
        "Sign-in is handled by Google Firebase Authentication, whether you use Google, an emailed sign-in link or a password. Passwords are stored by Firebase, and we can't see them.",
        "The portal runs on Google Firebase (Authentication, Hosting, Cloud Functions and the Firestore database).",
      ],
    },
    {
      id: "how-we-use-it",
      title: "How we use your data",
      body: [
        "We use personal data to:",
        [
          "Reply to you, and discuss and deliver your project.",
          "Run your billing portal account and keep it secure.",
          "Send invoices, take payments and keep accounting and tax records.",
          "Meet our legal obligations.",
        ],
        "We don't sell personal data.",
      ],
    },
    {
      id: "who-we-share-it-with",
      title: "Who we share it with",
      body: [
        "These service providers help us run HyberTec. Each one handles data under its own terms and privacy policy:",
        [
          "Google: Firebase runs the billing portal, and Google Workspace runs our email. See [Google's Privacy Policy](https://policies.google.com/privacy).",
          "Stripe: processes payments. See [Stripe's Privacy Policy](https://stripe.com/privacy).",
          "GitHub: hosts this website. See [GitHub's privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).",
        ],
        "We also share personal data when the law requires it. We don't sell it.",
      ],
    },
    {
      id: "how-long-we-keep-it",
      title: "How long we keep it",
      body: [
        "We keep financial records, such as invoices, payment history and the log of billing actions, as long as needed for accounting and tax law, typically seven years.",
        "We keep other personal data only as long as we need it for the reasons above.",
      ],
    },
    {
      id: "your-choices",
      title: "Your choices",
      body: [
        `You can ask us to see, correct or delete the personal data we hold about you. Email ${hello}.`,
        "We may need to confirm who you are first. We can't delete records the law requires us to keep, such as invoices and payment records.",
      ],
    },
    {
      id: "keeping-it-safe",
      title: "Keeping it safe",
      body: [
        "Card and bank account numbers never reach our systems. They stay with Stripe.",
        "The billing portal is invite-only, and sign-in runs on Firebase Authentication.",
        `No system is perfectly secure. If you notice anything wrong, tell us at ${hello}.`,
      ],
    },
    {
      id: "children",
      title: "Children",
      body: [
        "Our website and services are for businesses. They are not directed to children under 13, and we don't knowingly collect their personal data.",
        `If you think a child has sent us personal data, email ${hello} and we'll delete it.`,
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      body: [
        "We'll update this policy when our practices change, for example if we start using a form service. The date at the top of this page shows when it last changed.",
        "If a change matters for clients with an active plan, we'll email them.",
      ],
    },
    {
      id: "governing-law",
      title: "Governing law",
      body: ["This policy is governed by the laws of the State of Georgia, USA."],
    },
    {
      id: "contact",
      title: "Contact us",
      body: [[`Privacy questions and requests: ${hello}`, `Billing questions: ${billing}`], address],
    },
  ],
};

export const refunds: LegalDoc = {
  title: ["Refunds and", "cancellation."],
  description: "How cancelling your HyberTec subscription works, what happens to the month you've paid for, and how to ask for a refund.",
  intro:
    "How to cancel your monthly subscription, what happens to the month you've paid for and how to ask for a refund. If your signed agreement says something different, your agreement wins.",
  updated: "2026-11-10",
  summary: [
    "Cancel any time in the billing portal.",
    "Your subscription runs to the end of the month you've paid for. There's no partial refund for that month.",
    "You can undo a cancellation until that month ends.",
    `Refunds are by request: email ${billing}.`,
    "One-time project fees are covered by your own agreement with us, not billed here.",
  ],
  sections: [
    {
      id: "what-is-billed-here",
      title: "What's billed here",
      body: [
        quotedPrices,
        "The billing portal charges your monthly subscription automatically on your billing day each month (the day of the month you paid your first invoice), until it's cancelled.",
        "We don't add card surcharges, and prices don't include taxes. If a tax ever applies, it's shown on your invoice.",
      ],
    },
    {
      id: "cancelling",
      title: "Cancelling your subscription",
      body: [
        `Cancel any time in the billing portal at ${portal}. Cancelling is handled by Stripe's customer portal.`,
        "Your subscription stays active until the end of the month you've already paid for. Then it ends, and you won't be charged again.",
        "We don't give a partial refund for the rest of that month.",
        "Changed your mind? You can undo the cancellation in the portal until the month ends.",
        `You can also ask us to cancel for you. Email ${billing}.`,
        agreementOnEnding,
      ],
    },
    {
      id: "refunds",
      title: "Refunds",
      body: [
        `Refunds are by request. Email ${billing} and tell us which payment it's about and why.`,
        "We review each request. A refund can be for all or part of a payment.",
        "Refunds go back to the original payment method. Card refunds usually take 5–10 business days to show on your statement.",
      ],
    },
    {
      id: "project-fees",
      title: "One-time project fees",
      body: [
        "One-time project fees, such as building and setting up your platform, aren't billed through the billing portal. How they're paid, and whether any part can be refunded, is set out in your own agreement with HyberTec.",
      ],
    },
    {
      id: "questions-about-a-charge",
      title: "Questions about a charge",
      body: [
        `If a charge looks wrong, please email ${billing} before you dispute it with your bank or card company. We'll look into it and put any mistake right.`,
      ],
    },
    {
      id: "contact",
      title: "Contact us",
      body: [
        [`Billing questions and refund requests: ${billing}`, `Everything else: ${hello}`],
        "These rules are also part of our [Terms of Service](/terms/).",
      ],
    },
  ],
};
