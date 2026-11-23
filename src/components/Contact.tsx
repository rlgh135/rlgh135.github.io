import { profile, socials } from "../data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <p className="eyebrow">CONTACT</p>
        <h2>좋은 문제를 함께<br />풀어보고 싶습니다.</h2>
        <p>AI 제품, 풀스택 개발, 기술 협업에 관한 이야기를 기다립니다.</p>
        <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
        <div className="contact-links">{socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}</a>)}</div>
      </div>
      <footer><span>© {new Date().getFullYear()} Kiho Park</span><span>Built with React & TypeScript</span></footer>
    </section>
  );
}
