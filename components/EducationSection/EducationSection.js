import styles from './EducationSection.module.css';

const EDUCATION_INFO = {
  title: 'Bachelor of Technology (B.Tech)',
  institution: 'KL University',
  specialization: 'AI Driven Languages and Technologies',
  cgpa: '8.07',
  status: 'Currently Pursuing',
};

const EDUCATION_BADGES = ['2023 – 2027', 'CGPA 8.07', 'AI/ML Focus'];

export default function EducationSection() {
  return (
    <section className={styles.educationSection} id="education-section">
      <article className={styles.card} aria-labelledby="education-title">
        <span className={styles.sectionNumber}>03</span>

        <div className={styles.cardMain}>
          <header className={styles.educationHeaderRow}>
            <div>
              <div className={styles.sectionTagline}>About • Education</div>
              <h2 id="education-title" className={styles.sectionTitle}>
                Education
              </h2>
            </div>
          </header>

          <p className={styles.highlightText}>
            Pursuing B.Tech in AI Driven Languages and Technologies at KL University with a
            strong focus on full-stack systems, machine learning, and applied software
            architecture.
          </p>

          <div className={styles.educationBadgeRow}>
            {EDUCATION_BADGES.map((badge) => (
              <span key={badge} className={styles.badgeItem}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
