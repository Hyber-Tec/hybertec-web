"use client";

import { useState } from "react";

const contactReasons = [
  "New website build",
  "Web application / portal",
  "SaaS platform",
  "Monthly retainer",
  "Just exploring",
];

const contactDetails = [
  {
    label: "Email",
    value: "hello@hybertec.com",
    href: "mailto:hello@hybertec.com",
  },
  {
    label: "Location",
    value: "Gwinnett County, Georgia",
    href: null,
  },
  {
    label: "Response Time",
    value: "Within 1 business day",
    href: null,
  },
];

const expectations = [
  "We review your message and respond within 1 business day.",
  "If it's a good fit, we schedule a free 30-min discovery call.",
  "We put together a clear scope and plan — no surprise costs.",
  "We get to work.",
];

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-bg/40 border border-border text-cream font-body text-sm placeholder-cream-muted/50 focus:outline-none focus:border-lime/50 transition-colors";

const labelClass =
  "block font-body text-xs text-cream-muted tracking-widest uppercase mb-2";

export default function ContactPage() {
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to your email/form provider (Resend, Formspree, etc.)
    setSubmitted(true);
  }

  return (
    <>
      {/* Header */}
      <section className="pt-20 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-5 h-px bg-lime" />
            <span className="section-label">Start a Project</span>
          </div>
          <h1 className="font-display text-5xl font-bold leading-tight text-cream mb-4 md:text-6xl">
            Let's talk about
            <br />
            your <span className="text-lime italic">next build.</span>
          </h1>
          <p className="font-body text-cream-muted text-lg max-w-md leading-relaxed">
            Tell us a bit about what you're working on. We respond to every
            inquiry within one business day.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
            {/* Left — contact details */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-surface border border-border p-6">
                <h3 className="font-display text-base font-bold text-cream mb-5">
                  Direct contact
                </h3>
                <div className="space-y-5">
                  {contactDetails.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime mt-2 flex-shrink-0" />
                      <div>
                        <p className={labelClass + " mb-1"}>{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-body text-base text-cream hover:text-lime transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-body text-base text-cream">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-surface border border-border p-6">
                <h3 className="font-display text-base font-bold text-cream mb-5">
                  What happens after you reach out?
                </h3>
                <ol className="space-y-3">
                  {expectations.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 font-display text-sm font-bold text-lime">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-body text-sm text-cream-muted leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right — form */}
            <div>
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-12 rounded-2xl bg-surface border border-lime/30">
                  <span className="text-5xl mb-4">✦</span>
                  <h3 className="font-display mb-2 text-2xl font-bold text-lime">
                    Message received.
                  </h3>
                  <p className="font-body text-cream-muted text-sm max-w-xs">
                    Thanks for reaching out. We'll be in touch within one
                    business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl bg-surface border border-border p-6 md:p-8 space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Smith"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="business" className={labelClass}>
                      Business / Organization
                    </label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      placeholder="Your Business LLC"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <span className={labelClass}>
                      What are you looking for? *
                    </span>
                    <input type="hidden" name="reason" value={selected} />
                    <div className="flex flex-wrap gap-2">
                      {contactReasons.map((reason) => {
                        const active = selected === reason;
                        return (
                          <button
                            key={reason}
                            type="button"
                            onClick={() => setSelected(reason)}
                            aria-pressed={active}
                            className={`px-3.5 py-1.5 rounded-full border text-sm font-body transition-all ${
                              active
                                ? "border-lime bg-lime/10 text-lime"
                                : "border-border text-cream-muted hover:border-lime/30 hover:text-cream"
                            }`}
                          >
                            {reason}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className={labelClass}>
                      Monthly Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="">Select a range...</option>
                      <option>Under $300/mo</option>
                      <option>$300 – $700/mo</option>
                      <option>$700 – $1,500/mo</option>
                      <option>$1,500+/mo</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Tell us about your project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="What does your business do, what are you trying to achieve online, and what's your timeline?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button type="submit" className="button-primary w-full py-3.5">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
