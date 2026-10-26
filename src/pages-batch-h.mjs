/* Lot H — pages 23 et 24 (10/2026).
 *
 * 23 · marques-appareils-auditifs-maroc « oticon maroc », « widex maroc »,
 *      « starkey », « resound », « beltone », « siemens », « أجهزة أوتيكون »
 * 24 · choisir-son-audioprothesiste-casablanca « meilleur audioprothésiste
 *      casablanca », « comment choisir », « شكون أحسن أخصائي السمعيات »
 *
 * Règle particulière à ce lot : aucun nom de centre concurrent, aucune
 * comparaison nominative, aucun jugement sur un confrère. Les marques citées
 * le sont à titre informatif ; seules Signia et Phonak sont présentées comme
 * proposées au centre.
 * Mêmes règles que src/pages.mjs pour le reste : prix = uniquement les tarifs
 * indicatifs par appareil ; aucun montant de remboursement ; aucun modèle
 * promis en stock ; pas d'appareillage enfants ; aucun horaire en dur.
 */
export default [
  /* ======================================================================
     23 · Les marques d'appareils auditifs au Maroc
     ====================================================================== */
  {
    slug: 'marques-appareils-auditifs-maroc',
    fr: {
      kicker: 'Les marques',
      title: "Marques d'appareils auditifs au Maroc : s'y retrouver · AudioLik",
      description:
        "Signia, Phonak, Oticon, Widex, Starkey, ReSound, Siemens : qui fabrique quoi, ce qui change vraiment d'une marque à l'autre, et ce qui compte davantage que le logo. AudioLik, Casablanca.",
      h1: "Les marques d'appareils auditifs : s'y retrouver",
      lede:
        "Six groupes fabriquent la quasi-totalité des appareils auditifs vendus dans le monde, sous une quinzaine de marques. Voici qui est qui, ce qui les distingue réellement, et pourquoi le choix de la marque arrive en dernier.",
      sections: [
        {
          h2: 'Qui fabrique quoi',
          list: [
            '*Sonova* (Suisse) : Phonak, Unitron, Hansaton',
            '*WS Audiology* : Signia — qui a pris la suite des appareils auditifs Siemens — ainsi que Widex, Rexton et Audio Service',
            '*Demant* (Danemark) : Oticon, Bernafon, Philips Hearing Solutions',
            '*GN* (Danemark) : ReSound, Beltone, Jabra Enhance',
            '*Starkey* (États-Unis) : Starkey',
            '*Amplifon*, *Audika* et les enseignes de ce type ne sont pas des fabricants mais des réseaux de magasins',
          ],
        },
        {
          h2: 'Ce qui change vraiment entre deux marques',
          p: [
            "Moins que ce qu'on imagine. À niveau technologique égal, les grandes marques font globalement le même travail : les écarts portent sur la façon de traiter le bruit, sur l'application mobile, sur l'autonomie et sur le style des coques. Ce qui fait la différence pour vous, c'est le *niveau de gamme* — le nombre de canaux de réglage et la performance dans le bruit — et la qualité du réglage.",
            "C'est pour cela que les repères de prix au centre sont les mêmes quelle que soit la marque : [Essentiel à partir de 5 000 DH, Confort de 7 000 à 12 000 DH, Premium à partir de 14 000 DH](/prix-appareil-auditif-maroc/), par appareil.",
          ],
        },
        {
          h2: 'Les marques proposées chez AudioLik',
          p: [
            "Nous appareillons avec [Signia](/appareils-auditifs-signia/) et [Phonak](/appareils-auditifs-phonak/), sur l'ensemble de leurs gammes et dans toutes les formes : contour d'oreille, écouteur déporté, intra-auriculaire, rechargeable et Bluetooth. Deux marques suivies sérieusement valent mieux qu'un catalogue de dix noms : les logiciels de réglage, les accessoires et les pièces détachées demandent une vraie maîtrise.",
          ],
        },
        {
          h2: 'Si vous portez déjà une autre marque',
          p: [
            "Apportez votre appareil : le nettoyage et le dépannage se font sur place, quelle que soit la marque et même s'il n'a pas été acheté chez nous. Pour le réglage, cela dépend du modèle et de son âge — certains appareils se reprogramment, d'autres ne sont plus reconnus par les logiciels actuels. Voir l'[entretien et la réparation](/entretien-et-reparation-appareils-auditifs/).",
          ],
        },
        {
          h2: 'La bonne question à se poser',
          p: [
            "Ce n'est pas « quelle marque ? » mais « quel niveau de gamme pour ma vie à moi ? ». Elle se tranche après le [bilan auditif](/bilan-auditif-casablanca/), en regardant où vous avez réellement du mal : à table, au téléphone, en réunion, dans la rue. Nous comparons alors deux ou trois appareils, et vous les essayez.",
          ],
        },
      ],
      faq: [
        {
          q: 'Quelle est la meilleure marque d’appareil auditif ?',
          a: "Aucune ne l'emporte sur toutes les autres. À niveau technologique égal, les grandes marques se valent ; le réglage et le suivi pèsent davantage que le logo sur le résultat final.",
        },
        {
          q: 'Les appareils Siemens existent-ils encore ?',
          a: "L'activité audiologie de Siemens est devenue Signia. Si vous portiez un Siemens, Signia en est la suite directe.",
        },
        {
          q: 'Vendez-vous Oticon, Widex ou Starkey ?',
          a: "Nous appareillons avec Signia et Phonak. Les appareils d'autres marques sont les bienvenus pour le nettoyage et le dépannage, et nous regardons au cas par cas ce qui est possible côté réglage.",
        },
        {
          q: 'Une marque européenne est-elle meilleure qu’une américaine ?',
          a: "Non. Tous ces fabricants vendent dans le monde entier et partagent les mêmes principes de traitement du son. Le pays d'origine n'est pas un critère de choix.",
        },
      ],
      related: [
        { slug: 'appareils-auditifs-signia', label: 'Appareils Signia' },
        { slug: 'appareils-auditifs-phonak', label: 'Appareils Phonak' },
        { slug: 'prix-appareil-auditif-maroc', label: "Prix d'un appareil auditif" },
      ],
    },
    ar: {
      kicker: 'العلامات',
      title: 'علامات الأجهزة السمعية بالمغرب: كيفاش تفهم الفرق · أوديوليك',
      description:
        'Signia، Phonak، Oticon، Widex، Starkey، ReSound، سيمنس: شكون كيصنع أشنو، أشنو كيتبدّل فعلًا بين علامة وأخرى، وأشنو أهمّ من الشعار. أوديوليك، الدار البيضاء.',
      h1: 'علامات الأجهزة السمعية: كيفاش تفهم الفرق',
      lede:
        'ستّ مجموعات كتصنع تقريبًا كل الأجهزة السمعية فالعالم، تحت خمسطاش علامة. هاك شكون هو شكون، وأشنو كيفرّق بيناتهم بصحّ، وعلاش اختيار العلامة كيجي فالأخير.',
      sections: [
        {
          h2: 'شكون كيصنع أشنو',
          list: [
            '*Sonova* (سويسرا): Phonak، Unitron، Hansaton',
            '*WS Audiology*: Signia — اللي خدات مكان أجهزة سيمنس — وكذلك Widex وRexton وAudio Service',
            '*Demant* (الدانمارك): Oticon، Bernafon، Philips Hearing Solutions',
            '*GN* (الدانمارك): ReSound، Beltone، Jabra Enhance',
            '*Starkey* (الولايات المتحدة): Starkey',
            '*Amplifon* و*Audika* وأمثالهم ماشي شركات صناعة، ولكن شبكات ديال المحلات',
          ],
        },
        {
          h2: 'أشنو كيتبدّل بصحّ بين علامتين',
          p: [
            'أقلّ مما كيتخيّل الناس. فنفس المستوى التقني، العلامات الكبرى كتدير نفس الخدمة تقريبًا: الفروق كتكون فطريقة معالجة الضجيج، وفالتطبيق، وفالاستقلالية، وفشكل الهيكل. اللي كيفرق بالنسبة ليك هو *مستوى الفئة* — عدد قنوات الضبط والأداء فوسط الضجيج — وجودة الضبط.',
            'علاش المراجع ديال الأثمنة فالمركز هي نفسها مهما كانت العلامة: [الأساسية من 5 000 درهم، الراحة من 7 000 إلى 12 000، بريميوم من 14 000](/ar/prix-appareil-auditif-maroc/)، للجهاز الواحد.',
          ],
        },
        {
          h2: 'العلامات المتوفّرة فأوديوليك',
          p: [
            'كنأعملو بـ[Signia](/ar/appareils-auditifs-signia/) و[Phonak](/ar/appareils-auditifs-phonak/)، فكل الفئات وكل الأشكال: خلف الأذن، سمّاعة داخل القناة، داخل الأذن، قابلة للشحن وبالبلوتوث. جوج علامات متابعين بجدّية خير من كاطالوݣ ديال عشر أسماء: برامج الضبط والملحقات وقطع الغيار كتطلب تحكّم حقيقي.',
          ],
        },
        {
          h2: 'إلى كنتي لابس علامة أخرى',
          p: [
            'جيب الجهاز ديالك: التنظيف والإصلاح كيتمّو فعين المكان، مهما كانت العلامة وحتى إلى ما تشراش عندنا. أما الضبط فكيتوقف على الطراز وعمرو — شي أجهزة كتعاود تتبرمج، وشي أخرى ما بقاتش كتعرفها البرامج الحالية. شوف [الصيانة والإصلاح](/ar/entretien-et-reparation-appareils-auditifs/).',
          ],
        },
        {
          h2: 'السؤال الصحيح',
          p: [
            'ماشي «أشمن علامة؟» ولكن «أشمن فئة تناسب الحياة ديالي؟». وهاد السؤال كيتقرّر من بعد [فحص السمع](/ar/bilan-auditif-casablanca/)، بالنظر لفين كتلقى الصعوبة بصحّ: فالطابلة، فالتيليفون، فالاجتماع، فالزنقة. ومن بعد كنقارنو جهازين ولا تلاتة، وكتجربهم.',
          ],
        },
      ],
      faq: [
        {
          q: 'أشنو أحسن علامة ديال الأجهزة السمعية؟',
          a: 'ما كايناش وحدة كتغلب لكلشي. فنفس المستوى التقني، العلامات الكبرى متقاربة؛ والضبط والمتابعة كيوزنو أكثر من الشعار.',
        },
        {
          q: 'واش مازال كاينين أجهزة سيمنس؟',
          a: 'نشاط سيمنس فالسمع ولّا Signia. إلى كنتي لابس سيمنس، فـSignia هي الامتداد المباشر ديالو.',
        },
        {
          q: 'واش كتبيعو Oticon ولا Widex ولا Starkey؟',
          a: 'كنأعملو بـSignia وPhonak. وأجهزة العلامات الأخرى مرحّب بيها للتنظيف والإصلاح، وكنشوفو حالة بحالة أشنو ممكن فالضبط.',
        },
        {
          q: 'واش العلامة الأوروبية خير من الأمريكية؟',
          a: 'لا. كل هاد الشركات كتبيع فالعالم كامل وكتشارك نفس مبادئ معالجة الصوت. بلاد المنشأ ماشي معيار للاختيار.',
        },
      ],
      related: [
        { slug: 'appareils-auditifs-signia', label: 'أجهزة Signia' },
        { slug: 'appareils-auditifs-phonak', label: 'أجهزة Phonak' },
        { slug: 'prix-appareil-auditif-maroc', label: 'ثمن الجهاز السمعي' },
      ],
    },
    en: {
      kicker: 'Brands',
      title: 'Hearing Aid Brands in Morocco: Making Sense of Them · AudioLik',
      description:
        'Signia, Phonak, Oticon, Widex, Starkey, ReSound, Siemens: who makes what, what really differs between brands, and what matters more than the logo. AudioLik, Casablanca.',
      h1: 'Hearing aid brands: making sense of them',
      lede:
        'Six groups make almost every hearing aid sold worldwide, under about fifteen brand names. Here is who is who, what genuinely separates them, and why the brand is the last thing to decide.',
      sections: [
        {
          h2: 'Who makes what',
          list: [
            '*Sonova* (Switzerland): Phonak, Unitron, Hansaton',
            '*WS Audiology*: Signia — successor to Siemens hearing aids — plus Widex, Rexton and Audio Service',
            '*Demant* (Denmark): Oticon, Bernafon, Philips Hearing Solutions',
            '*GN* (Denmark): ReSound, Beltone, Jabra Enhance',
            '*Starkey* (United States): Starkey',
            '*Amplifon*, *Audika* and similar names are retail chains, not manufacturers',
          ],
        },
        {
          h2: 'What really differs between brands',
          p: [
            'Less than people assume. At the same technology level, the major brands do broadly the same job: the differences lie in how noise is handled, in the phone app, in battery life and in casing design. What makes the difference for you is the *range* — the number of adjustment channels and performance in noise — and the quality of the fitting.',
            'That is why our price benchmarks are the same whatever the brand: [Essential from MAD 5,000, Comfort MAD 7,000 to 12,000, Premium from MAD 14,000](/en/prix-appareil-auditif-maroc/), per device.',
          ],
        },
        {
          h2: 'The brands fitted at AudioLik',
          p: [
            'We fit [Signia](/en/appareils-auditifs-signia/) and [Phonak](/en/appareils-auditifs-phonak/), across their ranges and in every style: behind-the-ear, receiver-in-canal, in-the-ear, rechargeable and Bluetooth. Two brands properly supported beat a catalogue of ten names: fitting software, accessories and spare parts all demand real familiarity.',
          ],
        },
        {
          h2: 'If you already wear another brand',
          p: [
            'Bring your device in: cleaning and repairs are handled on site, whatever the brand and even if it was bought elsewhere. Reprogramming depends on the model and its age — some devices can still be adjusted, others are no longer supported by current software. See [servicing and repairs](/en/entretien-et-reparation-appareils-auditifs/).',
          ],
        },
        {
          h2: 'The question worth asking',
          p: [
            'Not "which brand?" but "which range for my life?". That is settled after the [hearing assessment](/en/bilan-auditif-casablanca/), by looking at where you actually struggle: at the table, on the phone, in meetings, in the street. We then compare two or three devices and you try them.',
          ],
        },
      ],
      faq: [
        {
          q: 'Which hearing aid brand is best?',
          a: 'None outperforms all the others. At equal technology level the major brands are comparable; fitting and follow-up weigh more than the logo on the final result.',
        },
        {
          q: 'Do Siemens hearing aids still exist?',
          a: 'The Siemens audiology business became Signia. If you wore a Siemens, Signia is its direct successor.',
        },
        {
          q: 'Do you sell Oticon, Widex or Starkey?',
          a: 'We fit Signia and Phonak. Devices from other brands are welcome for cleaning and repairs, and we look case by case at what is possible on the fitting side.',
        },
        {
          q: 'Is a European brand better than an American one?',
          a: 'No. All these manufacturers sell worldwide and share the same sound-processing principles. Country of origin is not a selection criterion.',
        },
      ],
      related: [
        { slug: 'appareils-auditifs-signia', label: 'Signia hearing aids' },
        { slug: 'appareils-auditifs-phonak', label: 'Phonak hearing aids' },
        { slug: 'prix-appareil-auditif-maroc', label: 'Hearing aid prices' },
      ],
    },
  },

  /* ======================================================================
     24 · Choisir son audioprothésiste à Casablanca
     ====================================================================== */
  {
    slug: 'choisir-son-audioprothesiste-casablanca',
    fr: {
      kicker: 'Bien choisir',
      title: 'Comment choisir son audioprothésiste à Casablanca · AudioLik',
      description:
        "Diplôme, matériel, essai, suivi, devis : les sept points à vérifier avant de confier son audition à un centre, et les questions à poser lors du premier rendez-vous. AudioLik, Casablanca.",
      h1: 'Comment choisir son audioprothésiste à Casablanca',
      lede:
        "Un appareil auditif se garde quatre à six ans, et sa réussite tient plus à celui qui le règle qu'à la boîte qu'on achète. Voici ce qu'il est légitime de vérifier avant de s'engager, où que vous alliez.",
      sections: [
        {
          h2: 'Les sept points à vérifier',
          list: [
            "*Le diplôme* : demandez où la personne a été formée. L'audioprothèse est un métier qui s'apprend, pas un rayon de magasin",
            "*Une cabine insonorisée* : une mesure faite dans une pièce ordinaire, avec le bruit de la rue, ne vaut pas grand-chose",
            "*Un audiogramme expliqué* : vous devez repartir en comprenant ce que vous entendez et ce que vous n'entendez plus",
            "*Un essai réel* : l'appareil se juge dans votre vie, à table et au téléphone, pas trois minutes au comptoir",
            '*Un devis écrit*, détaillé, que vous emportez pour réfléchir — sans signature le jour même',
            "*Le suivi* : demandez ce qui se passe après l'achat, combien de rendez-vous de réglage, et ce qui est compris",
            "*La disponibilité des pièces* : filtres, embouts, dépannage sur place, sans attendre un envoi",
          ],
        },
        {
          h2: 'Les signes qui doivent vous faire ralentir',
          p: [
            "Une remise valable « aujourd'hui seulement », une signature demandée le jour du bilan, un appareil proposé sans qu'on ait regardé dans votre oreille, ou une promesse de guérison : l'appareillage corrige, il ne soigne pas. Si un signe médical apparaît — douleur, écoulement, vertiges, baisse brutale — c'est le médecin [ORL](/orl-ou-audioprothesiste/) qu'il faut voir, et un professionnel sérieux vous le dira.",
          ],
        },
        {
          h2: 'Les questions à poser au premier rendez-vous',
          list: [
            'Qu’est-ce que mon audiogramme montre, concrètement ?',
            'Pourquoi me proposez-vous cette gamme plutôt qu’une autre ?',
            'Puis-je l’essayer avant de décider, et pendant combien de temps ?',
            'Combien de réglages sont prévus, et sont-ils compris dans le prix ?',
            'Que se passe-t-il si l’appareil tombe en panne dans deux ans ?',
            'Quels documents me faut-il pour mon [dossier de remboursement](/remboursement-appareils-auditifs-maroc/) ?',
          ],
        },
        {
          h2: 'Comment nous travaillons',
          p: [
            "Le centre est tenu par Safaa Soulimani Abdelhannane, audioprothésiste diplômée d'une université de Madrid, en exercice depuis 2023. Le [bilan auditif](/bilan-auditif-casablanca/) se fait en cabine insonorisée, avec ou sans rendez-vous, et les résultats vous sont expliqués avant de partir. Vous essayez deux ou trois appareils, vous repartez avec un devis détaillé, et rien n'est signé le jour même. Les tarifs par gamme sont publiés sur la page [prix](/prix-appareil-auditif-maroc/).",
          ],
        },
        {
          h2: 'Et les avis en ligne',
          p: [
            "Lisez-les, mais lisez surtout ce qu'ils racontent : un avis utile décrit une situation — le réglage repris trois fois, le rendez-vous obtenu vite, l'explication claire — plutôt qu'une note sans contexte. Et rien ne remplace une première visite : vous saurez en vingt minutes si l'on prend le temps de vous expliquer.",
          ],
        },
      ],
      faq: [
        {
          q: 'Quel est le meilleur audioprothésiste à Casablanca ?',
          a: "Il n'existe pas de réponse unique : le bon centre est celui qui mesure correctement, prend le temps d'expliquer et assure le suivi dans la durée. Les sept points ci-dessus permettent de juger par vous-même, où que vous alliez.",
        },
        {
          q: 'Faut-il une ordonnance pour un bilan auditif ?',
          a: "Non pour le bilan au centre. En revanche, un dossier de remboursement peut exiger une prescription : renseignez-vous auprès de votre organisme.",
        },
        {
          q: 'Peut-on changer d’audioprothésiste en cours de route ?',
          a: "Oui. Apportez vos appareils et votre audiogramme : nous regardons ce qui peut être repris, réglé ou remplacé.",
        },
        {
          q: 'Combien de temps dure le premier rendez-vous ?',
          a: 'Comptez environ une heure pour le rendez-vous de présentation des marques, des gammes et des solutions, essai compris.',
        },
      ],
      related: [
        { slug: 'audioprothesiste-casablanca', label: 'Audioprothésiste à Casablanca' },
        { slug: 'bilan-auditif-casablanca', label: 'Le bilan auditif' },
        { slug: 'prix-appareil-auditif-maroc', label: "Prix d'un appareil auditif" },
      ],
    },
    ar: {
      kicker: 'الاختيار الصحيح',
      title: 'كيفاش تختار أخصائي السمعيات بالدار البيضاء · أوديوليك',
      description:
        'الشهادة، المعدّات، التجربة، المتابعة، عرض السعر: سبع نقط خاصك تتحقق منهم قبل ما تسلّم سمعك لمركز، والأسئلة اللي تسول فالموعد الأول. أوديوليك، الدار البيضاء.',
      h1: 'كيفاش تختار أخصائي السمعيات بالدار البيضاء',
      lede:
        'الجهاز السمعي كيبقى معاك ما بين أربع وستّ سنين، ونجاحو كيتوقف على اللي كيضبطو أكثر من الصندوق اللي كتشري. هاك أشنو من حقّك تتحقق منه قبل ما تلتزم، فين ما مشيتي.',
      sections: [
        {
          h2: 'سبع نقط خاصك تتحقق منهم',
          list: [
            '*الشهادة*: سول فين تكوّن الشخص. تقويم السمع مهنة كتتعلّم، ماشي رفّ فمغازة',
            '*قاعة معزولة عن الصوت*: قياس مدار فبيت عادي، بضجيج الزنقة، ما عندو قيمة كبيرة',
            '*مخطّط سمع مشروح*: خاصك تمشي وأنت فاهم أشنو كتسمع وأشنو ما بقيتيش كتسمعو',
            '*تجربة حقيقية*: الجهاز كيتحاكم فحياتك، فالطابلة وفالتيليفون، ماشي ثلاث دقائق فالكونطوار',
            '*عرض سعر مكتوب* ومفصّل، كتمشي بيه تفكّر — بلا توقيع فنفس النهار',
            '*المتابعة*: سول أشنو كيوقع من بعد الشراء، شحال من موعد ديال الضبط، وأشنو داخل فالثمن',
            '*توفّر القطع*: المرشّحات، القوالب، والإصلاح فعين المكان بلا ما تسنّى شحنة',
          ],
        },
        {
          h2: 'العلامات اللي خاصك توقف عندها',
          p: [
            'تخفيض صالح «غير اليوم»، توقيع مطلوب فنهار الفحص، جهاز مقترح بلا ما حتى شافو فودنك، ولا وعد بالشفاء: التجهيز كيصحّح، ما كيعالجش. وإلى بانت علامة طبية — ألم، سيلان، دوار، انخفاض مفاجئ — فالطبيب [المختص فالأنف والأذن والحنجرة](/ar/orl-ou-audioprothesiste/) هو اللي خاصك تشوف، والمهني الجدّي غادي يقولها ليك.',
          ],
        },
        {
          h2: 'الأسئلة فالموعد الأول',
          list: [
            'أشنو كيبيّن مخطّط السمع ديالي، بالضبط؟',
            'علاش كتقترحو عليا هاد الفئة ماشي وحدة أخرى؟',
            'واش نقدر نجرّبو قبل ما نقرّر، وشحال من الوقت؟',
            'شحال من ضبط مبرمج، وواش داخلين فالثمن؟',
            'أشنو كيوقع إلا تخسّر الجهاز من هنا لعامين؟',
            'أشمن وثائق خاصني لـ[ملف الاسترجاع](/ar/remboursement-appareils-auditifs-maroc/)؟',
          ],
        },
        {
          h2: 'كيفاش كنخدمو',
          p: [
            'المركز كتسيّرو صفاء السوليماني عبد الحنان، أخصائية السمعيات المجازة من جامعة بمدريد، ممارسة من 2023. [فحص السمع](/ar/bilan-auditif-casablanca/) كيتدار فقاعة معزولة، بموعد ولا بلا موعد، والنتائج كتشرح ليك قبل ما تمشي. كتجرّب جوج ولا تلاتة ديال الأجهزة، وكتمشي بعرض سعر مفصّل، وبلا توقيع فنفس النهار. والأثمنة حسب الفئة منشورة فصفحة [الثمن](/ar/prix-appareil-auditif-maroc/).',
          ],
        },
        {
          h2: 'والآراء اللي فالأنترنت',
          p: [
            'قراها، ولكن قرا أكثر أشنو كتحكي: الرأي المفيد كيوصف وضعية — الضبط اللي تعاود ثلاث مرات، الموعد اللي تلقى بسرعة، الشرح الواضح — ماشي نقطة بلا سياق. وحتى حاجة ما كتعوّض الزيارة الأولى: فعشرين دقيقة غادي تعرف واش كياخدو الوقت باش يشرحو ليك.',
          ],
        },
      ],
      faq: [
        {
          q: 'شكون أحسن أخصائي سمعيات بالدار البيضاء؟',
          a: 'ما كاينش جواب واحد: المركز المزيان هو اللي كيقيس مزيان، وكياخد الوقت باش يشرح، وكيضمن المتابعة مع الوقت. السبع نقط اللي فوق كتخليك تحكم بنفسك، فين ما مشيتي.',
        },
        {
          q: 'واش خاصني وصفة طبية لفحص السمع؟',
          a: 'لا بالنسبة للفحص فالمركز. أما ملف الاسترجاع فيقدر يتطلّب وصفة: استفسر لدى صندوقك.',
        },
        {
          q: 'واش يمكن نبدّل أخصائي السمعيات فوسط الطريق؟',
          a: 'إيه. جيب الأجهزة ومخطّط السمع ديالك: كنشوفو أشنو يمكن يتعاود، يتضبط ولا يتبدّل.',
        },
        {
          q: 'شحال كياخد الموعد الأول؟',
          a: 'حسب على ساعة تقريبًا لموعد التعريف بالعلامات والفئات والحلول، بالتجربة.',
        },
      ],
      related: [
        { slug: 'audioprothesiste-casablanca', label: 'أخصائي السمعيات بالدار البيضاء' },
        { slug: 'bilan-auditif-casablanca', label: 'فحص السمع' },
        { slug: 'prix-appareil-auditif-maroc', label: 'ثمن الجهاز السمعي' },
      ],
    },
    en: {
      kicker: 'Choosing well',
      title: 'How to Choose a Hearing Aid Specialist in Casablanca · AudioLik',
      description:
        'Qualification, equipment, trial, follow-up, written quote: seven things to check before trusting a centre with your hearing, and the questions to ask at the first appointment.',
      h1: 'How to choose a hearing aid specialist in Casablanca',
      lede:
        'A hearing aid stays with you four to six years, and its success owes more to the person adjusting it than to the box you buy. Here is what you are entitled to check before committing, wherever you go.',
      sections: [
        {
          h2: 'Seven things to check',
          list: [
            '*Qualification*: ask where the person trained. Fitting hearing aids is a profession, not a shop shelf',
            '*A soundproof booth*: a measurement taken in an ordinary room, with street noise, is worth little',
            '*An explained audiogram*: you should leave understanding what you hear and what you no longer hear',
            '*A real trial*: a device is judged in your life, at the table and on the phone, not three minutes at a counter',
            '*A written, itemised quote* you take away to think about — no signature on the day',
            '*Follow-up*: ask what happens after the purchase, how many adjustment appointments, and what is included',
            '*Parts availability*: filters, ear tips and on-site repairs, without waiting for a shipment',
          ],
        },
        {
          h2: 'Signs to slow down for',
          p: [
            'A discount valid "today only", a signature asked for on assessment day, a device proposed without anyone looking inside your ear, or a promise of a cure: fitting corrects, it does not cure. If a medical sign appears — pain, discharge, dizziness, a sudden drop — the [ENT doctor](/en/orl-ou-audioprothesiste/) is who you need, and a serious professional will say so.',
          ],
        },
        {
          h2: 'Questions for the first appointment',
          list: [
            'What does my audiogram actually show?',
            'Why are you suggesting this range rather than another?',
            'Can I try it before deciding, and for how long?',
            'How many adjustments are planned, and are they included?',
            'What happens if the device fails in two years?',
            'What documents do I need for my [reimbursement file](/en/remboursement-appareils-auditifs-maroc/)?',
          ],
        },
        {
          h2: 'How we work',
          p: [
            'The centre is run by Safaa Soulimani Abdelhannane, trained at a university in Madrid and practising since 2023. The [hearing assessment](/en/bilan-auditif-casablanca/) takes place in a soundproof booth, with or without an appointment, and the results are explained before you leave. You try two or three devices, leave with an itemised quote, and nothing is signed on the day. Prices by range are published on the [prices](/en/prix-appareil-auditif-maroc/) page.',
          ],
        },
        {
          h2: 'And online reviews',
          p: [
            'Read them, but read what they describe: a useful review tells a story — the fitting adjusted three times, an appointment obtained quickly, a clear explanation — rather than a rating with no context. And nothing replaces a first visit: twenty minutes tell you whether people take the time to explain.',
          ],
        },
      ],
      faq: [
        {
          q: 'Who is the best hearing aid specialist in Casablanca?',
          a: 'There is no single answer: the right centre is the one that measures properly, takes time to explain and supports you over the years. The seven points above let you judge for yourself, wherever you go.',
        },
        {
          q: 'Do I need a prescription for a hearing assessment?',
          a: 'Not for the assessment at the centre. A reimbursement file may require one: check with your scheme.',
        },
        {
          q: 'Can I change hearing aid specialist midway?',
          a: 'Yes. Bring your devices and your audiogram: we look at what can be reused, adjusted or replaced.',
        },
        {
          q: 'How long is the first appointment?',
          a: 'Allow about an hour for the appointment presenting brands, ranges and solutions, trial included.',
        },
      ],
      related: [
        { slug: 'audioprothesiste-casablanca', label: 'Hearing aid specialist in Casablanca' },
        { slug: 'bilan-auditif-casablanca', label: 'Hearing assessment' },
        { slug: 'prix-appareil-auditif-maroc', label: 'Hearing aid prices' },
      ],
    },
  },
];
