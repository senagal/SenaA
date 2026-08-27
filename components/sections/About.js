import FadeInSection from "../FadeInSection";

const SKILLS = [
  {
    category: "Programming",
    tags: ["Python", "JavaScript", "Java", "C++", "PHP"],
  },
  {
    category: "Database",
    tags: ["SQL", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    category: "Tools & Frontend",
    tags: ["CSS", "Figma", "Git", "Jira", "Notion"],
  },
];

export default function About() {
  return (
    <FadeInSection id="about" className="about section">
      <h2 className="section-title">
        About & Education <span className="accent-dot">.</span>
      </h2>
      <div className="grid layout-1-2">
        <div className="education glass-card">
          <h3>Education</h3>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <h4>BSC, Computer Science</h4>
            <h5>Addis Ababa University</h5>
            <p className="date">May 2022 - June 2025</p>
            <p>CGPA: 3.94/4.0 | Summa Cum Laude</p>
          </div>
        </div>

        <div className="skills glass-card">
          <h3>Core Skills</h3>
          <div className="skills-grid">
            {SKILLS.map((group) => (
              <div className="skill-category" key={group.category}>
                <h4>{group.category}</h4>
                <div className="tags">
                  {group.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
