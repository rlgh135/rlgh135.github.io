import { experiences } from "../data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-intro">
        <p className="eyebrow">EXPERIENCE</p>
        <h2>제품의 전체 흐름을<br />직접 연결합니다.</h2>
        <p>아이디어를 인터페이스로, 복잡한 로직을 안정적인 시스템으로 전환해 온 경험입니다.</p>
      </div>

      <div className="experience-list">
        {experiences.map((exp) => (
          <article className="experience-item" key={`${exp.company}-${exp.period}`}>
            <div className="experience-meta">
              <time>{exp.period}</time>
              <span>{exp.company}</span>
            </div>
            <div className="experience-content">
              <h3>{exp.role}</h3>
              <p className="experience-description">{exp.description}</p>
              {!!exp.projects?.length && (
                <div className="case-list">
                  {exp.projects.map((project) => (
                    <div className="case" key={project.title}>
                      <div><h4>{project.title}</h4><p>{project.description}</p></div>
                      {project.impact && <strong>{project.impact}</strong>}
                      <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    </div>
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
