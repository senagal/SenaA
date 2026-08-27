import FadeInSection from "../FadeInSection";

const CERTIFICATES = [
  {
    title: "Soccermatics Pro 25/26 Certificate of Achievement",
    image: "/assets/Soccermatics.png",
    alt: "Soccermatics Certificate",
    description:
      "A certificate provided by Twelve Football for taking and successfully completing their Soccermatics Pro 25/26 course through a scholarship provided by CoreAI and Twelve.",
    file: "/assets/Soccermatics.pdf",
  },
  {
    title: "GreSFET",
    image: "/assets/GresFET.png",
    alt: "GreSFET Certificate",
    description:
      "Participated in the inaugural Greater South Fair for Endogenous Technologies (GreSFET) hackathon, collaborating on the development of Smart Management for Optimized Organization and Learning (SMOOL).",
    file: "/assets/GresFET.pdf",
  },
  {
    title: "AAU Certificate of Recognition for Outstanding Student",
    image: "/assets/AAU.png",
    alt: "AAU Certificate",
    description:
      "Received a Certificate of Recognition from the College of Natural and Computational Sciences, Addis Ababa University, for ranking first among female students in the campus.",
    file: "/assets/AAU_Certificate.pdf",
  },
  {
    title: "YeBen Life Skills and Leadership Training",
    image: "/assets/YeBen.png",
    alt: "YeBen Certificate",
    description:
      "Completed a month-long training program focused on leadership, financial literacy, effective communication, and other core life skills, aimed at fostering personal and professional growth.",
    file: "/assets/YeBen.pdf",
  },
];

function DocIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

export default function Certificates() {
  return (
    <FadeInSection id="certificates" className="projects section">
      <h2 className="section-title">
        Awards & Certificates <span className="accent-dot">.</span>
      </h2>
      <div className="projects-grid">
        {CERTIFICATES.map((cert) => (
          <div className="project-card glass-card glow-on-hover" key={cert.title}>
            <div className="project-content">
              <h3>{cert.title}</h3>
              <div className="cert-viewer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cert.image} alt={cert.alt} className="cert-img" />
              </div>
              <p>{cert.description}</p>
              <div className="project-links mt-4">
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary-btn"
                  style={{ width: "100%", textAlign: "center" }}
                >
                  View / Download
                </a>
              </div>
            </div>
          </div>
        ))}

        <div className="project-card glass-card glow-on-hover">
          <div className="project-content">
            <h3>KMUSSC Scholarship Recipient</h3>
            <div className="cert-viewer">
              <DocIcon />
              KMUSSC Certificate
            </div>
            <p>
              Awarded a high school scholarship at Kotebe Metropolitan University Science Shared
              Campus for scoring in the top 1% on Ethiopia’s Primary School Leaving Certificate
              Examination (PSLCE).
            </p>
            <div className="project-links mt-4">
              <a
                href="/assets/KMUSSC.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn primary-btn"
                style={{ width: "100%", textAlign: "center" }}
              >
                View / Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
