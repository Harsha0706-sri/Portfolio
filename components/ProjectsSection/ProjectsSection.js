import styles from './ProjectsSection.module.css';

const PROJECTS = [
  {
    title: 'AI Interview Preparation Platform',
    status: 'In Development',
    description: 'AI-driven assessment and mock interview experience with adaptive practice and analytics.',
  },
  {
    title: 'Doctors Farms Resort Booking Website',
    status: 'Live',
    description: 'Full-stack booking site with polished UI, reservation workflows, and email confirmation automation.',
  },
];

const PROJECT_SUPPORT = [
  {
    label: 'Strategic UX',
    description: 'Designing premium user journeys that feel effortless across desktop and mobile.',
  },
  {
    label: 'Robust workload',
    description: 'Building secure APIs, data models, and deployment scripts for production readiness.',
  },
  {
    label: 'AI-enabled value',
    description: 'Adding intelligent automation and data-driven recommendation flows.',
  },
];

const PROJECT_BADGES = ['UX Design', 'Full-stack', 'Deployment', 'AI-Ready'];

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
            Delivered modern web products with polished UX, deployment-ready architecture,
            and intelligent integration points.
          </p>

          <div className={styles.supportBlock}>
            {PROJECT_SUPPORT.map((item) => (
              <div key={item.label} className={styles.detailItem}>
                <span className={styles.detailLabel}>{item.label}</span>
                <span className={styles.detailText}>{item.description}</span>
              </div>
            ))}
          </div>

          <div className={styles.badgeRow}>
            {PROJECT_BADGES.map((badge) => (
              <span key={badge} className={styles.badgeItem}>
                {badge}
              </span>
            ))}
          </div>

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
