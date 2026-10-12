/**
 * Regenerates icons and the social share image from the official mark.
 *
 *   npm run brand
 *
 * Writes:
 *   src/app/icon.svg, src/app/favicon.ico, src/app/apple-icon.png
 *   public/brand/hybertec-logo-512.png   (raster logo for search engines)
 *   public/og.png                        (1200×630 share image; needs network for the Geist font)
 *
 * The share image uses public/brand/hybertec-mark-chrome.png — a still of the
 * liquid-metal hero mark. Re-capture it if the hero shader changes.
 */
import { chromium } from "playwright";
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { MARK_GEOMETRY as G, MARK_PATH } from "../src/components/brand/mark-path.ts";

const root = path.resolve(import.meta.dirname, "..");
const out = (file: string) => path.join(root, file);

const INK = "#0a0a0a";
const PAPER = "#fafafa";

/** Square tile with the mark centred at `ratio` of the tile height. */
function tileSvg(size: number, { ratio = 0.7, radius = 0.22, background = INK, color = PAPER } = {}) {
  const scale = (size * ratio) / G.height;
  const tx = size / 2 - (G.left + G.width / 2) * scale;
  const ty = size / 2 - (G.top + G.height / 2) * scale;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  <rect width="${size}" height="${size}" rx="${size * radius}" fill="${background}"/>
  <path transform="translate(${tx.toFixed(2)} ${ty.toFixed(2)}) scale(${scale.toFixed(5)})" d="${MARK_PATH}" fill="${color}"/>
</svg>`;
}

/** ICO container holding PNG-encoded images (supported by every modern browser). */
function toIco(pngs: { size: number; data: Buffer }[]) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  const entries: Buffer[] = [];
  let offset = 6 + pngs.length * 16;
  for (const { size, data } of pngs) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += data.length;
    entries.push(entry);
  }
  return Buffer.concat([header, ...entries, ...pngs.map((p) => p.data)]);
}

async function icons() {
  await writeFile(out("src/app/icon.svg"), tileSvg(512));

  const sizes = [16, 32, 48];
  const pngs = await Promise.all(
    sizes.map(async (size) => ({
      size,
      // Small sizes get a slightly larger mark so it stays legible.
      data: await sharp(Buffer.from(tileSvg(size * 8, { ratio: size <= 16 ? 0.8 : 0.74 })))
        .resize(size, size)
        .png()
        .toBuffer(),
    })),
  );
  await writeFile(out("src/app/favicon.ico"), toIco(pngs));

  await sharp(Buffer.from(tileSvg(1440, { ratio: 0.62, radius: 0 })))
    .resize(180, 180)
    .png()
    .toFile(out("src/app/apple-icon.png"));

  await sharp(Buffer.from(tileSvg(2048, { ratio: 0.66, radius: 0 })))
    .resize(512, 512)
    .png()
    .toFile(out("public/brand/hybertec-logo-512.png"));
}

async function shareImage() {
  const chrome = await readFile(out("public/brand/hybertec-mark-chrome.png"));
  const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400&display=block" rel="stylesheet">
<style>
  *{margin:0;box-sizing:border-box}
  body{width:1200px;height:630px;background:${INK};color:${PAPER};font-family:Geist,sans-serif;overflow:hidden;position:relative}
  .grid{position:absolute;inset:0;background-image:linear-gradient(to right,rgb(255 255 255/.06) 1px,transparent 1px),linear-gradient(to bottom,rgb(255 255 255/.06) 1px,transparent 1px);background-size:60px 60px;mask-image:radial-gradient(ellipse at 70% 45%,#000 20%,transparent 70%)}
  .glow{position:absolute;inset:0;background:radial-gradient(45% 60% at 76% 42%,rgb(255 255 255/.10),transparent 70%)}
  .mark{position:absolute;right:96px;top:50%;height:500px;transform:translateY(-50%);filter:grayscale(1)}
  .content{position:absolute;left:80px;top:72px;bottom:72px;width:640px;display:flex;flex-direction:column}
  .lockup{display:flex;align-items:center;gap:18px}
  .lockup svg{height:44px;width:auto}
  .divider{width:1px;height:26px;background:rgb(255 255 255/.3)}
  .word{font-weight:600;font-size:21px;letter-spacing:.34em}
  h1{margin-top:auto;font-weight:500;font-size:68px;line-height:1;letter-spacing:-.05em}
  h1 span{color:rgb(255 255 255/.5)}
  p{margin-top:24px;font-size:22px;line-height:1.4;color:rgb(255 255 255/.62);letter-spacing:-.01em}
  .meta{margin-top:auto;padding-top:28px;font-family:"Geist Mono",monospace;font-size:15px;letter-spacing:.16em;text-transform:uppercase;color:rgb(255 255 255/.5);display:flex;gap:28px}
</style></head><body>
<div class="grid"></div><div class="glow"></div>
<img class="mark" src="data:image/png;base64,${chrome.toString("base64")}">
<div class="content">
  <div class="lockup">
    <svg viewBox="${G.left} ${G.top} ${G.width} ${G.height}"><path d="${MARK_PATH}" fill="${PAPER}"/></svg>
    <span class="divider"></span><span class="word">HYBERTEC</span>
  </div>
  <h1>Software that runs<br>your business.<br><span>Websites that<br>grow it.</span></h1>
  <p>Websites, custom software, CRMs and iOS &amp; Android apps — designed and built under one roof.</p>
  <div class="meta"><span>hybertec.com</span><span>Georgia, USA</span></div>
</div>
</body></html>`;

  const browser = await chromium.launch(
    process.env.PW_EXECUTABLE_PATH ? { executablePath: process.env.PW_EXECUTABLE_PATH } : { channel: "chrome" },
  );
  try {
    const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
    await page.setContent(html, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    const png = await page.screenshot({ type: "png" });
    await sharp(png).png({ compressionLevel: 9, palette: false }).toFile(out("public/og.png"));
  } finally {
    await browser.close();
  }
}

await icons();
console.log("✓ icons");
await shareImage();
console.log("✓ og.png");
