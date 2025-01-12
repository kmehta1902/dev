'use client';
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Testimonials from '../../components/Testimonials/Testimonials';
import QuoteForm from '../../components/QuoteForm/QuoteForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';
import SplashCursor from '../../components/Cursor/SplashCursor';
import Blog from '../../components/Blog/Blog'
import styles from './page.module.css'
import Link from 'next/link';
import Image from 'next/image';
export default function Home() {

    return (
        <div>

            <section>
                <Navbar />
                {/* <SplashCursor /> */}

                <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Empower Learning with Modern LMS</h1>
          <p>Create, deliver, and track online courses with our comprehensive learning management system</p>
          <div className={styles.ctaButtons}>
                <Link href="/GetaQuote">
            <button className={styles.primaryBtn}>
                Start Free Trial
            </button>
                </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image src="/lms-hero.jpg" alt="LMS Dashboard" width={600} height={400} />
        </div>
      </section>

      {/* Overview Section */}
      <section className={styles.overview}>
        <h2>Your Complete Learning Management Solution</h2>
        <p>Our LMS platform helps educators, institutions, and businesses create engaging learning experiences, 
           manage courses effectively, and track learner progress with comprehensive analytics.</p>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>Key Features</h2>
        <div className={styles.featureCards}>
          <div className={styles.featureCard}>
            <h3>Course Management</h3>
            <p>Create and organize courses with rich multimedia content and interactive elements</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Student Progress</h3>
            <p>Track learning paths and monitor student engagement in real-time</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Assessment Tools</h3>
            <p>Create quizzes, assignments, and grade submissions with automated marking</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Live Sessions</h3>
            <p>Conduct virtual classrooms with integrated video conferencing tools</p>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className={styles.integration}>
        <h2>Learning Tools Integration</h2>
        <div className={styles.integrationContent}>
          <div className={styles.integrationText}>
            <p>Seamlessly integrate with popular learning tools:</p>
            <div className={styles.integrationGrid}>
              <div className={styles.paymentPartner}>
                <Image src="/zoom.png" alt="Zoom" width={120} height={60} />
                <div className={styles.partnerDetails}>
                  <h4>Zoom</h4>
                  <ul>
                    <li>Live Classes</li>
                    <li>Webinars</li>
                    <li>Office Hours</li>
                  </ul>
                </div>
              </div>
              <div className={styles.paymentPartner}>
                <Image src="/google-classroom.png" alt="Google Classroom" width={120} height={60} />
                <div className={styles.partnerDetails}>
                  <h4>Google Classroom</h4>
                  <ul>
                    <li>Assignment Sync</li>
                    <li>Calendar Integration</li>
                    <li>Document Sharing</li>
                  </ul>
                </div>
              </div>
              <div className={styles.paymentPartner}>
                <Image src="/moodle.png" alt="Moodle" width={120} height={60} />
                <div className={styles.partnerDetails}>
                  <h4>Moodle</h4>
                  <ul>
                    <li>Content Migration</li>
                    <li>Grade Transfer</li>
                    <li>Course Import</li>
                  </ul>
                </div>
              </div>
              <div className={styles.paymentPartner}>
                <Image src="/canvas.png" alt="Canvas" width={120} height={60} />
                <div className={styles.partnerDetails}>
                  <h4>Canvas</h4>
                  <ul>
                    <li>LTI Integration</li>
                    <li>Resource Sharing</li>
                    <li>Assessment Sync</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.integrationFeatures}>
            <h3>Features Included</h3>
            <ul className={styles.featuresList}>
              <li>
                <span className={styles.checkmark}>✓</span>
                Single Sign-On (SSO)
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                API Integration Support
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Learning Analytics
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Content Migration Tools
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Multi-platform Support
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Custom Branding Options
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <h2>Why Choose Our LMS</h2>
        <div className={styles.benefitItems}>
          <div className={styles.benefitItem}>
            <h3>Enhance Learning</h3>
            <p>Deliver engaging content and interactive experiences that improve learning outcomes</p>
          </div>
          <div className={styles.benefitItem}>
            <h3>Save Time</h3>
            <p>Automate administrative tasks and focus more on teaching and content creation</p>
          </div>
          <div className={styles.benefitItem}>
            <h3>Track Progress</h3>
            <p>Monitor student engagement and performance with detailed analytics</p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className={styles.technologies}>
        <h2>Built with Modern Technology Stack</h2>
        <div className={styles.techStack}>
          <div className={styles.techItem}>
            <Image src="/api/placeholder/80/80" alt="Node.js" width={80} height={80} />
            <span>Node.js</span>
          </div>
          <div className={styles.techItem}>
            <Image src="/api/placeholder/80/80" alt="Next.js" width={80} height={80} />
            <span>Next.js</span>
          </div>
          <div className={styles.techItem}>
            <Image src="/api/placeholder/80/80" alt="React" width={80} height={80} />
            <span>React</span>
          </div>
          <div className={styles.techItem}>
            <Image src="/api/placeholder/80/80" alt="AWS" width={80} height={80} />
            <span>AWS</span>
          </div>
          <div className={styles.techItem}>
            <Image src="/api/placeholder/80/80" alt="Docker" width={80} height={80} />
            <span>Docker</span>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.finalCta}>
        <h2>Ready to Transform Learning?</h2>
        <p>Join thousands of educators and institutions already using our LMS platform</p>
        <div className={styles.ctaButtonsAlt}>
          <Link href="/GetaQuote">
            <button className={styles.primaryBtn}>
              Start Free Trial
            </button>
          </Link>
        </div>
      </section>
    </main>

                <Testimonials />
                <Blog />
                <QuoteForm />
                <ContactForm />
            </section>

            <Footer />
        </div>
    );
}
