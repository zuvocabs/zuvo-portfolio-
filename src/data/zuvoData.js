export const companyInfo = {
  name: "ZUVO INDIA PVT. LTD.",
  tagline: "CONNECTING EVERY JOURNEY.",
  corporateMotto: "ONE GROUP. MULTIPLE BUSINESSES. ONE VISION.",
  establishedYear: "2025",
  founder: {
    name: "Mr. Udaya Kumar",
    title: "Founder",
    role: "Founder",
    company: "ZUVO India Pvt. Ltd.",
    image: "/team-founder-udaya-kumar.jpg",
    bio: "Mr. Udaya Kumar founded ZUVO India Pvt. Ltd. in 2025 with an ambitious vision to build an interconnected Indian corporate group spanning urban mobility, circular commerce, digital wholesale distribution, and smart home electronics. As Founder, he guides the strategic horizon, enterprise synergy, and institutional discipline of ZUVO from its corporate headquarters at TIDEL Park, Chennai.",
    quote: "Our conviction is grounded in a singular purpose: to build platforms that elevate everyday human journeys and unlock tangible economic opportunities across every corner of India.",
    visionPhilosophy: "Leadership at ZUVO is defined by disciplined execution, ground-level partner empathy, and relentless long-term value creation. By fostering synergy across mobility, commerce, and consumer hardware, we architect ecosystems where technology serves people with integrity and reliability."
  },
  ceo: {
    name: "Mrs. U. Savitha",
    title: "Chief Executive Officer (CEO)",
    role: "CEO",
    company: "ZUVO India Pvt. Ltd.",
    image: "/team-ceo-savitha-u.jpg",
    bio: "Mrs. U. Savitha serves as the Chief Executive Officer of ZUVO India Pvt. Ltd., steering the executive operations, business strategy, cross-vertical integration, and institutional expansion across all operating companies. Her leadership ensures operational excellence, robust corporate governance, and sustainable value delivery.",
    quote: "We lead with clarity of mission, operational rigor, and deep respect for every customer, merchant, and partner across the ZUVO ecosystem.",
    visionPhilosophy: "Driving sustainable corporate growth demands seamless alignment between innovative technology and real-world execution. At ZUVO, we champion accountability, agility, and a culture of performance."
  },
  boardOfDirectors: [
    {
      name: "Nikkath",
      title: "Director",
      role: "Board of Directors",
      company: "ZUVO India Pvt. Ltd.",
      focus: "Corporate Governance, Strategic Advisory & Compliance"
    },
    {
      name: "Udaya Kumar",
      title: "Director",
      role: "Board of Directors",
      company: "ZUVO India Pvt. Ltd.",
      focus: "Executive Oversight, Long-Term Strategy & Growth"
    }
  ],
  parentDescription: "ZUVO India Pvt. Ltd. is a diversified technology and business conglomerate founded in 2025 and headquartered at TIDEL Park, Chennai. Founded by Mr. Udaya Kumar and led by CEO Mrs. U. Savitha, ZUVO incubates, scales, and connects high-impact ventures across four strategic verticals: Mobility & Transportation, Consumer Commerce, Wholesale & B2B Commerce, and Consumer Electronics & Digital Innovation.",
  email: "support@zuvocabs.com",
  phone: "+91 90032 41214",
  address: "1st Floor, D Block (Module 115), TIDEL Park, 4, SH 49A, Tharamani, Chennai, Tamil Nadu 600113.",
  primaryColor: "#015B97",
  colors: {
    primary: "#015B97",
    deepViolet: "#01426E",
    electricViolet: "#0274BE",
    softLavender: "#EAE2FF",
    darkBg: "#08070D",
    white: "#FFFFFF",
    lightBg: "#F7F5FC",
  }
};

