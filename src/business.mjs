/**
 * v2 — source unique des faits. Identique à v1 sur le fond (NAP, horaires,
 * géo), avec en plus le référentiel PHOTO, qui manquait entièrement à v1.
 *
 * Champs `null` = non vérifié : le rendu les omet au lieu d'inventer, et le
 * build en imprime la liste.
 */

export const SITE_URL = 'https://audiolik.ma';   // confirmé par Amine (22/07/2026)

export const business = {
  name: 'AudioLik',
  alternateName: 'Audiolik',        // orthographe de la fiche Google
  legalName: null,
  founded: null,

  street: '106B Rue Al Jounaid',
  district: 'Maârif — Palmier',
  city: 'Casablanca',
  region: 'Casablanca-Settat',
  postalCode: null,
  country: 'MA',
  plusCode: 'H9H2+7C Casablanca',

  phoneDisplay: '05 22 39 37 98',
  phoneE164: '+212522393798',

  whatsapp: '212669571565',
  whatsappDisplay: '06 69 57 15 65',
  email: 'contact@audiolik.ma',

  geo: { lat: 33.5781357, lng: -7.6489239 },

  mapsPlaceUrl:
    'https://www.google.com/maps/place/Audiolik/@33.5781357,-7.6489239,17z/data=!4m6!3m5!1s0xda7d31884a73bd3:0x8be808ea18afbc22!8m2!3d33.5781357!4d-7.6489239!16s%2Fg%2F11ys3skr0h',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=33.5781357,-7.6489239&destination_place_id=ChIJ07o3SIgx19oRIryvGOoI6Is',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=33.5781357,-7.6489239&z=17&hl=fr&output=embed',
  mapsReviewUrl: null,

  social: { facebook: null, instagram: null, linkedin: null },

  hours: [
    { day: 'monday',    slots: [['09:00', '13:00'], ['14:30', '18:30']] },
    { day: 'tuesday',   slots: [['09:00', '13:00'], ['14:30', '18:30']] },
    { day: 'wednesday', slots: [['09:00', '13:00'], ['14:30', '18:30']] },
    { day: 'thursday',  slots: [['09:00', '13:00'], ['14:30', '18:30']] },
    { day: 'friday',    slots: [['09:00', '13:00'], ['14:30', '18:30']] },
    { day: 'saturday',  slots: [['09:00', '13:00']] },
    { day: 'sunday',    slots: [] },
  ],
  timezone: 'Africa/Casablanca',

  claims: {
    freeHearingTest: false,
    homeTrial: false,
    unlimitedFollowUp: false,
    childrenFitting: false,
    soundproofBooth: false,
  },

  priceRange: null,
  brands: [],
  languages: ['fr', 'ar', 'en'],
  defaultLang: 'fr',
};

/* ==========================================================================
   PHOTOGRAPHIE
   v1 n'avait pas une seule photo : uniquement des logos. Pour un commerce de
   santé de proximité c'est le manque le plus coûteux, parce que la confiance
   se joue là. v2 est composée AUTOUR de ces images.

   `src: null` ⇒ un cadre conçu pour l'attente s'affiche à la place (dégradé de
   marque + motif d'ondes + intitulé du sujet). Jamais une image cassée, jamais
   une photo de banque d'images sans rapport. Le build rappelle la liste.

   ⚠ ORIGINE DES IMAGES ACTUELLES : hero, devices, booth et fitting sont des
   images GÉNÉRÉES (Gemini, qualité Pro, juillet 2026), recadrées aux ratios du
   site et compressées. Elles ne représentent ni le centre réel, ni son
   personnel, ni son équipement. Elles tiennent lieu de visuel en attendant une
   vraie prise de vue, qui reste préférable : les mêmes photos serviront à la
   fiche Google, où l'authenticité pèse davantage.
   `storefront` est désormais la photo RÉELLE de la devanture (voir son bloc).

   Déposer les fichiers dans assets/img/photos/ puis renseigner `src`.
   ========================================================================== */
