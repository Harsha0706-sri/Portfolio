'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './ContactSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const CONTACT_DETAILS = [
  {
    label: 'Email',
    value: '2300090083csit@gmail.com',
    href: 'mailto:2300090083csit@gmail.com',
  },
  {
    label: 'Location',
    value: '📍 Guntur,Andhra Pradesh, India',
  },
  {
    label: 'Status',
    value: 'Available for Opportunities',
  },
];

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2C6.48 2 2 6.56 2 12.2c0 4.51 2.87 8.34 6.84 9.69.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.35-3.37-1.35-.45-1.17-1.11-1.48-1.11-1.48-.91-.63.07-.61.07-.61 1.01.07 1.54 1.06 1.54 1.06.9 1.58 2.36 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.31 9.31 0 0 1 5 0C15.2 5.5 16.04 5.77 16.04 5.77c.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .26.18.57.69.47A10.25 10.25 0 0 0 22 12.2C22 6.56 17.52 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.94 6.5A1.94 1.94 0 1 1 3.06 6.5a1.94 1.94 0 0 1 3.88 0ZM3.4 8.92h3.1V21H3.4V8.92Zm5.56 0h2.97v1.65h.04c.41-.78 1.42-1.6 2.92-1.6 3.12 0 3.7 2.05 3.7 4.7V21h-3.1v-5.67c0-1.35-.02-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98V21H8.96V8.92Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 4h6v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 14L20 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

          <div className={styles.contentGrid}>
            <div className={styles.leftColumn}>
              <p className={styles.bioText}>Let's build something great together.</p>

              <div className={styles.contactList}>
                <article className={styles.featureBlock}>
                  <div className={styles.featureHeadingRow}>
                    <span className={styles.featureIcon} aria-hidden="true">
                      <GitHubIcon />
                    </span>
                    <h3 className={styles.featureTitle}>GitHub</h3>
                  </div>
                  <p className={styles.featureDescription}>
                    Explore the code behind my projects from intuitive user interfaces to scalable backend systems,
                    built with a focus on performance, quality, and innovation.
                  </p>
                  <a
                    href="https://github.com/Harsha0706-sri"
                    className={styles.featureLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.externalIcon} aria-hidden="true">
                      <ExternalLinkIcon />
                    </span>
                    github.com/Harsha0706-sri
                  </a>
                </article>

                <article className={styles.featureBlock}>
                  <div className={styles.featureHeadingRow}>
                    <span className={styles.featureIcon} aria-hidden="true">
                      <LinkedInIcon />
                    </span>
                    <h3 className={styles.featureTitle}>LinkedIn</h3>
                  </div>
                  <p className={styles.featureDescription}>
                    Let's connect to discuss Data Science, Big Data Analytics, Machine Learning, Cloud Computing, and innovative data-driven solutions.
                    I'm always eager to collaborate on exciting projects, exchange ideas, and explore opportunities that create meaningful impact through technology.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/k-sri-harsha-vardhan-88603a301/"
                    className={styles.featureLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.externalIcon} aria-hidden="true">
                      <ExternalLinkIcon />
                    </span>
                    linkedin.com/in/k-sri-harsha-vardhan-88603a301
                  </a>
                </article>

                {CONTACT_DETAILS.map((item) => (
                  <div key={item.label} className={styles.contactBlock}>
                    <div className={styles.contactRow}>
                      <span className={styles.contactLabel}>{item.label}:</span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className={styles.contactValue}
                          target={item.label === 'Email' ? undefined : '_blank'}
                          rel={item.label === 'Email' ? undefined : 'noopener noreferrer'}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className={styles.contactValue}>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="/resume/2300090083_KSriHarshaVardhan.pdf"
                download="2300090083_KSriHarshaVardhan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.downloadButton}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ marginRight: 8, flexShrink: 0 }}>
                  <path
                    d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path d="M14 2v5h5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M8 14h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M8 11h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>

            <aside className={styles.availabilityPanel}>
              <div className={styles.availabilityTop}>AVAILABLE FOR OPPORTUNITIES</div>
              <div className={styles.availabilityBody}>Full Stack Developer</div>
              <div className={styles.availabilityBody}>AI Enthusiast</div>
              <div className={styles.availabilityBody}>MERN Stack</div>
              <div className={styles.availabilityBody}>React • Node • MongoDB</div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
