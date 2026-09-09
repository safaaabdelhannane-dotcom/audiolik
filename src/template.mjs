/**
 * v2 — template.
 *
 * Ce qui change structurellement par rapport à v1, et pourquoi :
 *
 *  · NEUF familles de mise en page pour neuf sections. v1 ouvrait chacune de
 *    ses huit sections par le même bloc (kicker, H2, accroche, grille de
 *    cartes) : le rythme vertical était parfaitement uniforme, ce qui est la
 *    signature exacte d'une page générée.
 *  · TROIS kickers au total, pas huit. Les autres sections s'ouvrent sur un
 *    titre nu, ou sur rien.
 *  · La PHOTOGRAPHIE est structurante, pas décorative. Là où une image manque,
 *    un cadre d'attente conçu tient la place, avec l'intitulé du sujet.
 *  · Icônes issues de Phosphor (MIT), vendorisées en sprite. Aucun tracé
 *    dessiné à la main.
 */

import { business as B, photos, brand, locales, SITE_URL } from './business.mjs';
import { SPRITE, icon } from './icons.mjs';
import { pages as SUBPAGES } from './pages.mjs';
import { runtimeScripts } from './runtime-config.mjs';

/* ---------------------------------------------------------------- helpers */

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
           .replace(/"/g, '&quot;').replace(/'/g, '&#39;');


const DAY_SCHEMA = {
  monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday', thursday: 'Thursday',
  friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday',
};
const WEEK = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

function openingHoursSchema() {
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

/** "Lundi – Vendredi 09:00–13:00 et 14:30–18:30 · Samedi 09:00–13:00", from real data. */
function humanHours(t) {
  const sig = (slots) => slots.map(([a, b]) => `${a}–${b}`).join(` ${t.center.slotAnd} `);
  const groups = [];
  for (const { day, slots } of B.hours) {
    if (!slots.length) continue;
    const s = sig(slots), idx = WEEK.indexOf(day), last = groups.at(-1);
    if (last && last.sig === s && last.endIdx === idx - 1) { last.end = day; last.endIdx = idx; }
    else groups.push({ start: day, end: day, sig: s, endIdx: idx });
  }
  return groups.map((g) => {
    const days = g.start === g.end
      ? esc(t.center.days[g.start])
      : `${esc(t.center.days[g.start])} – ${esc(t.center.days[g.end])}`;
    return `${days} <span class="lat" dir="ltr">${g.sig}</span>`;
  }).join(' · ');
}

/**
 * Compact variant of humanHours for the hero button sub-line, built from the
 * SAME business.hours data. v2 had these hours hand-written in the three
 * content files — the exact "never hardcode hours" rule the rest of the site
 * enforces. Abbreviated day names, slots joined with a comma.
 */
function compactHours(t) {
  const short = t.center.daysShort || t.center.days;
  const sig = (slots) => slots.map(([a, b]) => `${a}–${b}`).join(', ');
  const groups = [];
  for (const { day, slots } of B.hours) {
    if (!slots.length) continue;
    const s = sig(slots), idx = WEEK.indexOf(day), last = groups.at(-1);
    if (last && last.sig === s && last.endIdx === idx - 1) { last.end = day; last.endIdx = idx; }
    else groups.push({ start: day, end: day, sig: s, endIdx: idx });
  }
  return groups.map((g) => {
    const days = g.start === g.end
      ? esc(short[g.start])
      : `${esc(short[g.start])}–${esc(short[g.end])}`;
    // Times stay latin and LTR even inside Arabic copy.
    return `${days} <span class="lat" dir="ltr">${g.sig}</span>`;
  }).join(' · ');
}

/**
 * Horaires groupés en lignes { jours, heures }, pour la colonne du footer.
 * Même regroupement que humanHours, mais rendu en lignes empilées : dans une
 * colonne étroite, « Lundi – Vendredi » au-dessus de ses créneaux se lit mieux
 * que la même information sur une seule ligne qui se casse n'importe où.
 */
function hoursRows(t) {
  const sig = (slots) => slots.map(([a, b]) => `${a}–${b}`).join(' · ');
  const rows = [];
  for (const { day, slots } of B.hours) {
    const s = slots.length ? sig(slots) : null;
    const idx = WEEK.indexOf(day), last = rows.at(-1);
    if (last && last.sig === s && last.endIdx === idx - 1) { last.end = day; last.endIdx = idx; }
    else rows.push({ start: day, end: day, sig: s, endIdx: idx });
  }
  return rows.map((r) => ({
    days: r.start === r.end
      ? esc(t.center.days[r.start])
      : `${esc(t.center.days[r.start])} – ${esc(t.center.days[r.end])}`,
    hours: r.sig
      ? `<span class="lat" dir="ltr">${r.sig}</span>`
      : `<span class="footer__off">${esc(t.center.closed)}</span>`,
  }));
}

const waLink = (prefill) =>
  B.whatsapp ? `https://wa.me/${B.whatsapp}?text=${encodeURIComponent(prefill)}` : null;

/* ------------------------------------------------------------ photo slots */

/**
 * Renders a photograph, or a designed holding frame when the file does not
 * exist yet. The frame is deliberate (brand gradient, wave motif, subject
 * label), never a broken image and never an unrelated stock photo: for a
 * health business, a random image is worse than an honest gap.
 */
function photoSlot(key, t, { className = '', sizes = '', up = '' } = {}) {
  const p = photos[key];
  if (!p) return '';
  const alt = esc(p.alt[t.code] || p.alt.fr);
  const cls = `photo ${className}`.trim();

  if (p.src) {
    return `<figure class="${cls}" style="--ratio:${p.ratio}">
      <img src="${up}${esc(p.src)}" alt="${alt}"
           ${p.priority ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"
           ${sizes ? `sizes="${sizes}"` : ''}>
    </figure>`;
  }
  return `<figure class="${cls} photo--pending" style="--ratio:${p.ratio}"
                  role="img" aria-label="${alt}">
    <span class="photo__wave" aria-hidden="true"></span>
    <figcaption><span class="photo__tag">${esc(t.photo.pending)}</span>${alt}</figcaption>
  </figure>`;
}

/* ============================================================== the render */

export default function render(t, { alternates }) {
  const loc = locales.find((l) => l.code === t.code);
  const rtl = t.dir === 'rtl';
  const up = loc.code === B.defaultLang ? '' : '../';
  const canonical = SITE_URL + loc.path;
  const wa = waLink(t.contact.whatsappPrefill);
  const ogImage = `${SITE_URL}/v3/assets/img/og-${t.code}.png`;
  const O = t.contact.options;
  const hours = humanHours(t);
  const availability = O.call.availability.replace('{hours}', hours);

  const heading = esc(t.hero.title).replace(/\*([^*]+)\*/g, '<span class="accent">$1</span>');

  /* -- structured data ----------------------------------------------------- */
  const org = {
    '@type': ['MedicalBusiness', 'Store'],
    '@id': `${SITE_URL}/#organization`,
    name: B.name,
    ...(B.alternateName ? { alternateName: B.alternateName } : {}),
    description: t.meta.description,
    url: canonical,
    image: ogImage,
    logo: `${SITE_URL}/v3/assets/img/logo-audiolik.svg`,
    telephone: B.phoneE164,
    ...(B.email ? { email: B.email } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: B.street, addressLocality: B.city, addressRegion: B.region,
      ...(B.postalCode ? { postalCode: B.postalCode } : {}),
      addressCountry: B.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: B.geo.lat, longitude: B.geo.lng },
    hasMap: B.mapsPlaceUrl,
    openingHoursSpecification: openingHoursSchema(),
    areaServed: { '@type': 'City', name: B.city },
    availableLanguage: ['fr', 'ar', 'en'],
    currenciesAccepted: 'MAD',
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      org,
      { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: canonical, name: B.name,
        inLanguage: loc.htmlLang, publisher: { '@id': `${SITE_URL}/#organization` } },
      { '@type': 'FAQPage', '@id': `${canonical}#faq`,
        mainEntity: t.faq.items.map((f) => ({
          '@type': 'Question', name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })) },
      ...t.solutions.items.map((s) => ({
        '@type': 'Service', name: s.name, description: s.text,
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: { '@type': 'City', name: B.city },
      })),
    ],
  };

  /* -- conditional fragments ---------------------------------------------- */

  const activeClaims = Object.entries(B.claims).filter(([, on]) => on);
  const reassurance = activeClaims.length
    ? `<section class="band band--claims">
    <div class="shell band__row">
      ${activeClaims.map(([k]) => `<p class="band__item">${icon('check')}<span>
        <b>${esc(t.reassurance[k].title)}</b> ${esc(t.reassurance[k].text)}</span></p>`).join('')}
    </div>
  </section>` : '';

  const testimonials = t.testimonials.items.length
    ? `<section class="section" id="avis">
    <div class="shell">
      <h2 class="h2">${esc(t.testimonials.title)}</h2>
      <div class="quotes">
        ${t.testimonials.items.map((q) => `<figure class="quote">
          <blockquote>${esc(q.quote)}</blockquote>
          <figcaption>${esc(q.author)}${q.source ? ` · ${esc(q.source)}` : ''}</figcaption>
        </figure>`).join('')}
      </div>
    </div>
  </section>` : '';

  const contactForm = B.email
    ? `<form class="form" id="rdv-form" novalidate>
          <div class="field">
            <label for="f-name">${esc(t.contact.form.name)}</label>
            <input id="f-name" name="name" type="text" autocomplete="name" required
                   placeholder="${esc(t.contact.form.namePlaceholder)}">
            <p class="field__err" data-err-for="f-name"></p>
          </div>
          <div class="field">
            <label for="f-phone">${esc(t.contact.form.phone)}</label>
            <input id="f-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" required
                   placeholder="${esc(t.contact.form.phonePlaceholder)}">
            <p class="field__err" data-err-for="f-phone"></p>
          </div>
          <div class="field">
            <label for="f-reason">${esc(t.contact.form.reason)}</label>
            <select id="f-reason" name="reason">
              ${t.contact.form.reasons.map((r) => `<option>${esc(r)}</option>`).join('')}
            </select>
          </div>
          <div class="field">
            <label for="f-msg">${esc(t.contact.form.message)}</label>
            <textarea id="f-msg" name="message" rows="3"
                      placeholder="${esc(t.contact.form.messagePlaceholder)}"></textarea>
          </div>
          <button class="btn btn--light" type="submit">${esc(t.contact.form.submit)} ${icon('arrow-right')}</button>
          <p class="form__hint">${esc(t.contact.form.submitHint)}</p>
        </form>` : '';

  const factValue = (key) => ({
    address:  `<a href="${esc(B.mapsPlaceUrl)}" target="_blank" rel="noopener">${esc(B.street)}, ${esc(B.city)}</a>`,
    phone:    `<a href="tel:${B.phoneE164}" class="lat" dir="ltr">${esc(B.phoneDisplay)}</a>`,
    // Le quartier porte un nom français ; la page arabe en donne la forme arabe.
    district: esc(loc.code === 'ar' && B.districtAr ? B.districtAr : B.district),
    pluscode: `<span class="lat" dir="ltr">${esc(B.plusCode)}</span>`,
    landmark: esc(loc.code === 'ar' ? B.landmarkAr : loc.code === 'en' ? B.landmarkEn : B.landmark),
  }[key] || '');

  /* -- document ------------------------------------------------------------ */

  return `<!doctype html>
<html lang="${loc.htmlLang}" dir="${t.dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(t.meta.title)}</title>
<meta name="description" content="${esc(t.meta.description)}">
<link rel="canonical" href="${canonical}">
<meta name="theme-color" content="${brand.paper}" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#070F26" media="(prefers-color-scheme: dark)">
<meta name="color-scheme" content="light dark">

${alternates.map((a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${a.href}">`).join('\n')}
<link rel="alternate" hreflang="x-default" href="${SITE_URL}${locales[0].path}">

