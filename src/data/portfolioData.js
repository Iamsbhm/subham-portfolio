export const personalInfo = {
  name: "Subham",
  role: "Senior Product Designer",
  experienceYears: 3,
  rating: 5,
  heroTag: "Hello!",
  tagline: "Bridging Human Empathy & Business Impact",
  bio: "Senior Product Designer with 3+ years of experience designing high-impact fintech, travel, and B2B SaaS platforms. Specialized in end-to-end UX research, scalable design systems, and conversion-focused product experiences.",
  email: "subhamkumar614@gmail.com",
  phone: "+91 6201072469",
  location: "India / Available Globally (Remote)",
  availability: "Open for Full-Time & High-Impact Contracts",
  metricsSummary: [
    { label: "Conversion Lift", value: "+38%" },
    { label: "SUS Usability Score", value: "88/100" },
    { label: "Active Users Served", value: "250K+" },
    { label: "Production Components", value: "120+" }
  ],
  socials: [
    { name: "Dribbble", url: "https://dribbble.com" },
    { name: "Behance", url: "https://behance.net" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "GitHub", url: "https://github.com" },
    { name: "Figma Community", url: "https://figma.com" },
  ]
};

export const resumeData = {
  summary: "Results-driven Product Designer with 3+ years of specialized experience across Fintech, Mobile App Architecture, and Design Systems. Proven track record of reducing funnel drop-off by 38%, conducting 50+ qualitative user interviews, and building scalable 100+ token design systems.",
  education: [
    {
      degree: "Bachelor of Science in Interaction Design & HCI",
      institution: "State University of Technology",
      year: "2019 - 2023",
      details: "Dean's Honor List, President of Student UI/UX Society"
    }
  ],
  certifications: [
    "Nielsen Norman Group (NN/g) UX Master Certified",
    "Figma Certified Professional & Design Systems Architect",
    "Interaction Design Foundation (IxDF) Mobile UX Specialist"
  ],
  skills: {
    research: ["User Interviews", "Usability Testing (Maze)", "Persona Journey Mapping", "Competitive Heuristics", "Information Architecture"],
    design: ["Design Systems (Tokens)", "High-Fidelity Prototyping", "Micro-Interactions", "Responsive Web & Mobile (iOS/Android)", "Accessibility (WCAG 2.1 AA)"],
    tools: ["Figma", "Framer", "Adobe XD / Illustrator", "Maze", "Notion", "HTML5 / Tailwind CSS", "Lottie / After Effects"]
  }
};

export const workExperience = [
  {
    id: 1,
    title: "User Interface & Product Designer",
    period: "Sept 2024 - Present",
    company: "Swift SBF",
    type: "Remote - Full Time",
    description: "Leading the core product experience for a next-generation SME lending and loan processing platform.",
    achievements: [
      "Redesigned the loan application funnel, cutting onboarding friction from 7 steps to 3, boosting conversion by 38%.",
      "Created a multi-brand Figma Design System of 140+ components, reducing frontend sprint turnaround by 40%.",
      "Led continuous bi-weekly usability benchmark testing with 45+ SME business owners."
    ]
  },
  {
    id: 2,
    title: "User Interface Designer",
    period: "Sep 2020 - July 2023",
    company: "Carikture",
    type: "Full Time / Digital Agency",
    description: "Spearheaded UI/UX design deliverables for 14+ venture-backed startup clients across ecommerce, consumer travel, and SaaS analytics.",
    achievements: [
      "Crafted mobile-first responsive interfaces that drove a collective $4M+ in transaction volume for clients.",
      "Conducted 30+ discovery workshops with client C-suite stakeholders to translate business goals into clickable prototypes.",
      "Mentored 3 junior design interns and standardized agency design documentation."
    ]
  },
  {
    id: 3,
    title: "User Interface Designer Intern",
    period: "July 2023 - Sept 2023",
    company: "Plade",
    type: "Internship",
    description: "Collaborated with senior product managers to optimize mobile micro-interactions and interactive gesture prototypes.",
    achievements: [
      "Designed interactive Lottie micro-animations for transaction completion screens.",
      "Conducted competitive audit of 8 leading fintech apps to define biometric verification flow standards."
    ]
  }
];

