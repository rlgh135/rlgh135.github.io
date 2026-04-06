import { useState } from "react";
import { projects } from "../data/portfolio";
import type { Project } from "../types";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <span className="section-num">04</span>
        <h2 className="section-title">Side Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <article
            key={p.id}
            className="project-card"
            style={{ animationDelay: `${i * 0.1}s` }}
            onClick={() => p.detail && setSelected(p)}
            role={p.detail ? "button" : undefined}
            tabIndex={p.detail ? 0 : undefined}
            onKeyDown={(e) => e.key === "Enter" && p.detail && setSelected(p)}
          >
            <div className="card-top">
              <span className="project-year">{p.year}</span>
              <div className="card-links">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="card-link"
                    title="GitHub"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GH
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="card-link card-link-live"
                    title="Live"
                    onClick={(e) => e.stopPropagation()}
                  >
                    ↗
                  </a>
                )}
              </div>
            </div>

            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.description}</p>

            <div className="project-tags">
              {p.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>

            {p.detail && (
              <span className="card-detail-hint">자세히 보기 →</span>
            )}
          </article>
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
