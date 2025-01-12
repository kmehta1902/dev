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

export default function Home() {

    return (
        <div>

            <main>
                <Navbar />
                {/* <SplashCursor /> */}


                <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Our Leadership</h1>
        <p>Meet the visionaries driving innovation and excellence at DevionX Technologies</p>
      </section>

      {/* Leadership Philosophy */}
      <section className={styles.philosophy}>
        <h2>Leadership Philosophy</h2>
        <div className={styles.philosophyGrid}>
          <div className={styles.philosophyCard}>
            <h3>Vision-Driven</h3>
            <p>Our leaders maintain a clear vision of the future, anticipating industry trends and steering our company towards continued innovation and growth.</p>
          </div>
          <div className={styles.philosophyCard}>
            <h3>People-First</h3>
            <p>We believe in nurturing talent, fostering collaboration, and creating an environment where creativity and excellence thrive.</p>
          </div>
          <div className={styles.philosophyCard}>
            <h3>Innovation-Focused</h3>
            <p>Our leadership team consistently pushes boundaries, embracing new technologies and methodologies to deliver cutting-edge solutions.</p>
          </div>
        </div>
      </section>

      {/* Executive Leaders Section */}
      <section className={styles.executives}>
        <h2>Executive Team</h2>
        
        {/* CEO Profile */}
        <div className={styles.leaderProfile}>
          <div className={styles.leaderImage}>
            <img src="/AJ.png" alt="CEO placeholder" />
          </div>
          <div className={styles.leaderInfo}>
            <h3>Ajay Bade</h3>
            <h4>Chief Executive Officer</h4>
            <p className={styles.leaderBio}>
              With over 20 years of experience in technology and innovation, Sarah has been instrumental in transforming DevionX Technologies into a global leader in digital solutions. Her vision for technological advancement and commitment to excellence has driven the company's remarkable growth since its founding.
            </p>
            <div className={styles.achievements}>
              <h5>Key Achievements</h5>
              <ul>
                <li>Led company growth from startup to industry leader</li>
                <li>Pioneered AI integration across service offerings</li>
                <li>Named "Tech CEO of the Year" in 2023</li>
                <li>Established global partnerships with Fortune 500 companies</li>
              </ul>
            </div>
            <div className={styles.expertise}>
              <h5>Areas of Expertise</h5>
              <div className={styles.tags}>
                <span>Strategic Leadership</span>
                <span>Digital Transformation</span>
                <span>AI Innovation</span>
                <span>Global Operations</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTO Profile */}
        <div className={styles.leaderProfile}>
          <div className={styles.leaderImage}>
            <img src="/SHRI.jpg" alt="CTO placeholder" />
          </div>
          <div className={styles.leaderInfo}>
            <h3>Shrikrushna Patil</h3>
            <h4>Chief Technology Officer</h4>
            <p className={styles.leaderBio}>
              David brings deep technical expertise and innovative thinking to DevionX Technologies. His background in software architecture and machine learning has been crucial in developing our cutting-edge solutions and maintaining our technological competitive edge.
            </p>
            <div className={styles.achievements}>
              <h5>Key Achievements</h5>
              <ul>
                <li>Developed proprietary AI-driven development framework</li>
                <li>Led the successful delivery of 200+ enterprise projects</li>
                <li>Published multiple patents in AI and ML</li>
                <li>Regular speaker at major tech conferences</li>
              </ul>
            </div>
            <div className={styles.expertise}>
              <h5>Areas of Expertise</h5>
              <div className={styles.tags}>
                <span>AI/ML Architecture</span>
                <span>Cloud Solutions</span>
                <span>System Design</span>
                <span>Tech Strategy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Principles */}
      <section className={styles.principles}>
        <h2>Our Leadership Principles</h2>
        <div className={styles.principlesGrid}>
          <div className={styles.principleCard}>
            <h3>Customer Obsession</h3>
            <p>We start with the customer and work backwards, always striving to earn and maintain customer trust.</p>
          </div>
          <div className={styles.principleCard}>
            <h3>Ownership</h3>
            <p>Leaders think long-term and don't sacrifice long-term value for short-term results.</p>
          </div>
          <div className={styles.principleCard}>
            <h3>Learn and Be Curious</h3>
            <p>Leaders are never done learning and always seek to improve themselves.</p>
          </div>
          <div className={styles.principleCard}>
            <h3>Deliver Results</h3>
            <p>We focus on key inputs and deliver with the right quality and in a timely fashion.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <h2>Connect With Our Leadership</h2>
        <p>Interested in discussing partnership opportunities or learning more about our leadership team?</p>
        <button className={styles.contactButton}>Get in Touch</button>
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