export const executiveLeadership = [
  {
    id: "cto",
    role: "CTO",
    title: "Chief Technology Officer",
    name: "Dravid V",
    image: "/team-cto-dravid-v.jpg",
    department: "Technology & Engineering",
    focus: "Cloud microservices, real-time dispatch algorithms, scalable architecture, and platform engineering across all ZUVO verticals."
  },
  {
    id: "coo",
    role: "COO",
    title: "Chief Operating Officer",
    name: "Rahul P",
    image: "/team-coo-rahul-p.jpg",
    department: "Operations & Logistics",
    focus: "Field execution, fleet management, supply chain networks, vendor onboarding, and operational excellence across India."
  },
  {
    id: "ceo",
    role: "CEO",
    title: "Chief Executive Officer",
    name: "Mrs. U. Savitha",
    image: "/team-ceo-savitha-u.jpg",
    department: "Executive Management",
    focus: "Corporate strategy, business growth, organizational leadership, and executive execution across all conglomerate ventures."
  },
  {
    id: "cfo",
    role: "CFO",
    title: "Chief Financial Officer",
    name: "Vignesh",
    image: "/team-cfo-vignesh.jpg",
    department: "Finance & Accounts",
    focus: "Financial planning, capital allocation, corporate accounting, compliance, and fiscal governance for the ZUVO Group."
  },
  {
    id: "founder",
    role: "Founder",
    title: "Founder",
    name: "Udaya Kumar",
    image: "/team-founder-udaya-kumar.jpg",
    department: "Founding Directorate",
    focus: "Corporate inception, strategic vision, long-term ecosystem synergy, and multi-vertical enterprise foundation."
  }
];

export const businessVerticals = [
  {
    id: "mobility",
    number: "01",
    name: "Mobility & Transportation",
    tagline: "Intelligent Urban Transit & Dispatch Ecosystems",
    summary: "Connecting millions of passenger journeys with reliable city transit, transparent driver livelihoods, and digital dispatch automation.",
    businesses: ["zuvo-cabs"],
    accentGradient: "from-purple-600 to-indigo-700",
    themeColor: "#015B97",
    icon: "Car"
  },
  {
    id: "consumer-commerce",
    number: "02",
    name: "Consumer Commerce",
    tagline: "Circular Retail & Specialized E-Commerce",
    summary: "Empowering consumer choice through trusted pre-owned electronics trading and dedicated automotive lifestyle e-commerce.",
    businesses: ["usedq", "allzon"],
    accentGradient: "from-violet-600 to-pink-600",
    themeColor: "#0274BE",
    icon: "ShoppingBag"
  },
  {
    id: "b2b-commerce",
    number: "03",
    name: "Wholesale & B2B Commerce",
    tagline: "Factory-to-Store Direct Digital Sourcing",
    summary: "Streamlining bulk procurement, supplier catalog distribution, automated GST billing, and freight coordination across India.",
    businesses: ["allzon-b2b", "allzon-supplier"],
    accentGradient: "from-blue-700 to-indigo-800",
    themeColor: "#01426E",
    icon: "Briefcase"
  },
  {
    id: "consumer-electronics",
    number: "04",
    name: "Consumer Electronics & Digital Growth",
    tagline: "Smart Home Entertainment & Digital Agency Innovation",
    summary: "Engineering next-generation Google Certified Android TVs and accelerating enterprise business growth through full-spectrum digital transformation.",
    businesses: ["zuvo-android-tv", "digiinova"],
    accentGradient: "from-indigo-600 to-purple-800",
    themeColor: "#015B97",
    icon: "Tv"
  }
];

