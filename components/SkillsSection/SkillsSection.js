'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './SkillsSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const SKILL_LABELS = ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Railway'];

export default function SkillsSection() {
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
        if (trigger.vars.id === 'skills-section-animation') {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.skillsSection} id="skills-section">
      <article className={styles.card} aria-labelledby="skills-title">
        <span className={styles.sectionNumber}>02</span>

        <div className={styles.cardMain}>
          <header className={styles.header}>
            <div className={styles.tagline}>Technical Skills</div>
            <h2 id="skills-title" className={styles.title}>
              Technical Skills
            </h2>
          </header>

          <p className={styles.bioText}>
            Modern front-end and back-end skills for polished web products, API-driven
            systems, and deploy-ready application delivery.
          </p>

          <div className={styles.badgeRow}>
            {SKILL_LABELS.map((tag) => (
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
