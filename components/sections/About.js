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
      <div className="section-heading">
        <h2 className="section-title">Academic foundation</h2>
        <p>
          A rigorous computer science education, paired with a toolkit shaped by real operational
          and analytical work.
        </p>
      </div>

      <div className="profile-grid">
        <div className="education-record">
          <p className="education-score">3.94<span>/4.0</span></p>
          <div>
            <h3>BSc, Computer Science</h3>
            <p>Addis Ababa University · Summa Cum Laude</p>
            <p className="date">May 2022 — June 2025</p>
          </div>
        </div>

        <div className="skills">
          <h3>Working toolkit</h3>
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
