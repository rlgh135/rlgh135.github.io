import { skills } from "../data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="section-header">
        <span className="section-num">02</span>
        <h2 className="section-title">Skills</h2>
      </div>

      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.category} className="skill-group">
            <h3 className="skill-category">{group.category}</h3>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li key={item} className="skill-item">
                  <span className="skill-dot" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
