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
import { Shield, Zap, Users, Building2 } from 'lucide-react';
export default function Home() {
    const values = [
        {
          icon: <Shield className={styles.icon} />,
          title: "Integrity",
          description: "Maintaining highest ethical standards in all our dealings",
          iconWrapper: styles.iconBlue
        },
        {
          icon: <Zap className={styles.icon} />,
          title: "Innovation",
          description: "Continuously pushing boundaries with creative solutions",
          iconWrapper: styles.iconPurple
        },
        {
          icon: <Users className={styles.icon} />,
          title: "Collaboration",
          description: "Working together to achieve exceptional results",
          iconWrapper: styles.iconGreen
        },
        {
          icon: <Building2 className={styles.icon} />,
          title: "Excellence",
          description: "Delivering outstanding quality in everything we do",
          iconWrapper: styles.iconRed
        }
      ];
    
    return (

        
        <div>
     <Navbar />
            <main>
           
                 {/* <SplashCursor />  */}


                 <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>DevionX Technologies</h1>
        <p>Revolutionizing the digital landscape through innovative solutions</p>
        <div className={styles.heroStats}>
          <div className={styles.heroStat}>
            <span>10+</span>
            <p>Years Experience</p>
          </div>
          <div className={styles.heroStat}>
            <span>95%</span>
            <p>Client Satisfaction</p>
          </div>
          <div className={styles.heroStat}>
            <span>24/7</span>
            <p>Support Available</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Our Story Section */}
        <section className={styles.section}>
          <h2>Our Story</h2>
          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <p>
                Founded with a vision to revolutionize the digital landscape, DevionX Technologies has
                emerged as a leading force in software development and technological innovation. Our
                journey began with a commitment to delivering exceptional value through cutting-edge
                solutions.
              </p>
              <p>
                Since our inception, we've partnered with businesses across various industries,
                helping them navigate the complexities of digital transformation. Our success stories
                span from innovative startups to enterprise-level organizations.
              </p>
            </div>
            <div className={styles.timelineContainer}>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <h4>2015</h4>
                  <p>Company Founded</p>
                </div>
                <div className={styles.timelineItem}>
                  <h4>2018</h4>
                  <p>Global Expansion</p>
                </div>
                <div className={styles.timelineItem}>
                  <h4>2020</h4>
                  <p>AI Division Launch</p>
                </div>
                <div className={styles.timelineItem}>
                  <h4>2023</h4>
                  <p>Industry Leader</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className={styles.section}>
          <h2>Our Mission</h2>
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <h3>Empowerment</h3>
              <p>
                To empower businesses with innovative digital solutions that drive growth, efficiency,
                and success in the modern technological landscape.
              </p>
            </div>
            <div className={styles.missionCard}>
              <h3>Innovation</h3>
              <p>
                We strive to be at the forefront of technological advancement, particularly in AI
                and ML applications.
              </p>
            </div>
            <div className={styles.missionCard}>
              <h3>Excellence</h3>
              <p>
                Delivering outstanding results through dedication, expertise, and continuous improvement.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section with More Context */}
        <section className={styles.statsSection}>
          <h2>Our Impact</h2>
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <h3>200+</h3>
              <p>Projects Completed</p>
              <span className={styles.statDetail}>Across 15 Countries</span>
            </div>
            <div className={styles.statCard}>
              <h3>50+</h3>
              <p>Expert Team Members</p>
              <span className={styles.statDetail}>Specialized in Various Technologies</span>
            </div>
            <div className={styles.statCard}>
              <h3>98%</h3>
              <p>Project Success Rate</p>
              <span className={styles.statDetail}>On-time and Within Budget</span>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className={styles.services}>
          <h2>Our Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Custom Software Development</h3>
              <p>Tailored solutions for your unique business needs</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>AI & Machine Learning</h3>
              <p>Intelligent solutions for complex problems</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Cloud Solutions</h3>
              <p>Scalable and secure cloud infrastructure</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Mobile Development</h3>
              <p>Native and cross-platform mobile applications</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className={styles.whyChooseUs}>
          <h2>Why Choose Us</h2>
          <div className={styles.features}>
            <div className={styles.featureCard}>
              <div className={styles.iconBlue}>✓</div>
              <div>
                <h3>Expert Team</h3>
                <p>Highly skilled professionals with extensive industry experience</p>
                <ul className={styles.featureList}>
                  <li>Certified Professionals</li>
                  <li>Continuous Training</li>
                  <li>Diverse Skill Sets</li>
                </ul>
              </div>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.iconPurple}>⚡</div>
              <div>
                <h3>Innovation First</h3>
                <p>Cutting-edge solutions using the latest technologies</p>
                <ul className={styles.featureList}>
                  <li>Latest Technologies</li>
                  <li>Research-Driven</li>
                  <li>Future-Proof Solutions</li>
                </ul>
              </div>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.iconGreen}>⏰</div>
              <div>
                <h3>Timely Delivery</h3>
                <p>Commitment to meeting deadlines without compromising quality</p>
                <ul className={styles.featureList}>
                  <li>Agile Methodology</li>
                  <li>Regular Updates</li>
                  <li>Transparent Process</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <h2 className={styles.heading}>Our Core Values</h2>
      
      <div className={styles.grid}>
        {values.map((value, index) => (
          <div key={index} className={styles.card}>
            <div className={`${styles.iconWrapper} ${value.iconWrapper}`}>
              {value.icon}
            </div>
            <h3 className={styles.title}>{value.title}</h3>
            <p className={styles.description}>{value.description}</p>
          </div>
        ))}
      </div>
        {/* Vision Section */}
        <section className={styles.vision}>
          <h2>Our Vision</h2>
          <p>
            To be the global leader in delivering innovative technological solutions that shape the
            future of digital transformation and empower businesses worldwide.
          </p>
          <div className={styles.visionGrid}>
            <div className={styles.visionCard}>
              <h3>Global Impact</h3>
              <p>Creating solutions that transcend geographical boundaries</p>
            </div>
            <div className={styles.visionCard}>
              <h3>Sustainable Growth</h3>
              <p>Building for the future with sustainable practices</p>
            </div>
          </div>
          <button className={styles.joinButton}>Join Our Team</button>
        </section>

        {/* Team Culture Section */}
        <section className={styles.culture}>
          <h2>Our Culture</h2>
          <div className={styles.cultureGrid}>
            <div className={styles.cultureCard}>
              <h3>Innovation</h3>
              <p>Encouraging creative thinking and new ideas</p>
            </div>
            <div className={styles.cultureCard}>
              <h3>Collaboration</h3>
              <p>Working together to achieve excellence</p>
            </div>
            <div className={styles.cultureCard}>
              <h3>Growth</h3>
              <p>Continuous learning and development</p>
            </div>
            <div className={styles.cultureCard}>
              <h3>Balance</h3>
              <p>Promoting work-life harmony</p>
            </div>
          </div>
        </section>
      </div>
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
