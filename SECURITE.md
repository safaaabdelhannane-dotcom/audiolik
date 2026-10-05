# Sécurité — ce qui se règle hors du code

GitHub Pages ne permet pas d'envoyer des en-têtes HTTP personnalisés. Les
protections ci-dessous ne peuvent donc **pas** être posées depuis ce dépôt :
elles se configurent chez Cloudflare et dans les réglages GitHub.

Déjà fait dans le code (branche `durcissement-securite-rgpd`) : consentement
avant Google Analytics, CSP en balise meta avec empreintes SHA-256, Referrer-Policy
en meta, échappement du JSON inline, actions CI épinglées sur SHA,
`/.well-known/security.txt`, licence propriétaire et mention de marque.

## 1. Cloudflare (offre gratuite) devant audiolik.ma

- [ ] Ajouter `audiolik.ma` à Cloudflare et remplacer les serveurs DNS chez le
      registraire par ceux fournis par Cloudflare.
- [ ] Garder les enregistrements GitHub Pages (A `185.199.108-111.153` et/ou
      CNAME `www`) en mode **proxifié** (nuage orange).
- [ ] SSL/TLS → mode **Full (strict)**.
- [ ] *Rules → Transform Rules → Modify Response Header* : ajouter (« Set static ») :

| En-tête | Valeur | Rôle |
|---|---|---|
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` | HSTS : HTTPS imposé (🟠 élevé) |
| `X-Frame-Options` | `SAMEORIGIN` | Anti-clickjacking (🟠 élevé, impossible en meta) |
| `X-Content-Type-Options` | `nosniff` | Bloque le « MIME sniffing » |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Doublon serveur de la meta |
| `Permissions-Policy` | `geolocation=(), camera=(), microphone=()` | Désactive les API sensibles |

- [ ] (Option) Rejouer la CSP en en-tête avec en plus `frame-ancestors 'self'`.
      Attention : la CSP des pages contient des empreintes **propres à chaque page** ;
      en en-tête global, se limiter à une politique sans `script-src`, par exemple
      `frame-ancestors 'self'; object-src 'none'; base-uri 'self'`.
- [ ] Vérifier le résultat sur https://securityheaders.com et https://observatory.mozilla.org.

## 2. GitHub

- [ ] *Settings → Pages* : cocher **Enforce HTTPS**.
- [ ] *Settings → Code security* : activer les alertes Dependabot (actions du workflow).

## 3. Visibilité du dépôt

- [ ] Décider : **public** ou **privé**.
  - Privé + GitHub Pages = abonnement **GitHub Pro** nécessaire.
  - Alternative : dépôt des sources privé, et publication du seul site généré
    dans un second dépôt public.
- [ ] Si le dépôt reste public : relire l'historique et les commentaires
      internes (noms, dates, notes de travail) et nettoyer ce qui ne doit pas
      être visible. Rappel : `LICENSE` protège juridiquement le code, il
      n'empêche pas de le lire.

## 4. Avant la mise en ligne de la branche

- [ ] Renseigner le numéro de dépôt OMPIC à la place de `<À COMPLÉTER>` dans
      `src/content/fr.mjs`, `ar.mjs`, `en.mjs` (bloc `footer.legal`).
- [ ] `security.txt` expire un an après chaque build : un build au moins par an.
