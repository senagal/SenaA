import FadeInSection from "../FadeInSection";

const PROJECTS = [
  {
    title: "Media Sentiment and Tourist Arrivals in Ethiopia: A Data-Driven Analysis",
    context: "Applied NLP · Tourism analytics",
    description:
      "Built an end to end data pipeline integrating The Guardian API and tourism datasets (1996–2021), using GPT-4o-mini for automated sentiment and topic classification. Analyzed the relationship between media coverage and sentiment with tourist arrivals using linear regression and developed an interactive Streamlit dashboard to visualize results.",
    tech: ["Python", "Streamlit", "GPT-4o-mini"],
    links: [
      { label: "GitHub", href: "https://github.com/senagal/SenaAbdisa_Ethiopia_FinalProject" },
      {
        label: "Live App",
        href: "https://senaaethiopiafinalproject-b3dbvtphkarquw8dxhtw7c.streamlit.app/?authuser=0",
      },
    ],
  },
  {
    title: "Pass xG Analysis (Premier League 2024/25)",
    context: "Football analytics · Expected goals",
    description:
      "Cleaned and analyzed event-level Wyscout match data using Python and Pandas to estimate expected goals (xG) contribution from passes across different player positions. Built statistical analyses and visualizations to identify passing patterns associated with shot creation and goal-scoring opportunities.",
    tech: ["Python", "Pandas", "Wyscout"],
    links: [{ label: "GitHub", href: "https://github.com/senagal/Soccermatics-Project2" }],
  },
  {
    title: "Real Madrid Defensive Transition Analysis",
    context: "Football analytics · Defensive transitions",
    description:
      "Developed a Streamlit application using event and SkillCorner tracking data to analyze Real Madrid's defensive structure during transitions after possession loss, to evaluate defensive organization, player positioning, and opponent threat.",
    tech: ["Python", "Streamlit", "SkillCorner"],
    links: [
      { label: "GitHub", href: "https://github.com/senagal/Soccermatics-Project3.git" },
    ],
  },
  {
    title: "Defensive Transition Analysis Bot (Premier League)",
    context: "Football analytics · Conversational AI",
    description:
      "Developed an AI-powered football analytics chatbot using tracking and event data to analyze defensive transitions after possession loss through compactness, defensive area, defenders behind the ball, and opponent threat metrics. Converted z-score-based tactical data into natural-language summaries and conversational analysis using LLMs.",
    tech: ["Python", "AI", "LLM"],
    links: [{ label: "GitHub", href: "https://github.com/mahisewinet/Defensive-Transition" }],
  },
  {
    title: "Bruno Fernandez's Pass and Assist Analyser",
    context: "Football analytics · UEFA Euro 2024",
    description:
      "A Streamlit platform designed to analyse and compare Bruno Fernandez's pass and assists stats with other players, specifically Kevin De Bruyne, in the EURO 2024 league.",
    tech: ["Python", "Streamlit"],
    links: [
      { label: "GitHub", href: "https://github.com/senagal/Soccermatics-Project1.git" },
      {
        label: "Live App",
        href: "https://soccermatics-project1git-mxetasuzlphiappmcaf5rbz.streamlit.app/",
      },
    ],
  },
  {
    title: "Kuncho",
    context: "Culturally relevant children's media",
    description: "Kids' entertainment platform built with React, Node.js and PostgreSQL.",
    tech: ["React", "Node.js", "PostgreSQL"],
    links: [{ label: "GitHub", href: "https://github.com/senagal/Kuncho.git" }],
  },
  {
    title: "PAS",
    context: "University administration",
    description: "Dormitory management system for AAU built using React, Node.js & PostgreSQL.",
    tech: ["React", "Node.js", "PostgreSQL"],
    links: [],
  },
  {
    title: "SMOOL",
    context: "Education technology · Ethiopian curriculum",
    description: "School management system built with Laravel.",
    tech: ["Laravel"],
    links: [{ label: "GitHub", href: "https://github.com/oddegen/SMOOL.git" }],
  },
  {
    title: "YeBen Endowment Fund Website",
    context: "Nonprofit web presence",
    description: "WordPress website built for the YeBen Endowment Fund.",
    tech: ["WordPress"],
    links: [],
  },
];

function ProjectLinks({ links }) {
  if (!links.length) {
    return null;
  }

  return (
    <div className="project-links">
      {links.map((link) => (
        <a
          key={link.label + link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          {link.label} <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}

function Project({ project, featured = false }) {
  return (
    <article className={`project-row${featured ? " project-featured" : ""}`}>
      <div className="project-name">
        <p className="project-context">{project.context}</p>
        <h3>{project.title}</h3>
      </div>
      <p>{project.description}</p>
      <div className="project-meta">
        <div className="tech-stack">
          {project.tech.map((t) => (
            <span className="tech" key={t}>
              {t}
            </span>
          ))}
        </div>
        <ProjectLinks links={project.links} />
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <FadeInSection id="projects" className="projects section">
      <div className="section-heading">
        <h2 className="section-title">Selected work</h2>
        <p>
          Practical systems built around analysis, local context, and decisions people need to
          make.
        </p>
      </div>

      <div className="project-list">
        {PROJECTS.map((project, index) => (
          <Project project={project} featured={index < 2} key={project.title} />
        ))}
      </div>
    </FadeInSection>
  );
}
