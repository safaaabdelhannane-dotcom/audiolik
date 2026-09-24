/**
 * AudioLik — données structurées communes (JSON-LD).
 *
 * L'entité MedicalBusiness est déclarée sur TOUTES les pages (accueil et pages
 * secondaires), avec le même @id : les pages secondaires y renvoient via
 * `about`, et Google ne suit pas toujours une référence vers une autre URL.
 *
 * Tout vient de business.mjs. Un champ null ou vide est omis, jamais inventé :
 *   · priceRange  → omis tant que business.priceRange est null ;
 *   · postalCode  → omis tant qu'il est null ;
 *   · sameAs      → réseaux sociaux renseignés + fiche Google Maps.
 */

import { business as B, SITE_URL } from './business.mjs';

const DAY_SCHEMA = {
  monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday', thursday: 'Thursday',
  friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday',
};

export function openingHoursSchema() {
  const groups = new Map();
  for (const { day, slots } of B.hours) {
    for (const [opens, closes] of slots) {
      const k = `${opens}|${closes}`;
      if (!groups.has(k)) groups.set(k, { opens, closes, days: [] });
      groups.get(k).days.push(DAY_SCHEMA[day]);
    }
  }
  return [...groups.values()].map((g) => ({
    '@type': 'OpeningHoursSpecification', dayOfWeek: g.days, opens: g.opens, closes: g.closes,
  }));
}

/** Texte brut pour le JSON-LD : retire le balisage *gras* et [libellé](url). */
export function plain(s) {
  return String(s)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1');
}

/**
 * @param {object} o
 * @param {string} o.description  description dans la langue de la page
 * @param {string} o.url          URL de l'accueil dans la langue de la page
 * @param {string} o.lang         code langue (fr, ar, en) pour l'image OG
 */
export function organizationSchema({ description, url, lang }) {
  const sameAs = [...Object.values(B.social || {}), B.mapsPlaceUrl].filter(Boolean);
  return {
    '@type': ['MedicalBusiness', 'Store'],
    '@id': `${SITE_URL}/#organization`,
    name: B.name,
    ...(B.alternateName ? { alternateName: B.alternateName } : {}),
    ...(B.legalName ? { legalName: B.legalName } : {}),
    ...(B.founded ? { foundingDate: B.founded } : {}),
    description,
    url,
    image: `${SITE_URL}/assets/img/og-${lang}.png`,
    logo: `${SITE_URL}/assets/img/logo-audiolik.svg`,
    telephone: B.phoneE164,
    ...(B.email ? { email: B.email } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: [B.street, B.district].filter(Boolean).join(', '),
      addressLocality: B.city,
      addressRegion: B.region,
      ...(B.postalCode ? { postalCode: B.postalCode } : {}),
      addressCountry: B.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: B.geo.lat, longitude: B.geo.lng },
    hasMap: B.mapsPlaceUrl,
    ...(sameAs.length ? { sameAs } : {}),
    openingHoursSpecification: openingHoursSchema(),
    areaServed: { '@type': 'City', name: B.city },
    ...(B.priceRange ? { priceRange: B.priceRange } : {}),
    ...(B.audiologist?.firstName ? { employee: {
      '@type': 'Person', name: B.audiologist.firstName, jobTitle: B.audiologist.diploma?.fr || 'Audioprothésiste',
    } } : {}),
    availableLanguage: B.languages,
    currenciesAccepted: 'MAD',
  };
}
