export const personalInfo = {
  name: "Ankit Verma",
  title: "Software Engineer | React Developer | QA Engineer",
  tagline: "Building scalable, high-performance web applications and ensuring rock-solid software quality.",
  bio: "Passionate Software Engineer and final-year Computational Science undergraduate at GLA University. Specializing in modern React.js frontend ecosystems, full-stack web architectures, and comprehensive software quality assurance with both automated and manual testing.",
  status: "Available for Full-time Roles & Internships",
  location: "Mathura, India",
  graduationYear: 2026,
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/ankit151202",
    linkedin: "https://www.linkedin.com/in/ankit-verma-a107b7251",
  },
  // Configurable contact endpoint (e.g., https://formspree.io/f/your-id or custom API)
  contactFormEndpoint: import.meta.env.VITE_CONTACT_FORM_ENDPOINT || "",
};

export const educationData = [
  {
    institution: "GLA University, Mathura",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computational Science",
    period: "2022 - 2026",
    cgpa: "7.03",
    status: "Final Year (Graduating 2026)",
    highlights: [
      "Rigorous coursework in Data Structures, Algorithms, Database Management Systems, and Object-Oriented Programming.",
      "Specialized training in Computational Science methodologies, Software Engineering principles, and Software Quality Assurance.",
      "Active participant in technical symposiums, hackathons, and software development projects."
    ]
  }
];

export const skillCategories = [
  {
    category: "Frontend Development",
    iconName: "Layout",
    description: "Crafting fluid, pixel-perfect user interfaces with modern reactive paradigms.",
    skills: [
      { name: "React.js", level: "Advanced", icon: "Code2", highlight: true },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode2", highlight: true },
      { name: "Tailwind CSS", level: "Advanced", icon: "Palette", highlight: true },
      { name: "HTML5", level: "Expert", icon: "Globe" },
      { name: "CSS3", level: "Expert", icon: "Layers" },
    ]
  },
  {
    category: "Backend Development",
    iconName: "Server",
    description: "Architecting reliable server-side services and RESTful APIs.",
    skills: [
      { name: "Node.js", level: "Proficient", icon: "Server", highlight: true },
      { name: "Express.js", level: "Proficient", icon: "Cpu", highlight: true },
      { name: "REST APIs", level: "Proficient", icon: "Network" },
    ]
  },
  {
    category: "Databases",
    iconName: "Database",
    description: "Designing structured schemas, relational databases, and NoSQL storage.",
    skills: [
      { name: "MySQL", level: "Proficient", icon: "Database", highlight: true },
      { name: "MongoDB", level: "Proficient", icon: "HardDrive", highlight: true },
      { name: "Oracle", level: "Intermediate", icon: "Binary" },
    ]
  },
  {
    category: "Programming Languages",
    iconName: "Terminal",
    description: "Core algorithmic thinking and object-oriented software engineering.",
    skills: [
      { name: "Java", level: "Proficient", icon: "Coffee", highlight: true },
      { name: "Python", level: "Proficient", icon: "FileCode", highlight: true },
      { name: "C", level: "Proficient", icon: "Cpu" },
    ]
  },
  {
    category: "Testing & Quality Assurance",
    iconName: "CheckCircle2",
    description: "Comprehensive verification, test automation, and validation pipelines.",
    skills: [
      { name: "Selenium", level: "Proficient", icon: "ShieldCheck", highlight: true },
      { name: "Postman", level: "Proficient", icon: "Send", highlight: true },
      { name: "Manual Testing", level: "Expert", icon: "CheckSquare", highlight: true },
      { name: "JMeter", level: "Intermediate", icon: "Gauge" },
      { name: "SQL Testing", level: "Proficient", icon: "SearchCheck" },
    ]
  },
  {
    category: "Developer Tools",
    iconName: "Wrench",
    description: "Version control workflows, environments, and modern developer productivity.",
    skills: [
      { name: "Git", level: "Proficient", icon: "GitBranch", highlight: true },
      { name: "GitHub", level: "Proficient", icon: "Github", highlight: true },
      { name: "VS Code", level: "Expert", icon: "Code" },
    ]
  }
];

