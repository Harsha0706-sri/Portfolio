'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './ContactSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const CONTACT_BADGES = ['GitHub', 'LinkedIn', 'Email'];

export default function ContactSection() {
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
        if (trigger.vars.id === 'contact-section-animation') {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.contactSection} id="contact-section">
      <div className={styles.card}>
        <span className={styles.sectionNumber}>05</span>

        <div className={styles.cardMain}>
          <header className={styles.header}>
            <div className={styles.tagline}>Contact</div>
            <h2 className={styles.title}>Contact</h2>
          </header>

          <p className={styles.bioText}>
            Reach out for web development, AI integrations, and polished product launch support.
          </p>

          <div className={styles.badgeRow}>
            {CONTACT_BADGES.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          <a
            href="/resume/2300090002_AkshayReddy.pdf"
            download="2300090002_AkshayReddy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadButton}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