export const businessesData = [
  {
    id: "zuvo-cabs",
    name: "ZUVO CABS",
    slug: "zuvo-cabs",
    verticalId: "mobility",
    verticalName: "Mobility & Transportation",
    badge: "Smart Ride Booking",
    url: "https://zuvocabs.com/",
    shortDesc: "A digital mobility platform focused on connecting passengers with transportation services through a modern ride-booking ecosystem.",
    fullDesc: "ZUVO CABS serves as the consumer-facing transportation arm of the ZUVO Group. It bridges the gap between daily commuters and professional drivers by providing upfront pricing, clean vehicle fleets (Sedan, XL, Auto), and real-time GPS telemetry.",
    features: [
      { title: "Smart City Cabs & Autos", desc: "Instant ride booking with clear fare estimates and zero hidden surges." },
      { title: "Real-Time GPS Tracking", desc: "End-to-end trip monitoring, shareable route status, and in-app SOS safety protocols." },
      { title: "Multi-Tier Vehicle Selection", desc: "City sedans, spacious XL 6-seaters, swift local autos, and corporate rentals." },
      { title: "Trained Pilot Community", desc: "Verified drivers onboarded under rigorous background checks and customer care guidelines." }
    ],
    highlights: ["24/7 Availability", "Zero Hidden Charges", "Live Telemetry", "Instant Dispatch"],
    accentGradient: "from-purple-600 via-indigo-600 to-violet-800",
    themeColor: "#015B97",
    image: "/zuvo-cabs-logo.jpg"
  },
  {
    id: "usedq",
    name: "USEDQ",
    slug: "usedq",
    verticalId: "consumer-commerce",
    verticalName: "Consumer Commerce",
    badge: "Pre-Owned Marketplace",
    url: "https://www.usedq.com/",
    shortDesc: "An online marketplace focused on connecting buyers and sellers through a platform for pre-owned and used products.",
    fullDesc: "USEDQ advances the circular economy within the ZUVO Group. It provides a secure, verified classifieds and trading platform for pre-owned smartphones, laptops, electronics, and personal lifestyle goods, making quality technology affordable.",
    features: [
      { title: "Verified Listings", desc: "Stringent content moderation and verification checks to filter out fraudulent posts." },
      { title: "Direct Buyer-Seller Chats", desc: "Safe in-platform messaging channels ensuring confidential negotiations and handover plans." },
      { title: "Circular Economy Focus", desc: "Extending electronics lifecycles while reducing e-waste and delivering great consumer value." },
      { title: "Multi-Category Catalog", desc: "Smartphones, tablets, gaming consoles, laptops, and home electronics." }
    ],
    highlights: ["Verified Sellers", "Secure Messaging", "Circular Economy", "Great Value"],
    accentGradient: "from-indigo-600 via-purple-600 to-blue-700",
    themeColor: "#0268AA",
    image: "/usedq-logo.jpg"
  },
  {
    id: "allzon",
    name: "ALLZON",
    slug: "allzon",
    verticalId: "consumer-commerce",
    verticalName: "Consumer Commerce",
    badge: "Automotive E-Commerce",
    url: "https://allzon.in/",
    shortDesc: "An online shopping platform offering automotive accessories, infotainment, electronics, vehicle lighting, interior accessories and other product categories.",
    fullDesc: "ALLZON operates as ZUVO's dedicated automotive lifestyle store. It caters to car owners, vehicle customization workshops, and enthusiasts seeking authentic Android touch infotainment, high-output LED lighting, seat styling, and premium cabin accessories.",
    features: [
      { title: "Android Touch Infotainment", desc: "OEM-fit touch displays featuring Apple CarPlay, Android Auto, and high-definition DSP audio." },
      { title: "Advanced Vehicle Lighting", desc: "High-lumen LED projector bulbs, daytime running lights, and ambient interior illumination." },
      { title: "Comfort & Interior Styling", desc: "Custom 7D floor mats, sunshades, portable vacuum cleaners, and cabin organizers." },
      { title: "Pan-India Express Logistics", desc: "Doorstep delivery across Indian cities with insured courier packaging and easy returns." }
    ],
    highlights: ["Pan-India Shipping", "Verified Warranties", "Direct Fitments", "Premium Quality"],
    accentGradient: "from-purple-700 via-pink-600 to-indigo-800",
    themeColor: "#027CCB",
    image: "/allzon-logo.jpg"
  },
  {
    id: "allzon-b2b",
    name: "ALLZON B2B",
    slug: "allzon-b2b",
    verticalId: "b2b-commerce",
    verticalName: "Wholesale & B2B Commerce",
    badge: "Wholesale Marketplace",
    url: "https://allzonb2b.com/",
    shortDesc: "A wholesale commerce platform connecting manufacturers, distributors, suppliers and bulk buyers through a digital sourcing ecosystem.",
    fullDesc: "ALLZON B2B bridges India's manufacturing hubs directly with retail businesses, local distributors, and commercial procurement departments. It enables transparent bulk ordering, volume tier slabs, and automated tax invoicing.",
    features: [
      { title: "Direct Factory Sourcing", desc: "Bypasses unnecessary distributor intermediaries to maximize margins for retail store owners." },
      { title: "Verified Enterprise Network", desc: "Strict verification of GSTIN, MSME credentials, and business registrations for all buyers." },
      { title: "Automated GST Compliance", desc: "Real-time generation of GST-compliant tax invoices, e-way bills, and credit summaries." },
      { title: "Commercial Freight Logistics", desc: "Integrated booking for carton, pallet, and containerized transport across commercial corridors." }
    ],
    highlights: ["Tiered Wholesale Rates", "GST Invoicing", "Verified Wholesalers", "Bulk Freight"],
    accentGradient: "from-blue-700 via-indigo-700 to-purple-800",
    themeColor: "#01426E",
    image: "/allzonb2b-logo.jpg"
  },
  {
    id: "allzon-supplier",
    name: "ALLZON SUPPLIER PORTAL",
    slug: "allzon-supplier",
    verticalId: "b2b-commerce",
    verticalName: "Wholesale & B2B Commerce",
    badge: "Supplier Platform",
    url: "https://supplier.allzonb2b.com/",
    shortDesc: "A dedicated supplier-facing digital platform within the ALLZON B2B ecosystem.",
    fullDesc: "The supplier-facing command center within ALLZON B2B. It gives authorized manufacturers, direct importers, and master wholesalers comprehensive control over SKU listings, wholesale price slabs, order dispatch, and payout reconciliations.",
    features: [
      { title: "Catalog Studio & SKU Upload", desc: "Bulk upload tooling with CSV/Excel import for hundreds of products with specifications." },
      { title: "Consignment Dispatch Center", desc: "Automated packing slips, shipping labels, and handover verification with freight couriers." },
      { title: "Transparent Financial Ledger", desc: "Weekly settlement statements, TDS/TCS deduction records, and payout transfer tracking." },
      { title: "Wholesale Sourcing Trends", desc: "Actionable distributor demand insights to help manufacturers optimize production." }
    ],
    highlights: ["SKU Management", "Automated Invoicing", "Fast Payouts", "Supplier Insights"],
    accentGradient: "from-purple-800 via-indigo-900 to-slate-900",
    themeColor: "#014C7E",
    image: "/allzon-supplier-logo.jpg"
  },
  {
    id: "zuvo-android-tv",
    name: "ZUVO ANDROID TV",
    slug: "zuvo-android-tv",
    verticalId: "consumer-electronics",
    verticalName: "Consumer Electronics",
    badge: "Smart Entertainment",
    url: "https://www.zuvoandroidtv.com/",
    shortDesc: "A smart television business focused on modern home entertainment, product experiences, dealership opportunities and customer support.",
    fullDesc: "ZUVO Android TV brings cinematic visual fidelity, immersive Dolby audio, and seamless Google TV ecosystems into Indian living rooms with an uncompromising blend of quality, aesthetics, and affordability.",
    features: [
      { title: "Five Screen Sizes (24\" to 55\")", desc: "Compact bedroom 24\" and 32\" HD panels to expansive 43\", 50\", and 55\" 4K Ultra HD home cinema displays." },
      { title: "Google Certified Android TV OS", desc: "Official Google Play store with 10,000+ apps including Netflix, Prime Video, YouTube, and Hotstar." },
      { title: "Quantum Colour & HDR10", desc: "Vivid color spectrum, enhanced contrast levels, and anti-glare frameless viewing angles." },
      { title: "Dolby Atmos Acoustic Tuning", desc: "Integrated high-output stereo box speakers delivering rich, spatial room-filling audio." }
    ],
    tvSizes: ["24-inch HD", "32-inch Smart HD", "43-inch 4K UHD", "50-inch 4K Frameless", "55-inch 4K Quantum Cinema"],
    highlights: ["Quantum Color", "Dolby Atmos", "Google TV Certified", "24\" to 55\" Screens"],
    accentGradient: "from-violet-700 via-indigo-800 to-purple-950",
    themeColor: "#015B97",
    image: "/zuvo-tv-logo.jpg"
  },
  {
    id: "digiinova",
    name: "DIGIINOVA",
    slug: "digiinova",
    verticalId: "consumer-electronics",
    verticalName: "Digital Growth & Innovation",
    badge: "Digital Growth & Agency",
    url: "https://www.digiinova.com",
    shortDesc: "A full-spectrum digital innovation and growth agency engineering high-impact digital solutions, performance marketing, and creative brand strategies.",
    fullDesc: "DIGIINOVA delivers digital transformation and performance growth. Providing cutting-edge web & mobile engineering, performance marketing, search intelligence, and conversion-centered branding that scales modern enterprises.",
    features: [
      { title: "Digital Transformation & Web", desc: "High-performance web applications, headless commerce systems, and conversion-focused architectures." },
      { title: "Growth & Performance Marketing", desc: "Data-driven multi-channel digital acquisition campaigns engineered for measurable return on ad spend." },
      { title: "Brand Identity & Design", desc: "Distinctive corporate branding, visual design systems, and user-centric digital interfaces." },
      { title: "Search & Visibility Strategy", desc: "Comprehensive technical SEO, keyword domination, and algorithmic organic visibility." }
    ],
    highlights: ["Full-Spectrum Digital", "Performance Growth", "Custom Web & App", "Creative Branding"],
    accentGradient: "from-cyan-600 via-blue-700 to-indigo-900",
    themeColor: "#0099FF",
    image: "/digiinova-logo.jpg"
  }
];

