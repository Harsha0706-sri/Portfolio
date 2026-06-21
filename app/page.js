'use client';

import React, { useEffect } from 'react';
import CinematicLayer from '@/components/CinematicLayer/CinematicLayer';
import VideoIntro from '@/components/VideoIntro/VideoIntro';
import AboutSection from '@/components/AboutSection/AboutSection';
import SkillsSection from '@/components/SkillsSection/SkillsSection';
import EducationSection from '@/components/EducationSection/EducationSection';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import styles from './page.module.css';

export default function Home() {
  useEffect(() => {
    // Temporary logger to verify upward scrolling and spot layout blocks
    const handleScrollAudit = () => {
      console.log(
        '[Scroll Audit]',
        'scrollY:', window.scrollY,
        'docHeight:', document.documentElement.scrollHeight,
        'htmlOverflow:', window.getComputedStyle(document.documentElement).overflow,
        'bodyOverflow:', window.getComputedStyle(document.body).overflow
      );
    };

    window.addEventListener('scroll', handleScrollAudit);
    return () => {
      window.removeEventListener('scroll', handleScrollAudit);
    };
  }, []);

  return (
    <main className={styles.pageContainer}>
      {/* 1. Cinematic Hero Area */}
      <div className={styles.heroWrapper}>
        {/* Transparent Three.js floating particle overlay */}
        <CinematicLayer />
        
        {/* Fullscreen video and landing content */}
        <VideoIntro />
      </div>

      {/* 2. Standalone Animated About Section */}
      <AboutSection />

      {/* 3. Standalone Animated Technical Skills Section */}
      <SkillsSection />

      {/* 4. Standalone Animated Education Section */}
      <EducationSection />

      {/* 5. Standalone Animated Projects Section */}
      <ProjectsSection />

      {/* 6. Standalone Animated Contact Section */}
      <ContactSection />
    </main>
  );
}
