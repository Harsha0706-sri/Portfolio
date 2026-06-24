import styles from './SkillsSection.module.css';

const SKILL_LABELS = [
  'React.js',
  'Next.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Vercel',
  'AI/ML',
  'TypeScript',
];

const SKILL_PILLARS = [
  {
    label: 'Modern UI',
    description: 'Component-driven interfaces with polished motion, accessibility, and performance.',
  },
  {
    label: 'Reliable Backend',
    description: 'API-first services, database design, and deployment-ready infrastructure.',
  },
  {
    label: 'AI Integration',
    description: 'Machine learning features, intelligent workflows, and data-focused experiences.',
  },
];

export default function SkillsSection() {
  return (
    <section className={styles.skillsSection} id="skills-section">
      <article className={styles.card} aria-labelledby="skills-title">
        <span className={styles.sectionNumber}>02</span>

        <div className={styles.cardMain}>
          <header className={styles.skillsHeaderRow}>
            <div>
              <div className={styles.sectionTagline}>Expertise</div>
              <h2 id="skills-title" className={styles.sectionTitle}>
                Technical Skills
              </h2>
            </div>
          </header>

          <p className={styles.highlightText}>
            Practical front-end and back-end expertise for building polished web
            applications, API-first services, and AI-ready data experiences.
          </p>

          <div className={styles.supportBlock}>
            {SKILL_PILLARS.map((pillar) => (
              <div key={pillar.label} className={styles.detailItem}>
                <span className={styles.detailLabel}>{pillar.label}</span>
                <span className={styles.detailText}>{pillar.description}</span>
              </div>
            ))}
          </div>

          <div className={styles.badgeRow}>
            {SKILL_LABELS.map((label) => (
              <span key={label} className={styles.skillTag}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
