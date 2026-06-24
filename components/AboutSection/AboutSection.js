import styles from './AboutSection.module.css';

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

          <div className={styles.mainContent}>
            <p className={styles.bioText}>
              I am P. Akshay Reddy, a B.Tech student in AI Driven Languages and Technologies.
              I build polished full-stack applications with AI-enhanced interfaces, modern
              deployment workflows, and clean, scalable architecture.
            </p>

            <div className={styles.badgeRow}>
              {['FULL STACK', 'AI/ML', 'REACT', 'NODE.JS', 'MONGODB', 'CLOUD'].map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
