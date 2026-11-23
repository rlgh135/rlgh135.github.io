import { useScrollSpy } from "../hooks/useScrollSpy";

const sections = ["about", "experience", "contact"];

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
          <a href="#experience" className={active === "experience" ? "active" : ""}>
            Experience
          </a>
          <a className="nav-contact" href="#contact">Let's talk</a>
        </div>
      </nav>
    </header>
  );
}
