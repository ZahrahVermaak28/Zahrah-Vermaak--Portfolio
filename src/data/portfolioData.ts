export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'AI & Data' | 'Web Apps';
  summary: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  challenges: string;
  technologies: string[];
  metrics: string;
  githubUrl: string;
  demoUrl: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string;
  honors?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Zahrah Vermaak",
    role: "Aspiring Software Developer & Digital Associate",
    bioLead: "Bridging architectural software engineering with human-centered digital experiences.",
    bioLong: "I am a passionate software developer and digital associate dedicated to building elegant, high-performance web applications and intelligent systems. Combining technical rigor in TypeScript, React, and modern backend architectures with an intuitive eye for digital product aesthetics, I deliver software that feels seamless, reliable, and purposeful.",
    email: "zahrahmartin28@gmail.com",
    location: "Cape Town, South Africa (Open to Global & Remote)",
    status: "Available for Software Developer & Digital Associate Roles",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  
  aboutCards: [
    {
      id: "architecture",
      title: "Software Engineering & Architecture",
      subtitle: "Robust Foundations",
      description: "Writing maintainable, clean code using modern TypeScript, React, and modular backend patterns. Focused on web accessibility, responsive fluid layouts, and testable system architecture.",
      highlights: ["Component-Driven Architecture", "Type-Safe Full-Stack Systems", "Performance Optimization"]
    },
    {
      id: "digital",
      title: "Digital Associate & Product Strategy",
      subtitle: "Workflow Orchestration",
      description: "Connecting engineering execution with user experience design and agile product workflows. Experienced in cross-functional coordination, technical documentation, and customer-first digital transformation.",
      highlights: ["Agile Sprint Collaboration", "User Journey Mapping", "Digital Solution Delivery"]
    },
    {
      id: "ai-innovation",
      title: "AI Integration & Modern Tooling",
      subtitle: "Intelligent Workflows",
      description: "Harnessing modern LLM SDKs, prompt orchestration, and intelligent automation to build intuitive tools that reduce friction, augment creativity, and power contextual insights.",
      highlights: ["Gemini & LLM API Integration", "Automated Knowledge Workflows", "Future-Forward Engineering"]
    }
  ],

  skillCategories: [
    {
      name: "Frontend Development",
      description: "Crafting fluid, accessible, and high-performance user interfaces.",
      skills: ["React 19", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 & Semantic Web", "CSS Grid & Flexbox", "Framer Motion"]
    },
    {
      name: "Backend & Systems",
      description: "Building reliable APIs, relational persistence, and server logic.",
      skills: ["Node.js", "Express", "RESTful APIs", "PostgreSQL", "SQL & Database Design", "Firebase / Firestore", "Authentication (OAuth / JWT)"]
    },
    {
      name: "AI & Emerging Technologies",
      description: "Integrating modern generative AI and automated intelligence.",
      skills: ["Google Gemini API", "Prompt Engineering", "Function Calling", "AI Workflow Automation", "Vector Embeddings & RAG Fundamentals"]
    },
    {
      name: "Tools, Practices & DevOps",
      description: "Ensuring velocity, code quality, and structured deployment.",
      skills: ["Git & GitHub Version Control", "Vite & Modern Bundlers", "Postman & API Testing", "Agile & Scrum Delivery", "Figma Design-to-Code", "CI/CD & Cloud Deployments"]
    }
  ],

  projects: [
    {
      id: "synthex-ai",
      title: "Synthex AI Insights Platform",
      subtitle: "Real-time AI telemetry & automated agent orchestration console",
      category: "AI & Data",
      summary: "A production-grade analytics platform that monitors multi-agent AI execution, pipeline latency, and contextual insights with instant alert dispatch.",
      description: "Synthex was designed to solve the visibility bottleneck in enterprise generative AI pipelines. By offering structured telemetry charts, inference timing metrics, and automated failure detection, engineering teams can optimize prompt accuracy and agent throughput in real time.",
      image: "/src/assets/images/project_ai_platform_1792134242311.jpg",
      tags: ["TypeScript", "React", "Gemini API", "Tailwind CSS", "Data Viz"],
      features: [
        "Live pipeline health monitoring with 96.7% operational benchmark",
        "Agent execution timeline tracking and error root-cause inspection",
        "Contextual prompt optimization assistant powered by Gemini API",
        "Responsive dark mode dashboard with fluid glassmorphic cards"
      ],
      challenges: "Synchronizing high-frequency telemetry metrics without UI re-render thrashing was solved through throttled state aggregation and memoized canvas charts.",
      technologies: ["React 19", "TypeScript", "Tailwind CSS", "Lucide Icons", "REST API"],
      metrics: "Sub-120ms average UI interaction latency and 100% test coverage for core data reducers.",
      githubUrl: "https://github.com",
      demoUrl: "https://synthex-demo.vercel.app"
    },
    {
      id: "synapse-hub",
      title: "Synapse Digital Workspace",
      subtitle: "Collaborative knowledge orchestration and agile sprint management",
      category: "Full-Stack",
      summary: "An integrated collaborative platform unifying project documentation, task boards, and cross-functional team activity feeds.",
      description: "Synapse bridges the gap between software development sprints and digital associate documentation. Built with a modular React architecture and custom markdown parsing, teams can draft technical specifications, assign action items, and maintain live product playbooks with zero friction.",
      image: "/src/assets/images/project_digital_hub_1792134242782.jpg",
      tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
      features: [
        "Modular block-based documentation editor with instant search",
        "Kanban sprint board with drag-and-drop state transitions",
        "Role-based access permissions and audit activity log",
        "Clean lavender and ivory theme with WCAG AA compliance"
      ],
      challenges: "Architecting a flexible relational data model to handle hierarchical document trees and nested team permissions while maintaining snappy query times.",
      technologies: ["TypeScript", "React", "PostgreSQL", "Express", "Tailwind CSS"],
      metrics: "Reduced team onboarding ramp-up by 40% in simulated staging tests.",
      githubUrl: "https://github.com",
      demoUrl: "https://synapse-hub.vercel.app"
    },
    {
      id: "velour-oak",
      title: "Velour & Oak Digital Commerce",
      subtitle: "Editorial lifestyle storefront with interactive client styling",
      category: "Web Apps",
      summary: "A high-end digital shopping experience combining editorial aesthetics with accessible, lightning-fast checkout ergonomics.",
      description: "Velour & Oak reflects contemporary digital commerce where storytelling and conversion meet. Featuring an editorial lookbook view, custom filter drawers, instant cart state, and optimized image loading pipelines.",
      image: "/src/assets/images/project_ecommerce_app_1792134243107.jpg",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "UX Design"],
      features: [
        "Interactive editorial catalog with micro-interactions",
        "Contextual cart drawer with persistent local storage",
        "Dynamic theme switching with optical contrast compensation",
        "Mobile-first responsive design tested on touch viewports"
      ],
      challenges: "Balancing high-resolution editorial photography assets with optimal page load speed through modern responsive srcset and lazy loading strategies.",
      technologies: ["React 19", "TypeScript", "Tailwind CSS", "Motion", "Vite"],
      metrics: "Perfect 98+ Lighthouse performance and accessibility scores across devices.",
      githubUrl: "https://github.com",
      demoUrl: "https://velouroak.vercel.app"
    }
  ] as Project[],

  experience: [
    {
      id: "exp-1",
      role: "Digital Associate & Junior Software Engineer",
      company: "TechBridge Digital Solutions",
      location: "Cape Town (Hybrid)",
      period: "2024 — Present",
      description: [
        "Engineered responsive front-end components and client dashboards using React, TypeScript, and Tailwind CSS, improving application load performance by 25%.",
        "Collaborated with project managers and designers to translate wireframes and user user stories into scalable, accessible web features.",
        "Authored comprehensive technical documentation, API specifications, and digital onboarding guides for cross-functional stakeholders.",
        "Implemented automated quality checks, unit tests, and continuous integration pipelines for frontend deployment."
      ],
      skills: ["React", "TypeScript", "Tailwind CSS", "Agile Sprints", "Digital Operations"]
    },
    {
      id: "exp-2",
      role: "Software Developer Intern",
      company: "Innovate Labs",
      location: "Cape Town",
      period: "2023 — 2024",
      description: [
        "Assisted in developing RESTful backend microservices in Node.js and Express connected to relational PostgreSQL databases.",
        "Conducted code reviews, debugged edge-case UI rendering bugs, and contributed to the internal design system component library.",
        "Researched and integrated generative AI APIs to automate internal customer inquiry tagging and ticket categorization."
      ],
      skills: ["JavaScript", "Node.js", "PostgreSQL", "Git", "REST APIs"]
    }
  ] as ExperienceItem[],

  education: [
    {
      id: "edu-1",
      degree: "Diploma in Information Technology & Software Development",
      institution: "Cape Peninsula University of Technology / Digital Academy",
      period: "2021 — 2024",
      details: "Comprehensive coursework in Object-Oriented Programming, Data Structures, Web Technologies, Database Systems, and Systems Analysis.",
      honors: "Graduated with Distinction in Web Development & Software Engineering Capstone"
    }
  ] as EducationItem[],

  certifications: [
    {
      name: "Meta Certified Front-End Developer",
      issuer: "Meta / Coursera",
      year: "2024"
    },
    {
      name: "Google Digital Transformation & Cloud Associate",
      issuer: "Google Career Certificates",
      year: "2024"
    },
    {
      name: "Full Stack JavaScript Developer",
      issuer: "FreeCodeCamp & Codecademy",
      year: "2023"
    }
  ] as CertificationItem[]
};
