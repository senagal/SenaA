import FadeInSection from "../FadeInSection";

const EXPERIENCE = [
  {
    role: "Junior Parts Planning & Monitoring Officer",
    company: "KAKI Motors | Addis Ababa, Ethiopia",
    date: "Sep 2025 - Present",
    bullets: [
      "Analyzing and forecasting sales and inventory data to optimize order and stocking decisions.",
      "Automating and preparing Parts and Service department business flows for ERP integration.",
    ],
  },
  {
    role: "Computer and Network Administrator",
    company: "Origin Logistics PLC | Addis Ababa, Ethiopia",
    date: "Aug 2024 - Aug 2025",
    bullets: [
      "Monitored and maintained network performance and stability.",
      "Troubleshooted hardware, software, and connectivity issues.",
      "Provided technical support to staff.",
    ],
  },
  {
    role: "Lead Web Developer & Digital Marketing Manager",
    company: "YeBen Endowment Fund | Addis Ababa, Ethiopia",
    date: "May 2024 - Oct 2024",
    bullets: [
      "Redesigned and developed the organization's website creating a clean and user-friendly layout.",
      "Planned and managed digital campaigns to promote the organization's mission and visibility.",
    ],
  },
  {
    role: "Manual Software Tester",
    company: "Adler inc | Remote (Addis Ababa)",
    date: "Sep 2024 - Oct 2024",
    bullets: ["Manually tested a 3D web tool and reported bugs/usability issues to the dev team."],
  },
  {
    role: "UI/UX Designer",
    company: "RDX | Addis Ababa, Ethiopia",
    date: "Nov 2023 - Mar 2024",
    bullets: [
      "Designed locally relevant UI/UX products and improved real-world customer interaction using Figma.",
    ],
  },
];

export default function Experience() {
  return (
    <FadeInSection id="experience" className="experience section">
      <h2 className="section-title">
        Experience <span className="accent-dot">.</span>
      </h2>
      <div className="timeline-container">
        {EXPERIENCE.map((job) => (
          <div className="experience-card glass-card" key={job.role + job.date}>
            <div className="exp-header">
              <h3>{job.role}</h3>
              <p className="company">{job.company}</p>
            </div>
            <p className="date">{job.date}</p>
            <ul>
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </FadeInSection>
  );
}
