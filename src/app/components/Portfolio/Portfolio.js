'use client';

import { useState } from 'react';
import styles from './Portfolio.module.css';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  // Projects array with only serializable values
  const projects = [
    {
      name: 'E-Commerce Platform',
      type: 'Web Applications',
      color: 'blue',
      description:
        'A full-featured online shopping platform with advanced inventory management',
    },
    {
      name: 'Healthcare App',
      type: 'Mobile Apps',
      color: 'purple',
      description:
        'A comprehensive app designed to improve patient care and hospital efficiency',
    },
    {
      name: 'CRM System',
      type: 'Enterprise Solutions',
      color: 'pink',
      description:
        'An advanced customer relationship management system for businesses',
    },
    {
      name: 'Fintech Solution',
      type: 'Enterprise Solutions',
      color: 'green',
      description:
        'A secure and scalable platform for modern financial services',
    },
    {
      name: 'IoT Dashboard',
      type: 'Web Applications',
      color: 'orange',
      description:
        'A dashboard for monitoring IoT devices with real-time analytics',
    },
    {
      name: 'ERP System',
      type: 'Enterprise Solutions',
      color: 'indigo',
      description:
        'A robust enterprise resource planning system for large-scale businesses',
    },
  ];

  // Filter projects based on the active filter
  const filteredProjects =
    activeFilter === 'All Projects'
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h2 className={styles.title}>Our Portfolio</h2>
          <p className={styles.description}>
            Explore our successful projects that showcase our expertise in
            delivering innovative solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={styles.filters}>
          {['All Projects', 'Web Applications', 'Mobile Apps', 'Enterprise Solutions'].map((filter) => (
            <button
              key={filter}
              className={`${styles.filterButton} ${
                activeFilter === filter ? styles.active : ''
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className={styles.grid}>
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`${styles.projectCard} ${styles[project.color] || ''}`}
            >
              <h3 className={styles.projectTitle}>{project.name}</h3>
              <div className={styles.cardOverlay}>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <a href="#" className={styles.caseStudyLink}>
                  View Case Study →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className={styles.viewMore}>
          <button className={styles.viewMoreButton}>View More Projects</button>
        </div>
      </div>
    </section>
  );
}
