import { skills } from "../data/portfolio";

export function Skills() {
  return (
    <section className="skills-band" aria-label="기술 스택">
      <div className="skills-inner">
        <p className="eyebrow">CAPABILITIES</p>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-group">
              <h3>{group.category}</h3>
              <p>{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
