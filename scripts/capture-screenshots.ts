/**
 * Captures portfolio screenshots from live sites into public/work/<slug>/.
 *
 *   npm run capture                       # every project with a url
 *   npm run capture -- --only hybercrm    # one or more slugs, comma-separated
 *
 * Per project (see `capture` in src/content/projects.ts):
 *   desktop.webp  1440×840 viewport @2x → 2400px wide  (fills the browser-frame mockup exactly)
 *   mobile.webp   390×844 viewport @3x → 1170px wide   (fills the phone-frame mockup exactly)
 *
 * Uses the installed Google Chrome. Set PW_EXECUTABLE_PATH to use another
 * Chromium build, or run `npx playwright install chromium` and set PW_BUNDLED=1.
 */
import { chromium, type Browser, type BrowserContextOptions, type Page } from "playwright";
import sharp from "sharp";
import { mkdir, rm } from "node:fs/promises";
import path from "node:path";

import { projects, type Project } from "../src/content/projects.ts";

const root = path.resolve(import.meta.dirname, "..");

const PROFILES = {
  desktop: { viewport: { width: 1440, height: 840 }, deviceScaleFactor: 2 },
  mobile: {
    viewport: { width: 390, height: 844 },
    screen: { width: 390, height: 844 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1",
  },
} satisfies Record<string, BrowserContextOptions>;

const OUTPUT = { desktop: 2400, mobile: 1170 };

const CONSENT = /^(accept( all)?( cookies)?|allow( all)?( cookies)?|i agree|agree|got it|ok(ay)?)$/i;

function parseOnly(argv: string[]) {
  const i = argv.indexOf("--only");
  return i === -1 ? null : new Set(argv[i + 1]?.split(",").filter(Boolean));
}

/** Firestore-style apps never go network-idle, so idle is best-effort after load. */
async function settle(page: Page) {
  await page.waitForLoadState("networkidle", { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(2500);
}

async function dismissConsent(page: Page) {
  const scope = '[class*="cookie" i], [id*="cookie" i], [class*="consent" i], [id*="consent" i]';
  for (const button of await page.locator(`:is(${scope}) :is(button, [role=button], a)`).all()) {
    const text = ((await button.innerText().catch(() => "")) || "").trim();
    if (CONSENT.test(text) && (await button.isVisible().catch(() => false))) {
      await button.click({ timeout: 2000 }).catch(() => {});
    }
  }
}

/** Scroll the whole page so lazy images and scroll-reveal animations render, then return to the top. */
async function scrollThrough(page: Page) {
  const step = await page.evaluate(() => Math.round(window.innerHeight * 0.6));
  let last = -1;
  for (let i = 0; i < 80; i++) {
    await page.mouse.wheel(0, step).catch(() => {});
    await page.waitForTimeout(140);
    const y = await page.evaluate(() => window.scrollY);
    if (y === last) break;
    last = y;
  }
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.waitForTimeout(1500);
}

async function shoot(browser: Browser, project: Project, kind: keyof typeof PROFILES) {
  const options = project.capture ?? {};
  const url = options.url ?? project.url;
  const context = await browser.newContext({ ...PROFILES[kind], colorScheme: options.colorScheme ?? "light" });
  const page = await context.newPage();
  try {
    await page.goto(url!, { waitUntil: "load", timeout: 60000 });
    await settle(page);
    await dismissConsent(page);
    for (const selector of options.click ?? []) {
      await page.locator(selector).first().click({ timeout: 5000 });
      await page.waitForTimeout(800);
    }
    await page.evaluate(() => (document.activeElement as HTMLElement | null)?.blur());
    await page.mouse.move(2, 2);
    if (options.hide?.length) {
      await page.addStyleTag({ content: `${options.hide.join(",")} { display: none !important; }` });
    }
    await scrollThrough(page);
    return await page.screenshot({ type: "png", animations: "allow" });
  } finally {
    await context.close();
  }
}

const only = parseOnly(process.argv.slice(2));
const targets = projects.filter((project) => (project.capture?.url ?? project.url) && (!only || only.has(project.slug)));
if (!targets.length) {
  console.error(only ? `No project with a url matches: ${[...only].join(", ")}` : "No projects with a url.");
  process.exit(1);
}

const browser = await chromium.launch(
  process.env.PW_EXECUTABLE_PATH
    ? { executablePath: process.env.PW_EXECUTABLE_PATH }
    : process.env.PW_BUNDLED
      ? {}
      : { channel: "chrome" },
);

let failed = 0;
try {
  for (const project of targets) {
    const dir = path.join(root, "public/work", project.slug);
    await mkdir(dir, { recursive: true });
    const kinds: (keyof typeof PROFILES)[] = project.capture?.mobile === false ? ["desktop"] : ["desktop", "mobile"];
    const started = Date.now();
    try {
      const report: string[] = [];
      for (const kind of kinds) {
        const file = path.join(dir, `${kind}.webp`);
        await rm(file, { force: true });
        const png = await shoot(browser, project, kind);
        const info = await sharp(png).resize({ width: OUTPUT[kind] }).webp({ quality: 80, effort: 6 }).toFile(file);
        report.push(`${kind}.webp ${Math.round(info.size / 1024)} KB`);
      }
      console.log(`✓ ${project.slug.padEnd(22)} ${report.join(" · ")} · ${((Date.now() - started) / 1000).toFixed(1)}s`);
    } catch (error) {
      failed++;
      console.error(`✗ ${project.slug.padEnd(22)} ${(error as Error).message.split("\n")[0]}`);
    }
  }
} finally {
  await browser.close();
}

console.log("\nReference the files in src/content/projects.ts → media.desktop / media.mobile, e.g. /work/<slug>/desktop.webp");
process.exitCode = failed ? 1 : 0;
