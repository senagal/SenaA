import FadeInSection from "../FadeInSection";

export default function Hero() {
  return (
    <FadeInSection id="home" className="hero">
      <div className="hero-content text-center">
        <p className="subtitle fade-in">Hello, I am</p>
        <h1 className="title fade-in delay-1">Sena Abdisa Gurmessa</h1>
        <h2 className="role fade-in delay-2">
          Computer Science Graduate, currently interested in Data Science
        </h2>
        <div className="cta-container fade-in delay-3">
          <a href="#projects" className="btn primary-btn">
            View My Work
          </a>
          <a href="#contact" className="btn secondary-btn">
            Get In Touch
          </a>
        </div>
      </div>
    </FadeInSection>
  );
}
