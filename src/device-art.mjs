/**
 * AudioLik — illustrations des types d'appareils (carte tarifaire).
 * Dessins ORIGINAUX au trait : ce ne sont pas des photos de produits d'une marque.
 * Couleurs pilotées par la charte : currentColor (teal), --dev-fill, --dev-surface.
 */
// Illustrations originales (pas des photos de produits) — traits, couleurs de la charte via currentColor / var().
const wrap = (inner) => `<svg viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
export const DEVICE_SVG = {
  // Contour d'oreille classique : boîtier en virgule, coude, tube, embout.
  bte: wrap(`
    <path d="M58 22c-14 2-22 16-20 34 2 16 10 28 20 32 6 2 10-2 9-8-3-12-4-24 0-38 2-8 0-20-9-20z" fill="var(--dev-fill)"/>
    <path d="M57 22c6-10 20-14 30-8 8 5 10 16 6 26"/>
    <path d="M93 40c-2 10-2 20 6 26"/>
    <ellipse cx="108" cy="70" rx="11" ry="8" fill="var(--dev-fill)"/>
    <circle cx="49" cy="46" r="2.5" fill="currentColor" stroke="none"/>
    <path d="M47 70h8"/>`),
  // Écouteur déporté (RIC) : petit boîtier fin, fil très fin, dôme.
  ric: wrap(`
    <path d="M62 26c-10 2-15 13-14 26 1 12 7 21 14 24 5 2 8-1 7-6-2-9-3-18 0-28 2-7 0-17-7-16z" fill="var(--dev-fill)"/>
    <path d="M62 26c10-12 30-12 38 0 5 8 3 20-3 30" stroke-width="2"/>
    <path d="M97 56l6 9" stroke-width="2"/>
    <rect x="99" y="63" width="10" height="7" rx="3" transform="rotate(35 104 66)" fill="var(--dev-fill)"/>
    <path d="M110 72c4 0 8 3 8 7s-4 6-8 5" fill="var(--dev-fill)" stroke-width="2.5"/>
    <circle cx="56" cy="44" r="2.2" fill="currentColor" stroke="none"/>`),
  // Écouteur déporté rechargeable, posé dans son chargeur, avec ondes Bluetooth.
  'ric-charge': wrap(`
    <g transform="translate(-4 -6) scale(.78)"><path d="M62 26c-10 2-15 13-14 26 1 12 7 21 14 24 5 2 8-1 7-6-2-9-3-18 0-28 2-7 0-17-7-16z" fill="var(--dev-fill)"/><circle cx="56" cy="44" r="2.6" fill="currentColor" stroke="none"/></g>
    <g transform="translate(26 -6) scale(.78)"><path d="M62 26c-10 2-15 13-14 26 1 12 7 21 14 24 5 2 8-1 7-6-2-9-3-18 0-28 2-7 0-17-7-16z" fill="var(--dev-fill)"/><circle cx="56" cy="44" r="2.6" fill="currentColor" stroke="none"/></g>
    <rect x="24" y="52" width="84" height="34" rx="13" fill="var(--dev-surface, #fff)"/>
    <path d="M58 72h16" stroke-width="2.5"/>
    <path d="M122 34c5 4 5 12 0 16M130 28c9 7 9 21 0 28" stroke-width="2.5"/>`),
};