export const featuredCaseStudies = [
  {
    id: "lendify-flagship",
    badge: "Fintech & Web Architecture",
    title: "Lendify — Revolutionizing SME Loan Applications",
    client: "Swift SBF / Lendify",
    tagline: "Designing for Transparency & Financial Trust",
    role: "Lead Product Designer (Research, UX Architecture, UI System)",
    duration: "4 Months (Q3 - Q4)",
    team: "1 Product Designer, 1 PM, 4 Engineers, 1 UX Researcher",
    themeGradient: "from-emerald-950/60 via-[#16161D] to-black",
    accentColor: "#10B981",
    accentBg: "bg-emerald-500",
    accentText: "text-emerald-400",
    accentBorder: "border-emerald-500/30",
    mockupUrl: "lendify.design/case-study",
    heroImage: "/images/lendify-showcase.png",
    metrics: [
      { label: "Application Conversion", value: "+38.4%", change: "From 24.2% to 62.6%" },
      { label: "Time-to-Approval", value: "3.5 mins", change: "Down from 18 mins" },
      { label: "SUS Usability Score", value: "88.5", change: "Industry top 10%" },
      { label: "Support Ticket Drop", value: "-54%", change: "Drastic reduction in confusion" }
    ],
    context: "Traditional business loan applications are notorious for opaque interest rate terms, endless paper forms, and slow underwriting approvals. Small business owners were abandoning the old funnel at an alarming 68% rate on step 4 (Document Upload & Rate calculation).",
    problemStatement: "How might we design a transparent, confidence-inspiring loan flow that allows SME founders to calculate custom terms, verify documentation in under 5 minutes, and feel complete control over repayment schedules?",
    researchInsights: [
      {
        title: "Hidden Fee Anxiety",
        finding: "78% of interviewed founders feared unexpected charges or compounding daily interest.",
        solution: "Created a real-time Interactive APR & Total Repayment slider that updates instantly before signup."
      },
      {
        title: "Document Upload Fatigue",
        finding: "Users felt overwhelmed having to upload 8+ tax and bank PDF documents on a mobile device.",
        solution: "Integrated automated Open-Banking OAuth verification, reducing manual document uploads to just 1 photo ID."
      },
      {
        title: "Lack of Application Status Visibility",
        finding: "Users called customer support repeatedly asking if their application was being reviewed.",
        solution: "Designed a real-time 'Live Underwriting Tracker' with push notifications and progress milestones."
      }
    ],
    designSystemHighlights: {
      colorPalette: [
        { name: "Fintech Emerald (Primary)", hex: "#10B981" },
        { name: "Deep Navy (Brand Dark)", hex: "#064E3B" },
        { name: "Alert Orange (Action)", hex: "#FF5E2B" },
        { name: "Slate Dark (Surface)", hex: "#111827" }
      ],
      typography: "Plus Jakarta Sans & Outfit for mathematical legibility and clean hierarchy.",
      gridRules: "8-point soft grid system with responsive container breakpoints at 375px, 768px, 1280px."
    },
    processSteps: [
      {
        step: "01. Discovery & User Interviews",
        desc: "Interviewed 28 small business owners and analyzed 4,000+ session recordings via Hotjar to pinpoint friction bottlenecks."
      },
      {
        step: "02. Wireframing & Flow Simplification",
        desc: "Drafted 3 distinct flow variations. Tested paper prototypes with 12 users to validate the single-screen dynamic calculator concept."
      },
      {
        step: "03. High-Fidelity UI & Tokenization",
        desc: "Built pixel-perfect UI screens with WCAG 2.1 AA contrast compliance, dark mode tokens, and mobile-friendly touch targets."
      },
      {
        step: "04. Usability Testing & Engineering Handoff",
        desc: "Executed Maze usability tests with 50 participants (Task Success Rate: 96%). Handed off annotated Figma specs with interactive states to React devs."
      }
    ],
    keyTakeaways: [
      "Transparency builds trust: Showing exact interest calculation formulas upfront boosted completion by 22% alone.",
      "Progressive disclosure prevents cognitive overload in high-stress financial applications.",
      "Standardized design tokens reduced frontend engineering bug tickets by 60% during implementation."
    ]
  },
  {
    id: "wanderly-flagship",
    badge: "Consumer Mobile & AI Experience",
    title: "Wanderly — AI-Powered Smart Travel Discovery",
    client: "Wanderly Travel Labs",
    tagline: "Unifying Itinerary Planning & One-Tap Booking",
    role: "Lead Mobile UX/UI Designer (User Research, iOS HIG, Prototyping)",
    duration: "3.5 Months (Q1 - Q2)",
    team: "1 Lead Designer, 1 AI Engineer, 2 iOS Developers, 1 Product Manager",
    themeGradient: "from-blue-950/60 via-[#16161D] to-black",
    accentColor: "#3B82F6",
    accentBg: "bg-blue-500",
    accentText: "text-blue-400",
    accentBorder: "border-blue-500/30",
    mockupUrl: "wanderly.app/itinerary-ai",
    heroImage: "/images/wanderly-showcase.png",
    metrics: [
      { label: "Trip Planning Retention", value: "+46.2%", change: "From 18.5% to 64.7%" },
      { label: "Itinerary Creation Time", value: "90 secs", change: "Down from 35 mins" },
      { label: "App Store Rating", value: "4.8★", change: "Over 12,000+ reviews" },
      { label: "Offline Mode Adoption", value: "82%", change: "Crucial for remote travel" }
    ],
    context: "Travelers frequently switch between 5+ apps (Google Maps, TripAdvisor, Notes, Booking.com, Splitwise) to plan a single vacation. 72% of travelers reported feeling overwhelmed when attempting to organize multi-city itineraries on mobile devices.",
    problemStatement: "How might we create an all-in-one AI travel companion that generates tailored day-by-day itineraries in seconds, enables collaborative trip editing with friends, and functions seamlessly offline without cell service?",
    researchInsights: [
      {
        title: "App Switching Friction",
        finding: "68% of users abandoned digital itineraries because copying links between notes and booking apps was cumbersome.",
        solution: "Built a Unified Smart Card Canvas combining hotel reservations, flight times, and curated local food stops into a chronological timeline."
      },
      {
        title: "Cellular Roaming Data Anxiety",
        finding: "84% of international travelers lose data connectivity upon landing at airports and train stations.",
        solution: "Architected a local-first offline storage engine with auto-caching interactive maps and ticket QR passes."
      },
      {
        title: "Group Expense Disagreements",
        finding: "55% of group vacationers experienced friction calculating shared dinners and excursions.",
        solution: "Designed an integrated peer-to-peer expense splitter with 1-tap currency conversions and settlement summaries."
      }
    ],
    designSystemHighlights: {
      colorPalette: [
        { name: "Voyager Blue (Primary)", hex: "#3B82F6" },
        { name: "Deep Navy (Brand Dark)", hex: "#1E3A8A" },
        { name: "Sunset Amber (Highlight)", hex: "#F59E0B" },
        { name: "Slate Dark (Surface)", hex: "#0F172A" }
      ],
      typography: "Outfit & Plus Jakarta Sans for expressive lifestyle aesthetics and crystal-clear flight schedules.",
      gridRules: "iOS Human Interface Guidelines (HIG) compliant with 44pt minimum touch targets and haptic feedback triggers."
    },
    processSteps: [
      {
        step: "01. Diary Studies & Nomad Interviews",
        desc: "Conducted 1-week mobile diary studies with 20 frequent travelers across 6 countries to observe live trip-planning habits."
      },
      {
        step: "02. Micro-Interaction Wireframes & Gestures",
        desc: "Designed swipeable card interactions and dynamic map pin animations in Framer to test one-handed mobile ergonomics."
      },
      {
        step: "03. iOS Design System & Dark Mode",
        desc: "Constructed an adaptive iOS 17 design library with dynamic island notifications, lock screen widgets, and offline status bars."
      },
      {
        step: "04. Usability Testing & App Store Launch",
        desc: "Ran unmoderated usability tests with 65 travelers (Task Completion Rate: 98%). Successfully launched on the iOS App Store with a 4.8-star average rating."
      }
    ],
    keyTakeaways: [
      "Offline-first design is a crucial differentiator for consumer lifestyle and travel applications.",
      "Card-based modular layouts make complex multi-day schedules digestible on small phone screens.",
      "Subtle haptic micro-interactions significantly elevated the perceived quality and polish of the app."
    ]
  }
];

