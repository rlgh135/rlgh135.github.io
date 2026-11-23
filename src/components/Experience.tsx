import { experiences } from "../data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <header className="resume-heading">
        <p className="eyebrow">WORK EXPERIENCE</p>
      </header>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-item" key={`${experience.company}-${experience.period}`}>
            <aside className="experience-meta">
              <span className="experience-label">{experience.label ?? "Work"}</span>
              <time>{experience.period}</time>
              <strong>{experience.company}</strong>
            </aside>

            <div className="experience-content">
              <h3>{experience.role}</h3>

              {!!experience.details?.length && (
                <ul className="experience-details">
                  {experience.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              )}

              {experience.note && <p className="experience-note">{experience.note}</p>}

              {!!experience.projects?.length && (
                <div className="case-list">
                  {experience.projects.map((project) => (
                    <section className="case" key={project.title}>
                      <header className="case-header">
                        <div>
                          <h4>{project.title}</h4>
                          <time>{project.period}</time>
                        </div>
                        <p>{project.description}</p>
                      </header>

                      <div className="case-details">
                        <div>
                          <h5>담당 역할</h5>
                          <ul>{project.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
                        </div>
                        <div className="case-outcomes">
                          <h5>성과</h5>
                          <ul>{project.outcomes.map((item) => <li key={item}>{item}</li>)}</ul>
                        </div>
                      </div>

                      <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    </section>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
