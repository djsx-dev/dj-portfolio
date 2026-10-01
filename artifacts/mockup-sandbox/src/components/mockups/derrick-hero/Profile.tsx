import { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Check, ChevronRight, Code2, Copy, Facebook, FileText, GraduationCap, Linkedin, Mail, Send, X } from 'lucide-react';
import './_group.css';

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

export function Profile() {
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  return (
    <div className="portfolio-shell">
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
              <button className="button button-quiet button-sm" onClick={() => setIsConnectOpen(true)} data-testid="button-hero-connect">
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
      {isConnectOpen && <ConnectModal onClose={() => setIsConnectOpen(false)} />}
    </div>
  );
}