export const departmentsData = [
  {
    id: "executive",
    name: "Executive Leadership",
    shortName: "Executive",
    description: "Executive officers leading corporate strategy, enterprise technology, ground operations, and group-level capital allocation.",
    leadDesignation: "C-Suite & Founding Directorate",
    members: [
      {
        id: "exec-cto",
        name: "Dravid V",
        role: "CTO",
        title: "Chief Technology Officer",
        department: "Technology & Engineering",
        focus: "Engineering architecture, cloud telemetry, real-time dispatch systems, and digital platform development.",
        image: "/team-cto-dravid-v.jpg"
      },
      {
        id: "exec-coo",
        name: "Rahul P",
        role: "COO",
        title: "Chief Operating Officer",
        department: "Operations & Logistics",
        focus: "Field execution, fleet operations, nationwide merchant supply chains, and operational compliance.",
        image: "/team-coo-rahul-p.jpg"
      },
      {
        id: "exec-ceo",
        name: "Mrs. U. Savitha",
        role: "CEO",
        title: "Chief Executive Officer",
        department: "Executive Management",
        focus: "Group-wide executive execution, operational scale, corporate governance, and multi-vertical performance.",
        image: "/team-ceo-savitha-u.jpg"
      },
      {
        id: "exec-cfo",
        name: "Vignesh",
        role: "CFO",
        title: "Chief Financial Officer",
        department: "Finance & Accounts",
        focus: "Financial planning, capital allocation, fiscal compliance, and group accounting governance.",
        image: "/team-cfo-vignesh.jpg"
      },
      {
        id: "exec-founder",
        name: "Udaya Kumar",
        role: "Founder",
        title: "Founder",
        department: "Founding Directorate",
        focus: "Group vision, strategic enterprise direction, multi-vertical synergy, and long-term ecosystem stewardship.",
        image: "/team-founder-udaya-kumar.jpg"
      }
    ]
  },
  {
    id: "tech",
    name: "Technology & Development",
    shortName: "Engineering",
    description: "Architects of ZUVO's core telemetry networks, WebSocket dispatch services, mobile apps, and cloud microservices.",
    leadDesignation: "Engineering Leadership",
    members: [
      {
        id: "eng-1",
        name: "Platform Engineering Team",
        role: "Full-Stack & Cloud Systems",
        department: "Technology & Development",
        focus: "High-uptime Node.js microservices, React web architecture, and cloud data pipelines.",
        isGroup: true
      },
      {
        id: "eng-2",
        name: "Mobile Solutions Team",
        role: "iOS & Android Telemetry",
        department: "Technology & Development",
        focus: "Driver Pilot App, Customer Booking UI, turn-by-turn navigation overlays, and real-time mapping.",
        isGroup: true
      }
    ]
  },
  {
    id: "marketing",
    name: "Marketing & Branding",
    shortName: "Marketing",
    description: "Stewards of ZUVO's unified corporate identity, consumer ride campaigns, and digital commerce storytelling.",
    leadDesignation: "Brand & Growth Strategy",
    members: [
      {
        id: "mkt-1",
        name: "Brand & Creative Studio",
        role: "Visual Design & Identity",
        department: "Marketing & Branding",
        focus: "Corporate digital experience, brand guidelines, packaging design for ZUVO Android TV, and creative assets.",
        isGroup: true
      },
      {
        id: "mkt-2",
        name: "Performance & Growth",
        role: "Digital Campaigns & User Acquisition",
        department: "Marketing & Branding",
        focus: "Rider acquisition, B2B wholesale inbound channels, and marketplace awareness.",
        isGroup: true
      }
    ]
  },
  {
    id: "bizdev",
    name: "Business Development",
    shortName: "Business Development",
    description: "Spearheading regional dealer onboarding, OEM manufacturer partnerships, and institutional enterprise tie-ups.",
    leadDesignation: "Strategic Alliances",
    members: [
      {
        id: "bd-1",
        name: "Institutional Alliances",
        role: "Corporate & Enterprise Accounts",
        department: "Business Development",
        focus: "Corporate mobility accounts, wholesale factory partnerships, and merchant supply networks.",
        isGroup: true
      },
      {
        id: "bd-2",
        name: "Channel Distribution",
        role: "Showroom & Dealer Network",
        department: "Business Development",
        focus: "Regional consumer electronics showrooms, TV dealership licensing, and aftermarket auto accessory distributors.",
        isGroup: true
      }
    ]
  },
  {
    id: "ops",
    name: "Operations",
    shortName: "Operations",
    description: "Ground-level fleet coordinators, vendor onboarding specialists, and central dispatch control controllers.",
    leadDesignation: "Operations & Logistics Desk",
    members: [
      {
        id: "ops-1",
        name: "Fleet & Pilot Operations",
        role: "Driver Onboarding & Verification",
        department: "Operations",
        focus: "Pilot documentation, background checks, vehicle standards, and localized depot coordination.",
        isGroup: true
      },
      {
        id: "ops-2",
        name: "Logistics & Freight Desk",
        role: "Fulfillment & Supply Chain",
        department: "Operations",
        focus: "Pan-India e-commerce parcels, wholesale pallet freight scheduling, and inventory dispatch.",
        isGroup: true
      }
    ]
  },
  {
    id: "support",
    name: "Sales & Customer Support",
    shortName: "Customer Support",
    description: "24/7 passenger assistance, pilot grievance support, wholesale merchant desk, and warranty services.",
    leadDesignation: "Customer Experience",
    members: [
      {
        id: "sup-1",
        name: "24/7 Mobility Care",
        role: "Passenger & Pilot Assistance",
        department: "Sales & Customer Support",
        focus: "Live ride safety monitoring, trip fare reviews, lost-and-found support, and pilot settlement queries.",
        isGroup: true
      },
      {
        id: "sup-2",
        name: "Merchant & Dealer Helpdesk",
        role: "B2B Commercial Support",
        department: "Sales & Customer Support",
        focus: "Wholesale ordering assistance, GST tax invoice queries, and television warranty claim registrations.",
        isGroup: true
      }
    ]
  }
];

