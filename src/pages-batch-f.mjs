/* Lot F — page 18 (10/2026), issue de l'étude de mots-clés.
 *
 * 18 · prix-appareil-auditif-maroc « prix appareil auditif maroc »,
 *      « combien coûte un appareil auditif », « ثمن سماعة الأذن المغرب »,
 *      « شحال الثمن ديال سماعة الودن », « hearing aid price morocco »
 *
 * Mêmes règles que src/pages.mjs : prix = uniquement les tarifs indicatifs par
 * appareil de la carte tarifaire ; aucun montant de remboursement ; aucune
 * promesse non confirmée ; aucun modèle précis promis en stock ; pas
 * d'appareillage enfants ; aucun horaire écrit en dur.
 */
export default [
  /* ======================================================================
     18 · Prix d'un appareil auditif au Maroc
     ====================================================================== */
  {
    slug: 'prix-appareil-auditif-maroc',
    fr: {
      kicker: 'Le budget',
      title: "Prix d'un appareil auditif au Maroc : les repères · AudioLik",
      description:
        "Combien coûte un appareil auditif au Maroc ? Les repères par appareil chez AudioLik, à Casablanca : Essentiel dès 5 000 DH, Confort de 7 000 à 12 000 DH, Premium dès 14 000 DH. Devis détaillé et essai.",
      h1: "Prix d'un appareil auditif au Maroc",
      lede:
        "C'est la première question posée au téléphone, et elle mérite une réponse chiffrée. Voici les repères pratiqués chez AudioLik, ce qui explique les écarts entre deux appareils, et ce que le prix comprend.",
      sections: [
        {
          h2: 'Les repères, par appareil',
          p: [
            "Au Maroc, un appareil auditif se situe entre 5 000 et plus de 14 000 dirhams. Chez AudioLik, les repères sont les mêmes pour toutes les marques, par appareil :",
          ],
          list: [
            "*Essentiel*, à partir de 5 000 DH : vie calme, conversations en tête à tête, télévision",
            "*Confort*, de 7 000 à 12 000 DH : vie active, repas de famille, réunions, rue, téléphone",
            "*Premium*, à partir de 14 000 DH : milieux très bruyants, café, voiture, écoute exigeante",
          ],
        },
        {
          h2: 'Pourquoi un appareil coûte 5 000 et un autre 14 000',
          p: [
            "Ce qui change d'une gamme à l'autre n'est ni la marque ni la taille, mais ce que l'électronique sait faire quand plusieurs personnes parlent en même temps :",
          ],
          list: [
            "*Le nombre de canaux de réglage* : quelques bandes de fréquences en entrée de gamme, plusieurs dizaines en haut de gamme, donc un réglage qui colle de plus près à votre audiogramme",
            "*La réduction du bruit et la directionnalité* : c'est ce qui sépare une voix du brouhaha, et le seul critère qui justifie vraiment de monter en gamme",
            "*Les options de confort* : [batterie rechargeable et connexion Bluetooth](/appareils-auditifs-rechargeables-bluetooth/), réglage depuis le téléphone, programmes automatiques",
          ],
        },
        {
          h2: 'La forme ne fait pas le prix',
          p: [
            "À gamme égale, un [intra-auriculaire](/appareils-auditifs-intra-auriculaires/) et un [contour d'oreille](/appareils-auditifs-contour-oreille/) sont au même prix. La forme se choisit selon votre audition, la forme de votre conduit et votre dextérité, pas selon votre budget.",
          ],
        },
        {
          h2: 'Une oreille ou les deux',
          p: [
            "Quand les deux oreilles sont concernées, l'appareillage des deux côtés est le plus souvent recommandé : le cerveau a besoin des deux oreilles pour situer les sons et extraire une voix du bruit de fond. Le budget double, et c'est précisément ce que nous détaillons avec vous sur le devis. Commencer par une seule oreille reste possible.",
          ],
        },
        {
          h2: "Ce qui est compris, et ce qui s'ajoute",
          p: [
            "Le prix d'un appareil comprend son adaptation et ses réglages. Au centre, le nettoyage et le dépannage se font sur place, y compris pour des appareils qui n'ont pas été achetés chez nous.",
            "À prévoir en plus, selon le modèle : les piles pour les appareils qui ne sont pas rechargeables, et le remplacement des embouts quand ils jaunissent ou durcissent. Voir l'[entretien et la réparation](/entretien-et-reparation-appareils-auditifs/).",
          ],
        },
        {
          h2: 'Du devis à la décision',
          p: [
            "Le modèle précis est choisi avec vous après le [bilan auditif](/bilan-auditif-casablanca/). Nous comparons deux ou trois appareils adaptés à votre audition, vous les essayez, et vous recevez un devis détaillé. Rien n'est signé le jour même.",
          ],
        },
        {
          h2: 'Et le remboursement ?',
          p: [
            "Selon votre couverture, une partie du prix peut être prise en charge. Nous préparons le devis et la facture au format attendu. Les démarches sont détaillées sur la page [remboursement des appareils auditifs au Maroc](/remboursement-appareils-auditifs-maroc/).",
          ],
        },
        {
          h2: 'Voir les prix sur des appareils réels',
          p: [
            "Les repères ci-dessus donnent un ordre d'idée ; un appareil se juge en main et à l'oreille. Passez au 106B rue Al Jounaid, quartier Les Princesses, à Maârif, avec ou sans rendez-vous : nous vous montrons les gammes [Signia](/appareils-auditifs-signia/) et [Phonak](/appareils-auditifs-phonak/) et ce qui change entre elles.",
          ],
        },
      ],
      faq: [
        {
          q: 'Combien coûte un appareil auditif au Maroc ?',
          a: "Par appareil : à partir de 5 000 DH en gamme Essentiel, de 7 000 à 12 000 DH en Confort, à partir de 14 000 DH en Premium. Le prix suit le niveau technologique, pas la taille de l'appareil ni la marque.",
        },
        {
          q: "Pourquoi le prix n'est-il pas affiché modèle par modèle ?",
          a: "Parce que le modèle se choisit après le bilan, en fonction de votre audition et de vos usages. Les repères par gamme situent le budget avant de venir, et le devis remis au centre donne le prix exact.",
        },
        {
          q: 'Un appareil invisible coûte-t-il plus cher ?',
          a: "Non. À gamme égale, un intra-auriculaire et un contour d'oreille sont au même prix. La forme dépend de votre audition et de votre dextérité.",
        },
        {
          q: 'Les réglages sont-ils facturés en plus ?',
          a: "L'adaptation et les réglages font partie de l'appareillage. Le nettoyage et le dépannage se font sur place au centre.",
        },
        {
          q: "Peut-on essayer un appareil avant de l'acheter ?",
          a: "Oui. L'appareil est réglé sur votre audiogramme et essayé avant toute décision. Rien n'est signé le jour du bilan.",
        },
        {
          q: 'Combien de temps dure un appareil auditif ?',
          a: "Quatre à six ans en moyenne, davantage avec un entretien régulier : nettoyage, remplacement des filtres et des embouts.",
        },
      ],
      related: [
        { slug: 'appareils-auditifs-casablanca', label: 'Les appareils auditifs' },
        { slug: 'remboursement-appareils-auditifs-maroc', label: 'Le remboursement' },
        { slug: 'bilan-auditif-casablanca', label: 'Le bilan auditif' },
      ],
    },
    ar: {
      kicker: 'الميزانية',
      title: 'ثمن الجهاز السمعي بالمغرب: المراجع · أوديوليك الدار البيضاء',
      description:
        'شحال كيسوى الجهاز السمعي بالمغرب؟ المراجع للجهاز الواحد في أوديوليك، بالدار البيضاء: الأساسية ابتداءً من 5 000 درهم، الراحة من 7 000 إلى 12 000 درهم، بريميوم ابتداءً من 14 000 درهم. عرض سعر مفصّل وتجربة.',
      h1: 'ثمن الجهاز السمعي بالمغرب',
      lede:
        'هذا أوّل سؤال يُطرح في الهاتف، ويستحقّ جوابًا بالأرقام. إليك المراجع المعمول بها في أوديوليك، وما يفسّر الفرق بين جهاز وآخر، وما يشمله الثمن.',
      sections: [
        {
          h2: 'المراجع، للجهاز الواحد',
          p: [
            'بالمغرب، يتراوح ثمن الجهاز السمعي (السماعة ديال الودن) بين 5 000 درهم وأكثر من 14 000 درهم. في أوديوليك، المراجع نفسها لكل العلامات، للجهاز الواحد:',
          ],
          list: [
            '*الأساسية*، ابتداءً من 5 000 درهم: حياة هادئة، حديث وجهًا لوجه، التلفاز',
            '*الراحة*، من 7 000 إلى 12 000 درهم: حياة نشيطة، وجبات العائلة، الاجتماعات، الشارع، الهاتف',
            '*بريميوم*، ابتداءً من 14 000 درهم: أماكن كثيرة الضجيج، المقهى، السيارة، استماع دقيق',
          ],
        },
        {
          h2: 'لماذا جهاز بـ5 000 وآخر بـ14 000',
          p: [
            'ما يتغيّر من فئة إلى أخرى ليس العلامة ولا الحجم، بل ما تقدر عليه الإلكترونيات حين يتكلّم عدّة أشخاص في الوقت نفسه:',
          ],
          list: [
            '*عدد قنوات الضبط*: بضع نطاقات في الفئة الأولى، وعشرات في الفئة العليا، أي ضبط أقرب إلى مخطّط سمعك',
            '*تخفيض الضجيج والاتجاهية*: هي التي تفصل صوت المتحدّث عن الضجيج، وهي السبب الحقيقي الوحيد للانتقال إلى فئة أعلى',
            '*خيارات الراحة*: [بطارية قابلة للشحن واتصال بلوتوث](/ar/appareils-auditifs-rechargeables-bluetooth/)، الضبط من الهاتف، برامج أوتوماتيكية',
          ],
        },
        {
          h2: 'الشكل لا يحدّد الثمن',
          p: [
            'في الفئة نفسها، [الجهاز داخل الأذن](/ar/appareils-auditifs-intra-auriculaires/) و[الجهاز خلف الأذن](/ar/appareils-auditifs-contour-oreille/) لهما الثمن نفسه. يُختار الشكل حسب سمعك وشكل قناة أذنك وخفّة يديك، لا حسب ميزانيتك.',
          ],
        },
        {
          h2: 'أذن واحدة أم الاثنتان',
          p: [
            'حين يكون الضعف في الأذنين، يُنصح غالبًا بتجهيز الاثنتين: الدماغ يحتاج الأذنين لتحديد مصدر الصوت واستخراج صوت المتحدّث من الضجيج. الميزانية تتضاعف، وهذا بالضبط ما نفصّله معك في عرض السعر. والبداية بأذن واحدة تبقى ممكنة.',
          ],
        },
        {
          h2: 'ما يشمله الثمن وما يُضاف إليه',
          p: [
            'ثمن الجهاز يشمل ملاءمته وضبطه. وفي المركز، التنظيف والإصلاح يتمّان في عين المكان، حتى للأجهزة التي لم تُشترَ عندنا.',
            'ما ينبغي توقّعه زيادة، حسب الطراز: البطاريات للأجهزة غير القابلة للشحن، وتبديل القوالب حين تصفرّ أو تقسى. انظر [الصيانة والإصلاح](/ar/entretien-et-reparation-appareils-auditifs/).',
          ],
        },
        {
          h2: 'من عرض السعر إلى القرار',
          p: [
            'يُختار الطراز الدقيق معك بعد [فحص السمع](/ar/bilan-auditif-casablanca/). نقارن بين جهازين أو ثلاثة تناسب سمعك، وتجرّبها، وتتسلّم عرض سعر مفصّلًا. ولا توقيع في اليوم نفسه.',
          ],
        },
        {
          h2: 'وماذا عن الاسترجاع؟',
          p: [
            'حسب تغطيتك، يمكن استرجاع جزء من الثمن. نوجّد عرض السعر والفاتورة بالشكل المطلوب. الإجراءات مفصّلة في صفحة [استرجاع ثمن الأجهزة السمعية بالمغرب](/ar/remboursement-appareils-auditifs-maroc/).',
          ],
        },
        {
          h2: 'شوف الأثمنة على أجهزة حقيقية',
          p: [
            'المراجع أعلاه تعطي فكرة عن الثمن؛ أمّا الجهاز فيُحكم عليه في اليد وفي الأذن. تفضّل إلى 106B زنقة الجنيد، حي الأميرات، بالمعاريف، بموعد أو بدون موعد: نعرض عليك فئات [Signia](/ar/appareils-auditifs-signia/) و[Phonak](/ar/appareils-auditifs-phonak/) والفرق بينها.',
          ],
        },
      ],
      faq: [
        {
          q: 'شحال الثمن ديال سماعة الودن فالمغرب؟',
          a: 'للجهاز الواحد: ابتداءً من 5 000 درهم في الفئة الأساسية، ومن 7 000 إلى 12 000 درهم في فئة الراحة، وابتداءً من 14 000 درهم في بريميوم. الثمن يتبع المستوى التقني، لا حجم الجهاز ولا العلامة.',
        },
        {
          q: 'لماذا لا يُعرض الثمن طرازًا بطراز؟',
          a: 'لأن الطراز يُختار بعد الفحص، حسب سمعك واستعمالاتك. المراجع حسب الفئة تحدّد الميزانية قبل القدوم، وعرض السعر في المركز يعطي الثمن الدقيق.',
        },
        {
          q: 'هل الجهاز الخفي أغلى؟',
          a: 'لا. في الفئة نفسها، الجهاز داخل الأذن والجهاز خلف الأذن لهما الثمن نفسه. الشكل يتوقّف على سمعك وخفّة يديك.',
        },
        {
          q: 'هل الضبط يُحتسب زيادة؟',
          a: 'الملاءمة والضبط جزء من التجهيز. والتنظيف والإصلاح يتمّان في عين المكان بالمركز.',
        },
        {
          q: 'واش كاينة تجربة قبل الشراء؟',
          a: 'إيه. يُضبط الجهاز على مخطّط سمعك ويُجرّب قبل أيّ قرار. ولا توقيع في يوم الفحص.',
        },
        {
          q: 'شحال كيعيش الجهاز السمعي؟',
          a: 'ما بين أربع وستّ سنوات في المتوسط، وأكثر مع صيانة منتظمة: التنظيف وتبديل المرشّحات والقوالب.',
        },
      ],
      related: [
        { slug: 'appareils-auditifs-casablanca', label: 'الأجهزة السمعية' },
        { slug: 'remboursement-appareils-auditifs-maroc', label: 'الاسترجاع' },
        { slug: 'bilan-auditif-casablanca', label: 'فحص السمع' },
      ],
    },
    en: {
      kicker: 'Budget',
      title: 'Hearing Aid Prices in Morocco: The Benchmarks · AudioLik',
      description:
        'How much does a hearing aid cost in Morocco? The per-device benchmarks at AudioLik in Casablanca: Essential from MAD 5,000, Comfort MAD 7,000 to 12,000, Premium from MAD 14,000. Detailed quote and trial.',
      h1: 'Hearing aid prices in Morocco',
      lede:
        'It is the first question asked on the phone, and it deserves a figure. Here are the benchmarks at AudioLik, what explains the gap between two devices, and what the price covers.',
      sections: [
        {
          h2: 'The benchmarks, per device',
          p: [
            'In Morocco, a hearing aid costs between MAD 5,000 and over MAD 14,000. At AudioLik the benchmarks are the same for every brand, per device:',
          ],
          list: [
            '*Essential*, from MAD 5,000: quiet life, one-to-one conversation, television',
            '*Comfort*, MAD 7,000 to 12,000: active life, family meals, meetings, street, phone calls',
            '*Premium*, from MAD 14,000: very noisy settings, cafés, car, demanding listening',
          ],
        },
        {
          h2: 'Why one device costs 5,000 and another 14,000',
          p: [
            'What changes from one range to the next is neither the brand nor the size, but what the electronics can do when several people speak at once:',
          ],
          list: [
            '*The number of adjustment channels*: a few frequency bands at entry level, several dozen at the top, so the fitting follows your audiogram more closely',
            '*Noise reduction and directionality*: this is what separates a voice from the hubbub, and the one criterion that genuinely justifies moving up a range',
            '*Comfort options*: [rechargeable battery and Bluetooth](/en/appareils-auditifs-rechargeables-bluetooth/), adjustment from your phone, automatic programmes',
          ],
        },
        {
          h2: 'Shape does not set the price',
          p: [
            'Within the same range, an [in-the-ear device](/en/appareils-auditifs-intra-auriculaires/) and a [behind-the-ear device](/en/appareils-auditifs-contour-oreille/) cost the same. Shape is chosen for your hearing, the shape of your ear canal and your dexterity, not your budget.',
          ],
        },
        {
          h2: 'One ear or both',
          p: [
            'When both ears are affected, fitting both is usually recommended: the brain needs two ears to locate sound and pull a voice out of background noise. The budget doubles, and that is exactly what we set out with you on the quote. Starting with one ear remains possible.',
          ],
        },
        {
          h2: 'What is included, and what is extra',
          p: [
            "The price of a device covers its fitting and adjustments. At the centre, cleaning and repairs are handled on site, including for devices that were not bought from us.",
            'Extra, depending on the model: batteries for non-rechargeable devices, and replacement ear tips as they yellow or harden. See [servicing and repairs](/en/entretien-et-reparation-appareils-auditifs/).',
          ],
        },
        {
          h2: 'From quote to decision',
          p: [
            'The exact model is chosen with you after the [hearing assessment](/en/bilan-auditif-casablanca/). We compare two or three devices suited to your hearing, you try them, and you receive a detailed quote. Nothing is signed on the day.',
          ],
        },
        {
          h2: 'What about reimbursement?',
          p: [
            'Depending on your cover, part of the cost may be reimbursed. We prepare the quote and invoice in the required format. The steps are set out on the [hearing aid reimbursement in Morocco](/en/remboursement-appareils-auditifs-maroc/) page.',
          ],
        },
        {
          h2: 'See the prices on real devices',
          p: [
            'The benchmarks above give you an order of magnitude; a hearing aid is judged in the hand and in the ear. Come to 106B rue Al Jounaid, Les Princesses, Maârif, with or without an appointment: we show you the [Signia](/en/appareils-auditifs-signia/) and [Phonak](/en/appareils-auditifs-phonak/) ranges and what changes between them.',
          ],
        },
      ],
      faq: [
        {
          q: 'How much does a hearing aid cost in Morocco?',
          a: 'Per device: from MAD 5,000 in the Essential range, MAD 7,000 to 12,000 in Comfort, from MAD 14,000 in Premium. The price follows the technology level, not the size of the device or the brand.',
        },
        {
          q: 'Why are prices not listed model by model?',
          a: 'Because the model is chosen after the assessment, based on your hearing and how you live. The per-range benchmarks place the budget before you come in, and the quote given at the centre states the exact price.',
        },
        {
          q: 'Are invisible hearing aids more expensive?',
          a: 'No. Within the same range, in-the-ear and behind-the-ear devices cost the same. Shape depends on your hearing and your dexterity.',
        },
        {
          q: 'Are adjustments charged separately?',
          a: 'Fitting and adjustments are part of the fitting itself. Cleaning and repairs are handled on site at the centre.',
        },
        {
          q: 'Can I try a device before buying?',
          a: 'Yes. The device is programmed to your audiogram and tried before any decision. Nothing is signed on the day of the assessment.',
        },
        {
          q: 'How long does a hearing aid last?',
          a: 'Four to six years on average, longer with regular servicing: cleaning and replacement of filters and ear tips.',
        },
      ],
      related: [
        { slug: 'appareils-auditifs-casablanca', label: 'Hearing aids' },
        { slug: 'remboursement-appareils-auditifs-maroc', label: 'Reimbursement' },
        { slug: 'bilan-auditif-casablanca', label: 'Hearing assessment' },
      ],
    },
  },
];
