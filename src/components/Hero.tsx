import { highlights, profile, socials } from "../data/portfolio";

export function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero-kicker"><span /> SEOUL · AVAILABLE FOR COLLABORATION</div>
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-role">{profile.title}</p>
          <h1>{profile.statement.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
          <p className="hero-bio">{profile.bio}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">경험 살펴보기</a>
            <a className="text-link" href={socials[0].href} target="_blank" rel="noreferrer">GitHub 방문</a>
          </div>
        </div>

        <div className="system-card" aria-label="개발 원칙">
          <div className="system-card-top"><span>system.architecture</span><span className="live-dot">LIVE</span></div>
          <div className="system-orbit">
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="system-core"><strong>BUILD</strong><span>clean boundaries</span></div>
            <span className="node node-a">AI</span>
            <span className="node node-b">WEB</span>
            <span className="node node-c">DATA</span>
          </div>
          <div className="system-log">
            <span><i>01</i> Modular by design</span>
            <span><i>02</i> Measured in production</span>
            <span><i>03</i> Built for change</span>
          </div>
        </div>
      </div>

      <div className="hero-metrics">
        {highlights.map((item) => (
          <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>
        ))}
      </div>
    </section>
  );
}
