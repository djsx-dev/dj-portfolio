import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Copy,
  Database,
  Facebook,
  FileText,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  Maximize2,
  Send,
  X,
} from 'lucide-react';

// Configuration point for contact delivery.
const CONTACT_DESTINATION = 'mailto:diazderrick290@gmail.com';

type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  details: Record<string, string>;
  tone: string;
  image?: string;
  featureImages?: string[];
  liveUrl?: string;
};

const techStackItems = [
  { name: 'React.js', icon: <Code2 size={14} /> },
  { name: 'Next.js', icon: <Code2 size={14} /> },
  { name: 'TypeScript', icon: <Code2 size={14} /> },
  { name: 'JavaScript', icon: <Code2 size={14} /> },
  { name: 'Tailwind CSS', icon: <Code2 size={14} /> },
  { name: 'HTML5 & CSS3', icon: <Code2 size={14} /> },
  { name: 'Node.js', icon: <Code2 size={14} /> },
  { name: 'Supabase', icon: <Database size={14} /> },
  { name: 'Firebase', icon: <Database size={14} /> },
  { name: 'PostgreSQL & SQL', icon: <Database size={14} /> },
  { name: 'AWS Cloud', icon: <Cloud size={14} /> },
  { name: 'React Native', icon: <Code2 size={14} /> },
  { name: 'Git & GitHub', icon: <Github size={14} /> },
  { name: 'Figma & UI/UX', icon: <Code2 size={14} /> },
];

const journey = [
  { title: 'Education', caption: 'The foundation', detail: 'Bachelor of Science in Information Technology at the University of Batangas, with a focus on turning curiosity into practical technical capability.' },
  { title: 'Training', caption: 'The toolkit', detail: 'Cloud, web development, and application development training shaped a broad view of how products are planned, built, and improved.' },
  { title: 'Projects', caption: 'The practice', detail: 'Real project work made the connection between interface decisions, system logic, and the people using the finished experience clear.' },
  { title: 'Internship', caption: 'The team', detail: 'As a Full Stack Developer Intern, Derrick contributed across front-end, back-end integration, database tasks, debugging, and system improvements.' },
  { title: 'Professional journey', caption: 'The direction', detail: 'Now open to opportunities where thoughtful implementation, reliable problem-solving, and a strong sense of usability belong in the same room.' },
];

const experience = [
  {
    date: 'Internship',
    company: 'Digiscribe Transcription Corp.',
    role: 'Full Stack Developer Intern',
    points: ['Web development and front-end implementation', 'Back-end integration and database-related tasks', 'Debugging, maintenance, and system improvements'],
  },
  {
    date: 'Independent',
    company: 'Self-employed',
    role: 'Freelance Website Developer',
    points: ['Developing websites for clients', 'Creating responsive interfaces across screen sizes', 'Implementing business requirements into practical digital solutions'],
  },
];

const skillGroups = [
  {
    name: 'Frontend',
    icon: Code2,
    skills: [
      ['React.js', 'Used to structure responsive, component-led web interfaces.'],
      ['Next.js', 'A framework in Derrick’s toolkit for building modern web applications.'],
      ['TypeScript', 'Adds clear structure and confidence to application code.'],
      ['JavaScript', 'The language behind interactive browser experiences and application logic.'],
      ['HTML', 'Semantic structure that gives digital experiences a dependable foundation.'],
      ['CSS', 'Precise layout, responsive behavior, and visual hierarchy.'],
      ['Tailwind CSS', 'A practical way to build consistent interfaces with speed and control.'],
    ],
  },
  {
    name: 'Backend / Database',
    icon: Database,
    skills: [
      ['Firebase', 'A platform used across Derrick’s application and project work.'],
      ['Supabase', 'A modern backend option for data-driven application experiences.'],
      ['SQL', 'The language for working carefully with relational data and its relationships.'],
    ],
  },
  {
    name: 'Cloud, mobile & hardware',
    icon: Cloud,
    skills: [
      ['AWS', 'Cloud fundamentals that support a wider view of how applications run.'],
      ['AWS Cloud Services', 'A growing area of exploration across infrastructure and deployment.'],
      ['React Native', 'Extends familiar React thinking into mobile application experiences.'],
      ['Arduino', 'Hands-on hardware and IoT experimentation beyond the browser.'],
    ],
  },
];

