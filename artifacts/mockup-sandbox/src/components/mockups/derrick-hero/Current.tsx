import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import './_group.css';

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

export function Current() {
  return (
    <div className="portfolio-shell">
      <section id="home" className="hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-kicker hero-reveal">
              <span className="kicker-line" aria-hidden="true" />
              <SectionLabel>IT Graduate · Full Stack Developer</SectionLabel>
            </div>
            <h1 id="hero-title" className="hero-reveal delay-1">
              Building digital experiences <em>with purpose.</em>
            </h1>
            <p className="hero-lede hero-reveal delay-2">
              I’m an IT graduate focused on building modern websites, applications, and digital solutions that are useful, intuitive, and visually engaging.
            </p>
            <div className="hero-actions hero-reveal delay-3">
              <button className="button button-primary button-sm" onClick={() => scrollToId('projects')} data-testid="button-hero-work">
                View my work <ArrowDown size={14} />
              </button>
              <button className="button button-quiet button-sm" onClick={() => scrollToId('contact')} data-testid="button-hero-connect">
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
            <div className="status-pill hero-reveal delay-3">
              <span className="status-dot" /> Open to opportunities
            </div>
          </div>
          <WorkspaceCard />
        </div>
      </section>
    </div>
  );
}