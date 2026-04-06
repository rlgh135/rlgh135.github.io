import { experiences } from "../data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-header">
        <span className="section-num">02</span>
        <h2 className="section-title">Experience</h2>
      </div>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-dot" />
              {i < experiences.length - 1 && <div className="marker-line" />}
            </div>
            <div className="timeline-content">
              <div className="exp-header">
                <h3 className="exp-role">{exp.role}</h3>
                <span className="exp-period">{exp.period}</span>
              </div>
              <p className="exp-company">{exp.company}</p>
              <p className="exp-desc">{exp.description}</p>

              {exp.projects && exp.projects.length > 0 && (
                <div className="work-projects">
                  {exp.projects.map((proj, j) => (
                    <div key={j} className="work-project-card">
                      <h4 className="work-project-title">{proj.title}</h4>
                      <p className="work-project-desc">{proj.description}</p>
                      {proj.impact && (
                        <p className="work-project-impact">{proj.impact}</p>
                      )}
                      <div className="project-tags">
                        {proj.tags.map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