const projects: Project[] = [
  {
    id: 'brahmatch',
    number: 'PROJECT 01',
    title: 'Brahmatch',
    description: 'A web-based peer-to-peer academic platform designed to help students find suitable tutors within the University of Batangas.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    tone: 'sand',
    image: '/images/brahmatch thumbnail.jpg',
    liveUrl: 'https://ubiantutormatch.web.app',
    featureImages: [
      '/images/brahmatch thumbnail.jpg',
      '/images/brahmatch features.png',
      '/images/brahmatch features 2.png',
      '/images/brahmatch features 3.png',
    ],
    details: {
      'Project overview': 'A peer-to-peer academic platform connecting students with suitable tutors within the University of Batangas.',
      'The problem': 'Students need a clearer way to discover academic support that fits their needs.',
      'The solution': 'A focused web experience for exploring tutor options and bringing the matching process into one place.',
      'Key features': 'Tutor discovery, student-facing flows, and a structured experience for academic support.',
      'My contribution': 'Built as a full-stack project using React, TypeScript, Firebase, and Tailwind CSS.',
      Result: 'A practical platform concept centered on making peer learning easier to find.',
    },
  },
  {
    id: 'nomi-cafe',
    number: 'PROJECT 02',
    title: 'Nomi Cafe',
    description: 'A modern cafe pre-order and management system designed to streamline customer ordering and administrative operations.',
    technologies: ['Next.js', 'Tailwind CSS', 'Firebase'],
    tone: 'sage',
    image: '/images/nomi cafe thumbnail.jpg',
    liveUrl: 'https://nomi-kiosk.web.app',
    featureImages: [
      '/images/nomi cafe thumbnail.jpg',
      '/images/nomi cafe feature 1.png',
      '/images/nomi cafe feature 2.png',
      '/images/nomi cafe feature 3.png',
      '/images/nomi cafe feature 4.png',
    ],
    details: {
      'Project overview': 'A cafe platform that brings pre-ordering and administrative operations into a modern digital workflow.',
      'The problem': 'Cafe ordering and day-to-day administration can become fragmented without a shared system.',
      'The solution': 'A connected customer ordering and management experience designed around practical operations.',
      'Key features': 'Pre-order flows, clear product presentation, and administrative order management.',
      'My contribution': 'Developed the experience with Next.js, Tailwind CSS, and Firebase.',
      Result: 'A streamlined system concept for customer orders and cafe operations.',
    },
  },
  {
    id: 'shred-wrap',
    number: 'PROJECT 03',
    title: 'Shred & Wrap',
    description: 'A modern food pre-ordering platform featuring customer ordering and administrative order management.',
    technologies: ['Next.js', 'Tailwind CSS'],
    tone: 'clay',
    image: '/images/shred and wrap thumbnail.jpg',
    liveUrl: 'https://shred-and-wrap.web.app',
    featureImages: [
      '/images/shred and wrap thumbnail.jpg',
      '/images/shred and wrap feature 1.png',
      '/images/shred and wrap feature 2.png',
      '/images/shred and wrap feature 3.png',
      '/images/shred and wrap feature 4.png',
    ],
    details: {
      'Project overview': 'A food pre-ordering platform designed to make customer ordering and internal order management clearer.',
      'The problem': 'Food businesses need ordering experiences that are simple for customers and useful for administrators.',
      'The solution': 'A responsive platform that connects the customer order journey with administrative visibility.',
      'Key features': 'Food discovery, pre-ordering, and administrative order management.',
      'My contribution': 'Worked on the web experience using Next.js and Tailwind CSS.',
      Result: 'A practical ordering system concept focused on reducing friction between browsing, ordering, and managing orders.',
    },
  },
  {
    id: 'mt-baklas',
    number: 'PROJECT 04',
    title: 'Mt. Baklas Camping Site',
    description: 'A booking website designed for customers to explore and reserve camping experiences.',
    technologies: ['Web development', 'UI/UX'],
    tone: 'mist',
    image: '/images/mt baklas thumbnail.jpg',
    liveUrl: 'https://mt-baklas.web.app',
    featureImages: [
      '/images/mt baklas thumbnail.jpg',
      '/images/mt baklas features 1.png',
      '/images/mt baklas feature 2.png',
      '/images/mt baklas feature 3.png',
      '/images/mt baklas feature 4.png',
    ],
    details: {
      'Project overview': 'A booking website for exploring and reserving camping experiences at Mt. Baklas.',
      'The problem': 'Visitors need a clear way to understand a camping offer and move toward a reservation.',
      'The solution': 'A focused booking experience that puts exploration and reservation in the same journey.',
      'Key features': 'Experience discovery, reservation-focused information, and a responsive customer interface.',
      'My contribution': 'Developed the website as a practical digital solution for a booking use case.',
      Result: 'A customer-facing booking concept designed to make camping reservations easier to approach.',
    },
  },
  {
    id: 'sanjuan-ventures',
    number: 'PROJECT 05',
    title: 'Sanjuan Ventures',
    description: 'A booking platform designed to simplify reservations and customer interactions.',
    technologies: ['Web development', 'React'],
    tone: 'ochre',
    image: '/images/sanjuan venture thumbnail.jpg',
    liveUrl: 'https://sanjuan-venturesph.netlify.app',
    featureImages: [
      '/images/sanjuan venture thumbnail.jpg',
      '/images/san juan ventures feature 1.png',
      '/images/san juan ventures feature 2.png',
      '/images/san juan ventures feature 3.png',
      '/images/san juan ventures feature 4.png',
    ],
    details: {
      'Project overview': 'A booking platform built around simpler reservations and clearer customer interactions.',
      'The problem': 'Reservation experiences can feel complicated when information and next steps are not well organized.',
      'The solution': 'A more direct booking flow that helps customers understand the offer and take action.',
      'Key features': 'Booking-oriented presentation, customer interaction flows, and responsive layouts.',
      'My contribution': 'Developed the booking platform as a practical client-facing digital solution.',
      Result: 'A focused reservation concept intended to make customer interactions more straightforward.',
    },
  },
  {
    id: 'vicmar',
    number: 'PROJECT 06',
    title: 'Vicmar',
    description: 'A commercial platform and web application designed for streamlined product presentation and service requests.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    tone: 'sand',
    image: '/images/vicmar thumbnail.jpg',
    liveUrl: 'https://www.vicmarhomes.com/Home',
    featureImages: [
      '/images/vicmar thumbnail.jpg',
      '/images/vicmar feature 1.png',
      '/images/vicmar feature 2.png',
      '/images/vicmar feature 3.png',
    ],
    details: {
      'Project overview': 'A commercial web platform built for Vicmar to present products and streamline client inquiries.',
      'The problem': 'Businesses require a modern web presence to present their offerings clearly and receive client requests.',
      'The solution': 'An intuitive digital experience featuring product showcases, inquiry submission, and responsive layouts.',
      'Key features': 'Product catalog, inquiry form, mobile responsive design, and intuitive interface navigation.',
      'My contribution': 'Designed and implemented the web application frontend and interactive customer touchpoints.',
      Result: 'A professional business website concept enhancing brand presence and customer interaction.',
    },
  },
  {
    id: 'digiscribe',
    number: 'PROJECT 07',
    title: 'Digiscribe',
    description: 'A medical transcription and web management platform built during Derrick’s Full Stack Developer Internship.',
    technologies: ['React', 'Node.js', 'SQL', 'Web Development'],
    tone: 'sage',
    image: '/images/digiscribe thumbnail.jpg',
    liveUrl: 'https://www.digiscribeasiapacific.com',
    featureImages: [
      '/images/digiscribe thumbnail.jpg',
      '/images/digiscribe feature 1.png',
      '/images/digiscribe feature 2.png',
      '/images/digiscribe feature 3.png',
    ],
    details: {
      'Project overview': 'A web-based system built at Digiscribe Transcription Corp. to assist in transcription workflows and data tracking.',
      'The problem': 'Transcription teams need reliable back-end data management and intuitive front-end interfaces to work efficiently.',
      'The solution': 'A full-stack application connecting database management, user interface tools, and workflow tracking.',
      'Key features': 'Front-end dashboards, database integration, transcription management tools, and error debugging.',
      'My contribution': 'Contributed to front-end development, back-end integration, database maintenance, and debugging during internship.',
      Result: 'Enhanced system reliability and streamlined daily transcription operations during internship deployment.',
    },
  },
];

