/* Lot B — pages 4 à 7. */
export default [
  /* ====================== 4 · Appareils auditifs — prix ================== */
  {
    slug: 'appareils-auditifs-casablanca',
    fr: {
      kicker: 'Les appareils',
      title: 'Prix des appareils auditifs à Casablanca | AUDIOLIK',
      description:
        'Découvrez les prix indicatifs des appareils auditifs à Casablanca, ce que le tarif comprend et le remboursement. Bilan et essai chez AUDIOLIK.',
      h1: 'Appareils auditifs à Casablanca',
      lede:
        "Les deux questions qu'on nous pose le plus : « combien ça coûte » et « est-ce que ça se voit ». Voici des réponses nettes, par votre [audioprothésiste à Casablanca](/audioprothesiste-casablanca/), aux Princesses.",
      /* Carte tarifaire — tarifs indicatifs PAR APPAREIL validés par le centre
         (09/2026). C'est la seule page qui affiche des prix chiffrés : les
         versions arabe et anglaise ne sont pas encore mises à jour. */
      pricing: {
        id: 'prix',
        h2: 'Prix des appareils auditifs à Casablanca',
        intro: [
          'AUDIOLIK propose plusieurs niveaux de technologie pour adapter votre appareil auditif à votre audition, à votre quotidien et à votre budget. Les tarifs ci-dessous sont indiqués par appareil et comprennent l’accompagnement nécessaire à une adaptation personnalisée.',
        ],
        cards: [
          {
            key: 'essentiel',
            name: 'ESSENTIEL',
            price: 'À partir de 5 000 DH',
            unit: 'par appareil',
            desc: 'Une solution fiable pour retrouver une écoute confortable au quotidien.',
            features: [
              'Pour les environnements calmes à modérément animés',
              'Réglages adaptés à votre audiogramme',
              'Modèles à pile selon les besoins et les disponibilités',
              'Bilan, adaptation et contrôles de suivi inclus',
            ],
            cta: 'Demander un devis',
            ariaLabel: 'Demander un devis pour la gamme Essentiel sur WhatsApp (nouvel onglet)',
            whatsappPrefill: 'Bonjour, je souhaite recevoir des informations sur la gamme Essentiel à partir de 5 000 DH.',
          },
          {
            key: 'confort',
            name: 'CONFORT',
            featured: true,
            badge: 'Le choix le plus demandé',
            price: 'De 7 000 à 12 000 DH',
            unit: 'par appareil',
            desc: 'Davantage de confort pour une vie quotidienne active et des environnements sonores variés.',
            features: [
              'Pour les conversations, sorties et repas en famille',
              'Meilleure gestion de la parole dans le bruit',
              'Modèles discrets disponibles',
              'Rechargeable et Bluetooth selon le modèle',
              'Bilan, essai, réglages et suivi inclus',
            ],
            cta: 'Découvrir la gamme',
            ariaLabel: 'Découvrir la gamme Confort sur WhatsApp (nouvel onglet)',
            whatsappPrefill: 'Bonjour, je souhaite recevoir des informations sur la gamme Confort de 7 000 à 12 000 DH.',
          },
          {
            key: 'premium',
            name: 'PREMIUM',
            price: 'À partir de 14 000 DH',
            unit: 'par appareil',
            desc: 'Des technologies avancées pour les situations d’écoute les plus exigeantes.',
            features: [
              'Pour les restaurants, réunions et conversations de groupe',
              'Traitement avancé de la parole dans le bruit',
              'Solutions rechargeables et connectées selon le modèle',
              'Technologie et fonctionnalités premium',
              'Accompagnement et réglages personnalisés inclus',
            ],
            cta: 'Découvrir les solutions Premium',
            ariaLabel: 'Découvrir les solutions Premium sur WhatsApp (nouvel onglet)',
            whatsappPrefill: 'Bonjour, je souhaite recevoir des informations sur les solutions auditives Premium à partir de 14 000 DH.',
          },
        ],
        note: 'Tarifs indicatifs par appareil. Le prix définitif dépend de votre audition, du modèle choisi et des fonctionnalités nécessaires. Des solutions technologiques plus avancées peuvent être proposées après l’étude de vos besoins. Un devis détaillé vous est remis après le bilan, sans engagement.',
        after: [
          'Lorsque les deux oreilles présentent une perte auditive, une solution pour deux appareils peut être recommandée. Le tarif complet est alors indiqué clairement sur votre devis personnalisé.',
          'Tout commence par un [bilan auditif au centre](/bilan-auditif-casablanca/). Pour comparer les fonctions, notre page sur les [appareils rechargeables et Bluetooth](/appareils-auditifs-rechargeables-bluetooth/) les détaille, et celle sur le [remboursement des appareils auditifs au Maroc](/remboursement-appareils-auditifs-maroc/) explique la prise en charge.',
        ],
      },
      sections: [
        {
          h3: 'Ce qui fait varier le prix',
          id: 'prix-facteurs',
          p: [
            "Un appareillage se raisonne sur cinq ans, pas sur une facture. Ce qui coûte cher, ce n'est pas le boîtier : c'est le temps passé à l'adapter à votre audition, puis à le régler jusqu'à ce qu'il devienne inutile d'y penser.",
            "Il n'y a donc pas un prix unique pour une prothèse auditive au Maroc. Le tarif dépend :",
          ],
          list: [
            "*Du niveau de perte auditive* : une perte sévère demande un appareil plus puissant qu'une perte légère.",
            "*De la forme de l'appareil* : [intra-auriculaire](/appareils-auditifs-intra-auriculaires/) logé dans le conduit ou [contour d'oreille](/appareils-auditifs-contour-oreille/).",
            '*Du niveau technologique* : finesse du traitement du son, nombre de programmes, adaptation automatique aux lieux.',
            "*Du fonctionnement à pile ou rechargeable*, avec ou sans connexion Bluetooth au téléphone et à la télévision.",
            '*De vos besoins de compréhension dans le bruit* : restaurants, réunions, familles nombreuses.',
            "*Du suivi et des réglages compris* : chez nous, ils font partie du prix, pas d'une facture à part.",
          ],
        },
        {
          h2: 'Que comprend le prix chez AUDIOLIK ?',
          id: 'prix-compris',
          p: [
            "Le prix exact vous est communiqué après votre bilan auditif — annoncer un chiffre définitif avant d'avoir mesuré n'aurait aucun sens. Vous repartez avec un devis détaillé, et rien n'est signé le jour même. Il comprend :",
          ],
          list: [
            "*Le bilan auditif et l'étude de vos besoins* : on mesure votre audition et on parle de vos situations difficiles.",
            "*L'essai de la solution auditive* dans votre vie de tous les jours, avant de décider.",
            "*L'adaptation initiale*, avec prise d'empreinte si nécessaire.",
            '*Les réglages progressifs*, le temps que votre cerveau se réhabitue aux sons.',
            "*Les contrôles de suivi* pour vérifier que l'appareil reste bien réglé.",
            '*Le nettoyage au centre* et le changement des filtres.',
            '*La garantie constructeur* et le dépannage.',
            "*L'accompagnement pour votre dossier de remboursement* : devis et facture conformes, pièces à réunir.",
          ],
        },
        {
          h2: 'Une oreille ou deux : comment le budget est-il calculé ?',
          id: 'une-ou-deux-oreilles',
          p: [
            "Les tarifs indiqués plus haut sont donnés par appareil. Le nombre d'appareils ne se choisit pas à l'avance : c'est le bilan auditif qui dit si une oreille ou les deux ont besoin d'aide.",
            "En cas de perte bilatérale, c'est-à-dire aux deux oreilles, un appareillage des deux côtés est souvent conseillé. Le cerveau localise les sons en comparant ce qu'il reçoit de chaque oreille : avec deux appareils, on repère mieux d'où vient une voix et on comprend mieux dans le bruit. Avec une seule oreille appareillée, on entend plus fort, mais on comprend moins bien. Le devis indique alors clairement le prix des deux appareils.",
          ],
        },
        {
          h2: 'Remboursement des appareils auditifs au Maroc',
          id: 'remboursement',
          p: [
            "Une partie de l'appareillage peut être prise en charge. Le montant dépend notamment de votre régime — CNSS, CNOPS ou AMO — et de votre mutuelle, s'il y en a une : nous ne pouvons donc pas vous promettre un montant à l'avance.",
            'De notre côté, nous vous remettons un devis et une facture conformes et nous vous aidons à constituer le dossier. Les régimes concernés, les pièces à réunir et la démarche sont détaillés sur notre page [remboursement des appareils auditifs au Maroc](/remboursement-appareils-auditifs-maroc/).',
          ],
        },
        {
          h2: 'Est-ce que ça se voit ?',
          id: 'discretion',
          p: [
            "Beaucoup moins qu'on ne l'imagine. Les [contours à écouteur déporté](/appareils-auditifs-contour-oreille/) sont invisibles de face, et les [intra-auriculaires](/appareils-auditifs-intra-auriculaires/) sont entièrement logés dans le conduit. La plupart des gens autour de vous ne le remarqueront pas.",
          ],
        },
      ],
      faqTitle: 'Questions fréquentes sur le prix des appareils auditifs',
      faq: [
        {
          q: "Quel est le prix d'un appareil auditif à Casablanca ?",
          a: "Chez AUDIOLIK, les tarifs indicatifs sont de 5 000 DH minimum pour la gamme Essentiel, de 7 000 à 12 000 DH pour la gamme Confort et de 14 000 DH minimum pour la gamme Premium, par appareil. Le prix définitif dépend de votre audition, du modèle choisi et des fonctionnalités nécessaires : il figure sur le devis détaillé remis après le bilan auditif, sans engagement.",
        },
        {
          q: 'Le prix est-il indiqué pour une oreille ou pour deux ?',
          a: "Les tarifs indiqués s'entendent par appareil, donc pour une oreille. Si le bilan montre qu'il faut appareiller les deux oreilles, le devis comprend deux appareils et le montant total y est indiqué clairement.",
        },
        {
          q: "Peut-on essayer un appareil auditif avant de l'acheter ?",
          a: "Oui. Une période d'essai permet de tester la solution auditive dans votre vie de tous les jours : à table, au téléphone, au marché. Les réglages de cette période sont compris, et rien n'est signé le jour du bilan.",
        },
        {
          q: 'Les réglages et le suivi sont-ils compris ?',
          a: "Oui. L'adaptation initiale, les réglages progressifs, les contrôles de suivi et le nettoyage au centre font partie du prix. Ils sont détaillés sur votre devis.",
        },
        {
          q: 'Les appareils auditifs sont-ils remboursés au Maroc ?',
          a: "Une partie de l'appareillage peut être prise en charge. Le montant dépend de votre régime (CNSS, CNOPS, AMO) et de votre éventuelle mutuelle : il n'est donc pas possible d'annoncer un remboursement fixe. Nous vous aidons à réunir les pièces du dossier.",
        },
        {
          q: 'Quelle différence de prix entre un appareil à pile et un rechargeable ?',
          a: "À niveau technologique égal, un appareil rechargeable coûte en général un peu plus cher à l'achat, car il intègre une batterie et un chargeur. En contrepartie, vous n'achetez plus de piles. L'écart exact dépend du modèle et figure sur le devis.",
        },
        {
          q: 'Combien de temps dure un appareil auditif ?',
          a: "Plusieurs années, en général autour de cinq ans, et d'autant plus longtemps qu'il est entretenu. Le nettoyage, le changement des filtres et le dépannage se font au centre.",
        },
      ],
      related: [
        { slug: 'bilan-auditif-casablanca', label: 'Bilan auditif' },
        { slug: 'audioprothesiste-casablanca', label: 'Audioprothésiste à Casablanca' },
        { slug: 'appareils-auditifs-intra-auriculaires', label: 'Intra-auriculaires' },
        { slug: 'appareils-auditifs-contour-oreille', label: "Contours d'oreille" },
        { slug: 'appareils-auditifs-rechargeables-bluetooth', label: 'Rechargeables et Bluetooth' },
        { slug: 'remboursement-appareils-auditifs-maroc', label: 'Remboursement' },
      ],
    },
    ar: {
      kicker: 'الأجهزة',
      title: 'الأجهزة السمعية بالدار البيضاء: الثمن، الخفاء، التجربة · أوديوليك',
      description:
        'أجهزة سمعية دقيقة، قابلة للشحن ومتّصلة بالدار البيضاء. ما يشمله الثمن، التغطية الصحية، والتجربة قبل القرار. أوديوليك، الأميرات، المعاريف.',
      h1: 'الأجهزة السمعية بالدار البيضاء',
      lede:
        'أكثر سؤالين يُطرحان علينا: «كم يكلّف» و«هل يظهر». وهذه أجوبة واضحة.',
      sections: [
        {
          h2: 'الثمن، بكل وضوح',
          p: [
            'التجهيز السمعي قرار يُحسَب على خمس سنوات، لا على فاتورة واحدة. وما يكلّف ليس العلبة، بل الوقت المبذول في ملاءمتها مع سمعك، ثم ضبطها إلى أن تنسى وجودها.',
            'تختلف الأثمان حسب مستوى التقنية ودرجة ضعف السمع. وتُقدَّم لك في المركز، بعد الفحص — لأن ذكر رقم قبل القياس لا معنى له. تغادر ومعك عرض أثمان مفصّل، ولا توقيع في اليوم نفسه.',
          ],
        },
        {
          h2: 'ما يشمله الثمن',
          p: [],
          list: [
            'التركيب الأوّلي وأخذ البصمة عند الحاجة',
            'كل عمليات الضبط خلال فترة التجربة',
            'فحوص المتابعة والتنظيف داخل المركز',
            'ضمان الصانع والإصلاح',
            'عرض أثمان وفاتورة مطابقان لملفّ الاسترجاع',
          ],
        },
        {
          h2: 'التغطية الصحية',
          p: [
            'حسب صندوقك (الضمان الاجتماعي، أو التعاضدية، أو التأمين الإجباري عن المرض، أو تأمين المقاولة)، قد يُسترجع جزء من الكلفة. ونُعدّ لك الوثائق التي يحتاجها ملفّك.',
          ],
        },
        {
          h2: 'هل يظهر الجهاز؟',
          p: [
            'أقلّ بكثير ممّا يُتصوَّر. الأجهزة [بسمّاعة داخل القناة](/ar/appareils-auditifs-intra-auriculaires/) لا تكاد تُرى من الأمام، وأجهزة داخل الأذن تستقرّ كاملة في القناة. ولن يلاحظها أغلب من حولك.',
          ],
        },
        {
          h2: 'أذن واحدة أم اثنتان؟',
          p: [
            'إذا كانت الأذنان مصابتين، نجهّز الاثنتين: فالدماغ يحدّد مصدر الصوت بمقارنة ما يصله من كل جهة. وبأذن واحدة مجهَّزة تسمع أقوى، لكنك تفهم أقلّ وسط الضجيج.',
          ],
        },
      ],
      faq: [
        {
          q: 'هل يمكن التجربة قبل الاختيار؟',
          a: 'نعم. كل عمليات الضبط خلال فترة التجربة مشمولة في الثمن، وتختبر الجهاز حيث يهمّ فعلًا: على المائدة، في الهاتف، في السوق.',
        },
        {
          q: 'كم يدوم الجهاز السمعي؟',
          a: 'سنوات عدّة، وتطول كلّما اعتُني به. التنظيف وتغيير المصافي والإصلاح تُنجَز في المركز.',
        },
      ],
      related: [
        { slug: 'appareils-auditifs-intra-auriculaires', label: 'داخل الأذن' },
        { slug: 'appareils-auditifs-contour-oreille', label: 'خلف الأذن' },
        { slug: 'appareils-auditifs-rechargeables-bluetooth', label: 'قابل للشحن وبلوتوث' },
      ],
    },
    en: {
      kicker: 'The devices',
      title: 'Hearing Aids in Casablanca: Price, Discretion, Trial · AudioLik',
      description:
        'Discreet, rechargeable and connected hearing aids in Casablanca. What the price includes, reimbursement, and trying before you decide. AudioLik, Les Princesses, Maârif.',
      h1: 'Hearing aids in Casablanca',
      lede:
        'The two questions we are asked most: "how much does it cost" and "does it show". Here are clear answers.',
      sections: [
        {
          h2: 'The price, said plainly',
          p: [
            'A hearing aid is a five-year decision, not a single invoice. What costs is not the casing: it is the time spent matching it to your hearing, then adjusting it until you stop thinking about it.',
            'Prices depend on the level of technology and on your hearing loss. They are given to you at the centre, after the assessment — quoting a figure before measuring would mean nothing. You leave with a detailed quote, and nothing is signed on the day.',
          ],
        },
        {
          h2: 'What the price includes',
          p: [],
          list: [
            'Initial fitting and ear impression when needed',
            'All adjustments during the trial period',
            'Follow-up checks and cleaning at the centre',
            "The manufacturer's warranty and repairs",
            'A quote and an invoice suitable for your reimbursement file',
          ],
        },
        {
          h2: 'Reimbursement',
          p: [
            'Depending on your scheme (CNSS, CNOPS, AMO or a company plan), part of the cost may be reimbursed. We prepare the documents your file needs.',
          ],
        },
        {
          h2: 'Does it show?',
          p: [
            'Far less than you would imagine. [Receiver-in-canal](/en/appareils-auditifs-intra-auriculaires/) models are invisible from the front, and in-the-ear devices sit entirely inside the canal. Most people around you will not notice.',
          ],
        },
        {
          h2: 'One ear or both?',
          p: [
            'If both ears are affected, both are fitted: the brain locates sound by comparing what it receives from each side. With only one ear fitted, you hear louder but understand less in noise.',
          ],
        },
      ],
      faq: [
        {
          q: 'Can I try before choosing?',
          a: 'Yes. All adjustments during the trial period are included in the price, and you test where it counts: at the table, on the phone, at the market.',
        },
        {
          q: 'How long does a hearing aid last?',
          a: 'Several years, and longer the better it is maintained. Cleaning, filter changes and repairs are done at the centre.',
        },
      ],
      related: [
        { slug: 'appareils-auditifs-intra-auriculaires', label: 'In-the-ear' },
        { slug: 'appareils-auditifs-contour-oreille', label: 'Behind-the-ear' },
        { slug: 'appareils-auditifs-rechargeables-bluetooth', label: 'Rechargeable and Bluetooth' },
      ],
    },
  },

  /* ====================== 5 · La perte auditive ========================== */
  {
    slug: 'perte-auditive',
    fr: {
      kicker: 'Comprendre',
      title: "Perte auditive : signes, causes et quoi faire · AudioLik Casablanca",
      description:
        "Comment reconnaître une baisse d'audition, pourquoi elle passe inaperçue, ce qu'on peut faire et quand consulter. Expliqué simplement par AudioLik, Casablanca.",
      h1: 'Comprendre la perte auditive',
      lede:
        "Une baisse d'audition s'installe lentement. Les sons forts ne sont pas les premiers à partir : ce sont les nuances, les consonnes, les voix aiguës, les conversations dans le bruit.",
      sections: [
        {
          h2: 'Pourquoi elle passe inaperçue',
          p: [
            "Parce qu'elle progresse par paliers minuscules, sur des années. On monte un peu la télé, on choisit une table au fond du restaurant, on téléphone moins. Chaque ajustement paraît anodin ; mis bout à bout, ils dessinent un retrait.",
            "C'est pour cela que ce sont presque toujours les proches qui remarquent les premiers. Eux voient l'ensemble ; la personne concernée ne voit que le dernier petit ajustement.",
          ],
        },
        {
          h2: 'Les signes qui doivent alerter',
          p: [],
          list: [
            'Vous montez le son de la télévision plus fort que les autres',
            'Dans un café, vous suivez la conversation, puis vous décrochez',
            'On vous dit que vous faites répéter. Souvent',
            'Le téléphone est devenu compliqué, surtout avec les inconnus',
            'Un sifflement ou un bourdonnement vous accompagne au calme',
            'Les voix aiguës, celles des enfants et des femmes, deviennent floues',
            'Vous entendez qu’on vous parle, mais vous ne comprenez pas les mots',
          ],
        },
        {
          h2: 'Entendre et comprendre : deux choses différentes',
          p: [
            "On peut percevoir le volume d'une voix sans distinguer les mots. C'est même le cas le plus fréquent : les consonnes, qui portent le sens, sont aiguës et fragiles ; les voyelles, qui portent le volume, sont graves et résistent.",
            "D'où l'expression qu'on entend souvent en consultation : « j'entends, mais je ne comprends pas ». C'est précisément ce que mesure l'audiométrie vocale, au-delà de l'audiogramme.",
          ],
        },
        {
          h2: 'Pourquoi ne pas attendre',
          p: [
            "Plus une perte auditive est prise tôt, plus le cerveau garde sa capacité à décoder la parole, et plus l'adaptation à un appareil est simple. Attendre ne rend pas l'appareillage plus facile — il le rend plus long.",
            "Et parfois, la gêne vient simplement d'un bouchon de cérumen. Le [bilan](/bilan-auditif-casablanca/) fait la différence en moins d'une heure.",
          ],
        },
      ],
      faq: [
        {
          q: 'Un bourdonnement dans l’oreille, est-ce grave ?',
          a: "Un acouphène n'est pas une maladie en soi, c'est un symptôme. Il accompagne souvent une perte auditive, parfois discrète. Un bilan permet de savoir ce qu'il y a derrière.",
        },
        {
          q: 'La perte auditive se soigne-t-elle ?',
          a: "Cela dépend de la cause. Un bouchon se retire, une infection se soigne. Une perte liée à l'âge ou au bruit ne se répare pas, mais elle se compense très bien avec un appareil adapté.",
        },
      ],
      related: [
        { slug: 'bilan-auditif-casablanca', label: 'Faire un bilan auditif' },
        { slug: 'appareils-auditifs-casablanca', label: 'Les appareils auditifs' },
        { slug: 'protections-auditives-sur-mesure', label: 'Protéger son audition' },
      ],
    },
    ar: {
      kicker: 'الفهم',
      title: 'ضعف السمع: العلامات والأسباب وما العمل · أوديوليك الدار البيضاء',
      description:
        'كيف تتعرّف على تراجع سمعك، ولماذا يمرّ دون انتباه، وما الذي يمكن فعله، ومتى تستشير. شرح مبسّط من أوديوليك، الدار البيضاء.',
      h1: 'فهم ضعف السمع',
      lede:
        'ضعف السمع يستقرّ ببطء. ليست الأصوات القوية أوّل ما يختفي، بل التفاصيل: الحروف الساكنة، والأصوات الحادّة، والحديث وسط الضجيج.',
      sections: [
        {
          h2: 'لماذا يمرّ دون انتباه',
          p: [
            'لأنه يتقدّم بدرجات دقيقة جدًا، على مدى سنوات. ترفع صوت التلفاز قليلًا، تختار طاولة في عمق المطعم، تتّصل هاتفيًا أقلّ. كل تعديل يبدو بسيطًا؛ لكنها مجتمعة ترسم انسحابًا.',
            'ولهذا يكون الأقارب دائمًا تقريبًا أوّل من يلاحظ. هم يرون المشهد كاملًا؛ أمّا المعنيّ فلا يرى إلا آخر تعديل صغير.',
          ],
        },
        {
          h2: 'العلامات التي ينبغي الانتباه إليها',
          p: [],
          list: [
            'ترفع صوت التلفاز أكثر من الآخرين',
            'في المقهى تتابع الحديث، ثم تفقد خيطه',
            'يقول لك محدّثوك إنك تطلب الإعادة. كثيرًا',
            'صارت المكالمات الهاتفية متعبة، خاصة مع من لا تعرفهم',
            'يرافقك طنين أو أزيز في الأذن عند الهدوء',
            'أصوات الأطفال والنساء الحادّة صارت غير واضحة',
            'تسمع أن أحدهم يخاطبك، لكنك لا تفهم الكلمات',
          ],
        },
        {
          h2: 'أن تسمع وأن تفهم: أمران مختلفان',
          p: [
            'يمكن أن تدرك شدّة الصوت دون أن تميّز الكلمات. بل هذه هي الحالة الأكثر شيوعًا: فالحروف الساكنة، حاملة المعنى، حادّة وهشّة؛ أمّا الحروف المتحرّكة، حاملة الشدّة، فغليظة ومقاومة.',
            'ومن هنا العبارة التي نسمعها كثيرًا في المركز: «أسمع، لكنني لا أفهم». وهذا بالضبط ما يقيسه القياس الكلامي، إلى جانب مخطّط السمع.',
          ],
        },
        {
          h2: 'لماذا لا يُنصح بالانتظار',
          p: [
            'كلّما بُوشِر ضعف السمع مبكرًا، حافظ الدماغ على قدرته على فكّ شفرة الكلام، وكان التأقلم مع الجهاز أسهل. الانتظار لا يجعل التجهيز أيسر — بل يجعله أطول.',
            'وأحيانًا يكون السبب مجرّد سدادة صملاخ. و[الفحص](/ar/bilan-auditif-casablanca/) يحسم الأمر في أقلّ من ساعة.',
          ],
        },
      ],
      faq: [
        {
          q: 'هل الطنين في الأذن خطير؟',
          a: 'الطنين ليس مرضًا في ذاته، بل عَرَضًا. وهو يرافق غالبًا ضعفًا في السمع، قد يكون خفيفًا. والفحص يبيّن ما وراءه.',
        },
        {
          q: 'هل يُعالَج ضعف السمع؟',
          a: 'ذلك يتوقّف على السبب. السدادة تُزال، والالتهاب يُعالَج. أمّا الضعف المرتبط بالسنّ أو بالضجيج فلا يُصلَح، لكنه يُعوَّض جيدًا بجهاز ملائم.',
        },
      ],
      related: [
        { slug: 'bilan-auditif-casablanca', label: 'إجراء فحص السمع' },
        { slug: 'appareils-auditifs-casablanca', label: 'الأجهزة السمعية' },
        { slug: 'protections-auditives-sur-mesure', label: 'حماية السمع' },
      ],
    },
    en: {
      kicker: 'Understanding',
      title: 'Hearing Loss: Signs, Causes and What to Do · AudioLik Casablanca',
      description:
        'How to recognise fading hearing, why it goes unnoticed, what can be done and when to seek advice. Explained plainly by AudioLik, Casablanca.',
      h1: 'Understanding hearing loss',
      lede:
        'Hearing loss settles in slowly. Loud sounds are not the first to go: it is the nuances, the consonants, high voices, conversation in noise.',
      sections: [
        {
          h2: 'Why it goes unnoticed',
          p: [
            'Because it progresses in tiny steps, over years. You turn the television up a little, you pick a table at the back of the restaurant, you phone less. Each adjustment seems harmless; put together, they trace a withdrawal.',
            'That is why relatives almost always notice first. They see the whole picture; the person concerned only sees the latest small adjustment.',
          ],
        },
        {
          h2: 'The signs to watch for',
          p: [],
          list: [
            'You turn the television up louder than others',
            'In a café you follow the conversation, then lose the thread',
            'People tell you that you ask them to repeat. Often',
            'The phone has become hard work, especially with strangers',
            'A whistle or a buzz keeps you company in the quiet',
            "High voices, children's and women's, become blurred",
            'You hear that someone is speaking, but you do not catch the words',
          ],
        },
        {
          h2: 'Hearing and understanding are two different things',
          p: [
            'You can perceive the volume of a voice without making out the words. That is in fact the most common case: consonants, which carry meaning, are high-pitched and fragile; vowels, which carry volume, are low and resilient.',
            'Hence the sentence we often hear at the centre: "I hear, but I do not understand." That is precisely what speech audiometry measures, beyond the audiogram.',
          ],
        },
        {
          h2: 'Why not to wait',
          p: [
            'The earlier a hearing loss is addressed, the more the brain keeps its ability to decode speech, and the simpler adapting to a device becomes. Waiting does not make fitting easier — it makes it longer.',
            'And sometimes the difficulty is simply earwax. The [assessment](/en/bilan-auditif-casablanca/) settles it in under an hour.',
          ],
        },
      ],
      faq: [
        {
          q: 'Is ringing in the ear serious?',
          a: 'Tinnitus is not a disease in itself, it is a symptom. It often accompanies a hearing loss, sometimes a mild one. An assessment shows what lies behind it.',
        },
        {
          q: 'Can hearing loss be cured?',
          a: 'It depends on the cause. Earwax can be removed, an infection treated. Loss linked to age or noise cannot be repaired, but it is very well compensated with a suitable device.',
        },
      ],
      related: [
        { slug: 'bilan-auditif-casablanca', label: 'Have a hearing assessment' },
        { slug: 'appareils-auditifs-casablanca', label: 'Hearing aids' },
        { slug: 'protections-auditives-sur-mesure', label: 'Protecting your hearing' },
      ],
    },
  },
];
