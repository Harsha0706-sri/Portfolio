import styles from './ProjectsSection.module.css';

const PROJECTS = [
  {
    title: 'AI Interview Preparation Platform',
    status: 'In Development',
    description: 'AI-driven assessment and mock interview experience.',
  },
  {
    title: 'Doctors Farms Resort Booking Website',
    status: 'Live',
    description: 'Full-stack booking site with deployment and email workflow.',
  },
];

export default function ProjectsSection() {
  return (
    <section className={styles.projectsSection} id="projects-section">
      <div className={styles.projectsCard} aria-labelledby="projects-title">
        <span className={styles.sectionNumber}>04</span>

        <div className={styles.cardMain}>
          <header className={styles.sectionHeaderRow}>
            <div>
              <div className={styles.sectionTagline}>Selected Works</div>
              <h2 id="projects-title" className={styles.sectionTitle}>
                Projects
              </h2>
            </div>
          </header>

          <p className={styles.projectDescription}>
            Built modern web products with polished UX, deployment pipelines, and
            full-stack integration.
          </p>

          <ul className={styles.projectsList}>
            {PROJECTS.map((project) => (
              <li key={project.title} className={styles.projectItem}>
                <span className={styles.projectName}>{project.title}</span>
                <span className={styles.projectStatus}>{project.status}</span>
                <p className={styles.projectSummary}>{project.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
