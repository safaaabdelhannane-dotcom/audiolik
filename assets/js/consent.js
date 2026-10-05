/* =============================================================
   AUDIOLIK — Consentement aux cookies de mesure d'audience
   Fichier : /assets/js/consent.js  (charge en defer, sans dependance)

   Google Analytics ne se charge QUE si le visiteur a clique « Accepter ».
     localStorage['audiolik-consent'] = 'granted' -> analytics.js charge
                                       = 'denied'  -> rien n'est charge
                                       absent      -> bandeau affiche
   Les textes viennent de window.__AUDIOLIK__.consent (src/content/*.mjs,
   via src/runtime-config.mjs) : aucune chaine en dur ici.

   API : window.AudiolikConsent.reopen()  rouvre le choix
         (branche aussi sur tout bouton [data-consent-reopen]).
   ============================================================= */

(function () {
  'use strict';

  var KEY = 'audiolik-consent';
  var SRC = '/assets/js/analytics.js';
  var banner = null;
  var returnFocus = null;

  function read() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function write(v) {
    try { localStorage.setItem(KEY, v); } catch (e) { /* mode prive : choix valable pour cette page */ }
  }

  function loadAnalytics() {
    if (window.AudiolikAnalytics) { window.AudiolikAnalytics.load(); return; }
    if (document.querySelector('script[data-analytics]')) return;
    var s = document.createElement('script');
    s.src = SRC;
    s.async = true;
    s.setAttribute('data-analytics', '');
    s.onload = function () { if (window.AudiolikAnalytics) window.AudiolikAnalytics.load(); };
    document.head.appendChild(s);
  }

  function hide() {
    if (!banner) return;
    banner.hidden = true;
    if (returnFocus && document.contains(returnFocus)) returnFocus.focus();
    returnFocus = null;
  }

  function choose(value) {
    write(value);
    if (value === 'granted') {
      loadAnalytics();
    } else if (window.AudiolikAnalytics) {
      window.AudiolikAnalytics.disable();
    }
    hide();
  }

  function button(label, value) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'btn btn--sm btn--ghost';
    b.textContent = label;
    b.addEventListener('click', function () { choose(value); });
    return b;
  }

  function build() {
    var S = (window.__AUDIOLIK__ && window.__AUDIOLIK__.consent) || null;
    if (!S) return null;

    var el = document.createElement('section');
    el.className = 'consent';
    el.id = 'consent';
    el.setAttribute('role', 'region');
    el.setAttribute('aria-label', S.label);
    el.hidden = true;

    var title = document.createElement('p');
    title.className = 'consent__title';
    title.textContent = S.title;

    var text = document.createElement('p');
    text.className = 'consent__text';
    text.textContent = S.text;

    var row = document.createElement('div');
    row.className = 'consent__actions';
    // Refuser et Accepter ont exactement le meme poids visuel (CNDP / CNIL).
    row.appendChild(button(S.refuse, 'denied'));
    row.appendChild(button(S.accept, 'granted'));

    el.appendChild(title);
    el.appendChild(text);
    el.appendChild(row);

    // Echap ferme le bandeau sans enregistrer de choix : GA reste coupe.
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { e.stopPropagation(); hide(); }
    });

    document.body.appendChild(el);
    return el;
  }

  function show(focus) {
    if (!banner) banner = build();
    if (!banner) return;
    banner.hidden = false;
    if (focus) {
      returnFocus = document.activeElement;
      var first = banner.querySelector('button');
      if (first) first.focus();
    }
  }

  function reopen() { show(true); }

  window.AudiolikConsent = { reopen: reopen };

  // Liens « Gérer les cookies » du pied de page : masques sans JavaScript,
  // puisqu'ils ne peuvent rien faire sans lui.
  var triggers = document.querySelectorAll('[data-consent-reopen]');
  for (var i = 0; i < triggers.length; i++) {
    triggers[i].hidden = false;
    triggers[i].addEventListener('click', reopen);
  }

  var state = read();
  if (state === 'granted') loadAnalytics();
  else if (state !== 'denied') show(false);
})();
