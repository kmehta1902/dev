'use client';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Testimonials from '../../components/Testimonials/Testimonials';
import QuoteForm from '../../components/QuoteForm/QuoteForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';
// import SplashCursor from '../../components/Cursor/SplashCursor';
import Blog from '../../components/Blog/Blog'

import styles from './page.module.css'
import Link from 'next/link';
export default function Home() {

    const technologies = [
        { name: 'Node.js', description: 'Backend development for scalable financial applications' },
        { name: 'React', description: 'Building responsive user interfaces for banking platforms' },
        { name: 'MongoDB', description: 'Secure and flexible database solutions for financial data' },
        { name: 'AWS', description: 'Cloud infrastructure for banking applications' },
        { name: 'Docker', description: 'Containerization for consistent deployment' }
      ];
    
      const features = [
        {
          title: 'Digital Banking Solutions',
          description: 'Modern banking platforms with secure transaction processing and real-time analytics'
        },
        {
          title: 'Insurance Management',
          description: 'End-to-end insurance processing systems with automated claims handling'
        },
        {
          title: 'Investment Platforms',
          description: 'Advanced trading platforms with real-time market data integration'
        },
        {
          title: 'Regulatory Compliance',
          description: 'Built-in compliance checks and reporting for financial regulations'
        }
      ];

    return (
        <div>
 <Navbar />
            <main>
               
                {/* <SplashCursor /> */}

                <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>BFSI Solutions</h1>
          <h2>Banking, Financial Services & Insurance</h2>
          <p>Transforming financial services with cutting-edge technology solutions</p>
          <Link href='/GetaQuote'>
          <button className={styles.primaryButton}>Schedule a Demo</button>
          </Link>
        </div>
      </section>

      {/* Overview Section */}
      <section className={styles.overview}>
        <div className={styles.sectionContainer}>
          <h2>Revolutionizing Financial Services</h2>
          <p>
            We deliver innovative IT solutions tailored for banks, financial institutions,
            and insurance companies. Our expertise helps organizations streamline operations,
            enhance security, and deliver superior customer experiences.
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className={styles.features}>
        <div className={styles.sectionContainer}>
          <h2>Key Features</h2>
          <div className={styles.featureGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className={styles.technologies}>
        <div className={styles.sectionContainer}>
          <h2>Technologies We Use</h2>
          <div className={styles.techGrid}>
            {technologies.map((tech, index) => (
              <div key={index} className={styles.techCard}>
                <h3>{tech.name}</h3>
                <p>{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <div className={styles.sectionContainer}>
          <h2>Benefits</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <h3>Enhanced Security</h3>
              <p>State-of-the-art security measures to protect sensitive financial data</p>
            </div>
            <div className={styles.benefitItem}>
              <h3>Scalability</h3>
              <p>Solutions that grow with your business needs</p>
            </div>
            <div className={styles.benefitItem}>
              <h3>Cost Efficiency</h3>
              <p>Optimize operations and reduce operational costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <div className={styles.sectionContainer}>
          <h2>Ready to Transform Your Financial Services?</h2>
          <p>Get in touch with our experts to discuss your requirements</p>
          <Link href='/GetaQuote'>
          <button className={styles.secondaryButton}>Contact Us</button>
          </Link>
        </div>
      </section>
    </div>

                <Testimonials />
                <Blog />
                <QuoteForm />
                <ContactForm />
            </main>

            <Footer />
        </div>
    );
}
