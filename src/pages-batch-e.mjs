/* Lot E — pages 13 à 17 (09/2026), issues de l'étude de mots-clés.
 *
 *   13 · appareils-auditifs-signia          « signia / siemens appareil auditif prix maroc »
 *   14 · appareils-auditifs-phonak          « appareil auditif phonak (rechargeable) prix maroc »
 *   15 · acouphenes                         « acouphène traitement », « طنين الأذن »
 *   16 · orl-ou-audioprothesiste            « orl casablanca maarif »
 *   17 · perte-auditive-personnes-agees     « ضعف السمع عند كبار السن »
 *
 * Mêmes règles que src/pages.mjs : prix = uniquement les tarifs indicatifs par
 * appareil de la carte tarifaire ; aucun montant de remboursement ; aucune
 * promesse non confirmée (seul le bilan auditif gratuit l'est) ; aucun modèle
 * précis promis en stock ; pas d'appareillage enfants.
 */
export default [
  /* ======================================================================
     13 · Signia
     ====================================================================== */
  {
    slug: 'appareils-auditifs-signia',
    fr: {
      kicker: 'Les marques',
      title: 'Appareils auditifs Signia à Casablanca : gammes et prix · AudioLik',
      description:
        "Appareils auditifs Signia (ex-Siemens) à Casablanca : formes, rechargeable, Bluetooth et prix indicatifs au Maroc, de 5 000 DH à Premium dès 14 000 DH par appareil. Bilan auditif gratuit chez AudioLik.",
      h1: 'Appareils auditifs Signia à Casablanca',
      lede:
        "Signia fait partie des marques avec lesquelles AudioLik appareille. Voici ce qu'il faut savoir sur la marque, ses formes d'appareils et les prix pratiqués au centre, aux Princesses.",
      sections: [
        {
          h2: 'Signia, l’héritière de Siemens',
          p: [
            "Beaucoup de patients cherchent encore « appareil auditif Siemens ». Les appareils auditifs Siemens n'ont pas disparu : l'activité audiologie de Siemens est devenue *Signia*, qui fait aujourd'hui partie du groupe WS Audiology. Si vous portiez un Siemens, Signia est sa suite logique.",
          ],
        },
        {
          h2: 'Les formes d’appareils Signia',
          p: [
            "Comme les autres grands fabricants, Signia propose toutes les formes courantes. Le bon choix dépend de votre audition, de la forme de votre conduit et de ce que vous attendez de l'appareil :",
          ],
          list: [
            "[Écouteur déporté et contour d'oreille](/appareils-auditifs-contour-oreille/) : la forme la plus répandue, discrète de face",
            "[Intra-auriculaires sur mesure](/appareils-auditifs-intra-auriculaires/) : logés dans le conduit, après prise d'empreinte",
            "[Rechargeables et Bluetooth](/appareils-auditifs-rechargeables-bluetooth/) selon le modèle : plus de piles, appels et télévision dans les appareils",
          ],
        },
        {
          h2: 'Prix d’un appareil auditif Signia au Maroc',
          p: [
            "Le prix dépend du niveau technologique plus que de la marque. Chez AudioLik, les repères sont les mêmes pour toutes les marques, par appareil : gamme *Essentiel* à partir de 5 000 DH, *Confort* de 7 000 à 12 000 DH, *Premium* à partir de 14 000 DH. Le détail est sur la [carte tarifaire](/appareils-auditifs-casablanca/#prix).",
            "Le modèle précis est choisi avec vous après le bilan. Vous recevez un devis détaillé, et rien n'est signé le jour même.",
          ],
        },
        {
          h2: 'Essayer un Signia à Casablanca',
          p: [
            "Tout commence par un [bilan auditif gratuit](/bilan-auditif-casablanca/), sur rendez-vous, au 106B rue Al Jounaid, quartier Les Princesses, à Maârif. Si un appareil peut vous aider, nous comparons avec vous deux ou trois modèles, Signia ou d'une autre marque, selon ce qui convient le mieux à votre audition.",
          ],
        },
      ],
      faq: [
        {
          q: 'Siemens et Signia, est-ce la même marque ?',
          a: "Signia a pris la suite des appareils auditifs Siemens. Les réglages et le suivi d'un ancien Siemens se discutent au centre, au cas par cas selon l'âge de l'appareil.",
        },
        {
          q: 'Un Signia est-il plus cher qu’une autre marque ?',
          a: "À niveau technologique égal, les écarts entre grandes marques sont faibles. C'est la gamme (Essentiel, Confort, Premium) qui fait le prix, pas le logo.",
        },
        {
          q: 'Pouvez-vous régler un Signia acheté ailleurs ?',
          a: "Apportez-le au centre : nous regardons son état et ce qu'il est possible de faire. Le nettoyage et le dépannage se font sur place.",
        },
      ],
      related: [
        { slug: 'appareils-auditifs-phonak', label: 'Appareils Phonak' },
        { slug: 'appareils-auditifs-casablanca', label: 'Prix des appareils auditifs' },
        { slug: 'bilan-auditif-casablanca', label: 'Bilan auditif gratuit' },
      ],
    },
    ar: {
      kicker: 'العلامات',
      title: 'أجهزة Signia السمعية بالدار البيضاء: الفئات والأسعار · أوديوليك',
      description:
        'أجهزة Signia السمعية (سيمنس سابقًا) بالدار البيضاء: الأشكال، القابلة للشحن، البلوتوث والأسعار الإرشادية بالمغرب، من 5 000 درهم إلى بريميوم ابتداءً من 14 000 درهم للجهاز. فحص سمع مجاني لدى أوديوليك.',
      h1: 'أجهزة Signia السمعية بالدار البيضاء',
      lede:
        'Signia من العلامات التي نعتمدها في أوديوليك. إليك ما ينبغي معرفته عن العلامة وأشكال أجهزتها والأسعار المعمول بها في المركز، بحي الأميرات.',
      sections: [
        {
          h2: 'Signia، وريثة سيمنس',
          p: [
            'ما زال كثيرون يبحثون عن «جهاز سمع سيمنس». أجهزة سيمنس لم تختفِ: نشاط سيمنس في مجال السمع أصبح *Signia*، وهي اليوم جزء من مجموعة WS Audiology. إن كنت تستعمل جهاز سيمنس، فإن Signia هي امتداده الطبيعي.',
          ],
        },
        {
          h2: 'أشكال أجهزة Signia',
          p: ['مثل باقي الشركات الكبرى، تقدّم Signia كل الأشكال الشائعة. ويتوقّف الاختيار على سمعك وشكل قناة أذنك وما تنتظره من الجهاز:'],
          list: [
            '[بسمّاعة داخل القناة وخلف الأذن](/ar/appareils-auditifs-contour-oreille/): الشكل الأكثر انتشارًا، لا يُرى من الأمام',
            '[داخل الأذن على المقاس](/ar/appareils-auditifs-intra-auriculaires/): داخل القناة، بعد أخذ البصمة',
            '[قابلة للشحن ومتّصلة بالبلوتوث](/ar/appareils-auditifs-rechargeables-bluetooth/) حسب الطراز: لا بطاريات، والمكالمات والتلفاز داخل الجهاز',
          ],
        },
        {
          h2: 'سعر جهاز Signia السمعي بالمغرب',
          p: [
            'يتوقّف السعر على المستوى التقني أكثر من العلامة. في أوديوليك، المراجع نفسها لكل العلامات، للجهاز الواحد: الفئة *الأساسية* ابتداءً من 5 000 درهم، وفئة *الراحة* من 7 000 إلى 12 000 درهم، وفئة *بريميوم* ابتداءً من 14 000 درهم. التفاصيل في [جدول الأسعار](/ar/appareils-auditifs-casablanca/#prix).',
            'يُختار الطراز الدقيق معك بعد الفحص. تتسلّم عرض سعر مفصّلًا، ولا توقيع في اليوم نفسه.',
          ],
        },
        {
          h2: 'تجربة جهاز Signia بالدار البيضاء',
          p: [
            'كل شيء يبدأ بـ[فحص سمع مجاني](/ar/bilan-auditif-casablanca/)، بموعد مسبق، في 106B زنقة الجنيد، حي الأميرات، بالمعاريف. وإذا كان الجهاز مفيدًا، نقارن معك بين جهازين أو ثلاثة، من Signia أو من علامة أخرى، حسب ما يناسب سمعك.',
          ],
        },
      ],
      faq: [
        {
          q: 'هل سيمنس وSignia علامة واحدة؟',
          a: 'Signia أخذت مكان أجهزة سيمنس السمعية. أمّا ضبط ومتابعة جهاز سيمنس قديم فيُناقش في المركز حسب عمر الجهاز.',
        },
        {
          q: 'هل Signia أغلى من علامة أخرى؟',
          a: 'عند المستوى التقني نفسه، الفروق بين العلامات الكبرى ضئيلة. الفئة (الأساسية، الراحة، بريميوم) هي التي تحدّد السعر، لا الشعار.',
        },
        {
          q: 'هل تضبطون جهاز Signia اشتريته من مكان آخر؟',
          a: 'أحضره إلى المركز: ننظر في حالته وفيما يمكن فعله. التنظيف والإصلاح يتمّان في عين المكان.',
        },
      ],
      related: [
        { slug: 'appareils-auditifs-phonak', label: 'أجهزة Phonak' },
        { slug: 'appareils-auditifs-casablanca', label: 'أسعار الأجهزة السمعية' },
        { slug: 'bilan-auditif-casablanca', label: 'فحص سمع مجاني' },
      ],
    },
    en: {
      kicker: 'Brands',
      title: 'Signia Hearing Aids in Casablanca: Ranges and Prices · AudioLik',
      description:
        'Signia (formerly Siemens) hearing aids in Casablanca: styles, rechargeable, Bluetooth and guide prices in Morocco, from MAD 5,000 to Premium from MAD 14,000 per device. Free hearing assessment at AudioLik.',
      h1: 'Signia hearing aids in Casablanca',
      lede:
        'Signia is one of the brands AudioLik fits. Here is what to know about the brand, its device styles and the prices at the centre in Les Princesses.',
      sections: [
        {
          h2: 'Signia, the successor to Siemens',
          p: [
            'Many people still search for "Siemens hearing aid". Siemens hearing aids did not vanish: the Siemens audiology business became *Signia*, now part of the WS Audiology group. If you wore a Siemens, Signia is its natural successor.',
          ],
        },
        {
          h2: 'Signia device styles',
          p: ['Like the other major manufacturers, Signia offers all the usual styles. The right one depends on your hearing, the shape of your ear canal and what you expect from the device:'],
          list: [
            '[Receiver-in-canal and behind-the-ear](/en/appareils-auditifs-contour-oreille/): the most common style, invisible from the front',
            '[Custom in-the-ear](/en/appareils-auditifs-intra-auriculaires/): fitted in the canal, after an ear impression',
            '[Rechargeable and Bluetooth](/en/appareils-auditifs-rechargeables-bluetooth/) depending on the model: no batteries, calls and TV straight to the devices',
          ],
        },
        {
          h2: 'Signia hearing aid prices in Morocco',
          p: [
            'The price depends on the technology level more than the brand. At AudioLik the guide prices are the same for every brand, per device: *Essential* from MAD 5,000, *Comfort* MAD 7,000 to 12,000, *Premium* from MAD 14,000. Details are on the [price list](/en/appareils-auditifs-casablanca/#prix).',
            'The exact model is chosen with you after the assessment. You receive a detailed quote, and nothing is signed on the day.',
          ],
        },
        {
          h2: 'Trying a Signia in Casablanca',
          p: [
            'It all starts with a [free hearing assessment](/en/bilan-auditif-casablanca/), by appointment, at 106B rue Al Jounaid, Les Princesses, Maârif. If a device can help, we compare two or three models with you, Signia or another brand, whichever suits your hearing best.',
          ],
        },
      ],
      faq: [
        {
          q: 'Are Siemens and Signia the same brand?',
          a: 'Signia took over from Siemens hearing aids. Adjusting and servicing an older Siemens is discussed at the centre, case by case depending on the age of the device.',
        },
        {
          q: 'Is Signia more expensive than other brands?',
          a: 'At the same technology level, differences between the major brands are small. The range (Essential, Comfort, Premium) sets the price, not the logo.',
        },
        {
          q: 'Can you adjust a Signia bought elsewhere?',
          a: 'Bring it to the centre: we check its condition and what can be done. Cleaning and repairs are handled on site.',
        },
      ],
      related: [
        { slug: 'appareils-auditifs-phonak', label: 'Phonak hearing aids' },
        { slug: 'appareils-auditifs-casablanca', label: 'Hearing aid prices' },
        { slug: 'bilan-auditif-casablanca', label: 'Free hearing assessment' },
      ],
    },
  },

  /* ======================================================================
     14 · Phonak
     ====================================================================== */
  {
    slug: 'appareils-auditifs-phonak',
    fr: {
      kicker: 'Les marques',
      title: 'Appareils auditifs Phonak à Casablanca : rechargeables, prix · AudioLik',
      description:
        "Appareils auditifs Phonak à Casablanca : rechargeables, Bluetooth, discrets. Prix indicatifs au Maroc de 5 000 DH à Premium dès 14 000 DH par appareil. Bilan auditif gratuit chez AudioLik, Les Princesses.",
      h1: 'Appareils auditifs Phonak à Casablanca',
      lede:
        "Phonak fait partie des marques avec lesquelles AudioLik appareille. Ce qu'il faut savoir sur la marque, ses appareils rechargeables et les prix pratiqués au centre.",
      sections: [
        {
          h2: 'Phonak, une marque suisse',
          p: [
            "Phonak est un fabricant suisse d'aides auditives, qui appartient au groupe Sonova. La marque est connue pour ses appareils à écouteur déporté, ses modèles rechargeables et sa connexion Bluetooth avec les téléphones.",
          ],
        },
        {
          h2: 'Les appareils Phonak rechargeables',
          p: [
            "Une nuit sur le chargeur, et l'appareil tient la journée : c'est la raison pour laquelle beaucoup de patients demandent un Phonak rechargeable. Selon le modèle, les appels et le son de la télévision arrivent directement dans les appareils. Notre page sur les [appareils rechargeables et Bluetooth](/appareils-auditifs-rechargeables-bluetooth/) explique ce que cela change au quotidien.",
          ],
        },
        {
          h2: 'Prix d’un appareil auditif Phonak au Maroc',
          p: [
            "Chez AudioLik, le prix suit le niveau technologique, quelle que soit la marque, par appareil : *Essentiel* à partir de 5 000 DH, *Confort* de 7 000 à 12 000 DH, *Premium* à partir de 14 000 DH. Les modèles rechargeables se trouvent à partir de la gamme Confort, selon le modèle. Le détail est sur la [carte tarifaire](/appareils-auditifs-casablanca/#prix).",
            "Le modèle précis est choisi après le bilan, avec un devis détaillé. Rien n'est signé le jour même.",
          ],
        },
        {
          h2: 'Essayer un Phonak à Casablanca',
          p: [
            "Prenez rendez-vous pour un [bilan auditif gratuit](/bilan-auditif-casablanca/) au 106B rue Al Jounaid, Les Princesses, Maârif. Nous vous présentons deux ou trois appareils adaptés à votre audition, Phonak ou d'une autre marque, et vous les essayez dans votre vie de tous les jours.",
          ],
        },
      ],
      faq: [
        {
          q: 'Combien coûte un Phonak rechargeable au Maroc ?',
          a: "Les appareils rechargeables se trouvent à partir de la gamme Confort (7 000 à 12 000 DH par appareil) et en Premium (à partir de 14 000 DH), selon le modèle. Le prix exact figure sur le devis remis après le bilan.",
        },
        {
          q: 'Phonak ou Signia : lequel choisir ?',
          a: "Les deux sont des marques reconnues. Le bon choix dépend de votre audition, de la forme souhaitée et de vos usages, pas de la marque. Nous comparons avec vous après le bilan. Voir aussi les [appareils Signia](/appareils-auditifs-signia/).",
        },
        {
          q: 'Un Phonak se connecte-t-il à mon téléphone ?',
          a: 'Selon le modèle, oui : appels et musique en Bluetooth. Nous vérifions avec vous la compatibilité avec votre téléphone.',
        },
      ],
      related: [
        { slug: 'appareils-auditifs-signia', label: 'Appareils Signia' },
        { slug: 'appareils-auditifs-rechargeables-bluetooth', label: 'Rechargeables et Bluetooth' },
        { slug: 'appareils-auditifs-casablanca', label: 'Prix des appareils auditifs' },
      ],
    },
    ar: {
      kicker: 'العلامات',
      title: 'أجهزة Phonak السمعية بالدار البيضاء: القابلة للشحن والأسعار · أوديوليك',
      description:
        'أجهزة Phonak السمعية بالدار البيضاء: قابلة للشحن، بلوتوث، دقيقة. أسعار إرشادية بالمغرب من 5 000 درهم إلى بريميوم ابتداءً من 14 000 درهم للجهاز. فحص سمع مجاني لدى أوديوليك، حي الأميرات.',
      h1: 'أجهزة Phonak السمعية بالدار البيضاء',
      lede:
        'Phonak من العلامات التي نعتمدها في أوديوليك. ما ينبغي معرفته عن العلامة وأجهزتها القابلة للشحن والأسعار المعمول بها في المركز.',
      sections: [
        {
          h2: 'Phonak، علامة سويسرية',
          p: [
            'Phonak شركة سويسرية لصناعة الأجهزة السمعية، تابعة لمجموعة Sonova. تُعرف بأجهزتها ذات السمّاعة داخل القناة، وطرازاتها القابلة للشحن، واتصالها بالهواتف عبر البلوتوث.',
          ],
        },
        {
          h2: 'أجهزة Phonak القابلة للشحن',
          p: [
            'ليلة على الشاحن، ويعمل الجهاز طوال اليوم: لهذا يطلب كثيرون جهاز Phonak قابلًا للشحن. وحسب الطراز، تصل المكالمات وصوت التلفاز مباشرة إلى الأجهزة. صفحتنا عن [الأجهزة القابلة للشحن والبلوتوث](/ar/appareils-auditifs-rechargeables-bluetooth/) تشرح ما يغيّره ذلك في الحياة اليومية.',
          ],
        },
        {
          h2: 'سعر جهاز Phonak السمعي بالمغرب',
          p: [
            'في أوديوليك، يتبع السعر المستوى التقني أيًّا كانت العلامة، للجهاز الواحد: *الأساسية* ابتداءً من 5 000 درهم، *الراحة* من 7 000 إلى 12 000 درهم، *بريميوم* ابتداءً من 14 000 درهم. الطرازات القابلة للشحن متوفّرة ابتداءً من فئة الراحة، حسب الطراز. التفاصيل في [جدول الأسعار](/ar/appareils-auditifs-casablanca/#prix).',
            'يُختار الطراز الدقيق بعد الفحص، مع عرض سعر مفصّل. ولا توقيع في اليوم نفسه.',
          ],
        },
        {
          h2: 'تجربة جهاز Phonak بالدار البيضاء',
          p: [
            'احجز موعدًا لـ[فحص سمع مجاني](/ar/bilan-auditif-casablanca/) في 106B زنقة الجنيد، حي الأميرات، بالمعاريف. نعرض عليك جهازين أو ثلاثة تناسب سمعك، من Phonak أو من علامة أخرى، وتجرّبها في حياتك اليومية.',
          ],
        },
      ],
      faq: [
        {
          q: 'كم يكلّف جهاز Phonak قابل للشحن بالمغرب؟',
          a: 'الأجهزة القابلة للشحن متوفّرة ابتداءً من فئة الراحة (7 000 إلى 12 000 درهم للجهاز) وفي فئة بريميوم (ابتداءً من 14 000 درهم)، حسب الطراز. السعر الدقيق يُذكر في عرض السعر بعد الفحص.',
        },
        {
          q: 'Phonak أم Signia: أيّهما أختار؟',
          a: 'كلاهما علامة معروفة. الاختيار الصحيح يتوقّف على سمعك والشكل الذي تفضّله واستعمالاتك، لا على العلامة. نقارن معك بعد الفحص. انظر أيضًا [أجهزة Signia](/ar/appareils-auditifs-signia/).',
        },
        {
          q: 'هل يتّصل جهاز Phonak بهاتفي؟',
          a: 'حسب الطراز، نعم: المكالمات والموسيقى عبر البلوتوث. نتحقّق معك من التوافق مع هاتفك.',
        },
      ],
      related: [
        { slug: 'appareils-auditifs-signia', label: 'أجهزة Signia' },
        { slug: 'appareils-auditifs-rechargeables-bluetooth', label: 'قابلة للشحن وبلوتوث' },
        { slug: 'appareils-auditifs-casablanca', label: 'أسعار الأجهزة السمعية' },
      ],
    },
    en: {
      kicker: 'Brands',
      title: 'Phonak Hearing Aids in Casablanca: Rechargeable, Prices · AudioLik',
      description:
        'Phonak hearing aids in Casablanca: rechargeable, Bluetooth, discreet. Guide prices in Morocco from MAD 5,000 to Premium from MAD 14,000 per device. Free hearing assessment at AudioLik, Les Princesses.',
      h1: 'Phonak hearing aids in Casablanca',
      lede:
        'Phonak is one of the brands AudioLik fits. What to know about the brand, its rechargeable devices and the prices at the centre.',
      sections: [
        {
          h2: 'Phonak, a Swiss brand',
          p: [
            'Phonak is a Swiss hearing aid manufacturer belonging to the Sonova group. The brand is known for its receiver-in-canal devices, its rechargeable models and Bluetooth connection to phones.',
          ],
        },
        {
          h2: 'Rechargeable Phonak hearing aids',
          p: [
            'One night on the charger and the device lasts the day: that is why many patients ask for a rechargeable Phonak. Depending on the model, calls and TV sound go straight to the devices. Our page on [rechargeable and Bluetooth hearing aids](/en/appareils-auditifs-rechargeables-bluetooth/) explains what that changes day to day.',
          ],
        },
        {
          h2: 'Phonak hearing aid prices in Morocco',
          p: [
            'At AudioLik the price follows the technology level, whatever the brand, per device: *Essential* from MAD 5,000, *Comfort* MAD 7,000 to 12,000, *Premium* from MAD 14,000. Rechargeable models start from the Comfort range, depending on the model. Details are on the [price list](/en/appareils-auditifs-casablanca/#prix).',
            'The exact model is chosen after the assessment, with a detailed quote. Nothing is signed on the day.',
          ],
        },
        {
          h2: 'Trying a Phonak in Casablanca',
          p: [
            'Book a [free hearing assessment](/en/bilan-auditif-casablanca/) at 106B rue Al Jounaid, Les Princesses, Maârif. We show you two or three devices suited to your hearing, Phonak or another brand, and you try them in your everyday life.',
          ],
        },
      ],
      faq: [
        {
          q: 'How much is a rechargeable Phonak in Morocco?',
          a: 'Rechargeable devices start from the Comfort range (MAD 7,000 to 12,000 per device) and are available in Premium (from MAD 14,000), depending on the model. The exact price is on the quote given after the assessment.',
        },
        {
          q: 'Phonak or Signia: which should I choose?',
          a: 'Both are recognised brands. The right choice depends on your hearing, the style you want and how you live, not on the brand. We compare with you after the assessment. See also [Signia hearing aids](/en/appareils-auditifs-signia/).',
        },
        {
          q: 'Does a Phonak connect to my phone?',
          a: 'Depending on the model, yes: calls and music over Bluetooth. We check compatibility with your phone together.',
        },
      ],
      related: [
        { slug: 'appareils-auditifs-signia', label: 'Signia hearing aids' },
        { slug: 'appareils-auditifs-rechargeables-bluetooth', label: 'Rechargeable and Bluetooth' },
        { slug: 'appareils-auditifs-casablanca', label: 'Hearing aid prices' },
      ],
    },
  },

  /* ======================================================================
     15 · Acouphènes
     ====================================================================== */
  {
    slug: 'acouphenes',
    fr: {
      kicker: 'Comprendre',
      title: 'Acouphènes : causes, traitement et quand consulter · AudioLik Casablanca',
      description:
        "Sifflement, bourdonnement dans l'oreille : ce que sont les acouphènes, leurs causes, les solutions qui aident et les signes qui imposent de consulter un ORL. AudioLik, Casablanca.",
      h1: 'Acouphènes : comprendre et agir',
      lede:
        "Un sifflement, un bourdonnement, un grésillement que personne d'autre n'entend. Les acouphènes sont fréquents, rarement graves, mais parfois très gênants. Voici ce qu'il faut savoir, et quand consulter.",
      sections: [
        {
          h2: 'Qu’est-ce qu’un acouphène ?',
          p: [
            "C'est un son perçu sans source extérieure : sifflement, bourdonnement, souffle, cliquetis. Il peut être permanent ou intermittent, dans une oreille, les deux, ou « dans la tête ». Il se remarque surtout au calme, le soir au coucher.",
          ],
        },
        {
          h2: 'Les causes les plus fréquentes',
          list: [
            "*Une perte auditive*, souvent liée à l'âge : c'est la cause la plus courante",
            "*L'exposition au bruit* : concert, atelier, casque trop fort",
            "*Un bouchon de cérumen* ou une otite",
            "*Certains médicaments*, le stress et la fatigue, qui peuvent les accentuer",
          ],
        },
        {
          h2: 'Quand consulter rapidement un ORL',
          p: [
            "Consultez un médecin ORL sans attendre si l'acouphène est apparu brutalement avec une baisse d'audition, s'il ne touche qu'une oreille, s'il bat au rythme du cœur (acouphène pulsatile), ou s'il s'accompagne de vertiges ou de douleurs. Une baisse d'audition brutale est une urgence : chaque jour compte. Notre page [ORL ou audioprothésiste](/orl-ou-audioprothesiste/) explique qui fait quoi.",
          ],
        },
        {
          h2: 'Traitement : ce qui aide vraiment',
          p: [
            "Il n'existe pas de médicament qui fasse disparaître tous les acouphènes. En revanche, plusieurs approches les rendent beaucoup moins envahissants :",
          ],
          list: [
            "*Corriger la perte auditive associée* : quand l'oreille reçoit à nouveau les sons ambiants, l'acouphène passe souvent au second plan",
            '*Enrichir le silence* : un fond sonore doux le soir aide le cerveau à moins s’y accrocher',
            '*Protéger ses oreilles du bruit* pour éviter qu’il ne s’aggrave',
            "*Un accompagnement* (thérapies cognitives et comportementales, gestion du stress) pour les acouphènes qui pèsent sur le moral",
          ],
        },
        {
          h2: 'Faire le point sur votre audition',
          p: [
            "Comme les acouphènes accompagnent souvent une perte auditive, un [bilan auditif gratuit](/bilan-auditif-casablanca/) est un bon point de départ. Il se fait sur rendez-vous, aux Princesses, à Maârif. Si le bilan révèle un signe qui relève du médecin, nous vous orientons vers un ORL.",
          ],
        },
      ],
      faq: [
        {
          q: 'Les acouphènes peuvent-ils disparaître ?',
          a: "Oui, ceux qui suivent un concert ou une otite disparaissent souvent en quelques jours. Les acouphènes installés depuis longtemps diminuent surtout quand on traite leur cause et qu'on apprend à ne plus y prêter attention.",
        },
        {
          q: 'Un appareil auditif peut-il aider contre les acouphènes ?',
          a: "Quand une perte auditive est associée, oui, chez beaucoup de personnes : l'appareil rend les sons ambiants qui masquent en partie l'acouphène. Seul le bilan dit si c'est votre cas.",
        },
        {
          q: 'Comment dit-on acouphène en arabe ?',
          a: 'On parle de « طنين الأذن » (tanin al-udhun), littéralement le bourdonnement de l’oreille.',
        },
      ],
      related: [
        { slug: 'perte-auditive', label: 'Comprendre la perte auditive' },
        { slug: 'orl-ou-audioprothesiste', label: 'ORL ou audioprothésiste ?' },
        { slug: 'protections-auditives-sur-mesure', label: 'Protéger son audition' },
      ],
    },
    ar: {
      kicker: 'للفهم',
      title: 'طنين الأذن: الأسباب والعلاج ومتى تستشير · أوديوليك الدار البيضاء',
      description:
        'صفير أو أزيز في الأذن: ما هو طنين الأذن، أسبابه، الحلول التي تساعد، والعلامات التي تستوجب استشارة طبيب الأنف والأذن والحنجرة. أوديوليك، الدار البيضاء.',
      h1: 'طنين الأذن: الفهم والتصرّف',
      lede:
        'صفير أو أزيز أو وشوشة لا يسمعها غيرك. طنين الأذن شائع، ونادرًا ما يكون خطيرًا، لكنه قد يكون مزعجًا جدًّا. إليك ما ينبغي معرفته، ومتى تستشير.',
      sections: [
        {
          h2: 'ما هو طنين الأذن؟',
          p: [
            'هو صوت يُسمع دون مصدر خارجي: صفير، أزيز، نفخ، طقطقة. قد يكون دائمًا أو متقطّعًا، في أذن واحدة أو في الاثنتين أو «داخل الرأس». ويُلاحظ خاصة في الهدوء، عند النوم.',
          ],
        },
        {
          h2: 'الأسباب الأكثر شيوعًا',
          list: [
            '*ضعف السمع*، المرتبط غالبًا بالسن: وهو السبب الأكثر انتشارًا',
            '*التعرّض للضجيج*: حفل، ورشة، سمّاعة بصوت مرتفع',
            '*سدادة شمعية* أو التهاب الأذن',
            '*بعض الأدوية*، والتوتّر والتعب، التي قد تزيد من حدّته',
          ],
        },
        {
          h2: 'متى تستشير طبيب الأنف والأذن والحنجرة بسرعة',
          p: [
            'استشر الطبيب دون تأخير إذا ظهر الطنين فجأة مع انخفاض في السمع، أو إذا كان في أذن واحدة، أو إذا كان ينبض مع دقات القلب، أو إذا رافقه دوار أو ألم. انخفاض السمع المفاجئ حالة مستعجلة: كل يوم له أهميته. صفحتنا [الطبيب أم أخصائي السمعيات](/ar/orl-ou-audioprothesiste/) تشرح دور كل واحد.',
          ],
        },
        {
          h2: 'العلاج: ما الذي يساعد فعلًا',
          p: ['لا يوجد دواء يُزيل كل أنواع الطنين. لكن عدّة طرق تجعله أقلّ إزعاجًا بكثير:'],
          list: [
            '*تصحيح ضعف السمع المصاحب*: حين تعود الأذن لالتقاط الأصوات المحيطة، يتراجع الطنين غالبًا إلى الخلف',
            '*إثراء الصمت*: خلفية صوتية هادئة في المساء تساعد الدماغ على عدم التعلّق به',
            '*حماية الأذنين من الضجيج* حتى لا يزداد',
            '*المرافقة* (العلاجات المعرفية السلوكية، تدبير التوتّر) حين يؤثّر الطنين على المعنويات',
          ],
        },
        {
          h2: 'تقييم سمعك',
          p: [
            'لأن الطنين يرافق غالبًا ضعف السمع، فإن [فحص السمع المجاني](/ar/bilan-auditif-casablanca/) نقطة انطلاق جيدة. يتمّ بموعد مسبق، بحي الأميرات، بالمعاريف. وإذا كشف الفحص علامة من اختصاص الطبيب، نوجّهك إلى طبيب الأنف والأذن والحنجرة.',
          ],
        },
      ],
      faq: [
        {
          q: 'هل يمكن أن يختفي طنين الأذن؟',
          a: 'نعم، الطنين الذي يلي حفلًا أو التهابًا يختفي غالبًا خلال أيام. أمّا الطنين القديم فيتراجع خاصة عند علاج سببه وتعلّم عدم الانتباه إليه.',
        },
        {
          q: 'هل يساعد الجهاز السمعي على تخفيف الطنين؟',
          a: 'حين يكون هناك ضعف سمع مصاحب، نعم، عند كثير من الناس: الجهاز يعيد الأصوات المحيطة التي تغطّي الطنين جزئيًّا. والفحص وحده يحدّد إن كانت هذه حالتك.',
        },
        {
          q: 'ما اسم طنين الأذن بالفرنسية؟',
          a: 'يُسمّى « acouphène ».',
        },
      ],
      related: [
        { slug: 'perte-auditive', label: 'فهم ضعف السمع' },
        { slug: 'orl-ou-audioprothesiste', label: 'الطبيب أم أخصائي السمعيات؟' },
        { slug: 'protections-auditives-sur-mesure', label: 'حماية السمع' },
      ],
    },
    en: {
      kicker: 'Understanding',
      title: 'Tinnitus: Causes, Treatment and When to See a Doctor · AudioLik',
      description:
        'Ringing or buzzing in the ear: what tinnitus is, its causes, what helps and the signs that call for an ENT doctor. AudioLik, Casablanca.',
      h1: 'Tinnitus: understand and act',
      lede:
        'A ringing, buzzing or hissing nobody else hears. Tinnitus is common, rarely serious, but sometimes very bothersome. Here is what to know, and when to see a doctor.',
      sections: [
        {
          h2: 'What is tinnitus?',
          p: [
            'It is a sound perceived with no outside source: ringing, buzzing, hissing, clicking. It can be constant or come and go, in one ear, both, or "in the head". It is most noticeable in quiet, at bedtime.',
          ],
        },
        {
          h2: 'The most common causes',
          list: [
            '*Hearing loss*, often age-related: the most common cause',
            '*Noise exposure*: concerts, workshops, headphones too loud',
            '*Earwax* or an ear infection',
            '*Some medicines*, stress and fatigue, which can make it worse',
          ],
        },
        {
          h2: 'When to see an ENT doctor quickly',
          p: [
            'See an ENT doctor without delay if the tinnitus appeared suddenly with a drop in hearing, if it affects one ear only, if it beats in time with your heart (pulsatile tinnitus), or if it comes with dizziness or pain. Sudden hearing loss is an emergency: every day counts. Our page [ENT or hearing aid specialist](/en/orl-ou-audioprothesiste/) explains who does what.',
          ],
        },
        {
          h2: 'Treatment: what really helps',
          p: ['No medicine makes all tinnitus disappear. However, several approaches make it far less intrusive:'],
          list: [
            '*Correcting the associated hearing loss*: when the ear picks up ambient sound again, tinnitus often fades into the background',
            '*Filling the silence*: soft background sound in the evening helps the brain stop latching on to it',
            '*Protecting your ears from noise* so it does not get worse',
            '*Support* (cognitive behavioural therapy, stress management) when tinnitus weighs on your mood',
          ],
        },
        {
          h2: 'Checking your hearing',
          p: [
            'Because tinnitus often comes with hearing loss, a [free hearing assessment](/en/bilan-auditif-casablanca/) is a good starting point. It is by appointment, in Les Princesses, Maârif. If the assessment shows a sign that needs a doctor, we refer you to an ENT.',
          ],
        },
      ],
      faq: [
        {
          q: 'Can tinnitus go away?',
          a: 'Yes, tinnitus after a concert or an ear infection often fades within days. Long-standing tinnitus mainly eases when its cause is treated and you learn to stop paying attention to it.',
        },
        {
          q: 'Can a hearing aid help with tinnitus?',
          a: 'When there is associated hearing loss, yes, for many people: the device restores ambient sounds that partly mask the tinnitus. Only the assessment can tell if that applies to you.',
        },
        {
          q: 'What is tinnitus called in French and Arabic?',
          a: '« Acouphène » in French and « طنين الأذن » in Arabic.',
        },
      ],
      related: [
        { slug: 'perte-auditive', label: 'Understanding hearing loss' },
        { slug: 'orl-ou-audioprothesiste', label: 'ENT or hearing aid specialist?' },
        { slug: 'protections-auditives-sur-mesure', label: 'Protecting your hearing' },
      ],
    },
  },

  /* ======================================================================
     16 · ORL ou audioprothésiste
     ====================================================================== */
  {
    slug: 'orl-ou-audioprothesiste',
    fr: {
      kicker: 'S’orienter',
      title: 'ORL ou audioprothésiste à Maârif, Casablanca : qui consulter ? · AudioLik',
      description:
        "ORL ou audioprothésiste : qui voir en premier quand on entend moins bien ? Rôle de chacun, situations d'urgence, et bilan auditif gratuit à Maârif, Casablanca, chez AudioLik.",
      h1: 'ORL ou audioprothésiste : qui consulter en premier ?',
      lede:
        "Vous entendez moins bien et vous hésitez entre prendre rendez-vous chez un ORL ou chez un audioprothésiste. Les deux métiers sont complémentaires. Voici comment choisir, selon votre situation.",
      sections: [
        {
          h2: 'Le médecin ORL : diagnostiquer et soigner',
          p: [
            "L'ORL (oto-rhino-laryngologiste) est un médecin. Il examine l'oreille, pose un diagnostic, traite les infections, retire un bouchon, prescrit des examens ou un traitement, et opère si nécessaire.",
          ],
        },
        {
          h2: 'L’audioprothésiste : mesurer, appareiller, suivre',
          p: [
            "L'[audioprothésiste](/audioprothesiste-casablanca/) mesure votre audition, choisit avec vous un appareil si c'est utile, l'adapte, le règle et en assure le suivi dans la durée. Il ne soigne pas les maladies de l'oreille : en cas de doute, il vous oriente vers l'ORL.",
          ],
        },
        {
          h2: 'Qui voir en premier ?',
          list: [
            "*Voyez d'abord l'ORL* en cas de douleur, d'écoulement, d'otite, de vertiges, d'acouphène d'un seul côté, ou de baisse d'audition brutale — cette dernière est une urgence",
            "*Commencez par un bilan auditif* si la gêne s'est installée doucement : télévision trop forte, conversations difficiles au restaurant, proches qui répètent",
            "*Les deux ensemble* : c'est souvent le parcours le plus simple, l'un soigne, l'autre appareille",
          ],
        },
        {
          h2: 'À Maârif, aux Princesses',
          p: [
            "AudioLik est installé au 106B rue Al Jounaid, quartier Les Princesses, à Maârif. Le [bilan auditif](/bilan-auditif-casablanca/) y est gratuit, sur rendez-vous, et vous repartez avec vos résultats expliqués. Si nous observons un signe qui relève du médecin, nous vous le disons et vous orientons vers un ORL.",
          ],
        },
      ],
      faq: [
        {
          q: 'Faut-il une ordonnance pour faire un bilan auditif ?',
          a: "Non, le bilan auditif au centre ne nécessite pas d'ordonnance. En revanche, votre dossier de [remboursement](/remboursement-appareils-auditifs-maroc/) peut demander une prescription médicale : renseignez-vous auprès de votre organisme.",
        },
        {
          q: 'Pourquoi l’ORL me demande-t-il un audiogramme ?',
          a: "L'audiogramme mesure précisément votre audition, oreille par oreille. C'est une base commune pour le médecin et pour l'audioprothésiste.",
        },
      ],
      related: [
        { slug: 'audioprothesiste-casablanca', label: 'Audioprothésiste à Casablanca' },
        { slug: 'bilan-auditif-casablanca', label: 'Bilan auditif gratuit' },
        { slug: 'acouphenes', label: 'Acouphènes' },
      ],
    },
    ar: {
      kicker: 'التوجيه',
      title: 'طبيب الأنف والأذن والحنجرة أم أخصائي السمعيات بالمعاريف؟ · أوديوليك',
      description:
        'طبيب الأنف والأذن والحنجرة أم أخصائي السمعيات: من تستشير أولًا حين يضعف سمعك؟ دور كل واحد، الحالات المستعجلة، وفحص سمع مجاني بالمعاريف، الدار البيضاء، لدى أوديوليك.',
      h1: 'طبيب الأنف والأذن والحنجرة أم أخصائي السمعيات: من تستشير أولًا؟',
      lede:
        'سمعك ضعف وتتردّد بين حجز موعد عند طبيب الأنف والأذن والحنجرة أو عند أخصائي السمعيات. المهنتان متكاملتان. إليك كيف تختار حسب حالتك.',
      sections: [
        {
          h2: 'الطبيب: التشخيص والعلاج',
          p: [
            'طبيب الأنف والأذن والحنجرة يفحص الأذن، ويشخّص، ويعالج الالتهابات، ويزيل السدادة الشمعية، ويطلب الفحوص أو يصف العلاج، ويُجري العمليات عند الحاجة.',
          ],
        },
        {
          h2: 'أخصائي السمعيات: القياس والتجهيز والمتابعة',
          p: [
            '[أخصائي السمعيات](/ar/audioprothesiste-casablanca/) يقيس سمعك، ويختار معك جهازًا إن كان مفيدًا، ويلائمه ويضبطه ويتابعه على المدى الطويل. لا يعالج أمراض الأذن: وعند الشك يوجّهك إلى الطبيب.',
          ],
        },
        {
          h2: 'من تستشير أولًا؟',
          list: [
            '*الطبيب أولًا* في حالة الألم، أو السيلان، أو التهاب الأذن، أو الدوار، أو طنين في أذن واحدة، أو انخفاض مفاجئ في السمع — وهذا الأخير حالة مستعجلة',
            '*ابدأ بفحص السمع* إذا جاءت الصعوبة تدريجيًّا: تلفاز بصوت مرتفع، محادثات صعبة في المطعم، أقارب يكرّرون الكلام',
            '*الاثنان معًا*: غالبًا هو المسار الأبسط، أحدهما يعالج والآخر يجهّز',
          ],
        },
        {
          h2: 'بالمعاريف، حي الأميرات',
          p: [
            'يوجد أوديوليك في 106B زنقة الجنيد، حي الأميرات، بالمعاريف. [فحص السمع](/ar/bilan-auditif-casablanca/) مجاني، بموعد مسبق، وتغادر ونتائجك مشروحة. وإذا لاحظنا علامة من اختصاص الطبيب، نخبرك ونوجّهك إليه.',
          ],
        },
      ],
      faq: [
        {
          q: 'هل يلزم وصفة طبية لفحص السمع؟',
          a: 'لا، فحص السمع في المركز لا يحتاج إلى وصفة. لكن ملف [الاسترجاع](/ar/remboursement-appareils-auditifs-maroc/) قد يتطلّب وصفة طبية: استفسر لدى صندوقك.',
        },
        {
          q: 'لماذا يطلب الطبيب مخطّط السمع؟',
          a: 'مخطّط السمع يقيس سمعك بدقّة، أذنًا بأذن. وهو مرجع مشترك بين الطبيب وأخصائي السمعيات.',
        },
      ],
      related: [
        { slug: 'audioprothesiste-casablanca', label: 'أخصائي السمعيات بالدار البيضاء' },
        { slug: 'bilan-auditif-casablanca', label: 'فحص سمع مجاني' },
        { slug: 'acouphenes', label: 'طنين الأذن' },
      ],
    },
    en: {
      kicker: 'Finding your way',
      title: 'ENT or Hearing Aid Specialist in Maârif, Casablanca? · AudioLik',
      description:
        'ENT doctor or hearing aid specialist: who to see first when your hearing drops? Each role, emergencies, and a free hearing assessment in Maârif, Casablanca, at AudioLik.',
      h1: 'ENT or hearing aid specialist: who to see first?',
      lede:
        'Your hearing has dropped and you are unsure whether to book an ENT doctor or a hearing aid specialist. The two professions work hand in hand. Here is how to choose, depending on your situation.',
      sections: [
        {
          h2: 'The ENT doctor: diagnose and treat',
          p: [
            'An ENT (ear, nose and throat) specialist is a doctor. They examine the ear, make a diagnosis, treat infections, remove earwax, order tests or prescribe treatment, and operate if needed.',
          ],
        },
        {
          h2: 'The hearing aid specialist: measure, fit, follow up',
          p: [
            'A [hearing aid specialist](/en/audioprothesiste-casablanca/) measures your hearing, chooses a device with you if it helps, fits it, adjusts it and follows up over time. They do not treat ear diseases: when in doubt, they refer you to an ENT.',
          ],
        },
        {
          h2: 'Who to see first?',
          list: [
            '*See the ENT first* for pain, discharge, ear infection, dizziness, tinnitus in one ear, or sudden hearing loss — the latter is an emergency',
            '*Start with a hearing assessment* if the difficulty came on gradually: TV too loud, hard conversations in restaurants, relatives repeating themselves',
            '*Both together*: often the simplest path, one treats, the other fits',
          ],
        },
        {
          h2: 'In Maârif, Les Princesses',
          p: [
            'AudioLik is at 106B rue Al Jounaid, Les Princesses, Maârif. The [hearing assessment](/en/bilan-auditif-casablanca/) is free, by appointment, and you leave with your results explained. If we notice a sign that needs a doctor, we tell you and refer you to an ENT.',
          ],
        },
      ],
      faq: [
        {
          q: 'Do I need a prescription for a hearing assessment?',
          a: 'No, the hearing assessment at the centre does not need a prescription. Your [reimbursement](/en/remboursement-appareils-auditifs-maroc/) file may require a medical prescription, though: check with your scheme.',
        },
        {
          q: 'Why does the ENT ask for an audiogram?',
          a: 'An audiogram measures your hearing precisely, ear by ear. It is a common reference for the doctor and the hearing aid specialist.',
        },
      ],
      related: [
        { slug: 'audioprothesiste-casablanca', label: 'Hearing aid specialist in Casablanca' },
        { slug: 'bilan-auditif-casablanca', label: 'Free hearing assessment' },
        { slug: 'acouphenes', label: 'Tinnitus' },
      ],
    },
  },

  /* ======================================================================
     17 · Perte auditive des personnes âgées
     ====================================================================== */
  {
    slug: 'perte-auditive-personnes-agees',
    fr: {
      kicker: 'Pour vos parents',
      title: 'Perte auditive des personnes âgées : signes et comment aider · AudioLik',
      description:
        "Presbyacousie : les signes qu'un parent entend moins bien, comment lui en parler, et comment se passe un bilan auditif gratuit à Casablanca. AudioLik, Les Princesses.",
      h1: 'Perte auditive des personnes âgées : comment aider un parent',
      lede:
        "Votre père monte le son de la télévision, votre mère fait répéter au téléphone. Avec l'âge, l'audition baisse chez beaucoup de personnes, si doucement qu'elles ne s'en rendent pas compte. Voici comment le repérer et en parler.",
      sections: [
        {
          h2: 'La presbyacousie, une perte progressive',
          p: [
            "La presbyacousie est la baisse de l'audition liée à l'âge. Elle touche d'abord les sons aigus : les consonnes, les voix des enfants et des femmes. Résultat, on entend que quelqu'un parle, sans bien comprendre ce qu'il dit.",
          ],
        },
        {
          h2: 'Les signes à repérer chez un parent',
          list: [
            'Il monte le volume de la télévision ou de la radio',
            'Il fait souvent répéter, surtout quand plusieurs personnes parlent',
            'Il évite les repas de famille ou les sorties, et paraît en retrait',
            'Il répond à côté, ou dit que « les gens ne parlent pas clairement »',
            'Le téléphone devient difficile',
          ],
        },
        {
          h2: 'Pourquoi ne pas attendre',
          p: [
            "Une perte auditive non prise en charge isole : on participe moins aux conversations, on sort moins. Plus on attend, plus l'adaptation à un appareil demande d'efforts, car le cerveau perd l'habitude de certains sons. Notre page sur la [perte auditive](/perte-auditive/) détaille les signes et les causes.",
          ],
        },
        {
          h2: 'Comment en parler, et venir ensemble',
          p: [
            "Parlez des situations plutôt que de l'âge : « au téléphone, tu as du mal », plutôt que « tu deviens sourd ». Proposez un simple [test auditif en ligne](/test-auditif-en-ligne/) à faire ensemble, puis un [bilan auditif gratuit](/bilan-auditif-casablanca/) au centre, sans engagement.",
            "Au centre, aux Princesses, les proches sont les bienvenus. C'est même conseillé : à deux, on retient mieux les explications, et vous pouvez décrire les situations du quotidien.",
          ],
        },
      ],
      faq: [
        {
          q: 'À partir de quel âge faire contrôler son audition ?',
          a: "Dès qu'un signe apparaît, à tout âge. Après 60 ans, un contrôle tous les deux ans est une bonne habitude, comme pour la vue.",
        },
        {
          q: 'Mon parent refuse de porter un appareil, que faire ?',
          a: "Ne forcez pas. Commencez par le bilan, qui ne l'engage à rien. Les appareils actuels sont très discrets, et un essai dans la vie de tous les jours convainc souvent mieux que tous les arguments.",
        },
        {
          q: 'Combien coûte un appareil auditif pour une personne âgée ?',
          a: "Le prix ne dépend pas de l'âge mais du niveau technologique : par appareil, Essentiel à partir de 5 000 DH, Confort de 7 000 à 12 000 DH, Premium à partir de 14 000 DH. Voir la [carte tarifaire](/appareils-auditifs-casablanca/#prix).",
        },
      ],
      related: [
        { slug: 'perte-auditive', label: 'Comprendre la perte auditive' },
        { slug: 'bilan-auditif-casablanca', label: 'Bilan auditif gratuit' },
        { slug: 'appareils-auditifs-casablanca', label: 'Prix des appareils auditifs' },
      ],
    },
    ar: {
      kicker: 'من أجل والديك',
      title: 'ضعف السمع عند كبار السن: العلامات وكيف تساعد والديك · أوديوليك',
      description:
        'ضعف السمع المرتبط بالسن: علامات تدلّ على أن أحد والديك يسمع أقلّ، كيف تحدّثه في الأمر، وكيف يجري فحص السمع المجاني بالدار البيضاء. أوديوليك، حي الأميرات.',
      h1: 'ضعف السمع عند كبار السن: كيف تساعد أحد والديك',
      lede:
        'أبوك يرفع صوت التلفاز، وأمّك تطلب الإعادة في الهاتف. مع التقدّم في السن، يضعف السمع عند كثيرين، ببطء شديد لدرجة أنهم لا ينتبهون. إليك كيف تلاحظ ذلك وتتحدّث عنه.',
      sections: [
        {
          h2: 'ضعف السمع المرتبط بالسن، تراجع تدريجي',
          p: [
            'هو انخفاض السمع المرتبط بالعمر. يمسّ أوّلًا الأصوات الحادّة: الحروف الساكنة، وأصوات الأطفال والنساء. فيسمع الشخص أن أحدًا يتكلّم، دون أن يفهم جيّدًا ما يقول.',
          ],
        },
        {
          h2: 'العلامات التي تلاحظها عند أحد والديك',
          list: [
            'يرفع صوت التلفاز أو الراديو',
            'يطلب الإعادة كثيرًا، خاصة حين يتكلّم عدّة أشخاص',
            'يتجنّب وجبات العائلة أو الخرجات، ويبدو منعزلًا',
            'يجيب بما لا علاقة له بالسؤال، أو يقول إن «الناس لا يتكلّمون بوضوح»',
            'صار الهاتف صعبًا',
          ],
        },
        {
          h2: 'لماذا لا يُنصح بالانتظار',
          p: [
            'ضعف السمع غير المعالَج يعزل صاحبه: يشارك أقلّ في الحديث، ويخرج أقلّ. وكلّما طال الانتظار، تطلّب التأقلم مع الجهاز جهدًا أكبر، لأن الدماغ يفقد عادة بعض الأصوات. صفحتنا عن [ضعف السمع](/ar/perte-auditive/) تفصّل العلامات والأسباب.',
          ],
        },
        {
          h2: 'كيف تتحدّث في الأمر، وتأتيان معًا',
          p: [
            'تحدّث عن المواقف لا عن السن: «في الهاتف تجد صعوبة»، بدل «صرت لا تسمع». اقترح [اختبار سمع أونلاين](/ar/test-auditif-en-ligne/) تقومان به معًا، ثم [فحص سمع مجانيًّا](/ar/bilan-auditif-casablanca/) في المركز، دون أيّ التزام.',
            'في المركز، بحي الأميرات، مرافقة الأقارب مُرحّب بها، بل ننصح بها: الاثنان يحفظان الشرح أفضل، ويمكنك وصف مواقف الحياة اليومية.',
          ],
        },
      ],
      faq: [
        {
          q: 'متى ينبغي مراقبة السمع؟',
          a: 'بمجرد ظهور علامة، في أيّ سن. بعد الستين، فحص كل سنتين عادة جيدة، مثل فحص النظر.',
        },
        {
          q: 'أحد والديّ يرفض الجهاز، ماذا أفعل؟',
          a: 'لا تُجبره. ابدأ بالفحص، فهو لا يُلزمه بشيء. الأجهزة الحالية دقيقة جدًّا، وتجربتها في الحياة اليومية تُقنع غالبًا أكثر من كل الحجج.',
        },
        {
          q: 'كم يكلّف الجهاز السمعي لكبار السن؟',
          a: 'السعر لا يتوقّف على السن بل على المستوى التقني: للجهاز الواحد، الأساسية ابتداءً من 5 000 درهم، الراحة من 7 000 إلى 12 000 درهم، بريميوم ابتداءً من 14 000 درهم. انظر [جدول الأسعار](/ar/appareils-auditifs-casablanca/#prix).',
        },
      ],
      related: [
        { slug: 'perte-auditive', label: 'فهم ضعف السمع' },
        { slug: 'bilan-auditif-casablanca', label: 'فحص سمع مجاني' },
        { slug: 'appareils-auditifs-casablanca', label: 'أسعار الأجهزة السمعية' },
      ],
    },
    en: {
      kicker: 'For your parents',
      title: 'Hearing Loss in Older Adults: Signs and How to Help · AudioLik',
      description:
        'Age-related hearing loss: signs a parent hears less well, how to talk about it, and how a free hearing assessment works in Casablanca. AudioLik, Les Princesses.',
      h1: 'Hearing loss in older adults: how to help a parent',
      lede:
        'Your father turns the TV up, your mother asks people to repeat on the phone. With age, hearing drops for many people, so slowly they do not notice. Here is how to spot it and talk about it.',
      sections: [
        {
          h2: 'Presbycusis, a gradual loss',
          p: [
            'Presbycusis is age-related hearing loss. It first affects high-pitched sounds: consonants, children’s and women’s voices. So you hear that someone is speaking without quite understanding what they say.',
          ],
        },
        {
          h2: 'Signs to look for in a parent',
          list: [
            'They turn up the TV or radio',
            'They often ask people to repeat, especially when several people talk',
            'They avoid family meals or outings, and seem withdrawn',
            'Their answers miss the point, or they say "people don’t speak clearly"',
            'The phone has become difficult',
          ],
        },
        {
          h2: 'Why not to wait',
          p: [
            'Untreated hearing loss isolates people: they join in conversations less and go out less. The longer you wait, the harder it is to adapt to a device, because the brain loses the habit of certain sounds. Our page on [hearing loss](/en/perte-auditive/) covers the signs and causes.',
          ],
        },
        {
          h2: 'How to raise it, and come together',
          p: [
            'Talk about situations rather than age: "you struggle on the phone" rather than "you’re going deaf". Suggest a simple [online hearing test](/en/test-auditif-en-ligne/) to do together, then a [free hearing assessment](/en/bilan-auditif-casablanca/) at the centre, with no commitment.',
            'At the centre in Les Princesses, relatives are welcome. It is even advisable: two people remember explanations better, and you can describe everyday situations.',
          ],
        },
      ],
      faq: [
        {
          q: 'At what age should hearing be checked?',
          a: 'As soon as a sign appears, at any age. After 60, a check every two years is a good habit, like for eyesight.',
        },
        {
          q: 'My parent refuses to wear a hearing aid. What can I do?',
          a: 'Don’t force it. Start with the assessment, which commits them to nothing. Today’s devices are very discreet, and a trial in everyday life often convinces better than any argument.',
        },
        {
          q: 'How much does a hearing aid cost for an older person?',
          a: 'The price depends on the technology level, not age: per device, Essential from MAD 5,000, Comfort MAD 7,000 to 12,000, Premium from MAD 14,000. See the [price list](/en/appareils-auditifs-casablanca/#prix).',
        },
      ],
      related: [
        { slug: 'perte-auditive', label: 'Understanding hearing loss' },
        { slug: 'bilan-auditif-casablanca', label: 'Free hearing assessment' },
        { slug: 'appareils-auditifs-casablanca', label: 'Hearing aid prices' },
      ],
    },
  },
];
