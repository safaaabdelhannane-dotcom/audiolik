/**
 * AudioLik — pages 11 et 12.
 *
 *  11 · test-auditif-en-ligne   Le test de dépistage, jusqu'ici enfermé dans la
 *       page d'accueil, obtient sa propre URL. C'est une requête à part entière
 *       (« test auditif en ligne », « اختبار السمع أونلاين ») et une page à
 *       laquelle on peut envoyer un lien depuis Facebook ou WhatsApp.
 *       widget: 'quiz' fait remonter le questionnaire lui-même dans la page.
 *
 *  12 · remboursement-appareils-auditifs-maroc   Ce que couvre l'AMO, la CNSS,
 *       la CNOPS, les FAR, une mutuelle d'entreprise — et surtout : quels
 *       papiers réunir, dans quel ordre.
 *
 * RÈGLE TENUE ICI PLUS QU'AILLEURS : aucun montant, aucun taux, aucun plafond.
 * Les barèmes changent, diffèrent d'un régime à l'autre et d'un dossier à
 * l'autre. Une page qui annonce un chiffre faux fait plus de mal que de bien —
 * le patient arrive avec une attente que le centre ne peut pas tenir. On décrit
 * donc la démarche et les pièces, et on renvoie l'estimation au centre et à
 * l'organisme.
 */