export const cultureStories = [
  {
    title: "Ground-Up Problem Solving",
    tag: "Ownership",
    desc: "From software engineers visiting city transit hubs to understand driver app ergonomics, to operations executives visiting auto workshops for fitment feedback, ZUVO culture values field realities above theoretical assumptions."
  },
  {
    title: "Synergy Across Verticals",
    tag: "Cross-Collaboration",
    desc: "Our teams collaborate across mobility, e-commerce, wholesale, electronics, and digital agency services. An engineer on ZUVO CABS shares insights with the ALLZON logistics desk, creating unexpected efficiencies."
  },
  {
    title: "Transparent & Responsible Stewardship",
    tag: "Integrity",
    desc: "We believe long-term business resilience is built on absolute clarity with drivers, buyers, factory partners, and team members. Our internal culture mirrors our public commitments."
  }
];

export const partnershipCategories = [
  {
    id: "fleet",
    title: "Fleet Operators & Driver Partners",
    vertical: "Mobility & Transportation",
    desc: "Partner your cabs, sedans, or auto fleets with ZUVO CABS for steady earnings, fair commissions, and transparent settlements.",
    enquiryType: "Mobility Fleet & Pilot Operations"
  },
  {
    id: "suppliers",
    title: "Manufacturers & Importers",
    vertical: "Wholesale & B2B Commerce",
    desc: "List your bulk inventory directly on ALLZON B2B and the Supplier Portal to reach thousands of verified retailers across India.",
    enquiryType: "B2B Wholesale & Supplier Onboarding"
  },
  {
    id: "dealers",
    title: "TV Dealers & Retail Distributors",
    vertical: "Consumer Electronics",
    desc: "Establish authorized regional dealerships and retail distribution for ZUVO Android TV with warranty backing and competitive margins.",
    enquiryType: "TV Dealership & Retail Distribution"
  },
  {
    id: "merchants",
    title: "Auto Accessory Brands & Merchants",
    vertical: "Consumer Commerce",
    desc: "Distribute your automotive accessories, car audio, or electronics through ALLZON's high-traffic consumer e-commerce portal.",
    enquiryType: "E-Commerce Merchant Queries"
  }
];

export const careerOpenings = [
  {
    id: "tech-1",
    role: "Full-Stack Software Engineer (React / Node.js)",
    department: "Technology & Development",
    location: "TIDEL Park, Chennai",
    type: "Full-Time",
    desc: "Build scalable cloud microservices, merchant portals, and high-performance React web interfaces across our four business verticals."
  },
  {
    id: "ops-1",
    role: "Fleet Operations Specialist",
    department: "Operations",
    location: "Chennai, Tamil Nadu",
    type: "Full-Time",
    desc: "Manage pilot driver onboarding, vehicle verification, and zone dispatch efficiency for ZUVO CABS."
  },
  {
    id: "sales-1",
    role: "B2B Wholesale Account Executive",
    department: "Business Development",
    location: "TIDEL Park, Chennai",
    type: "Full-Time",
    desc: "Lead outreach to manufacturers, factory distributors, and bulk retail shop buyers across southern and western India."
  },
  {
    id: "dealer-1",
    role: "Regional Channel Manager (Consumer Electronics)",
    department: "Business Development",
    location: "Tamil Nadu & Regional Nodes",
    type: "Full-Time",
    desc: "Expand retail showroom dealerships, service center partnerships, and appliance distributor networks."
  }
];
