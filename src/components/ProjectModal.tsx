import { useEffect } from "react";
import type { Project } from "../types";

interface Props {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: Props) {
  const { detail } = project;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-left">
            <span className="project-year">{project.year}</span>
            <h2 className="modal-title">{project.title}</h2>
          </div>
          <div className="modal-header-right">
            <div className="card-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="card-link" title="GitHub">
                  GH
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="card-link card-link-live" title="Live">
                  ↗
                </a>
              )}
            </div>
            <button className="modal-close" onClick={onClose} aria-label="닫기">✕</button>
          </div>
        </div>

        {/* Body */}
        <div className="modal-body">

          {/* 이미지 */}
          {detail?.images && detail.images.length > 0 && (
            <div className="modal-images">
              {detail.images.map((src, i) => (
                <img key={i} src={src} alt={`${project.title} screenshot ${i + 1}`} className="modal-image" />
              ))}
            </div>
          )}

          {/* 태그 */}
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          {/* Overview */}
          {detail?.overview && (
            <div className="modal-section">
              <h3 className="modal-section-title">Overview</h3>
              <p className="modal-section-body">{detail.overview}</p>
            </div>
          )}

          {/* Trouble Shooting */}
          {detail?.troubleshooting && detail.troubleshooting.length > 0 && (
            <div className="modal-section">
              <h3 className="modal-section-title">Trouble Shooting</h3>
              <div className="modal-ts-list">
                {detail.troubleshooting.map((ts, i) => (
                  <div key={i} className="modal-ts-item">
                    <div className="modal-ts-problem">
                      <span className="modal-ts-label">Problem</span>
                      <p>{ts.problem}</p>
                    </div>
                    <div className="modal-ts-solution">
                      <span className="modal-ts-label">Solution</span>
                      <p>{ts.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