export const batchD = [
  /* ======================================================================
     11 · Test auditif en ligne
     ====================================================================== */
  {
    slug: 'test-auditif-en-ligne',
    widget: 'quiz',
    fr: {
      kicker: 'Test en ligne',
      title: 'Test auditif en ligne gratuit · AudioLik Casablanca',
      description:
        "Test auditif en ligne gratuit, en trois minutes et sans inscription. Six situations du quotidien pour savoir si un bilan auditif s'impose. AudioLik, Casablanca, Les Princesses (Maârif).",
      h1: 'Test auditif en ligne',
      lede:
        "Six questions, trois minutes, aucune inscription. Ce test ne mesure pas votre audition : il vous dit si ce que vous vivez au quotidien mérite un vrai bilan, réalisé au centre.",
      sections: [
        {
          h2: 'À quoi sert ce test',
          p: [
            "La perte auditive s'installe lentement. Elle ne fait pas mal, elle ne prévient pas, et l'oreille apprend à faire semblant : on devine la fin des phrases, on augmente le son sans y penser, on évite les endroits bruyants. Le premier signal n'est presque jamais un son manqué — c'est de la fatigue en fin de journée.",
            "Ce questionnaire reprend les situations où cette fatigue se voit : le restaurant, le téléphone, la télévision, les voix aiguës. Il compte le nombre de fois où vous vous reconnaissez, et il en tire une seule conclusion : *faut-il consulter, oui ou non*.",
          ],
        },
        {
          h2: 'Ce qu’il ne fait pas',
          p: [
            "Un test en ligne ne remplace aucun examen. Votre navigateur ne connaît ni le volume réel de vos écouteurs, ni le bruit de la pièce où vous êtes, ni l'état de votre conduit auditif. Aucun test en ligne, chez nous ou ailleurs, ne peut donner un audiogramme.",
            "Il ne dit pas non plus *pourquoi* vous entendez moins. Un bouchon de cérumen, une otite ancienne, un traumatisme sonore et une presbyacousie donnent la même gêne et n'appellent pas du tout la même réponse. Seul un examen au centre, complété si besoin par un avis ORL, fait la différence.",
          ],
        },
        {
          h2: 'Après le test',
          p: [
            "Si le résultat vous invite à consulter, la suite est un bilan auditif au centre : un entretien, un examen du conduit, une audiométrie tonale puis vocale, et une explication des courbes obtenues. Ce bilan est gratuit et sans engagement — on peut très bien en ressortir avec « votre audition va bien, revenez dans deux ans ».",
            "Vous pouvez prendre rendez-vous par téléphone ou par WhatsApp. Précisez si vous préférez être reçu en arabe, en français ou en anglais.",
          ],
          list: [
            'Bilan auditif gratuit, sur rendez-vous',
            "Résultats expliqués le jour même, courbes à l'appui",
            'Aucun engagement à la sortie',
            'Accueil en arabe, français et anglais',
          ],
        },
      ],
      faq: [
        {
          q: 'Le test en ligne est-il vraiment gratuit ?',
          a: "Oui, et sans inscription : rien à créer, aucune adresse à laisser. Le bilan auditif au centre est lui aussi gratuit, sur rendez-vous.",
        },
        {
          q: 'Faut-il un casque pour le faire ?',
          a: "Non. Ce test ne diffuse aucun son : il porte sur des situations de la vie courante. Vous pouvez le faire dans le métro comme au calme, le résultat sera le même.",
        },
        {
          q: "Mon résultat est bon, dois-je quand même consulter ?",
          a: "Si vous n'avez aucune gêne, non. Mais si un proche vous fait remarquer que la télévision est forte, ou si vous avez travaillé des années dans le bruit, un bilan de référence vaut le déplacement : il servira de point de comparaison plus tard.",
        },
        {
          q: 'Mes réponses sont-elles enregistrées ?',
          a: "Non. Le calcul se fait dans votre navigateur, rien n'est envoyé ni conservé. Si vous choisissez de nous écrire sur WhatsApp à la fin, vous seul décidez de ce que vous nous transmettez.",
        },
      ],
      related: [
        { slug: 'bilan-auditif-casablanca', label: 'Le bilan auditif au centre' },
        { slug: 'perte-auditive', label: 'Comprendre la perte auditive' },
        { slug: 'centre-de-correction-auditive-casablanca', label: 'Le centre' },
      ],
    },

    ar: {
      kicker: 'اختبار أونلاين',
      title: 'اختبار السمع أونلاين مجانًا · AudioLik الدار البيضاء',
      description:
        'اختبار سمع أونلاين مجاني في ثلاث دقائق، دون تسجيل. ست حالات من الحياة اليومية لمعرفة إن كان فحص السمع ضروريًا. AudioLik، الدار البيضاء، الأميرات (المعاريف).',
      h1: 'اختبار السمع أونلاين',
      lede:
        'ستة أسئلة، ثلاث دقائق، دون أي تسجيل. هذا الاختبار لا يقيس سمعك: إنه يخبرك فقط إن كان ما تعيشه يوميًا يستحق فحصًا حقيقيًا داخل المركز.',
      sections: [
        {
          h2: 'ما فائدة هذا الاختبار',
          p: [
            'ضعف السمع يتقدّم ببطء. لا يؤلم، ولا ينذر، والأذن تتعلّم التعويض: نخمّن نهاية الجمل، نرفع الصوت دون انتباه، نتجنّب الأماكن الصاخبة. أول إشارة نادرًا ما تكون صوتًا ضائعًا — بل تعبًا في آخر النهار.',
            'يجمع هذا الاستبيان الحالات التي يظهر فيها هذا التعب: المطعم، الهاتف، التلفاز، الأصوات الحادّة. يحصي عدد المرات التي تجد فيها نفسك، ويخرج بخلاصة واحدة: *هل ينبغي استشارة مختص أم لا*.',
          ],
        },
        {
          h2: 'ما لا يفعله',
          p: [
            'الاختبار عبر الإنترنت لا يعوّض أي فحص. متصفحك لا يعرف مستوى صوت سمّاعاتك، ولا ضجيج الغرفة التي أنت فيها، ولا حالة قناة أذنك. لا يمكن لأي اختبار أونلاين، عندنا أو عند غيرنا، أن يعطي مخطّطًا سمعيًا.',
            'كما أنه لا يقول *لماذا* تسمع أقل. سدادة صملاخ، التهاب أذن قديم، صدمة صوتية، أو شيخوخة سمعية: كلها تعطي الإحساس نفسه وتستدعي أجوبة مختلفة تمامًا. الفحص داخل المركز، ورأي طبيب الأنف والأذن والحنجرة عند الحاجة، هما وحدهما ما يفرّق بينها.',
          ],
        },
        {
          h2: 'بعد الاختبار',
          p: [
            'إذا دعاك النتيجة إلى الاستشارة، فالخطوة التالية هي فحص السمع داخل المركز: حديث، فحص للقناة، قياس سمع نغمي ثم كلامي، وشرح للمنحنيات المحصّل عليها. هذا الفحص مجاني ودون التزام — ومن الممكن جدًا أن تخرج منه بجملة «سمعك بخير، عد بعد سنتين».',
            'يمكنك أخذ موعد عبر الهاتف أو واتساب. أشر إلى اللغة التي تفضّلها: العربية أو الفرنسية أو الإنجليزية.',
          ],
          list: [
            'فحص سمع مجاني، بموعد مسبق',
            'شرح النتائج في اليوم نفسه، بالمنحنيات',
            'دون أي التزام عند الخروج',
            'استقبال بالعربية والفرنسية والإنجليزية',
          ],
        },
      ],
      faq: [
        {
          q: 'هل الاختبار أونلاين مجاني فعلًا؟',
          a: 'نعم، ودون تسجيل: لا حساب تنشئه ولا بريدًا تتركه. وفحص السمع داخل المركز مجاني أيضًا، بموعد مسبق.',
        },
        {
          q: 'هل أحتاج سمّاعات رأس لإجرائه؟',
          a: 'لا. هذا الاختبار لا يبثّ أي صوت: إنه يتعلّق بمواقف من الحياة اليومية. يمكنك إجراؤه في الطرامواي أو في هدوء تام، النتيجة واحدة.',
        },
        {
          q: 'نتيجتي جيدة، هل أستشير رغم ذلك؟',
          a: 'إن لم تكن تشعر بأي انزعاج، فلا. لكن إذا لاحظ من حولك أن صوت التلفاز مرتفع، أو إن كنت قد اشتغلت سنوات في الضجيج، ففحص مرجعي يستحق الزيارة: سيصلح للمقارنة لاحقًا.',
        },
        {
          q: 'هل تُحفظ إجاباتي؟',
          a: 'لا. الحساب يتم داخل متصفحك، ولا شيء يُرسَل أو يُخزَّن. وإذا اخترت مراسلتنا عبر واتساب في النهاية، فأنت وحدك من يقرّر ما ترسله.',
        },
      ],
      related: [
        { slug: 'bilan-auditif-casablanca', label: 'فحص السمع داخل المركز' },
        { slug: 'perte-auditive', label: 'فهم ضعف السمع' },
        { slug: 'centre-de-correction-auditive-casablanca', label: 'المركز' },
      ],
    },

    en: {
      kicker: 'Online test',
      title: 'Free online hearing test · AudioLik Casablanca',
      description:
        'Free online hearing test, three minutes, no sign-up. Six everyday situations to tell you whether a proper hearing assessment is worth booking. AudioLik, Casablanca, Les Princesses (Maârif).',
      h1: 'Online hearing test',
      lede:
        "Six questions, three minutes, no sign-up. This test does not measure your hearing: it tells you whether what you experience day to day is worth a proper assessment at the centre.",
      sections: [
        {
          h2: 'What this test is for',
          p: [
            "Hearing loss settles in slowly. It does not hurt, it gives no warning, and the ear learns to cover for it: you guess the end of sentences, you turn the volume up without noticing, you avoid noisy places. The first sign is almost never a missed sound — it is tiredness at the end of the day.",
            "This questionnaire covers the situations where that tiredness shows: restaurants, the phone, television, higher-pitched voices. It counts how often you recognise yourself, and draws one conclusion only: *is this worth having checked, yes or no*.",
          ],
        },
        {
          h2: 'What it does not do',
          p: [
            "An online test replaces no examination. Your browser knows nothing about the real volume of your earphones, the noise in the room, or the state of your ear canal. No online test, ours or anyone else's, can produce an audiogram.",
            "Nor does it tell you *why* you hear less. Earwax, an old ear infection, noise damage and age-related loss all feel much the same and call for completely different answers. Only an examination at the centre, with an ENT opinion where needed, tells them apart.",
          ],
        },
        {
          h2: 'After the test',
          p: [
            "If the result suggests you should have it looked at, the next step is a hearing assessment at the centre: a conversation, an examination of the ear canal, pure-tone then speech audiometry, and an explanation of the curves. That assessment is free and carries no obligation — plenty of people leave with “your hearing is fine, come back in two years”.",
            'You can book by phone or on WhatsApp. Say which language you would rather be seen in: Arabic, French or English.',
          ],
          list: [
            'Free hearing assessment, by appointment',
            'Results explained the same day, curves in hand',
            'No obligation afterwards',
            'Arabic, French and English spoken',
          ],
        },
      ],
      faq: [
        {
          q: 'Is the online test really free?',
          a: 'Yes, and there is no sign-up: no account to create, no address to leave. The hearing assessment at the centre is free too, by appointment.',
        },
        {
          q: 'Do I need headphones?',
          a: 'No. This test plays no sound at all: it asks about everyday situations. You can take it on a busy street or in complete quiet and get the same result.',
        },
        {
          q: 'My score is good — should I still come in?',
          a: 'If nothing bothers you, no. But if someone close to you mentions the television is loud, or you spent years working in noise, a baseline assessment is worth the trip: it gives you something to compare against later.',
        },
        {
          q: 'Are my answers stored?',
          a: 'No. Everything is worked out inside your browser; nothing is sent or kept. If you choose to message us on WhatsApp at the end, you alone decide what you share.',
        },
      ],
      related: [
        { slug: 'bilan-auditif-casablanca', label: 'The hearing assessment' },
        { slug: 'perte-auditive', label: 'Understanding hearing loss' },
        { slug: 'centre-de-correction-auditive-casablanca', label: 'The centre' },
      ],
    },
  },
  /* ======================================================================
     12 · Remboursement des appareils auditifs au Maroc
     Contenu écrit ici, pas repris ailleurs : les pages concurrentes annoncent
     des montants, et un montant faux fait venir un patient déçu. On décrit la
     démarche, les pièces, et l'ordre dans lequel les réunir.
     Point d'actualité daté : la loi 54.23 (BO, février 2026) transfère la
     gestion de l'AMO du secteur public de la CNOPS vers la CNSS ; elle entre
     en vigueur douze mois après sa publication. Formulation à revoir en 2027.
     ====================================================================== */
  {
    slug: 'remboursement-appareils-auditifs-maroc',
    fr: {
      kicker: 'Prise en charge',
      title: 'Remboursement des appareils auditifs au Maroc · AudioLik',
      description:
        "CNSS, CNOPS, AMO, FAR, mutuelle d'entreprise : comment se monte un dossier de prise en charge pour un appareil auditif au Maroc, quelles pièces réunir et dans quel ordre. AudioLik, Casablanca.",
      h1: 'Remboursement des appareils auditifs au Maroc',
      lede:
        "Un appareil auditif ouvre droit, selon votre régime, à une prise en charge. Le montant dépend de votre caisse et de votre dossier — nous ne l'annoncerons pas ici. En revanche, la démarche, elle, est toujours la même, et c'est elle qui fait gagner ou perdre des semaines.",
      sections: [
        {
          h2: 'Les régimes concernés',
          p: [
            "Au Maroc, la prise en charge d'une prothèse auditive passe par l'assurance maladie obligatoire (AMO). Selon votre situation, votre dossier est instruit par la *CNSS* (salariés du privé, indépendants), par la *CNOPS* et les mutuelles du secteur public (fonctionnaires), par la caisse propre aux *Forces Armées Royales* pour les militaires et leurs ayants droit, ou par une *assurance ou mutuelle d'entreprise* qui complète le régime de base.",
            "Un point d'actualité, utile à connaître : la loi 54.23, publiée au Bulletin officiel en février 2026, transfère à la CNSS la gestion de l'AMO du secteur public jusqu'ici assurée par la CNOPS. Le texte prévoit une entrée en vigueur douze mois après publication. Concrètement, si vous montez un dossier aujourd'hui, adressez-vous à l'organisme qui gère encore votre régime, et vérifiez auprès de lui l'adresse de dépôt : c'est le genre de détail qui change pendant une transition.",
            "Une couverture complémentaire — mutuelle, assurance privée, contrat collectif d'entreprise — intervient après le régime de base, sur la part qui reste. Elle a ses propres conditions ; c'est à elle qu'il faut les demander.",
          ],
        },
        {
          h2: "Ce qui est pris en charge, et ce qui ne l'est pas",
          p: [
            "La prise en charge porte sur l'appareil lui-même, sur la base d'un tarif de référence propre à chaque régime, et non sur le prix que vous payez. L'écart entre les deux reste à votre charge : c'est pour cela qu'un devis détaillé, remis avant tout engagement, est plus utile qu'un pourcentage.",
            "Les examens qui précèdent — consultation ORL, audiométrie — relèvent de leurs propres règles de remboursement. Les accessoires, les piles, les embouts de rechange et l'entretien courant n'entrent généralement pas dans le dossier de prothèse.",
            "Il existe presque toujours un délai avant renouvellement, et une prise en charge distincte selon qu'un seul appareil ou les deux oreilles sont appareillés. Pour un enfant, les conditions sont souvent plus favorables que pour un adulte. Ces trois points sont ceux qu'il faut faire préciser par votre caisse avant de commander.",
          ],
        },
        {
          h2: 'Les pièces à réunir',
          p: [
            "La composition exacte du dossier varie d'un organisme à l'autre, mais on retrouve partout les mêmes pièces. Réunissez-les dans cet ordre : chacune conditionne la suivante.",
          ],
          list: [
            "Une *prescription médicale* d'un médecin ORL, mentionnant l'appareillage et l'oreille concernée",
            "Le *compte rendu d'audiométrie* (tonale et vocale), avec les courbes",
            "Le *formulaire de prise en charge* de votre organisme, rempli et signé — demandez-le avant la commande, pas après",
            "Le *devis détaillé* de l'appareil, établi par le centre auditif",
            "La *facture acquittée*, une fois l'appareil délivré",
            "Vos pièces d'affiliation : carte d'immatriculation, attestation de l'employeur ou de la caisse selon le régime",
          ],
        },
        {
          h2: 'La démarche, dans le bon ordre',
          p: [
            "L'erreur la plus fréquente est d'acheter d'abord et de constituer le dossier ensuite. Plusieurs régimes exigent un accord *préalable* : un appareil commandé avant l'accord peut sortir du champ de la prise en charge, même si toutes les autres pièces sont impeccables.",
            "L'ordre qui fonctionne : consultation ORL et prescription, puis bilan auditif et devis au centre, puis demande d'accord auprès de votre caisse, et seulement ensuite la commande. Une fois l'appareil délivré et la facture acquittée, le dossier complet part à l'organisme.",
            "Comptez plusieurs semaines entre le dépôt et le règlement, et conservez une copie de tout ce que vous déposez. Si une pièce manque, c'est cette copie qui vous évitera de refaire le parcours depuis le début.",
          ],
        },
        {
          h2: 'Ce que nous faisons de notre côté',
          p: [
            "Au centre, nous établissons le devis détaillé et la facture aux formats attendus, nous joignons le compte rendu d'audiométrie, et nous vous indiquons les pièces qui manquent avant que vous ne déposiez le dossier. Nous ne pouvons ni instruire votre demande à la place de votre caisse, ni vous garantir un montant : la décision et le barème lui appartiennent.",
            "Si vous ne savez pas de quel régime vous relevez, apportez votre carte d'immatriculation lors du bilan : c'est souvent suffisant pour identifier l'interlocuteur et vous éviter un déplacement inutile.",
          ],
        },
      ],
      faq: [
        {
          q: 'Combien serai-je remboursé exactement ?',
          a: "Nous ne donnons pas de chiffre, et méfiez-vous des sites qui en affichent un : le montant dépend de votre régime, du tarif de référence en vigueur, du nombre d'oreilles appareillées et de votre couverture complémentaire. Votre caisse est la seule à pouvoir vous le confirmer, formulaire en main.",
        },
        {
          q: "Puis-je acheter l'appareil d'abord et demander le remboursement après ?",
          a: "C'est risqué. Plusieurs régimes exigent un accord préalable, obtenu avant la commande. Demandez le formulaire de prise en charge à votre organisme dès la prescription : c'est la pièce qui verrouille le reste du dossier.",
        },
        {
          q: 'Faut-il obligatoirement une ordonnance ORL ?',
          a: "Oui. Aucun dossier de prothèse auditive n'aboutit sans prescription médicale. Si vous n'avez pas encore consulté, commencez par là ; le bilan auditif au centre viendra compléter le dossier, pas le remplacer.",
        },
        {
          q: 'Je dépends de la CNOPS — la réforme change-t-elle quelque chose pour moi ?',
          a: "La loi 54.23, publiée en février 2026, transfère la gestion de l'AMO du secteur public à la CNSS, avec une entrée en vigueur prévue douze mois après sa publication. En pratique, adressez-vous à l'organisme qui gère votre régime au moment du dépôt et faites-vous confirmer l'adresse : pendant une transition, c'est le point qui bouge en premier.",
        },
        {
          q: 'Et les piles, les embouts, les réparations ?',
          a: "L'entretien courant et les consommables ne font généralement pas partie du dossier de prothèse. Certaines couvertures complémentaires les prennent en charge : c'est à votre mutuelle qu'il faut poser la question.",
        },
      ],
      related: [
        { slug: 'appareils-auditifs-casablanca', label: 'Les appareils auditifs' },
        { slug: 'bilan-auditif-casablanca', label: 'Le bilan auditif' },
        { slug: 'entretien-et-reparation-appareils-auditifs', label: 'Entretien et réparation' },
      ],
    },

    ar: {
      kicker: 'التغطية الصحية',
      title: 'استرجاع مصاريف السماعات الطبية بالمغرب · AudioLik',
      description:
        'CNSS، CNOPS، AMO، القوات المسلحة الملكية، تأمين تكميلي: كيف يُبنى ملف التكفل بسمّاعة طبية بالمغرب، وما الوثائق المطلوبة وبأي ترتيب. AudioLik، الدار البيضاء.',
      h1: 'استرجاع مصاريف السماعات الطبية بالمغرب',
      lede:
        'السمّاعة الطبية تفتح، حسب نظامك، الحق في تكفّل جزئي. المبلغ يتوقّف على صندوقك وعلى ملفك — ولن نذكره هنا. أما المسطرة فهي واحدة دائمًا، وهي التي تربح لك أسابيع أو تضيّعها.',
      sections: [
        {
          h2: 'الأنظمة المعنية',
          p: [
            'بالمغرب، يمرّ التكفّل بالسمّاعة الطبية عبر التأمين الإجباري الأساسي عن المرض (AMO). وحسب وضعيتك، يُدرَس ملفك لدى *الصندوق الوطني للضمان الاجتماعي (CNSS)* بالنسبة لأجراء القطاع الخاص والمستقلين، أو لدى *CNOPS* والتعاضديات بالنسبة لموظفي القطاع العام، أو لدى صندوق *القوات المسلحة الملكية* بالنسبة للعسكريين وذوي حقوقهم، أو عبر *تأمين أو تعاضدية للمقاولة* تكمّل النظام الأساسي.',
            'معطى راهن يستحق الانتباه: القانون 54.23، المنشور بالجريدة الرسمية في فبراير 2026، ينقل إلى CNSS تدبير التأمين الإجباري عن المرض الخاص بالقطاع العام الذي كانت تتولّاه CNOPS، على أن يدخل حيّز التنفيذ بعد اثني عشر شهرًا من النشر. عمليًا: إن كنت تُعدّ ملفًا اليوم، توجّه إلى الجهة التي ما تزال تدبّر نظامك، وتأكّد لديها من مكان الإيداع — فهذه أول نقطة تتغيّر خلال أي انتقال.',
            'التغطية التكميلية — تعاضدية، تأمين خاص، عقد جماعي — تتدخّل بعد النظام الأساسي، على ما تبقّى. ولها شروطها الخاصة، وهي وحدها من يجيب عنها.',
          ],
        },
        {
          h2: 'ما يشمله التكفّل وما لا يشمله',
          p: [
            'يهمّ التكفّل السمّاعة نفسها، على أساس تعريفة مرجعية خاصة بكل نظام، لا على أساس الثمن الذي تؤدّيه. الفارق بينهما يبقى على عاتقك: لذلك فإن فاتورة تقديرية مفصّلة، تُسلَّم قبل أي التزام، أنفع من أي نسبة مئوية.',
            'أما الفحوصات السابقة — استشارة طبيب الأنف والأذن والحنجرة، وقياس السمع — فلها قواعد استرجاع خاصة بها. والملحقات والبطاريات وقوالب الأذن البديلة والصيانة العادية لا تدخل عمومًا ضمن ملف السمّاعة.',
            'وهناك دائمًا تقريبًا أجل قبل التجديد، وتكفّل يختلف بين تجهيز أذن واحدة أو الأذنين معًا. وبالنسبة للأطفال، تكون الشروط في الغالب أفضل منها لدى البالغين. هذه النقاط الثلاث هي ما ينبغي توضيحه مع صندوقك قبل الطلب.',
          ],
        },
        {
          h2: 'الوثائق المطلوبة',
          p: [
            'تختلف تركيبة الملف من جهة إلى أخرى، لكن الوثائق نفسها تتكرّر في كل مكان. اجمعها بهذا الترتيب: كل واحدة تشترط التي بعدها.',
          ],
          list: [
            '*وصفة طبية* من طبيب الأنف والأذن والحنجرة، تذكر التجهيز والأذن المعنية',
            '*تقرير قياس السمع* (النغمي والكلامي)، مرفقًا بالمنحنيات',
            '*استمارة التكفّل* الخاصة بجهتك، معبّأة وموقّعة — اطلبها قبل الطلب لا بعده',
            '*الفاتورة التقديرية المفصّلة* للسمّاعة، يحرّرها المركز',
            '*الفاتورة المؤدّاة*، بعد تسليم السمّاعة',
            'وثائق انخراطك: بطاقة التسجيل، وشهادة من المشغّل أو الصندوق حسب النظام',
          ],
        },
        {
          h2: 'المسطرة بالترتيب الصحيح',
          p: [
            'أكثر الأخطاء شيوعًا هو الشراء أولًا وإعداد الملف لاحقًا. عدة أنظمة تشترط موافقة *قبلية*: سمّاعة طُلبت قبل الموافقة قد تخرج من دائرة التكفّل، ولو كانت باقي الوثائق سليمة تمامًا.',
            'الترتيب الذي ينجح: استشارة الطبيب والوصفة، ثم فحص السمع والفاتورة التقديرية بالمركز، ثم طلب الموافقة من صندوقك، وبعد ذلك فقط الطلب. وبمجرد تسليم السمّاعة وأداء الفاتورة، يُودَع الملف كاملًا لدى الجهة المعنية.',
            'احسب عدة أسابيع بين الإيداع والأداء، واحتفظ بنسخة من كل ما تودعه. فإن نقصت وثيقة، فهذه النسخة هي ما يعفيك من إعادة المسار من بدايته.',
          ],
        },
        {
          h2: 'ما نقوم به من جهتنا',
          p: [
            'داخل المركز، نحرّر الفاتورة التقديرية والفاتورة بالصيغ المطلوبة، ونرفق تقرير قياس السمع، ونشير إلى الوثائق الناقصة قبل أن تودع الملف. لا يمكننا أن ندرس طلبك مكان صندوقك، ولا أن نضمن لك مبلغًا: القرار والتعريفة من اختصاصه هو.',
            'وإن لم تكن تعرف النظام الذي تنتمي إليه، أحضر بطاقة تسجيلك يوم الفحص: غالبًا ما تكفي لتحديد الجهة المخاطَبة وتوفير تنقّل لا لزوم له.',
          ],
        },
      ],
      faq: [
        {
          q: 'كم سأسترجع بالضبط؟',
          a: 'لا نعطي رقمًا، وكن حذرًا من المواقع التي تعرض رقمًا: المبلغ يتوقّف على نظامك، وعلى التعريفة المرجعية الجاري بها العمل، وعلى عدد الآذان المجهّزة، وعلى تغطيتك التكميلية. صندوقك وحده من يؤكّده لك، والاستمارة بين يديك.',
        },
        {
          q: 'هل يمكنني شراء السمّاعة أولًا وطلب الاسترجاع لاحقًا؟',
          a: 'الأمر محفوف بالمخاطر. عدة أنظمة تشترط موافقة قبلية تُنال قبل الطلب. اطلب استمارة التكفّل من جهتك منذ لحظة الوصفة: فهي الوثيقة التي تُثبّت باقي الملف.',
        },
        {
          q: 'هل الوصفة من طبيب الأنف والأذن والحنجرة إلزامية؟',
          a: 'نعم. لا يكتمل أي ملف سمّاعة طبية دون وصفة طبية. إن لم تكن قد استشرت بعد، فابدأ من هناك؛ وفحص السمع بالمركز يكمّل الملف ولا يعوّضه.',
        },
        {
          q: 'أنا منخرط في CNOPS — هل يغيّر الإصلاح شيئًا بالنسبة لي؟',
          a: 'القانون 54.23، المنشور في فبراير 2026، ينقل تدبير التأمين الإجباري عن المرض للقطاع العام إلى CNSS، مع دخول حيّز التنفيذ بعد اثني عشر شهرًا من النشر. عمليًا: توجّه إلى الجهة التي تدبّر نظامك وقت الإيداع، وتأكّد من العنوان — ففي فترة الانتقال، هذه أول نقطة تتحرّك.',
        },
        {
          q: 'وماذا عن البطاريات والقوالب والإصلاحات؟',
          a: 'الصيانة العادية والمستهلكات لا تدخل عمومًا ضمن ملف السمّاعة. بعض التغطيات التكميلية تتكفّل بها: وهذا سؤال يُطرح على تعاضديتك.',
        },
      ],
      related: [
        { slug: 'appareils-auditifs-casablanca', label: 'السمّاعات الطبية' },
        { slug: 'bilan-auditif-casablanca', label: 'فحص السمع' },
        { slug: 'entretien-et-reparation-appareils-auditifs', label: 'الصيانة والإصلاح' },
      ],
    },

    en: {
      kicker: 'Cover and reimbursement',
      title: 'Hearing aid reimbursement in Morocco · AudioLik',
      description:
        'CNSS, CNOPS, AMO, the armed forces scheme, company cover: how a hearing aid reimbursement file is put together in Morocco, which documents you need and in what order. AudioLik, Casablanca.',
      h1: 'Hearing aid reimbursement in Morocco',
      lede:
        "A hearing aid entitles you, depending on your scheme, to partial cover. The amount depends on your fund and on your file — we will not quote one here. The procedure, on the other hand, is always the same, and it is what wins or loses you several weeks.",
      sections: [
        {
          h2: 'Which schemes are involved',
          p: [
            "In Morocco, cover for a hearing aid runs through compulsory health insurance (AMO). Depending on your situation, your file is handled by the *CNSS* (private-sector employees, self-employed), by the *CNOPS* and the public-sector mutual societies (civil servants), by the *Royal Armed Forces* fund for service members and their dependants, or through a *company insurance or mutual scheme* topping up the basic cover.",
            "One current point worth knowing: law 54.23, published in the Official Bulletin in February 2026, transfers management of public-sector AMO from CNOPS to CNSS, taking effect twelve months after publication. In practice, if you are putting a file together now, deal with whichever body still manages your scheme, and confirm with them where to file it — during a transition, that is the first detail to move.",
            'Top-up cover — a mutual society, private insurance, a group company policy — comes in after the basic scheme, on whatever is left. It has its own conditions, and it is the one to ask.',
          ],
        },
        {
          h2: 'What is covered, and what is not',
          p: [
            "Cover applies to the device itself, calculated against a reference tariff specific to each scheme, not against the price you actually pay. The gap between the two is yours: which is why a detailed quote, handed over before you commit to anything, is more use than a percentage.",
            'The examinations that come first — the ENT consultation, audiometry — follow their own reimbursement rules. Accessories, batteries, replacement domes and routine servicing are generally outside the hearing aid file.',
            'There is almost always a minimum interval before replacement, and cover differs depending on whether one ear or both are fitted. For a child, conditions are often more favourable than for an adult. Those three points are the ones to have your fund spell out before you order.',
          ],
        },
        {
          h2: 'The documents to gather',
          p: [
            'The exact make-up of the file varies from one body to another, but the same documents come up everywhere. Gather them in this order: each one conditions the next.',
          ],
          list: [
            '*A medical prescription* from an ENT doctor, naming the fitting and the ear concerned',
            '*The audiometry report* (pure-tone and speech), with the curves',
            '*Your scheme’s cover form*, completed and signed — ask for it before ordering, not after',
            '*A detailed quote* for the device, issued by the hearing centre',
            '*The receipted invoice*, once the device has been supplied',
            '*Your membership documents*: registration card, employer or fund certificate depending on the scheme',
          ],
        },
        {
          h2: 'The procedure, in the right order',
          p: [
            'The most common mistake is buying first and assembling the file afterwards. Several schemes require *prior* approval: a device ordered before approval can fall outside cover entirely, however impeccable the rest of the paperwork.',
            'The order that works: ENT consultation and prescription, then hearing assessment and quote at the centre, then the approval request to your fund, and only then the order. Once the device has been supplied and the invoice receipted, the complete file goes to the scheme.',
            'Allow several weeks between filing and payment, and keep a copy of everything you hand in. If a document turns out to be missing, that copy is what saves you from starting over.',
          ],
        },
        {
          h2: 'What we do at our end',
          p: [
            'At the centre we issue the detailed quote and the invoice in the expected formats, attach the audiometry report, and point out anything missing before you file. We cannot process your claim in place of your fund, nor guarantee you an amount: the decision and the tariff are theirs.',
            'If you are not sure which scheme you fall under, bring your registration card to the assessment: it is usually enough to identify who to deal with and save you a wasted trip.',
          ],
        },
      ],
      faq: [
        {
          q: 'Exactly how much will I get back?',
          a: 'We do not quote a figure, and be wary of sites that do: the amount depends on your scheme, the reference tariff in force, how many ears are fitted, and your top-up cover. Your fund is the only one that can confirm it, form in hand.',
        },
        {
          q: 'Can I buy the device first and claim afterwards?',
          a: 'That is risky. Several schemes require prior approval, obtained before the order. Ask your body for the cover form as soon as you have the prescription: it is the document the rest of the file hangs on.',
        },
        {
          q: 'Is an ENT prescription really compulsory?',
          a: 'Yes. No hearing aid file goes through without a medical prescription. If you have not seen a doctor yet, start there; the assessment at the centre completes the file, it does not replace that step.',
        },
        {
          q: 'I am with CNOPS — does the reform change anything for me?',
          a: 'Law 54.23, published in February 2026, transfers management of public-sector AMO to CNSS, taking effect twelve months after publication. In practice, deal with whichever body manages your scheme at the time you file, and confirm the address: during a transition that is the first thing to move.',
        },
        {
          q: 'What about batteries, domes and repairs?',
          a: 'Routine servicing and consumables are generally outside the hearing aid file. Some top-up policies do cover them: that is a question for your mutual society.',
        },
      ],
      related: [
        { slug: 'appareils-auditifs-casablanca', label: 'Hearing aids' },
        { slug: 'bilan-auditif-casablanca', label: 'The hearing assessment' },
        { slug: 'entretien-et-reparation-appareils-auditifs', label: 'Servicing and repair' },
      ],
    },
  },
];

export default batchD;
