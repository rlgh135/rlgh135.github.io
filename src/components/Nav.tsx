import { useScrollSpy } from "../hooks/useScrollSpy";

const sections = ["about", "experience", "projects", "contact"];

export function Nav() {
  const active = useScrollSpy(sections);

  return (
    <header className="nav-shell">
      <nav className="nav" aria-label="주요 메뉴">
        <a className="nav-brand" href="#about" aria-label="Kiho Park 홈">
          <span>KP</span>
          <small>FULL-STACK ENGINEER</small>
        </a>
        <div className="nav-links">
          {sections.slice(1, 3).map((id) => (
            <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>
              {id === "experience" ? "Experience" : "Work"}
            </a>
          ))}
          <a className="nav-contact" href="#contact">Let's talk</a>
        </div>
      </nav>
    </header>
  );
}
