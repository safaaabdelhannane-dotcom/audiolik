/**
 * AudioLik — gabarit des pages secondaires.
 *
 * La page d'accueil a son propre gabarit (template.mjs), riche et très composé.
 * Les pages secondaires sont éditoriales : un titre, une accroche, des sections
 * de texte, éventuellement une liste à cocher et une FAQ. Elles réutilisent la
 * même feuille de style, le même sprite d'icônes, le même en-tête et le même
 * pied de page, pour qu'un visiteur ne sente aucune couture.
 *
 * Chaque page existe dans les trois langues, chacune à son URL indexable :
 *
 *   <slug>/index.html        français
 *   ar/<slug>/index.html     العربية   (dir=rtl)
 *   en/<slug>/index.html     English
 */

import { business as B, brand, locales, SITE_URL } from './business.mjs';
import { SPRITE, icon } from './icons.mjs';
import { DEVICE_SVG } from './device-art.mjs';
import { IMG, alt as imgAlt, PAGE_IMAGES, CARD_PHOTOS } from './page-images.mjs';
import { pages as SUBPAGES } from './pages.mjs';
import { runtimeScripts } from './runtime-config.mjs';

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

/* Le texte des pages accepte un balisage minimal : *accent* et [libellé](url). */
function rich(s) {
  return esc(s)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*([^*]+)\*/g, '<strong>$1</strong>');
}

const waLink = (prefill) =>
  B.whatsapp ? `https://wa.me/${B.whatsapp}?text=${encodeURIComponent(prefill)}` : '';

/**
 * @param {object} page   contenu de la page dans UNE langue (voir src/pages.mjs)
 * @param {object} t      le module de contenu de la langue (fr/ar/en) — en-tête, pied de page
 * @param {object} opts   { lang, slug, widget } — widget: 'quiz' insère le test auditif
 */
