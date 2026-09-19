/**
 * AudioLik — photos d'illustration des pages secondaires.
 *
 * ⚠ ORIGINE : images GÉNÉRÉES par IA (septembre 2026). Elles ne représentent
 * ni le centre, ni son équipe, ni de vrais patients, et les appareils sont
 * génériques (aucune marque). La légende « Photo d'illustration » a été
 * retirée à la demande du centre (09/2026) ; CAPTION reste disponible.
 * Une vraie prise de vue au centre reste préférable à terme.
 *
 * Fichiers : assets/img/site/<nom>-800.webp, -1600.webp (1200 px de large pour
 * les portraits) et -1200.jpg en secours (JPEG pour les vieux navigateurs).
 *
 * `after` : index de la section après laquelle la photo s'insère.
 * Plusieurs `items` dans un même bloc : petite galerie.
 */

export const IMG = {
  'appareil-contour-classique':     [1600, 1200],
  'appareil-ecouteur-deporte':      [1600, 1200],
  'appareil-intra-cic':             [1600, 1200],
  'appareil-intra-ite':             [1600, 1200],
  'appareil-invisible-iic':         [1600, 1200],
  'appareil-porte-oreille':         [1600, 1200],
  'appareil-rechargeable-chargeur': [1600, 1200],
  'consultation-bilan':             [1600, 1067],
  'couple-restaurant':              [1600, 1067],
  'essai-appareil':                 [1600, 1067],
  'femme-active-rechargeable':      [1200, 1500],
  'gamme-toutes-formes':            [1600, 900],
  'homme-tv-famille':               [1600, 1067],
  'personne-senior-famille':        [1200, 1500],
  // Série homogène pour les cartes tarifaires (même fond, même lumière).
  'essentiel-contour-pile':         [1600, 1200],
  'confort-ecouteur-deporte':       [1600, 1200],
  'premium-rechargeable-connecte':  [1600, 1200],
};

export const CAPTION = {
  fr: "Photo d'illustration",
  ar: 'صورة توضيحية',
  en: 'Illustrative photo',
};

/* Textes alternatifs, dans les trois langues. */
const ALT = {
  'essentiel-contour-pile': {
    fr: "Contour d'oreille beige à pile, avec tube transparent et embout sur mesure",
    ar: 'جهاز سمعي خلف الأذن بلون بيج يعمل بالبطارية، مع أنبوب شفّاف وقالب أذن على المقاس',
    en: 'Beige battery behind-the-ear hearing aid with clear tube and custom earmould',
  },
  'confort-ecouteur-deporte': {
    fr: 'Appareil discret à écouteur déporté, gris argent, avec fil fin et dôme souple',
    ar: 'جهاز سمعي صغير بسمّاعة داخل القناة بلون فضّي، مع سلك رفيع وقبّة ليّنة',
    en: 'Discreet silver receiver-in-canal hearing aid with thin wire and soft dome',
  },
  'premium-rechargeable-connecte': {
    fr: 'Deux appareils rechargeables dans leur boîtier de charge, à côté d’un smartphone',
    ar: 'جهازان سمعيان قابلان للشحن داخل علبة الشحن، بجانب هاتف ذكي',
    en: 'Two rechargeable hearing aids in their charging case next to a smartphone',
  },
  'appareil-contour-classique': {
    fr: "Contour d'oreille classique beige avec tube transparent et embout sur mesure",
    ar: 'جهاز سمعي خلف الأذن بلون بيج مع أنبوب شفّاف وقالب أذن مصنوع على المقاس',
    en: 'Classic beige behind-the-ear hearing aid with clear tube and custom earmould',
  },
  'appareil-ecouteur-deporte': {
    fr: 'Appareil auditif à écouteur déporté gris argent avec son dôme souple',
    ar: 'جهاز سمعي بسمّاعة داخل القناة بلون فضّي مع قبّة سيليكون ليّنة',
    en: 'Silver receiver-in-canal hearing aid with its soft dome',
  },
  'appareil-rechargeable-chargeur': {
    fr: 'Deux appareils auditifs rechargeables posés dans leur boîtier de charge',
    ar: 'جهازان سمعيان قابلان للشحن داخل علبة الشحن',
    en: 'Two rechargeable hearing aids sitting in their charging case',
  },
  'appareil-intra-ite': {
    fr: "Appareil intra-auriculaire sur mesure, couleur chair",
    ar: 'جهاز سمعي داخل الأذن مصنوع على المقاس بلون البشرة',
    en: 'Custom skin-tone in-the-ear hearing aid',
  },
  'appareil-intra-cic': {
    fr: 'Minuscule appareil intra-auriculaire profond à côté du bout d’un doigt',
    ar: 'جهاز سمعي صغير جدًا يوضع في عمق القناة، بجانب طرف إصبع',
    en: 'Tiny completely-in-canal hearing aid next to a fingertip',
  },
  'appareil-invisible-iic': {
    fr: "Oreille portant un appareil invisible logé au fond du conduit",
    ar: 'أذن بداخلها جهاز سمعي غير مرئي مستقرّ في عمق القناة السمعية',
    en: 'Ear wearing an invisible hearing aid placed deep in the canal',
  },
  'appareil-porte-oreille': {
    fr: "Homme marocain de profil portant un appareil à écouteur déporté très discret",
    ar: 'رجل مغربي من الجانب يضع جهازًا سمعيًا بسمّاعة داخل القناة لا يكاد يُرى',
    en: 'Moroccan man in profile wearing a very discreet receiver-in-canal hearing aid',
  },
  'gamme-toutes-formes': {
    fr: "Les différentes formes d'appareils auditifs, du contour d'oreille à l'intra invisible",
    ar: 'مختلف أشكال الأجهزة السمعية، من الجهاز خلف الأذن إلى الجهاز غير المرئي داخلها',
    en: 'The different hearing aid styles, from behind-the-ear to invisible in-canal',
  },
  'consultation-bilan': {
    fr: 'Une audioprothésiste explique les résultats du bilan auditif à une patiente',
    ar: 'أخصائية سمعيات تشرح نتائج فحص السمع لإحدى المريضات',
    en: 'A hearing care professional explains the hearing test results to a patient',
  },
  'essai-appareil': {
    fr: "Pose d'un appareil auditif derrière l'oreille d'un patient",
    ar: 'تركيب جهاز سمعي خلف أذن أحد المرضى',
    en: 'A hearing aid being fitted behind a patient’s ear',
  },
  'couple-restaurant': {
    fr: 'Un couple marocain qui discute et rit au restaurant malgré le bruit ambiant',
    ar: 'زوجان مغربيان يتحدّثان ويضحكان في مطعم رغم الضجيج المحيط',
    en: 'A Moroccan couple chatting and laughing in a busy restaurant',
  },
  'femme-active-rechargeable': {
    fr: 'Femme au téléphone dans une rue de Casablanca, un appareil discret derrière l’oreille',
    ar: 'امرأة تتحدّث في الهاتف في أحد شوارع الدار البيضاء، وخلف أذنها جهاز سمعي صغير',
    en: 'Woman on the phone in a Casablanca street, a discreet hearing aid behind her ear',
  },
  'homme-tv-famille': {
    fr: 'Un couple regarde la télévision dans un salon marocain',
    ar: 'زوجان يشاهدان التلفاز في صالون مغربي',
    en: 'A couple watching television in a Moroccan living room',
  },
  'personne-senior-famille': {
    fr: 'Un grand-père souriant écoute sa petite-fille pendant un repas de famille',
    ar: 'جدّ مبتسم يستمع إلى حفيدته خلال وجبة عائلية',
    en: 'A smiling grandfather listening to his granddaughter at a family meal',
  },
};

