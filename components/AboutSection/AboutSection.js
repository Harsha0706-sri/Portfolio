'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './AboutSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const ABOUT_BADGES = ['FULL STACK', 'AI/ML', 'REACT', 'NODE.JS', 'MONGODB', 'CLOUD'];

export default function AboutSection() {
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
        if (trigger.vars.id === 'about-section-animation') {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.aboutSection} id="who-am-i">
      <article className={styles.card} aria-labelledby="about-title">
        <span className={styles.sectionNumber}>01</span>

        <div className={styles.cardMain}>
          <header className={styles.header}>
            <div className={styles.tagline}>About Profile</div>
            <h2 id="about-title" className={styles.title}>
              Who I Am
            </h2>
          </header>

          <p className={styles.introText}>
            I am P. Akshay Reddy, a B.Tech student specializing in AI Driven Languages and Technologies. I am passionate about Full Stack Development, Artificial Intelligence, and building scalable web applications.
          </p>

          <div className={styles.projectsSection}>
            <h3 className={styles.subheading}>Projects</h3>
            <ul className={styles.projectList}>
              <li>Doctors Farms Resort Booking Website</li>
              <li>AI Interview Preparation Platform</li>
            </ul>
          </div>

          <div className={styles.techStackSection}>
            <h3 className={styles.subheading}>Tech Stack</h3>
            <div className={styles.techList}>
              <span className={styles.techItem}>React</span>
              <span className={styles.techItem}>Node.js</span>
              <span className={styles.techItem}>Express.js</span>
              <span className={styles.techItem}>MongoDB</span>
              <span className={styles.techItem}>JavaScript</span>
              <span className={styles.techItem}>Git</span>
              <span className={styles.techItem}>Cloud Platforms</span>
            </div>
          </div>

          <p className={styles.closingText}>
            I enjoy solving real-world problems through software engineering and continuously improving my development skills.
          </p>

          <div className={styles.badgeRow}>
            {ABOUT_BADGES.map((tag) => (
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