export default function renderPage(page, t, { lang, slug, widget = null }) {
  const loc = locales.find((l) => l.code === lang);
  const rtl = loc.dir === 'rtl';

  // Profondeur : /slug/ → ../ ; /ar/slug/ et /en/slug/ → ../../
  const up = lang === B.defaultLang ? '../' : '../../';
  const home = loc.path;
  const canonical = `${SITE_URL}${loc.path}${slug}/`;
  const wa = waLink(t.contact.whatsappPrefill);
  const ogImage = `${SITE_URL}/assets/img/og-${lang}.png`;

  /* -- hreflang : la même page dans les trois langues ---------------------- */
  const alternates = locales
    .map((l) => `<link rel="alternate" hreflang="${l.htmlLang}" href="${SITE_URL}${l.path}${slug}/">`)
    .concat(`<link rel="alternate" hreflang="x-default" href="${SITE_URL}/${slug}/">`)
    .join('\n');

  /* -- données structurées ------------------------------------------------- */
  const graph = [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: B.name, item: `${SITE_URL}${loc.path}` },
        { '@type': 'ListItem', position: 2, name: page.h1, item: canonical },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': canonical,
      url: canonical,
      name: page.title,
      description: page.description,
      inLanguage: loc.htmlLang,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    },
  ];
  if (page.faq && page.faq.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonical}#faq`,
      mainEntity: page.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }
  const jsonLd = { '@context': 'https://schema.org', '@graph': graph };

  /* -- photos d'illustration ------------------------------------------------
     WebP en 800 et 1600 px (le navigateur choisit), JPEG en secours. Les
     dimensions sont fixées pour éviter tout décalage pendant le chargement. */
  const picture = (name, sizes, cls = '') => {
    const [w, h] = IMG[name];
    const base = `${up}assets/img/site/${name}`;
    return `<picture><source type="image/webp" srcset="${base}-800.webp 800w, ${base}-1600.webp ${w}w" sizes="${sizes}"><img${cls ? ` class="${cls}"` : ''} src="${base}-1200.jpg" alt="${esc(imgAlt(name, lang))}" width="${w}" height="${h}" loading="lazy" decoding="async"></picture>`;
  };
  const figures = (i) => (PAGE_IMAGES[slug] || [])
    .filter((f) => f.after === i && f.items.every((n) => IMG[n]))
    .map((f) => {
      const portrait = f.items.length === 1 && IMG[f.items[0]][1] > IMG[f.items[0]][0];
      const cls = f.items.length > 1 ? ' page__figure--gallery' : portrait ? ' page__figure--portrait' : '';
      const sizes = f.items.length > 1 ? '(min-width: 40rem) 15rem, 100vw' : '(min-width: 48rem) 44rem, 100vw';
      return `
        <figure class="page__figure${cls}">
          <div class="page__figure-media">${f.items.map((n) => picture(n, sizes)).join('')}</div>
        </figure>`;
    })
    .join('');

  /* -- corps --------------------------------------------------------------- */
  const sections = page.sections
    .map((s, i) => {
      const paras = (s.p || []).map((p) => `<p>${rich(p)}</p>`).join('\n        ');
      const list = s.list && s.list.length
        ? `<ul class="ticks">${s.list.map((li) => `<li>${icon('check')}<span>${rich(li)}</span></li>`).join('')}</ul>`
        : '';
      // Une section peut être un sous-titre (h3) de la précédente ; l'id sert d'ancre.
      const tag = s.h3 ? 'h3' : 'h2';
      const id = s.id ? ` id="${esc(s.id)}"` : '';
      return `      <${tag}${id}>${esc(s.h3 || s.h2)}</${tag}>
        ${paras}
        ${list}${figures(i)}`;
    })
    .join('\n\n');

  const faq = page.faq && page.faq.length
    ? `
    <section class="section section--tint"${page.faqTitle ? ' aria-labelledby="faq-titre"' : ''}>
      <div class="shell">
        <div class="prose"><p class="kicker">${esc(t.faq.title)}</p>${page.faqTitle ? `<h2 id="faq-titre">${esc(page.faqTitle)}</h2>` : ''}</div>
        <div class="faq"${page.faqTitle ? ' id="faq"' : ''}>
          ${page.faq.map((f) => `<details><summary>${esc(f.q)}</summary><div><p>${rich(f.a)}</p></div></details>`).join('\n          ')}
        </div>
      </div>
    </section>`
    : '';

  /* -- carte tarifaire (facultative) -----------------------------------------
     Trois cartes égales, chacune avec son lien WhatsApp prérempli. Placée juste
     après l'introduction, avant les sections de texte. Seules les pages qui
     déclarent `pricing` la reçoivent, avec leur CSS : les autres pages ne
     chargent pas un octet de plus. */
  const P = page.pricing;
  const pricing = P
    ? `      <div class="prose page__body">
      <h2 id="${esc(P.id || 'prix')}">${esc(P.h2)}</h2>
        ${(P.intro || []).map((p) => `<p>${rich(p)}</p>`).join('\n        ')}
      </div>

      <ul class="tarifs" role="list">${P.cards.map((c) => `
        <li class="tarif${c.featured ? ' tarif--featured' : ''}">
          <article class="tarif__card" aria-labelledby="tarif-${esc(c.key)}">
            ${c.badge ? `<p class="tarif__badge">${esc(c.badge)}</p>` : ''}
            ${CARD_PHOTOS[c.key] && IMG[CARD_PHOTOS[c.key]]
              ? `<figure class="tarif__visual tarif__visual--photo">${picture(CARD_PHOTOS[c.key], '(min-width: 60rem) 22rem, (min-width: 40rem) 34rem, 100vw')}<figcaption>${esc(c.visualCaption || '')}</figcaption></figure>`
              : c.visual && DEVICE_SVG[c.visual] ? `<figure class="tarif__visual">${DEVICE_SVG[c.visual]}<figcaption>${esc(c.visualCaption || '')}</figcaption></figure>` : ''}
            <h3 class="tarif__name" id="tarif-${esc(c.key)}">${esc(c.name)}</h3>
            <p class="tarif__price"><strong>${esc(c.price)}</strong><span>${esc(c.unit)}</span></p>
            <p class="tarif__desc">${esc(c.desc)}</p>
            ${P.brandsLabel && B.brands.length ? `<p class="tarif__brands">${esc(P.brandsLabel)} <span class="lat" dir="ltr">${B.brands.map(esc).join(' · ')}</span></p>` : ''}
            <ul class="ticks tarif__feats">${c.features.map((f) => `<li>${icon('check')}<span>${rich(f)}</span></li>`).join('')}</ul>
            ${B.whatsapp ? `<a class="btn${c.featured ? '' : ' btn--ghost'} tarif__btn" href="${esc(waLink(c.whatsappPrefill))}" target="_blank" rel="noopener" aria-label="${esc(c.ariaLabel)}">${icon('whatsapp-logo')}<span>${esc(c.cta)}</span></a>` : ''}
          </article>
        </li>`).join('')}
      </ul>

      <div class="tarifs__after">
        ${P.note ? `<p class="tarifs__note">${rich(P.note)}</p>` : ''}
        ${(P.after || []).map((p) => `<p>${rich(p)}</p>`).join('\n        ')}
        ${P.brandsNote && B.brands.length ? `<p class="tarifs__brands">${rich(P.brandsNote)}</p><ul class="brands" role="list">${B.brands.map((b) => `<li class="lat" dir="ltr">${esc(b)}</li>`).join('')}</ul>` : ''}
      </div>
`
    : '';

  const pricingCss = P
    ? `
/* Carte tarifaire : trois cartes égales sur ordinateur, une par ligne sur mobile. */
.tarifs { list-style: none; margin: clamp(1.75rem, 1.25rem + 1.5vw, 2.5rem) 0 0; padding: 0;
  display: grid; grid-template-columns: 1fr; gap: 1.25rem; max-width: 72rem; }
@media (min-width: 60rem) { .tarifs { grid-template-columns: repeat(3, minmax(0, 1fr)); align-items: stretch; } }
@media (min-width: 40rem) and (max-width: 59.99rem) { .tarifs { max-width: 34rem; } }
.tarif { display: flex; padding-block-start: .9rem; }   /* place réservée au badge, identique pour les trois */
.tarif__card { position: relative; display: flex; flex-direction: column; inline-size: 100%;
  background: var(--surface); border: 1px solid var(--rule); border-radius: var(--r-lg);
  box-shadow: var(--shadow); padding: clamp(1.5rem, 1.2rem + 1vw, 2rem); }
.tarif--featured .tarif__card { border: 2px solid var(--accent); box-shadow: var(--shadow-lg); }
.tarif__badge { position: absolute; inset-block-start: 0; inset-inline-start: 50%; transform: translate(-50%, -50%);
  margin: 0; padding: .35rem .85rem; border-radius: var(--r-pill); background: var(--accent); color: var(--on-accent);
  font-size: var(--label-size); font-weight: 700; letter-spacing: var(--label-track); text-transform: uppercase; white-space: nowrap; }
[dir='rtl'] .tarif__badge { transform: translate(50%, -50%); }
/* Arabe : pas d'espacement entre lettres (il casse les liaisons), corps un peu plus grand. */
[dir='rtl'] .tarif__name, [dir='rtl'] .tarif__badge { letter-spacing: 0; font-family: var(--font-arabic); }
[dir='rtl'] .tarif__name { font-size: 1rem; }
.tarif__name { margin: 0; font-family: var(--font-body); font-size: var(--label-size); font-weight: 700;
  letter-spacing: var(--label-track); color: var(--accent); }
.tarif__price { margin: .9rem 0 0; display: flex; flex-direction: column; gap: .2rem; }
.tarif__price strong { font-family: var(--font-display); font-weight: 600; color: var(--ink);
  font-size: clamp(1.625rem, 1.35rem + 1vw, 2.125rem); line-height: 1.15; letter-spacing: -.015em; overflow-wrap: anywhere; }
.tarif__price span { font-size: var(--t-sm); font-weight: 600; color: var(--ink-muted); }
.tarif__desc { margin: 1rem 0 0; color: var(--ink-muted); line-height: 1.5; }
.tarif__feats { margin: 1.25rem 0 1.75rem; padding-block-start: 1.25rem; border-block-start: 1px solid var(--rule); align-content: start; }
.tarif__btn { margin-block-start: auto; inline-size: 100%; padding-inline: 1rem; }
@media (max-width: 26rem), (min-width: 60rem) and (max-width: 74.99rem) { .tarif__btn { white-space: normal; text-align: center; text-wrap: balance; } }
.tarif, .tarif__card { min-inline-size: 0; }
.tarifs__after { max-width: 44rem; margin-block: 1.5rem clamp(2.5rem, 2rem + 2vw, 3.5rem); }
.tarifs__after p + p { margin-block-start: .85rem; }
.tarifs__note { padding: 1rem 1.15rem; background: var(--surface-2); border: 1px solid var(--rule);
  border-inline-start: 3px solid var(--accent); border-radius: var(--r-md); color: var(--ink); font-size: var(--t-sm); line-height: 1.55; }
.tarif__visual { margin: 0 0 1.1rem; padding: .9rem 1rem .6rem; border-radius: var(--r-md); background: var(--bg-tint);
  color: var(--accent); --dev-fill: var(--surface); --dev-surface: var(--surface); text-align: center; }
.tarif__visual svg { display: block; inline-size: 100%; max-inline-size: 11rem; block-size: auto; margin-inline: auto; }
.tarif__visual figcaption { margin-block-start: .35rem; font-size: var(--t-2xs, .8125rem); color: var(--ink-muted); }
.tarif__visual--photo { padding: 0; overflow: hidden; }
.tarif__visual--photo img { display: block; inline-size: 100%; block-size: auto; aspect-ratio: 4 / 3; object-fit: cover; }
.tarif__visual--photo figcaption { margin: 0; padding: .5rem .75rem .6rem; }
.tarif__brands { margin: .9rem 0 0; font-size: var(--t-2xs, .8125rem); font-weight: 600; color: var(--ink-muted); }
.tarif__brands span { color: var(--ink); font-weight: 700; letter-spacing: .02em; }
.brands { list-style: none; margin: .9rem 0 0; padding: 0; display: flex; flex-wrap: wrap; gap: .6rem; }
.brands li { padding: .45rem 1rem; border: 1px solid var(--rule-strong); border-radius: var(--r-md); background: var(--surface);
  font-family: var(--font-display); font-weight: 600; font-size: 1.05rem; letter-spacing: .02em; color: var(--ink); }
.page__body h3 { margin-block: 0 .75rem; }
.page__body .ticks + p { margin-block-start: 1.25rem; }`
    : '';

  const related = (page.related || [])
    .map((r) => `<a href="${loc.path}${r.slug}/">${esc(r.label)}</a>`)
    .join(' · ');

  /* -- widget : le test auditif, réutilisé tel quel depuis la page d'accueil --
     Le même balisage et la même configuration ; seul le bouton de fin change de
     cible, puisqu'il n'y a pas de formulaire de contact sur une page secondaire.
     assets/js/site.js n'active le module que si #quiz-run et #quiz-result
     existent : les autres pages ne chargent donc rien d'inutile. */
  const quiz = widget === 'quiz'
    ? `
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
              <a class="btn" id="quiz-cta" href="${home}#contact">${esc(t.quiz.ctaBook)} ${icon('arrow-right')}</a>
              <button class="btn btn--ghost" type="button" id="quiz-restart">${esc(t.quiz.ctaRestart)}</button>
            </div>
          </div>
          <p class="disclaimer">${icon('warning-circle')}<span>${esc(t.quiz.disclaimer)}</span></p>
        </div>
      </div>
    </section>`
    : '';

  return `<!doctype html>
<html lang="${loc.htmlLang}" dir="${loc.dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${canonical}">
${alternates}

<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0f1115" media="(prefers-color-scheme: dark)">
<meta name="color-scheme" content="light dark">

<meta property="og:type" content="article">
<meta property="og:site_name" content="${esc(B.name)}">
<meta property="og:locale" content="${loc.htmlLang.replace('-', '_')}">
<meta property="og:url" content="${canonical}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:image" content="${ogImage}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">

<meta name="geo.region" content="MA-06">
<meta name="geo.placename" content="${esc(B.city)}">
<meta name="geo.position" content="${B.geo.lat};${B.geo.lng}">
<meta name="ICBM" content="${B.geo.lat}, ${B.geo.lng}">

<link rel="icon" href="${up}assets/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="${up}assets/img/apple-touch-icon.png">

<link rel="preload" as="font" type="font/woff2" href="${up}assets/fonts/gabarito-600-latin.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="${up}assets/fonts/figtree-400-latin.woff2" crossorigin>
<link rel="stylesheet" href="${up}assets/fonts/fonts.css">
<link rel="stylesheet" href="${up}assets/css/site.css">

<script>
(function(){try{var t=localStorage.getItem('audiolik-theme');
if(t==='dark'||t==='light')document.documentElement.dataset.theme=t;}catch(e){}})();
</script>

<style>
/* Pages éditoriales : la feuille principale est pensée pour une page d'accueil
   très composée. Ici le texte se lit d'un trait, il lui faut sa propre respiration. */
/* L'introduction et le corps sont deux <article> distincts, pour qu'un bloc
   pleine largeur (le test auditif) puisse se glisser entre les deux. Sans ce
   bloc, les deux ne doivent former qu'une seule respiration : on annule alors
   la marge haute du second. */
.section--continued { padding-block-start: 0; }
/* Quand le test suit l'introduction, les deux doivent se toucher : le bandeau
   sombre fait déjà la séparation, un blanc de plus en ferait deux. */
.section--lead { padding-block-end: clamp(1.5rem, 1rem + 1.5vw, 2.5rem); }
.section--invert + .section--continued { padding-block-start: var(--section-y); }
.page__body h2 { margin-block: clamp(2.25rem, 1.5rem + 2vw, 3.25rem) .75rem; }
.page__body h2:first-child { margin-block-start: 0; }
.page__body p + p { margin-block-start: .85rem; }
.page__body .ticks { margin-block-start: 1.25rem; }
.page__cta { margin-block-start: clamp(2.5rem, 2rem + 2vw, 3.5rem); }
.page__related { margin-block-start: 1.25rem; font-size: var(--t-sm, .95rem); color: var(--ink-muted); }
.page__related a { color: inherit; }
/* Photos d'illustration dans le corps des pages. */
.page__figure { margin: clamp(1.5rem, 1.2rem + 1vw, 2.25rem) 0 0; }
.page__figure-media img { display: block; inline-size: 100%; block-size: auto; border-radius: var(--r-lg); background: var(--surface-2); }
.page__figure--portrait { max-inline-size: 26rem; }
.page__figure--gallery .page__figure-media { display: grid; gap: .75rem; }
@media (min-width: 40rem) { .page__figure--gallery .page__figure-media { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
.page__figure figcaption { margin-block-start: .5rem; font-size: var(--t-2xs, .8125rem); color: var(--ink-faint); }
/* Boutons d'appel : passent à la ligne sur petit écran au lieu de déborder. */
.page__cta .btn__row { flex-wrap: wrap; }
.page__cta .btn { max-inline-size: 100%; }${pricingCss}
</style>

<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
</head>
<body>
${SPRITE}
<a class="skip-link" href="#main">${esc(t.meta.skipToContent)}</a>

<header class="header" id="header">
  <div class="shell header__inner">
    <a class="brand" href="${home}" aria-label="${esc(B.name)} — ${esc(brand.tagline)}">
      <img src="${up}assets/img/logo-header.svg" alt="${esc(B.name)} — ${esc(brand.tagline)}"
           width="322" height="98" class="brand__light">
      <img src="${up}assets/img/logo-header-inverse.svg" alt="" aria-hidden="true"
           width="322" height="98" class="brand__dark">
    </a>

    <nav class="nav" id="nav" aria-label="${esc(t.footer.nav)}">
      ${t.nav.items.map((n) => `<a class="nav__link" href="${home}${n.href}"${n.href.startsWith(slug + '/') ? ' aria-current="page"' : ''}>${esc(n.label)}</a>`).join('\n      ')}
    </nav>

    <div class="header__actions">
      <a class="btn btn--sm" href="tel:${B.phoneE164}">${icon('phone')}<span>${esc(t.nav.cta)}</span></a>
    </div>
  </div>
</header>

<main id="main">
  <article class="section${quiz ? ' section--lead' : ''}">
    <div class="shell">
      <div class="prose">
        <p class="kicker">${esc(page.kicker)}</p>
        <h1>${esc(page.h1)}</h1>
        <p class="lede">${rich(page.lede)}</p>
      </div>
    </div>
  </article>
${quiz}
  <article class="section section--continued">
    <div class="shell">
${pricing}      <div class="prose page__body">
${sections}
      </div>

      <div class="prose page__cta">
        <p class="btn__row">
          <a class="btn" href="tel:${B.phoneE164}">${icon('phone')}<span class="lat" dir="ltr">${esc(B.phoneDisplay)}</span></a>
          ${wa ? `<a class="btn btn--wa" href="${esc(wa)}" target="_blank" rel="noopener">${icon('whatsapp-logo')}<span>${esc(t.hero.ctaWhatsapp)}</span></a>` : ''}
        </p>
        ${related ? `<p class="page__related">${related}</p>` : ''}
      </div>
    </div>
  </article>
${faq}
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
        <ul class="footer__nav">${t.nav.items.map((n) => `<li><a href="${home}${n.href}">${esc(n.label)}</a></li>`).join('')}</ul>
      </div>
      <div>
        <h3>${esc(t.footer.pagesTitle)}</h3>
        <ul class="footer__pages">${SUBPAGES.map((e) => `<li><a href="${loc.path}${e.slug}/">${esc(e[lang].h1)}</a></li>`).join('')}</ul>
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

${runtimeScripts(t, { up })}
</body>
</html>
`;
}
