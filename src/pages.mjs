/**
 * AudioLik — contenu des pages secondaires.
 *
 * Une page = une intention de recherche. Le site n'avait qu'une seule porte
 * d'entrée (la page d'accueil) ; ces pages en ouvrent dix de plus, chacune
 * répondant à une question que les gens tapent réellement dans Google.
 *
 * Chaque page existe dans les trois langues. Le slug est commun : la langue
 * est portée par le dossier (/slug/, /ar/slug/, /en/slug/), comme pour
 * l'accueil, et les hreflang relient les trois entre elles.
 *
 * RÈGLES D'ÉCRITURE — les mêmes que pour l'accueil :
 *   · aucun prix chiffré (ils sont communiqués au centre, après le bilan) ;
 *   · aucune promesse non confirmée (business.claims est encore à false :
 *     ni « bilan gratuit », ni « essai à domicile », ni « suivi illimité »,
 *     ni « cabine insonorisée », ni « appareillage enfants ») ;
 *   · le vocabulaire est celui déjà validé dans src/content/<lang>.mjs.
 *
 * Balisage accepté dans les textes : *gras* et [libellé](url).
 */

import batchA from './pages-batch-a.mjs';
import batchB from './pages-batch-b.mjs';
import batchC from './pages-batch-c.mjs';

