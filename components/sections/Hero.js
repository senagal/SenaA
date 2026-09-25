import FadeInSection from "../FadeInSection";

export default function Hero() {
  return (
    <FadeInSection id="home" className="hero">
      <div className="hero-content">
        <h1 className="title hero-reveal">Sena Abdisa Gurmessa</h1>
        <p className="role hero-reveal delay-1">
          AI engineer and computer science graduate building practical, data-informed tools.
        </p>
        <p className="hero-summary hero-reveal delay-2">
          My work moves between applied AI, analytics, and software—from cardiovascular risk
          communication to football analysis and operational dashboards.
        </p>
        <div className="cta-container hero-reveal delay-3">
          <a href="#projects" className="btn primary-btn">
            Explore selected work
          </a>
          <a href="mailto:Senawork22@gmail.com" className="text-link">
            Email Sena <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </FadeInSection>
  );
}
