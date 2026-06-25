import {
  Sun,
  PlugZap,
  Zap,
  SquareStack,
  Flame,
  Droplets,
  Fan,
  Building2,
  ShieldCheck,
  ClipboardCheck,
  Users,
  BadgeCheck,
  Clock,
  Wallet,
  Layers,
  HeartHandshake,
  ThumbsUp
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact Us", href: "#contact" },
];

export const company = {
  name: "JPS Solutions",
  tagline: "All in One Infra Solutions",
  shortPitch: "Trusted MEP and infrastructure contractor offering top-tier electrical works, heavy HVAC installation, solar power, and certified fire fighting compliance across Ghaziabad, Noida, and Delhi NCR.",
  aboutPitch: "JPS Solutions is a leading engineering and infrastructure contractor based in Hapur and serving the wider Delhi NCR zone. We specialize in providing comprehensive MEP (Mechanical, Electrical, Plumbing) works, custom rooftop solar power systems, and specialized safety auditing with absolute statutory code compliance.",
  phone: "9958583165",
  phoneHref: "tel:+919958583165",
  email: "jpssolutions.services@gmail.com",
  location: "Ghaziabad, Noida & Delhi NCR",
  address: "Shop No. 01, JPS Market, Hapur, Uttar Pradesh – 245101",
  hours: "Mon–Sat: 9:00 AM – 7:00 PM",
  gstin: "09DQYPK8396C1ZW", // Update with your actual GSTIN registration number
  whatsappHref: "https://wa.me/919958583165",
};

export const servicesIntro = {
  eyebrow: "02 // Commercial Capabilities",
  heading: "Turnkey MEP & Infrastructure Solutions",
  body: "We provide design, precise field installation, safety auditing, and regular maintenance packages for retail, industrial, and institutional properties throughout Ghaziabad and Delhi NCR.",
};

export const stats = [
  { value: 10, suffix: "+", label: "Core Service Verticals" },
  { value: 8, suffix: "", label: "Commercial Industries Served" },
  { value: 100, suffix: "%", label: "End-to-End Execution" },
  { value: 24, suffix: "/7", label: "Emergency Breakdown Support" },
];

export const industries = [
  "Residential Complexes",
  "Commercial Hubs",
  "Industrial Manufacturing Plants",
  "Hospitals & Healthcare Units",
  "Educational Institutions",
  "Hotels & Hospitality Sites",
  "Retail Spaces & Malls",
  "IT Parks & Corporate Offices",
];

export const whyUs = [
  { 
    icon: Users, 
    title: "Skilled Engineers & Technicians", 
    text: "Our experienced technical team has executed end-to-end electrical distribution, HVAC plant layouts, and pipeline works for high-rises, factories, and corporate parks." 
  },
  { 
    icon: BadgeCheck, 
    title: "Strict Safety & Quality Benchmarks", 
    text: "Every project adheres fully to local Indian Standard (IS) codes, National Building Code (NBC) parameters, and government electrical safety regulations." 
  },
  { 
    icon: Clock, 
    title: "On-Time Project Commissioning", 
    text: "We use structured milestone trackers and itemized scheduling to ensure infrastructure systems are handed over on time, without delay." 
  },
  { 
    icon: Wallet, 
    title: "Transparent & Competitive Value Pricing", 
    text: "Clear, itemized quotes with complete price breakdowns. We focus on value-engineering your designs to meet target operational budgets." 
  },
  { 
    icon: Layers, 
    title: "Single-Point Project Accountability", 
    text: "From technical drawing review and procurement to statutory inspection support and setup—one dedicated team manages everything." 
  },
  { 
    icon: HeartHandshake, 
    title: "Long-Term Maintenance Packages (AMC)", 
    text: "Custom Annual Maintenance Contracts and rapid-response breakdown services ensure your commercial systems run continuously long after deployment." 
  },
  { 
    icon: ThumbsUp, 
    title: "Proven Local Track Record", 
    text: "A trusted local contractor known for engineering reliability and building strong client partnerships in Hapur, Ghaziabad, Noida, and Greater Noida." 
  },
];

