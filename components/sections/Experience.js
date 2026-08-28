import FadeInSection from "../FadeInSection";

const EXPERIENCE = [
  {
    role: "AI Engineer",
    company: "Vivid Insights | Addis Ababa, Ethiopia",
    date: "Apr 2026 - Present",
    bullets: [
      "Designed and built a full-stack AI powered cardiovascular health chatbot web application for African non-medical users using React, TypeScript, Tailwind CSS, Python, and FastAPI",
      "Transformed a cardiovascular risk calculation model trained on approximately 70,000 patient records into a deployed, user facing chatbot platform",
      "Integrated Azure OpenAI and Google Gemini APIs to generate plain English cardiovascular risk explanations and health summaries",
    ],
  },
  {
    role: "Junior Parts Planning & Monitoring Officer",
    company: "KAKI Motors | Addis Ababa, Ethiopia",
    date: "Sep 2025 - Present",
    bullets: [
      "Analyzed sales and inventory data to support forecasting and optimize stock planning",
      "Built and monitored interactive dashboards (Excel, Power BI) that track stock levels, sales trends, and order fulfillment",
      "Developed a Parts & Service CRM system to track requests, branch performance, and service coordination",
      "Designed a summary dashboard to monitor branch performance, and contribution to overall business outcomes",
      {
        text: "Developed and automated internal tools, including:",
        subBullets: [
          "Weekly Review system for KPI tracking of all branches",
          "Parts picker & consolidator tool to streamline order preparation",
        ],
      },
      "Designed inventory checkup and tools audit systems to improve data accuracy and accountability",
      "Performed data cleaning, validation, and structuring to ensure reliable reporting, and automated reporting workflows and supported ERP system integration",
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

function Bullet({ bullet }) {
  if (typeof bullet === "string") {
    return <li>{bullet}</li>;
  }
  return (
    <li>
      {bullet.text}
      <ul>
        {bullet.subBullets.map((sub) => (
          <li key={sub}>{sub}</li>
        ))}
      </ul>
    </li>
  );
}

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
                <Bullet bullet={bullet} key={typeof bullet === "string" ? bullet : bullet.text} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </FadeInSection>
  );
}
