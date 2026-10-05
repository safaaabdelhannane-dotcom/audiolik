/**
 * AudioLik — Content-Security-Policy par page (balise meta).
 *
 * Les gabarits placent le marqueur CSP_SLOT tout en haut du <head>, AVANT tout
 * <script> (une CSP en meta ne protège que ce qui la suit). applyCsp() lit la
 * page terminée, calcule le SHA-256 de chaque <script> inline exécutable et
 * remplace le marqueur par la politique. Chaque page reçoit donc ses propres
 * empreintes : pas de 'unsafe-inline' sur script-src.
 *
 * Si un script inline change (une chaîne du quiz, le thème…), l'empreinte est
 * recalculée au build suivant, rien à maintenir à la main.
 *
 * NE PAS AJOUTER ICI frame-ancestors ni X-Frame-Options : ils sont ignorés en
 * balise meta. L'anti-clickjacking se règle en en-tête HTTP, côté Cloudflare
 * (voir SECURITE.md).
 */

import { createHash } from 'node:crypto';

export const CSP_SLOT = '<!--CSP-->';

// Domaines officiels de Google Analytics 4 (gtag.js), chargé seulement après
// consentement par assets/js/consent.js. GA4 envoie aussi ses mesures vers
// www.google.com/g/collect (constaté au test) : il doit figurer ici.
const GA_SCRIPT  = 'https://www.googletagmanager.com';
const GA_CONNECT = 'https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://www.google.com';
const GA_IMG     = 'https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://www.google.com';

// Blocs de données (JSON-LD…) : jamais exécutés, donc hors du champ de la CSP.
const DATA_TYPES = /^(application\/(ld\+)?json|text\/template)$/i;

function inlineScriptHashes(html) {
  const hashes = new Set();
  const re = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) {
    const attrs = m[1];
    if (/\bsrc\s*=/i.test(attrs)) continue;
    const type = (attrs.match(/\btype\s*=\s*["']?([^"'\s>]+)/i) || [])[1];
    if (type && DATA_TYPES.test(type)) continue;
    hashes.add(`'sha256-${createHash('sha256').update(m[2], 'utf8').digest('base64')}'`);
  }
  return [...hashes];
}

export function applyCsp(html) {
  if (!html.includes(CSP_SLOT)) throw new Error('applyCsp : marqueur CSP absent du gabarit');
  const policy = [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    `script-src 'self' ${GA_SCRIPT} ${inlineScriptHashes(html).join(' ')}`.trim(),
    `connect-src 'self' ${GA_CONNECT}`,
    `img-src 'self' data: ${GA_IMG}`,
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self'",
    'frame-src https://www.google.com',
    "form-action 'self' mailto:",
  ].join('; ');
  return html.replace(CSP_SLOT, `<meta http-equiv="Content-Security-Policy" content="${policy}">`);
}

export default applyCsp;
