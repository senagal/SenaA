import FadeInSection from "../FadeInSection";

const PROJECTS = [
  {
    title: "Real Madrid Defensive Transition Analyser",
    context: "Football analytics · Defensive transitions",
    description:
      "Streamlit platform analyzing susceptibility to counter-attacks and defensive structure during transitions.",
    tech: ["Python", "Streamlit"],
    links: [
      { label: "GitHub", href: "https://github.com/senagal/Soccermatics-Project3.git", primary: false },
    ],
  },
  {
    title: "Bruno Fernandez's Pass Analyser",
    context: "Football analytics · UEFA Euro 2024",
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
    context: "Culturally relevant children's media",
    description:
      "Web kids' entertainment platform providing culturally relevant content for Ethiopian children.",
    tech: ["React", "Node.js", "PostgreSQL"],
    links: [{ label: "GitHub", href: "https://github.com/senagal/Kuncho.git", primary: false }],
  },
  {
    title: "SMOOL",
    context: "Education technology · Ethiopian curriculum",
    description: "School management system tailored for the Ethiopian curriculum.",
    tech: ["Laravel", "PHP"],
    links: [{ label: "GitHub", href: "https://github.com/oddegen/SMOOL.git", primary: false }],
  },
  {
    title: "PAS",
    context: "University administration",
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
    links: [],
  },
  {
    title: "Hiriya",
    description:
      "An app that connects seniors, specially retired, with other seniors to develop their social life. It helps them do different activities like Tennis, Walks, Chess or a simple coffee meetup etc. It is currently under development.",
    tech: ["Laravel", "PHP"],
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

      <div className="in-progress">
        <div className="in-progress-heading">
          <h3>In progress</h3>
          <p>Active explorations.</p>
        </div>
        <div className="in-progress-list">
          {UPCOMING_PROJECTS.map((project) => (
            <article key={project.title}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span className="tech" key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
