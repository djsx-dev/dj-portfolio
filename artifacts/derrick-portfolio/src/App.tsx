import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Cloud,
  Code2,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Send,
  X,
} from 'lucide-react';

// Configuration point for contact delivery. Keep empty until a real destination is provided.
const CONTACT_DESTINATION = '';

type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  details: Record<string, string>;
  tone: string;
};

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
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
    details: {
      'Project overview': 'A peer-to-peer academic platform connecting students with suitable tutors within the University of Batangas.',
      'The problem': 'Students need a clearer way to discover academic support that fits their needs.',
      'The solution': 'A focused web experience for exploring tutor options and bringing the matching process into one place.',
      'Key features': 'Tutor discovery, student-facing flows, and a structured experience for academic support.',
      'My contribution': 'Built as a full-stack project using React, TypeScript, Firebase, and Tailwind CSS.',
      Result: 'A practical platform concept centered on making peer learning easier to find. Public metrics or deployment details were not provided.',
    },
  },
  {
    id: 'nomi-cafe',
    number: 'PROJECT 02',
    title: 'Nomi Cafe',
    description: 'A modern cafe pre-order and management system designed to streamline customer ordering and administrative operations.',
    technologies: ['Next.js', 'Tailwind CSS', 'Firebase'],
    tone: 'sage',
    details: {
      'Project overview': 'A cafe platform that brings pre-ordering and administrative operations into a modern digital workflow.',
      'The problem': 'Cafe ordering and day-to-day administration can become fragmented without a shared system.',
      'The solution': 'A connected customer ordering and management experience designed around practical operations.',
      'Key features': 'Pre-order flows, clear product presentation, and administrative order management.',
      'My contribution': 'Developed the experience with Next.js, Tailwind CSS, and Firebase.',
      Result: 'A streamlined system concept for customer orders and cafe operations. Public metrics or deployment details were not provided.',
    },
  },
  {
    id: 'shred-wrap',
    number: 'PROJECT 03',
    title: 'Shred & Wrap',
    description: 'A modern food pre-ordering platform featuring customer ordering and administrative order management.',
    technologies: ['Next.js', 'Tailwind CSS'],
    tone: 'clay',
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
    technologies: ['Web development'],
    tone: 'mist',
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
    technologies: ['Web development'],
    tone: 'ochre',
    details: {
      'Project overview': 'A booking platform built around simpler reservations and clearer customer interactions.',
      'The problem': 'Reservation experiences can feel complicated when information and next steps are not well organized.',
      'The solution': 'A more direct booking flow that helps customers understand the offer and take action.',
      'Key features': 'Booking-oriented presentation, customer interaction flows, and responsive layouts.',
      'My contribution': 'Developed the booking platform as a practical client-facing digital solution.',
      Result: 'A focused reservation concept intended to make customer interactions more straightforward.',
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

function WorkspaceCard() {
  return (
    <div className="workspace-card workspace-enter" data-testid="card-workspace-profile">
      <div className="workspace-grid" aria-hidden="true" />
      <div className="workspace-top">
        <span className="workspace-label">Personal workspace / 01</span>
        <span className="workspace-corner">D.J.D</span>
      </div>
      <div className="profile-initials" aria-label="Derrick Jon Diaz initials">DJD</div>
      <h2>Derrick Jon Diaz</h2>
      <p className="workspace-role">Full Stack Developer / IT Professional</p>
      <div className="workspace-meta">
        <span className="workspace-tag">Developer</span>
        <span className="workspace-tag">IT Graduate</span>
        <span className="workspace-tag">Open to work</span>
      </div>
      <div className="workspace-foot">
        <span>BS Information Technology</span>
        <span>01 / 05</span>
      </div>
    </div>
  );
}

function Nav({ activeSection }: { activeSection: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const goTo = (id: string) => {
    setIsOpen(false);
    scrollToId(id);
  };
  return (
    <header className="site-nav" data-testid="navigation-header">
      <div className="nav-inner">
        <button className="brand" onClick={() => goTo('home')} data-testid="button-nav-home" aria-label="Return to home">
          <span className="brand-mark">D</span>
          <span className="brand-name">Derrick Jon Diaz</span>
        </button>
        <nav className={`nav-links ${isOpen ? 'open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => goTo(item.id)}
              data-testid={`button-nav-${item.id}`}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button className="menu-button" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} data-testid="button-mobile-menu">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-kicker hero-reveal">
            <span className="kicker-line" aria-hidden="true" />
            <SectionLabel>IT Graduate · Full Stack Developer</SectionLabel>
          </div>
          <h1 id="hero-title" className="hero-reveal delay-1">Building digital experiences <em>with purpose.</em></h1>
          <p className="hero-lede hero-reveal delay-2">I’m an IT graduate focused on building modern websites, applications, and digital solutions that are useful, intuitive, and visually engaging.</p>
          <div className="hero-actions hero-reveal delay-3">
            <button className="button button-primary" onClick={() => scrollToId('projects')} data-testid="button-hero-work">View my work <ArrowDown size={15} /></button>
            <button className="button button-quiet" onClick={() => scrollToId('contact')} data-testid="button-hero-connect">Let’s connect <ArrowUpRight size={15} /></button>
          </div>
          <div className="status-pill hero-reveal delay-3"><span className="status-dot" /> Open to opportunities</div>
        </div>
        <WorkspaceCard />
      </div>
    </section>
  );
}

function About() {
  const [selected, setSelected] = useState(0);
  return (
    <section id="about" className="section section-soft" aria-labelledby="about-title">
      <div className="container">
        <div className="section-heading reveal">
          <div><SectionLabel>01 / A little context</SectionLabel><h2 id="about-title">More than just code.</h2></div>
          <p>A broad IT foundation, shaped by the habit of looking at both the system and the person using it.</p>
        </div>
        <div className="about-grid">
          <div className="about-copy reveal">
            <p>Derrick is an IT graduate interested in the space where web development, application development, UI/UX, cloud technologies, and creative digital solutions meet.</p>
            <p>He enjoys taking an idea from a loose requirement to something people can actually use — with enough technical care under the surface and enough clarity on top.</p>
            <p className="about-note">This workspace is a concise view of the work, tools, and direction behind the name.</p>
          </div>
          <div className="timeline reveal" aria-label="Derrick's development journey">
            {journey.map((item, index) => (
              <div className={`timeline-item ${selected === index ? 'open' : ''}`} key={item.title}>
                <span className="timeline-dot" aria-hidden="true" />
                <button className="timeline-button" onClick={() => setSelected(index)} aria-expanded={selected === index} data-testid={`button-journey-${index}`}>
                  <span className="timeline-title">{item.title}</span>
                  <span className="timeline-caption">{item.caption}</span>
                  <span className="timeline-detail">{item.detail}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
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

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState('React.js');
  const selectedDescription = useMemo(() => skillGroups.flatMap((group) => group.skills).find(([name]) => name === selectedSkill)?.[1], [selectedSkill]);
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <div className="toolkit-header reveal">
          <div><SectionLabel>03 / The toolkit</SectionLabel><h2 id="skills-title">Developer toolkit.</h2></div>
          <p>Technologies are most useful when they serve the problem. Explore the tools Derrick brings into project work.</p>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div className="skill-group reveal" key={group.name}>
                <div className="skill-group-head"><h3>{group.name}</h3><Icon className="skill-group-icon" size={20} strokeWidth={1.5} /></div>
                <div className="skill-list">
                  {group.skills.map(([name]) => (
                    <button
                      key={name}
                      className={`skill-chip ${selectedSkill === name ? 'selected' : ''}`}
                      onClick={() => setSelectedSkill(name)}
                      onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') setSelectedSkill(name); }}
                      aria-pressed={selectedSkill === name}
                      data-testid={`button-skill-${name.toLowerCase().replaceAll(' ', '-')}`}
                    >
                      {selectedSkill === name && <Check size={13} />}
                      {name}
                    </button>
                  ))}
                </div>
                <p className="skill-description" data-testid={`text-skill-description-${group.name.toLowerCase().replaceAll(' ', '-')}`}>{selectedDescription}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ tone, number }: { tone: string; number: string }) {
  return (
    <div className={`project-visual ${tone}`} aria-hidden="true">
      <span className="project-number">{number}</span>
      <div className="project-window">
        <div className="project-window-bar"><i /><i /><i /></div>
        <div className="project-window-line" />
        <div className="project-window-line short" />
        <div className="project-window-block" />
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.style.overflow = ''; };
  }, [onClose]);
  return (
    <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }} role="presentation">
      <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" data-testid="modal-project-detail">
        <div className="modal-head">
          <div><SectionLabel>{project.number}</SectionLabel><h2 id="project-modal-title">{project.title}</h2></div>
          <button className="modal-close" onClick={onClose} aria-label="Close project details" data-testid="button-close-project-modal"><X size={18} /></button>
        </div>
        <div className="modal-body">
          <p className="modal-summary">{project.description}</p>
          <div className="detail-grid">
            {Object.entries(project.details).map(([heading, detail]) => <div className="detail-block" key={heading}><h3>{heading}</h3><p>{detail}</p></div>)}
          </div>
          <div className="modal-tech">{project.technologies.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}</div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  return (
    <section id="projects" className="section section-soft" aria-labelledby="projects-title">
      <div className="container">
        <div className="project-intro reveal">
          <div><SectionLabel>04 / Selected files</SectionLabel><h2 id="projects-title">Things I’ve built.</h2></div>
          <p>Project work across education, food, hospitality, and reservations — each one grounded in a real use case.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.id} data-testid={`card-project-${project.id}`}>
              <ProjectVisual tone={project.tone} number={project.number} />
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">{project.technologies.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}</div>
                <button className="project-open" onClick={() => setActiveProject(project)} data-testid={`button-view-project-${project.id}`}>View project <span>↗</span></button>
              </div>
            </article>
          ))}
        </div>
      </div>
      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
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

function Education() {
  return (
    <section className="section section-soft" aria-labelledby="education-title">
      <div className="container education-grid">
        <article className="education-card reveal">
          <SectionLabel>06 / Education</SectionLabel>
          <h2 id="education-title">University of Batangas.</h2>
          <p>Bachelor of Science in Information Technology</p>
          <p>Technology, creativity, and problem-solving have been central to Derrick’s IT journey — not separate tracks, but parts of the same practice.</p>
        </article>
        <aside className="education-aside reveal">
          <GraduationCap size={27} strokeWidth={1.4} />
          <span className="year">2026</span>
          <p>Graduated with a foundation built for the next chapter of practical, thoughtful technology work.</p>
        </aside>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ['01', 'Understand', 'Understand the problem and requirements.'],
    ['02', 'Design', 'Plan the experience and interface.'],
    ['03', 'Build', 'Develop the solution using appropriate technologies.'],
    ['04', 'Improve', 'Test, refine, and improve the final product.'],
  ];
  return (
    <section className="section process-section" aria-labelledby="process-title">
      <div className="container">
        <div className="process-heading reveal">
          <div><SectionLabel>07 / The approach</SectionLabel><h2 id="process-title">How I build.</h2></div>
          <p>A simple loop for moving from ambiguity to a useful, considered digital experience.</p>
        </div>
        <div className="process-grid">
          {steps.map(([number, title, description]) => (
            <article className="process-step reveal" key={number}><span className="process-index">{number}</span><h3>{title}</h3><p>{description}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExploringAndOutside() {
  return (
    <>
      <section className="section" aria-labelledby="exploring-title">
        <div className="container reveal">
          <SectionLabel>08 / On the desk now</SectionLabel>
          <div className="section-heading" style={{ marginBottom: 0 }}><h2 id="exploring-title">Currently exploring.</h2><p>Curiosity keeps the toolkit moving. These are the topics currently inviting deeper attention.</p></div>
          <div className="explore-row">{exploring.map((item) => <span className="explore-chip" key={item}>{item}</span>)}</div>
        </div>
      </section>
      <section className="section section-soft" aria-labelledby="outside-title">
        <div className="container outside-layout reveal">
          <div><SectionLabel>09 / A human note</SectionLabel><h2 id="outside-title">Outside the code.</h2></div>
          <div className="outside-copy">
            <p>Music, design, technology, games, and creative projects all find a place in the background. They keep the work observant, curious, and connected to how people actually experience things.</p>
            <div className="interest-list">{interests.map((interest) => <span className="interest" key={interest}>{interest}</span>)}</div>
          </div>
        </div>
      </section>
    </>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState('');
  const update = (field: keyof typeof form, value: string) => setForm((current) => ({ ...current, [field]: value }));
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = 'Please add your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Please enter a valid email.';
    if (form.message.trim().length < 10) nextErrors.message = 'Please share at least a few words.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      if (CONTACT_DESTINATION) {
        window.location.href = CONTACT_DESTINATION;
        return;
      }
      setStatus('Your message is ready, but no receiving address or mail endpoint has been configured yet. Add a real destination to CONTACT_DESTINATION near the top of App.tsx to enable delivery.');
    } else {
      setStatus('');
    }
  };
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="container contact-layout">
        <div className="contact-copy reveal">
          <SectionLabel>10 / Start a conversation</SectionLabel>
          <h2 id="contact-title">Have an idea worth building?</h2>
          <p>Let’s turn it into something useful. Whether the next step is a website, an application, or a better way through a digital problem, Derrick is open to the conversation.</p>
          <div className="contact-actions">
            <button className="button button-light" onClick={() => document.getElementById('contact-name')?.focus()} data-testid="button-email-me">Email me <Mail size={15} /></button>
            <button className="button button-quiet" onClick={() => setStatus('LinkedIn link not provided. Configure the destination when it is available.')} data-testid="button-linkedin">View my LinkedIn <Linkedin size={15} /></button>
            <button className="button button-quiet" onClick={() => setStatus('GitHub link not provided. Configure the destination when it is available.')} data-testid="button-github">View my GitHub <Github size={15} /></button>
          </div>
        </div>
        <form id="contact-form" className="contact-form reveal" onSubmit={submit} noValidate>
          <div className="form-field"><label htmlFor="contact-name">Name</label><input id="contact-name" value={form.name} onChange={(event) => update('name', event.target.value)} data-testid="input-contact-name" aria-invalid={Boolean(errors.name)} />{errors.name && <span className="form-error">{errors.name}</span>}</div>
          <div className="form-field"><label htmlFor="contact-email">Email</label><input id="contact-email" type="email" value={form.email} onChange={(event) => update('email', event.target.value)} data-testid="input-contact-email" aria-invalid={Boolean(errors.email)} />{errors.email && <span className="form-error">{errors.email}</span>}</div>
          <div className="form-field"><label htmlFor="contact-message">Message</label><textarea id="contact-message" value={form.message} onChange={(event) => update('message', event.target.value)} data-testid="input-contact-message" aria-invalid={Boolean(errors.message)} />{errors.message && <span className="form-error">{errors.message}</span>}</div>
          <button className="button button-light" type="submit" data-testid="button-submit-contact">Send message <Send size={15} /></button>
          {status && <p className="form-status" role="status" data-testid="status-contact-form">{status}</p>}
        </form>
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
          <nav className="footer-nav" aria-label="Footer navigation">
            {navItems.map((item) => <button className="footer-link" key={item.id} onClick={() => scrollToId(item.id)} data-testid={`button-footer-${item.id}`}>{item.label}</button>)}
          </nav>
        </div>
        <div className="footer-bottom"><span>© 2026 Derrick Jon Diaz. All rights reserved.</span><span>Workspace / End of file</span></div>
      </div>
    </footer>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const progressRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const sections = navItems.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-18% 0px -65% 0px', threshold: [0.05, 0.25, 0.5] });
    sections.forEach((section) => observer.observe(section));
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) progressRef.current.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);
  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }), { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
    return () => revealObserver.disconnect();
  }, []);
  return (
    <div className="portfolio-shell">
      <div className="progress-track" aria-hidden="true"><div className="progress-bar" ref={progressRef} /></div>
      <Nav activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Process />
        <ExploringAndOutside />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;