export const alt = (name, lang) => (ALT[name] && ALT[name][lang]) || '';

/* Emplacement des photos par page (identique dans les trois langues). */
export const PAGE_IMAGES = {
  // after: -1 = photo en tête de page, juste sous l'introduction.
  'centre-de-correction-auditive-casablanca': [{ after: -1, items: ['personne-senior-famille'] }],
  'audioprothesiste-casablanca':              [{ after: -1, items: ['essai-appareil'] }],
  'bilan-auditif-casablanca':                 [{ after: -1, items: ['consultation-bilan'] }],
  'perte-auditive':                           [{ after: -1, items: ['homme-tv-famille'] }],
  'test-auditif-en-ligne':                    [{ after: -1, items: ['couple-restaurant'] }],
  'remboursement-appareils-auditifs-maroc':   [{ after: 4, items: ['consultation-bilan'] }],
  'entretien-et-reparation-appareils-auditifs': [{ after: 2, items: ['gamme-toutes-formes'] }],
  'appareils-auditifs-casablanca': [
    { after: 2, items: ['couple-restaurant'] },
    { after: 4, items: ['gamme-toutes-formes'] },
  ],
  'appareils-auditifs-intra-auriculaires': [
    { after: -1, items: ['appareil-porte-oreille'] },
    { after: 0, items: ['appareil-ecouteur-deporte'] },
    { after: 1, items: ['appareil-intra-ite', 'appareil-intra-cic', 'appareil-invisible-iic'] },
  ],
  'appareils-auditifs-contour-oreille': [
    { after: -1, items: ['appareil-contour-classique'] },
    { after: 2, items: ['appareil-porte-oreille'] },
  ],
  'appareils-auditifs-rechargeables-bluetooth': [
    { after: -1, items: ['femme-active-rechargeable'] },
    { after: 0, items: ['appareil-rechargeable-chargeur'] },
  ],
};

/* Photo de chaque carte tarifaire (clé de carte → image). */
export const CARD_PHOTOS = {
  essentiel: 'essentiel-contour-pile',
  confort: 'confort-ecouteur-deporte',
  premium: 'premium-rechargeable-connecte',
};
