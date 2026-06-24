import styles from './AboutSection.module.css';

const ABOUT_BADGES = ['FULL STACK', 'AI/ML', 'REACT', 'NODE.JS', 'MONGODB', 'CLOUD'];

export default function AboutSection() {
  return (
    <section className={styles.aboutSection} id="who-am-i">
      <article className={styles.card} aria-labelledby="about-title">
        <span className={styles.sectionNumber}>01</span>

        <div className={styles.cardMain}>
          <header className={styles.header}>
            <div className={styles.tagline}>About Profile</div>
            <h2 id="about-title" className={styles.title}>
              Who I Am
            </h2>
          </header>

          <p className={styles.bioText}>
            I am a B.Tech student building AI-driven web applications with modern full-stack
            systems and polished production-ready delivery.
          </p>

          <div className={styles.badgeRow}>
            {ABOUT_BADGES.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