<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(B.name)}">
<meta property="og:locale" content="${loc.htmlLang.replace('-', '_')}">
<meta property="og:url" content="${canonical}">
<meta property="og:title" content="${esc(t.meta.title)}">
<meta property="og:description" content="${esc(t.meta.description)}">
<meta property="og:image" content="${ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(t.meta.ogAlt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(t.meta.title)}">
<meta name="twitter:description" content="${esc(t.meta.description)}">
<meta name="twitter:image" content="${ogImage}">

<meta name="geo.region" content="MA-06">
<meta name="geo.placename" content="${esc(B.city)}">
<meta name="geo.position" content="${B.geo.lat};${B.geo.lng}">
<meta name="ICBM" content="${B.geo.lat}, ${B.geo.lng}">

<link rel="icon" href="${up}assets/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="${up}assets/img/apple-touch-icon.png">

<!-- Self-hosted: zero third-party requests, so no visitor IP leaves for a font CDN. -->
<link rel="preload" as="font" type="font/woff2" href="${up}assets/fonts/gabarito-600-latin.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="${up}assets/fonts/figtree-400-latin.woff2" crossorigin>
<link rel="stylesheet" href="${up}assets/fonts/fonts.css">
<link rel="stylesheet" href="${up}assets/css/site.css">

<script>
/* Applied before first paint so a dark-mode visitor never sees a light flash. */
(function(){try{var t=localStorage.getItem('audiolik-theme');
if(t==='dark'||t==='light')document.documentElement.dataset.theme=t;}catch(e){}})();
</script>

