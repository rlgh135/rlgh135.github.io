import { profile, socials } from "../data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="section section-contact">
      <div className="contact-inner">
        <span className="section-num">04</span>
        <h2 className="contact-heading">함께 만들어볼까요?</h2>
        <p className="contact-sub">
          새로운 기회, 협업 제안, 혹은 그냥 안녕이라도 — 언제든 환영합니다.
        </p>

        <a href={`mailto:${profile.email}`} className="contact-email">
          {profile.email}
        </a>

        <div className="contact-socials">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="contact-social-link">
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <footer className="footer">
        <span>Built with React + TypeScript</span>
        <span>Deployed via GitHub Actions</span>
      </footer>
    </section>
  );
}
