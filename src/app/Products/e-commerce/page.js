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
                {/* <SplashCursor /> */}

                <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Launch Your Online Store with Confidence</h1>
          <p>Build and grow your e-commerce business with our all-in-one platform for modern retail</p>
          <div className={styles.ctaButtons}>
                <Link href="/GetStarted">
            <button className={styles.primaryBtn}>
                Start Selling
            </button>
                </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image src="/ecommerce.jpg" alt="Store Dashboard" width={600} height={400} />
        </div>
      </section>

      {/* Overview Section */}
      <section className={styles.overview}>
        <h2>Your Complete E-commerce Solution</h2>
        <p>Our platform provides everything you need to sell online - from powerful store builder and inventory management 
           to secure payments and marketing tools, all designed to help you scale your business.</p>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>Key Features</h2>
        <div className={styles.featureCards}>
          <div className={styles.featureCard}>
            <h3>Store Builder</h3>
            <p>Create beautiful online stores with drag-and-drop tools and mobile-optimized themes</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Order Management</h3>
            <p>Process orders, manage fulfillment, and handle returns with automated workflows</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Payment Processing</h3>
            <p>Accept payments worldwide with secure checkout and multiple payment options</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Marketing Tools</h3>
            <p>Grow your sales with built-in SEO, email marketing, and social media integration</p>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className={styles.integration}>
        <h2>E-commerce Integrations</h2>
        <div className={styles.integrationContent}>
          <div className={styles.integrationText}>
            <p>Seamlessly integrate with essential e-commerce tools:</p>
            <div className={styles.integrationGrid}>
              <div className={styles.paymentPartner}>
                <Image src="/stripe.png" alt="Stripe" width={120} height={60} />
                <div className={styles.partnerDetails}>
                  <h4>Stripe</h4>
                  <ul>
                    <li>Payment Processing</li>
                    <li>Subscription Billing</li>
                    <li>Fraud Protection</li>
                  </ul>
                </div>
              </div>
              <div className={styles.paymentPartner}>
                <Image src="/meta.png" alt="Meta" width={120} height={60} />
                <div className={styles.partnerDetails}>
                  <h4>Meta</h4>
                  <ul>
                    <li>Facebook Shop</li>
                    <li>Instagram Shopping</li>
                    <li>Ad Integration</li>
                  </ul>
                </div>
              </div>
              <div className={styles.paymentPartner}>
                <Image src="/shippo.png" alt="Shippo" width={120} height={60} />
                <div className={styles.partnerDetails}>
                  <h4>Shippo</h4>
                  <ul>
                    <li>Shipping Labels</li>
                    <li>Rate Comparison</li>
                    <li>Order Tracking</li>
                  </ul>
                </div>
              </div>
              <div className={styles.paymentPartner}>
                <Image src="/mailchimp.png" alt="Mailchimp" width={120} height={60} />
                <div className={styles.partnerDetails}>
                  <h4>Mailchimp</h4>
                  <ul>
                    <li>Email Marketing</li>
                    <li>Automation</li>
                    <li>Customer Segments</li>
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
                Multi-channel Selling
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Inventory Sync
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Analytics Dashboard
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Abandoned Cart Recovery
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Customer Reviews
              </li>
              <li>
                <span className={styles.checkmark}>✓</span>
                Mobile App Access
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <h2>Why Choose Our Platform</h2>
        <div className={styles.benefitItems}>
          <div className={styles.benefitItem}>
            <h3>Sell Anywhere</h3>
            <p>Reach customers across multiple channels - web, mobile, social, and marketplaces</p>
          </div>
          <div className={styles.benefitItem}>
            <h3>Grow Faster</h3>
            <p>Scale your business with powerful marketing tools and automation</p>
          </div>
          <div className={styles.benefitItem}>
            <h3>Stay Secure</h3>
            <p>Keep your store and customer data protected with enterprise-grade security</p>
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
        <h2>Ready to Start Selling Online?</h2>
        <p>Join thousands of successful businesses already growing with our e-commerce platform</p>
        <div className={styles.ctaButtonsAlt}>
          <Link href="/GetStarted">
            <button className={styles.primaryBtn}>
              Start Selling
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
