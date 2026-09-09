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

  /* -- corps --------------------------------------------------------------- */
  const sections = page.sections
    .map((s) => {
      const paras = (s.p || []).map((p) => `<p>${rich(p)}</p>`).join('\n        ');
      const list = s.list && s.list.length
        ? `<ul class="ticks">${s.list.map((li) => `<li>${icon('check')}<span>${rich(li)}</span></li>`).join('')}</ul>`
        : '';
      return `      <h2>${esc(s.h2)}</h2>
        ${paras}
        ${list}`;
    })
    .join('\n\n');

  const faq = page.faq && page.faq.length
    ? `
    <section class="section section--tint">
      <div class="shell">
        <div class="prose"><p class="kicker">${esc(t.faq.title)}</p></div>
        <div class="faq">
          ${page.faq.map((f) => `<details><summary>${esc(f.q)}</summary><div><p>${rich(f.a)}</p></div></details>`).join('\n          ')}
        </div>
      </div>
    </section>`
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
      ${t.nav.items.map((n) => `<a class="nav__link" href="${home}${n.href}">${esc(n.label)}</a>`).join('\n      ')}
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
      <div class="prose page__body">
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
