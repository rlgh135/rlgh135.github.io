import { useScrollSpy } from "../hooks/useScrollSpy";

const SECTIONS = ["about", "experience", "skills", "projects", "contact"];
const LABELS: Record<string, string> = {
  about: "About",
  experience: "Experience",
  skills: "Skills",
  projects: "Side Projects",
  contact: "Contact",
};

export function Nav() {
  const active = useScrollSpy(SECTIONS);

  return (
    <nav className="nav">
      <div className="nav-brand">
        <span className="nav-dot" />
        <span>Portfolio</span>
      </div>
      <ul className="nav-links">
        {SECTIONS.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? "nav-link active" : "nav-link"}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {LABELS[id]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
