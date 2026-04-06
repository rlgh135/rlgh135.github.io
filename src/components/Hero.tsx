import { profile, socials } from "../data/portfolio";

export function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero-grid">
        <div className="hero-eyebrow">
          <span className="badge">Available for work</span>
          <span className="location">📍 {profile.location}</span>
        </div>

        <h1 className="hero-name">
          {profile.name.split("").map((char, i) => (
            <span key={i} className="char" style={{ animationDelay: `${i * 0.04}s` }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <div className="hero-title-row">
          <div className="title-line" />
          <p className="hero-title">{profile.title}</p>
        </div>

        <p className="hero-tagline">{profile.tagline}</p>
        <p className="hero-bio">{profile.bio}</p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}>
            프로젝트 보기
          </a>
          <a href={`mailto:${profile.email}`} className="btn btn-ghost">
            연락하기
          </a>
        </div>

        <div className="hero-socials">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-link">
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>

      <div className="hero-deco">
        <div className="deco-ring deco-ring-1" />
        <div className="deco-ring deco-ring-2" />
        <div className="deco-ring deco-ring-3" />
        <div className="deco-code">
          <span className="code-line">const dev = {"{"}</span>
          <span className="code-line">&nbsp;&nbsp;passion: true,</span>
          <span className="code-line">&nbsp;&nbsp;coffee: Infinity,</span>
          <span className="code-line">&nbsp;&nbsp;bugs: 0, // 🤞</span>
          <span className="code-line">{"}"}</span>
        </div>
      </div>
    </section>
  );
}
