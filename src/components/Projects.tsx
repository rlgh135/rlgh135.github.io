import { projects } from "../data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="projects-heading">
        <div><p className="eyebrow">SELECTED WORK</p><h2>문제를 발견하고,<br />작동하는 것으로 답합니다.</h2></div>
        <a className="text-link" href="https://github.com/rlgh135?tab=repositories" target="_blank" rel="noreferrer">모든 저장소 보기</a>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <a className="project-row" href={project.github} target="_blank" rel="noreferrer" key={project.id}>
            <span className="project-index">0{index + 1}</span>
            <div className="project-main"><h3>{project.title}</h3><p>{project.description}</p></div>
            <div className="project-side"><span>{project.year}</span><div className="tags">{project.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div></div>
            <span className="project-open" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
