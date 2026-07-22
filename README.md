# AudioLik — v3

Élévation « luxe épuré » de v2, **totalement séparée** : v1 (racine), v2 (/v2/) et
v3 (/v3/) coexistent pour comparaison.

```bash
cd /Users/amine/audiolik && python3 -m http.server 8791
# v1 → /   ·   v2 → /v2/   ·   v3 → /v3/
```

## Ce que v3 corrige (audit multi-agents sur v2)

v2 a été auditée par 5 auditeurs parallèles (régression vs v1, luxe discret,
motion selon Emil Kowalski, typographie, copy premium), chaque finding
contre-vérifié par un agent sceptique indépendant : **28 findings confirmés
appliqués** (16 + 12 luxe).

### Régression attrapée
Les horaires du bouton hero étaient écrits EN DUR dans les 3 langues — la
règle « jamais d'horaires hardcodés » que v1 avait durcie. v3 les génère
depuis `business.hours` (`compactHours()`, jours abrégés localisés, plages
LTR en arabe).

### Luxe discret (réf. Aesop / B&O — 12 corrections)
- **Le vide d'abord** : sections 88→176px max, gouttières fluides, prose plus aérée
- **Formes** : CTA rectangle 10px (la pilule reste aux contrôles circulaires),
  surfaces 14px, ombres divisées par ~1,7 (l'objet est posé, il ne flotte pas)
- **Plus de lift au survol** : le luxe bouge la matière (assombrissement
  color-mix), pas la position ; les cellules non cliquables n'ont PLUS de hover
- **Pilules-badges supprimées** : tags du bento en teal texte nu ; badge
  « le plus rapide » dans le flux, filet 1px, plus de sticker flottant
- **Teal chirurgical** : le Parcours n'a plus qu'UNE couche d'accent (l'icône) ;
  H1 monochrome (le bicolore vit dans le logo) ; WhatsApp du hero en contour
  (un seul aplat au premier écran), plein conservé au contact et à la callbar
- **Filets 1px** partout (boutons, réponses quiz, score, soulignés)
- **Cadres photo** : passe-partout double filet au lieu du pointillé dropzone
- Filigrane du symbole réintroduit dans le hero (perte v1→v2), clippé

### Motion (Emil Kowalski)
- Bascule de thème par **View Transitions** : un cross-fade unique remplace la
  transition partielle du body qui « déchirait » la bascule
- **FAQ animée** : `interpolate-size: allow-keywords` + `::details-content`
  (vérifié : hauteur intermédiaire captée à mi-transition ; les navigateurs
  sans support gardent un snap net)
