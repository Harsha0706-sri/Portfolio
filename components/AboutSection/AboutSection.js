'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './AboutSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const ABOUT_BADGES = ['DATA SCIENCE', 'BIG DATA', 'PYTHON', 'HADOOP', 'SPARK', 'AZURE', 'POWER BI'];

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
              Who  I  Am
            </h2>
          </header>

          <p className={styles.introText}>
            I am K Sri Harsha Vardhan, a B.Tech student specializing in Data Science and Big Data Analytics. I am passionate about transforming complex data into meaningful insights, developing intelligent data-driven solutions, and leveraging modern technologies to solve real-world problems. I also have a strong interest in Full Stack Development, Cloud Computing, and building scalable, efficient web applications.
          </p>

          <div className={styles.techStackSection}>
            <h3 className={styles.subheading}>Tech Stack</h3>
            <div className={styles.techList}>
              <span className={styles.techItem}>Python</span>
              <span className={styles.techItem}>Java</span>
              <span className={styles.techItem}>SQL</span>
              <span className={styles.techItem}>MongoDB</span>
              <span className={styles.techItem}>Apache Spark</span>
              <span className={styles.techItem}>Apache Hadoop</span>
              <span className={styles.techItem}>Microsoft Azure</span>
               <span className={styles.techItem}>Power BI</span>
            </div>
          </div>

          <p className={styles.closingText}>
            I enjoy solving real-world problems through data-driven solutions, analyzing large-scale datasets, and building intelligent applications using Data Science, Big Data Analytics, Cloud Computing, and modern software development technologies. I continuously strive to enhance my analytical, programming, and problem-solving skills.
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
