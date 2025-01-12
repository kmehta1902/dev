'use client';
import { useEffect } from 'react';
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
                <SplashCursor />


                <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Streamline Business Operations with Modern ERP</h1>
          <p>Unify your business processes with our comprehensive enterprise resource planning solution</p>
          <div className={styles.ctaButtons}>
                <Link href="/GetaQuote">
            <button className={styles.primaryBtn}>
                Request Demo
            </button>
                </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image src="/erp.jpg" alt="ERP Dashboard" width={600} height={400} />
        </div>
      </section>

      {/* Overview Section */}
      <section className={styles.overview}>
        <h2>Your Complete Enterprise Management Solution</h2>
        <p>Our ERP platform helps businesses streamline operations, automate workflows, and make data-driven decisions 
           with real-time insights across finance, inventory, HR, and supply chain management.</p>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>Key Features</h2>
        <div className={styles.featureCards}>
          <div className={styles.featureCard}>
            <h3>Financial Management</h3>
            <p>Streamline accounting, budgeting, and financial reporting with automated workflows</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Inventory Control</h3>
            <p>Track stock levels, manage warehouses, and optimize supply chain operations</p>
          </div>
          <div className={styles.featureCard}>
            <h3>HR Management</h3>
            <p>Handle payroll, recruitment, and employee data with comprehensive HR tools</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Business Intelligence</h3>
            <p>Generate insights with advanced analytics and customizable reporting</p>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className={styles.integration}>
        <h2>Business Tools Integration</h2>
        <div className={styles.integrationContent}>
          <div className={styles.integrationText}>
            <p>Seamlessly integrate with essential business tools:</p>
            <div className={styles.integrationGrid}>
              <div className={styles.paymentPartner}>
                <Image src="/salesforce.png" alt="Salesforce" width={120} height={60} />
                <div className={styles.partnerDetails}>
                  <h4>Salesforce</h4>
                  <ul>
                    <li>CRM Integration</li>
                    <li>Lead Management</li>
                    <li>Sales Analytics</li>
                  </ul>
                </div>
              </div>
              <div className={styles.paymentPartner}>
                <Image src="/quickbooks.png" alt="QuickBooks" width={120} height={60} />
                <div className={styles.partnerDetails}>
                  <h4>QuickBooks</h4>
                  <ul>
                    <li>Financial Sync</li>
                    <li>Tax Management</li>
                    <li>Expense Tracking</li>
                  </ul>
                </div>
              </div>
              <div className={styles.paymentPartner}>
                <Image src="/shopify.png" alt="Shopify" width={120} height={60} />
                <div className={styles.partnerDetails}>
                  <h4>Shopify</h4>
                  <ul>
                    <li>Order Management</li>
                    <li>Inventory Sync</li>
                    <li>E-commerce Integration</li>
                  </ul>
                </div>
              </div>
              <div className={styles.paymentPartner}>
                <Image src="/workday.png" alt="Workday" width={120} height={60} />
                <div className={styles.partnerDetails}>
                  <h4>Workday</h4>
                  <ul>
                    <li>HR Integration</li>
                    <li>Payroll Sync</li>
                    <li>Employee Management</li>
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
                Role-based Access Control
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                API Integration Support
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Business Analytics
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Data Migration Tools
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Multi-currency Support
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Custom Workflows
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <h2>Why Choose Our ERP</h2>
        <div className={styles.benefitItems}>
          <div className={styles.benefitItem}>
            <h3>Increase Efficiency</h3>
            <p>Automate routine tasks and streamline operations across departments</p>
          </div>
          <div className={styles.benefitItem}>
            <h3>Better Decisions</h3>
            <p>Make informed choices with real-time data and comprehensive analytics</p>
          </div>
          <div className={styles.benefitItem}>
            <h3>Reduce Costs</h3>
            <p>Optimize resource allocation and minimize operational inefficiencies</p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className={styles.technologies}>
        <h2>Built with Enterprise-Grade Technology Stack</h2>
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
        <h2>Ready to Transform Your Business?</h2>
        <p>Join thousands of businesses already optimizing their operations with our ERP platform</p>
        <div className={styles.ctaButtonsAlt}>
          <Link href="/GetaQuote">
            <button className={styles.primaryBtn}>
              Request Demo
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