export const flagshipCaseStudy = featuredCaseStudies[0];

export const expertiseCategories = [
  {
    id: "ui-ux",
    title: "UI/ UX Design",
    description: "Creating intuitive interfaces focused on accessibility, micro-interactions, and visual harmony.",
    badgeColor: "bg-orange-500",
    images: [
      "https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    ],
    skills: ["User Journey Mapping", "Usability Testing", "High-Fidelity Wireframes", "Design Tokens"]
  },
  {
    id: "web-design",
    title: "Web Design",
    description: "Crafting high-converting responsive websites with modern aesthetic frameworks and crisp typography.",
    badgeColor: "bg-orange-500",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
    ],
    skills: ["Responsive Layouts", "CSS/Tailwind Architecture", "Web Performance Optimization", "Micro-Interactions"]
  },
  {
    id: "landing-page",
    title: "Landing Page",
    description: "Architecting narrative-driven landing pages designed for high engagement and seamless lead capture.",
    badgeColor: "bg-orange-500",
    images: [
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80"
    ],
    skills: ["Conversion Rate Optimization", "Copy Layout", "A/B Testing Structure", "CTA Hierarchy"]
  }
];

export const marqueeItems = [
  "UX Design",
  "App Design",
  "Dashboard",
  "Wireframe",
  "User Research",
  "Product Strategy",
  "Prototyping",
  "Design Systems",
  "Micro-Interactions"
];

