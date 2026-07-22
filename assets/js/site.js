/* AudioLik v2 — comportement. Aucune dépendance, aucun appel réseau.
   Sans JavaScript la page reste entièrement lisible et tous les liens
   (téléphone, WhatsApp, itinéraire) fonctionnent. */

(() => {
  'use strict';

  const CFG = window.__AUDIOLIK__ || {};
  const S = CFG.strings || {};
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------- thème */

  const THEME_KEY = 'audiolik-theme';
  const themeBtn = $('#theme-toggle');
  if (themeBtn) {
    const systemDark = matchMedia('(prefers-color-scheme: dark)');
    const current = () =>
      document.documentElement.dataset.theme || (systemDark.matches ? 'dark' : 'light');
    const label = () => (current() === 'dark' ? S.themeLight : S.themeDark);
    const sync = () => {
      themeBtn.setAttribute('aria-label', label());
      themeBtn.setAttribute('title', label());
      themeBtn.dataset.mode = current();
    };
    themeBtn.addEventListener('click', () => {
      const next = current() === 'dark' ? 'light' : 'dark';
      /* View Transition : un cross-fade UNIQUE de toute la page. La transition
         CSS du body de v2 ne fondait que background/color du body pendant que
         sections, cartes et bordures snapaient — bascule déchirée. */
      const apply = () => { document.documentElement.dataset.theme = next; };
      if (!reduceMotion && document.startViewTransition) {
        document.startViewTransition(apply);
      } else {
        apply();
      }
      try { localStorage.setItem(THEME_KEY, next); } catch { /* mode privé */ }
      sync();
    });
    // Suivre l'OS tant que l'utilisateur n'a pas choisi explicitement.
    systemDark.addEventListener('change', () => {
      let stored = null;
      try { stored = localStorage.getItem(THEME_KEY); } catch { /* ignore */ }
      if (!stored) sync();
    });
    sync();
  }

  /* --------------------------------------------------------------- header
     Une sentinelle observée plutôt qu'un écouteur de scroll : celui-ci se
     déclenche à chaque frame, la sentinelle ne parle que sur franchissement. */

  const header = $('#header');
  if (header && 'IntersectionObserver' in window) {
    const sentinel = document.createElement('div');
    sentinel.setAttribute('aria-hidden', 'true');
    sentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:8px;pointer-events:none';
    document.body.prepend(sentinel);
    new IntersectionObserver(
      ([e]) => header.setAttribute('data-stuck', String(!e.isIntersecting)),
      { threshold: 0 }
    ).observe(sentinel);
  }

  /* -------------------------------------------------------- tiroir mobile */

  const burger = $('#burger');
  const nav = $('#nav');
  if (burger && nav) {
    const setNav = (open) => {
      burger.setAttribute('aria-expanded', String(open));
      nav.setAttribute('data-open', String(open));
      burger.setAttribute('aria-label', burger.dataset[open ? 'labelClose' : 'labelOpen'] || '');
      document.documentElement.style.overflow = open ? 'hidden' : '';
    };
    burger.addEventListener('click', () => setNav(burger.getAttribute('aria-expanded') !== 'true'));
    nav.addEventListener('click', (e) => { if (e.target.closest('a')) setNav(false); });
    addEventListener('keydown', (e) => { if (e.key === 'Escape') setNav(false); });
    matchMedia('(min-width: 62rem)').addEventListener('change', (e) => { if (e.matches) setNav(false); });
  }

  /* ------------------------------------------------------------- langues */

  const langBtn = $('#lang-toggle');
  const langMenu = $('#lang-menu');
  if (langBtn && langMenu) {
    const setLang = (open) => {
      langBtn.setAttribute('aria-expanded', String(open));
      langMenu.setAttribute('data-open', String(open));
    };
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setLang(langBtn.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('click', (e) => { if (!e.target.closest('.lang')) setLang(false); });
    addEventListener('keydown', (e) => { if (e.key === 'Escape') setLang(false); });
  }

  /* ------------------------------------------------------------ révélation */

  const revealables = $$('[data-reveal]');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealables.forEach((el) => el.setAttribute('data-reveal', 'in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.setAttribute('data-reveal', 'in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    revealables.forEach((el) => io.observe(el));
  }

  /* ------------------------------------------------------------ scrollspy */

  const navLinks = $$('.nav__link').filter((a) => a.hash);
  const sections = navLinks.map((a) => $(a.hash)).filter(Boolean);
  if (sections.length && 'IntersectionObserver' in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const link = navLinks.find((a) => a.hash === '#' + entry.target.id);
        if (link && entry.isIntersecting) {
          navLinks.forEach((a) => a.removeAttribute('aria-current'));
          link.setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => spy.observe(s));
  }

  /* --------------------------------------------------- bandeau d'appel */

  const callbar = $('#callbar');
  const hero = $('.hero');
  if (callbar && hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(
      ([e]) => callbar.setAttribute('data-show', String(!e.isIntersecting)),
      { rootMargin: '-70% 0px 0px 0px' }
    ).observe(hero);
  }

  /* ------------------------------------------- ouvert / fermé, à Casablanca
     Le visiteur peut être n'importe où ; le centre est toujours à l'heure
     d'Africa/Casablanca. Le jour et l'heure sont donc lus dans ce fuseau. */

  const DAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  function nowInShopTz() {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: CFG.tz || 'Africa/Casablanca',
      weekday: 'long', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
    }).formatToParts(new Date());
    const get = (type) => parts.find((p) => p.type === type)?.value || '';
    return { day: get('weekday').toLowerCase(), minutes: Number(get('hour')) * 60 + Number(get('minute')) };
  }

  const toMin = (hhmm) => { const [h, m] = hhmm.split(':').map(Number); return h * 60 + m; };

  function openState() {
    const hours = CFG.hours || [];
    if (!hours.length) return null;
    const { day, minutes } = nowInShopTz();
    const idx = DAYS.indexOf(day);
    const today = hours.find((h) => h.day === day);

    for (const [a, b] of today?.slots || []) {
      if (minutes >= toMin(a) && minutes < toMin(b)) return { open: true, until: b, day };
    }
    const later = (today?.slots || []).find(([a]) => minutes < toMin(a));
    if (later) return { open: false, next: later[0], day };
    for (let i = 1; i <= 7; i++) {
      const d = hours.find((h) => h.day === DAYS[(idx + i) % 7]);
      if (d && d.slots.length) return { open: false, next: d.slots[0][0], day };
    }
    return { open: false, day };
  }

  const status = $('#open-status');
  const statusText = $('#open-status-text');
  const optCall = $('#opt-call');
  const optWa = $('#opt-wa');

  /* Le numéro n'est jamais masqué ni désactivé : seule l'emphase bouge. */
  const applyOpenState = () => {
    const st = openState();
    if (!st) return;

    if (status && statusText) {
      status.setAttribute('data-open', String(st.open));
      statusText.textContent = st.open
        ? `${S.open} ${S.until} ${st.until}`
        : st.next ? `${S.closed} · ${S.opensAt} ${st.next}` : S.closed;
    }
    if (optCall) {
      optCall.setAttribute('data-state', st.open ? 'open' : 'closed');
      const label = $('#call-state-text');
      if (label) {
        label.textContent = st.open
          ? S.callOpen
          : st.next ? `${S.callClosed} · ${S.opensAt} ${st.next}` : S.callClosed;
      }
      const badge = $('.route__badge', optCall);
      if (badge) badge.hidden = !st.open;
    }
    if (optWa) {
      const badge = $('.route__badge', optWa);
      if (badge) badge.hidden = st.open;
    }
    $$('#hours-list li').forEach((li) =>
      li.setAttribute('data-today', String(li.dataset.day === st.day)));
  };
  applyOpenState();
  setInterval(applyOpenState, 60_000);

  /* ---------------------------------------------------------------- quiz */

  const quiz = CFG.quiz;
  const qRun = $('#quiz-run');
  const qResult = $('#quiz-result');

  if (quiz && qRun && qResult) {
    const elCount = $('#quiz-count');
    const elQuestion = $('#quiz-question');
    const elAnswers = $('#quiz-answers');
    const elProgress = $('#quiz-progress');
    const total = quiz.questions.length;
    let i = 0, score = 0;

    function paint() {
      /* scaleX compositor-only : la transition inline-size de v2 forçait
         layout+paint à chaque frame pendant 450 ms. */
      elProgress.style.setProperty('--p', String(i / total));
      elCount.textContent = (S.progress || '{n}/{total}')
        .replace('{n}', String(i + 1)).replace('{total}', String(total));
      elQuestion.textContent = quiz.questions[i];
      /* Continuité : la question est un nœud RÉUTILISÉ (textContent swap ne
         relance pas une animation CSS) → WAAPI, qui repart à chaque appel. */
      if (!reduceMotion && i > 0 && elQuestion.animate) {
        elQuestion.animate(
          [{ opacity: 0, transform: 'translateY(5px)' }, { opacity: 1, transform: 'none' }],
          { duration: 240, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' }
        );
      }
      elAnswers.replaceChildren(...quiz.answers.map((a, idx) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = a.label;
        b.style.setProperty('--i', String(idx));   // stagger d'entrée (CSS)
        b.addEventListener('click', () => {
          score += a.value; i += 1;
          i < total ? paint() : finish();
        });
        return b;
      }));
      elAnswers.firstElementChild?.focus({ preventScroll: true });
    }

    function finish() {
      elProgress.style.setProperty('--p', '1');
      const band = quiz.results.find((r) => score <= r.max) || quiz.results.at(-1);
      $('#quiz-score').textContent = String(score);
      $('#quiz-title').textContent = band.title;
      $('#quiz-text').textContent = band.text;

      /* Le score part dans le message WhatsApp : le centre ouvre la
         conversation en sachant déjà pourquoi la personne écrit. */
      const cta = $('#quiz-cta');
      if (cta && CFG.whatsapp && CFG.waQuizPrefill) {
        const max = quiz.questions.length * Math.max(...quiz.answers.map((a) => a.value));
        const text = CFG.waQuizPrefill.replace('{score}', String(score)).replace('{max}', String(max));
        cta.href = `https://wa.me/${CFG.whatsapp}?text=${encodeURIComponent(text)}`;
        cta.target = '_blank';
        cta.rel = 'noopener';
      }

      qRun.hidden = true;
      qResult.hidden = false;
      $('#quiz-title').setAttribute('tabindex', '-1');
      $('#quiz-title').focus({ preventScroll: true });
    }

    $('#quiz-restart')?.addEventListener('click', () => {
      i = 0; score = 0;
      qResult.hidden = true; qRun.hidden = false;
      paint();
    });

    paint();
  }

  /* -------------------------------------------------------------- formulaire */

  const form = $('#rdv-form');
  if (form && CFG.email) {
    const fields = [
      { el: $('#f-name'), required: true },
      { el: $('#f-phone'), required: true, test: (v) => v.replace(/\D/g, '').length >= 9, msg: S.invalidPhone },
    ];
    const validate = (f, silent) => {
      const v = f.el.value.trim();
      let err = '';
      if (f.required && !v) err = S.required || '';
      else if (v && f.test && !f.test(v)) err = f.msg || '';
      if (!silent) {
        f.el.closest('.field').setAttribute('data-invalid', String(Boolean(err)));
        const out = $(`[data-err-for="${f.el.id}"]`);
        if (out) out.textContent = err;
      }
      return !err;
    };
    fields.forEach((f) => {
      f.el.addEventListener('blur', () => validate(f));
      f.el.addEventListener('input', () => {
        if (f.el.closest('.field').getAttribute('data-invalid') === 'true') validate(f);
      });
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!fields.map((f) => validate(f)).every(Boolean)) {
        fields.find((f) => !validate(f, true))?.el.focus();
        return;
      }
      const L = S.labels || {};
      const body = [
        `${L.name}: ${$('#f-name').value.trim()}`,
        `${L.phone}: ${$('#f-phone').value.trim()}`,
        `${L.reason}: ${$('#f-reason').value}`,
        '', `${L.message}:`, $('#f-msg').value.trim(),
      ].join('\n');
      location.href = `mailto:${CFG.email}?subject=${encodeURIComponent(S.subject || '')}&body=${encodeURIComponent(body)}`;
    });
  }

  addEventListener('hashchange', () => {
    nav?.setAttribute('data-open', 'false');
    burger?.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
  });
})();