export const photos = {
  hero: {
    src: 'assets/img/photos/hero.jpg',
    ratio: '4 / 5',
    priority: true,
    brief: "L'audioprothésiste en consultation, de trois quarts, lumière naturelle. Le patient de dos ou hors champ.",
    alt: {
      fr: "Audioprothésiste d'AudioLik réglant un appareil auditif en consultation",
      en: 'AudioLik hearing-aid specialist adjusting a device during a fitting',
      ar: 'أخصائي السمعيات في أوديوليك يضبط جهازًا سمعيًا أثناء الاستشارة',
    },
  },
  devices: {
    src: 'assets/img/photos/devices.jpg',
    ratio: '4 / 3',
    brief: 'Macro d’un appareil à écouteur déporté posé sur fond uni, échelle visible (une pièce de monnaie, une main).',
    alt: {
      fr: 'Appareil auditif à écouteur déporté, vu de près',
      en: 'Receiver-in-canal hearing aid, close up',
      ar: 'جهاز سمعي بسمّاعة داخل القناة، عن قرب',
    },
  },
  booth: {
    src: 'assets/img/photos/booth.jpg',
    ratio: '3 / 2',
    brief: 'La cabine audiométrique, porte ouverte, casque posé. Montrer que la mesure se fait sur place.',
    alt: {
      fr: "Cabine audiométrique insonorisée du centre AudioLik",
      en: 'Soundproof audiometric booth at the AudioLik centre',
      ar: 'غرفة قياس السمع العازلة للصوت في مركز أوديوليك',
    },
  },
  storefront: {
    // Rendu ILLUSTRÉ de la vraie devanture, généré par Amine (Gemini) à partir
    // de la photo réelle et choisi par lui (07/2026). L'enseigne est fidèle
    // (AudioLik + arabe + baseline) ; les petits textes (écran, horaires) sont
    // réinventés par le modèle — illisibles à la taille d'affichage, assumé
    // pour un rendu de style architectural. La photo réelle retouchée reste
    // disponible : remettre src sur 'assets/img/photos/storefront-reelle.jpg'
    // avec ratio '1 / 1' pour y revenir.
    src: 'assets/img/photos/storefront.jpg',
    ratio: '3 / 4',
    brief: 'La devanture depuis le trottoir, enseigne lisible. Sert de repère pour trouver le centre.',
    alt: {
      fr: 'Devanture du centre AudioLik, 106B rue Al Jounaid à Casablanca',
      en: 'AudioLik storefront at 106B rue Al Jounaid, Casablanca',
      ar: 'واجهة مركز أوديوليك، 106B زنقة الجنيد بالدار البيضاء',
    },
  },
  fitting: {
    src: 'assets/img/photos/fitting.jpg',
    ratio: '3 / 2',
    brief: "Mains posant un appareil derrière l'oreille, cadrage serré. Montre le geste, pas le visage.",
    alt: {
      fr: "Pose d'un appareil auditif derrière l'oreille",
      en: 'Fitting a hearing aid behind the ear',
      ar: 'تركيب جهاز سمعي خلف الأذن',
    },
  },
};

/** Charte graphique — Naziha Bargache, 2025. Voir README §Charte. */
export const brand = {
  navy: '#0E1E54',
  navyLogo: '#081F57',
  teal: '#0497AF',
  tealDoc: '#4497AE',
  pale: '#B5D4DC',
  paleLogo: '#ABD3DB',
  paper: '#EEF4FD',
  grey: '#E4E4E4',
  tagline: 'Centre de correction auditive',
};

export const locales = [
  // Chemins de PRODUCTION : le site est servi à la racine d'audiolik.ma. En
  // local il vit sous /v3/, d'où des liens de langue qui pointent sur la
  // racine du serveur de test — c'est attendu, seul le déploiement fait foi.
  { code: 'fr', dir: 'ltr', label: 'Français', short: 'FR', path: '/',    htmlLang: 'fr-MA' },
  { code: 'ar', dir: 'rtl', label: 'العربية',  short: 'ع',  path: '/ar/', htmlLang: 'ar-MA' },
  { code: 'en', dir: 'ltr', label: 'English',  short: 'EN', path: '/en/', htmlLang: 'en' },
];

/** Renseignés mais faux : indétectables par pendingFields(), donc listés ici.
 *  Vide depuis le 22/07/2026 : WhatsApp, email et domaine sont les vrais. */
export const PLACEHOLDERS = [];

export function placeholderFields() {
  return PLACEHOLDERS.map((p) => `${p} = ${p.split('.').reduce((o, k) => o?.[k], business)}`);
}

/** Photos non fournies : le rendu montre un cadre d'attente à la place. */
export function pendingPhotos() {
  return Object.entries(photos)
    .filter(([, p]) => !p.src)
    .map(([k, p]) => `${k} (${p.ratio}) — ${p.brief}`);
}

export function pendingFields() {
  const out = [];
  const scan = (obj, prefix = '') => {
    for (const [k, v] of Object.entries(obj)) {
      const path = prefix ? `${prefix}.${k}` : k;
      if (v === null) out.push(path);
      else if (v === false) out.push(`${path} (= non affiché)`);
      else if (Array.isArray(v) && v.length === 0) out.push(`${path} (liste vide)`);
      else if (v && typeof v === 'object' && !Array.isArray(v)) scan(v, path);
    }
  };
  scan(business);
  return out;
}
