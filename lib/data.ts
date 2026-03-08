export const site = {
  name: "KARA PRODUCTION",
  legalName: "Kara Production",
  tagline: "Creating Icons. Producing Excellence.",
  footer: {
    copyrightTagline: "Creating Icons. Producing Excellence.",
    cookieLabel: "Manage cookies or opt out",
  },
};

export const hero = {
  headline: "India's Premier Beauty Pageant & Event Production Company",
  subline:
    "Kara Production is a leading event and beauty pageant production house delivering world-class platforms like Miss & Mrs Maharashtra and Mrs India Supranational.",
  description:
    "We build platforms that empower individuals — especially women — to showcase confidence, leadership, talent, and cultural identity at state, national, and international levels.",
  ctaPrimary: "Explore Our Pageants",
  ctaSecondary: "Partner With Us",
  ctaTertiary: "Apply Now",
};

export const about = {
  title: "Who We Are",
  subtitle: "About Us",
  description:
    "Kara Production is a professional event and pageant production company specializing in organizing, managing, and promoting national and international beauty platforms.",
  focusAreas: [
    "Pageant Production",
    "Brand Development",
    "Event Management",
    "Talent Grooming",
    "Media & PR Coordination",
  ],
  vision:
    "To create empowering platforms that celebrate beauty, confidence, and leadership.",
  mission:
    "To produce world-class pageants with transparency, elegance, and international standards.",
};

export const pageants = [
  {
    id: "1",
    slug: "miss-mrs-maharashtra",
    title: "Miss & Mrs Maharashtra",
    shortDescription:
      "Regional platform celebrating elegance and leadership.",
    link: "https://www.missandmrsmaharashtra.com",
    about:
      "Miss & Mrs Maharashtra is a prestigious state-level competition celebrating beauty, talent, intelligence, and leadership across Maharashtra.",
    gallery: [
      { id: "mm1", src: "/images/gallery/gallery1.png", alt: "Miss & Mrs Maharashtra" },
      { id: "mm2", src: "/images/gallery/gallery2.png", alt: "Miss & Mrs Maharashtra" },
    ],
    sponsors: [],
    media: [],
    winners: [],
  },
  {
    id: "2",
    slug: "mrs-india-supranational",
    title: "Mrs India Supranational",
    shortDescription:
      "National-level pageant selecting representatives for international stage.",
    link: "https://www.mrsindiasupranational.com",
    about:
      "Mrs India Supranational is a national-level pageant platform empowering married women to represent India internationally with confidence and grace.",
    gallery: [
      { id: "mi1", src: "/images/gallery/gallery3.png", alt: "Mrs India Supranational" },
      { id: "mi2", src: "/images/gallery/gallery4.png", alt: "Mrs India Supranational" },
    ],
    sponsors: [],
    media: [],
    winners: [],
  },
  {
    id: "3",
    slug: "mrs-supranational",
    title: "Mrs Supranational",
    shortDescription: "Affiliated with global beauty platforms.",
    link: "https://www.mrssupranational.com",
    about:
      "Mrs Supranational is an international platform recognizing elegance, strength, and global representation for married women.",
    gallery: [
      { id: "ms1", src: "/images/gallery/gallery5.png", alt: "Mrs Supranational" },
      { id: "ms2", src: "/images/gallery/gallery6.png", alt: "Mrs Supranational" },
    ],
    sponsors: [],
    media: [],
    winners: [],
  },
];

export const services = [
  {
    id: "1",
    title: "Event Production",
    description:
      "Complete event planning, stage design, celebrity management, and execution.",
  },
  {
    id: "2",
    title: "Pageant Grooming",
    description:
      "Personality development, ramp walk, styling, public speaking.",
  },
  {
    id: "3",
    title: "Media & Promotions",
    description:
      "PR campaigns, digital marketing, influencer collaboration.",
  },
  {
    id: "4",
    title: "Brand Partnerships",
    description: "Sponsorship management and brand integration.",
  },
];

export const founder = {
  name: "Mrs. Zoya Siraj Sheikh",
  role: "Entrepreneur, Pageant Titleholder, and Empowerment Advocate",
  image: "/images/kara-founder.png",
  achievements: [
    "Mrs. Maharashtra 2022",
    "3rd Runner-Up – Mrs. Universe 2022-23",
    "Best Artistic National Costume – Mrs. Universe",
    "Mrs. Universe Brilliance Title",
  ],
  quote:
    "My vision is to create transformative platforms that empower women to achieve recognition, confidence, and global representation.",
  ctaLabel: "Contact",
};

export const pastWinners = [
  {
    id: "1",
    name: "Winner Name",
    title: "Mrs India Supranational",
    year: "2024",
    image: "/images/gallery/gallery1.png",
    achievement: "Represented India at Mrs Supranational with grace and excellence.",
  },
  {
    id: "2",
    name: "Winner Name",
    title: "Miss Maharashtra",
    year: "2024",
    image: "/images/gallery/gallery2.png",
    achievement: "State titleholder and ambassador for Maharashtra.",
  },
  {
    id: "3",
    name: "Winner Name",
    title: "Mrs Maharashtra",
    year: "2023",
    image: "/images/gallery/gallery3.png",
    achievement: "Crowned at the prestigious state finale.",
  },
];

