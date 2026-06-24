import styles from './AboutSection.module.css';

const ABOUT_BADGES = ['FULL STACK', 'AI/ML', 'REACT', 'NODE.JS', 'MONGODB', 'CLOUD'];
const SUPPORT_ITEMS = [
  {
    label: 'Product mindset',
    description:
      'I design user-first applications that feel premium and perform reliably under load.',
  },
  {
    label: 'Technical craft',
    description:
      'I build modern APIs, deploy scalable services, and keep design systems consistent.',
  },
  {
    label: 'Delivery focus',
    description:
      'I bring ideas to life with polished interactions, automation, and clean architecture.',
  },
];

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
              I build premium web applications with AI-powered interfaces, resilient backend
              systems, and polished deployment workflows.
            </p>

            <div className={styles.supportBlock}>
              {SUPPORT_ITEMS.map((item) => (
                <div key={item.label} className={styles.supportItem}>
                  <span className={styles.supportLabel}>{item.label}</span>
                  <span className={styles.supportText}>{item.description}</span>
                </div>
              ))}
            </div>

            <div className={styles.badgeRow}>
              {ABOUT_BADGES.map((tag) => (
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
