import {
  Sun,
  Zap,
  PlugZap,
  SquareStack,
  Flame,
  Droplets,
  Fan,
  Building2,
  ShieldCheck,
  ClipboardCheck,
  ShoppingCart,
  Users,
  BadgeCheck,
  Clock,
  Wallet,
  Layers,
  HeartHandshake,
  ThumbsUp,
  Home,
  Factory,
  Cross,
  GraduationCap,
  BedDouble,
  ShoppingBag,
  Server,
} from "lucide-react";

/* ========================================================================
   COMPANY / NAP — single source of truth, reused in schema, footer, contact
   ======================================================================== */
export const company = {
  name: "JPS Solutions",
  legalName: "JPS Solutions",
  tagline: "All in One Infra Solutions",
  shortPitch: "Complete MEP & Infrastructure Solutions Under One Roof",
  phone: "9958583165",
  phoneDisplay: "+91 9958583165",
  phoneHref: "tel:+919958583165",
  email: "jpssolutions.services@gmail.com",
  emailHref: "mailto:jpssolutions.services@gmail.com",
  city: "Hapur",
  region: "Ghaziabad, Delhi NCR",
  address: "Shop No. 01, JPS Market, Hapur, Uttar Pradesh – 245101",
  serviceArea: "Ghaziabad, Hapur, Noida, Greater Noida, Delhi NCR",
  hours: "Monday – Saturday, 9:00 AM – 7:00 PM",
  gstin: "09DQYPK8396C1ZW",
  whatsappHref: "https://wa.me/919958583165",
  domain: "https://www.jpssolutions.in",
};

/* ========================================================================
   NAVIGATION
   ======================================================================== */
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Industries", href: "#industries" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

/* ========================================================================
   HERO
   ======================================================================== */
export const hero = {
  eyebrow: "All in One Infra Solutions — Ghaziabad & Delhi NCR",
  headlineLines: ["COMPLETE MEP &", "INFRASTRUCTURE", "SOLUTIONS."],
  subhead:
    "JPS Solutions is a trusted MEP and infrastructure contractor based in Hapur, serving Ghaziabad, Noida, Greater Noida and Delhi NCR. We deliver electrical, HVAC, plumbing, fire fighting, solar, EV charging and civil works — design through maintenance — for residential, commercial and industrial projects.",
  ctaPrimary: "Get a Free MEP Quote",
  ctaSecondary: "View Our Services",
  ticker: [
    "Electrical Contractor Ghaziabad",
    "Solar & EV Charging Installation",
    "HVAC & Mechanical Contractor",
    "Fire Fighting System Installation",
    "Plumbing & Drainage Contractor",
    "Civil Works & Renovation",
    "Waterproofing Contractor Ghaziabad",
    "Building Compliance & Safety Audits",
  ],
  process: [
    ["01", "Design"],
    ["02", "Installation"],
    ["03", "Compliance"],
    ["04", "Maintenance"],
  ],
};

/* ========================================================================
   STATS (used in About / credibility strip — no parallax, static band)
   ======================================================================== */
export const stats = [
  { value: 11, suffix: "+", label: "Service Verticals" },
  { value: 8, suffix: "", label: "Industries Served" },
  { value: 100, suffix: "%", label: "End-to-End Delivery" },
  { value: 24, suffix: "/7", label: "Maintenance Support" },
];

/* ========================================================================
   ABOUT
   ======================================================================== */
export const about = {
  eyebrow: "01 — About Us",
  heading: "A Trusted MEP & Infrastructure Contractor in Ghaziabad, Hapur & Delhi NCR",
  paragraphs: [
    "JPS Solutions is a complete MEP (Mechanical, Electrical & Plumbing) and infrastructure services company based in Hapur, Uttar Pradesh, serving clients across Ghaziabad, Noida, Greater Noida, Meerut and the wider Delhi NCR region.",
    "We provide end-to-end infrastructure solutions under one roof — from electrical installations and HVAC systems to plumbing, fire fighting, solar power, EV charging infrastructure, civil works and building compliance — so our clients don't need to coordinate between multiple contractors for a single project.",
    "Our team has handled MEP scopes for residential societies, commercial complexes, industrial plants, hospitals, educational institutions, hotels, retail spaces and IT parks across the NCR region. Every project follows a structured process: design and planning, material procurement, installation, testing and commissioning, and ongoing maintenance through AMC contracts.",
    "We are registered under GSTIN 09DQYPK8396C1ZW and operate from our office at Shop No. 01, JPS Market, Hapur, Uttar Pradesh 245101. Whether you need a single electrical panel installed or a complete MEP package for a new commercial building, JPS Solutions delivers with a commitment to safety, code compliance, and on-time execution.",
  ],
  mission:
    "To deliver high-quality, reliable, and sustainable infrastructure solutions across Ghaziabad and Delhi NCR that exceed client expectations through innovation, safety, and engineering excellence.",
  vision:
    "To be the leading MEP and infrastructure solutions provider in Delhi NCR, recognised for integrity, technical quality, and our commitment to building a safer, more efficient tomorrow.",
};

