import FadeInSection from "../FadeInSection";

const PROJECTS = [
  {
    title: "Real Madrid Defensive Transition Analyser",
    description:
      "Streamlit platform analyzing susceptibility to counter-attacks and defensive structure during transitions.",
    tech: ["Python", "Streamlit"],
    links: [
      { label: "GitHub", href: "https://github.com/senagal/Soccermatics-Project3.git", primary: false },
    ],
  },
  {
    title: "Bruno Fernandez's Pass Analyser",
    description:
      "Platform comparing pass and assist metrics of Fernandes vs De Bruyne during UEFA Euro 2024.",
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
  {
    title: "Kuncho",
    description:
      "Web kids' entertainment platform providing culturally relevant content for Ethiopian children.",
    tech: ["React", "Node.js", "PostgreSQL"],
    links: [{ label: "GitHub", href: "https://github.com/senagal/Kuncho.git", primary: false }],
  },
  {
    title: "SMOOL",
    description: "School management system tailored for the Ethiopian curriculum.",
    tech: ["Laravel", "PHP"],
    links: [{ label: "GitHub", href: "https://github.com/oddegen/SMOOL.git", primary: false }],
  },
  {
    title: "PAS",
    description:
      "Web platform to support dormitory related administrative tasks for proctors at Addis Ababa University.",
    tech: ["React", "Node.js", "PostgreSQL"],
    links: [],
  },
];

const UPCOMING_PROJECTS = [
  {
    title: "Counter Attack Analyst",
    description:
      "An AI-based analyzer that evaluates a team’s defensive structure during a loss of possession and transitions after the loss. Currently being developed in Python as part of the Context Engineering course I’m taking by Twelve Football.",
    tech: ["Python", "AI"],
    links: [{ label: "GitHub", href: "#", primary: false }],
  },
  {
    title: "Hiriya",
    description:
      "An app that connects seniors, specially retired, with other seniors to develop their social life. It helps them do different activities like Tennis, Walks, Chess or a simple coffee meetup etc. It is currently under development.",
    tech: ["Laravel", "PHP"],
    links: [{ label: "GitHub", href: "#", primary: false }],
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
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>

      <h2 className="section-title mt-4">
        Upcoming Projects <span className="accent-dot">.</span>
      </h2>
      <div className="projects-grid">
        {UPCOMING_PROJECTS.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </FadeInSection>
  );
}
