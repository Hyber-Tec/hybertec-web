"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { LuArrowUpRight, LuCheck, LuLoaderCircle } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { projectTypes, timelines } from "@/content/contact";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Inquiries go to HyberMan, HyberTec's CRM (`POST /api/lead`, see HyberMan's
 * docs/WEBSITE.md): each one lands in the pipeline and emails both founders,
 * with the visitor as the reply-to address. Set NEXT_PUBLIC_CRM_API to send
 * them elsewhere, e.g. http://localhost:5173/api for HyberMan's emulators
 * (`npm run dev` there). The live API only accepts www.hybertec.com, so a
 * local copy of this site falls back to the visitor's email app.
 */
const CRM_API = process.env.NEXT_PUBLIC_CRM_API || "https://hyberman.web.app/api";

/** How long to wait for the CRM before falling back to the visitor's email app. */
const TIMEOUT_MS = 20_000;

type Status = "idle" | "sending" | "sent" | "error";

type LeadResponse = { ok?: boolean; error?: string; code?: string };

const field =
  "h-11 rounded-xl bg-background/60 px-3.5 text-[0.9375rem] md:text-sm dark:bg-background/40 border-border focus-visible:ring-foreground/15 focus-visible:border-foreground/40";

export function ContactForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [types, setTypes] = useState<string[]>([]);

  function toggleType(type: string) {
    setTypes((current) => (current.includes(type) ? current.filter((t) => t !== type) : [...current, type]));
  }

  /** Opens the visitor's email app with the inquiry written out, addressed to us. */
  function openEmail(data: FormData, name: string) {
    const lines = [
      `Name: ${name}`,
      `Company: ${data.get("company") || "—"}`,
      `Project: ${types.join(", ") || "Not specified"}`,
      `Timeline: ${data.get("timeline") || "—"}`,
      "",
      String(data.get("message") ?? ""),
    ];
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Project inquiry — ${name}`)}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  /** The CRM couldn't take the inquiry: say so, and hand it to the visitor's email app. */
  function fallBackToEmail(data: FormData, name: string) {
    setStatus("error");
    setError(`We couldn't send this from the page, so we opened it in your email app. Press Send there, or email us at ${site.email}.`);
    openEmail(data, name);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();

    setStatus("sending");
    setError(null);

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    let response: Response;
    let result: LeadResponse;
    try {
      response = await fetch(`${CRM_API}/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          name,
          email: data.get("email"),
          company: data.get("company"),
          services: types,
          timeline: data.get("timeline"),
          message: data.get("message"),
          botcheck: data.get("botcheck") ?? "", // the hidden checkbox: only bots tick it
          ms: Math.round(performance.now()), // how long the page has been open (spam check)
        }),
      });
      result = await response.json().catch(() => ({}));
    } catch {
      // Offline, blocked or too slow.
      fallBackToEmail(data, name);
      return;
    } finally {
      clearTimeout(timer);
    }

    if (response.ok && result.ok) {
      setStatus("sent");
      form.reset();
      setTypes([]);
    } else if (response.status === 429) {
      setStatus("error");
      setError(`That's a lot of messages in a short time. Please email us at ${site.email}.`);
    } else if (response.status === 400 && result.error) {
      // The CRM writes these for the visitor, e.g. "That email doesn't look right."
      setStatus("error");
      setError(result.error);
    } else {
      fallBackToEmail(data, name);
    }
  }

  return (
    <div className={cn("relative overflow-hidden rounded-3xl border border-border bg-surface p-6 sm:p-8", className)}>
      <AnimatePresence mode="wait" initial={false}>
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex min-h-[28rem] flex-col items-center justify-center text-center"
          >
            <span className="flex size-14 items-center justify-center rounded-full bg-foreground text-background">
              <LuCheck className="size-6" />
            </span>
            <h3 className="mt-6 text-2xl font-medium tracking-[-0.03em]">Message received.</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Thanks. We&apos;ll read it and reply within {site.responseTime}.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-8 text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit} className="space-y-6">
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="Name" htmlFor="name" required>
                <Input id="name" name="name" required autoComplete="name" placeholder="Jane Smith" className={field} />
              </FormField>
              <FormField label="Email" htmlFor="email" required>
                <Input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" className={field} />
              </FormField>
            </div>

            <FormField label="Company" htmlFor="company">
              <Input id="company" name="company" autoComplete="organization" placeholder="Company or organization" className={field} />
            </FormField>

            <fieldset>
              <legend className="mb-3 text-sm font-medium">What can we help with?</legend>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((type) => {
                  const active = types.includes(type);
                  return (
                    <button
                      key={type}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggleType(type)}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs transition-colors sm:text-sm",
                        active
                          ? "border-foreground bg-foreground text-background"
                          : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                      )}
                    >
                      {active && <LuCheck className="size-3.5" />}
                      {type}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <FormField label="Timeline" htmlFor="timeline">
              <Select name="timeline">
                <SelectTrigger id="timeline" className={cn(field, "w-full data-[size=default]:h-11")}>
                  <SelectValue placeholder="When would you like to start?" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {timelines.map((timeline) => (
                    <SelectItem key={timeline} value={timeline}>
                      {timeline}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>

            <FormField label="Project details" htmlFor="message" required>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="What are you building, and who is it for? Add any deadline or links to examples."
                className={cn(field, "min-h-36 resize-none py-3")}
              />
            </FormField>

            {error && (
              <p role="alert" className="text-sm text-destructive">
                {error}
              </p>
            )}

            <div className="flex flex-col-reverse items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
              <p className="text-xs text-muted-foreground">We reply within {site.responseTime}.</p>
              <Button type="submit" variant="solid" size="pill" disabled={status === "sending"}>
                {status === "sending" ? (
                  <>
                    Sending <LuLoaderCircle className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send inquiry
                    <LuArrowUpRight className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function FormField({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2.5">
      <Label htmlFor={htmlFor}>
        {label}
        {required && <span className="text-muted-foreground">*</span>}
      </Label>
      {children}
    </div>
  );
}
