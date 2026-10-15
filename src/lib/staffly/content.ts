import type { Language } from "./config";
export interface Feature {
  title: string;
  label: string;
  description: string;
  points: string[];
  image?: "profile" | "attendance" | "checkpoint";
}
export interface Content {
  nav: string[];
  get: string;
  play: string;
  explore: string;
  menu: string;
  close: string;
  language: string;
  eyebrow: string;
  hero: string[];
  heroDescription: string;
  trust: string[];
  example: string;
  recorded: string;
  ready: string;
  android: string;
  valueLabel: string;
  values: { title: string; description: string }[];
  featureLabel: string;
  featureTitle: string;
  featureDescription: string;
  features: Feature[];
  howLabel: string;
  howTitle: string;
  howDescription: string;
  steps: { title: string; description: string }[];
  shared: string;
  accessLabel: string;
  accessTitle: string;
  accessDescription: string;
  coming: string;
  available: string;
  accessPoints: string[];
  sync: string;
  personal: string;
  nearby: string;
  downloaded: string;
  securityLabel: string;
  securityTitle: string;
  securityDescription: string;
  security: { title: string; description: string }[];
  internet: string;
  proLabel: string;
  proTitle: string;
  proDescription: string;
  freeLabel: string;
  proBadge: string;
  freePoints: string[];
  proPoints: string[];
  freeNote: string;
  plans: string;
  billing: string;
  faqLabel: string;
  faqTitle: string;
  faqDescription: string;
  faqs: { q: string; a: string }[];
  finalTitle: string;
  finalDescription: string;
  footerTag: string;
  privacy: string;
  terms: string;
  contact: string;
  publisher: string;
  country: string;
  rights: string;
  legalTitle: string;
  legalNotice: string;
  legalBody: string;
  home: string;
  metaTitle: string;
  metaDescription: string;
  screenshot: string;
  skip: string;
}
const en: Content = {
  nav: ["Features", "How it works", "Employee access", "Staffly Pro", "FAQ"],
  get: "Get Staffly",
  play: "Get Staffly on Google Play",
  explore: "Explore the features",
  menu: "Open navigation",
  close: "Close navigation",
  language: "Choose language",
  eyebrow: "LESS ADMIN. MORE BUSINESS.",
  hero: ["Your team.", "Your time.", "Under control."],
  heroDescription:
    "Manage staff, attendance, leave and gross payroll from one shared workplace device—even when the internet isn’t available.",
  trust: [
    "Core HR works offline",
    "English, French and Arabic",
    "Business records stored on your device",
  ],
  example: "EXAMPLE",
  recorded: "Attendance recorded",
  ready: "Monthly report ready",
  android: "Available for Android",
  valueLabel: "A LITTLE LESS WORK. A LOT MORE CLARITY.",
  values: [
    {
      title: "Simplify daily attendance",
      description:
        "From the first clock-in to the last break, keep the working day easy to follow.",
    },
    {
      title: "Keep your team organized",
      description: "People, schedules and leave. Everything in its place, on one workplace device.",
    },
    {
      title: "Make reporting feel lighter",
      description: "Turn everyday records into clear exports, gross payroll and useful documents.",
    },
  ],
  featureLabel: "BUILT FOR YOUR WORKING DAY",
  featureTitle: "The right tools.\nAll in one place.",
  featureDescription: "Practical staff management, without the complicated infrastructure.",
  features: [
    {
      title: "Staff management",
      label: "People first. Paperwork second.",
      description:
        "Keep the details that matter together, so you can focus on the people behind them.",
      points: [
        "Employee profiles, departments and job details",
        "Profile photos stored locally on your device",
        "Preserved history when staff are archived",
      ],
      image: "profile",
    },
    {
      title: "Attendance & breaks",
      label: "Every working day, accounted for.",
      description:
        "A simple checkpoint. A clearer picture of the day. Use compatible NFC cards or enter checkpoints manually.",
      points: [
        "Clock-ins, clock-outs and paid or unpaid breaks",
        "Review corrections with checkpoint history",
        "Recorded presence stays distinct from approved payable time",
      ],
      image: "attendance",
    },
    {
      title: "Work schedules",
      label: "A clearer plan for the week.",
      description:
        "Organize weekly schedules and employee assignments, with exceptions when plans change.",
      points: [
        "Weekly schedules and individual assignments",
        "Review late arrivals and missing clock-outs",
        "Insights support review—not legal absence findings or automatic wage deductions",
      ],
    },
    {
      title: "Leave management",
      label: "Time away, thoughtfully managed.",
      description:
        "Keep leave decisions, calendars and balances together, with flexibility for your business.",
      points: [
        "Paid and unpaid leave types",
        "Full days, half days and approval decisions",
        "Leave calendars and configurable balances",
      ],
    },
    {
      title: "Gross payroll",
      label: "From working time to clearer records.",
      description:
        "Prepare gross wages with hourly, daily or monthly rates, and keep a record of payments already made.",
      points: [
        "Reasoned adjustments and finalized payroll",
        "PDF payslips and payment records",
        "No statutory tax calculations or money transfers",
      ],
    },
    {
      title: "Reports & documents",
      label: "Your records. Ready to use.",
      description:
        "Bring business records out of the app when you need to review, save or share them.",
      points: [
        "Excel exports for attendance, leave, schedules and payroll",
        "Selected CSV exports",
        "Generated documents in a dedicated library",
      ],
    },
  ],
  howLabel: "A SIMPLE START",
  howTitle: "One device.\nA better daily routine.",
  howDescription: "Set up your workplace once. Keep the everyday essentials close.",
  steps: [
    {
      title: "Make it your business",
      description: "Choose your business details, language, currency and timezone.",
    },
    {
      title: "Bring your team together",
      description: "Add your employees and choose NFC cards or manual checkpoints.",
    },
    {
      title: "Stay on top of the day",
      description: "Review attendance, manage leave and export the reports you need.",
    },
  ],
  shared:
    "One shared workplace phone or tablet handles checkpoints. Not every employee needs a smartphone.",
  accessLabel: "EMPLOYEE ACCESS",
  accessTitle: "Their records.\nTheir own view.",
  accessDescription:
    "Optional personal access gives employees a clear view of their own working time—not everyone else’s.",
  coming: "Coming in the next release",
  available: "Available in the Android app",
  accessPoints: [
    "View a personal QR badge",
    "Consult downloaded checkpoints and breaks",
    "Review monthly presence, schedules and leave balances",
    "Refresh permitted records near the workplace device",
    "Read downloaded records later, without internet",
  ],
  sync: "Refresh your records near the workplace device using Bluetooth and Wi-Fi. No router is required. Your latest downloaded records remain available afterward.",
  personal: "Personal records only",
  nearby: "Nearby refresh",
  downloaded: "Available offline afterward",
  securityLabel: "LOCAL BY DESIGN",
  securityTitle: "Your business records.\nIn your hands.",
  securityDescription:
    "Practical protection and local control, without making the internet part of every working day.",
  security: [
    {
      title: "Protected admin access",
      description: "Use supported device authentication or a Staffly PIN.",
    },
    {
      title: "Encrypted local storage",
      description: "Staff records and profile photos are encrypted on your device.",
    },
    {
      title: "Business-controlled backups",
      description: "Keep password-protected backups under your control.",
    },
    {
      title: "Exports on your terms",
      description: "Readable exports you choose to save or share.",
    },
  ],
  internet:
    "Core HR workflows work offline. Ads, purchases and subscription verification require internet.",
  proLabel: "STAFFLY & STAFFLY PRO",
  proTitle: "Same useful tools.\nYour choice of experience.",
  proDescription: "All the HR essentials are included. Pro simply removes the advertisements.",
  freeLabel: "Everyday essentials",
  proBadge: "WITHOUT THE ADS",
  freePoints: ["Core HR features", "Offline business workflows", "Includes advertisements"],
  proPoints: ["The same HR features", "Removes advertisements", "Monthly or yearly subscription"],
  freeNote: "Get started with Staffly",
  plans: "See current plans in the app",
  billing: "Billing and renewal details are displayed before purchase.",
  faqLabel: "GOOD QUESTIONS. CLEAR ANSWERS.",
  faqTitle: "A few things worth knowing.",
  faqDescription: "The practical details, before you get started.",
  faqs: [
    {
      q: "Does Staffly work without internet?",
      a: "Yes. Core HR workflows work offline. Ads, purchases and subscription verification require an internet connection.",
    },
    {
      q: "Does every employee need a phone?",
      a: "No. One shared workplace Android phone or tablet can handle checkpoints. Personal Employee Access is optional and is coming in the next release.",
    },
    {
      q: "Do I need NFC?",
      a: "No. You can enter checkpoints manually. Compatible NFC cards offer another convenient option when your workplace device supports NFC.",
    },
    {
      q: "Can I export reports to Excel?",
      a: "Yes. Export attendance, leave, work schedules and payroll to Excel. Selected CSV exports and a dedicated generated-document library are also available.",
    },
    {
      q: "Does Staffly calculate taxes or transfer salaries?",
      a: "No. Staffly calculates gross wages and records payments already made. It does not calculate statutory taxes or contributions, or transfer money.",
    },
    {
      q: "Where are business records stored?",
      a: "Staff records and photos are stored in encrypted local application storage on your workplace device. You control password-protected backups and choose which readable exports to save or share.",
    },
    {
      q: "Can employees refresh their records from home?",
      a: "No. Employee Access is prepared for the next Android release. Refreshing permitted records requires being near the workplace device, using Bluetooth and Wi-Fi. Previously downloaded records can be read later offline.",
    },
    {
      q: "Is Staffly available for iPhone?",
      a: "Android is the currently promoted platform. There is no confirmed iPhone release date.",
    },
    {
      q: "What does Staffly Pro include?",
      a: "Staffly Pro has the same HR features as Staffly, without advertisements. Monthly or yearly subscription plans, current prices, billing and renewal details are shown in the app before purchase.",
    },
  ],
  finalTitle: "Bring clarity to your\ndaily team management.",
  finalDescription: "A practical working day starts with Staffly.",
  footerTag: "A clearer day. A better-run team.",
  privacy: "Privacy Policy",
  terms: "Subscription Terms",
  contact: "Contact",
  publisher: "Published by",
  country: "Algeria",
  rights: "Staffly. All rights reserved.",
  legalTitle: "Approved content pending",
  legalNotice: "This page is awaiting the publisher’s approved document.",
  legalBody:
    "No policy or subscription terms have been supplied for this website yet. This notice is not a legal policy. Please contact the publisher for the applicable approved document before relying on this page.",
  home: "Back to Staffly",
  metaTitle: "Staffly — Your team. Your time. Under control.",
  metaDescription:
    "Manage staff, attendance, schedules, leave and gross payroll from one shared Android workplace device. Core HR works offline.",
  screenshot: "Staffly app screen",
  skip: "Skip to content",
};
const fr: Content = {
  nav: ["Fonctionnalités", "Premiers pas", "Accès employé", "Staffly Pro", "FAQ"],
  get: "Obtenir Staffly",
  play: "Obtenir Staffly sur Google Play",
  explore: "Découvrir les fonctionnalités",
  menu: "Ouvrir la navigation",
  close: "Fermer la navigation",
  language: "Choisir la langue",
  eyebrow: "MOINS DE GESTION. PLUS D’ESSENTIEL.",
  hero: ["Votre équipe.", "Votre temps.", "Sous contrôle."],
  heroDescription:
    "Gérez le personnel, la présence, les congés et la paie brute depuis un seul appareil partagé sur le lieu de travail, même sans connexion internet.",
  trust: [
    "La gestion RH fonctionne hors ligne",
    "Anglais, français et arabe",
    "Données conservées sur votre appareil",
  ],
  example: "EXEMPLE",
  recorded: "Présence enregistrée",
  ready: "Rapport mensuel prêt",
  android: "Disponible sur Android",
  valueLabel: "MOINS DE TÂCHES. PLUS DE CLARTÉ.",
  values: [
    {
      title: "Simplifiez la présence au quotidien",
      description:
        "Du premier pointage à la dernière pause, suivez facilement la journée de travail.",
    },
    {
      title: "Gardez votre équipe organisée",
      description: "Personnel, horaires et congés : tout à sa place, sur un seul appareil partagé.",
    },
    {
      title: "Allégez la préparation des rapports",
      description:
        "Transformez les données du quotidien en exports clairs, paie brute et documents utiles.",
    },
  ],
  featureLabel: "POUR VOTRE JOURNÉE DE TRAVAIL",
  featureTitle: "Les bons outils.\nAu même endroit.",
  featureDescription: "Une gestion du personnel pratique, sans infrastructure compliquée.",
  features: [
    {
      title: "Gestion du personnel",
      label: "Les personnes avant les formalités.",
      description:
        "Rassemblez les informations utiles pour vous concentrer sur les personnes qui font vivre votre entreprise.",
      points: [
        "Profils, services et informations professionnelles",
        "Photos de profil conservées localement",
        "Historique préservé pour le personnel archivé",
      ],
      image: "profile",
    },
    {
      title: "Présence et pauses",
      label: "Chaque journée, clairement suivie.",
      description:
        "Un pointage simple pour mieux comprendre la journée. Utilisez des cartes NFC compatibles ou la saisie manuelle.",
      points: [
        "Entrées, sorties et pauses payées ou non payées",
        "Corrections et historique des pointages",
        "Présence enregistrée distincte du temps payable approuvé",
      ],
      image: "attendance",
    },
    {
      title: "Horaires de travail",
      label: "Une semaine mieux organisée.",
      description:
        "Planifiez les horaires hebdomadaires et les affectations, avec des exceptions si vos besoins évoluent.",
      points: [
        "Horaires hebdomadaires et affectations individuelles",
        "Examen des retards et des sorties manquantes",
        "Les indicateurs aident à la vérification, sans établir d’absence légale ni de retenue automatique sur salaire",
      ],
    },
    {
      title: "Gestion des congés",
      label: "Les absences, en toute clarté.",
      description:
        "Regroupez décisions, calendriers et soldes de congés, avec la souplesse nécessaire à votre activité.",
      points: [
        "Types de congés payés et non payés",
        "Journées, demi-journées et décisions d’approbation",
        "Calendriers et soldes configurables",
      ],
    },
    {
      title: "Paie brute",
      label: "Du temps travaillé aux bons documents.",
      description:
        "Préparez les salaires bruts à partir de tarifs horaires, journaliers ou mensuels et consignez les paiements déjà effectués.",
      points: [
        "Ajustements motivés et paie finalisée",
        "Bulletins PDF et suivi des paiements",
        "Sans calcul des taxes légales ni transfert d’argent",
      ],
    },
    {
      title: "Rapports et documents",
      label: "Vos données, prêtes à servir.",
      description:
        "Exportez vos données lorsque vous souhaitez les vérifier, les enregistrer ou les partager.",
      points: [
        "Exports Excel : présence, congés, horaires et paie",
        "Certains exports au format CSV",
        "Bibliothèque dédiée aux documents générés",
      ],
    },
  ],
  howLabel: "UN DÉMARRAGE SIMPLE",
  howTitle: "Un appareil.\nUne meilleure routine.",
  howDescription:
    "Configurez votre lieu de travail une seule fois. Gardez l’essentiel à portée de main.",
  steps: [
    {
      title: "Configurez votre entreprise",
      description:
        "Choisissez les informations de l’entreprise, la langue, la devise et le fuseau horaire.",
    },
    {
      title: "Rassemblez votre équipe",
      description: "Ajoutez vos employés et choisissez les cartes NFC ou les pointages manuels.",
    },
    {
      title: "Suivez le quotidien",
      description: "Vérifiez la présence, gérez les congés et exportez vos rapports.",
    },
  ],
  shared:
    "Un seul téléphone ou une tablette partagé sur le lieu de travail suffit pour les pointages. Chaque employé n’a pas besoin d’un smartphone.",
  accessLabel: "ACCÈS EMPLOYÉ",
  accessTitle: "Ses données.\nSon propre espace.",
  accessDescription:
    "Un accès personnel facultatif pour consulter son temps de travail, pas les données des collègues.",
  coming: "Prévu dans la prochaine version",
  available: "Disponible dans l’application Android",
  accessPoints: [
    "Afficher un badge QR personnel",
    "Consulter les pointages et pauses téléchargés",
    "Voir la présence mensuelle, les horaires et les soldes de congés",
    "Actualiser les données autorisées près de l’appareil partagé",
    "Lire les données téléchargées plus tard, sans internet",
  ],
  sync: "Actualisez vos données près de l’appareil du lieu de travail via Bluetooth et Wi-Fi. Aucun routeur n’est nécessaire. Les dernières données téléchargées restent ensuite disponibles.",
  personal: "Données personnelles uniquement",
  nearby: "Actualisation à proximité",
  downloaded: "Consultation hors ligne ensuite",
  securityLabel: "LOCAL PAR CONCEPTION",
  securityTitle: "Vos données professionnelles.\nEntre vos mains.",
  securityDescription:
    "Une protection pratique et un contrôle local, sans dépendre d’internet pour chaque journée de travail.",
  security: [
    {
      title: "Accès administrateur protégé",
      description: "Authentification compatible de l’appareil ou code PIN Staffly.",
    },
    {
      title: "Stockage local chiffré",
      description: "Les données et photos du personnel sont chiffrées sur l’appareil.",
    },
    {
      title: "Sauvegardes sous votre contrôle",
      description: "Vous gérez vos sauvegardes protégées par mot de passe.",
    },
    {
      title: "Vos exports, votre choix",
      description: "Des exports lisibles que vous choisissez d’enregistrer ou de partager.",
    },
  ],
  internet:
    "La gestion RH fonctionne hors ligne. Publicités, achats et vérification des abonnements nécessitent internet.",
  proLabel: "STAFFLY ET STAFFLY PRO",
  proTitle: "Les mêmes outils utiles.\nL’expérience de votre choix.",
  proDescription: "Toutes les fonctions RH sont incluses. Pro supprime simplement les publicités.",
  freeLabel: "L’essentiel au quotidien",
  proBadge: "SANS PUBLICITÉ",
  freePoints: [
    "Fonctionnalités RH essentielles",
    "Gestion professionnelle hors ligne",
    "Avec publicités",
  ],
  proPoints: ["Les mêmes fonctionnalités RH", "Sans publicités", "Abonnement mensuel ou annuel"],
  freeNote: "Commencer avec Staffly",
  plans: "Voir les offres actuelles dans l’app",
  billing: "Les modalités de facturation et de renouvellement sont affichées avant l’achat.",
  faqLabel: "VOS QUESTIONS. DES RÉPONSES CLAIRES.",
  faqTitle: "Quelques points utiles à connaître.",
  faqDescription: "Les détails pratiques, avant de commencer.",
  faqs: [
    {
      q: "Staffly fonctionne-t-il sans internet ?",
      a: "Oui. La gestion RH fonctionne hors ligne. Les publicités, les achats et la vérification des abonnements nécessitent internet.",
    },
    {
      q: "Chaque employé doit-il avoir un téléphone ?",
      a: "Non. Un seul téléphone ou une tablette Android partagé sur le lieu de travail permet les pointages. L’Accès employé personnel est facultatif et prévu dans la prochaine version.",
    },
    {
      q: "Le NFC est-il obligatoire ?",
      a: "Non. Les pointages peuvent être saisis manuellement. Les cartes NFC compatibles offrent une autre option si l’appareil partagé prend en charge le NFC.",
    },
    {
      q: "Puis-je exporter les rapports vers Excel ?",
      a: "Oui. La présence, les congés, les horaires et la paie peuvent être exportés vers Excel. Certains exports CSV et une bibliothèque de documents générés sont également disponibles.",
    },
    {
      q: "Staffly calcule-t-il les taxes ou verse-t-il les salaires ?",
      a: "Non. Staffly calcule les salaires bruts et consigne les paiements déjà effectués. Il ne calcule pas les taxes ou cotisations légales et ne transfère pas d’argent.",
    },
    {
      q: "Où sont conservées les données professionnelles ?",
      a: "Les données et photos du personnel sont conservées dans le stockage local chiffré de l’application sur l’appareil partagé. Vous contrôlez les sauvegardes protégées par mot de passe et les exports lisibles à enregistrer ou partager.",
    },
    {
      q: "Les employés peuvent-ils actualiser leurs données depuis chez eux ?",
      a: "Non. L’Accès employé est préparé pour la prochaine version Android. L’actualisation des données autorisées nécessite d’être près de l’appareil partagé et utilise Bluetooth et Wi-Fi. Les données déjà téléchargées peuvent être lues ensuite hors ligne.",
    },
    {
      q: "Staffly est-il disponible sur iPhone ?",
      a: "Android est la plateforme actuellement mise en avant. Aucune date de sortie sur iPhone n’est confirmée.",
    },
    {
      q: "Que comprend Staffly Pro ?",
      a: "Staffly Pro propose les mêmes fonctionnalités RH, sans publicité. Les abonnements mensuels ou annuels, les prix et les modalités de facturation et de renouvellement sont affichés dans l’application avant l’achat.",
    },
  ],
  finalTitle: "Apportez de la clarté à la\ngestion quotidienne de votre équipe.",
  finalDescription: "Une journée mieux organisée commence avec Staffly.",
  footerTag: "Une journée plus claire. Une équipe mieux gérée.",
  privacy: "Politique de confidentialité",
  terms: "Conditions d’abonnement",
  contact: "Contact",
  publisher: "Publié par",
  country: "Algérie",
  rights: "Staffly. Tous droits réservés.",
  legalTitle: "Contenu approuvé en attente",
  legalNotice: "Cette page attend le document approuvé par l’éditeur.",
  legalBody:
    "Aucune politique ni condition d’abonnement n’a encore été fournie pour ce site. Cet avis n’est pas un document juridique. Veuillez contacter l’éditeur pour obtenir le document approuvé applicable avant de vous appuyer sur cette page.",
  home: "Retour à Staffly",
  metaTitle: "Staffly — Votre équipe. Votre temps. Sous contrôle.",
  metaDescription:
    "Gérez le personnel, la présence, les horaires, les congés et la paie brute sur un seul appareil Android partagé. La gestion RH fonctionne hors ligne.",
  screenshot: "Écran de l’application Staffly",
  skip: "Aller au contenu",
};
const ar: Content = {
  nav: ["المزايا", "كيف يعمل", "وصول الموظفين", "Staffly Pro", "الأسئلة الشائعة"],
  get: "احصل على Staffly",
  play: "احصل على Staffly من Google Play",
  explore: "اكتشف المزايا",
  menu: "فتح قائمة التنقل",
  close: "إغلاق قائمة التنقل",
  language: "اختر اللغة",
  eyebrow: "إدارة أقل. تركيز أكبر على أعمالك.",
  hero: ["فريقك.", "وقتك.", "تحت السيطرة."],
  heroDescription:
    "أدر الموظفين والحضور والإجازات والأجور الإجمالية من جهاز واحد مشترك في مكان العمل، حتى عندما لا يتوفر الإنترنت.",
  trust: [
    "وظائف الموارد البشرية الأساسية دون إنترنت",
    "الإنجليزية والفرنسية والعربية",
    "بيانات العمل محفوظة على جهازك",
  ],
  example: "مثال",
  recorded: "تم تسجيل الحضور",
  ready: "التقرير الشهري جاهز",
  android: "متوفر لأجهزة Android",
  valueLabel: "مهام أقل. وضوح أكثر.",
  values: [
    {
      title: "بسّط متابعة الحضور اليومي",
      description: "من أول تسجيل دخول إلى آخر استراحة، تابع يوم العمل بسهولة.",
    },
    {
      title: "حافظ على تنظيم فريقك",
      description: "الموظفون والجداول والإجازات، كل شيء في مكانه على جهاز واحد في مكان العمل.",
    },
    {
      title: "اجعل إعداد التقارير أسهل",
      description: "حوّل السجلات اليومية إلى ملفات واضحة وأجور إجمالية ومستندات مفيدة.",
    },
  ],
  featureLabel: "مصمم ليوم عملك",
  featureTitle: "الأدوات المناسبة.\nفي مكان واحد.",
  featureDescription: "إدارة عملية للموظفين، دون بنية تقنية معقدة.",
  features: [
    {
      title: "إدارة الموظفين",
      label: "الأشخاص أولاً. والإجراءات ثانياً.",
      description: "اجمع المعلومات المهمة لتتمكن من التركيز على الأشخاص الذين يدعمون أعمالك.",
      points: [
        "ملفات الموظفين والأقسام وتفاصيل الوظائف",
        "صور الملفات محفوظة محلياً على جهازك",
        "الاحتفاظ بسجل الموظفين المؤرشفين",
      ],
      image: "profile",
    },
    {
      title: "الحضور والاستراحات",
      label: "كل يوم عمل، بوضوح.",
      description:
        "تسجيل بسيط يمنحك صورة أوضح لليوم. استخدم بطاقات NFC المتوافقة أو أدخل التسجيلات يدوياً.",
      points: [
        "تسجيل الدخول والخروج والاستراحات المدفوعة وغير المدفوعة",
        "مراجعة التصحيحات وسجل التسجيلات",
        "فصل الحضور المسجل عن الوقت المعتمد المستحق للأجر",
      ],
      image: "attendance",
    },
    {
      title: "جداول العمل",
      label: "خطة أوضح للأسبوع.",
      description: "نظّم الجداول الأسبوعية وتعيينات الموظفين، مع الاستثناءات عند تغير الخطط.",
      points: [
        "جداول أسبوعية وتعيينات فردية",
        "مراجعة التأخر وتسجيلات الخروج الناقصة",
        "المؤشرات تساعد على المراجعة ولا تثبت غياباً قانونياً أو خصماً تلقائياً من الأجور",
      ],
    },
    {
      title: "إدارة الإجازات",
      label: "إجازات منظمة بعناية.",
      description: "اجمع قرارات الإجازات والتقويمات والأرصدة مع مرونة تناسب أعمالك.",
      points: [
        "أنواع إجازات مدفوعة وغير مدفوعة",
        "أيام كاملة وأنصاف أيام وقرارات الموافقة",
        "تقويمات الإجازات وأرصدة قابلة للإعداد",
      ],
    },
    {
      title: "الأجور الإجمالية",
      label: "من وقت العمل إلى سجلات أوضح.",
      description:
        "أعد الأجور الإجمالية وفق معدلات بالساعة أو باليوم أو بالشهر، وسجّل المدفوعات التي تمت بالفعل.",
      points: [
        "تعديلات موضحة الأسباب وكشوف أجور نهائية",
        "قسائم أجور PDF وسجلات المدفوعات",
        "دون حساب الضرائب القانونية أو تحويل الأموال",
      ],
    },
    {
      title: "التقارير والمستندات",
      label: "سجلاتك. جاهزة للاستخدام.",
      description: "صدّر بيانات العمل عندما تحتاج إلى مراجعتها أو حفظها أو مشاركتها.",
      points: [
        "تصدير Excel للحضور والإجازات والجداول والأجور",
        "تصدير CSV لبعض السجلات",
        "مكتبة مخصصة للمستندات المُنشأة",
      ],
    },
  ],
  howLabel: "بداية بسيطة",
  howTitle: "جهاز واحد.\nروتين يومي أفضل.",
  howDescription: "جهّز مكان عملك مرة واحدة. واحتفظ بالأساسيات في متناولك.",
  steps: [
    {
      title: "جهّز بيانات أعمالك",
      description: "اختر بيانات المؤسسة واللغة والعملة والمنطقة الزمنية.",
    },
    { title: "أضف فريقك", description: "أضف موظفيك واختر بطاقات NFC أو التسجيل اليدوي." },
    {
      title: "تابع يوم العمل",
      description: "راجع الحضور وأدر الإجازات وصدّر التقارير التي تحتاج إليها.",
    },
  ],
  shared:
    "يمكن لهاتف أو جهاز لوحي واحد مشترك في مكان العمل معالجة التسجيلات. لا يحتاج كل موظف إلى هاتف ذكي.",
  accessLabel: "وصول الموظفين",
  accessTitle: "سجلاتهم.\nمساحتهم الخاصة.",
  accessDescription:
    "وصول شخصي اختياري يمنح الموظفين نظرة واضحة على وقت عملهم، وليس بيانات زملائهم.",
  coming: "قادم في الإصدار التالي",
  available: "متوفر في تطبيق Android",
  accessPoints: [
    "عرض شارة QR شخصية",
    "الاطلاع على تسجيلات الحضور والاستراحات المُنزّلة",
    "مراجعة الحضور الشهري والجداول وأرصدة الإجازات",
    "تحديث السجلات المسموح بها بالقرب من جهاز مكان العمل",
    "قراءة السجلات المُنزّلة لاحقاً دون إنترنت",
  ],
  sync: "حدّث سجلاتك بالقرب من جهاز مكان العمل باستخدام Bluetooth وWi-Fi. لا حاجة إلى جهاز توجيه. تبقى أحدث السجلات المُنزّلة متاحة بعد ذلك.",
  personal: "السجلات الشخصية فقط",
  nearby: "تحديث بالقرب من الجهاز",
  downloaded: "متاحة لاحقاً دون إنترنت",
  securityLabel: "محلي من الأساس",
  securityTitle: "سجلات أعمالك.\nبين يديك.",
  securityDescription: "حماية عملية وتحكم محلي، دون الاعتماد على الإنترنت في كل يوم عمل.",
  security: [
    {
      title: "وصول محمي للمسؤول",
      description: "استخدم مصادقة الجهاز المدعومة أو رمز PIN الخاص بـ Staffly.",
    },
    { title: "تخزين محلي مشفّر", description: "سجلات الموظفين وصورهم مشفّرة على جهازك." },
    {
      title: "نسخ احتياطية تتحكم بها",
      description: "أدر النسخ الاحتياطية المحمية بكلمة مرور بنفسك.",
    },
    { title: "ملفات تصدير وفق اختيارك", description: "ملفات مقروءة تختار حفظها أو مشاركتها." },
  ],
  internet:
    "تعمل وظائف الموارد البشرية الأساسية دون إنترنت. تتطلب الإعلانات والمشتريات والتحقق من الاشتراكات اتصالاً بالإنترنت.",
  proLabel: "STAFFLY وSTAFFLY PRO",
  proTitle: "الأدوات المفيدة نفسها.\nوالتجربة التي تختارها.",
  proDescription: "جميع وظائف الموارد البشرية الأساسية مشمولة. يزيل Pro الإعلانات ببساطة.",
  freeLabel: "أساسيات كل يوم",
  proBadge: "دون إعلانات",
  freePoints: ["وظائف الموارد البشرية الأساسية", "إدارة العمل دون إنترنت", "يتضمن إعلانات"],
  proPoints: ["وظائف الموارد البشرية نفسها", "إزالة الإعلانات", "اشتراك شهري أو سنوي"],
  freeNote: "ابدأ باستخدام Staffly",
  plans: "اطّلع على الخطط الحالية في التطبيق",
  billing: "تظهر تفاصيل الفوترة والتجديد قبل الشراء.",
  faqLabel: "أسئلة مهمة. إجابات واضحة.",
  faqTitle: "أمور تستحق معرفتها.",
  faqDescription: "التفاصيل العملية، قبل أن تبدأ.",
  faqs: [
    {
      q: "هل يعمل Staffly دون إنترنت؟",
      a: "نعم. تعمل وظائف الموارد البشرية الأساسية دون إنترنت. تتطلب الإعلانات والمشتريات والتحقق من الاشتراكات اتصالاً بالإنترنت.",
    },
    {
      q: "هل يحتاج كل موظف إلى هاتف؟",
      a: "لا. يمكن لهاتف أو جهاز لوحي Android واحد مشترك في مكان العمل معالجة التسجيلات. الوصول الشخصي للموظفين اختياري وقادم في الإصدار التالي.",
    },
    {
      q: "هل أحتاج إلى NFC؟",
      a: "لا. يمكنك إدخال التسجيلات يدوياً. توفر بطاقات NFC المتوافقة خياراً آخر إذا كان جهاز مكان العمل يدعم NFC.",
    },
    {
      q: "هل يمكن تصدير التقارير إلى Excel؟",
      a: "نعم. يمكنك تصدير الحضور والإجازات والجداول والأجور إلى Excel. يتوفر أيضاً تصدير CSV لبعض السجلات ومكتبة مخصصة للمستندات المُنشأة.",
    },
    {
      q: "هل يحسب Staffly الضرائب أو يحوّل الرواتب؟",
      a: "لا. يحسب Staffly الأجور الإجمالية ويسجّل المدفوعات التي تمت بالفعل. لا يحسب الضرائب أو المساهمات القانونية ولا يحوّل الأموال.",
    },
    {
      q: "أين تُخزّن بيانات العمل؟",
      a: "تُحفظ سجلات الموظفين وصورهم في التخزين المحلي المشفّر للتطبيق على جهاز مكان العمل. تتحكم أنت في النسخ الاحتياطية المحمية بكلمة مرور وتختار ملفات التصدير المقروءة التي تريد حفظها أو مشاركتها.",
    },
    {
      q: "هل يمكن للموظفين تحديث سجلاتهم من المنزل؟",
      a: "لا. وصول الموظفين مُعدّ للإصدار التالي من Android. يتطلب تحديث السجلات المسموح بها التواجد بالقرب من جهاز مكان العمل باستخدام Bluetooth وWi-Fi. يمكن قراءة السجلات التي سبق تنزيلها لاحقاً دون إنترنت.",
    },
    {
      q: "هل يتوفر Staffly لأجهزة iPhone؟",
      a: "Android هو النظام الذي يتم الترويج له حالياً. لا يوجد موعد مؤكد لإصدار iPhone.",
    },
    {
      q: "ماذا يتضمن Staffly Pro؟",
      a: "يوفر Staffly Pro وظائف الموارد البشرية نفسها دون إعلانات. تظهر خطط الاشتراك الشهرية أو السنوية والأسعار الحالية وتفاصيل الفوترة والتجديد في التطبيق قبل الشراء.",
    },
  ],
  finalTitle: "أضف الوضوح إلى\nإدارة فريقك اليومية.",
  finalDescription: "يوم عمل أكثر تنظيماً يبدأ مع Staffly.",
  footerTag: "يوم أوضح. وفريق أفضل تنظيماً.",
  privacy: "سياسة الخصوصية",
  terms: "شروط الاشتراك",
  contact: "تواصل معنا",
  publisher: "الناشر",
  country: "الجزائر",
  rights: "Staffly. جميع الحقوق محفوظة.",
  legalTitle: "بانتظار المحتوى المعتمد",
  legalNotice: "تنتظر هذه الصفحة المستند المعتمد من الناشر.",
  legalBody:
    "لم تُقدّم لهذا الموقع بعد سياسة خصوصية أو شروط اشتراك. هذا التنبيه ليس سياسة قانونية. يرجى التواصل مع الناشر للحصول على المستند المعتمد المطبق قبل الاعتماد على هذه الصفحة.",
  home: "العودة إلى Staffly",
  metaTitle: "Staffly — فريقك. وقتك. تحت السيطرة.",
  metaDescription:
    "أدر الموظفين والحضور والجداول والإجازات والأجور الإجمالية من جهاز Android واحد مشترك. تعمل وظائف الموارد البشرية الأساسية دون إنترنت.",
  screenshot: "شاشة من تطبيق Staffly",
  skip: "انتقل إلى المحتوى",
};
export const content: Record<Language, Content> = { en, fr, ar };