export const designTools = [
  { name: "Figma", level: "Expert", icon: "🎨", percent: 96 },
  { name: "Framer", level: "Advanced", icon: "⚡", percent: 92 },
  { name: "Design Systems & Tokens", level: "Expert", icon: "❖", percent: 95 },
  { name: "Adobe XD / Illustrator", level: "Advanced", icon: "✏️", percent: 88 },
  { name: "Maze & Usability Testing", level: "Advanced", icon: "🧪", percent: 90 },
  { name: "HTML5 / Tailwind CSS", level: "Advanced", icon: "💻", percent: 86 }
];

export const designProcess = [
  {
    step: "01",
    name: "Empathize & Research",
    desc: "Conducting stakeholder interviews, analyzing user behavior data, mapping user personas, and evaluating competitor ecosystems."
  },
  {
    step: "02",
    name: "Wireframe & Flow Architecture",
    desc: "Architecting low-fidelity wireframes, mapping click-through user flows, and validating core feature hierarchy before visuals."
  },
  {
    step: "03",
    name: "High-Fidelity UI & Systems",
    desc: "Crafting polished pixel-perfect interfaces, color palettes, responsive layouts, micro-interactions, and reusable component libraries."
  },
  {
    step: "04",
    name: "Usability Test & Handoff",
    desc: "Testing interactive prototypes with real users, refining friction points, and packaging tokens & specs for engineering handoff."
  }
];

