'use client';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Testimonials from '../../components/Testimonials/Testimonials';
import QuoteForm from '../../components/QuoteForm/QuoteForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';
// import SplashCursor from '../../components/Cursor/SplashCursor';
import Blog from '../../components/Blog/Blog'
import styles from './page.module.css';
import Link from 'next/link';
export default function Home() {

    const technologies = [
        { name: 'IoT', description: 'Enabling connected manufacturing with smart devices and real-time data monitoring.' },
        { name: 'ERP Systems', description: 'Streamlining manufacturing processes with integrated enterprise solutions.' },
        { name: 'AWS', description: 'Scalable cloud infrastructure for managing manufacturing workflows.' },
        { name: 'AI & Machine Learning', description: 'Enhancing predictive maintenance and quality control.' },
        { name: 'Robotic Automation', description: 'Improving precision and efficiency in assembly lines.' }
    ];

    const features = [
        {
          title: 'Smart Factory Solutions',
          description: 'Real-time monitoring and automation of manufacturing processes for increased efficiency.'
        },
        {
          title: 'Supply Chain Optimization',
          description: 'Streamlined supply chain management with visibility and control over operations.'
        },
        {
          title: 'Predictive Maintenance',
          description: 'Proactive identification of potential equipment failures to minimize downtime.'
        },
        {
          title: 'Quality Management',
          description: 'Integrated quality control systems to ensure product consistency and compliance.'
        }
    ];
    return (
        <div>

            <main>
                <Navbar />
                {/* <SplashCursor /> */}

                <div className={styles.container}>
                    {/* Hero Section */}
                    <section className={styles.hero}>
                        <div className={styles.heroContent}>
                            <h1>Manufacturing Solutions</h1>
                            <h2>Empowering the Manufacturing Sector with Advanced Technology</h2>
                            <p>Transform your manufacturing operations with innovative solutions designed for the modern factory.</p>
                            <Link href='/GetaQuote'>
                                <button className={styles.primaryButton}>Schedule a Demo</button>
                            </Link>
                        </div>
                    </section>

                    {/* Overview Section */}
                    <section className={styles.overview}>
                        <div className={styles.sectionContainer}>
                            <h2>Revolutionizing Manufacturing</h2>
                            <p>
                                We provide cutting-edge IT solutions for manufacturers to enhance operational efficiency, 
                                improve product quality, and reduce downtime through automation and data-driven insights.
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
                                    <h3>Increased Efficiency</h3>
                                    <p>Automation and real-time insights that boost production rates and reduce waste.</p>
                                </div>
                                <div className={styles.benefitItem}>
                                    <h3>Cost Reduction</h3>
                                    <p>Optimize resource utilization and reduce operational costs significantly.</p>
                                </div>
                                <div className={styles.benefitItem}>
                                    <h3>Scalability</h3>
                                    <p>Solutions that grow alongside your manufacturing demands.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className={styles.contact}>
                        <div className={styles.sectionContainer}>
                            <h2>Ready to Transform Your Manufacturing Operations?</h2>
                            <p>Contact our experts to discuss your manufacturing challenges and explore customized solutions.</p>
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