<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
</head>
<body>
${SPRITE}
<a class="skip-link" href="#main">${esc(t.meta.skipToContent)}</a>

<header class="header" id="header">
  <div class="shell header__inner">
    <a class="brand" href="${loc.path}" aria-label="${esc(B.name)} — ${esc(brand.tagline)}">
      <img src="${up}assets/img/logo-header.svg" alt="${esc(B.name)} — ${esc(brand.tagline)}"
           width="322" height="98" class="brand__light">
      <img src="${up}assets/img/logo-header-inverse.svg" alt="" aria-hidden="true"
           width="322" height="98" class="brand__dark">
    </a>

    <nav class="nav" id="nav" aria-label="${esc(t.footer.nav)}">
      ${t.nav.items.map((n) => `<a class="nav__link" href="${n.href}">${esc(n.label)}</a>`).join('\n      ')}
    </nav>

    <div class="header__actions">
      <!-- Les deux glyphes sont rendus, le CSS n'en montre qu'un selon le thème :
           pas de bascule d'icône en JavaScript, donc rien ne clignote au chargement. -->
      <button class="iconbtn" id="theme-toggle" type="button"
              aria-label="${esc(t.meta.themeLabel)}" title="${esc(t.meta.themeLabel)}">
        <span class="iconbtn__light">${icon('moon')}</span>
        <span class="iconbtn__dark">${icon('sun')}</span>
      </button>
      <div class="lang">
        <button class="lang__toggle" id="lang-toggle" aria-expanded="false"
                aria-controls="lang-menu" aria-label="${esc(t.meta.langLabel)}">
          <span>${esc(loc.short)}</span>${icon('caret-down')}
        </button>
        <ul class="lang__menu" id="lang-menu" role="list">
          ${locales.map((l) => `<li><a href="${l.path}" lang="${l.code}" hreflang="${l.code}"
             ${l.code === t.code ? 'aria-current="true"' : ''}>${esc(l.label)}
             <span class="lang-native">${esc(l.short)}</span></a></li>`).join('\n          ')}
        </ul>
      </div>
      <a class="btn btn--sm btn--hero" href="#contact">${esc(t.nav.cta)}</a>
      <button class="burger" id="burger" aria-expanded="false" aria-controls="nav"
              aria-label="${esc(t.nav.menuOpen)}" data-label-open="${esc(t.nav.menuOpen)}"
              data-label-close="${esc(t.nav.menuClose)}"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>

