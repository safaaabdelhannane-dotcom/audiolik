#!/usr/bin/env node
/**
 * AudioLik — static site build.
 *
 *   node build.mjs
 *
 * Reads src/business.mjs + src/content/<lang>.mjs, renders src/template.mjs once
 * per language, and writes plain HTML files. No dependencies, no bundler, no
 * runtime i18n: each language is its own indexable URL.
 *
 *   index.html     français   (default, x-default)
 *   ar/index.html  العربية    (dir=rtl)
 *   en/index.html  English
 *
 * Also emits sitemap.xml and robots.txt, and prints the list of business facts
 * still waiting to be filled in.
 */

import { writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import render from './src/template.mjs';
import { business, locales, SITE_URL, pendingFields, placeholderFields, pendingPhotos } from './src/business.mjs';
import fr from './src/content/fr.mjs';
import ar from './src/content/ar.mjs';
import en from './src/content/en.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const CONTENT = { fr, ar, en };

const c = {
  dim:  (s) => `\x1b[2m${s}\x1b[0m`,
  green:(s) => `\x1b[32m${s}\x1b[0m`,
  amber:(s) => `\x1b[33m${s}\x1b[0m`,
  red:  (s) => `\x1b[31m${s}\x1b[0m`,
  bold: (s) => `\x1b[1m${s}\x1b[0m`,
};

/* -------------------------------------------------------------------------
   A missing key in one language would render as `undefined` in the HTML and
   nobody would notice until a visitor did. Compare the shape of every content
   module against the reference (fr) before rendering anything.
   ------------------------------------------------------------------------- */
function shape(value, path = '') {
  if (Array.isArray(value)) {
    // Arrays hold repeated records; compare the shape of the first entry only,
    // since the number of FAQ entries or signs may legitimately differ.
    return value.length && typeof value[0] === 'object'
      ? shape(value[0], `${path}[]`)
      : [`${path}[]`];
  }
  if (value && typeof value === 'object') {
    return Object.keys(value).flatMap((k) => shape(value[k], path ? `${path}.${k}` : k));
  }
  return [path];
}

function assertSameShape() {
  const ref = shape(fr).sort();
  let bad = 0;
  for (const [code, mod] of Object.entries(CONTENT)) {
    if (code === 'fr') continue;
    const got = shape(mod).sort();
    const missing = ref.filter((k) => !got.includes(k));
    const extra   = got.filter((k) => !ref.includes(k));
    if (missing.length || extra.length) {
      bad++;
      console.error(c.red(`\n  ✗ ${code}.mjs diverge de fr.mjs`));
      missing.forEach((k) => console.error(c.red(`      manque : ${k}`)));
      extra.forEach((k)   => console.error(c.red(`      en trop : ${k}`)));
    }
  }
  if (bad) {
    console.error(c.red('\n  Build interrompu : les fichiers de langue doivent avoir la même forme.\n'));
    process.exit(1);
  }
}

/* ------------------------------------------------------------------ build */

async function main() {
  console.log(c.bold('\n  AudioLik v3 — build\n'));
  assertSameShape();

  const alternates = locales.map((l) => ({
    hreflang: l.code,
    href: SITE_URL + l.path,
  }));

  const pages = [];

  for (const loc of locales) {
    const t = CONTENT[loc.code];
    if (!t) throw new Error(`Contenu manquant pour la langue « ${loc.code} »`);

    const html = render(t, { alternates });
    const rel = loc.path.replace(/^\/v3\/?/, '').replace(/\/$/, '');
    const out = rel ? join(rel, 'index.html') : 'index.html';
    const abs = join(ROOT, out);

    await mkdir(dirname(abs), { recursive: true });
    await writeFile(abs, html, 'utf8');

    pages.push({ loc, out, bytes: Buffer.byteLength(html) });
    console.log(`  ${c.green('✓')} ${out.padEnd(16)} ${c.dim(`${loc.label.padEnd(10)} ${(Buffer.byteLength(html) / 1024).toFixed(1)} KB`)}`);
  }

  /* -- sitemap: one entry per language, cross-linked with xhtml:link -------- */
  const today = new Date().toISOString().slice(0, 10);
  const sitemap =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
    `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    locales.map((l) =>
      `  <url>\n` +
      `    <loc>${SITE_URL}${l.path}</loc>\n` +
      locales.map((a) =>
        `    <xhtml:link rel="alternate" hreflang="${a.code}" href="${SITE_URL}${a.path}"/>\n`).join('') +
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/"/>\n` +
      `    <lastmod>${today}</lastmod>\n` +
      `    <changefreq>monthly</changefreq>\n` +
      `    <priority>${l.code === business.defaultLang ? '1.0' : '0.8'}</priority>\n` +
      `  </url>\n`).join('') +
    `</urlset>\n`;
  await writeFile(join(ROOT, 'sitemap.xml'), sitemap, 'utf8');

  await writeFile(join(ROOT, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`, 'utf8');

  // GitHub Pages: serve the tree as-is, no Jekyll pass.
  await writeFile(join(ROOT, '.nojekyll'), '', 'utf8');

  // Le domaine personnalisé vit dans CNAME. C'est un artefact de déploiement,
  // donc le build le reproduit : un déploiement qui l'oublie fait retomber le
  // site sur *.github.io et casse le certificat d'audiolik.ma.
  await writeFile(join(ROOT, 'CNAME'), `${new URL(SITE_URL).hostname}\n`, 'utf8');

  console.log(`  ${c.green('✓')} sitemap.xml, robots.txt, .nojekyll, CNAME`);

  const noPhoto = pendingPhotos();
  if (noPhoto.length) {
    console.log(c.amber(`\n  ${noPhoto.length} photographies manquantes — un cadre d'attente conçu tient la place :\n`));
    noPhoto.forEach((p) => console.log(c.amber(`    · ${p}`)));
  }

  /* -- valeurs factices : les crier fort, elles PARTENT en production -------- */
  const fake = placeholderFields();
  if (fake.length) {
    console.log(c.red(`\n  ⚠  ${fake.length} valeurs FICTIVES sont dans les pages générées :\n`));
    fake.forEach((p) => console.log(c.red(`    · business.${p}`)));
    console.log(c.red('    À remplacer avant toute mise en ligne (src/business.mjs).'));
  }

  /* -- what still needs a real answer -------------------------------------- */
  const pending = pendingFields();
  if (pending.length) {
    console.log(c.amber(`\n  ${pending.length} informations non renseignées — le site les omet plutôt que d'inventer :\n`));
    pending.forEach((p) => console.log(c.amber(`    · business.${p}`)));
    console.log(c.dim('\n    Renseignez-les dans src/business.mjs puis relancez le build.'));
  }

  const total = pages.reduce((s, p) => s + p.bytes, 0);
  console.log(c.dim(`\n  ${pages.length} pages · ${(total / 1024).toFixed(1)} KB de HTML · ${SITE_URL}\n`));
}

main().catch((err) => {
  console.error(c.red(`\n  Build échoué : ${err.message}\n`));
  console.error(err.stack);
  process.exit(1);
});
