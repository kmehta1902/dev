'use client';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Testimonials from '../../components/Testimonials/Testimonials';
import QuoteForm from '../../components/QuoteForm/QuoteForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';
import SplashCursor from '../../components/Cursor/SplashCursor';
import Blog from '../../components/Blog/Blog'
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

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
          <h1>Transform Your Business with Modern CRM</h1>
          <p>Streamline customer relationships, boost sales, and grow your business with our powerful CRM solution</p>
          <div className={styles.ctaButtons}>
                <Link href="/GetaQuote">
            <button className={styles.primaryBtn}>
                Get Started Free
                
                </button>
                </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image src="/crm-hero.png" alt="CRM Dashboard" width={600} height={400} />
        </div>
      </section>

      {/* Overview Section */}
      <section className={styles.overview}>
        <h2>Your All-in-One Customer Management Solution</h2>
        <p>Our CRM platform helps businesses of all sizes manage customer relationships efficiently, 
           track sales pipelines, and make data-driven decisions with powerful analytics.</p>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>Key Features</h2>
        <div className={styles.featureCards}>
          <div className={styles.featureCard}>
            <h3>Contact Management</h3>
            <p>Centralize your customer data and communication history in one place</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Sales Pipeline</h3>
            <p>Track and manage deals through customizable sales stages</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Analytics Dashboard</h3>
            <p>Get real-time insights with customizable reports and visualizations</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Task Automation</h3>
            <p>Automate routine tasks and focus on what matters most</p>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      {/* Integration Section */}
<section className={styles.integration}>
  <h2>Payment Integration Partners</h2>
  <div className={styles.integrationContent}>
    <div className={styles.integrationText}>
      <p>Seamlessly accept payments with trusted payment gateways:</p>
      <div className={styles.integrationGrid}>
        <div className={styles.paymentPartner}>
          <Image src="/razorpay.png" alt="Razorpay" width={120} height={60} />
          <div className={styles.partnerDetails}>
            <h4>Razorpay</h4>
            <ul>
              <li>UPI Payments</li>
              <li>Credit/Debit Cards</li>
              <li>Net Banking</li>
            </ul>
          </div>
        </div>
        <div className={styles.paymentPartner}>
          <Image src="/paytm.png" alt="Paytm" width={120} height={60} />
          <div className={styles.partnerDetails}>
            <h4>Paytm</h4>
            <ul>
              <li>Paytm Wallet</li>
              <li>UPI Payments</li>
              <li>Payment Links</li>
            </ul>
          </div>
        </div>
        <div className={styles.paymentPartner}>
          <Image src="/stripe.png" alt="Stripe" width={120} height={60} />
          <div className={styles.partnerDetails}>
            <h4>Stripe</h4>
            <ul>
              <li>International Payments</li>
              <li>Subscription Billing</li>
              <li>Payment Links</li>
            </ul>
          </div>
        </div>
        <div className={styles.paymentPartner}>
          <Image src="/phonepe.png" alt="PhonePe" width={120} height={60} />
          <div className={styles.partnerDetails}>
            <h4>PhonePe</h4>
            <ul>
              <li>UPI Payments</li>
              <li>QR Payments</li>
              <li>Mobile Wallet</li>
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
          Real-time Payment Status Updates
        </li>
        <li>
          <span className={styles.checkmark}>✓</span>
          Automated Reconciliation
        </li>
        <li>
          <span className={styles.checkmark}>✓</span>
          Detailed Transaction Analytics
        </li>
        <li>
          <span className={styles.checkmark}>✓</span>
          Secure Payment Processing
        </li>
        <li>
          <span className={styles.checkmark}>✓</span>
          Multiple Currency Support
        </li>
        <li>
          <span className={styles.checkmark}>✓</span>
          Custom Payment Links
        </li>
      </ul>
    </div>
  </div>
</section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <h2>Why Choose Our CRM</h2>
        <div className={styles.benefitItems}>
          <div className={styles.benefitItem}>
            <h3>Increase Sales</h3>
            <p>Convert more leads and close deals faster with automated sales processes</p>
          </div>
          <div className={styles.benefitItem}>
            <h3>Save Time</h3>
            <p>Reduce manual work with smart automation and integrated workflows</p>
          </div>
          <div className={styles.benefitItem}>
            <h3>Better Insights</h3>
            <p>Make informed decisions with advanced analytics and reporting</p>
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
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of businesses already using our CRM solution</p>
        <div className={styles.ctaButtonsAlt}>
        <Link href="/GetaQuote">
          <button className={styles.primaryBtn}>
            Get Started for Free</button>
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


