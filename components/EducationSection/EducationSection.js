'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './EducationSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const EDUCATION_BADGES = ['B.Tech', 'CGPA 8.07', 'KL University', 'AI Technologies'];

export default function EducationSection() {
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
        if (trigger.vars.id === 'education-section-animation') {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.educationSection} id="education-section">
      <article className={styles.card} aria-labelledby="education-title">
        <span className={styles.sectionNumber}>03</span>

        <div className={styles.cardMain}>
          <header className={styles.header}>
            <div className={styles.tagline}>Education</div>
            <h2 id="education-title" className={styles.title}>
              Education
            </h2>
          </header>

          <p className={styles.bioText}>
            Pursuing B.Tech at KL University with a focus on artificial intelligence,
            modern web systems, and production-ready engineering.
          </p>

          <div className={styles.badgeRow}>
            {EDUCATION_BADGES.map((tag) => (
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