export const gallery = [
  { id: "1", src: "/images/gallery/gallery1.png", alt: "Event moment", category: "events" },
  { id: "2", src: "/images/gallery/gallery2.png", alt: "Event moment", category: "events" },
  { id: "3", src: "/images/gallery/gallery3.png", alt: "Winner crowning", category: "winners" },
  { id: "4", src: "/images/gallery/gallery4.png", alt: "Event moment", category: "events" },
  { id: "5", src: "/images/gallery/gallery5.png", alt: "Backstage", category: "backstage" },
  { id: "6", src: "/images/gallery/gallery6.png", alt: "Event moment", category: "events" },
  { id: "7", src: "/images/gallery/gallery7.png", alt: "Celebrity appearance", category: "celebrity" },
  { id: "8", src: "/images/gallery/gallery8.png", alt: "Press conference", category: "press" },
  { id: "9", src: "/images/gallery/gallery9.png", alt: "Event moment", category: "events" },
  { id: "10", src: "/images/gallery/gallery10.png", alt: "Event moment", category: "events" },
  { id: "11", src: "/images/gallery/gallery11.png", alt: "Event moment", category: "events" },
  { id: "12", src: "/images/gallery/gallery12.png", alt: "Event moment", category: "events" },
];

export type Sponsor = { name: string; image: string; category: string };

// Memoized sponsor data to prevent re-creation
const SPONSORS_DATA: Sponsor[] = [
  // Main Sponsor
  // (add main sponsor when available)

  // Co-Sponsor
  { name: "Co-Sponsor", image: "/images/Season 2/Co-Sponsor/Sanket.png", category: "Co-Sponsor" },

  // Media Partner
  { name: "B Maharashtra", image: "/images/Season 2/Media Partner/B Maharashtra Logo_page-0001 1.png", category: "Media Partner" },
  { name: "Media Partner", image: "/images/Season 2/Media Partner/WhatsApp Image 2024-08-17 at 5.51.11 PM.jpeg", category: "Media Partner" },
  { name: "In BCN Logo", image: "/images/Season 2/Media Partner/In BCN Logo.png", category: "Media Partner" },
  { name: "Nagpur Metro Samachar", image: "/images/Season 2/Media Partner/NAGPUR METRO SAMACHAR LOGO.jpg", category: "Media Partner" },

  // Our Partner (commented out)
  // { name: "Anusaya", image: "/images/Season 2/Our Partner/Anusaya.png", category: "Our Partner" },
  // { name: "Aspire Aesthetic", image: "/images/Season 2/Our Partner/Aspire Asthetic Png.png", category: "Our Partner" },
  // { name: "KARA Foundation", image: "/images/Season 2/Our Partner/KARA foundation-01 (2).png", category: "Our Partner" },
  // { name: "LABEL", image: "/images/Season 2/Our Partner/Label.png", category: "Our Partner" },
  // { name: "Megha's Makeover", image: "/images/Season 2/Our Partner/Megha's Makeover Png.png", category: "Our Partner" },
  // { name: "Presha", image: "/images/Season 2/Our Partner/Presha Logo.jpg", category: "Our Partner" },
  // { name: "Our Partner", image: "/images/Season 2/Our Partner/WhatsApp Image 2024-08-12 at 12.59.30 PM.jpeg", category: "Our Partner" },

  // Powered By
  { name: "Powered By", image: "/images/Season 2/Powered By/Screenshot 2024-08-16 161032.png", category: "Powered By" },

  // Supported By
  { name: "C9 Beverages", image: "/images/Season 2/Supported By/C9 beverages logo.png", category: "Supported By" },
];

export const sponsors = SPONSORS_DATA;

export const mediaCoverage = [
  { id: "1", type: "Newspaper", title: "Times of India", href: "#", logoUrl: "/images/placeholder-logo.svg" },
  { id: "2", type: "TV", title: "TV Interview", href: "#", logoUrl: "/images/placeholder-logo.svg" },
  { id: "3", type: "Online", title: "Online Feature", href: "#", logoUrl: "/images/placeholder-logo.svg" },
];

export const cta = {
  sectionLabel: "Get started",
  headline: "Partner With Us",
  subheadline:
    "Whether you want to collaborate, participate in our pageants, or support our platforms — we would like to hear from you.",
  buttonLabelApply: "Apply Now",
  buttonLabelPartner: "Partner With Us",
  cards: [

    { title: "Participate", description: "Pageants, events, and programmes open to talent." },
    { title: "Collaborate", description: "Strategic partnerships and co-created programmes." },
    { title: "Support", description: "Sponsorships and impact partnerships." },
  ],
};

export const contact = {
  email: "info@karaproduction.com",
  phone: "+91 93227 10192",
  officeAddress: "3rd floor, Sumit Apartments, Plot No. 493, Professor's Colony, Hanuman Nagar, Nagpur, Maharashtra 440024",
  location: "Nagpur, Maharashtra, India",
  mapEmbedUrl: "https://www.google.com/maps?q=21.1253756,79.1041817&z=17&output=embed",
  mapLink: "https://maps.app.goo.gl/WcXs1US8mvzFmzbD9",
  intro:
    "Have questions? Want to collaborate or apply for our pageants? Reach out to us and become part of a growing community that celebrates confidence, culture, and creativity.",
  cardLabels: {
    email: "Email Us",
    phone: "Phone",
    location: "Office Address",
    connect: "Connect",
  },
  socials: [
    { name: "LinkedIn", href: "#", icon: "in" },
    { name: "Twitter", href: "#", icon: "tw" },
    { name: "Instagram", href: "#", icon: "ig" },
  ],
  formLabels: {
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Get in Touch",
  },
};
