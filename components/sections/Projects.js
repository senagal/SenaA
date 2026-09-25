import FadeInSection from "../FadeInSection";

const DATA_PROJECTS = [
  {
    title: "Media Sentiment and Tourist Arrivals in Ethiopia: A Data-Driven Analysis",
    description:
      "Built an end to end data pipeline integrating The Guardian API and tourism datasets (1996–2021), using GPT-4o-mini for automated sentiment and topic classification. Analyzed the relationship between media coverage and sentiment with tourist arrivals using linear regression and developed an interactive Streamlit dashboard to visualize results.",
    tech: ["Python", "Streamlit", "GPT-4o-mini"],
    links: [
      { label: "GitHub", href: "https://github.com/senagal/SenaAbdisa_Ethiopia_FinalProject", primary: false },
      {
        label: "Live App",
        href: "https://senaaethiopiafinalproject-b3dbvtphkarquw8dxhtw7c.streamlit.app/?authuser=0",
        primary: true,
      },
    ],
  },
  {
    title: "Pass xG Analysis (Premier League 2024/25)",
    description:
      "Cleaned and analyzed event-level Wyscout match data using Python and Pandas to estimate expected goals (xG) contribution from passes across different player positions. Built statistical analyses and visualizations to identify passing patterns associated with shot creation and goal-scoring opportunities.",
    tech: ["Python", "Pandas", "Wyscout"],
    links: [
      { label: "GitHub", href: "https://github.com/senagal/Soccermatics-Project2", primary: false },
    ],
  },
  {
    title: "Real Madrid Defensive Transition Analysis",
    description:
      "Developed a Streamlit application using event and SkillCorner tracking data to analyze Real Madrid's defensive structure during transitions after possession loss, to evaluate defensive organization, player positioning, and opponent threat.",
    tech: ["Python", "Streamlit", "SkillCorner"],
    links: [
      { label: "GitHub", href: "https://github.com/senagal/Soccermatics-Project3.git", primary: false },
    ],
  },
  {
    title: "Defensive Transition Analysis Bot (Premier League)",
    description:
      "Developed an AI-powered football analytics chatbot using tracking and event data to analyze defensive transitions after possession loss through compactness, defensive area, defenders behind the ball, and opponent threat metrics. Converted z-score-based tactical data into natural-language summaries and conversational analysis using LLMs.",
    tech: ["Python", "AI", "LLM"],
    links: [
      { label: "GitHub", href: "https://github.com/mahisewinet/Defensive-Transition", primary: false },
    ],
  },
  {
    title: "Bruno Fernandez's Pass and Assist Analyser",
    description:
      "A Streamlit platform designed to analyse and compare Bruno Fernandez's pass and assists stats with other players, specifically Kevin De Bruyne, in the EURO 2024 league.",
    tech: ["Python", "Streamlit"],
    links: [
      { label: "GitHub", href: "https://github.com/senagal/Soccermatics-Project1.git", primary: false },
      {
        label: "Live App",
        href: "https://soccermatics-project1git-mxetasuzlphiappmcaf5rbz.streamlit.app/",
        primary: true,
      },
    ],
  },
];

const WEB_PROJECTS = [
  {
    title: "Kuncho",
    description: "Kids' entertainment platform built with React, Node.js and PostgreSQL.",
    tech: ["React", "Node.js", "PostgreSQL"],
    links: [{ label: "GitHub", href: "https://github.com/senagal/Kuncho.git", primary: false }],
  },
  {
    title: "PAS",
    description: "Dormitory management system for AAU built using React, Node.js & PostgreSQL.",
    tech: ["React", "Node.js", "PostgreSQL"],
    links: [],
  },
  {
    title: "SMOOL",
    description: "School management system built with Laravel.",
    tech: ["Laravel"],
    links: [{ label: "GitHub", href: "https://github.com/oddegen/SMOOL.git", primary: false }],
  },
  {
    title: "YeBen Endowment Fund Website",
    description: "WordPress website built for the YeBen Endowment Fund.",
    tech: ["WordPress"],
    links: [],
  },
];

function ProjectCard({ project }) {
  return (
    <div className="project-card glass-card glow-on-hover">
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-stack">
          {project.tech.map((t) => (
            <span className="tech" key={t}>
              {t}
            </span>
          ))}
        </div>
        <div className="project-links">
          {project.links.map((link) => (
            <a
              key={link.label + link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`btn ${link.primary ? "primary-btn" : "secondary-btn"}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <FadeInSection id="projects" className="projects section">
      <h2 className="section-title">
        Projects <span className="accent-dot">.</span>
      </h2>

      <h2 className="section-title mt-4">
        Data Analysis & Visualization Projects <span className="accent-dot">.</span>
      </h2>
      <div className="projects-grid">
        {DATA_PROJECTS.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>

      <h2 className="section-title mt-4">
        Web & System Development <span className="accent-dot">.</span>
      </h2>
      <div className="projects-grid">
        {WEB_PROJECTS.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </FadeInSection>
  );
}
