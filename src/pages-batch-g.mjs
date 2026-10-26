/* Lot G — pages 19 à 22 (10/2026), issues de l'étude de mots-clés multilingue.
 *
 * 19 · lexique-audition-darija « سماعة ديال الودن », « ما كنسمعش مزيان »,
 *      « smaa dial lwden », vocabulaire darija / arabe / français
 * 20 · acheter-appareil-auditif-occasion-internet « appareil auditif pas cher maroc »,
 *      « سماعة رخيصة », « سماعة مستعملة », amplificateur, achat en ligne
 * 21 · audioprothesiste-maarif-les-princesses « audioprothésiste maârif »,
 *      « فين كاين مركز ديال السمع فكازا », quartiers de Casablanca
 * 22 · oreille-bouchee-cerumen « oreille bouchée », « الودن مسدودة », cérumen
 *
 * Mêmes règles que src/pages.mjs : prix = uniquement les tarifs indicatifs par
 * appareil de la carte tarifaire ; aucun montant de remboursement ; aucune
 * promesse non confirmée ; aucun modèle précis promis en stock ; pas
 * d'appareillage enfants ; aucun horaire écrit en dur.
 */
export default [
  /* ======================================================================
     19 · Lexique de l'audition en darija
     ====================================================================== */
  {
    slug: 'lexique-audition-darija',
    fr: {
      kicker: 'Se comprendre',
      title: "L'audition en darija : les mots pour en parler · AudioLik Casablanca",
      description:
        "Smaa dial lwden, tanin, ma kansm3ch mzyan : le vocabulaire de l'audition en darija, en arabe et en français, pour expliquer ce que vous ressentez et comprendre ce qu'on vous répond.",
      h1: "Parler de son audition en darija",
      lede:
        "Au centre, les rendez-vous se passent en darija, en arabe, en français ou en anglais. Voici les mots que les patients emploient et leur équivalent dans chaque langue — utile pour accompagner un parent, ou pour comprendre un compte rendu.",
      sections: [
        {
          h2: 'Les mots de tous les jours',
          list: [
            "*La smaa* (السماعة ديال الودن) : l'appareil auditif. En arabe : الجهاز السمعي ou السماعة الطبية",
            "*ما كنسمعش مزيان* (ma kansm3ch mzyan) : « je n'entends pas bien ». En arabe : ضعف السمع",
            "*كنسمع بالسيف* : « j'entends avec difficulté », souvent dans le bruit",
            "*طنين فالودن* (tanin f lwden) : acouphène, sifflement ou bourdonnement. En français : [acouphène](/acouphenes/)",
            "*الودن مسدودة* : [oreille bouchée](/oreille-bouchee-cerumen/), sensation d'oreille pleine",
            "*سماعة ما كتبانش* : un [appareil invisible](/appareils-auditifs-intra-auriculaires/), logé dans le conduit",
          ],
        },
        {
          h2: 'Les mots du rendez-vous',
          list: [
            "*فحص السمع* : le [bilan auditif](/bilan-auditif-casablanca/), ce qui se dit aussi « اختبار السمع »",
            "*مخطّط السمع* : l'audiogramme, le graphique de votre audition oreille par oreille",
            "*أخصائي السمعيات* : l'audioprothésiste, celui qui mesure, appareille et règle",
            "*طبيب الودنين* : le médecin [ORL](/orl-ou-audioprothesiste/), qui diagnostique et soigne",
            "*قالب الأذن* : l'embout, la partie sur mesure qui tient dans l'oreille",
          ],
        },
        {
          h2: 'Ce que les proches disent, et ce que ça veut dire',
          p: [
            "« كيزيد فالتلفزة » — il monte la télévision : les sons aigus se perdent en premier, et avec eux les consonnes. « كيعاود عليا » — il fait répéter : c'est souvent dans le bruit que la gêne apparaît d'abord. Ces deux phrases, entendues au comptoir, suffisent presque toujours à proposer un bilan.",
            "Pour savoir comment en parler à un parent sans le braquer, voir notre page sur la [perte auditive des personnes âgées](/perte-auditive-personnes-agees/).",
          ],
        },
        {
          h2: 'Un rendez-vous dans votre langue',
          p: [
            "Au 106B rue Al Jounaid, quartier Les Princesses à Maârif, les explications se donnent dans la langue qui vous arrange, et les résultats vous sont expliqués avant de partir. Avec ou sans rendez-vous.",
          ],
        },
      ],
      faq: [
        {
          q: 'Comment dit-on appareil auditif en darija ?',
          a: 'On dit « السماعة ديال الودن » (smaa dial lwden). En arabe standard : الجهاز السمعي ou السماعة الطبية.',
        },
        {
          q: 'Comment dit-on acouphène en darija ?',
          a: '« طنين فالودن » ou, pour un sifflement, « كيصفر فودني ». En arabe : طنين الأذن.',
        },
        {
          q: 'Parlez-vous darija au centre ?',
          a: 'Oui. Le rendez-vous se déroule en darija, en arabe, en français ou en anglais, selon ce qui vous met à l’aise.',
        },
      ],
      related: [
        { slug: 'perte-auditive', label: 'Comprendre la perte auditive' },
        { slug: 'bilan-auditif-casablanca', label: 'Le bilan auditif' },
        { slug: 'acouphenes', label: 'Acouphènes' },
      ],
    },
    ar: {
      kicker: 'باش نتفاهمو',
      title: 'السمع بالدارجة: الكلمات اللي كنستعملو · أوديوليك الدار البيضاء',
      description:
        'السماعة ديال الودن، طنين، ما كنسمعش مزيان: الكلمات ديال السمع بالدارجة وبالعربية وبالفرنسية، باش تشرح واش كتحس وتفهم الجواب.',
      h1: 'نهضرو على السمع بالدارجة',
      lede:
        'فالمركز، كنهضرو بالدارجة وبالعربية وبالفرنسية وبالإنجليزية. هاديك هي الكلمات اللي كيستعملو المرضى وما تقابلها في كل لغة — مفيدة إلى غادي تمشي مع والديك، ولا باش تفهم ورقة النتائج.',
      sections: [
        {
          h2: 'كلمات كل نهار',
          list: [
            '*السماعة ديال الودن*: الجهاز السمعي. بالفرنسية: appareil auditif',
            '*ما كنسمعش مزيان*: ضعف السمع. بالفرنسية: perte auditive',
            '*كنسمع بالسيف*: كنسمع بصعوبة، خصوصًا فوسط الضجيج',
            '*طنين فالودن* ولا *كيصفر فودني*: [طنين الأذن](/ar/acouphenes/). بالفرنسية: acouphène',
            '*الودن مسدودة*: [إحساس بالانسداد](/ar/oreille-bouchee-cerumen/) ولا شمع فالأذن',
            '*سماعة ما كتبانش*: [سماعة خفية داخل القناة](/ar/appareils-auditifs-intra-auriculaires/)',
          ],
        },
        {
          h2: 'كلمات الموعد',
          list: [
            '*فحص السمع* ولا *اختبار السمع*: [الفحص](/ar/bilan-auditif-casablanca/) اللي كيقيس السمع',
            '*مخطّط السمع*: الأوديوغرام، الرسم ديال السمع أذنًا بأذن',
            '*أخصائي السمعيات*: اللي كيقيس وكيجهّز وكيضبط السماعة',
            '*طبيب الودنين*: [طبيب الأنف والأذن والحنجرة](/ar/orl-ou-audioprothesiste/)، اللي كيشخّص وكيعالج',
            '*قالب الأذن*: الإمبو، الجزء على المقاس اللي كيدخل فالودن',
          ],
        },
        {
          h2: 'أشنو كيقولو الأقارب، وأشنو كيعني',
          p: [
            '«كيزيد فالتلفزة»: الأصوات الحادّة كتضيع الأولى، ومعاها الحروف. «كيعاود عليا»: الصعوبة كتبان أول مرة فوسط الضجيج. هاتين الجملتين، اللي كنسمعوهم بزاف، كافيين باش نقترحو فحص السمع.',
            'وباش تعرف كيفاش تهضر مع والديك بلا ما تحرجهم، شوف صفحة [ضعف السمع عند كبار السن](/ar/perte-auditive-personnes-agees/).',
          ],
        },
        {
          h2: 'موعد باللغة ديالك',
          p: [
            'ف106B زنقة الجنيد، حي الأميرات بالمعاريف، كنشرحو باللغة اللي كتريحك، وكنشرحو ليك النتائج قبل ما تمشي. بموعد ولا بلا موعد.',
          ],
        },
      ],
      faq: [
        {
          q: 'كيفاش كنقولو appareil auditif بالدارجة؟',
          a: 'كنقولو «السماعة ديال الودن». وبالعربية الفصحى: الجهاز السمعي ولا السماعة الطبية.',
        },
        {
          q: 'شنو هو الطنين بالدارجة؟',
          a: '«طنين فالودن»، ولا «كيصفر فودني» ملي يكون صفير. بالفرنسية: acouphène.',
        },
        {
          q: 'واش كتهضرو الدارجة فالمركز؟',
          a: 'إيه. الموعد كيدوز بالدارجة ولا بالعربية ولا بالفرنسية ولا بالإنجليزية، حسب اللي كيريحك.',
        },
      ],
      related: [
        { slug: 'perte-auditive', label: 'فهم ضعف السمع' },
        { slug: 'bilan-auditif-casablanca', label: 'فحص السمع' },
        { slug: 'acouphenes', label: 'طنين الأذن' },
      ],
    },
    en: {
      kicker: 'Talking about it',
      title: 'Hearing Words in Moroccan Arabic (Darija) · AudioLik Casablanca',
      description:
        'The everyday Moroccan Arabic words for hearing aids, tinnitus and hearing loss, with their French and standard Arabic equivalents. Useful when helping a relative at the centre.',
      h1: 'Talking about hearing in Moroccan Arabic',
      lede:
        'Appointments at the centre run in Moroccan Arabic, standard Arabic, French or English. Here are the words patients actually use, with their equivalents — handy if you are coming in with a relative.',
      sections: [
        {
          h2: 'Everyday words',
          list: [
            '*smaa dial lwden* (السماعة ديال الودن): a hearing aid',
            '*ma kansm3ch mzyan* (ما كنسمعش مزيان): "I do not hear well" — hearing loss',
            '*tanin f lwden* (طنين فالودن): [tinnitus](/en/acouphenes/), ringing or buzzing',
            '*lwden msdouda* (الودن مسدودة): a [blocked ear](/en/oreille-bouchee-cerumen/) or earwax',
            '*smaa li ma katbanch*: an [invisible device](/en/appareils-auditifs-intra-auriculaires/) sitting in the canal',
          ],
        },
        {
          h2: 'Words you will hear at the appointment',
          list: [
            '*fahs sama3* (فحص السمع): the [hearing assessment](/en/bilan-auditif-casablanca/)',
            '*mukhattat sama3* (مخطّط السمع): the audiogram',
            '*akhissai sama3iyat* (أخصائي السمعيات): the hearing aid specialist',
            '*tbib lwednin* (طبيب الودنين): the [ENT doctor](/en/orl-ou-audioprothesiste/)',
            '*qalib al-udhun* (قالب الأذن): the custom ear mould',
          ],
        },
        {
          h2: 'What relatives say, and what it means',
          p: [
            '"He turns the TV up" and "he keeps asking me to repeat" are the two sentences we hear most at the counter. High-pitched sounds go first, taking the consonants with them, and the difficulty shows up in noise before anywhere else. Both are reason enough for an assessment. See [hearing loss in older adults](/en/perte-auditive-personnes-agees/).',
          ],
        },
        {
          h2: 'An appointment in your language',
          p: [
            'At 106B rue Al Jounaid, Les Princesses, Maârif, explanations are given in whichever language suits you, and your results are explained before you leave. With or without an appointment.',
          ],
        },
      ],
      faq: [
        {
          q: 'How do you say hearing aid in Moroccan Arabic?',
          a: '"Smaa dial lwden" (السماعة ديال الودن). In standard Arabic: الجهاز السمعي.',
        },
        {
          q: 'How do you say tinnitus in Moroccan Arabic?',
          a: '"Tanin f lwden" (طنين فالودن), or "kaysfr f wedni" for a whistling sound.',
        },
        {
          q: 'Do you speak English at the centre?',
          a: 'Yes — Moroccan Arabic, standard Arabic, French and English.',
        },
      ],
      related: [
        { slug: 'perte-auditive', label: 'Understanding hearing loss' },
        { slug: 'bilan-auditif-casablanca', label: 'Hearing assessment' },
        { slug: 'acouphenes', label: 'Tinnitus' },
      ],
    },
  },

  /* ======================================================================
     20 · Acheter un appareil auditif sur internet ou d'occasion
     ====================================================================== */
  {
    slug: 'acheter-appareil-auditif-occasion-internet',
    fr: {
      kicker: 'Avant d’acheter',
      title: "Appareil auditif pas cher, d'occasion ou sur internet : ce qu'il faut savoir · AudioLik",
      description:
        "Appareil auditif d'occasion, amplificateur à bas prix, achat en ligne : ce qui fonctionne, ce qui ne fonctionne pas, et pourquoi un appareil non réglé ne sert à rien. AudioLik, Casablanca.",
      h1: "Appareil auditif pas cher, d'occasion ou acheté en ligne",
      lede:
        "Beaucoup de patients arrivent au centre avec un appareil acheté en ligne ou récupéré d'un proche, et la même phrase : « il ne sert à rien ». Voici pourquoi, et ce qu'il est possible d'en faire.",
      sections: [
        {
          h2: 'Amplificateur et appareil auditif, ce n’est pas la même chose',
          p: [
            "Les boîtiers vendus quelques centaines de dirhams sont des amplificateurs : ils montent *tous* les sons, le bruit de la rue comme la voix. Un appareil auditif, lui, est réglé sur votre audiogramme : il relève les fréquences que vous avez perdues et laisse les autres tranquilles. C'est pour cela qu'un amplificateur fatigue, siffle et finit dans un tiroir.",
          ],
        },
        {
          h2: 'Un appareil d’occasion peut-il servir ?',
          p: [
            "Parfois, à deux conditions : qu'il soit en état de marche, et qu'il puisse être reprogrammé sur *votre* audition. Un appareil réglé pour l'oreille de quelqu'un d'autre ne convient presque jamais, et l'embout sur mesure de son ancien propriétaire ne tient pas dans votre conduit. Certains modèles anciens ne sont plus reconnus par les logiciels de réglage, et aucune pièce ne se trouve.",
            "Apportez-le au centre : nous regardons son état, son modèle et ce qu'il est possible de faire. S'il est récupérable, le réglage et un nouvel embout suffisent parfois.",
          ],
        },
        {
          h2: 'Acheter en ligne depuis le Maroc',
          list: [
            "*Pas de prise d'empreinte* : donc pas d'embout à votre conduit, le plus souvent des dômes standard qui sifflent",
            "*Pas de réglage* : l'appareil arrive avec un réglage d'usine qui ne correspond à personne",
            "*Pas de suivi* : or l'adaptation se joue sur les premières semaines, en revenant ajuster",
            "*Pas de garantie exploitable* sur place en cas de panne, ni de facture utilisable pour un [dossier de remboursement](/remboursement-appareils-auditifs-maroc/)",
          ],
        },
        {
          h2: 'Le vrai moyen de payer moins cher',
          p: [
            "Ce n'est pas d'acheter ailleurs, c'est de choisir la bonne gamme. La gamme Essentiel commence à 5 000 DH par appareil et convient à une vie calme ; monter en gamme ne se justifie que si vous passez beaucoup de temps dans le bruit. Les repères complets sont sur la page [prix d'un appareil auditif au Maroc](/prix-appareil-auditif-maroc/), et une partie peut être prise en charge selon votre couverture.",
          ],
        },
        {
          h2: 'Faire le point sur ce que vous avez',
          p: [
            "Passez au 106B rue Al Jounaid, quartier Les Princesses, à Maârif, avec l'appareil que vous possédez déjà. Le nettoyage et le dépannage se font sur place, y compris pour des appareils qui n'ont pas été achetés chez nous.",
          ],
        },
      ],
      faq: [
        {
          q: 'Puis-je faire régler un appareil acheté sur internet ?',
          a: "Apportez-le : cela dépend de la marque, du modèle et de son âge. Certains appareils se reprogramment, d'autres ne sont plus reconnus par les logiciels de réglage.",
        },
        {
          q: "Un appareil d'occasion est-il dangereux ?",
          a: "Non, mais un appareil mal réglé peut être désagréable et inefficace, et un embout qui n'est pas au format de votre conduit irrite. Dans tous les cas, l'appareil doit être nettoyé avant d'être porté par quelqu'un d'autre.",
        },
        {
          q: 'Pourquoi un amplificateur à bas prix siffle-t-il ?',
          a: "Parce qu'il amplifie sans distinguer les fréquences et que l'embout standard laisse le son ressortir du conduit : il est repris par le micro, et la boucle produit le sifflement.",
        },
        {
          q: 'Quel est le prix le plus bas chez vous ?',
          a: 'La gamme Essentiel commence à 5 000 DH par appareil, réglages et suivi compris.',
        },
      ],
      related: [
        { slug: 'prix-appareil-auditif-maroc', label: "Prix d'un appareil auditif" },
        { slug: 'entretien-et-reparation-appareils-auditifs', label: 'Entretien et réparation' },
        { slug: 'bilan-auditif-casablanca', label: 'Le bilan auditif' },
      ],
    },
    ar: {
      kicker: 'قبل ما تشري',
      title: 'سماعة رخيصة، مستعملة ولا من الأنترنت: أشنو خاصك تعرف · أوديوليك',
      description:
        'سماعة الأذن المستعملة، المكبّرات الرخيصة، الشراء من الأنترنت: أشنو كيخدم وأشنو ما كيخدمش، وعلاش السماعة بلا ضبط ما كتنفع. أوديوليك، الدار البيضاء.',
      h1: 'سماعة رخيصة، مستعملة ولا مشرية من الأنترنت',
      lede:
        'بزاف ديال الناس كيجيو للمركز بسماعة مشرية من الأنترنت ولا مخودة من شي قريب، وبنفس الجملة: «ما كتنفع بوالو». هاك علاش، وأشنو يمكن ندير بيها.',
      sections: [
        {
          h2: 'المكبّر والسماعة الطبية ماشي بحال بحال',
          p: [
            'الصناديق الصغيرة اللي كتباع بشي مئات الدراهم هي مكبّرات: كترفع *كل* الأصوات، ضجيج الزنقة بحال صوت الإنسان. أما السماعة الطبية فمضبوطة على مخطّط سمعك: كترفع الترددات اللي ضاعت ليك وكتخلي الباقي. علاش المكبّر كيعيي وكيصفّر وكيسالي فالتيروار.',
          ],
        },
        {
          h2: 'واش السماعة المستعملة كتنفع؟',
          p: [
            'مرات، بشرطين: تكون خدامة، ويمكن إعادة برمجتها على *سمعك نتا*. سماعة مضبوطة على ودن شي واحد آخر شبه ما كتنفعش، والقالب ديالو ما كيدخلش فقناتك. وكاينين طرازات قديمة ما بقاتش كتعرفها برامج الضبط، ولا كتلقى ليها قطع.',
            'جيب بيها للمركز: كنشوفو حالتها وطرازها وأشنو يمكن ندّيرو. إلى كانت صالحة، مرات كيكفي الضبط وقالب جديد.',
          ],
        },
        {
          h2: 'الشراء من الأنترنت من المغرب',
          list: [
            '*بلا بصمة الأذن*: يعني بلا قالب على مقاس قناتك، وغالبًا قبعات قياسية كتصفّر',
            '*بلا ضبط*: السماعة كتجي بضبط المصنع اللي ما كيناسب حتى واحد',
            '*بلا متابعة*: والتأقلم كيتقرّر فالأسابيع الأولى، بالرجوع للضبط',
            '*بلا ضمان* يمكن استعماله هنا فحالة العطب، ولا فاتورة صالحة لـ[ملف الاسترجاع](/ar/remboursement-appareils-auditifs-maroc/)',
          ],
        },
        {
          h2: 'الطريقة الحقيقية باش تخلّص أقل',
          p: [
            'ماشي تشري من بلاصة أخرى، ولكن تختار الفئة المناسبة. الفئة الأساسية كتبدا من 5 000 درهم للجهاز وكتناسب حياة هادئة؛ الطلوع لفئة فوق ما كيتبرّرش إلا إلى كنتي بزاف فوسط الضجيج. المراجع كاملة ف[صفحة ثمن الجهاز السمعي](/ar/prix-appareil-auditif-maroc/)، وجزء يمكن يتعاود حسب التغطية ديالك.',
          ],
        },
        {
          h2: 'شوف أشنو عندك',
          p: [
            'دوز ل106B زنقة الجنيد، حي الأميرات، بالمعاريف، بالسماعة اللي عندك. التنظيف والإصلاح كيتمّو فعين المكان، حتى للسماعات اللي ما تشراوش عندنا.',
          ],
        },
      ],
      faq: [
        {
          q: 'واش يمكن تضبطو ليا سماعة مشريتها من الأنترنت؟',
          a: 'جيب بيها: كيتوقف على الماركة والطراز والعمر ديالها. شي سماعات كتعاود تتبرمج، وشي أخرى ما بقاتش كتعرفها برامج الضبط.',
        },
        {
          q: 'واش السماعة المستعملة فيها خطر؟',
          a: 'لا، ولكن سماعة ما مضبوطاش كتكون مزعجة وبلا فائدة، والقالب اللي ماشي على مقاس قناتك كيهيّج. وفكل الحالات خاصها تتنقّى قبل ما يلبسها شي واحد آخر.',
        },
        {
          q: 'علاش المكبّر الرخيص كيصفّر؟',
          a: 'حيث كيكبّر بلا ما يفرّق بين الترددات، والقبعة القياسية كتخلي الصوت يخرج من القناة فيرجع للميكرو، وهاد الدورة هي اللي كتعطي الصفير.',
        },
        {
          q: 'شنو أرخص ثمن عندكم؟',
          a: 'الفئة الأساسية كتبدا من 5 000 درهم للجهاز، بالضبط والمتابعة.',
        },
      ],
      related: [
        { slug: 'prix-appareil-auditif-maroc', label: 'ثمن الجهاز السمعي' },
        { slug: 'entretien-et-reparation-appareils-auditifs', label: 'الصيانة والإصلاح' },
        { slug: 'bilan-auditif-casablanca', label: 'فحص السمع' },
      ],
    },
    en: {
      kicker: 'Before you buy',
      title: 'Cheap, Second-hand or Online Hearing Aids in Morocco · AudioLik',
      description:
        'Second-hand hearing aids, cheap amplifiers, buying online: what works, what does not, and why an unprogrammed device helps nobody. AudioLik, Casablanca.',
      h1: 'Cheap, second-hand or online hearing aids',
      lede:
        'Many people arrive at the centre with a device bought online or handed down by a relative, and the same sentence: "it is useless". Here is why, and what can be done with it.',
      sections: [
        {
          h2: 'An amplifier is not a hearing aid',
          p: [
            'The small boxes sold for a few hundred dirhams are amplifiers: they raise *every* sound, street noise as much as speech. A hearing aid is programmed to your audiogram: it lifts the frequencies you have lost and leaves the rest alone. That is why an amplifier tires you, whistles, and ends up in a drawer.',
          ],
        },
        {
          h2: 'Can a second-hand device be used?',
          p: [
            "Sometimes, on two conditions: it must work, and it must be reprogrammable to *your* hearing. A device set for someone else's ear almost never suits, and their custom mould will not fit your canal. Some older models are no longer recognised by fitting software, and no parts can be found.",
            'Bring it to the centre: we check its condition and model and tell you what is possible. If it can be saved, reprogramming and a new mould are sometimes enough.',
          ],
        },
        {
          h2: 'Buying online from Morocco',
          list: [
            '*No ear impression*: no mould fitted to your canal, usually standard domes that whistle',
            '*No programming*: the device arrives on a factory setting that suits nobody',
            '*No follow-up*: yet adaptation is decided in the first weeks, by coming back for adjustments',
            '*No usable warranty* locally if it fails, and no invoice for a [reimbursement file](/en/remboursement-appareils-auditifs-maroc/)',
          ],
        },
        {
          h2: 'The real way to pay less',
          p: [
            'Not buying elsewhere, but choosing the right range. The Essential range starts at MAD 5,000 per device and suits a quiet life; moving up only pays off if you spend a lot of time in noise. Full benchmarks are on the [hearing aid prices in Morocco](/en/prix-appareil-auditif-maroc/) page.',
          ],
        },
        {
          h2: 'Have what you own checked',
          p: [
            'Come to 106B rue Al Jounaid, Les Princesses, Maârif, with the device you already have. Cleaning and repairs are handled on site, including for devices bought elsewhere.',
          ],
        },
      ],
      faq: [
        {
          q: 'Can you programme a hearing aid I bought online?',
          a: 'Bring it in: it depends on the brand, model and age. Some devices can be reprogrammed, others are no longer supported by fitting software.',
        },
        {
          q: 'Is a second-hand hearing aid dangerous?',
          a: 'No, but a badly set device is unpleasant and ineffective, and a mould that does not match your canal irritates it. Either way it must be cleaned before someone else wears it.',
        },
        {
          q: 'Why does a cheap amplifier whistle?',
          a: 'Because it amplifies without separating frequencies, and the standard dome lets sound leak back out of the canal into the microphone — that loop is the whistle.',
        },
        {
          q: 'What is your lowest price?',
          a: 'The Essential range starts at MAD 5,000 per device, adjustments and follow-up included.',
        },
      ],
      related: [
        { slug: 'prix-appareil-auditif-maroc', label: 'Hearing aid prices' },
        { slug: 'entretien-et-reparation-appareils-auditifs', label: 'Servicing and repairs' },
        { slug: 'bilan-auditif-casablanca', label: 'Hearing assessment' },
      ],
    },
  },

  /* ======================================================================
     21 · Audioprothésiste à Maârif / Les Princesses
     ====================================================================== */
  {
    slug: 'audioprothesiste-maarif-les-princesses',
    fr: {
      kicker: 'Nous trouver',
      title: 'Audioprothésiste à Maârif, quartier Les Princesses · AudioLik Casablanca',
      description:
        "Un audioprothésiste à Maârif, quartier Les Princesses : adresse, accès, stationnement et quartiers desservis à Casablanca. Avec ou sans rendez-vous, chez AudioLik.",
      h1: 'Audioprothésiste à Maârif, quartier Les Princesses',
      lede:
        "AudioLik reçoit au 106B rue Al Jounaid, dans le quartier Les Princesses, à Maârif. Voici comment nous trouver, et d'où viennent la plupart de nos patients.",
      sections: [
        {
          h2: 'L’adresse et l’accès',
          p: [
            "106B rue Al Jounaid, Les Princesses, Maârif, Casablanca, à côté du Stade Mohammed V. L'entrée se fait de plain-pied, sans marche, et le centre est accessible en fauteuil roulant. Le stationnement est facile devant.",
            "La rue Ibn Hazem donne sur l'arrière du centre : pour entrer, c'est bien la porte du 106B rue Al Jounaid.",
          ],
        },
        {
          h2: 'D’où viennent nos patients',
          p: [
            "Les Princesses et Maârif d'abord, puis les quartiers voisins : Bourgogne, Gauthier, Racine, Palmier, Oasis, CIL, Derb Ghallef, Mers Sultan, 2 Mars, Anfa et Hay Hassani. Les patients de Sidi Maarouf, Californie et Ain Diab viennent en général en voiture, le stationnement devant le centre leur simplifie la visite.",
          ],
        },
        {
          h2: 'Pourquoi venir plutôt qu’appeler',
          p: [
            "Une audition se mesure, elle ne s'évalue pas au téléphone. Le [bilan auditif](/bilan-auditif-casablanca/) se fait sur place, avec ou sans rendez-vous, et vous repartez avec vos résultats expliqués. Si un appareil peut aider, nous vous en montrons deux ou trois et vous les essayez : comptez environ une heure pour ce rendez-vous de présentation.",
          ],
        },
        {
          h2: 'Ce que vous pouvez faire sur place',
          list: [
            '[Bilan auditif](/bilan-auditif-casablanca/) et explication des résultats',
            "Essai, choix et réglage d'un [appareil auditif](/appareils-auditifs-casablanca/)",
            '[Nettoyage et dépannage](/entretien-et-reparation-appareils-auditifs/), même pour un appareil acheté ailleurs',
            'Piles, filtres et embouts de rechange',
            '[Protections auditives sur mesure](/protections-auditives-sur-mesure/)',
          ],
        },
      ],
      faq: [
        {
          q: 'Faut-il prendre rendez-vous ?',
          a: "Non, le centre reçoit avec ou sans rendez-vous. Un appel ou un message WhatsApp permet simplement d'être sûr qu'on vous consacre le temps nécessaire.",
        },
        {
          q: 'Y a-t-il où se garer ?',
          a: 'Oui, le stationnement devant le centre est facile, et l’entrée se fait sans marche.',
        },
        {
          q: 'Êtes-vous dans le quartier Palmier ?',
          a: 'Non : le centre est aux Princesses, à Maârif, à côté du Stade Mohammed V. Palmier est le quartier voisin.',
        },
        {
          q: 'Vous déplacez-vous à domicile ?',
          a: 'Une visite à domicile est possible pour les personnes qui ne peuvent pas se déplacer. Appelez le centre pour en convenir.',
        },
      ],
      related: [
        { slug: 'audioprothesiste-casablanca', label: 'Audioprothésiste à Casablanca' },
        { slug: 'centre-de-correction-auditive-casablanca', label: 'Le centre' },
        { slug: 'bilan-auditif-casablanca', label: 'Le bilan auditif' },
      ],
    },
    ar: {
      kicker: 'فين كاينين',
      title: 'أخصائي السمعيات بالمعاريف، حي الأميرات · أوديوليك الدار البيضاء',
      description:
        'أخصائي السمعيات بالمعاريف، حي الأميرات: العنوان، الولوج، البارݣينݣ والأحياء اللي كنستقبلو منها بالدار البيضاء. بموعد ولا بلا موعد، فأوديوليك.',
      h1: 'أخصائي السمعيات بالمعاريف، حي الأميرات',
      lede:
        'أوديوليك كيستقبل ف106B زنقة الجنيد، بحي الأميرات، بالمعاريف. هاك كيفاش تلقانا، ومنين كيجيو أغلب المرضى ديالنا.',
      sections: [
        {
          h2: 'العنوان والولوج',
          p: [
            '106B زنقة الجنيد، حي الأميرات، المعاريف، الدار البيضاء، حدا ملعب محمد الخامس. الدخول بلا درج، والمركز ممكن للكرسي المتحرك. والبارݣينݣ ساهل قدّام.',
            'زنقة ابن حزم كتعطي على ضهر المركز: الباب ديال الدخول هو 106B زنقة الجنيد.',
          ],
        },
        {
          h2: 'منين كيجيو المرضى',
          p: [
            'الأميرات والمعاريف أولًا، ومن بعد الأحياء المجاورة: بورݣون، غوتييه، راسين، النخيل، الواحة، سيل، درب غلف، مرس السلطان، 2 مارس، أنفا، والحي الحسني. اللي كيجيو من سيدي معروف وكاليفورنيا وعين الذياب كيجيو غالبًا بالطوموبيل، والبارݣينݣ قدّام المركز كيسهّل عليهم.',
          ],
        },
        {
          h2: 'علاش تجي بدل ما تعيّط',
          p: [
            'السمع كيتقاس، ما كيتقيّمش فالتيليفون. [فحص السمع](/ar/bilan-auditif-casablanca/) كيتدار فعين المكان، بموعد ولا بلا موعد، وكتمشي ونتائجك مشروحة ليك. وإلى كان الجهاز غادي يعاون، كنوريوك جوج ولا تلاتة وكتجربهم: حسب على ساعة تقريبًا لهاد الموعد.',
          ],
        },
        {
          h2: 'أشنو يمكن تدير فعين المكان',
          list: [
            '[فحص السمع](/ar/bilan-auditif-casablanca/) وشرح النتائج',
            'تجربة واختيار وضبط [الجهاز السمعي](/ar/appareils-auditifs-casablanca/)',
            '[التنظيف والإصلاح](/ar/entretien-et-reparation-appareils-auditifs/)، حتى للسماعة المشرية من بلاصة أخرى',
            'البطاريات والمرشّحات والقوالب',
            '[سدادات الحماية على المقاس](/ar/protections-auditives-sur-mesure/)',
          ],
        },
      ],
      faq: [
        {
          q: 'واش خاص الموعد؟',
          a: 'لا، المركز كيستقبل بموعد ولا بلا موعد. تعيّط ولا تصيفط واتساب غير باش نضمنو ليك الوقت اللي خاصك.',
        },
        {
          q: 'واش كاين فين نحبس الطوموبيل؟',
          a: 'إيه، البارݣينݣ قدّام المركز ساهل، والدخول بلا درج.',
        },
        {
          q: 'واش نتوما فحي النخيل؟',
          a: 'لا: المركز فحي الأميرات، بالمعاريف، حدا ملعب محمد الخامس. النخيل هو الحي المجاور.',
        },
        {
          q: 'واش كتجيو للدار؟',
          a: 'الزيارة فالدار ممكنة للي ما قادرينش يتحركو. عيّط للمركز باش نتافقو.',
        },
      ],
      related: [
        { slug: 'audioprothesiste-casablanca', label: 'أخصائي السمعيات بالدار البيضاء' },
        { slug: 'centre-de-correction-auditive-casablanca', label: 'المركز' },
        { slug: 'bilan-auditif-casablanca', label: 'فحص السمع' },
      ],
    },
    en: {
      kicker: 'Finding us',
      title: 'Hearing Aid Specialist in Maârif, Les Princesses · AudioLik',
      description:
        'A hearing aid specialist in Maârif, Les Princesses: address, access, parking and the Casablanca districts we serve. With or without an appointment, at AudioLik.',
      h1: 'Hearing aid specialist in Maârif, Les Princesses',
      lede:
        'AudioLik is at 106B rue Al Jounaid, in Les Princesses, Maârif. Here is how to find us, and where most of our patients come from.',
      sections: [
        {
          h2: 'Address and access',
          p: [
            '106B rue Al Jounaid, Les Princesses, Maârif, Casablanca, next to the Mohammed V Stadium. The entrance is step-free and the centre is wheelchair accessible. Parking in front is easy.',
            'Rue Ibn Hazem runs along the back of the centre: the door to use is 106B rue Al Jounaid.',
          ],
        },
        {
          h2: 'Where our patients come from',
          p: [
            'Les Princesses and Maârif first, then the neighbouring districts: Bourgogne, Gauthier, Racine, Palmier, Oasis, CIL, Derb Ghallef, Mers Sultan, 2 Mars, Anfa and Hay Hassani. Patients from Sidi Maarouf, Californie and Ain Diab usually drive, and parking in front makes the visit straightforward.',
          ],
        },
        {
          h2: 'Why come in rather than call',
          p: [
            'Hearing is measured, not assessed over the phone. The [hearing assessment](/en/bilan-auditif-casablanca/) is done on site, with or without an appointment, and you leave with your results explained. If a device can help, we show you two or three and you try them: allow about an hour for that appointment.',
          ],
        },
        {
          h2: 'What you can do on site',
          list: [
            '[Hearing assessment](/en/bilan-auditif-casablanca/) with results explained',
            'Trial, choice and programming of a [hearing aid](/en/appareils-auditifs-casablanca/)',
            '[Cleaning and repairs](/en/entretien-et-reparation-appareils-auditifs/), including devices bought elsewhere',
            'Batteries, filters and replacement ear tips',
            '[Custom hearing protection](/en/protections-auditives-sur-mesure/)',
          ],
        },
      ],
      faq: [
        {
          q: 'Do I need an appointment?',
          a: 'No, the centre takes walk-ins. A call or WhatsApp message simply makes sure we can give you the time you need.',
        },
        {
          q: 'Is there parking?',
          a: 'Yes, parking in front of the centre is easy, and the entrance is step-free.',
        },
        {
          q: 'Are you in the Palmier district?',
          a: 'No: the centre is in Les Princesses, Maârif, next to the Mohammed V Stadium. Palmier is the neighbouring district.',
        },
        {
          q: 'Do you make home visits?',
          a: 'A home visit is possible for people who cannot travel. Call the centre to arrange one.',
        },
      ],
      related: [
        { slug: 'audioprothesiste-casablanca', label: 'Hearing aid specialist in Casablanca' },
        { slug: 'centre-de-correction-auditive-casablanca', label: 'The centre' },
        { slug: 'bilan-auditif-casablanca', label: 'Hearing assessment' },
      ],
    },
  },

  /* ======================================================================
     22 · Oreille bouchée et bouchon de cérumen
     ====================================================================== */
  {
    slug: 'oreille-bouchee-cerumen',
    fr: {
      kicker: 'Comprendre',
      title: 'Oreille bouchée et bouchon de cérumen : que faire · AudioLik Casablanca',
      description:
        "Oreille bouchée, sensation d'oreille pleine, bouchon de cérumen : les causes, ce qu'il ne faut surtout pas faire, et quand consulter un ORL. AudioLik, Casablanca.",
      h1: 'Oreille bouchée : les causes et ce qu’il faut faire',
      lede:
        "Une oreille qui semble pleine, des sons feutrés, parfois sa propre voix qui résonne. C'est l'un des motifs les plus fréquents, et l'un des plus simples à résoudre — à condition de ne pas s'y prendre n'importe comment.",
      sections: [
        {
          h2: 'Les causes les plus courantes',
          list: [
            "*Un bouchon de cérumen* : le cérumen s'accumule et bloque le conduit, souvent après une douche qui le fait gonfler",
            "*Un rhume ou une otite* : la trompe d'Eustache ne s'ouvre plus et l'oreille reste sous pression",
            "*Une variation de pression* : avion, plongée, route de montagne",
            "*Une perte auditive qui s'installe* : certaines personnes la décrivent comme une oreille bouchée plutôt que comme une baisse d'audition",
          ],
        },
        {
          h2: 'Ce qu’il ne faut pas faire',
          p: [
            "Ne mettez rien dans votre conduit. Le coton-tige pousse le cérumen plus loin et le tasse contre le tympan ; les bougies auriculaires n'ont aucun effet démontré et brûlent ; une tige, une clé, une allumette peuvent blesser le conduit ou perforer le tympan. Si vous avez déjà eu un tympan perforé ou des opérations de l'oreille, ne faites aucun lavage sans avis médical.",
          ],
        },
        {
          h2: 'Qui retire un bouchon',
          p: [
            "Le retrait d'un bouchon relève du médecin [ORL](/orl-ou-audioprothesiste/), qui dispose du matériel et de la vue sur le tympan. Notre rôle d'audioprothésiste s'arrête à l'otoscopie : nous regardons le conduit, et si un bouchon gêne la mesure, nous vous orientons avant de mesurer votre audition.",
          ],
        },
        {
          h2: 'Quand consulter sans attendre',
          p: [
            "Consultez rapidement si l'oreille bouchée s'accompagne d'une douleur, d'un écoulement, de vertiges, d'un [acouphène](/acouphenes/) d'un seul côté, ou si l'audition a baissé brutalement. Une baisse d'audition soudaine est une urgence : chaque jour compte.",
          ],
        },
        {
          h2: 'Et si l’oreille reste « bouchée » après le retrait',
          p: [
            "C'est fréquent, et c'est souvent le signe que la gêne ne venait pas seulement du cérumen. Un [bilan auditif](/bilan-auditif-casablanca/) fait le point : il mesure ce que vous entendez réellement, oreille par oreille, et dit s'il s'agit d'une [perte auditive](/perte-auditive/).",
          ],
        },
      ],
      faq: [
        {
          q: 'Retirez-vous les bouchons de cérumen au centre ?',
          a: "Non, c'est le travail du médecin ORL. Nous regardons le conduit à l'otoscope et vous orientons si un bouchon gêne la mesure de votre audition.",
        },
        {
          q: 'Les gouttes de pharmacie suffisent-elles ?',
          a: "Elles ramollissent le cérumen et aident parfois, mais ne conviennent pas si le tympan est perforé ou l'oreille douloureuse. Demandez l'avis d'un médecin ou d'un pharmacien avant d'en mettre.",
        },
        {
          q: 'Un appareil auditif provoque-t-il des bouchons ?',
          a: "Le port d'un appareil peut favoriser l'accumulation de cérumen chez certaines personnes. C'est l'une des raisons des contrôles réguliers et du nettoyage au centre.",
        },
        {
          q: 'Comment dit-on oreille bouchée en darija ?',
          a: '« الودن مسدودة ». Voir notre [lexique de l’audition en darija](/lexique-audition-darija/).',
        },
      ],
      related: [
        { slug: 'perte-auditive', label: 'Comprendre la perte auditive' },
        { slug: 'orl-ou-audioprothesiste', label: 'ORL ou audioprothésiste ?' },
        { slug: 'acouphenes', label: 'Acouphènes' },
      ],
    },
    ar: {
      kicker: 'للفهم',
      title: 'الودن مسدودة والشمع: أشنو خاصك تدير · أوديوليك الدار البيضاء',
      description:
        'الودن مسدودة، إحساس بالامتلاء، سدادة شمعية: الأسباب، أشنو ما خاصكش تدير، وفوقاش تستشير الطبيب. أوديوليك، الدار البيضاء.',
      h1: 'الودن مسدودة: الأسباب وأشنو خاصك تدير',
      lede:
        'ودن كتبان معمّرة، أصوات مكتومة، ومرات صوتك نتا كيرجع فيها. هادا من أكثر الأسباب اللي كيجيو بيها الناس، ومن أسهلهم حلًّا — بشرط ما تديرش أي حاجة بأي طريقة.',
      sections: [
        {
          h2: 'الأسباب الأكثر شيوعًا',
          list: [
            '*سدادة شمعية*: الشمع كيتجمّع وكيسدّ القناة، غالبًا من بعد الدوش اللي كينفخو',
            '*الرواح ولا التهاب الأذن*: قناة أوستاش ما بقاتش كتحل والضغط كيبقى فالودن',
            '*تغيّر الضغط*: الطيارة، الغطس، طريق الجبل',
            '*ضعف سمع كيتسلّل*: شي ناس كيوصفوه بأنه ودن مسدودة بدل ما يقولو السمع نقص',
          ],
        },
        {
          h2: 'أشنو ما خاصكش تدير',
          p: [
            'ما تدخّل حتى حاجة فالقناة. عود القطن كيدفع الشمع للداخل وكيلزّقو فالطبلة؛ وشمعات الأذن ما ثبت ليها أي مفعول وكتحرق؛ وأي عود ولا مفتاح ولا عويد ديال الزلاميط يقدر يجرح القناة ولا يثقب الطبلة. وإلى سبق ليك وتثقبات ليك الطبلة ولا دّرتي عمليات فالودن، ما تدير حتى غسيل بلا رأي طبي.',
          ],
        },
        {
          h2: 'شكون كينقّي السدادة',
          p: [
            'إزالة السدادة من اختصاص [طبيب الأنف والأذن والحنجرة](/ar/orl-ou-audioprothesiste/)، عندو الأدوات والرؤية على الطبلة. الدور ديالنا كأخصائي سمعيات كيوقف عند فحص القناة بالمنظار: كنشوفو، وإلى كانت السدادة كتعرقل القياس، كنوجّهوك قبل ما نقيسو السمع.',
          ],
        },
        {
          h2: 'فوقاش تستشير بسرعة',
          p: [
            'استشر بسرعة إلى كان مع الودن المسدودة ألم، ولا سيلان، ولا دوار، ولا [طنين](/ar/acouphenes/) فودن وحدة، ولا إلى نقص السمع فجأة. انخفاض السمع المفاجئ حالة مستعجلة: كل يوم ليه أهميته.',
          ],
        },
        {
          h2: 'وإلى بقات الودن «مسدودة» من بعد التنقية',
          p: [
            'هادشي كيوقع بزاف، وغالبًا كيعني أن المشكل ماشي غير الشمع. [فحص السمع](/ar/bilan-auditif-casablanca/) كيوضّح: كيقيس أشنو كتسمع بالضبط، أذنًا بأذن، وكيقول واش الأمر كيتعلق بـ[ضعف السمع](/ar/perte-auditive/).',
          ],
        },
      ],
      faq: [
        {
          q: 'واش كتنقّيو السدادة الشمعية فالمركز؟',
          a: 'لا، هادا عمل طبيب الأنف والأذن والحنجرة. كنشوفو القناة بالمنظار وكنوجّهوك إلى كانت السدادة كتعرقل قياس السمع.',
        },
        {
          q: 'واش القطرات ديال الفارماسيان كافيين؟',
          a: 'كترخّي الشمع وكتعاون مرات، ولكن ما تصلحش إلى كانت الطبلة مثقوبة ولا الودن كتوجع. سول الطبيب ولا الفارماسيان قبل ما تستعملها.',
        },
        {
          q: 'واش الجهاز السمعي كيزيد فالشمع؟',
          a: 'لبس الجهاز يقدر يساعد على تجمّع الشمع عند شي ناس. ولهذا كاينة المراقبة المنتظمة والتنظيف فالمركز.',
        },
        {
          q: 'كيفاش كنقولو oreille bouchée بالدارجة؟',
          a: '«الودن مسدودة». شوف [معجم السمع بالدارجة](/ar/lexique-audition-darija/).',
        },
      ],
      related: [
        { slug: 'perte-auditive', label: 'فهم ضعف السمع' },
        { slug: 'orl-ou-audioprothesiste', label: 'الطبيب أم أخصائي السمعيات؟' },
        { slug: 'acouphenes', label: 'طنين الأذن' },
      ],
    },
    en: {
      kicker: 'Understanding',
      title: 'Blocked Ear and Earwax: What to Do · AudioLik Casablanca',
      description:
        'Blocked ear, a full feeling, earwax: the causes, what not to do, and when to see an ENT doctor. AudioLik, Casablanca.',
      h1: 'Blocked ear: causes and what to do',
      lede:
        'An ear that feels full, muffled sound, sometimes your own voice echoing. It is one of the most common complaints, and one of the easiest to resolve — provided you do not go about it the wrong way.',
      sections: [
        {
          h2: 'The most common causes',
          list: [
            '*Earwax*: it builds up and blocks the canal, often after a shower makes it swell',
            '*A cold or ear infection*: the Eustachian tube stops opening and the ear stays under pressure',
            '*Pressure changes*: flying, diving, mountain roads',
            '*Hearing loss setting in*: some people describe it as a blocked ear rather than a drop in hearing',
          ],
        },
        {
          h2: 'What not to do',
          p: [
            'Put nothing in your ear canal. Cotton buds push wax deeper and pack it against the eardrum; ear candles have no proven effect and burn; a stick, key or match can injure the canal or perforate the eardrum. If you have ever had a perforated eardrum or ear surgery, do not rinse the ear without medical advice.',
          ],
        },
        {
          h2: 'Who removes earwax',
          p: [
            'Removing wax is the [ENT doctor](/en/orl-ou-audioprothesiste/)’s job: they have the instruments and a clear view of the eardrum. Our role as hearing aid specialists stops at otoscopy: we look into the canal, and if wax is in the way of the measurement we refer you before testing your hearing.',
          ],
        },
        {
          h2: 'When to seek care quickly',
          p: [
            'See a doctor promptly if the blocked ear comes with pain, discharge, dizziness, [tinnitus](/en/acouphenes/) on one side only, or if your hearing dropped suddenly. Sudden hearing loss is an emergency: every day counts.',
          ],
        },
        {
          h2: 'If the ear still feels blocked afterwards',
          p: [
            'That is common, and often a sign that wax was not the whole story. A [hearing assessment](/en/bilan-auditif-casablanca/) measures what you actually hear, ear by ear, and says whether [hearing loss](/en/perte-auditive/) is involved.',
          ],
        },
      ],
      faq: [
        {
          q: 'Do you remove earwax at the centre?',
          a: 'No, that is the ENT doctor’s work. We examine the canal with an otoscope and refer you if wax is blocking the hearing measurement.',
        },
        {
          q: 'Are pharmacy drops enough?',
          a: 'They soften wax and sometimes help, but are unsuitable if the eardrum is perforated or the ear is painful. Ask a doctor or pharmacist first.',
        },
        {
          q: 'Do hearing aids cause earwax build-up?',
          a: 'Wearing a device can encourage wax build-up in some people. That is one reason for regular checks and cleaning at the centre.',
        },
        {
          q: 'How do you say blocked ear in Moroccan Arabic?',
          a: '"Lwden msdouda" (الودن مسدودة). See our [hearing words in darija](/en/lexique-audition-darija/).',
        },
      ],
      related: [
        { slug: 'perte-auditive', label: 'Understanding hearing loss' },
        { slug: 'orl-ou-audioprothesiste', label: 'ENT or hearing aid specialist?' },
        { slug: 'acouphenes', label: 'Tinnitus' },
      ],
    },
  },
];