/* ========================================================================
   SERVICES — h3 + one-line SEO description + supporting bullets per card
   ======================================================================== */
export const servicesIntro = {
  eyebrow: "02 — What We Do",
  heading: "MEP & Infrastructure Services in Ghaziabad and Delhi NCR",
  body: "From the first electrical drawing to the last service call, JPS Solutions plans, installs, tests and maintains every MEP system inside your building. Below are our core service verticals — each backed by an experienced, safety-certified team serving Ghaziabad, Hapur, Noida and the NCR region.",
};

export const services = [
  {
    icon: Zap,
    title: "Electrical Works & Systems",
    description:
      "Complete HT/LT electrical installation, DG synchronization, power distribution and cable laying for residential, commercial and industrial buildings across Ghaziabad and NCR.",
    items: [
      "HT/LT electrical installations",
      "DG synchronization",
      "Power distribution & cable laying",
      "Earthing, lightning protection & AMC",
    ],
  },
  {
    icon: Fan,
    title: "HVAC & Mechanical Work",
    description:
      "HVAC system installation, ventilation design, ducting and piping for offices, hospitals, hotels and industrial facilities in Delhi NCR.",
    items: [
      "HVAC system installation",
      "Ventilation solutions",
      "Ducting & piping work",
      "Equipment installation & AMC",
    ],
  },
  {
    icon: Droplets,
    title: "Plumbing & Drainage",
    description:
      "Water supply systems, sanitary plumbing, drainage, sewerage and STP/WTP operation & maintenance for residential and commercial projects.",
    items: [
      "Water supply systems",
      "Sanitary plumbing",
      "Drainage & sewerage",
      "STP / WTP solutions & maintenance",
    ],
  },
  {
    icon: Flame,
    title: "Fire Fighting Systems",
    description:
      "Fire alarm systems, sprinkler and hydrant installation, fire pump systems and safety compliance audits for commercial and industrial buildings.",
    items: [
      "Fire fighting & alarm systems",
      "Sprinkler & hydrant systems",
      "Fire pump installation",
      "Safety audits & compliance",
    ],
  },
  {
    icon: Sun,
    title: "Solar System Solutions",
    description:
      "Rooftop solar installation — on-grid and off-grid — including design, supply, commissioning and ongoing operation & maintenance.",
    items: [
      "Rooftop solar installation",
      "On-grid & off-grid systems",
      "Design, supply & commissioning",
      "Operation & maintenance",
    ],
  },
  {
    icon: PlugZap,
    title: "EV Charger Solutions",
    description:
      "AC and DC EV charger installation for residential societies, commercial parking and fleet operators across NCR.",
    items: [
      "AC & DC charger installation",
      "Residential, commercial & fleet",
      "Complete electrical infrastructure",
    ],
  },
  {
    icon: SquareStack,
    title: "Electrical Panel Solutions",
    description:
      "LT, PCC, MCC and APFC panel design, DG synchronization panels, and control & automation panel testing and commissioning.",
    items: [
      "LT, PCC, MCC & APFC panels",
      "DG synchronization panels",
      "Control & automation panels",
      "Testing & commissioning",
    ],
  },
  {
    icon: Building2,
    title: "Civil Works",
    description:
      "Civil construction, renovation, masonry and finishing work for industrial and commercial projects in Ghaziabad and NCR.",
    items: [
      "Civil construction",
      "Renovation & refurbishment",
      "Masonry & finishing",
      "Industrial & commercial projects",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Waterproofing & Leakage Solutions",
    description:
      "Terrace and basement waterproofing, leakage detection and roof treatment for residential and commercial buildings.",
    items: [
      "Waterproofing work",
      "Leakage detection",
      "Roof treatment",
      "Terrace & basement waterproofing",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Building Compliance Services",
    description:
      "Electrical and fire safety compliance, statutory inspection support and technical audits to keep your building legally compliant.",
    items: [
      "Electrical & fire safety compliance",
      "Statutory inspection support",
      "Technical audits",
      "Preventive maintenance planning",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Electrical Material Supply",
    description:
      "Supply of cables, switchgear, protection devices and power distribution equipment for contractors and facility managers.",
    items: [
      "HT/LT electrical materials",
      "Cables & accessories",
      "Switchgear & protection devices",
      "Lighting & power distribution equipment",
    ],
  },
];

/* ========================================================================
   WHY US
   ======================================================================== */
export const whyUsIntro = {
  eyebrow: "03 — Why JPS",
  heading: "Why Ghaziabad & Delhi NCR Businesses Choose JPS Solutions",
  body: "We don't just hand over a finished system — we stand behind it. Here's what working with a local MEP contractor based in Hapur, serving Ghaziabad and NCR, looks like in practice.",
};

export const whyUs = [
  {
    icon: Users,
    title: "Experienced & Skilled Team",
    text: "Engineers and technicians who've handled MEP scopes across high-rises, malls and industrial plants.",
  },
  {
    icon: BadgeCheck,
    title: "High Quality & Safety Standards",
    text: "Every installation follows strict safety codes and quality benchmarks from design to handover.",
  },
  {
    icon: Clock,
    title: "Timely Project Execution",
    text: "Realistic schedules, proper site planning and milestone tracking so deadlines are met.",
  },
  {
    icon: Wallet,
    title: "Competitive Pricing",
    text: "Transparent, itemised quotes with no hidden costs — value engineered for your budget.",
  },
  {
    icon: Layers,
    title: "End-to-End Solutions",
    text: "From design and procurement to installation, testing and compliance — one team, one accountability.",
  },
  {
    icon: HeartHandshake,
    title: "Strong After-Sales Support",
    text: "AMC packages and rapid-response maintenance keep your systems running long after handover.",
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction Focused",
    text: "We measure success by repeat clients and referrals across Delhi NCR.",
  },
];

/* ========================================================================
   INDUSTRIES
   ======================================================================== */
export const industriesIntro = {
  eyebrow: "04 — Who We Serve",
  heading: "Industries We Serve Across Ghaziabad & Delhi NCR",
  body: "JPS Solutions has delivered MEP and infrastructure projects across every major sector in the NCR region — from residential societies in Ghaziabad to industrial plants in Hapur and IT parks in Noida.",
};

export const industries = [
  { icon: Home, name: "Residential", detail: "Apartment complexes, gated societies & townships" },
  { icon: Building2, name: "Commercial", detail: "Office buildings, malls & business parks" },
  { icon: Factory, name: "Industrial", detail: "Factories, warehouses & manufacturing plants" },
  { icon: Cross, name: "Hospitals", detail: "Healthcare facilities requiring critical MEP systems" },
  { icon: GraduationCap, name: "Education", detail: "Schools, colleges & institutional campuses" },
  { icon: BedDouble, name: "Hotels", detail: "Hospitality projects with HVAC & fire compliance needs" },
  { icon: ShoppingBag, name: "Retail", detail: "Showrooms & retail chains" },
  { icon: Server, name: "IT Parks", detail: "Tech campuses & data-center-adjacent infrastructure" },
];

/* ========================================================================
   FAQ — must mirror index.html FAQPage schema exactly
   ======================================================================== */
export const faqIntro = {
  eyebrow: "05 — Questions",
  heading: "Frequently Asked Questions",
  body: "Straight answers to what clients across Ghaziabad and Delhi NCR most often ask before starting an MEP project with us.",
};

export const faqs = [
  {
    question: "What MEP services does JPS Solutions provide in Ghaziabad?",
    answer:
      "JPS Solutions provides complete MEP services in Ghaziabad including electrical installations, HVAC systems, plumbing & drainage, fire fighting systems, solar installation, EV charging, civil works, waterproofing and building compliance. We are a one-stop MEP contractor serving Delhi NCR.",
  },
  {
    question: "Does JPS Solutions operate in Delhi NCR?",
    answer:
      "Yes. JPS Solutions serves clients across Delhi NCR including Ghaziabad, Hapur, Noida, Greater Noida and Delhi for all MEP and infrastructure projects — residential, commercial, industrial and institutional.",
  },
  {
    question: "How can I get a free quote from JPS Solutions?",
    answer:
      "You can call or WhatsApp us at +91 9958583165, or email jpssolutions.services@gmail.com. We provide a free site assessment and detailed scope & quote for all MEP and infrastructure projects.",
  },
  {
    question: "Does JPS Solutions handle building compliance and fire safety audits?",
    answer:
      "Yes. JPS Solutions provides complete building compliance services including electrical safety compliance, fire safety compliance, statutory inspection support, technical audits and preventive maintenance planning across Delhi NCR.",
  },
  {
    question: "What industries does JPS Solutions serve?",
    answer:
      "JPS Solutions serves residential complexes, commercial buildings, industrial plants, hospitals, educational institutions, hotels, retail spaces and IT parks across Ghaziabad and Delhi NCR.",
  },
];

/* ========================================================================
   CONTACT
   ======================================================================== */
export const contactIntro = {
  eyebrow: "06 — Get In Touch",
  heading: "Contact JPS Solutions — Get a Free Quote in Ghaziabad & Delhi NCR",
  body: "Share a few details about your project and our team will respond with a tailored scope and quote — usually within one business day. For urgent requirements, call or WhatsApp us directly.",
};

export const serviceOptions = services.map((s) => s.title);

/* ========================================================================
   CTA BANNER
   ======================================================================== */
export const cta = {
  eyebrow: "Ready When You Are",
  heading: "Need an MEP Contractor in Ghaziabad or Delhi NCR?",
  body: "Got a building that needs electrical, HVAC, fire fighting or plumbing work done right? Call JPS Solutions today for a free site visit and quote.",
};

/* ========================================================================
   FOOTER
   ======================================================================== */
export const footerCopy = {
  description:
    "JPS Solutions is a Hapur-based MEP and infrastructure contractor serving Ghaziabad, Noida, Greater Noida and Delhi NCR with electrical, HVAC, plumbing, fire fighting, solar, EV charging, civil and compliance services.",
  tags: ["Design", "Installation", "Compliance", "Maintenance"],
};