<main id="main">

  <!-- ═══ 1. HERO — asymmetric split, four text blocks, photograph carries the right ═══ -->
  <section class="hero">
    <!-- Watermark of the mark, ≤5% opacity: the depth v1 had and v2 lost.
         .hero is overflow:hidden so it can never cause horizontal scroll. -->
    <img class="hero__watermark" src="${up}assets/img/logo-mark.svg" alt="" aria-hidden="true">
    <!-- Une SEULE émanation au chargement, pas une boucle : le geste dit
         « onde sonore » (le motif du symbole), la boucle dirait « bannière ». -->
    <span class="hero__pulse" aria-hidden="true"><i></i><i></i><i></i></span>
    <div class="shell hero__grid">
      <div class="hero__copy">
        <p class="status" id="open-status" data-open="false">
          <span class="status__dot"></span><span id="open-status-text"></span>
        </p>
        <h1>${heading}</h1>
        <p class="hero__lede">${esc(t.hero.lede)}</p>
        <div class="hero__cta">
          <a class="btn btn--stack" href="tel:${B.phoneE164}">
            <span class="btn__row">${icon('phone')}<span class="lat" dir="ltr">${esc(B.phoneDisplay)}</span></span>
            <!-- Generated from business.hours (compactHours) — never hand-written.
                 No dir="ltr" wrapper: day names are localized, only the numeric
                 time ranges are wrapped LTR inside. -->
            <span class="btn__sub">${compactHours(t)}</span>
          </a>
          ${wa ? `<a class="btn btn--wa" href="${esc(wa)}" target="_blank" rel="noopener">
            ${icon('whatsapp-logo')}${esc(t.hero.ctaWhatsapp)}
          </a>` : ''}
        </div>
      </div>
      <div class="hero__media">${photoSlot('hero', t, { sizes: '(min-width: 64rem) 40vw, 90vw', up })}</div>
    </div>
  </section>

  ${reassurance}

  <!-- ═══ 2. SIGNES — typographic list. Sentences you read, not cards you scan ═══ -->
  <section class="section section--signs" id="audition">
    <div class="shell">
      <div class="prose">
        <h2 class="h2">${esc(t.signs.title)}</h2>
        <p class="lede">${esc(t.signs.lede)}</p>
      </div>
      <ol class="signs">
        ${t.signs.items.map((s, i) => `<li class="sign" data-reveal style="--d:${i * 50}ms">
          <span class="sign__ico">${icon(s.icon)}</span>
          <p>${esc(s.text)}</p>
        </li>`).join('\n        ')}
      </ol>
      <p class="signs__note">${icon('info')}<span>${esc(t.signs.footnote)}</span></p>
    </div>
  </section>

  <!-- ═══ 3. TEST — interactive panel on an inverted band (kicker 1 of 3) ═══ -->
  <section class="section section--invert" id="test">
    <div class="shell">
      <div class="prose prose--center">
        <p class="kicker">${esc(t.quiz.kicker)}</p>
        <h2 class="h2">${esc(t.quiz.title)}</h2>
        <p class="lede">${esc(t.quiz.lede)}</p>
      </div>

      <div class="quiz" data-reveal>
        <div id="quiz-run">
          <div class="quiz__bar"><i id="quiz-progress"></i></div>
          <p class="quiz__count" id="quiz-count"></p>
          <p class="quiz__q" id="quiz-question"></p>
          <div class="quiz__answers" id="quiz-answers"></div>
        </div>
        <div id="quiz-result" class="quiz__result" hidden>
          <div class="quiz__score"><b id="quiz-score">0</b><span>${esc(t.quiz.scoreLabel)}</span></div>
          <h3 id="quiz-title"></h3>
          <p id="quiz-text"></p>
          <div class="quiz__actions">
            <a class="btn" id="quiz-cta" href="#contact">${esc(t.quiz.ctaBook)} ${icon('arrow-right')}</a>
            <button class="btn btn--ghost" type="button" id="quiz-restart">${esc(t.quiz.ctaRestart)}</button>
          </div>
        </div>
        <p class="disclaimer">${icon('warning-circle')}<span>${esc(t.quiz.disclaimer)}</span></p>
      </div>
    </div>
  </section>

  <!-- ═══ 4. PARCOURS — vertical timeline. The continuity IS the message ═══ -->
  <section class="section" id="parcours">
    <div class="shell journey">
      <div class="journey__intro">
        <h2 class="h2">${esc(t.journey.title)}</h2>
        <p class="lede">${esc(t.journey.lede)}</p>
        ${photoSlot('fitting', t, { className: 'photo--aside', up })}
      </div>
      <ol class="timeline">
        ${t.journey.steps.map((s, i) => `<li class="tl" data-reveal style="--d:${i * 60}ms">
          <span class="tl__node">${icon(s.icon)}</span>
          <div class="tl__body">
            <p class="tl__meta">${esc(s.meta)}</p>
            <h3>${esc(s.title)}</h3>
            <p>${esc(s.text)}</p>
          </div>
        </li>`).join('\n        ')}
      </ol>
    </div>
  </section>

  <!-- ═══ 5. SOLUTIONS — asymmetric bento, six items, six cells (kicker 2 of 3) ═══ -->
  <section class="section section--tint" id="solutions">
    <div class="shell">
      <div class="prose">
        <p class="kicker">${esc(t.solutions.kicker)}</p>
        <h2 class="h2">${esc(t.solutions.title)}</h2>
        <p class="lede">${esc(t.solutions.lede)}</p>
      </div>
      <div class="bento">
        ${t.solutions.items.map((s, i) => `<article class="cell cell--${s.size}" data-reveal style="--d:${i * 55}ms">
          ${s.photo ? photoSlot(s.photo, t, { className: 'photo--cell', up }) : ''}
          <div class="cell__body">
            <p class="cell__tag">${esc(s.tag)}</p>
            <h3>${esc(s.name)}</h3>
            <p>${esc(s.text)}</p>
          </div>
        </article>`).join('\n        ')}
      </div>
    </div>
  </section>

  <!-- ═══ 6. BUDGET — editorial columns, no cards ═══ -->
  <section class="section" id="budget">
    <div class="shell budget">
      <div class="budget__arg" data-reveal>
        <h2 class="h2">${esc(t.pricing.title)}</h2>
        ${t.pricing.argument.map((p) => `<p>${esc(p)}</p>`).join('\n        ')}
        <p class="budget__note">${icon('info')}<span>${esc(t.pricing.note)}</span></p>
      </div>
      <aside class="budget__box" data-reveal style="--d:90ms">
        <h3>${esc(t.pricing.includedTitle)}</h3>
        <ul class="ticks">
          ${t.pricing.included.map((x) => `<li>${icon('check')}<span>${esc(x)}</span></li>`).join('\n          ')}
        </ul>
        <div class="budget__cover">
          <h4>${esc(t.pricing.coverageTitle)}</h4>
          <p>${esc(t.pricing.coverage)}</p>
          ${t.pricing.coverageLink ? `<p><a href="${loc.path}${esc(t.pricing.coverageLink.slug)}/">${esc(t.pricing.coverageLink.label)} ${icon('arrow-right')}</a></p>` : ''}
        </div>
      </aside>
    </div>
  </section>

  <!-- ═══ 7. LE CENTRE — split, photographs plus map ═══ -->
  <section class="section section--tint" id="centre">
    <div class="shell">
      <div class="prose">
        <h2 class="h2">${esc(t.center.title)}</h2>
        <p class="lede">${esc(t.center.lede)}</p>
      </div>

      <div class="centre">
        <div class="centre__photos" data-reveal>
          ${photoSlot('storefront', t, { up })}
          ${photoSlot('booth', t, { up })}
        </div>

        <div class="centre__info" data-reveal style="--d:80ms">
          <dl class="facts">
            ${t.center.facts.map((f) => `<div class="fact">
              <dt>${esc(f.label)}</dt><dd>${factValue(f.key)}</dd>
            </div>`).join('\n            ')}
          </dl>

          <div class="hours">
            <h3>${esc(t.center.hoursTitle)}</h3>
            <ul id="hours-list">
              ${B.hours.map(({ day, slots }) => {
                const closed = slots.length === 0;
                const txt = closed ? esc(t.center.closed) : slots.map(([a, b]) => `${a}–${b}`).join(' · ');
                return `<li data-day="${day}" data-closed="${closed}">
                <span class="d">${esc(t.center.days[day])}</span>
                <span class="h lat" dir="ltr">${txt}</span>
              </li>`;
              }).join('\n              ')}
            </ul>
          </div>

          <a class="btn btn--ghost" href="${esc(B.mapsDirectionsUrl)}" target="_blank" rel="noopener">
            ${icon('path')} ${esc(t.center.directions)}
          </a>
        </div>

        <div class="centre__map" data-reveal style="--d:140ms">
          <iframe src="${esc(B.mapsEmbedUrl)}" title="${esc(t.center.mapTitle)}"
                  loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </section>

  ${testimonials}

  <!-- ═══ 8. FAQ — accordion ═══ -->
  <section class="section" id="faq">
    <div class="shell">
      <h2 class="h2 h2--wide">${esc(t.faq.title)}</h2>
      <div class="faq">
        ${t.faq.items.map((f, i) => `<details${i === 0 ? ' open' : ''} data-reveal style="--d:${Math.min(i, 5) * 40}ms">
          <summary>${esc(f.q)}</summary>
          <div>${esc(f.a)}</div>
        </details>`).join('\n        ')}
      </div>
    </div>
  </section>

  <!-- ═══ 9. CONTACT — the two booking routes (kicker 3 of 3) ═══ -->
  <section class="section section--invert" id="contact">
    <div class="shell">
      <div class="prose">
        <p class="kicker">${esc(t.contact.kicker)}</p>
        <h2 class="h2">${esc(t.contact.title)}</h2>
        <p class="lede">${esc(t.contact.lede)}</p>
      </div>

      <div class="routes">
        <article class="route" id="opt-call" data-state="closed" data-reveal>
          <p class="route__tag">${esc(O.call.tag)}</p>
          <h3>${esc(O.call.title)}</h3>
          <p class="route__text">${esc(O.call.text)}</p>
          <p class="route__state"><span class="status__dot"></span><span id="call-state-text">${esc(O.call.closed)}</span></p>
          <a class="btn route__cta" href="tel:${B.phoneE164}">
            ${icon('phone')}<span class="lat" dir="ltr">${esc(B.phoneDisplay)}</span>
          </a>
          <p class="route__foot">${icon('clock')}<span>${availability}</span></p>
          <span class="route__badge" hidden>${esc(O.recommended)}</span>
        </article>

        ${wa ? `<article class="route route--wa" id="opt-wa" data-reveal style="--d:100ms">
          <p class="route__tag">${esc(O.whatsapp.tag)}</p>
          <h3>${esc(O.whatsapp.title)}</h3>
          <p class="route__text">${esc(O.whatsapp.text)}</p>
          <p class="route__state"><span class="status__dot status__dot--on"></span><span>${esc(O.whatsapp.note)}</span></p>
          <a class="btn btn--wa route__cta" href="${esc(wa)}" target="_blank" rel="noopener">
            ${icon('whatsapp-logo')}${esc(O.whatsapp.cta)}
          </a>
          <p class="route__foot">${icon('chat-circle-text')}<span>« ${esc(t.contact.whatsappPrefill)} »</span></p>
          <span class="route__badge" hidden>${esc(O.recommended)}</span>
        </article>` : ''}
      </div>

      <p class="onsite">
        ${icon('map-pin')}
        <span>${esc(t.contact.onsite.label)} <strong>${esc(B.street)}, ${esc(B.city)}</strong></span>
        <a href="${esc(B.mapsDirectionsUrl)}" target="_blank" rel="noopener">${esc(t.contact.onsite.cta)} ${icon('arrow-right')}</a>
      </p>

      ${contactForm ? `<div class="contact__form">
        <div class="contact__formIntro">
          <h3>${esc(t.contact.form.title)}</h3>
          <p>${esc(t.contact.form.intro)}</p>
        </div>
        ${contactForm}
      </div>` : ''}
    </div>
  </section>

