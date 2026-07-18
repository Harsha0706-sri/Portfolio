'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './ProjectsSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: 1,
    title: 'Analysis of Clothing Reviews',
    description:
      'Developed a sentiment analysis application that analyzes customer clothing reviews using Natural Language Processing to classify reviews into Positive, Negative, and Neutral sentiments.',
    image: '/clothing-review-photo.jpg',
    imageAlt: 'Analysis of Clothing Reviews project screenshot',
    details: ['Sentiment analysis', 'NLP implementation', 'Data visualization','Customer Review Dashboard','Interactive Charts'],
    tech: ['Spring Boot', 'React', 'MySQL', 'Python', 'NLP'],
    href: 'https://github.com/Harsha0706-sri/style-sentiment-main.git',
  },
  {
    id: 2,
    title: 'Car Rental System',
    description:
      'Developed a full-stack Car Rental System that enables users to browse vehicles, book rentals, manage reservations, and securely authenticate user accounts.',
    image: '/car-rental-system-photos.jpg',
    imageAlt: 'Car Rental System project screenshot',
    details: ['Vehicle Booking', 'Rental Management', 'User Authentication', 'Responsive Dashboard'],
    tech: ['Spring Boot', 'React', 'MySQL', 'REST APIs'],
    href: 'https://github.com/Harsha0706-sri/car-rental-system.git',
  },
];

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

    const projectCards = sectionRef.current.querySelectorAll(`.${styles.projectCard}`);
    if (projectCards.length > 0) {
      gsap.fromTo(
        projectCards,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'top 20%',
            scrub: false,
            markers: false,
          },
        }
      );
    }

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
      <article className={styles.card} aria-labelledby="projects-title">
        <span className={styles.sectionNumber}>04</span>

        <div className={styles.cardMain}>
          <header className={styles.header}>
            <div className={styles.tagline}>Selected Work</div>
            <h2 id="projects-title" className={styles.title}>
              Projects
            </h2>
          </header>

          <div className={styles.projectsGrid}>
            {PROJECTS.map((project) => (
              <article key={project.id} className={styles.projectCard}>
                <div className={styles.projectMedia}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className={styles.projectImage}
                    priority={project.id === 1}
                  />
                </div>

                <div className={styles.projectBody}>
                  <div className={styles.projectHeadingRow}>
                    <div>
                      <p className={styles.projectLabel}>Project {project.id}</p>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                    </div>

                    <a
                      className={styles.projectLink}
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  </div>

                  <p className={styles.projectDescription}>{project.description}</p>

                  <ul className={styles.projectSpecs}>
                    {project.details.map((detail) => (
                      <li key={detail} className={styles.projectSpecItem}>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.techStackWrapper}>
                    <div className={styles.techStackLabel}>Tech Stack</div>
                    <div className={styles.techList}>
                      {project.tech.map((tech) => (
                        <span key={tech} className={styles.techItem}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}