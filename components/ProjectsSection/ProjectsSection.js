'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './ProjectsSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const PROJECT_BADGES = ['AI Interview Platform', 'Doctors Farms Resort', 'MERN', 'AI'];

export default function ProjectsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: false,
          markers: false,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.id === 'projects-section-animation') {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.projectsSection} id="projects-section">
      <div className={styles.projectsCard} aria-labelledby="projects-title">
        <span className={styles.sectionNumber}>04</span>

        <div className={styles.cardMain}>
          <header className={styles.header}>
            <div className={styles.tagline}>Projects</div>
            <h2 id="projects-title" className={styles.title}>
              Projects
            </h2>
          </header>

          <p className={styles.bioText}>
            Modern web projects built with polished UX, full-stack integration, and deployment-ready architecture.
          </p>

          <div className={styles.badgeRow}>
            {PROJECT_BADGES.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