- **Quiz** : entrée en cascade des réponses (45 ms/item), fondu WAAPI de la
  question (nœud réutilisé), barre de progression en `scaleX` compositor-only
  (l'inline-size forçait layout+paint 450 ms), résultat en entrée douce
- `prefers-reduced-motion` raffiné : on retire le MOUVEMENT, on garde les
  fondus de couleur sans risque vestibulaire
- Hovers à déplacement gatés `(hover:hover) and (pointer:fine)` ; presses
  `scale(.94)` sur thème/langue/burger ; menu langue entrée ferme
  (`--ease-out` cubic-bezier(.23,1,.32,1)) / sortie brève ; underline nav
  directionnel (entre par le début, sort par la fin, inversé en RTL)

### Typographie
- H1 44→**76 px** (le contraste d'échelle du luxe), réglage optique par niveau
  (plus grand = plus serré : 1.05/-.026em → 1.3/-.008em)
- h3 21→26 px (sortait à peine du corps), FAQ recalée sur 44rem (~70ch au lieu
  de ~97ch), interligne des questions 1.35
- **12 variantes de micro-labels → 2 registres** (`--label`, `--tag`)
- RTL : tokens `--t-xs`/`--t-2xs` compensés (+1 cran) sur les 9 petites tailles
  qui ne l'étaient pas ; compteur du quiz en chiffres tabulaires

### Copy
Titres `·` au lieu de `—`, « Trois minutes pour en avoir le cœur net » (fin de
la métaphore visuelle sur un site d'audition), metas de frise sans redite,
placeholder de formulaire avec exemples concrets.

## Mouvement (v3.1)

Le premier écran de v2/v3 était **strictement immobile au chargement** : zéro
animation dans le hero, et aucun reveal dans budget / centre / FAQ. Le Gate de
`find-animation-opportunities` (fréquence → objectif → budget → fonction) a
retenu cinq moments, tous **une fois par visite** ou pilotés par le défilement :

| Moment | Objectif | Recette |
|---|---|---|
| Séquence d'ouverture du hero | hiérarchie de lecture | `hero-in` 600 ms `--ease-out`, cascade 60/130/200/270 ms (état → titre → accroche → actions), image à 180 ms |
| Émanation d'ondes, **une seule fois** | sémantique de marque (le symbole EST fait d'arcs concentriques) | 3 anneaux, 2,6 s, opacité max **0,16**, décalés de 300 ms |
| Filigrane | profondeur | `watermark-in` 1,4 s, échelle 1,06 → 1 |
| Trait de la frise qui se dessine | la continuité EST le propos de la section | `animation-timeline: view()`, zéro JS, hors thread principal |
| Révélation des photos | (actif dès que de vraies images arrivent) | `clip-path` inset 22 % → 0 + échelle 1,04 → 1, piloté au défilement |

Une boucle infinie aurait transformé une signature en bannière : l'émanation ne
joue **qu'au chargement**. Les reveals au défilement couvrent désormais les
neuf sections (budget, centre et FAQ étaient oubliés) et passent sur
`--ease-out` (décélération ferme) au lieu de la courbe de transition d'état.

**Garde-fou :** toutes ces règles vivent dans
`@media (prefers-reduced-motion: no-preference)`. Un utilisateur sensible au
mouvement n'en reçoit aucune — donc aucun risque qu'un `fill: both` laisse un
élément bloqué à `opacity: 0`. Vérifié règle par règle dans le navigateur.

## Vérifié après application
- Contraste : 35 paires × 2 thèmes = **70/70 AA**
- Responsive : 17 largeurs × 3 langues = **51/51**, RTL compris
- Mécaniques : horaires générés, FAQ interpolée, stagger quiz, scaleX,
  View Transitions, filigrane sans débordement
- Mouvement : **15 animations actives** au chargement mesurées via
  `document.getAnimations()` (hero-in ×4, emanate ×3, watermark-in, draw-line,
  ping, rise-in) ; toutes sous garde `reduced-motion`



## Les neuf familles de mise en page

Le défaut principal de v1 n'était pas une section ratée : c'était que les huit
sections s'ouvraient **exactement pareil** (kicker, H2, accroche, grille). Un
rythme vertical parfaitement uniforme est la signature d'une page générée.

| # | Section | Famille | Ouverture |
|---|---|---|---|
| 1 | Hero | split asymétrique, photo à droite | — |
| 2 | Signes | **liste typographique**, filets, 2 colonnes | titre nu |
| 3 | Test | **panneau interactif** sur bande inversée | kicker 1/3 |
| 4 | Parcours | **frise verticale** à trait continu, intro collante | titre nu |
| 5 | Solutions | **bento asymétrique** 6 pistes, tuile principale sur 2 rangées | kicker 2/3 |
| 6 | Budget | **colonnes éditoriales** : argument / encadré | titre nu |
| 7 | Le centre | **split** photos + fiche + carte | titre nu |
| 8 | FAQ | **accordéon** | titre nu |
| 9 | Contact | **deux chemins** côte à côte | kicker 3/3 |

---

## Photographie

Quatre des cinq emplacements sont pourvus par des **images générées** (Gemini,
qualité Pro, juillet 2026), recadrées aux ratios exacts du site et compressées :

| Emplacement | Fichier | Rendu | Poids |
|---|---|---|---|
| `hero` | `photos/hero.jpg` | 819×1024 (4:5) | 128 Ko |
| `devices` | `photos/devices.jpg` | 1020×765 (4:3) | 64 Ko |
| `booth` | `photos/booth.jpg` | 1024×683 (3:2) | 96 Ko |
| `fitting` | `photos/fitting.jpg` | 1024×683 (3:2) | 160 Ko |
| `storefront` | `photos/storefront.jpg` | 896×1195 (3:4), rendu illustré choisi par Amine | 199 Ko |

27 Mo bruts ramenés à **448 Ko** au total. `hero` charge en priorité, les trois
autres en `lazy`.

**Ces images ne représentent ni le centre réel, ni son personnel, ni son
équipement.** Elles ont été cadrées pour rester illustratives : aucun visage
lisible, aucune enseigne, aucun texte, aucun logo. Une vraie prise de vue reste
préférable, et les mêmes photos serviraient à la fiche Google où l'authenticité
pèse davantage.

`storefront` reste volontairement vide : son rôle est de servir de repère pour
trouver le centre depuis le trottoir. Une façade générée enverrait des patients
chercher un bâtiment qui n'existe pas. C'est aussi la plus simple à faire soi-même.

**Rappel :** `business.claims.soundproofBooth` est toujours à `false`. La photo
de cabine ne vaut pas confirmation ; le bandeau de réassurance reste masqué tant
que le centre n'a pas validé cet équipement.

### Remplacer par de vraies photos

Déposer les fichiers dans `assets/img/photos/`, garder les mêmes noms et ratios,
relancer `node build.mjs`. Rien d'autre à changer.

## Bi-thème

v1 était verrouillée en clair. v2 respecte `prefers-color-scheme` **et** offre
une bascule manuelle, mémorisée dans `localStorage` et appliquée **avant le
premier rendu** (un script inline dans le `<head>`), donc aucun flash blanc pour
un visiteur en mode sombre.

En sombre, l'identité est préservée plutôt que délavée : le symbole garde son
dégradé teal, le teal d'accent est éclairci pour tenir le contraste, et la
section « inversée » devient **plus claire** que le fond au lieu de plus sombre,
ce qui conserve la hiérarchie.

**Contraste mesuré dans le navigateur, alpha compris : 35 paires × 2 thèmes,
70/70 conformes AA.**

Une note de méthode : la première sonde de contraste que j'ai écrite donnait des
résultats faux (elle prenait le fond transparent de `<html>` pour du noir), puis
la seconde donnait des valeurs périmées quand la mesure suivait la bascule de
thème dans le même appel. Les chiffres ci-dessus viennent de mesures isolées,
une par thème.

---

## Polices et icônes

**Polices auto-hébergées.** 29 fichiers woff2 (Gabarito, Figtree, IBM Plex Sans
Arabic), sous-ensembles latin + latin-ext + arabe, 516 Ko au total mais le
`unicode-range` fait que chaque visiteur ne télécharge que ce dont sa langue a
besoin. Zéro requête tierce : sur un site de santé, faire fuiter l'IP de chaque
visiteur vers un CDN de polices est un problème en soi, et la connexion
supplémentaire retarde le premier rendu.

**Icônes Phosphor** (MIT), vendorisées au build en sprite `<symbol>` inline. Une
seule définition par page, aucun tracé dessiné à la main, aucune dépendance npm,
aucune requête externe (le `<use>` inter-fichiers reste fragile sur les vieux
Safari).

Régénérer : `tools/fetch-fonts.mjs` et `tools/fetch-icons.mjs` documentent la
procédure dans leurs en-têtes.

---

## Ce qui n'a pas changé depuis v1

Volontairement, parce que c'était juste :

- Les **deux chemins de rendez-vous** (téléphone / WhatsApp) avec bascule selon
  l'heure de Casablanca, et le numéro **jamais masqué** hors horaires.
- Les horaires **générés depuis `business.hours`**, jamais écrits en dur.
- Le **test auditif** avec son disclaimer, calculé dans le navigateur.
- `business.mjs` comme source unique des faits, avec omission de tout ce qui
  n'est pas vérifié plutôt qu'invention.
- **Aucun avis client, aucun prix, aucune promesse commerciale** non confirmée.

---

## À faire avant mise en ligne

Coordonnées réelles en place depuis le 22/07/2026 : WhatsApp +212 6 69 57 15 65,
contact@audiolik.ma, domaine audiolik.ma. Le formulaire de contact est actif
(mailto pré-rempli, validation en direct).

Restent en attente de validation par le centre :

1. `business.claims` tout à `false` : le bandeau de réassurance n'apparaît pas
   tant que ces promesses ne sont pas confirmées.
2. `testimonials.items` vide : n'y mettre que de vrais avis.
3. **Déploiement** : les URL canoniques pointent sur `audiolik.ma/v3/`. Pour
   servir v3 à la racine du domaine, remettre les `path` des locales à
   `/`, `/ar/`, `/en/` dans `src/business.mjs` et rebuilder — une ligne.


## Responsive

Vérifié dans Chrome sur **17 largeurs de 320 à 2560 px × 3 langues = 51
combinaisons**, chacune contrôlée sur : débordement horizontal, élément hors
cadre, texte tronqué, cible tactile sous 44 px, et rangée de grille orpheline.
**Aucun échec.**

Un bug RTL trouvé par ce balayage et corrigé : le motif d'ondes des cadres photo
était centré par `inset-inline-start: 50%` + `translate: -50%`, couple qui
s'inverse en arabe et projetait le motif hors du cadre à **toutes** les largeurs.
Remplacé par `inset: 0` + `margin: auto`, indépendant de la direction.