</main>

<footer class="footer">
  <div class="shell">
    <div class="footer__grid footer__grid--wide">
      <div class="footer__brand">
        <img src="${up}assets/img/logo-horizontal-inverse.svg"
             alt="${esc(B.name)} — ${esc(brand.tagline)}" width="322" height="98" loading="lazy">
        <p>${esc(t.footer.tagline)}</p>
      </div>
      <div>
        <h3>${esc(t.footer.nav)}</h3>
        <ul class="footer__nav">${t.nav.items.map((n) => `<li><a href="${n.href}">${esc(n.label)}</a></li>`).join('')}</ul>
      </div>
      <div>
        <h3>${esc(t.footer.contactTitle)}</h3>
        <ul class="footer__contact">
          <li>${icon('phone')}<a href="tel:${B.phoneE164}" class="lat" dir="ltr">${esc(B.phoneDisplay)}</a></li>
          ${wa ? `<li>${icon('whatsapp-logo')}<a href="${esc(wa)}" target="_blank" rel="noopener" class="lat" dir="ltr">${esc(B.whatsappDisplay)}</a></li>` : ''}
          ${B.email ? `<li>${icon('envelope-simple')}<a href="mailto:${esc(B.email)}" class="lat" dir="ltr">${esc(B.email)}</a></li>` : ''}
          <li>${icon('map-pin')}<a href="${esc(B.mapsPlaceUrl)}" target="_blank" rel="noopener">${esc(B.street)}, ${esc(B.city)}</a></li>
        </ul>
      </div>
      <div>
        <h3>${esc(t.footer.pagesTitle)}</h3>
        <ul class="footer__pages">${SUBPAGES.map((e) => `<li><a href="${loc.path}${e.slug}/">${esc(e[t.code].h1)}</a></li>`).join('')}</ul>
      </div>
      <div>
        <h3>${esc(t.center.hoursTitle)}</h3>
        <ul class="footer__hours">
          ${hoursRows(t).map((r) => `<li><span>${r.days}</span>${r.hours}</li>`).join('')}
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__legal">${t.footer.legal.map((p) => `<p>${esc(p)}</p>`).join('')}</div>
      <p class="footer__copy">
        <span>© <span class="lat">${new Date().getUTCFullYear()}</span> ${esc(B.name)}. ${esc(t.footer.rights)}</span>
        <a href="#main">${esc(t.footer.backToTop)} ${icon('arrow-up')}</a>
      </p>
    </div>
  </div>
</footer>

<div class="callbar" id="callbar">
  <a class="btn btn--ghost" href="tel:${B.phoneE164}"
     aria-label="${esc(O.call.cta)} ${esc(B.phoneDisplay)}">${icon('phone')}<span class="lat" dir="ltr">${esc(B.phoneDisplay)}</span></a>
  ${wa ? `<a class="btn btn--wa" href="${esc(wa)}" target="_blank" rel="noopener">${icon('whatsapp-logo')}${esc(O.whatsapp.cta)}</a>`
       : `<a class="btn" href="#contact">${esc(t.nav.cta)}</a>`}
</div>

${runtimeScripts(t, { up })}
</body>
</html>
`;
}