export const services = [
  {
    icon: Sun,
    title: "Solar Power Solutions",
    description: "Turnkey sustainable solar power frameworks for commercial rooftops and industrial properties to cut utility costs.",
    items: [
      "Commercial rooftop solar setup",
      "On-grid & off-grid systems installation",
      "Net-metering & system commissioning",
      "Solar array cleanup & performance maintenance",
    ],
  },
  {
    icon: PlugZap,
    title: "EV Charging Infrastructure",
    description: "Complete electric vehicle charging network setups from localized grid configuration to charging dock installation.",
    items: [
      "Commercial AC & high-speed DC chargers",
      "Residential & corporate fleet charging points",
      "Dedicated electrical feeder setups",
      "Load balancing & transformer safety checks",
    ],
  },
  {
    icon: Zap,
    title: "Electrical Works & Systems",
    description: "Heavy high-voltage and low-voltage grid management systems for industrial manufacturing and real estate complexes.",
    items: [
      "HT/LT electrical panel installation",
      "DG synchronization & automated power backups",
      "Main power distribution & underground cable laying",
      "Copper plate earthing & lightning protection",
    ],
  },
  {
    icon: SquareStack,
    title: "Custom Electrical Panels",
    description: "Custom control distribution boards configured to keep high-load manufacturing processes safe.",
    items: [
      "LT distribution panels & APFC capacitor banks",
      "PCC, MCC, and AMF control panel setups",
      "PLC automation & system monitoring boards",
      "Dielectric insulation safety testing",
    ],
  },
  {
    icon: Flame,
    title: "Fire Fighting & Safety Systems",
    description: "NBC-compliant fire safety networks designed to instantly detect, alert, and control hazards.",
    items: [
      "Automatic fire alarm & smoke sensor networks",
      "High-pressure sprinkler & fire hydrant systems",
      "Main multi-stage fire pump house installation",
      "Safety audit readiness & statutory certifications",
    ],
  },
  {
    icon: Droplets,
    title: "Plumbing & Drainage Engineering",
    description: "Heavy-duty commercial water management, specialized waste drainage, and treatment plant installations.",
    items: [
      "High-pressure booster water supply lines",
      "Sanitary plumbing fixture networks",
      "Commercial drainage, sewers & storm lines",
      "STP & WTP construction and AMC care",
    ],
  },
  {
    icon: Fan,
    title: "Commercial HVAC Systems",
    description: "High-efficiency temperature management and exhaust ventilation networks for continuous airflow.",
    items: [
      "VRF/VRV central AC system setups",
      "Industrial ducting, insulation & line piping",
      "Basement smoke extraction & ventilation fans",
      "Air handling unit (AHU) maintenance plans",
    ],
  },
  {
    icon: Building2,
    title: "Civil Construction & Finishing",
    description: "Structural structural works, site restorations, and masonry updates tailored for business operations.",
    items: [
      "Commercial building structural works",
      "Office refurbishment & interior masonry",
      "Epoxy flooring & surface finishings",
      "Factory floor structural modifications",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Structural Waterproofing Work",
    description: "Advanced chemical injection treatments to protect real estate foundations from water damage.",
    items: [
      "Basement chemical pressure injection grouting",
      "Exposed terrace multi-layer waterproofing",
      "Thermal roof treatments & joint seals",
      "Underground water tank structural linings",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Safety Audits & Code Compliance",
    description: "Detailed engineering checks and preventive diagnostics to secure local government operational approvals.",
    items: [
      "Electrical load & safety compliance inspections",
      "NBC fire fighting fitness auditing",
      "Thermal scanning & protective relay settings",
      "Preventive maintenance data reporting",
    ],
  }
];