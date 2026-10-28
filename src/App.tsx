export default function App() {
  return (
    <div className="page-shell">
      <a className="skip-link" href="#introduction">Skip to introduction</a>

      <header className="site-header">
        <p className="wordmark">Applied AI <span aria-hidden="true">/</span> Portfolio</p>
        <nav aria-label="Main navigation">
          <a className="nav-link" href="#project">Project</a>
          <a className="nav-link" href="#contact">Contact</a>
        </nav>
      </header>

      <aside className="preview-notice" aria-label="UI test preview notice">
        <strong>QA concept</strong>
        <p>Sample persona and placeholder links. This is a QA concept, not a verified candidate profile.</p>
      </aside>

      <main id="introduction" className="main-content" tabIndex={-1}>
      <section className="introduction" aria-labelledby="intro-title">
        <p className="identity-line">Alex Nguyen <span className="placeholder-label">Sample persona</span></p>
        <p className="eyebrow"><span className="accent-rule" aria-hidden="true" /> Sample role · Junior applied AI</p>
        <h1 id="intro-title">Building <span className="accent-text">practical</span><br />AI experiences.</h1>
        <div className="intro-copy">
          <p className="lead">A responsive portfolio concept built with React, TypeScript, and Vite.</p>
          <p className="supporting-copy">Built and tested with Codex during an authorized QA walkthrough—not a real candidate profile.</p>
          <p className="placeholder-bio"><span className="placeholder-label">Sample bio</span> Sample bio — exploring applied AI through a frontend portfolio concept.</p>
        </div>
        <a className="project-link" href="#project">View the project <span aria-hidden="true">↘</span></a>
      </section>

      <section id="project" className="project-section content-section" tabIndex={-1} aria-labelledby="project-title">
        <div className="section-heading">
          <p className="eyebrow">01 / Real frontend demo</p>
          <h2 id="project-title">Portfolio<br />UI concept.</h2>
          <p className="project-status"><span className="status-mark" aria-hidden="true" /> Local frontend · QA demo</p>
          <p className="section-summary">This running React/TypeScript/Vite website demonstrates a clearly labeled sample portfolio—not an AI-integrated service.</p>
          <div className="placeholder-link-group">
            <a href="https://example.com/">Repository — placeholder link <span aria-hidden="true">↗</span></a>
            <p>example.com · Not the project repository</p>
          </div>
        </div>
        <div className="project-details">
          <div className="project-detail">
            <h3>What runs</h3>
            <p>One English page with an introduction, project overview, and sample contact links. No backend or AI service.</p>
          </div>
          <div className="project-detail">
            <h3>Implementation context</h3>
            <p>Codex built and tested this frontend during an authorized QA walkthrough. Alex Nguyen is a sample persona, not its verified author or an independently assessed learner.</p>
          </div>
          <div className="project-detail">
            <h3>A tested design decision</h3>
            <p>Desktop-only spacing and heading sizes keep “View the project” in the first viewport at 1440 × 900. Native anchors move keyboard focus to the project and contact sections.</p>
          </div>
          <figure className="project-media">
            <img
              src="/portfolio-concept-desktop.jpg"
              alt="Actual desktop screenshot of Alex Nguyen’s sample portfolio, showing the QA notice and View the project link."
              width={1425}
              height={891}
              loading="lazy"
            />
            <figcaption>Actual local capture at a 1440 × 900 viewport (1425 × 891 image), before adding this image. Not a Codex course-app screenshot.</figcaption>
          </figure>
          <div className="evidence-note">
            <h3>Real demo, sample profile</h3>
            <p>The implementation and local UI are real. Identity, bio, email, and external profile links are sample content for QA, not verified personal information.</p>
            <p>The repository link is a placeholder, not a public source repository. This concept is not a Codex course-app demo or a hiring-ready personal portfolio.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section content-section" tabIndex={-1} aria-labelledby="contact-title">
        <div className="section-heading">
          <p className="eyebrow">02 / Contact</p>
          <h2 id="contact-title">Let’s connect.</h2>
          <p className="section-summary">Placeholder contact details for testing this layout. These are not verified ways to contact the portfolio owner.</p>
        </div>
        <div className="contact-links">
          <div className="contact-item">
            <p className="placeholder-label">Email — placeholder</p>
            <a href="mailto:hello@example.com">hello@example.com</a>
            <p className="link-note">Test address, not a verified contact.</p>
          </div>
          <div className="contact-item">
            <p className="placeholder-label">LinkedIn — placeholder link</p>
            <a href="https://example.com/">example.com <span aria-hidden="true">↗</span></a>
            <p className="link-note">Not a real LinkedIn profile.</p>
          </div>
        </div>
      </section>
      </main>

      <footer className="site-footer">
        <p>Applied AI portfolio · QA concept</p>
        <a href="#introduction">Back to introduction <span aria-hidden="true">↑</span></a>
      </footer>
    </div>
  )
}
