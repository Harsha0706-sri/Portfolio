'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './ContactSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
          markers: false
        }
      });

      tl.fromTo(cardRef.current,
        { opacity: 0, y: 80, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2 }
      );

      tl.fromTo(titleRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.8'
      );

      tl.fromTo(infoRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
        '-=0.6'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.contactSection} id="contact-section">
      <div className={styles.blueGlow} />
      <div className={styles.orangeGlow} />

      <div ref={cardRef} className={styles.card}>
        <div ref={titleRef} className={styles.header}>
          <div className={styles.tagline}>Get In Touch</div>
          <h2 className={styles.title}>Contact</h2>
        </div>

        <div ref={infoRef} className={styles.contactInfo}>
          <p className={styles.contactText}>
            I’m available for freelance opportunities, collaborations, and new projects.
          </p>
          <p className={styles.contactText}>
            Email: <a href="mailto:hello@yourdomain.com" className={styles.contactLink}>hello@yourdomain.com</a>
          </p>
          <p className={styles.contactText}>
            LinkedIn: <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className={styles.contactLink}>linkedin.com/in/yourprofile</a>
          </p>
          <p className={styles.contactText}>
            GitHub: <a href="https://github.com/reddy615" target="_blank" rel="noreferrer" className={styles.contactLink}>github.com/reddy615</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
