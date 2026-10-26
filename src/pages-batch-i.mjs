/* Lot I — page 25 (26/10/2026).
 *
 * 25 · appareil-auditif-enfant-casablanca « appareil auditif enfant »,
 *      « سماعات الأذن للأطفال », « ولدي ما كيسمعش », « ضعف السمع عند الأطفال »,
 *      « hearing aids for children morocco »
 *
 * Changement de règle : business.claims.childrenFitting est passé à true le
 * 26/10/2026 (confirmé par le centre). L'interdiction de mentionner
 * l'appareillage des enfants, inscrite dans les en-têtes des lots C à H, est
 * donc levée à partir de ce lot.
 * Les autres règles de src/pages.mjs restent valables : prix = uniquement les
 * tarifs indicatifs par appareil ; aucun montant de remboursement ; aucun
 * modèle promis en stock ; aucun horaire écrit en dur ; le diagnostic reste
 * l'affaire du médecin.
 */
export default [
  {
    slug: 'appareil-auditif-enfant-casablanca',
    fr: {
      kicker: 'Les enfants',
      title: "Appareil auditif pour enfant à Casablanca · AudioLik",
      description:
        "Appareillage auditif de l'enfant à Casablanca : les signes qui alertent selon l'âge, le parcours avec le médecin ORL, le déroulé des mesures, les embouts à renouveler et le suivi. AudioLik, Les Princesses.",
      h1: "Appareiller un enfant à Casablanca",
      lede:
        "Chez l'enfant, l'audition porte le langage, l'école et la vie avec les autres. Quand une perte auditive est confirmée, chaque mois compte. Voici comment se passe l'appareillage d'un enfant au centre, et ce qui le distingue de celui d'un adulte.",
      sections: [
        {
          h2: 'Les signes, selon l’âge',
          list: [
            "*Chez le bébé* : il ne sursaute pas aux bruits forts, ne tourne pas la tête vers une voix, le babillage s'installe puis s'appauvrit",
            "*Vers deux ou trois ans* : le langage tarde, les mots sont déformés, il réagit quand il vous voit mais pas quand vous l'appelez de dos",
            "*À l'école* : il fait répéter, paraît distrait ou dans la lune, confond des mots proches, se fatigue vite en classe",
            "*À tout âge* : il monte le son de la télévision, répond à côté, s'isole quand plusieurs personnes parlent",
          ],
          p: [
            "Ces signes ne disent pas qu'il y a une perte auditive — un enfant distrait est souvent simplement distrait. Mais ils justifient toujours de vérifier.",
          ],
        },
        {
          h2: 'Le parcours commence chez le médecin',
          p: [
            "Chez l'enfant, le diagnostic appartient au médecin : le pédiatre, puis le médecin [ORL](/orl-ou-audioprothesiste/), qui examine les oreilles et prescrit les examens adaptés à l'âge. Beaucoup de pertes auditives de l'enfant ont une cause qui se traite, et il faut l'écarter avant d'envisager un appareil.",
            "Notre rôle d'audioprothésiste commence après ce diagnostic : mesurer précisément, choisir l'appareil avec vous, le régler et l'ajuster dans la durée.",
          ],
        },
        {
          h2: 'Les mesures chez l’enfant : autrement',
          p: [
            "On ne mesure pas un enfant comme un adulte. Selon son âge, le test prend la forme d'un jeu : il range un jeton dans une boîte quand il entend le son, il tourne la tête vers une image qui s'anime. Il faut de la patience, parfois plusieurs séances courtes plutôt qu'une longue.",
            "Le réglage, lui, ne se fait pas sur ce que l'enfant dit entendre : il se calcule à partir de son audiogramme et du volume réel de son conduit, qui est bien plus petit que celui d'un adulte. Un même appareil réglé « comme pour un adulte » délivrerait un son trop fort dans une petite oreille.",
          ],
        },
        {
          h2: 'Les embouts : le vrai sujet',
          p: [
            "C'est le point qui surprend le plus les parents. L'oreille d'un enfant grandit vite, et l'embout sur mesure, lui, ne grandit pas. Un embout devenu trop petit laisse le son s'échapper : l'appareil siffle, et l'enfant entend moins bien qu'il ne le devrait.",
            "Il faut donc le renouveler régulièrement — souvent plusieurs fois par an chez le jeune enfant, plus espacé ensuite. Un sifflement qui apparaît sans raison est presque toujours un embout à refaire : passez au centre, c'est rapide. Les embouts existent en couleurs, ce qui aide beaucoup à l'acceptation.",
          ],
        },
        {
          h2: 'À la maison et à l’école',
          list: [
            "*Les piles et les petites pièces* se rangent hors de portée : elles sont dangereuses si un enfant les avale",
            "*Le bruit de fond* : couper la télévision pendant les repas et les devoirs change énormément les choses",
            "*En classe*, une place devant et sur le côté du tableau permet de voir le visage de l'enseignant ; prévenir l'école aide, et les enseignants coopèrent en général très bien",
            "*Parler en face*, à hauteur d'enfant, sans crier : crier déforme les mots plus qu'il ne les éclaire",
            "*Le soir*, l'appareil se range dans sa boîte, ouvert, après un passage de chiffon sec",
          ],
        },
        {
          h2: 'Le suivi, année après année',
          p: [
            "Un enfant appareillé revient régulièrement : pour contrôler l'audition, refaire les embouts, ajuster les réglages à mesure qu'il grandit et que son langage se développe. C'est ce suivi, plus que l'appareil lui-même, qui fait le résultat.",
            "Côté budget, les repères sont les mêmes que pour un adulte, par appareil : Essentiel à partir de 5 000 DH, Confort de 7 000 à 12 000 DH, Premium à partir de 14 000 DH. Le détail est sur la page [prix](/prix-appareil-auditif-maroc/), et une partie peut être prise en charge selon votre couverture — voir le [remboursement](/remboursement-appareils-auditifs-maroc/).",
          ],
        },
        {
          h2: 'Venir avec votre enfant',
          p: [
            "Le centre est au 106B rue Al Jounaid, quartier Les Princesses, à Maârif. Venez avec le compte rendu du médecin et, s'il existe déjà, l'audiogramme. Prévoyez du temps : avec un enfant, mieux vaut une séance tranquille qu'une séance rapide. Les deux parents sont les bienvenus, et les frères et sœurs aussi.",
          ],
        },
      ],
      faq: [
        {
          q: 'À partir de quel âge peut-on appareiller un enfant ?',
          a: "Très tôt lorsque le diagnostic médical est posé : plus l'oreille reçoit les sons tôt, mieux le langage se construit. L'âge exact et le moment sont décidés avec le médecin qui suit l'enfant.",
        },
        {
          q: 'Mon enfant va-t-il accepter de le porter ?',
          a: "Au début, souvent par petites périodes. Cela s'installe avec le temps, un embout bien ajusté et des adultes qui n'en font pas une affaire. Les embouts de couleur aident, et l'habitude vient plus vite qu'on ne le craint.",
        },
        {
          q: 'Pourquoi faut-il refaire les embouts si souvent ?',
          a: "Parce que l'oreille grandit. Un embout trop petit laisse fuir le son et fait siffler l'appareil. Chez le jeune enfant, cela peut représenter plusieurs renouvellements par an.",
        },
        {
          q: 'Combien coûte un appareil auditif pour un enfant ?',
          a: "Les mêmes repères que pour un adulte, par appareil : à partir de 5 000 DH en Essentiel, 7 000 à 12 000 DH en Confort, à partir de 14 000 DH en Premium. Le prix ne dépend pas de l'âge mais du niveau technologique.",
        },
        {
          q: 'Faut-il prévenir l’école ?',
          a: "C'est conseillé : une place adaptée dans la classe et un enseignant informé changent beaucoup la journée d'un enfant appareillé.",
        },
        {
          q: 'Mon bébé n’a pas eu de dépistage à la naissance, est-ce grave ?',
          a: "Non, mais parlez-en au pédiatre, qui dira quels examens faire. Devant le moindre doute sur l'audition d'un bébé, il ne faut pas attendre de voir si « ça vient tout seul ».",
        },
      ],
      related: [
        { slug: 'perte-auditive', label: 'Comprendre la perte auditive' },
        { slug: 'orl-ou-audioprothesiste', label: 'ORL ou audioprothésiste ?' },
        { slug: 'prix-appareil-auditif-maroc', label: "Prix d'un appareil auditif" },
      ],
    },
    ar: {
      kicker: 'الأطفال',
      title: 'سماعات الأذن للأطفال بالدار البيضاء · أوديوليك',
      description:
        'تجهيز الأطفال بالسماعات الطبية بالدار البيضاء: العلامات حسب السن، المسار مع الطبيب، كيفاش كيدوز القياس، القوالب اللي خاصها تتبدل، والمتابعة. أوديوليك، حي الأميرات.',
      h1: 'تجهيز الطفل بسماعة طبية بالدار البيضاء',
      lede:
        'عند الطفل، السمع هو اللي كيحمل اللغة والمدرسة والعلاقة مع الناس. وملي كيتأكد ضعف السمع، كل شهر ليه أهميته. هاك كيفاش كيدوز تجهيز الطفل فالمركز، وأشنو كيفرقو على تجهيز الكبار.',
      sections: [
        {
          h2: 'العلامات، حسب السن',
          list: [
            '*عند الرضيع*: ما كيتفزّعش من الأصوات القوية، ما كيدورش راسو نحو الصوت، المناغاة كتبدا ومن بعد كتنقص',
            '*فحوالي سنتين ولا ثلاثة*: اللغة كتتأخر، الكلمات مشوّهة، كيجاوب ملي كيشوفك وماشي ملي كتعيّط ليه من ضهرو',
            '*فالمدرسة*: كيطلب الإعادة، كيبان شارد، كيخلّط بين كلمات متشابهة، وكيعيا بسرعة فالقسم',
            '*فأي سن*: كيرفع صوت التلفاز، كيجاوب بما لا علاقة له، وكينعزل ملي كيهضرو بزاف ديال الناس',
          ],
          p: [
            'هاد العلامات ما كتقولش بالضرورة أن كاين ضعف السمع — الطفل الشارد غالبًا غير شارد. ولكن كتستاهل دائمًا أنك تتحقق.',
          ],
        },
        {
          h2: 'المسار كيبدا عند الطبيب',
          p: [
            'عند الطفل، التشخيص من اختصاص الطبيب: طبيب الأطفال، ومن بعد [طبيب الأنف والأذن والحنجرة](/ar/orl-ou-audioprothesiste/)، اللي كيفحص الودنين وكيطلب الفحوص المناسبة للسن. بزاف ديال حالات ضعف السمع عند الأطفال عندها سبب كيتعالج، وخاص يتزاح قبل ما نفكرو فالسماعة.',
            'الدور ديالنا كأخصائي سمعيات كيبدا من بعد هاد التشخيص: القياس بدقة، اختيار الجهاز معاك، ضبطه وملاءمته مع الوقت.',
          ],
        },
        {
          h2: 'القياس عند الطفل: بطريقة أخرى',
          p: [
            'ما كنقيسوش الطفل بحال الكبير. حسب السن، الاختبار كيولي لعبة: كيحط قطعة فصندوق ملي كيسمع الصوت، ولا كيدور راسو نحو صورة كتتحرك. وكيتطلب الصبر، ومرات حصص قصيرة متعددة بدل وحدة طويلة.',
            'أما الضبط فما كيتبناش على أشنو كيقول الطفل، ولكن كيتحسب من مخطّط سمعه ومن الحجم الحقيقي لقناة أذنه، اللي بزاف صغيرة على ديال الكبير. نفس الجهاز مضبوط «بحال للكبار» غادي يعطي صوت قوي بزاف فودن صغيرة.',
          ],
        },
        {
          h2: 'القوالب: هادي هي النقطة الأساسية',
          p: [
            'هادي هي الحاجة اللي كتفاجئ الوالدين. ودن الطفل كتكبر بسرعة، والقالب ما كيكبرش معاها. القالب اللي ولّا صغير كيخلي الصوت يهرب: السماعة كتصفّر، والطفل كيسمع أقل مما خاصو.',
            'ولهذا خاصو يتبدّل بانتظام — غالبًا بزاف ديال المرات فالعام عند الطفل الصغير، ومن بعد كيتباعد. والصفير اللي كيبان بلا سبب شبه دائمًا هو قالب خاصو يتعاود: دوز للمركز، كيمشي بسرعة. والقوالب كاينة بالألوان، وهادشي كيعاون بزاف على القبول.',
          ],
        },
        {
          h2: 'فالدار وفالمدرسة',
          list: [
            '*البطاريات والقطع الصغيرة* كيتحطو بعيد على يد الطفل: خطيرين إلا تبلعو',
            '*ضجيج الخلفية*: طفي التلفاز فوقت الماكلة والواجبات، هادشي كيبدّل بزاف',
            '*فالقسم*، بلاصة قدّام وعلى جنب السبورة كتخلي الطفل يشوف وجه الأستاذ؛ وإخبار المدرسة كيعاون، والأساتذة غالبًا كيتعاونو مزيان',
            '*هضر فالوجه*، على قد طول الطفل، وبلا ما تعيّط: الغويت كيشوّه الكلمات أكثر ما كيوضّحها',
            '*فالليل*، السماعة كتمسح بخرقة ناشفة وكتبقى فالعلبة محلولة',
          ],
        },
        {
          h2: 'المتابعة، عام بعد عام',
          p: [
            'الطفل المجهّز كيرجع بانتظام: لمراقبة السمع، تبديل القوالب، وملاءمة الضبط مع نموّه وتطوّر لغته. وهاد المتابعة، أكثر من الجهاز نفسه، هي اللي كتعطي النتيجة.',
            'أما الميزانية فنفس المراجع ديال الكبار، للجهاز الواحد: الأساسية من 5 000 درهم، الراحة من 7 000 إلى 12 000، بريميوم من 14 000. التفاصيل فصفحة [الثمن](/ar/prix-appareil-auditif-maroc/)، وجزء يمكن يتعاود حسب التغطية — شوف [الاسترجاع](/ar/remboursement-appareils-auditifs-maroc/).',
          ],
        },
        {
          h2: 'جي مع ولدك',
          p: [
            'المركز ف106B زنقة الجنيد، حي الأميرات، بالمعاريف. جيب معاك تقرير الطبيب، وإلى كان كاين من قبل، مخطّط السمع. وخد وقتك: مع الطفل، حصة هادئة خير من حصة مزروبة. الوالدين بجوج مرحّب بيهم، وحتى الخوت.',
          ],
        },
      ],
      faq: [
        {
          q: 'من أشمن سن يمكن نجهّزو الطفل بسماعة؟',
          a: 'بكري بزاف ملي يتأكد التشخيص الطبي: كل ما وصلات الأصوات للودن بكري، كل ما تبنات اللغة مزيان. والسن الدقيق كيتقرّر مع الطبيب اللي كيتابع الطفل.',
        },
        {
          q: 'واش ولدي غادي يقبل يلبسها؟',
          a: 'فالبداية، غالبًا شوية بشوية. وكتولي عادة مع الوقت، وقالب مضبوط، ووالدين ما كيديروهاش قضية. والقوالب الملوّنة كتعاون، والتعوّد كيجي أسرع مما كتخاف.',
        },
        {
          q: 'علاش خاص القالب يتبدّل بزاف؟',
          a: 'حيث الودن كتكبر. القالب اللي ولّا صغير كيخلي الصوت يهرب وكيخلي السماعة تصفّر. وعند الطفل الصغير هادشي يقدر يوقع بزاف ديال المرات فالعام.',
        },
        {
          q: 'شحال كتسوى السماعة للطفل؟',
          a: 'نفس المراجع ديال الكبار، للجهاز الواحد: من 5 000 درهم فالأساسية، من 7 000 إلى 12 000 فالراحة، ومن 14 000 فبريميوم. الثمن ما كيتوقفش على السن ولكن على المستوى التقني.',
        },
        {
          q: 'واش خاص نخبّرو المدرسة؟',
          a: 'ينصح بهادشي: بلاصة مناسبة فالقسم وأستاذ على علم كيبدّلو نهار الطفل بزاف.',
        },
        {
          q: 'ولدي ما دازش من فحص السمع فالولادة، واش خطير؟',
          a: 'لا، ولكن هضر مع طبيب الأطفال، هو اللي غادي يقول أشمن فحوص خاصّين. وعند أي شك فسمع الرضيع، ما يتسناش باش نشوفو واش «غادي يجي بوحدو».',
        },
      ],
      related: [
        { slug: 'perte-auditive', label: 'فهم ضعف السمع' },
        { slug: 'orl-ou-audioprothesiste', label: 'الطبيب أم أخصائي السمعيات؟' },
        { slug: 'prix-appareil-auditif-maroc', label: 'ثمن الجهاز السمعي' },
      ],
    },
    en: {
      kicker: 'Children',
      title: 'Hearing Aids for Children in Casablanca · AudioLik',
      description:
        'Fitting hearing aids for children in Casablanca: the signs by age, the path through the ENT doctor, how testing works with a child, ear moulds to renew, and long-term follow-up. AudioLik.',
      h1: 'Fitting a child with hearing aids in Casablanca',
      lede:
        'In a child, hearing carries language, school and life with others. Once hearing loss is confirmed, every month counts. Here is how fitting a child works at the centre, and what makes it different from fitting an adult.',
      sections: [
        {
          h2: 'The signs, by age',
          list: [
            '*In a baby*: no startle at loud sounds, no turning towards a voice, babbling that starts then fades',
            '*Around two or three*: late speech, distorted words, responding when they see you but not when called from behind',
            '*At school*: asking for repetition, seeming distracted, confusing similar words, tiring quickly in class',
            '*At any age*: turning the TV up, answering beside the point, withdrawing when several people talk',
          ],
          p: [
            'These signs do not prove hearing loss — a distracted child is often just distracted. But they always justify checking.',
          ],
        },
        {
          h2: 'The path starts with the doctor',
          p: [
            'For a child, diagnosis belongs to the doctor: the paediatrician, then the [ENT specialist](/en/orl-ou-audioprothesiste/), who examines the ears and orders the tests suited to the age. Many childhood hearing losses have a treatable cause, and it must be ruled out before considering a device.',
            'Our role as hearing aid specialists begins after that diagnosis: measuring precisely, choosing the device with you, programming it and adjusting it over time.',
          ],
        },
        {
          h2: 'Testing a child works differently',
          p: [
            'A child is not tested like an adult. Depending on age, the test becomes a game: dropping a token in a box on hearing a sound, turning towards a picture that lights up. It takes patience, and sometimes several short sessions rather than one long one.',
            "Programming is not based on what the child says they hear: it is calculated from their audiogram and from the real volume of their ear canal, far smaller than an adult's. The same device set 'as for an adult' would deliver too much sound in a small ear.",
          ],
        },
        {
          h2: 'Ear moulds: the real issue',
          p: [
            'This is what surprises parents most. A child’s ear grows fast; the custom mould does not. A mould that has become too small lets sound escape: the device whistles and the child hears less than they should.',
            'So it has to be renewed regularly — often several times a year in a young child, less frequently later. Whistling that appears for no reason is almost always a mould to remake: come by the centre, it is quick. Moulds come in colours, which helps a great deal with acceptance.',
          ],
        },
        {
          h2: 'At home and at school',
          list: [
            '*Batteries and small parts* are kept out of reach: they are dangerous if swallowed',
            '*Background noise*: turning off the TV during meals and homework changes a great deal',
            '*In class*, a seat near the front and to the side lets the child see the teacher’s face; telling the school helps, and teachers generally cooperate well',
            '*Speak face to face*, at the child’s height, without shouting: shouting distorts words more than it clarifies them',
            '*At night*, the device is wiped with a dry cloth and left open in its box',
          ],
        },
        {
          h2: 'Follow-up, year after year',
          p: [
            'A fitted child comes back regularly: to check hearing, remake moulds and adjust settings as they grow and their language develops. That follow-up, more than the device itself, produces the result.',
            'On budget, the benchmarks are the same as for an adult, per device: Essential from MAD 5,000, Comfort MAD 7,000 to 12,000, Premium from MAD 14,000. Details on the [prices](/en/prix-appareil-auditif-maroc/) page, and part may be covered — see [reimbursement](/en/remboursement-appareils-auditifs-maroc/).',
          ],
        },
        {
          h2: 'Coming in with your child',
          p: [
            'The centre is at 106B rue Al Jounaid, Les Princesses, Maârif. Bring the doctor’s report and, if one already exists, the audiogram. Allow time: with a child, a calm session beats a quick one. Both parents are welcome, and siblings too.',
          ],
        },
      ],
      faq: [
        {
          q: 'From what age can a child be fitted?',
          a: 'Very early once the medical diagnosis is made: the sooner the ear receives sound, the better language develops. The exact age and timing are decided with the doctor following your child.',
        },
        {
          q: 'Will my child accept wearing it?',
          a: 'At first, often in short stretches. It settles with time, a well-fitted mould and adults who do not make an issue of it. Coloured moulds help, and children adapt faster than parents fear.',
        },
        {
          q: 'Why do moulds need remaking so often?',
          a: 'Because the ear grows. A mould that is too small lets sound leak and makes the device whistle. In a young child that can mean several renewals a year.',
        },
        {
          q: 'How much does a hearing aid for a child cost?',
          a: 'The same benchmarks as for an adult, per device: from MAD 5,000 Essential, MAD 7,000 to 12,000 Comfort, from MAD 14,000 Premium. Price follows the technology level, not the age.',
        },
        {
          q: 'Should the school be told?',
          a: 'It is advisable: a suitable seat in class and an informed teacher change a fitted child’s day considerably.',
        },
        {
          q: 'My baby had no newborn screening — does that matter?',
          a: 'It is not a problem in itself, but raise it with your paediatrician, who will say which tests are needed. With any doubt about a baby’s hearing, do not wait to see whether it resolves on its own.',
        },
      ],
      related: [
        { slug: 'perte-auditive', label: 'Understanding hearing loss' },
        { slug: 'orl-ou-audioprothesiste', label: 'ENT or hearing aid specialist?' },
        { slug: 'prix-appareil-auditif-maroc', label: 'Hearing aid prices' },
      ],
    },
  },
];
