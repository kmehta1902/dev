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
        { name: 'Moodle', description: 'Open-source platform for creating custom learning experiences.' },
        { name: 'React', description: 'Building responsive user interfaces for educational platforms.' },
        { name: 'Firebase', description: 'Scalable backend for real-time data syncing in education apps.' },
        { name: 'AWS', description: 'Cloud hosting for secure and reliable e-learning applications.' },
        { name: 'Docker', description: 'Containerization for streamlined and consistent deployments.' }
    ];

    const features = [
        {
          title: 'Learning Management Systems',
          description: 'Centralized platforms for managing online courses, assessments, and student tracking.'
        },
        {
          title: 'Student Engagement Tools',
          description: 'Interactive tools like quizzes, forums, and virtual classrooms for enhanced learning.'
        },
        {
          title: 'Content Delivery',
          description: 'Seamless streaming and sharing of educational videos and documents.'
        },
        {
          title: 'Performance Analytics',
          description: 'Data-driven insights into student progress and performance metrics.'
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
                            <h1>Education Solutions</h1>
                            <h2>Empowering Learning Through Technology</h2>
                            <p>Transforming education with cutting-edge technology and digital solutions.</p>
                            <Link href='/GetaQuote'>
                                <button className={styles.primaryButton}>Schedule a Demo</button>
                            </Link>
                        </div>
                    </section>

                    {/* Overview Section */}
                    <section className={styles.overview}>
                        <div className={styles.sectionContainer}>
                            <h2>Revolutionizing Education</h2>
                            <p>
                                We provide innovative IT solutions tailored for schools, universities, and online 
                                education platforms. Our technologies enhance learning experiences and simplify 
                                educational management.
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
                                    <h3>Personalized Learning</h3>
                                    <p>Adapting content and pace to individual student needs.</p>
                                </div>
                                <div className={styles.benefitItem}>
                                    <h3>Accessibility</h3>
                                    <p>Enabling learning anytime, anywhere on any device.</p>
                                </div>
                                <div className={styles.benefitItem}>
                                    <h3>Cost Efficiency</h3>
                                    <p>Reducing operational expenses with cloud-based solutions.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className={styles.contact}>
                        <div className={styles.sectionContainer}>
                            <h2>Ready to Transform Education?</h2>
                            <p>Get in touch with our experts to discuss your requirements.</p>
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
