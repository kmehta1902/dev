'use client';
import { useState } from 'react';
import styles from './Portfolio.module.css';
import { 
  ShoppingCart, 
  Stethoscope, 
  Users, 
  LineChart, 
  Gauge, 
  Building2 
} from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  
  const projects = [
    {
      name: 'E-Commerce Platform',
      type: 'Web Applications',
      color: 'blue',
      description: 'A full-featured online shopping platform with advanced inventory management',
      Icon: ShoppingCart
    },
    {
      name: 'Healthcare App',
      type: 'Mobile Apps',
      color: 'purple',
      description: 'A comprehensive app designed to improve patient care and hospital efficiency',
      Icon: Stethoscope
    },
    {
      name: 'CRM System',
      type: 'Enterprise Solutions',
      color: 'pink',
      description: 'An advanced customer relationship management system for businesses',
      Icon: Users
    },
    {
      name: 'Fintech Solution',
      type: 'Enterprise Solutions',
      color: 'green',
      description: 'A secure and scalable platform for modern financial services',
      Icon: LineChart
    },
    {
      name: 'IoT Dashboard',
      type: 'Web Applications',
      color: 'orange',
      description: 'A dashboard for monitoring IoT devices with real-time analytics',
      Icon: Gauge
    },
    {
      name: 'ERP System',
      type: 'Enterprise Solutions',
      color: 'indigo',
      description: 'A robust enterprise resource planning system for large-scale businesses',
      Icon: Building2
    },
  ];

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
          {filteredProjects.map((project, index) => {
            const Icon = project.Icon;
            return (
              <div
                key={index}
                className={`${styles.projectCard} ${styles[project.color] || ''}`}
              >
                <div className={styles.cardHeader}>
                  <Icon className={styles.projectIcon} size={24} />
                  <h3 className={styles.projectTitle}>{project.name}</h3>
                </div>
                <div className={styles.cardOverlay}>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  <a href="#" className={styles.caseStudyLink}>
                    View Case Study →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Button */}
        <div className={styles.viewMore}>
          <button className={styles.viewMoreButton}>View More Projects</button>
        </div>
      </div>
    </section>
  );
}