const core = [
  /* ======================================================================
     1 · Centre de correction auditive à Casablanca
     La requête que visent frontalement les concurrents. Page pivot.
     ====================================================================== */
  {
    slug: 'centre-de-correction-auditive-casablanca',
    fr: {
      kicker: 'Le centre',
      title: 'Centre de correction auditive à Casablanca · AudioLik',
      description:
        "Centre de correction auditive à Casablanca, quartier Les Princesses (Maârif). Bilan auditif, appareils discrets, réglages et suivi. Sur rendez-vous, en arabe, français et anglais.",
      h1: 'Centre de correction auditive à Casablanca',
      lede:
        "AudioLik est un centre de correction auditive installé aux Princesses, à Maârif. On y mesure ce que vous n'entendez plus, on vous l'explique, et si un appareil peut aider, on l'adapte avec vous, réglage après réglage.",
      sections: [
        {
          h2: 'Ce qu’est un centre de correction auditive',
          p: [
            "C'est le lieu où l'on mesure votre audition, où l'on vous explique les résultats, et où l'on adapte un appareil si c'est utile. Ce n'est pas un magasin : la partie visible, l'appareil, ne représente qu'une petite part du travail. L'essentiel se joue avant, pendant le bilan, et après, pendant les mois de réglage.",
            "Un appareillage se raisonne sur cinq ans, pas sur une facture. Ce qui coûte cher, ce n'est pas le boîtier : c'est le temps passé à l'adapter à votre audition, puis à le régler jusqu'à ce qu'il devienne inutile d'y penser.",
          ],
        },
        {
          h2: 'Ce que vous trouverez chez AudioLik',
          p: [
            "Un centre à taille humaine, et le même interlocuteur du premier bilan au dernier réglage. Une adaptation réussie repose sur une relation suivie : la personne qui vous a mesuré est celle qui vous connaît.",
          ],
          list: [
            'Otoscopie, audiométrie tonale puis vocale — ce que vous entendez, et surtout ce que vous comprenez',
            "Une sélection argumentée de deux ou trois appareils, pas un catalogue",
            "L'adaptation initiale et la prise d'empreinte si nécessaire",
            'Les contrôles de suivi et le nettoyage en centre',
            'Un devis et une facture conformes pour votre dossier de remboursement',
          ],
        },
        {
          h2: 'Les cinq étapes, du bilan au réglage fin',
          p: [
            "*Le bilan* — on mesure ce que vous entendez et ce que vous comprenez. Les deux ne vont pas toujours ensemble. Comptez environ 45 minutes.",
            "*Le choix* — on compare deux ou trois appareils adaptés à votre audiogramme, à votre quotidien et à votre budget.",
            "*L'essai* — vous testez là où ça compte vraiment : à table, au téléphone, au marché, à la mosquée.",
            "*L'adaptation* — le cerveau doit réapprendre à traiter des sons qu'il n'entendait plus. Cela prend plusieurs semaines.",
            "*Le suivi* — contrôle de l'audition, nettoyage, changement des filtres, dépannage. Un appareil bien suivi dure plusieurs années de plus.",
          ],
        },
        {
          h2: 'Venir au centre',
          p: [
            "106B rue Al Jounaid, quartier Les Princesses, à Maârif, Casablanca. Sur rendez-vous, du lundi au samedi matin. Nous recevons en arabe, en français et en anglais, et les proches sont les bienvenus — c'est même conseillé, à deux on retient mieux les explications.",
          ],
        },
      ],
      faq: [
        {
          q: 'Faut-il prendre rendez-vous ?',
          a: "Oui, pour vous consacrer le temps nécessaire. Un appel ou un message WhatsApp suffit, on vous propose un créneau dans la semaine.",
        },
        {
          q: 'Combien coûte un appareillage ?',
          a: "Les tarifs dépendent du niveau de technologie et de votre perte auditive. Ils vous sont communiqués au centre, après le bilan. Vous repartez avec un devis détaillé, et rien n'est signé le jour même.",
        },
        {
          q: 'Y a-t-il une prise en charge ?',
          a: "Selon votre organisme (CNSS, CNOPS, AMO ou mutuelle d'entreprise), une partie de l'appareillage peut être remboursée. Nous préparons les pièces nécessaires à votre dossier.",
        },
      ],
      related: [
        { slug: 'bilan-auditif-casablanca', label: 'Le bilan auditif' },
        { slug: 'appareils-auditifs-casablanca', label: 'Les appareils auditifs' },
        { slug: 'perte-auditive', label: 'Comprendre la perte auditive' },
      ],
    },
    ar: {
      kicker: 'المركز',
      title: 'مركز تصحيح السمع بالدار البيضاء · أوديوليك',
      description:
        'مركز تصحيح السمع بالدار البيضاء، حي الأميرات (المعاريف). فحص السمع، أجهزة سمعية دقيقة، الضبط والمتابعة. بموعد مسبق، بالعربية والفرنسية والإنجليزية.',
      h1: 'مركز تصحيح السمع بالدار البيضاء',
      lede:
        'أوديوليك مركز لتصحيح السمع بحي الأميرات، بالمعاريف. نقيس بدقّة ما لم تعد تسمعه، ونشرحه لك، وإذا كان الجهاز مفيدًا نلائمه معك، ضبطًا بعد ضبط.',
      sections: [
        {
          h2: 'ما هو مركز تصحيح السمع',
          p: [
            'هو المكان الذي يُقاس فيه سمعك، وتُشرح لك فيه النتائج، ويُلاءم فيه الجهاز إذا كان مفيدًا. ليس متجرًا: الجزء الظاهر، أي الجهاز، ليس إلا جزءًا صغيرًا من العمل. الأساس يجري قبل ذلك، أثناء الفحص، وبعده، خلال أشهر الضبط.',
            'التجهيز السمعي قرار يُحسَب على خمس سنوات، لا على فاتورة واحدة. وما يكلّف ليس العلبة، بل الوقت المبذول في ملاءمتها مع سمعك، ثم ضبطها إلى أن تنسى وجودها.',
          ],
        },
        {
          h2: 'ما تجده في أوديوليك',
          p: [
            'مركز على مقاس الإنسان، ونفس المُحاور من الفحص الأول إلى آخر ضبط. نجاح التجهيز السمعي يقوم على علاقة متواصلة: من قاس سمعك هو من يعرفك.',
          ],
          list: [
            'فحص الأذن، ثم قياس السمع النغمي والكلامي — ما تسمعه، وقبل ذلك ما تفهمه',
            'اختيار مُعلَّل لجهازين أو ثلاثة، لا كتالوج',
            'التركيب الأوّلي وأخذ البصمة عند الحاجة',
            'فحوص المتابعة والتنظيف داخل المركز',
            'عرض أثمان وفاتورة مطابقان لملفّ الاسترجاع',
          ],
        },
        {
          h2: 'خمس مراحل، من الفحص إلى الضبط الدقيق',
          p: [
            '*الفحص* — نقيس ما تسمعه وما تفهمه. والاثنان لا يسيران دائمًا معًا. المدّة حوالي 45 دقيقة.',
            '*الاختيار* — نقارن بين جهازين أو ثلاثة تناسب مخطّط سمعك وحياتك اليومية وميزانيتك.',
            '*التجربة* — تختبر الجهاز حيث يهمّ فعلًا: على المائدة، في الهاتف، في السوق، في المسجد.',
            '*التأقلم* — على الدماغ أن يعيد تعلّم معالجة أصوات لم يعد يسمعها. يستغرق ذلك أسابيع.',
            '*المتابعة* — مراقبة السمع، التنظيف، تغيير المصافي، والإصلاح. الجهاز المتابَع جيدًا يدوم سنوات أطول.',
          ],
        },
        {
          h2: 'الوصول إلى المركز',
          p: [
            '106B زنقة الجنيد، حي الأميرات، بالمعاريف، الدار البيضاء. بموعد مسبق، من الاثنين إلى صباح السبت. نستقبلكم بالعربية والفرنسية والإنجليزية، ومرافقة أحد الأقارب مُرحّب بها — بل ننصح بها، فالاثنان يحفظان الشرح أفضل من واحد.',
          ],
        },
      ],
      faq: [
        {
          q: 'هل يلزم حجز موعد؟',
          a: 'نعم، حتى نخصّص لك الوقت اللازم. مكالمة أو رسالة واتساب تكفي، ونقترح عليك موعدًا خلال الأسبوع.',
        },
        {
          q: 'كم يكلّف التجهيز السمعي؟',
          a: 'تختلف الأثمان حسب مستوى التقنية ودرجة ضعف السمع. وتُقدَّم لك في المركز، بعد الفحص. تغادر ومعك عرض أثمان مفصّل، ولا توقيع في اليوم نفسه.',
        },
        {
          q: 'هل هناك تغطية صحية؟',
          a: 'حسب صندوقك (الضمان الاجتماعي، أو التعاضدية، أو التأمين الإجباري عن المرض، أو تأمين المقاولة)، قد يُسترجع جزء من الكلفة. ونُعدّ لك الوثائق التي يحتاجها ملفّك.',
        },
      ],
      related: [
        { slug: 'bilan-auditif-casablanca', label: 'فحص السمع' },
        { slug: 'appareils-auditifs-casablanca', label: 'الأجهزة السمعية' },
        { slug: 'perte-auditive', label: 'فهم ضعف السمع' },
      ],
    },
    en: {
      kicker: 'The centre',
      title: 'Hearing Correction Centre in Casablanca · AudioLik',
      description:
        'Hearing correction centre in Casablanca, Les Princesses (Maârif). Hearing assessment, discreet devices, fitting and follow-up. By appointment, in Arabic, French and English.',
      h1: 'Hearing correction centre in Casablanca',
      lede:
        "AudioLik is a hearing correction centre in Les Princesses, Maârif. We measure what you no longer hear, explain it to you, and if a device helps, we fit it with you, adjustment after adjustment.",
      sections: [
        {
          h2: 'What a hearing correction centre is',
          p: [
            "It is where your hearing is measured, where the results are explained to you, and where a device is fitted if it helps. It is not a shop: the visible part, the device, is only a small share of the work. The essential happens before, during the assessment, and after, through months of adjustment.",
            "A hearing aid is a five-year decision, not a single invoice. What costs is not the casing: it is the time spent matching it to your hearing, then adjusting it until you stop thinking about it.",
          ],
        },
        {
          h2: 'What you will find at AudioLik',
          p: [
            "A human-scale centre, and the same person from the first assessment to the last adjustment. A successful fitting rests on a continuing relationship: whoever measured your hearing is the one who knows you.",
          ],
          list: [
            'Otoscopy, then pure-tone and speech audiometry — what you hear, and above all what you understand',
            'A reasoned selection of two or three devices, not a catalogue',
            'Initial fitting and ear impression when needed',
            'Follow-up checks and cleaning at the centre',
            'A quote and an invoice suitable for your reimbursement file',
          ],
        },
        {
          h2: 'Five steps, from assessment to fine tuning',
          p: [
            '*The assessment* — we measure what you hear and what you understand. The two do not always go together. Around 45 minutes.',
            '*The choice* — we compare two or three devices suited to your audiogram, your daily life and your budget.',
            '*The trial* — you test where it really counts: at the table, on the phone, at the market, at the mosque.',
            '*Adaptation* — the brain has to relearn sounds it had stopped hearing. That takes several weeks.',
            '*Follow-up* — hearing checks, cleaning, filter changes, repairs. A well-followed device lasts years longer.',
          ],
        },
        {
          h2: 'Coming to the centre',
          p: [
            "106B rue Al Jounaid, Les Princesses, Maârif, Casablanca. By appointment, Monday to Saturday morning. We see patients in Arabic, French and English, and relatives are welcome — it is even advisable, two people remember explanations better than one.",
          ],
        },
      ],
      faq: [
        {
          q: 'Do I need an appointment?',
          a: 'Yes, so that we can give you the time you need. A call or a WhatsApp message is enough, and we will offer you a slot within the week.',
        },
        {
          q: 'How much does a hearing aid cost?',
          a: "Prices depend on the level of technology and on your hearing loss. They are given to you at the centre, after the assessment. You leave with a detailed quote, and nothing is signed on the day.",
        },
        {
          q: 'Is there any reimbursement?',
          a: 'Depending on your scheme (CNSS, CNOPS, AMO or a company plan), part of the cost may be reimbursed. We prepare the documents your file needs.',
        },
      ],
      related: [
        { slug: 'bilan-auditif-casablanca', label: 'The hearing assessment' },
        { slug: 'appareils-auditifs-casablanca', label: 'Hearing aids' },
        { slug: 'perte-auditive', label: 'Understanding hearing loss' },
      ],
    },
  },
];

export const pages = [...core, ...batchA, ...batchB, ...batchC];

export default pages;
