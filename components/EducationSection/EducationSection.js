import styles from './EducationSection.module.css';

const EDUCATION_BADGES = ['2023 – 2027', 'CGPA 8.07', 'AI/ML Focus'];
const EDUCATION_HIGHLIGHTS = [
  {
    label: 'Specialization',
    value: 'AI Driven Languages and Technologies',
  },
  {
    label: 'Current focus',
    value: 'Full-stack systems, machine learning, and deployment architecture',
  },
  {
    label: 'Academic status',
    value: 'B.Tech candidate at KL University, currently pursuing final year coursework',
  },
];

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
            Pursuing B.Tech at KL University with a strong emphasis on AI-driven languages,
            modern web systems, and applied software architecture for production-ready experiences.
          </p>

          <div className={styles.supportBlock}>
            {EDUCATION_HIGHLIGHTS.map((item) => (
              <div key={item.label} className={styles.detailItem}>
                <span className={styles.detailLabel}>{item.label}</span>
                <span className={styles.detailText}>{item.value}</span>
              </div>
            ))}
          </div>

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
