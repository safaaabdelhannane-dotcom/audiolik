/** English content — v2. Same shape as fr.mjs (enforced by the build). */
export default {
  code: 'en',
  dir: 'ltr',

  meta: {
    title: 'AudioLik · Hearing Correction Centre in Casablanca, Les Princesses',
    description:
      'Hearing correction centre in Casablanca, Les Princesses (Maârif). Hearing assessments, discreet devices, fitting and follow-up. Book on +212 522 39 37 98.',
    ogAlt: 'AudioLik, hearing correction centre in Casablanca',
    skipToContent: 'Skip to content',
    langLabel: 'Change language',
    themeLabel: 'Change theme',
    themeLight: 'Light theme',
    themeDark: 'Dark theme',
  },

  nav: {
    items: [
      { href: '#audition', label: 'Your hearing' },
      { href: '#test', label: 'Online check' },
      { href: '#parcours', label: 'How it works' },
      { href: '#solutions', label: 'Solutions' },
      { href: '#centre', label: 'The centre' },
    ],
    cta: 'Book',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },

  hero: {
    title: 'Hear the voices *that matter* again.',
    lede: 'We measure exactly what you no longer hear, then bring it back, one adjustment at a time.',
    ctaWhatsapp: 'Message on WhatsApp',

    statusOpen: 'Open',
    statusClosed: 'Closed',
    statusUntil: 'until',
    statusOpensAt: 'opens at',
  },

  reassurance: {
    freeHearingTest:  { title: 'Complimentary hearing check',   text: 'By appointment, no obligation.' },
    homeTrial:        { title: 'Try before you buy',            text: 'Test the devices in your everyday life.' },
    unlimitedFollowUp:{ title: 'Fitting and follow-up included', text: 'For as long as you wear the device.' },
    childrenFitting:  { title: 'Children and adults',           text: 'Paediatric and adult fitting.' },
    soundproofBooth:  { title: 'Audiometric booth',             text: 'Measurements taken on site, in a soundproof booth.' },
  },

  signs: {
    title: 'Do these sound familiar?',
    lede:
      'Hearing loss settles in slowly. Loud sounds are not the first to go: nuance is, along with consonants, higher voices, and conversation in a noisy room.',
    items: [
      { icon: 'television-simple', text: 'You turn the television up louder than everyone else.' },
      { icon: 'coffee',            text: 'In a café you follow the conversation, then lose the thread.' },
      { icon: 'repeat',            text: 'People tell you that you ask them to repeat themselves. Often.' },
      { icon: 'phone',             text: 'Phone calls have become hard work, especially with strangers.' },
      { icon: 'bell-ringing',      text: 'A ringing or buzzing keeps you company when everything is quiet.' },
      { icon: 'microphone-stage',  text: 'Higher voices, those of children and women, sound blurred.' },
    ],
    footnote: 'Three or more? An assessment settles the question in under an hour.',
  },

  quiz: {
    kicker: 'Online check',
    title: 'Three minutes to see clearly.',
    lede:
      'Six questions about your daily life. Nothing is sent anywhere: the score is computed in your browser and disappears when you close the page.',
    disclaimer:
      'This questionnaire is a guide, not a diagnosis. It replaces neither an assessment at the centre nor the opinion of an ENT doctor.',
    answers: [
      { label: 'Never',     value: 0 },
      { label: 'Sometimes', value: 1 },
      { label: 'Often',     value: 2 },
    ],
    questions: [
      'You ask people to repeat themselves.',
      'You struggle to follow a conversation when several people are talking.',
      'People point out that the television or radio is too loud.',
      'You hear ringing, buzzing or hissing in your ears.',
      'You avoid certain places, restaurants or meetings, because of the noise.',
      'You can hear that someone is speaking, but you cannot make out the words.',
    ],
    progress: 'Question {n} of {total}',
    results: [
      {
        max: 3,
        title: 'Nothing concerning today.',
        text: 'Your answers do not point to significant difficulty. After 60, a check every two years remains a good habit, much like an eye test.',
      },
      {
        max: 7,
        title: 'A few signals worth watching.',
        text: 'Several situations already put you at a disadvantage. An assessment tells you whether this is genuine hearing loss, earwax, or something else. It is painless and takes under an hour.',
      },
      {
        max: 12,
        title: 'An assessment is strongly recommended.',
        text: 'Your answers describe difficulty that has settled into daily life. The earlier hearing loss is addressed, the better the brain retains its ability to decode speech, and the easier the adjustment to a device.',
      },
    ],
    ctaBook: 'Book an appointment',
    ctaRestart: 'Take the check again',
    scoreLabel: 'Your score',
  },

  journey: {
    title: 'From first assessment to fine tuning.',
    lede: 'A hearing aid is not sold, it is fitted. These are the five stages we go through together.',
    steps: [
      {
        title: 'The assessment',
        text: 'Otoscopy, then pure-tone and speech audiometry. We measure what you hear, but above all what you understand. The two do not always match.',
        meta: 'About 45 minutes',
        icon: 'ear',
      },
      {
        title: 'The choice',
        text: 'We compare two or three devices suited to your audiogram, your daily life and your budget. Not a catalogue, a reasoned shortlist.',
        meta: 'Two or three models',
        icon: 'faders',
      },
      {
        title: 'The trial',
        text: 'You leave wearing the devices and test them where it actually counts: at the table, on the phone, at the market, at the mosque.',
        meta: 'In real conditions',
        icon: 'calendar-check',
      },
      {
        title: 'The adjustment',
        text: 'The brain has to relearn how to process sounds it had stopped receiving.',
        meta: 'Over several weeks',
        icon: 'path',
      },
      {
        title: 'The follow-up',
        text: 'Hearing checks, cleaning, filter changes, repairs. A well-maintained device lasts years longer.',
        meta: 'No time limit',
        icon: 'shield-check',
      },
    ],
  },

  solutions: {
    kicker: 'Solutions',
    title: 'Discreet, rechargeable, connected.',
    lede:
      'There is no single best hearing aid, only the one that matches your loss, your ear canal and your life.',
    items: [
      {
        name: 'Receiver-in-canal',
        tag: 'The most common',
        text: 'A slim housing behind the ear, a tiny receiver in the canal. Natural sound, an open ear, all but invisible from the front.',
        icon: 'ear',
        size: 'feature',
        photo: 'devices',
      },
      {
        name: 'In-the-ear',
        tag: 'The most invisible',
        text: 'Custom-moulded to your canal. Nothing sits behind the ear.',
        icon: 'ear',
        size: 'wide',
      },
      {
        name: 'Behind-the-ear',
        tag: 'The most powerful',
        text: 'Robust, easy to handle, long battery life. The reference for severe loss and for children.',
        icon: 'ear',
        size: 'wide',
      },
      {
        name: 'Rechargeable and Bluetooth',
        tag: 'The most practical',
        text: 'No more batteries. Calls and television streamed straight into the devices.',
        icon: 'lightning',
        size: 'small',
      },
      {
        name: 'Custom hearing protection',
        tag: 'Prevention',
        text: 'Moulded plugs for sleep, swimming, music or the worksite.',
        icon: 'shield-check',
        size: 'small',
      },
      {
        name: 'Accessories and care',
        tag: 'Everyday',
        text: 'Remote microphone, TV streamer, batteries, drying capsules and replacement domes.',
        icon: 'faders',
        size: 'small',
      },
    ],
  },

  pricing: {
    title: 'Price, stated plainly.',
    argument: [
      'A hearing aid is a five-year decision, not an invoice. What costs money is not the hardware: it is the time spent matching it to your hearing, then tuning it until you stop thinking about it.',
      'You leave the assessment with an itemised quote, and nothing is signed on the day. Take the time to compare, here or anywhere else.',
    ],
    includedTitle: 'What the price covers',
    included: [
      'The initial fitting, and ear impressions where needed',
      'Every adjustment during the trial period',
      'Follow-up checks and cleaning at the centre',
      'Manufacturer warranty and repairs',
      'A compliant quote and invoice for your reimbursement claim',
    ],
    coverageTitle: 'Reimbursement',
    coverage:
      'Depending on your scheme (CNSS, CNOPS, AMO or a company plan), part of the cost may be reimbursed. We prepare the paperwork your claim needs.',
    note: 'Prices depend on the level of technology and on your hearing loss. They are given at the centre, after the assessment.',
  },

  center: {
    practitionerTitle: 'Who will see you',
    practitionerSince: 'Practising for {years} years.',
    title: 'In Les Princesses, Maârif, at 106B rue Al Jounaid.',
    lede:
      'A human-scale centre. The same person from the first assessment to the last adjustment, because a successful fitting rests on a continuing relationship.',
    facts: [
      { label: 'Address',   key: 'address' },
      { label: 'Phone',     key: 'phone' },
      { label: 'District',  key: 'district' },
      { label: 'Plus code', key: 'pluscode' },
    ],
    hoursTitle: 'Opening hours',
    closed: 'Closed',
    today: 'Today',
    slotAnd: 'and',
    directions: 'Get directions',
    mapTitle: 'Map showing AudioLik, 106B rue Al Jounaid, Casablanca',
    days: {
      monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday', thursday: 'Thursday',
      friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday',
    },
    daysShort: {
      monday: 'Mon', tuesday: 'Tue', wednesday: 'Wed', thursday: 'Thu',
      friday: 'Fri', saturday: 'Sat', sunday: 'Sun',
    },
  },

  testimonials: {
    title: 'In their own words.',
    items: [],
    emptyCta: 'Leave a review on Google',
  },

  faq: {
    title: 'What people ask us most.',
    items: [
      {
        q: 'At what age should I have my hearing tested?',
        a: 'At any age, as soon as a sign appears. After 60, a check every two years is a good habit even without noticeable difficulty: loss creeps in so gradually that you adapt without realising.',
      },
      {
        q: 'Will a hearing aid be visible?',
        a: 'Far less than people expect. Receiver-in-canal models are invisible from the front, and in-the-ear devices sit entirely inside the canal. Most people around you will not notice.',
      },
      {
        q: 'How long does it take to get used to?',
        a: 'A few weeks, generally. At first everyday sounds, a rustling bag or your own footsteps, feel overwhelming: your brain had simply filed them away. Progressive adjustment exists precisely for that.',
      },
      {
        q: 'Do both ears need to be fitted?',
        a: 'If both are affected, yes. The brain locates sound by comparing what each ear receives. With only one ear fitted you hear louder but understand less in noise.',
      },
      {
        q: 'Do I need an ENT referral?',
        a: 'Not to come for an assessment. For reimbursement, however, your scheme generally requires a medical prescription. We refer you to an ENT doctor where needed, and the assessment forms the basis of the file.',
      },
      {
        q: 'How long does a hearing aid last?',
        a: 'Four to six years in ordinary use, often longer with regular servicing. The electronics age more slowly than moisture and earwax wear them down, hence the check-ups.',
      },
      {
        q: 'I have tinnitus. Can you help?',
        a: 'Often, yes. Tinnitus frequently accompanies hearing loss: restoring the missing sounds makes it markedly less present. The first step is still an assessment, plus an ENT opinion if the ringing appeared suddenly or on one side only.',
      },
      {
        q: 'What if it is only earwax?',
        a: 'It is a common cause of sudden hearing loss, and otoscopy spots it immediately. In that case there is no device to fit: we refer you to a doctor for removal, and your hearing comes back.',
      },
    ],
  },

  contact: {
    kicker: 'Contact',
    title: 'Two ways to book.',
    lede:
      'Call the centre during opening hours and reception will book you in. Outside those hours, send the message already written for you on WhatsApp, and we reply when the centre reopens.',
    options: {
      recommended: 'Fastest right now',
      call: {
        tag: 'Option 1 · Phone',
        title: 'Call the centre',
        text: 'Reception books the appointment with you and answers your questions there and then. The most direct route while the centre is open.',
        cta: 'Call',
        open: 'Open, we pick up',
        closed: 'Closed right now',
        availability: 'Line open {hours}',
      },
      whatsapp: {
        tag: 'Option 2 · WhatsApp',
        title: 'Send a message',
        text: 'The message is already written: all you have to do is press send. We reply as soon as the centre reopens.',
        cta: 'Open WhatsApp',
        note: 'Any time, day or night',
      },
    },
    onsite: { label: 'Or come and see us', cta: 'Get directions' },
    form: {
      title: 'Or write to us.',
      intro: 'Describe your situation in two lines: the reason, and a time that suits you.',
      name: 'Your name',
      namePlaceholder: 'First and last name',
      phone: 'Your phone number',
      phonePlaceholder: '06 XX XX XX XX',
      reason: 'Reason',
      reasons: ['Hearing assessment', 'Trial or purchase of hearing aids', 'Adjustment or repair', 'Custom hearing protection', 'Other'],
      message: 'Your message (optional)',
      messagePlaceholder: 'For example: trouble in noisy rooms, a device to adjust',
      submit: 'Send the request',
      submitHint: 'Opens your email app with the request pre-filled.',
      noscript: 'Your browser is not running the form script. Call the centre or write on WhatsApp — both work right away.',
    required: 'Required field',
      invalidPhone: 'Incomplete phone number',
      subject: 'Appointment request · AudioLik',
    },
    whatsappPrefill:
      'Hello, I would like to book a hearing assessment. What are your next available slots?',
    whatsappPrefillQuiz:
      'Hello, I have just taken the online hearing check (score {score}/{max}) and would like to book an assessment.',
  },

  photo: {
    pending: 'Photograph to come',
  },

  footer: {
    tagline: 'Hearing correction centre. Casablanca, Les Princesses, Maârif.',
    nav: 'Navigation',
    followTitle: 'The centre online',
    instagramCta: 'Instagram',
    reviewCta: 'Leave a review on Google',
    contactTitle: 'Contact',
    pagesTitle: 'Our pages',
    legal: [
      'AudioLik is a hearing correction centre. The information published on this site is general in nature and does not constitute medical advice.',
      'Only an assessment carried out at the centre, together with an ENT consultation where necessary, can evaluate your hearing.',
    ],
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },
};
