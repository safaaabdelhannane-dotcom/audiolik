/**
 * AudioLik — configuration passée au JavaScript de la page.
 *
 * Le même bloc servait uniquement à la page d'accueil ; il est désormais
 * partagé, parce que le test auditif a maintenant sa propre page. Un seul
 * endroit à modifier : si une chaîne du quiz change, les deux emplacements
 * suivent.
 *
 * assets/js/site.js lit window.__AUDIOLIK__ et n'active chaque module que si
 * les éléments correspondants existent dans la page. Émettre la configuration
 * complète sur une page secondaire est donc sans effet de bord.
 */

import { business as B } from './business.mjs';

const jsStr = (s) => JSON.stringify(String(s)).replace(/</g, '\\u003c');

// Même règle pour les objets : une valeur contenant « </script> » ne doit
// jamais pouvoir refermer le <script> inline. Sortie identique pour JS.
const safeJson = (x) => JSON.stringify(x).replace(/</g, '\\u003c');

/**
 * @param {object} t   module de contenu de la langue (fr/ar/en)
 * @param {object} o   { up } profondeur relative vers la racine du site
 */
export function runtimeScripts(t, { up = '' } = {}) {
  const O = t.contact.options;
  return `<script>
window.__AUDIOLIK__ = {
  lang: ${jsStr(t.code)},
  tz: ${jsStr(B.timezone)},
  hours: ${safeJson(B.hours)},
  strings: {
    open: ${jsStr(t.hero.statusOpen)},
    closed: ${jsStr(t.hero.statusClosed)},
    until: ${jsStr(t.hero.statusUntil)},
    opensAt: ${jsStr(t.hero.statusOpensAt)},
    callOpen: ${jsStr(O.call.open)},
    callClosed: ${jsStr(O.call.closed)},
    required: ${jsStr(t.contact.form.required)},
    invalidPhone: ${jsStr(t.contact.form.invalidPhone)},
    progress: ${jsStr(t.quiz.progress)},
    subject: ${jsStr(t.contact.form.subject)},
    themeLight: ${jsStr(t.meta.themeLight)},
    themeDark: ${jsStr(t.meta.themeDark)},
    labels: {
      name: ${jsStr(t.contact.form.name)},
      phone: ${jsStr(t.contact.form.phone)},
      reason: ${jsStr(t.contact.form.reason)},
      message: ${jsStr(t.contact.form.message)}
    }
  },
  quiz: {
    questions: ${safeJson(t.quiz.questions)},
    answers: ${safeJson(t.quiz.answers)},
    results: ${safeJson(t.quiz.results)}
  },
  consent: {
    label: ${jsStr(t.consent.label)},
    title: ${jsStr(t.consent.title)},
    text: ${jsStr(t.consent.text)},
    accept: ${jsStr(t.consent.accept)},
    refuse: ${jsStr(t.consent.refuse)}
  },
  email: ${B.email ? jsStr(B.email) : 'null'},
  whatsapp: ${B.whatsapp ? jsStr(B.whatsapp) : 'null'},
  waQuizPrefill: ${jsStr(t.contact.whatsappPrefillQuiz)}
};
</script>
<script src="${up}assets/js/site.js" defer></script>`;
}

export default runtimeScripts;