export const projectsData = [
  {
    id: "cryptera",
    title: "CryptEra",
    tagline: "Hierarchical Cloud Storage Platform with AES-256 Encryption",
    category: "Full Stack & Security",
    description: "A secure cloud storage architecture featuring hierarchical role-based access control and end-to-end AES-256 file encryption, guaranteeing airtight data privacy and zero-knowledge storage integrity.",
    longDescription: "CryptEra addresses the challenge of unauthorized file interception and privacy violations in modern cloud storage. Designed with a zero-trust mindset, files undergo client-side AES-256 cryptographic shredding before storage, paired with an intelligent organizational tree hierarchy for team and personal asset segregation.",
    tags: ["React.js", "Node.js", "Express.js", "AES-256", "Cloud Security", "Tailwind CSS"],
    features: [
      "End-to-end AES-256 cryptographic encryption for all stored files and payloads",
      "Hierarchical folder and permission management with granular access control",
      "Dynamic file streaming and secure token-based download links",
      "Responsive file explorer dashboard with real-time status indicators"
    ],
    github: "https://github.com/ankit151202",
    demo: "https://github.com/ankit151202",
    featured: true,
    badge: "Security & Cloud"
  },
  {
    id: "rajesh-jewellers",
    title: "Rajesh Jewellers",
    tagline: "Responsive Jewellery Business Showcase & Catalog",
    category: "Frontend & UI/UX",
    description: "A luxury e-commerce and showcase website tailored for Rajesh Jewellers, engineered with a mobile-first responsive design, high-resolution product showcases, and interactive inquiry workflows.",
    longDescription: "Crafted specifically to amplify the digital presence of a premium jewellery brand. The site features smooth micro-animations, refined category filtering, gold & diamond collection highlights, and direct customer inquiry integration.",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design", "UI/UX"],
    features: [
      "Ultra-responsive layout optimized across ultra-wide monitors, tablets, and smartphones",
      "Interactive collection catalog with category filters and high-res image galleries",
      "Inquiry and customer appointment booking modal system",
      "High performance with sub-second page rendering and smooth animations"
    ],
    github: "https://github.com/ankit151202",
    demo: "https://github.com/ankit151202",
    featured: true,
    badge: "Commercial Client"
  },
  {
    id: "news-aggregator",
    title: "News Aggregator",
    tagline: "React-Based Real-Time News Delivery Application",
    category: "React & API Integration",
    description: "A dynamic news aggregator web application fetching global headlines across business, technology, science, and entertainment, with instant topic filtering and search capabilities.",
    longDescription: "Built to provide users with an uncluttered, lightning-fast news reading experience. Consumes third-party RESTful news feeds with robust error-handling, responsive cards, category switching, and instant article bookmarking.",
    tags: ["React.js", "REST APIs", "Tailwind CSS", "JavaScript ES6+", "Async/Await"],
    features: [
      "Real-time news feed curation across categories like Technology, Business, and Science",
      "Fast keyword search query with instant client-side filtering",
      "Responsive card grid with read-time estimates and direct article sourcing",
      "Dark mode aesthetic and clean reading typography"
    ],
    github: "https://github.com/ankit151202",
    demo: "https://github.com/ankit151202",
    featured: false,
    badge: "Web App"
  },
  {
    id: "job-application-tracker",
    title: "Job Application Tracker",
    tagline: "Intuitive React CRUD Application for Career Management",
    category: "React & State Management",
    description: "A full-featured personal career pipeline tracker enabling job seekers to organize, update, filter, and analyze job applications through every stage of the recruitment lifecycle.",
    longDescription: "Streamlines the job search journey with intuitive CRUD operations. Users can monitor stages (Applied, Screen, Interview, Offer, Rejected), record interview dates, save recruiter contacts, and assess their application funnel metrics.",
    tags: ["React.js", "CRUD Operations", "Tailwind CSS", "State Management", "LocalStorage"],
    features: [
      "Full CRUD functionality: Add, view, edit status, and delete applications effortlessly",
      "Status-driven pipeline visualization (Applied, Interviewing, Offered, Rejected)",
      "Instant filtering by company name, job role, and application timeline",
      "Persistent client-side storage ensuring records remain saved across sessions"
    ],
    github: "https://github.com/ankit151202",
    demo: "https://github.com/ankit151202",
    featured: false,
    badge: "Productivity"
  },
  {
    id: "blood-share-care",
    title: "Blood Share & Care",
    tagline: "Community Blood Donation & Emergency Connect Platform",
    category: "Full Stack & Social Impact",
    description: "A community-focused web platform designed to bridge the critical gap between blood donors and patients facing urgent medical emergencies with rapid blood group matching.",
    longDescription: "Engineered to save lives during medical emergencies by providing a transparent, prompt matching system. Donors can register their availability, while recipients or hospitals can search for compatible blood types nearby.",
    tags: ["React.js", "Node.js", "Tailwind CSS", "Responsive UI", "Emergency Workflows"],
    features: [
      "Blood group compatibility search and donor verification directory",
      "Emergency request broadcast board with urgency prioritization",
      "Donor availability status toggle with privacy-conscious contact initiation",
      "Clean, accessible interface designed for rapid navigation under stress"
    ],
    github: "https://github.com/ankit151202",
    demo: "https://github.com/ankit151202",
    featured: false,
    badge: "Social Impact"
  }
];

export const experienceStats = [
  { label: "Graduation", value: "2026", subtext: "GLA University, Mathura" },
  { label: "Academic CGPA", value: "7.03", subtext: "B.Tech Computational Science" },
  { label: "Key Projects", value: "5+", subtext: "Full Stack, React & Security" },
  { label: "Core Competencies", value: "3", subtext: "Dev, QA & Problem Solving" }
];
