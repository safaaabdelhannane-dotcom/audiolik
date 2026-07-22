#!/usr/bin/env node
/**
 * Generates the raster assets the HTML references but that cannot be SVG:
 *
 *   assets/img/apple-touch-icon.png   180×180   (iOS home screen)
 *   assets/img/og-<lang>.png         1200×630   (Facebook / WhatsApp / LinkedIn cards)
 *
 * The cards are composed as SVG first, reusing the real logo vector — so the
 * wordmark and the "Centre de correction auditive" baseline stay exactly as the
 * brand sheet draws them rather than being re-typeset in a substitute font. Only
 * the address line uses a system face, and it is baked into the PNG anyway.
 *
 * Rasterisation uses macOS Quick Look (qlmanage), which needs no dependency.
 *
 *   node tools/make-images.mjs
 */

import { readFile, writeFile, mkdir, rename, rm } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { business as B, brand } from '../src/business.mjs';

const run = promisify(execFile);
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const IMG = join(ROOT, 'assets', 'img');
const TMP = join(ROOT, '.tmp-images');

const CARDS = {
  fr: { line: `${B.city} · ${B.district}`, sub: B.phoneDisplay, font: 'Helvetica Neue, Helvetica, Arial', dir: 'ltr' },
  en: { line: `${B.city} · ${B.district}`, sub: B.phoneDisplay, font: 'Helvetica Neue, Helvetica, Arial', dir: 'ltr' },
  ar: { line: 'الدار البيضاء · المعاريف',  sub: B.phoneDisplay, font: 'Geeza Pro, Helvetica Neue, Arial', dir: 'rtl' },
};

/** Pull a logo file apart so it can be re-placed inside a bigger canvas. */
async function logoParts(file) {
  const s = await readFile(join(IMG, file), 'utf8');
  const vb = s.match(/viewBox="([\d.\- ]+)"/)[1].split(' ').map(Number);
  const defs = (s.match(/<defs>[\s\S]*?<\/defs>/) || [''])[0];
  const inner = s
    .slice(s.indexOf('>', s.indexOf('<svg')) + 1, s.lastIndexOf('</svg>'))
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<defs>[\s\S]*?<\/defs>/, '');
  return { vb, defs, inner };
}

/**
 * Drawn on a SQUARE 1200×1200 canvas with the 1200×630 card centred in it.
 * qlmanage scales non-square art to fill its square thumbnail, which distorts
 * the framing; giving it square input sidesteps that entirely, and a centred
 * sips crop then lifts the card straight back out.
 */
function card({ vb, defs, inner }, { line, sub, font, dir }) {
  const W = 1200, H = 630;
  const PAD = (W - H) / 2;               // vertical offset of the card in the square
  const [vx, vy, vw, vh] = vb;

  // Logo sized to 46% of the canvas width, sitting slightly above centre.
  const scale = (W * 0.46) / vw;
  const tx = (W - vw * scale) / 2 - vx * scale;
  const ty = H * 0.345 - (vh * scale) / 2 - vy * scale;

  // Concentric arcs echoing the mark, very quiet.
  const rings = [210, 300, 390, 480, 570]
    .map((r, i) => `<circle cx="${W / 2}" cy="${H * 0.345}" r="${r}" fill="none" ` +
                   `stroke="${brand.pale}" stroke-opacity="${0.16 - i * 0.025}" stroke-width="2"/>`)
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${W}" viewBox="0 0 ${W} ${W}">
${defs}
<clipPath id="card-clip"><rect y="${PAD}" width="${W}" height="${H}"/></clipPath>
<rect width="${W}" height="${W}" fill="${brand.navy}"/>
<g transform="translate(0 ${PAD})">
  <g clip-path="url(#card-clip)" transform="translate(0 ${-PAD})">${rings}</g>
  <g transform="translate(${tx.toFixed(2)} ${ty.toFixed(2)}) scale(${scale.toFixed(4)})">${inner}</g>
  <line x1="${W / 2 - 90}" y1="${H * 0.635}" x2="${W / 2 + 90}" y2="${H * 0.635}"
        stroke="${brand.teal}" stroke-width="3" stroke-linecap="round"/>
  <text x="${W / 2}" y="${H * 0.745}" text-anchor="middle" direction="${dir}"
        font-family="${font}" font-size="42" font-weight="500" fill="#FFFFFF">${line}</text>
  <text x="${W / 2}" y="${H * 0.845}" text-anchor="middle" direction="ltr"
        font-family="Helvetica Neue, Helvetica, Arial" font-size="38" font-weight="600"
        letter-spacing="2" fill="${brand.pale}">${sub}</text>
</g>
</svg>`;
}

/**
 * qlmanage always writes a SQUARE thumbnail, letterboxing non-square art. So
 * rasterise at the target width, then crop the padding back off with sips
 * (crop is centred, and the art is centred in the square, so they line up).
 */
async function rasterise(svgPath, outPath, width, height = width) {
  await run('qlmanage', ['-t', '-s', String(width), '-o', TMP, svgPath]);
  await rename(join(TMP, `${svgPath.split('/').pop()}.png`), outPath);
  if (height !== width) {
    await run('sips', ['-c', String(height), String(width), outPath, '--out', outPath]);
  }
}

async function main() {
  await mkdir(TMP, { recursive: true });

  // --- Open Graph cards
  const parts = await logoParts('logo-horizontal-inverse.svg');
  for (const [lang, cfg] of Object.entries(CARDS)) {
    const svgPath = join(TMP, `og-${lang}.svg`);
    await writeFile(svgPath, card(parts, cfg), 'utf8');
    await rasterise(svgPath, join(IMG, `og-${lang}.png`), 1200, 630);
    console.log(`  ✓ assets/img/og-${lang}.png`);
  }

  // --- iOS home-screen icon
  await rasterise(join(ROOT, 'assets', 'favicon.svg'), join(IMG, 'apple-touch-icon.png'), 180);
  console.log('  ✓ assets/img/apple-touch-icon.png');

  await rm(TMP, { recursive: true, force: true });
}

main().catch(async (e) => {
  await rm(TMP, { recursive: true, force: true });
  console.error(`  ✗ ${e.message}`);
  process.exit(1);
});
