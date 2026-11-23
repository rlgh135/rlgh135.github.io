import { profile, socials } from "../data/portfolio";

export function Hero() {
  return (
    <section id="about" className="hero">
      <div className="profile-header">
        <div className="profile-name">
          <p className="eyebrow">PROFILE</p>
          <h1>{profile.name}</h1>
          <span>{profile.englishName} · {profile.title}</span>
        </div>

        <p className="profile-value">{profile.value}</p>
      </div>

      <dl className="profile-facts">
        <div>
          <dt>Contact</dt>
          <dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd>
        </div>
        <div>
          <dt>Education</dt>
          <dd className="profile-education">
            <strong>{profile.education.school}</strong>
            <span>{profile.education.major}</span>
            <small>{profile.education.period}</small>
          </dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>{profile.location}</dd>
        </div>
        <div>
          <dt>Career</dt>
          <dd>{profile.careerPeriod}</dd>
        </div>
        <div>
          <dt>Links</dt>
          <dd className="profile-links">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}</a>
            ))}
          </dd>
        </div>
      </dl>
    </section>
  );
}