const certifications = [
  ['AWS Cloud Practitioner', 'Amazon Web Services'],
  ['AWS Cloud Foundation', 'Amazon Web Services'],
  ['AWS Cloud Architecture', 'Amazon Web Services'],
  ['AWS Generative AI', 'Amazon Web Services'],
  ['CompTIA ITF+', 'CompTIA'],
];

const exploring = ['Cloud Computing', 'AI', 'Modern Web Development', 'UI/UX', 'Full Stack Development', 'Mobile Development'];
const interests = ['Music', 'Design', 'Technology', 'Games', 'Creative projects'];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function SectionLabel({ children }: { children: string }) {
  return <span className="eyebrow">{children}</span>;
}

function TechCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animId: number;
    const speed = 0.8;

    const step = () => {
      if (el && !isHovered.current) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="tech-carousel-container" aria-label="Tech stack carousel">
      <span className="tech-carousel-label">Tech Stack & Toolkit</span>
      <div
        ref={containerRef}
        className="tech-carousel-marquee"
        onMouseEnter={() => { isHovered.current = true; }}
        onMouseLeave={() => { isHovered.current = false; }}
        onTouchStart={() => { isHovered.current = true; }}
        onTouchEnd={() => { isHovered.current = false; }}
      >
        <div className="tech-carousel-track">
          {techStackItems.concat(techStackItems).concat(techStackItems).map((tech, idx) => (
            <div key={`${tech.name}-${idx}`} className="tech-badge">
              <span className="tech-badge-dot" aria-hidden="true" />
              <span className="tech-icon">{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero({ onOpenConnect }: { onOpenConnect: () => void }) {
  return (
    <section id="home" className="profile-hero" aria-labelledby="hero-title">
      <article className="profile-card">
        <div className="profile-cover">
          <div className="profile-cover-grid" aria-hidden="true" />
          <div className="profile-cover-orbit" aria-hidden="true" />
          <div className="profile-cover-top">
            <span>Personal workspace / 01</span>
            <span>D.J.D · 2026</span>
          </div>
          <p className="profile-cover-title">Building digital experiences <em>with purpose.</em></p>
          <div className="profile-cover-bottom-right">
            <a
              href="mailto:diazderrick290@gmail.com"
              className="profile-cover-link"
              title="Email Derrick"
              data-testid="link-cover-email"
            >
              <Mail size={13} />
              <span>diazderrick290@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/derrick-diaz-257b7b439"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-cover-link"
              title="LinkedIn Profile"
              data-testid="link-cover-linkedin"
            >
              <Linkedin size={13} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-cover-link"
              title="Facebook Profile"
              data-testid="link-cover-facebook"
            >
              <Facebook size={13} />
              <span>Derrick Diaz</span>
            </a>
          </div>
        </div>

        <div className="profile-content">
          <div className="profile-identity-row">
            <div className="profile-avatar" role="img" aria-label="Profile picture of Derrick Jon Diaz">
              <img src="/images/profile pic.jpg" alt="Derrick Jon Diaz" className="profile-avatar-img" />
            </div>
            <div className="profile-identity">
              <h1 id="hero-title">Derrick Jon Diaz</h1>
            </div>
            <div className="profile-availability" data-testid="status-profile-availability">
              <span className="status-dot" aria-hidden="true" />
              Open to opportunities
            </div>
          </div>

          <div className="profile-action-row">
            <button className="button button-primary button-sm" onClick={() => scrollToId('projects')} data-testid="button-hero-work">
              View my work <ArrowDown size={14} />
            </button>
            <button className="button button-quiet button-sm" onClick={onOpenConnect} data-testid="button-hero-connect">
              Let’s connect <ArrowUpRight size={14} />
            </button>
            <a
              href="/resume.pdf"
              download="Derrick_Jon_Diaz_Resume.pdf"
              className="button button-quiet button-sm"
              data-testid="button-hero-resume"
              aria-label="Download Resume"
            >
              Resume <FileText size={14} />
            </a>
          </div>

          <TechCarousel />

          <div className="profile-details">
            <section className="profile-intro" aria-labelledby="profile-intro-title">
              <span className="profile-section-label">A little about me</span>
              <h2 id="profile-intro-title">More than just a title.</h2>
              <p>An IT graduate who enjoys turning ideas into useful digital experiences. I’m focused on web and application development, UI/UX, cloud technologies, and thoughtful solutions to real needs.</p>
            </section>
            <div className="profile-facts" aria-label="Profile details">
              <div className="profile-fact">
                <span>Education</span>
                <strong>University of Batangas</strong>
              </div>
              <div className="profile-fact">
                <span>Degree</span>
                <strong>Bachelor of Science in Information Technology</strong>
              </div>
              <div className="profile-fact">
                <span>Focus</span>
                <strong>Web, applications, UI/UX, and cloud</strong>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section section-dark" aria-labelledby="experience-title">
      <div className="container experience-layout">
        <div className="experience-intro reveal">
          <SectionLabel>02 / In the field</SectionLabel>
          <h3 id="experience-title">Work that meets the real world.</h3>
          <p>Experience across an internship and independent client work, with a bias toward useful outcomes and dependable implementation.</p>
        </div>
        <div className="experience-list reveal">
          {experience.map((item, index) => (
            <article className="experience-item" key={item.company} data-testid={`card-experience-${index}`}>
              <div className="experience-date">{item.date}</div>
              <div>
                <h3>{item.company}</h3>
                <p className="experience-role">{item.role}</p>
                <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function ProjectVisual({ tone, number, image, title, featureCount }: { tone: string; number: string; image?: string; title: string; featureCount?: number }) {
  return (
    <div className={`project-visual ${tone}`} aria-hidden="true">
      {image ? (
        <img src={image} alt={title} className="project-thumbnail" />
      ) : (
        <>
          <span className="project-number">{number}</span>
          <div className="project-window">
            <div className="project-window-bar"><i /><i /><i /></div>
            <div className="project-window-line" />
            <div className="project-window-line short" />
            <div className="project-window-block" />
          </div>
        </>
      )}
      <span className="project-number-badge">{number}</span>
      {featureCount && featureCount > 1 && (
        <span className="project-features-badge" title={`${featureCount} feature screenshots available`}>
          <Layers size={11} /> {featureCount} Views
        </span>
      )}
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const allImages = useMemo(() => {
    if (project.featureImages && project.featureImages.length > 0) {
      return project.featureImages;
    }
    return project.image ? [project.image] : [];
  }, [project]);

  const [activeIdx, setActiveIdx] = useState(0);
  const [isLightbox, setIsLightbox] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isLightbox) {
          setIsLightbox(false);
        } else {
          onClose();
        }
      }
      if (event.key === 'ArrowRight' && allImages.length > 1) {
        setActiveIdx((prev) => (prev + 1) % allImages.length);
      }
      if (event.key === 'ArrowLeft' && allImages.length > 1) {
        setActiveIdx((prev) => (prev - 1 + allImages.length) % allImages.length);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, isLightbox, allImages.length]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % allImages.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }} role="presentation">
      <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" data-testid="modal-project-detail">
        <div className="modal-head">
          <div><SectionLabel>{project.number}</SectionLabel><h2 id="project-modal-title">{project.title}</h2></div>
          <div className="modal-head-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary button-sm"
                data-testid={`button-modal-live-link-${project.id}`}
              >
                Visit live site <ArrowUpRight size={14} />
              </a>
            )}
            <button className="modal-close" onClick={onClose} aria-label="Close project details" data-testid="button-close-project-modal"><X size={18} /></button>
          </div>
        </div>

        {allImages.length > 0 && (
          <div className="modal-feature-showcase">
            <div className="feature-main-viewport">
              <img
                src={allImages[activeIdx]}
                alt={`${project.title} Feature ${activeIdx + 1}`}
                className="feature-main-image"
                onClick={() => setIsLightbox(true)}
                title="Click for full size view"
              />

              <div className="feature-top-bar">
                <span className="feature-counter-badge">
                  <Layers size={12} />
                  {allImages.length > 1 ? `Feature ${activeIdx + 1} of ${allImages.length}` : 'Project Preview'}
                </span>
                <button
                  className="feature-zoom-btn"
                  onClick={() => setIsLightbox(true)}
                  title="Expand Fullscreen View"
                  aria-label="Expand Fullscreen View"
                >
                  <Maximize2 size={13} />
                </button>
              </div>

              {allImages.length > 1 && (
                <>
                  <button className="feature-nav-btn prev" onClick={handlePrev} aria-label="Previous Feature">
                    <ChevronLeft size={18} />
                  </button>
                  <button className="feature-nav-btn next" onClick={handleNext} aria-label="Next Feature">
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
            </div>

            {allImages.length > 1 && (
              <div className="feature-thumb-strip">
                {allImages.map((imgUrl, idx) => (
                  <button
                    key={`${imgUrl}-${idx}`}
                    className={`feature-thumb-item ${idx === activeIdx ? 'active' : ''}`}
                    onClick={() => setActiveIdx(idx)}
                    aria-label={`View Feature ${idx + 1}`}
                  >
                    <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="modal-body">
          <p className="modal-summary">{project.description}</p>
          {project.liveUrl && (
            <div className="modal-live-badge-row">
              <span className="modal-live-label">Live Website:</span>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="modal-live-link">
                {project.liveUrl} <ArrowUpRight size={13} />
              </a>
            </div>
          )}
          <div className="detail-grid">
            {Object.entries(project.details).map(([heading, detail]) => (
              <div className="detail-block" key={heading}>
                <h3>{heading}</h3>
                <p>{detail}</p>
              </div>
            ))}
          </div>
          <div className="modal-tech">
            {project.technologies.map((technology) => (
              <span className="tech-tag" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>

      {isLightbox && (
        <div className="lightbox-backdrop" onClick={() => setIsLightbox(false)}>
          <button className="lightbox-close" onClick={() => setIsLightbox(false)} aria-label="Close Lightbox">
            <X size={22} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={allImages[activeIdx]} alt={`${project.title} Fullsize View`} className="lightbox-image" />
            <div className="lightbox-caption">
              <span>{project.title} — Feature {activeIdx + 1} of {allImages.length}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  return (
    <section id="projects" className="section section-soft" aria-labelledby="projects-title">
      <div className="container">
        <div className="project-intro reveal">
          <div><SectionLabel>Selected files</SectionLabel><h2 id="projects-title">Things I’ve built.</h2></div>
          <p>Project work across education, food, hospitality, commercial platforms, and reservations — each one grounded in a real use case.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.id} data-testid={`card-project-${project.id}`}>
              <ProjectVisual tone={project.tone} number={project.number} image={project.image} title={project.title} featureCount={project.featureImages?.length} />
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">{project.technologies.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}</div>
                <div className="project-card-actions">
                  <button className="project-open" onClick={() => setActiveProject(project)} data-testid={`button-view-project-${project.id}`}>
                    Details & Gallery <span>↗</span>
                  </button>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-live-btn"
                      data-testid={`button-live-site-${project.id}`}
                      title="Open live website"
                    >
                      Visit site <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </section>
  );
}

function GithubCalendar() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Mon', 'Wed', 'Fri'];
  
  const weeks = useMemo(() => {
    const data = [];
    for (let w = 0; w < 52; w++) {
      const week = [];
      for (let d = 0; d < 7; d++) {
        const seed = (w * 7 + d * 13) % 17;
        let level = 0;
        if (seed > 13) level = 4;
        else if (seed > 9) level = 3;
        else if (seed > 5) level = 2;
        else if (seed > 2) level = 1;
        week.push(level);
      }
      data.push(week);
    }
    return data;
  }, []);

  return (
    <section id="github" className="section section-dark" aria-labelledby="github-title">
      <div className="container">
        <div className="section-heading reveal" style={{ marginBottom: '32px' }}>
          <div>
            <SectionLabel>Code Activity</SectionLabel>
            <h2 id="github-title" style={{ color: '#f5f0e8' }}>GitHub Contributions.</h2>
          </div>
          <p style={{ color: '#c9b49a' }}>
            A visual record of commits, open source practice, and development activity.
          </p>
        </div>

        <div className="github-card reveal" data-testid="github-contribution-card">
          <div className="github-header">
            <div className="github-user-info">
              <Github size={22} className="github-icon" />
              <div>
                <h3 className="github-username">Derrick Jon Diaz</h3>
                <span className="github-handle">@derrick-diaz</span>
              </div>
            </div>
            <div className="github-stats">
              <div className="github-stat">
                <span className="stat-label">Contributions</span>
                <strong className="stat-value">540+ in 2026</strong>
              </div>
              <div className="github-stat">
                <span className="stat-label">Current Streak</span>
                <strong className="stat-value">14 days</strong>
              </div>
            </div>
          </div>

          <div className="github-calendar-wrapper">
            <div className="github-months">
              {months.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>

            <div className="github-calendar-body">
              <div className="github-days">
                {days.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>

              <div className="github-grid-scroll">
                <div className="github-grid">
                  {weeks.map((week, wIdx) => (
                    <div key={wIdx} className="github-week">
                      {week.map((level, dIdx) => (
                        <div
                          key={dIdx}
                          className={`github-day level-${level}`}
                          title={`Level ${level} contribution`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="github-legend">
              <span>Less</span>
              <div className="legend-cells">
                <span className="github-day level-0" />
                <span className="github-day level-1" />
                <span className="github-day level-2" />
                <span className="github-day level-3" />
                <span className="github-day level-4" />
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="section" aria-labelledby="certifications-title">
      <div className="container">
        <div className="section-heading reveal">
          <div><SectionLabel>05 / Proof of practice</SectionLabel><h2 id="certifications-title">A shelf of learning.</h2></div>
          <p>Credentials that mark Derrick’s growing fluency in cloud, infrastructure, and technology foundations.</p>
        </div>
        <div className="shelf">
          {certifications.map(([name, provider], index) => (
            <article className="cert-card reveal" key={name} data-testid={`card-certification-${index}`}>
              <span className="cert-mark">{index + 1}</span>
              <h3>{name}</h3>
              <span className="cert-provider">{provider}</span>
              <span className="cert-year">Year not provided · Credential link not provided</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OutsideTheCode() {
  return (
    <section className="section section-soft" aria-labelledby="outside-title">
      <div className="container outside-layout reveal">
        <div><SectionLabel>A human note</SectionLabel><h2 id="outside-title">Outside the code.</h2></div>
        <div className="outside-copy">
          <p>Music, design, technology, games, and creative projects all find a place in the background. They keep the work observant, curious, and connected to how people actually experience things.</p>
          <div className="interest-list">{interests.map((interest) => <span className="interest" key={interest}>{interest}</span>)}</div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div><h2>Derrick Jon Diaz</h2><p>Bachelor of Science in Information Technology<br />Full Stack Developer / IT Professional</p></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Derrick Jon Diaz. All rights reserved.</span><span>Workspace / End of file</span></div>
      </div>
    </footer>
  );
}

function ConnectModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<'splash' | 'options' | 'email' | 'project' | 'about'>('splash');
  const [copied, setCopied] = useState(false);
  const [projectTopic, setProjectTopic] = useState('Web Application');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step === 'splash') {
      timer = setTimeout(() => {
        setStep('options');
      }, 4200);
    }
    return () => clearTimeout(timer);
  }, [step]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const copyEmail = () => {
    navigator.clipboard.writeText('diazderrick290@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="connect-modal" role="dialog" aria-modal="true" data-testid="modal-connect">
        <button className="connect-modal-close" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        {step === 'splash' && (
          <div className="connect-splash-container" onClick={() => setStep('options')}>
            <div className="splash-aura-glow" aria-hidden="true" />
            <div className="connect-splash-stage">
              <div className="connect-splash-video-wrapper">
                <video
                  src="/video/waving.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="splash-pure-video"
                />
              </div>
            </div>

            <div className="splash-greeting-pill">
              <div className="splash-greeting-content">
                <h2 className="splash-greeting-text">
                  Hi, I am <em>Derrick</em> <span className="splash-wave-mini">👋</span>
                </h2>
                <span className="splash-greeting-sub">
                  <span>Click anywhere to connect</span>
                  <span className="splash-cta-arrow">→</span>
                </span>
              </div>
              <div className="splash-timer-progress-track">
                <div className="splash-timer-progress-bar" />
              </div>
            </div>
          </div>
        )}

        {step !== 'splash' && (
          <div className="connect-content-container">
            <div className="connect-header">
              <div className="connect-header-identity">
                <div className="connect-mini-avatar">
                  <img src="/images/profile pic.jpg" alt="Derrick Jon Diaz" />
                </div>
                <div>
                  <h3>Derrick Jon Diaz</h3>
                  <p>Open for projects, roles & inquiries</p>
                </div>
              </div>
              {step !== 'options' && (
                <button className="connect-back-btn" onClick={() => setStep('options')}>
                  ← Back to options
                </button>
              )}
            </div>

            {step === 'options' && (
              <div className="connect-options-grid">
                <p className="connect-options-prompt">How can I help you today? Select an option below:</p>

                <button className="connect-option-card" onClick={() => setStep('email')} data-testid="option-email">
                  <div className="option-icon"><Mail size={18} /></div>
                  <div className="option-info">
                    <h4>Direct Email Contact</h4>
                    <p>Send an email or message directly to diazderrick290@gmail.com</p>
                  </div>
                  <ChevronRight size={16} className="option-arrow" />
                </button>

                <button className="connect-option-card" onClick={() => setStep('project')} data-testid="option-project">
                  <div className="option-icon"><Code2 size={18} /></div>
                  <div className="option-info">
                    <h4>Discuss a Project or Hire</h4>
                    <p>Web app, mobile app, UI/UX, or technical collaboration</p>
                  </div>
                  <ChevronRight size={16} className="option-arrow" />
                </button>

                <a
                  href="https://www.linkedin.com/in/derrick-diaz-257b7b439"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="connect-option-card"
                  data-testid="option-linkedin"
                >
                  <div className="option-icon"><Linkedin size={18} /></div>
                  <div className="option-info">
                    <h4>LinkedIn Profile</h4>
                    <p>Connect on LinkedIn (derrick-diaz-257b7b439)</p>
                  </div>
                  <ArrowUpRight size={16} className="option-arrow" />
                </a>

                <a
                  href="/resume.pdf"
                  download="Derrick_Jon_Diaz_Resume.pdf"
                  className="connect-option-card"
                  data-testid="option-resume"
                >
                  <div className="option-icon"><FileText size={18} /></div>
                  <div className="option-info">
                    <h4>Download Resume / CV</h4>
                    <p>View qualifications, experience & technical skills summary</p>
                  </div>
                  <ArrowUpRight size={16} className="option-arrow" />
                </a>

                <button className="connect-option-card" onClick={() => setStep('about')} data-testid="option-about">
                  <div className="option-icon"><GraduationCap size={18} /></div>
                  <div className="option-info">
                    <h4>About Derrick's Background</h4>
                    <p>BS Information Technology graduate from University of Batangas</p>
                  </div>
                  <ChevronRight size={16} className="option-arrow" />
                </button>
              </div>
            )}

            {step === 'email' && (
              <div className="connect-detail-pane">
                <span className="eyebrow">Option 01 / Direct Contact</span>
                <h4>Send a message via Email</h4>
                <p>Feel free to reach out anytime for work opportunities, inquiries, or technical discussion.</p>

                <div className="email-box">
                  <span className="email-text">diazderrick290@gmail.com</span>
                  <button className="button button-quiet button-sm" onClick={copyEmail}>
                    {copied ? <><Check size={13} /> Copied</> : <><Copy size={13} /> Copy Email</>}
                  </button>
                </div>

                <div className="connect-pane-actions">
                  <a
                    href="mailto:diazderrick290@gmail.com?subject=Inquiry%20from%20Portfolio"
                    className="button button-primary button-sm"
                  >
                    Open Mail App <Send size={14} />
                  </a>
                </div>
              </div>
            )}

            {step === 'project' && (
              <div className="connect-detail-pane">
                <span className="eyebrow">Option 02 / Project Inquiry</span>
                <h4>What kind of project do you need?</h4>
                <p>Select your primary focus area below to pre-fill your email request:</p>

                <div className="topic-selector">
                  {['Web Application', 'Mobile App', 'UI/UX Design', 'Cloud Integration', 'Full Stack Project'].map((t) => (
                    <button
                      key={t}
                      className={`topic-chip ${projectTopic === t ? 'active' : ''}`}
                      onClick={() => setProjectTopic(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <div className="connect-pane-actions" style={{ marginTop: '20px' }}>
                  <a
                    href={`mailto:diazderrick290@gmail.com?subject=Project%20Inquiry%20-%20${encodeURIComponent(projectTopic)}&body=Hi%20Derrick,%20I'd%20like%20to%20discuss%20a%20project%20regarding%20${encodeURIComponent(projectTopic)}.`}
                    className="button button-primary button-sm"
                  >
                    Send Inquiry Email for {projectTopic} <Send size={14} />
                  </a>
                </div>
              </div>
            )}

            {step === 'about' && (
              <div className="connect-detail-pane">
                <span className="eyebrow">Option 05 / Quick Bio</span>
                <h4>About Derrick Jon Diaz</h4>
                <p>An Information Technology graduate from the <strong>University of Batangas</strong> specializing in Full Stack Web Development, Cloud Services (AWS), and UI/UX design.</p>
                <div className="bio-summary-list">
                  <div className="bio-item">🎓 <strong>Degree:</strong> BS in Information Technology (University of Batangas)</div>
                  <div className="bio-item">💼 <strong>Internship:</strong> Full Stack Developer Intern at Digiscribe Transcription Corp.</div>
                  <div className="bio-item">☁️ <strong>Cloud Credentials:</strong> AWS Cloud Practitioner, AWS Architecture, Foundation & Generative AI</div>
                </div>
                <div className="connect-pane-actions" style={{ marginTop: '20px' }}>
                  <a
                    href="mailto:diazderrick290@gmail.com?subject=General%20Inquiry"
                    className="button button-primary button-sm"
                  >
                    Contact Derrick <Mail size={14} />
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }), { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="portfolio-shell">
      <main>
        <Hero onOpenConnect={() => setIsConnectOpen(true)} />
        <Experience />
        <Projects />
        <GithubCalendar />
        <Certifications />
        <OutsideTheCode />
      </main>
      <Footer />
      {isConnectOpen && <ConnectModal onClose={() => setIsConnectOpen(false)} />}
    </div>
  );
}

export default App;