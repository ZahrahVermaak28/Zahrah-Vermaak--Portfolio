/**
 * Zahrah Vermaak — Professional Developer Portfolio
 * Aesthetic: Midnight & Sage
 * 
 * Vanilla JavaScript (No frameworks, No build step, 100% GitHub Pages ready)
 * Features:
 * - Letter-by-letter Hero Reveal Animation
 * - Typewriter Title Effect with Blinking Cursor
 * - Mouse-Following Ambient Sage Glow
 * - Sticky Nav & Active Link Tracking
 * - Smooth Dark/Light Mode Switcher with localStorage & Icon Spin
 * - IntersectionObserver Scroll Reveal Animations
 * - 3D Card Tilt Effect on Desktop
 * - Interactive Project Filtering
 * - Interactive Skills Category Filtering
 * - Project Case Study Deep-Dive Modal
 * - Interactive Printable Resume Modal
 * - One-Click Email Copy with Feedback
 * - Validated Contact Form with Interactive Feedback State
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. DATA REPOSITORY (Projects & Deep Dives)
  // ==========================================
  const PROJECTS_DATA = {
    careerpath: {
      title: "CareerPath AI",
      category: "AI & Innovation",
      subtitle: "AI Career Guidance Chatbot & Interactive CV Builder",
      image: "./assets/images/project-careerpath-ai.jpg",
      tags: ["Python", "Google AI Studio", "Prompt Engineering", "JavaScript", "REST APIs"],
      metrics: "Personalized career coaching & CV generator",
      status: "Prototype / Project",
      overview: "CareerPath AI is an AI-powered career guidance chatbot designed to help students explore career options, understand industry pathways, and receive structured future career guidance. Includes full CV-building functionality.",
      features: [
        "AI career coach chatbot with contextual conversational guidance",
        "Interactive CV builder with real-time formatting and template preview",
        "Skill-gap analysis and recommended educational trajectories",
        "Student-focused guidance flow tailored for post-school transitions"
      ],
      challenge: "Structuring prompt chains to deliver accurate career role insights without hallucinating entry requirements was achieved through strict system instructions and domain templates.",
      technologies: ["Python", "Google AI Studio", "Prompt Engineering", "JavaScript", "HTML5/CSS3"],
      demoUrl: "Not Available",
      githubUrl: "https://github.com/lubzie1007/AI-Chatbot-Prototype.git"
    },
    createflow: {
      title: "CreateFlow AI",
      category: "AI & Innovation",
      subtitle: "Multimodal AI Content Generation Studio",
      image: "./assets/images/project-createflow-ai.jpg",
      tags: ["Python", "FastAPI", "React", "Hugging Face", "Google AI Studio"],
      metrics: "Unified text, image & code generation",
      status: "Prototype / Project",
      overview: "An AI content generation platform exploring text, image, and code generation through an accessible, intuitive user interface. Designed for rapid ideation and creative content automation.",
      features: [
        "Multimodal generation suite: marketing copy, code snippets, and creative assets",
        "Clean dark-mode dashboard tailored for content workflows",
        "Configurable prompt parameters and generation history library",
        "Fast API orchestration connecting open-source and cloud models"
      ],
      challenge: "Harmonizing multiple model API responses (text stream, base64 images, structured code blocks) into a single unified client workspace.",
      technologies: ["Python", "FastAPI", "React", "Hugging Face", "Google AI Studio"],
      demoUrl: "https://createflowai-zv.ai.studio/",
      githubUrl: "https://github.com/ZahrahVermaak28/createFlow-ai.git"
    },
    auralens: {
      title: "Aura-Lens",
      category: "AI & Innovation",
      subtitle: "AI Sentiment Analysis & Dataset Comparative Platform",
      image: "./assets/images/project-aura-lens.jpg",
      tags: ["Python", "VADER", "Hugging Face", "JavaScript", "Data Viz"],
      metrics: "Interactive comparative charts · In Development",
      status: "In Development",
      overview: "An AI-powered sentiment analysis platform that analyses comments and unstructured datasets, compares different sentiment analysis approaches (rule-based VADER vs transformer models), and displays interactive visualization charts.",
      features: [
        "Dataset ingestion for comments, reviews, and social feedback",
        "Side-by-side comparative analysis of rule-based vs neural sentiment models",
        "Interactive visual charts displaying sentiment polarity and subjectivity",
        "Currently in active development with live deployment available"
      ],
      challenge: "Benchmarking latency vs accuracy trade-offs between lightweight lexicon engines and transformer tokenizers in browser runtime.",
      technologies: ["Python", "VADER", "Hugging Face", "JavaScript", "Chart.js", "CSS3"],
      demoUrl: "https://aura-lens.ai.studio/",
      githubUrl: "https://github.com/ZahrahVermaak28/Aura_Lens.git"
    },
    cropdoc: {
      title: "Crop Doc — Working Title",
      category: "AI & Innovation",
      subtitle: "Machine Learning Plant Disease Detection & Prevention",
      image: "./assets/images/project-crop-doc.jpg",
      tags: ["Python", "TensorFlow", "Keras", "FastAPI", "Computer Vision"],
      metrics: "Leaf disease diagnosis & symptom guide",
      status: "Prototype / Project",
      overview: "An AI crop disease detection application using machine learning computer vision to identify possible plant diseases from uploaded leaf images and provide comprehensive information on symptoms, treatment, and preventive agricultural practices.",
      features: [
        "Leaf image upload and mobile camera capture scanning",
        "Disease classification across multiple crop species (tomatoes, maize, potatoes)",
        "Actionable remediation plans: biological treatments, fungicides, and irrigation adjustments",
        "Easily configurable project naming and modular disease classifier"
      ],
      challenge: "Training convolutional neural network weights to remain robust against variable field lighting and background leaf occlusions.",
      technologies: ["Python", "TensorFlow", "Keras", "FastAPI", "OpenCV", "JavaScript"],
      demoUrl: "",
      githubUrl: "https://github.com"
    },
    findyourpath: {
      title: "FindYourPath",
      category: "University Projects",
      subtitle: "Student Mentorship & Industry Discovery Network",
      image: "./assets/images/project-findyourpath.jpg",
      tags: ["Java", "Spring Boot", "MySQL", "JavaScript", "HTML5/CSS3"],
      metrics: "Industry exploration & mentor discovery",
      status: "In Development",
      overview: "A mentorship and career guidance platform developed as a university software engineering project to help students explore industry sectors, discover compatible mentors, and share real-world career experiences.",
      features: [
        "Industry discovery tracks with structured milestone roadmaps",
        "Mentor matching directory with background filtering and verified alumni profiles",
        "Discussion forums for sharing experiential learning and internship insights",
        "Secure authentication and profile management for student cohorts"
      ],
      challenge: "Designing a relational database schema in MySQL to handle complex many-to-many mentor-student relationships and session schedules.",
      technologies: ["Java", "Spring Boot", "MySQL", "HTML5", "CSS3", "JavaScript"],
      demoUrl: "",
      githubUrl: "https://github.com/ZahrahVermaak28/FindYourPathWholeProject.git"
    },
    commercex: {
      title: "CommerceX & Auction Hub",
      category: "University Projects",
      subtitle: "Real-Time Online Auction & Bidding Marketplace",
      image: "./assets/images/project-commercex.jpg",
      tags: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "JavaScript"],
      metrics: "Live bidding engine & auction inventory",
      status: "In Development",
      overview: "An online auction platform designed for users to list items, launch scheduled auctions, track live bid increments, and participate in competitive marketplace transactions.",
      features: [
        "Item listing management with image uploads and reserve price settings",
        "Live auction countdown timers with dynamic bid history tracking",
        "Automatic highest-bidder resolution and transaction logs",
        "Spring Boot backend with relational PostgreSQL persistence"
      ],
      challenge: "Preventing race conditions during concurrent bid submissions through transactional database locks and state synchronization.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "JavaScript", "CSS3"],
      demoUrl: "",
      githubUrl: "https://github.com/ZahrahVermaak28/CommerceX-AuctionHub.git"
    },
    ubuntustore: {
      title: "Ubuntu Store",
      category: "University Projects",
      subtitle: "E-Commerce Application with Product Management & Cash/EFT Checkout",
      image: "./assets/images/project-ubuntu-store.jpg",
      tags: ["Java", "MySQL", "HTML5", "CSS3", "JavaScript"],
      metrics: "Product catalog & multi-method checkout",
      status: "Academic Project",
      overview: "A full-featured e-commerce web application featuring administrative product management, customer browsing, shopping bag persistence, and checkout with support for Cash on Delivery and Electronic Funds Transfer (EFT).",
      features: [
        "Interactive product catalog with category navigation and inventory tracking",
        "Administrative management module for adding, updating, and removing products",
        "Dual checkout pipeline supporting EFT and Cash on Delivery workflows",
        "Clean responsive user interface built with semantic HTML5 and CSS3"
      ],
      challenge: "Implementing structured order management and data integrity across multi-step checkout state without an external payment gateway.",
      technologies: ["Java", "MySQL", "HTML5", "CSS3", "JavaScript"],
      demoUrl: "Not Available",
      githubUrl: "https://github.com/PamMasina/Ubuntu-store.git"
    }
  };

  // ==========================================
  // 2. LETTER-BY-LETTER HERO REVEAL
  // ==========================================
  const greetingEl = document.getElementById('hero-greeting-text');
  if (greetingEl) {
    const rawText = greetingEl.textContent.trim();
    greetingEl.textContent = '';
    
    [...rawText].forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.className = 'letter-reveal';
      span.style.animationDelay = `${index * 40}ms`;
      greetingEl.appendChild(span);
    });
  }

  // ==========================================
  // 3. TYPEWRITER EFFECT FOR ROLES
  // ==========================================
  const typewriterTarget = document.getElementById('typewriter-target');
  const roles = [
    "Software Developer",
    "Digital Associate",
    "Application Developer (CPUT)",
    "AI Solutions Builder"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 90;

  function handleTypewriter() {
    if (!typewriterTarget) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typewriterTarget.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 45;
    } else {
      typewriterTarget.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 1800; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 400; // Brief pause before next word
    }

    setTimeout(handleTypewriter, typeSpeed);
  }

  setTimeout(handleTypewriter, 600);

  // ==========================================
  // 4. MOUSE-FOLLOWING AMBIENT GLOW (Desktop)
  // ==========================================
  const mouseGlow = document.getElementById('mouse-glow');
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;

  if (mouseGlow && isFinePointer) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let isTracking = false;

    window.addEventListener('pointermove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isTracking) {
        mouseGlow.classList.add('active');
        isTracking = true;
      }
    });

    window.addEventListener('pointerleave', () => {
      mouseGlow.classList.remove('active');
      isTracking = false;
    });

    function renderGlow() {
      // Smooth lerp (linear interpolation)
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;
      mouseGlow.style.left = `${currentX}px`;
      mouseGlow.style.top = `${currentY}px`;

      requestAnimationFrame(renderGlow);
    }

    requestAnimationFrame(renderGlow);
  }

  // ==========================================
  // 5. THEME SWITCHER (Dark & Light Mode)
  // ==========================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIconContainer = document.getElementById('theme-icon');

  const sunIconSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  const moonIconSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

  function applyTheme(theme, animateIcon = false) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('zv_portfolio_theme', theme);
    
    if (themeIconContainer) {
      themeIconContainer.innerHTML = theme === 'dark' ? sunIconSVG : moonIconSVG;
    }
    
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      themeToggleBtn.setAttribute('title', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      
      if (animateIcon) {
        themeToggleBtn.classList.add('rotating');
        setTimeout(() => themeToggleBtn.classList.remove('rotating'), 400);
      }
    }
  }

  // Initial Theme: Dark Mode is default, or saved user choice
  const savedTheme = localStorage.getItem('zv_portfolio_theme') || 'dark';
  applyTheme(savedTheme, false);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme, true);
    });
  }

  // ==========================================
  // 6. MOBILE NAVIGATION TOGGLE
  // ==========================================
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = hamburgerBtn.classList.toggle('is-active');
      mobileMenu.classList.toggle('is-open', isOpen);
      hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('is-active');
        mobileMenu.classList.remove('is-open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ==========================================
  // 7. ACTIVE NAVIGATION LINK ON SCROLL
  // ==========================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          link.classList.toggle('active', href === `#${id}`);
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -65% 0px',
    threshold: 0
  });

  sections.forEach(section => scrollObserver.observe(section));

  // ==========================================
  // 8. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Reveal immediately for reduced-motion preference
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // ==========================================
  // 9. 3D CARD TILT EFFECT (Desktop)
  // ==========================================
  const tiltCards = document.querySelectorAll('[data-tilt]');
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

  if (!isTouchDevice && !prefersReducedMotion) {
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        const rotateX = -deltaY * 5; // Max 5 deg
        const rotateY = deltaX * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });
  }

  // ==========================================
  // 10. PROJECT FILTERING
  // ==========================================
  const projectFilterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const projectGroupHeadings = document.querySelectorAll('.project-group-heading');

  projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      projectFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category'); // 'ai' or 'uni'
        const isIndev = card.getAttribute('data-status') === 'in-dev';

        let shouldShow = false;
        if (filterValue === 'all') {
          shouldShow = true;
        } else if (filterValue === 'ai' && cardCategory === 'ai') {
          shouldShow = true;
        } else if (filterValue === 'uni' && cardCategory === 'uni') {
          shouldShow = true;
        } else if (filterValue === 'indev' && isIndev) {
          shouldShow = true;
        }

        if (shouldShow) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 280ms ease';
        } else {
          card.style.display = 'none';
        }
      });

      // Synchronize category group subheadings
      projectGroupHeadings.forEach(heading => {
        const groupType = heading.getAttribute('data-group'); // 'ai' or 'uni'
        if (filterValue === 'all') {
          heading.style.display = 'flex';
        } else if (filterValue === 'ai') {
          heading.style.display = groupType === 'ai' ? 'flex' : 'none';
        } else if (filterValue === 'uni') {
          heading.style.display = groupType === 'uni' ? 'flex' : 'none';
        } else if (filterValue === 'indev') {
          heading.style.display = 'none';
        }
      });
    });
  });

  // ==========================================
  // 11. SKILLS FILTERING (Active Tab Highlighting)
  // ==========================================
  const skillFilterBtns = document.querySelectorAll('.skill-filter-btn');
  const skillBoxes = document.querySelectorAll('.skill-box');

  skillFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      skillFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-skill-filter');

      skillBoxes.forEach(box => {
        const boxCategory = box.getAttribute('data-skill-category');
        if (filterValue === 'all' || boxCategory === filterValue) {
          box.style.display = 'flex';
          box.style.animation = 'fadeIn 280ms ease';
        } else {
          box.style.display = 'none';
        }
      });
    });
  });

  // ==========================================
  // 12. PROJECT CASE STUDY MODAL
  // ==========================================
  const projectModal = document.getElementById('project-modal');
  const projectModalCloseBtn = document.getElementById('project-modal-close');
  const modalContentContainer = document.getElementById('project-modal-content');

  function openProjectModal(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data || !projectModal || !modalContentContainer) return;

    const demoButtonHTML = data.demoUrl 
      ? `<a href="${data.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size: 0.75rem; padding: 0.5rem 1.25rem;">
           <span>Live Demo</span>
           <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
         </a>`
      : `<button class="btn btn-disabled" disabled style="font-size: 0.75rem; padding: 0.5rem 1.25rem;">Demo Coming Soon</button>`;

    const githubButtonHTML = data.githubUrl
      ? `<a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="font-size: 0.75rem; padding: 0.5rem 1.25rem;">
           <span>View Code</span>
         </a>`
      : `<button class="btn btn-disabled" disabled style="font-size: 0.75rem; padding: 0.5rem 1.25rem;">Code Coming Soon</button>`;

    modalContentContainer.innerHTML = `
      <div style="margin-bottom: 1.5rem; border-radius: 16px; overflow: hidden; aspect-ratio: 16/9; background: #172126; position: relative;">
        <img src="${data.image}" alt="${data.title}" style="width: 100%; height: 100%; object-fit: cover;">
        <div style="position: absolute; bottom: 1rem; left: 1rem; right: 1rem; display: flex; justify-content: space-between; align-items: center; color: white;">
          <span style="font-family: var(--font-serif); font-style: italic; font-size: 1.15rem; text-shadow: 0 2px 4px rgba(0,0,0,0.8);">${data.title}</span>
          <span style="font-size: 0.75rem; background: rgba(32,43,50,0.8); padding: 0.25rem 0.75rem; border-radius: 9999px; border: 1px solid rgba(168,185,165,0.3); color: var(--accent-primary);">${data.metrics}</span>
        </div>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 0.5rem;">
          <h3 style="font-family: var(--font-serif); font-size: 1.75rem; font-weight: 500; color: var(--text-primary); margin: 0;">${data.title}</h3>
          <span class="status-badge ${data.status === 'In Development' ? 'in-development' : 'neutral'}">${data.status}</span>
        </div>
        <p style="font-size: 0.8125rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--accent-primary); margin-bottom: 1rem;">${data.subtitle}</p>
        <p style="font-size: 0.9375rem; line-height: 1.7; color: var(--text-secondary); font-weight: 300;">${data.overview}</p>
      </div>

      <div style="background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: 16px; padding: 1.5rem; margin-bottom: 1.5rem;">
        <h4 style="font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-primary); margin-bottom: 0.75rem;">Key Architecture & Capabilities</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);">
          ${data.features.map(f => `<li style="position: relative; padding-left: 1.25rem;"><span style="position: absolute; left: 0; color: var(--accent-primary); font-weight: bold;">✓</span>${f}</li>`).join('')}
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-primary); margin-bottom: 0.5rem;">Engineering Challenge & Solution</h4>
        <p style="font-size: 0.875rem; line-height: 1.65; color: var(--text-secondary); font-weight: 300;">${data.challenge}</p>
      </div>

      <div style="margin-bottom: 2rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
        <p style="font-family: var(--font-mono); font-size: 0.6875rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.5rem;">Technologies & Frameworks</p>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; font-size: 0.8125rem; font-weight: 500; color: var(--text-primary);">
          ${data.technologies.join(' · ')}
        </div>
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
        <div style="display: flex; gap: 0.75rem; align-items: center;">
          ${demoButtonHTML}
          ${githubButtonHTML}
        </div>
        <button id="modal-inner-close" class="btn-text" style="font-size: 0.8125rem;">Close Preview</button>
      </div>
    `;

    projectModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    const innerClose = document.getElementById('modal-inner-close');
    if (innerClose) {
      innerClose.addEventListener('click', closeProjectModal);
    }
  }

  function closeProjectModal() {
    if (projectModal) {
      projectModal.classList.remove('is-open');
      document.body.style.overflow = 'auto';
    }
  }

  document.querySelectorAll('[data-open-project]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = trigger.getAttribute('data-open-project');
      openProjectModal(projId);
    });
  });

  if (projectModalCloseBtn) {
    projectModalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  // ==========================================
  // 13. RESUME MODAL
  // ==========================================
  const resumeModal = document.getElementById('resume-modal');
  const resumeModalCloseBtn = document.getElementById('resume-modal-close');
  const printResumeBtn = document.getElementById('print-resume-btn');

  function openResumeModal() {
    if (resumeModal) {
      resumeModal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeResumeModal() {
    if (resumeModal) {
      resumeModal.classList.remove('is-open');
      document.body.style.overflow = 'auto';
    }
  }

   document.querySelectorAll('[data-open-resume]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const link = document.createElement('a');
    link.href = './Zahrah_Vermaak_CV.pdf';
    link.download = 'Zahrah_Vermaak_CV.pdf';

    document.body.appendChild(link);
    link.click();
    link.remove();
  });
});

  if (resumeModalCloseBtn) {
    resumeModalCloseBtn.addEventListener('click', closeResumeModal);
  }

  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }

  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) {
        closeResumeModal();
      }
    });
  }

  // Close modals on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeResumeModal();
    }
  });

  // ==========================================
  // 14. ONE-CLICK EMAIL COPY
  // ==========================================
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyFeedback = document.getElementById('copy-feedback');

  if (copyEmailBtn && copyFeedback) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'zahrahmartin28@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        copyFeedback.classList.add('is-visible');
        setTimeout(() => {
          copyFeedback.classList.remove('is-visible');
        }, 3000);
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    });
  }

  // ==========================================
  // 15. CONTACT FORM VALIDATION & DISPATCH
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  const formAlert = document.getElementById('form-alert');
  const formSuccessBox = document.getElementById('form-success-box');
  const resetFormBtn = document.getElementById('reset-form-btn');

  if (contactForm && formAlert && formSuccessBox) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      formAlert.className = 'form-alert';
      formAlert.style.display = 'none';

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !message) {
        formAlert.textContent = 'Please fill out all required fields.';
        formAlert.classList.add('error');
        formAlert.style.display = 'block';
        return;
      }

      if (!email.includes('@') || !email.includes('.')) {
        formAlert.textContent = 'Please enter a valid email address.';
        formAlert.classList.add('error');
        formAlert.style.display = 'block';
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.textContent = 'Sending message...';
      submitBtn.disabled = true;

      // Simulated smooth dispatch
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        contactForm.style.display = 'none';
        formSuccessBox.classList.add('is-active');
        contactForm.reset();
      }, 700);
    });

    if (resetFormBtn) {
      resetFormBtn.addEventListener('click', () => {
        formSuccessBox.classList.remove('is-active');
        contactForm.style.display = 'block';
      });
    }
  }

  // ==========================================
  // 16. SMOOTH SCROLL TO TOP
  // ==========================================
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
