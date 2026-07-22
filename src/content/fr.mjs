/**
 * Contenu français — v2.
 *
 * Deux changements de fond par rapport à v1 :
 *  1. Chaque section a une STRUCTURE propre (liste typographique, frise, bento,
 *     colonnes éditoriales…) au lieu de la même grille de cartes répétée. Le
 *     contenu est donc modelé différemment, pas seulement reformulé.
 *  2. Le tiret cadratin n'est plus la ponctuation par défaut. Il reste valide en
 *     français, mais v1 en comptait 40 sur une page : c'était devenu un tic.
 */
export default {
  code: 'fr',
  dir: 'ltr',

  meta: {
    title: 'AudioLik · Audioprothésiste à Casablanca, Maârif',
    description:
      'Centre de correction auditive à Casablanca, quartier Maârif. Bilan auditif, appareils discrets, réglages et suivi. Rendez-vous au 05 22 39 37 98.',
    ogAlt: 'AudioLik, centre de correction auditive à Casablanca',
    skipToContent: 'Aller au contenu',
    langLabel: 'Changer de langue',
    themeLabel: 'Changer de thème',
    themeLight: 'Thème clair',
    themeDark: 'Thème sombre',
  },

  nav: {
    items: [
      { href: '#audition', label: 'Votre audition' },
      { href: '#test', label: 'Test en ligne' },
      { href: '#parcours', label: 'Le parcours' },
      { href: '#solutions', label: 'Nos solutions' },
      { href: '#centre', label: 'Le centre' },
    ],
    cta: 'Rendez-vous',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
  },

  /* Le hero tient en 4 blocs : bandeau d'état, titre, accroche (≤ 20 mots),
     boutons. Les horaires vivent dans le sous-titre du bouton téléphone, donc
     ils restent visibles sans former un 5ᵉ bloc flottant. */
  hero: {
    title: 'Réentendre les voix *qui comptent*.',
    lede:
      "On mesure précisément ce que vous n'entendez plus, puis on le rétablit, réglage après réglage.",
    ctaWhatsapp: 'Écrire sur WhatsApp',

    statusOpen: 'Ouvert',
    statusClosed: 'Fermé',
    statusUntil: 'jusqu’à',
    statusOpensAt: 'ouvre à',
  },

  reassurance: {
    freeHearingTest:  { title: 'Bilan auditif offert',    text: 'Sur rendez-vous, sans engagement.' },
    homeTrial:        { title: 'Essai avant achat',        text: 'Vous testez les appareils dans votre vraie vie.' },
    unlimitedFollowUp:{ title: 'Réglages et suivi inclus', text: "Aussi longtemps que vous portez l'appareil." },
    childrenFitting:  { title: 'Enfants et adultes',       text: 'Appareillage pédiatrique et adulte.' },
    soundproofBooth:  { title: 'Cabine audiométrique',     text: 'Mesures réalisées sur place, en cabine insonorisée.' },
  },

  /* Liste typographique : les six situations sont des phrases entendues, pas
     des cartes. Elles se lisent, elles ne se scannent pas. */
  signs: {
    title: 'Ces phrases vous sont familières ?',
    lede:
      "Une baisse d'audition s'installe lentement. Les sons forts ne sont pas les premiers à partir : ce sont les nuances, les consonnes, les voix aiguës, les conversations dans le bruit.",
    items: [
      { icon: 'television-simple',  text: 'Vous montez le son de la télévision plus fort que les autres.' },
      { icon: 'coffee',             text: 'Dans un café, vous suivez la conversation, puis vous décrochez.' },
      { icon: 'repeat',             text: 'On vous dit que vous faites répéter. Souvent.' },
      { icon: 'phone',              text: 'Le téléphone est devenu compliqué, surtout avec les inconnus.' },
      { icon: 'bell-ringing',       text: 'Un sifflement ou un bourdonnement vous accompagne au calme.' },
      { icon: 'microphone-stage',   text: 'Les voix aiguës, celles des enfants et des femmes, deviennent floues.' },
    ],
    footnote: 'Trois situations ou plus ? Un bilan fait le point en moins d’une heure.',
  },

  quiz: {
    kicker: 'Test en ligne',
    title: 'Trois minutes pour en avoir le cœur net.',
    lede:
      "Six questions sur votre quotidien. Aucune donnée n'est envoyée : le calcul se fait dans votre navigateur et disparaît quand vous fermez la page.",
    disclaimer:
      "Ce questionnaire est un outil d'orientation, pas un diagnostic. Il ne remplace ni un bilan réalisé en centre, ni l'avis d'un médecin ORL.",
    answers: [
      { label: 'Jamais',  value: 0 },
      { label: 'Parfois', value: 1 },
      { label: 'Souvent', value: 2 },
    ],
    questions: [
      'Vous demandez à vos interlocuteurs de répéter.',
      'Vous avez du mal à suivre une conversation quand plusieurs personnes parlent.',
      'On vous fait remarquer que la télévision ou la radio est trop forte.',
      'Vous entendez un sifflement, un bourdonnement ou un souffle dans les oreilles.',
      'Vous évitez certains lieux, restaurants ou réunions, à cause du bruit.',
      "Vous entendez qu'on vous parle, mais vous ne comprenez pas les mots.",
    ],
    progress: 'Question {n} sur {total}',
    results: [
      {
        max: 3,
        title: 'Rien d’alarmant aujourd’hui.',
        text: "Vos réponses ne montrent pas de gêne marquée. Après 60 ans, un contrôle tous les deux ans reste une bonne habitude, comme pour la vue.",
      },
      {
        max: 7,
        title: 'Quelques signaux à surveiller.',
        text: "Plusieurs situations vous mettent déjà en difficulté. Un bilan permet de savoir s'il s'agit d'une vraie perte, d'un bouchon de cérumen ou d'autre chose. C'est indolore et ça prend moins d'une heure.",
      },
      {
        max: 12,
        title: 'Un bilan est vivement recommandé.',
        text: "Vos réponses décrivent une gêne installée au quotidien. Plus une perte auditive est prise tôt, plus le cerveau garde sa capacité à décoder la parole, et plus l'adaptation à un appareil est simple.",
      },
    ],
    ctaBook: 'Prendre rendez-vous',
    ctaRestart: 'Refaire le test',
    scoreLabel: 'Votre score',
  },

  /* Frise verticale : cinq étapes reliées par un trait continu, pas cinq
     cartes posées côte à côte. La continuité fait partie du propos. */
  journey: {
    title: 'Du premier bilan au réglage fin.',
    lede: "Un appareil auditif ne se vend pas, il s'adapte. Voici les cinq étapes que nous parcourons ensemble.",
    steps: [
      {
        title: 'Le bilan',
        text: "Otoscopie, audiométrie tonale puis vocale. On mesure ce que vous entendez, mais surtout ce que vous comprenez. Les deux ne vont pas toujours ensemble.",
        meta: 'Environ 45 minutes',
        icon: 'ear',
      },
      {
        title: 'Le choix',
        text: "On compare deux ou trois appareils adaptés à votre audiogramme, à votre quotidien et à votre budget. Pas de catalogue, une sélection argumentée.",
        meta: 'Deux ou trois modèles',
        icon: 'faders',
      },
      {
        title: "L'essai",
        text: "Vous repartez appareillé et vous testez là où ça compte vraiment : à table, au téléphone, au marché, à la mosquée.",
        meta: 'En conditions réelles',
        icon: 'calendar-check',
      },
      {
        title: "L'adaptation",
        text: "Le cerveau doit réapprendre à traiter des sons qu'il n'entendait plus.",
        meta: 'Sur plusieurs semaines',
        icon: 'path',
      },
      {
        title: 'Le suivi',
        text: "Contrôle de l'audition, nettoyage, changement des filtres, dépannage. Un appareil bien suivi dure plusieurs années de plus.",
        meta: 'Sans limite de durée',
        icon: 'shield-check',
      },
    ],
  },

  /* Bento asymétrique : une tuile principale photographique, puis des tuiles
     de tailles inégales. Six contenus, six cellules, aucune case vide. */
  solutions: {
    kicker: 'Nos solutions',
    title: 'Discret, rechargeable, connecté.',
    lede:
      "Il n'existe pas de « meilleur appareil » dans l'absolu, seulement celui qui correspond à votre perte, à votre conduit auditif et à votre vie.",
    items: [
      {
        name: 'Écouteur déporté',
        tag: 'Le plus courant',
        text: "Un boîtier fin derrière l'oreille, un écouteur minuscule dans le conduit. Son naturel, oreille peu obstruée, quasi invisible de face.",
        icon: 'ear',
        size: 'feature',
        photo: 'devices',
      },
      {
        name: 'Intra-auriculaire',
        tag: 'Le plus invisible',
        text: "Moulé sur l'empreinte de votre conduit. Rien ne dépasse derrière l'oreille.",
        icon: 'ear',
        size: 'wide',
      },
      {
        name: "Contour d'oreille",
        tag: 'Le plus puissant',
        text: 'Robuste, facile à manipuler, autonomie confortable. La référence pour les pertes sévères et pour les enfants.',
        icon: 'ear',
        size: 'wide',
      },
      {
        name: 'Rechargeable et Bluetooth',
        tag: 'Le plus pratique',
        text: 'Fini les piles. Appels et son de la télévision transmis directement dans les appareils.',
        icon: 'lightning',
        size: 'small',
      },
      {
        name: 'Protections sur-mesure',
        tag: 'Prévention',
        text: "Bouchons moulés pour le sommeil, la natation, la musique ou le chantier.",
        icon: 'shield-check',
        size: 'small',
      },
      {
        name: 'Accessoires et entretien',
        tag: 'Au quotidien',
        text: 'Micro déporté, transmetteur TV, piles, pastilles déshydratantes et embouts de rechange.',
        icon: 'faders',
        size: 'small',
      },
    ],
  },

  /* Colonnes éditoriales : un argument à gauche, une liste de ce qui est
     compris à droite. Plus de trois cartes identiques. */
  pricing: {
    title: 'Le prix, dit clairement.',
    argument: [
      "Un appareillage se raisonne sur cinq ans, pas sur une facture. Ce qui coûte cher, ce n'est pas le boîtier : c'est le temps passé à l'adapter à votre audition, puis à le régler jusqu'à ce qu'il devienne inutile d'y penser.",
      "Vous repartez du bilan avec un devis détaillé, et rien n'est signé le jour même. Prenez le temps de comparer, ici comme ailleurs.",
    ],
    includedTitle: 'Ce que le prix comprend',
    included: [
      "L'adaptation initiale et la prise d'empreinte si nécessaire",
      "Tous les réglages de la période d'essai",
      'Les contrôles de suivi et le nettoyage en centre',
      'La garantie constructeur et le dépannage',
      'Un devis et une facture conformes pour votre dossier de remboursement',
    ],
    coverageTitle: 'Prise en charge',
    coverage:
      "Selon votre organisme (CNSS, CNOPS, AMO ou mutuelle d'entreprise), une partie de l'appareillage peut être remboursée. Nous préparons les pièces nécessaires à votre dossier.",
    note: 'Les tarifs dépendent du niveau de technologie et de votre perte auditive. Ils vous sont communiqués au centre, après le bilan.',
  },

  center: {
    title: 'À Maârif, au 106B rue Al Jounaid.',
    lede:
      "Un centre à taille humaine. Le même interlocuteur du premier bilan au dernier réglage, parce qu'une adaptation réussie repose sur une relation suivie.",
    facts: [
      { label: 'Adresse',   key: 'address' },
      { label: 'Téléphone', key: 'phone' },
      { label: 'Quartier',  key: 'district' },
      { label: 'Plus code', key: 'pluscode' },
    ],
    hoursTitle: "Horaires d'ouverture",
    closed: 'Fermé',
    today: "Aujourd'hui",
    slotAnd: 'et',
    directions: 'Itinéraire',
    mapTitle: "Carte de localisation d'AudioLik, 106B rue Al Jounaid, Casablanca",
    days: {
      monday: 'Lundi', tuesday: 'Mardi', wednesday: 'Mercredi', thursday: 'Jeudi',
      friday: 'Vendredi', saturday: 'Samedi', sunday: 'Dimanche',
    },
    daysShort: {
      monday: 'Lun', tuesday: 'Mar', wednesday: 'Mer', thursday: 'Jeu',
      friday: 'Ven', saturday: 'Sam', sunday: 'Dim',
    },
  },

  testimonials: {
    title: 'Des mots de patients.',
    items: [],
    emptyCta: 'Laisser un avis sur Google',
  },

  faq: {
    title: 'Ce qu’on nous demande le plus.',
    items: [
      {
        q: 'À partir de quel âge faut-il faire un bilan auditif ?',
        a: "À tout âge, dès qu'un signe apparaît. Après 60 ans, un contrôle tous les deux ans est une bonne habitude même sans gêne ressentie : la perte s'installe si progressivement qu'on s'y adapte sans s'en rendre compte.",
      },
      {
        q: 'Un appareil auditif, est-ce que ça se voit ?',
        a: "Beaucoup moins qu'on ne l'imagine. Les modèles à écouteur déporté sont invisibles de face, et les intra-auriculaires sont entièrement logés dans le conduit. La plupart des gens autour de vous ne le remarqueront pas.",
      },
      {
        q: 'Combien de temps faut-il pour s’habituer ?',
        a: "Quelques semaines en général. Au début, les sons du quotidien, le froissement d'un sac ou vos propres pas, paraissent envahissants : votre cerveau les avait simplement oubliés. C'est tout l'objet des réglages progressifs.",
      },
      {
        q: 'Faut-il appareiller les deux oreilles ?',
        a: "Si les deux sont atteintes, oui. Le cerveau localise les sons en comparant ce qu'il reçoit de chaque côté. Avec une seule oreille appareillée, on entend plus fort mais on comprend moins bien dans le bruit.",
      },
      {
        q: 'Faut-il une ordonnance ORL ?',
        a: "Pas pour venir faire un bilan. En revanche, pour un remboursement, votre organisme demande généralement une prescription médicale. Nous vous orientons vers un ORL si nécessaire, et le bilan sert de base au dossier.",
      },
      {
        q: 'Combien de temps dure un appareil auditif ?',
        a: "Quatre à six ans en usage courant, souvent davantage avec un entretien régulier. L'électronique vieillit moins vite que ce que l'humidité et le cérumen lui font subir, d'où l'importance des contrôles.",
      },
      {
        q: 'J’ai des acouphènes. Pouvez-vous m’aider ?',
        a: "Souvent, oui. Les acouphènes accompagnent fréquemment une perte auditive : en rétablissant les sons manquants, l'appareillage les rend nettement moins présents. La première étape reste un bilan, et un avis ORL si le sifflement est apparu brutalement ou d'un seul côté.",
      },
      {
        q: 'Et si ce n’est qu’un bouchon de cérumen ?',
        a: "C'est une cause fréquente de baisse d'audition soudaine, et l'otoscopie le repère immédiatement. Dans ce cas, pas d'appareil : nous vous orientons vers un médecin pour le retrait, et vous récupérez votre audition.",
      },
    ],
  },

  contact: {
    kicker: 'Contact',
    title: 'Deux façons de prendre rendez-vous.',
    lede:
      "Appelez le centre pendant les heures d'ouverture : l'accueil fixe le rendez-vous avec vous. En dehors, envoyez le message déjà rédigé sur WhatsApp, on vous répond à la réouverture.",
    options: {
      recommended: 'Le plus rapide maintenant',
      call: {
        tag: 'Option 1 · Téléphone',
        title: 'Appeler le centre',
        text: "L'accueil fixe le rendez-vous avec vous et répond à vos questions dans la foulée. Le plus direct quand le centre est ouvert.",
        cta: 'Appeler',
        open: 'Ouvert, on décroche',
        closed: 'Fermé pour le moment',
        availability: 'Ligne ouverte {hours}',
      },
      whatsapp: {
        tag: 'Option 2 · WhatsApp',
        title: 'Envoyer un message',
        text: "Le message est déjà écrit : il ne vous reste qu'à appuyer sur envoyer. On vous répond dès la réouverture du centre.",
        cta: 'Ouvrir WhatsApp',
        note: 'À toute heure, même la nuit',
      },
    },
    onsite: { label: 'Ou passez nous voir', cta: 'Itinéraire' },
    form: {
      title: 'Ou écrivez-nous.',
      intro: "Décrivez votre situation en deux lignes : le motif, et le moment qui vous arrange.",
      name: 'Votre nom',
      namePlaceholder: 'Nom et prénom',
      phone: 'Votre téléphone',
      phonePlaceholder: '06 XX XX XX XX',
      reason: 'Motif',
      reasons: ['Bilan auditif', 'Essai ou achat d’appareils', 'Réglage ou dépannage', 'Protections sur-mesure', 'Autre'],
      message: 'Votre message (facultatif)',
      messagePlaceholder: 'Par exemple : une gêne dans le bruit, un appareil à régler',
      submit: 'Envoyer la demande',
      submitHint: 'Ouvre votre messagerie avec la demande pré-remplie.',
      required: 'Champ obligatoire',
      invalidPhone: 'Numéro de téléphone incomplet',
      subject: 'Demande de rendez-vous · AudioLik',
    },
    whatsappPrefill:
      'Bonjour, je souhaite prendre rendez-vous pour un bilan auditif. Quelles sont vos prochaines disponibilités ?',
    whatsappPrefillQuiz:
      'Bonjour, je viens de faire le test auditif en ligne (score {score}/{max}) et je souhaite prendre rendez-vous pour un bilan.',
  },

  photo: {
    pending: 'Photographie à venir',
  },

  footer: {
    tagline: 'Centre de correction auditive. Casablanca, Maârif.',
    nav: 'Navigation',
    contactTitle: 'Contact',
    legal: [
      "AudioLik est un centre de correction auditive. Les informations publiées sur ce site sont d'ordre général et ne constituent pas un avis médical.",
      "Seul un bilan réalisé au centre, complété si nécessaire par une consultation ORL, permet d'évaluer votre audition.",
    ],
    rights: 'Tous droits réservés.',
    backToTop: 'Haut de page',
  },
};
