import { projects } from "../data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <span className="section-num">04</span>
        <h2 className="section-title">Side Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <article key={p.id} className="project-card" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="card-top">
              <span className="project-year">{p.year}</span>
              <div className="card-links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="card-link" title="GitHub">
                    GH
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="card-link card-link-live" title="Live">
                    ↗
                  </a>
                )}
              </div>
            </div>

            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.description}</p>

            <div className="project-tags">
              {p.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