export const testimonials = [
  {
    id: 1,
    quote: "Subham transformed our fintech platform with an insanely slick UI. Our user drop-off rate fell by 38% after launching his redesigned loan flow. He bridges business goals and user needs effortlessly.",
    author: "Alex Rivers",
    role: "Head of Product",
    company: "Swift SBF",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    quote: "Working with Subham was seamless. He takes raw, messy requirements and crafts clean, intuitive interfaces that delight users and engineering teams alike. Hire him immediately.",
    author: "Elena Rostova",
    role: "Design Director",
    company: "Carikture Agency",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    quote: "Subham's attention to detail in design tokens, micro-animations, and mobile responsiveness is top-tier. A true Product Designer who understands engineering constraints.",
    author: "Marcus Chen",
    role: "Lead Engineer",
    company: "Plade Tech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  }
];

export const portfolioProjects = [
  {
    id: "lendify",
    title: "Lendify",
    tagline: "Loan Made Simple — Complete SME Platform",
    category: "UI/ UX Design",
    tag: "UI/ UX Design",
    image: "/images/lendify-showcase.png",
    description: "All-in-one financial tool designed for smart loan applications, interest calculations, and automated recurring repayments.",
    fullCaseStudy: "Lendify addresses the friction in traditional personal loan applications. Through user research, we discovered 64% of applicants abandon applications due to unclear hidden fees and complicated multi-page forms. Lendify solves this with an instant interactive slider calculator and 3-step document verification.",
    themeColor: "from-emerald-500/20 to-teal-500/10",
    accentColor: "#10B981",
    featured: true,
    hasDeepCaseStudy: true,
    colors: ["#10B981", "#064E3B", "#ECFDF5", "#111827"],
    stats: { users: "50K+", rating: "4.9/5", conversion: "+38%" },
    highlights: [
      "Laptop & Mobile responsive ecosystem",
      "Real-time loan calculator slider",
      "Seamless 3-step document upload flow",
      "Automated repayment schedule calendar"
    ],
    mockupType: "lendify"
  },
  {
    id: "wanderly",
    title: "Wanderly",
    tagline: "Travel Made Simpler, Brighter — AI Companion",
    category: "App Design",
    tag: "App Design",
    image: "/images/wanderly-showcase.png",
    description: "A travel companion app helping adventurous travelers explore curated destinations, book stays, and organize itineraries effortlessly.",
    fullCaseStudy: "Wanderly unifies travel booking, local offline guides, and AI itinerary creation into one fluid mobile application. Designed for digital nomads and vacationers needing quick trip adjustments on the go.",
    themeColor: "from-blue-500/20 to-indigo-500/10",
    accentColor: "#3B82F6",
    featured: true,
    hasDeepCaseStudy: true,
    colors: ["#3B82F6", "#1E3A8A", "#EFF6FF", "#0F172A"],
    stats: { users: "120K+", rating: "4.8/5", downloads: "250K+" },
    highlights: [
      "Interactive map exploration with offline caching",
      "AI-powered personalized trip generator",
      "Group expense splitting & itinerary sharing",
      "One-tap flight & resort booking confirmation"
    ],
    mockupType: "wanderly"
  },
  {
    id: "purple-loan",
    title: "Loan UI Platform",
    tagline: "Instant Personal Credit & Repayment",
    category: "UI/ UX Design",
    tag: "UI/ UX Design",
    description: "Modern purple-themed mobile UI layout offering real-time credit score monitoring and flexible payment installment selection.",
    fullCaseStudy: "Designed for millennial borrowers looking for transparent credit terms. Features dark-mode ready components, micro-interactions, and instant eligibility calculations.",
    themeColor: "from-purple-500/20 to-indigo-500/10",
    accentColor: "#8B5CF6",
    colors: ["#8B5CF6", "#4C1D95", "#F5F3FF", "#18181B"],
    featured: false,
    highlights: ["Credit score gauge visualizer", "Flexible EMI customizer", "Biometric authorization step"],
    mockupType: "purple-loan"
  },
  {
    id: "sugee",
    title: "Sugee Analytics",
    tagline: "Simpler, Brighter Control Dashboard",
    category: "App Design",
    tag: "App Design",
    description: "Sleek green dashboard for tracking interest rates, growth ratios, and daily financial credit metrics with clean graphs.",
    fullCaseStudy: "Sugee streamlines complex corporate balance sheets and portfolio investments into clean visual cards and real-time line charts.",
    themeColor: "from-emerald-600/20 to-green-500/10",
    accentColor: "#059669",
    colors: ["#059669", "#064E3B", "#ECFDF5", "#0F172A"],
    featured: false,
    highlights: ["Interactive growth chart widget", "Automated CSV report export", "Custom metric thresholds"],
    mockupType: "sugee"
  },
  {
    id: "inetrade",
    title: "ineTrade Hub",
    tagline: "Trading & Entertainment Galaxy App",
    category: "App Design",
    tag: "App Design",
    description: "Vibrant yellow/gold mobile platform featuring live market tickers, movie universe trading cards, and community portfolio sharing.",
    fullCaseStudy: "A hybrid entertainment and asset trading experience created for next-gen collectors and entertainment asset traders.",
    themeColor: "from-amber-500/20 to-orange-500/10",
    accentColor: "#EAB308",
    colors: ["#EAB308", "#78350F", "#FEFCE8", "#09090B"],
    featured: false,
    highlights: ["Live streaming price ticker", "NFT & card collection showcase", "Social community leaderboards"],
    mockupType: "inetrade"
  }
];

export const services = [
  {
    num: "01",
    title: "User Experience (UX) Architecture",
    desc: "In-depth user research, wireframing, persona mapping, and usability testing to build intuitive product flows that reduce drop-off."
  },
  {
    num: "02",
    title: "User Interface (UI) & Visual Identity",
    desc: "Crafting pixel-perfect design systems, visual identities, micro-interactions, and accessible high-fidelity prototypes."
  },
  {
    num: "03",
    title: "Mobile App & Responsive Web",
    desc: "End-to-end digital product design optimized across iOS, Android, and modern desktop web standards."
  },
  {
    num: "04",
    title: "Design Systems & Tokenization",
    desc: "Building scalable Figma component libraries, multi-brand design tokens, and engineering documentation."
  }
];
