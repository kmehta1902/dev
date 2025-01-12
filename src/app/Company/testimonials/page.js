'use client';
import { useEffect, useState, useRef } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Testimonials from '../../components/Testimonials/Testimonials';
import QuoteForm from '../../components/QuoteForm/QuoteForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';
// import SplashCursor from '../../components/Cursor/SplashCursor';
import Blog from '../../components/Blog/Blog'
import styles from './page.module.css'

export default function Home() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const autoScrollRef = useRef(null);
  
    const testimonials = [
      {
        id: 1,
        name: 'John Doe',
        position: 'CTO, TechCorp Solutions',
        company: 'TechCorp Solutions',
        category: 'software',
        image: '/api/placeholder/64/64',
        rating: 5,
        text: "The team's expertise in custom software development helped us streamline our operations significantly. Their attention to detail and commitment to quality is outstanding.",
        tags: ['Software Development', 'Enterprise Solutions'],
        date: 'January 2024'
      },
      {
        id: 2,
        name: 'Sarah Williams',
        position: 'IT Director',
        company: 'Global Retail Inc.',
        category: 'cloud',
        image: '/api/placeholder/64/64',
        rating: 5,
        text: "Their cloud migration services were exceptional. They helped us transition our entire infrastructure to the cloud with zero downtime. The ongoing support has been invaluable.",
        tags: ['Cloud Migration', 'AWS', 'DevOps'],
        date: 'December 2023'
      },
      {
        id: 3,
        name: 'Michael Chen',
        position: 'Head of Engineering',
        company: 'FinTech Innovations',
        category: 'security',
        image: '/api/placeholder/64/64',
        rating: 5,
        text: "Outstanding cybersecurity services. They implemented robust security measures that have protected our financial data and given our clients peace of mind.",
        tags: ['Cybersecurity', 'Financial Services'],
        date: 'February 2024'
      },
      {
        id: 4,
        name: 'Emma Rodriguez',
        position: 'Digital Transformation Lead',
        company: 'Healthcare Solutions',
        category: 'consulting',
        image: '/api/placeholder/64/64',
        rating: 5,
        text: "Their IT consulting services transformed our healthcare operations. The team's understanding of HIPAA compliance and healthcare IT needs was impressive.",
        tags: ['Healthcare IT', 'Compliance', 'Digital Transformation'],
        date: 'January 2024'
      },
      {
        id: 5,
        name: 'David Kim',
        position: 'Operations Manager',
        company: 'Logistics Pro',
        category: 'software',
        image: '/api/placeholder/64/64',
        rating: 5,
        text: "The custom logistics software they developed has revolutionized our supply chain management. ROI was achieved within just 6 months.",
        tags: ['Custom Software', 'Logistics', 'Supply Chain'],
        date: 'March 2024'
      }
    ];
  
    const categories = [
      { id: 'all', label: 'All Services' },
      { id: 'software', label: 'Software Development' },
      { id: 'cloud', label: 'Cloud Services' },
      { id: 'security', label: 'Cybersecurity' },
      { id: 'consulting', label: 'IT Consulting' }
    ];
  
    const filteredTestimonials = testimonials.filter(
      t => activeCategory === 'all' || t.category === activeCategory
    );
  
    const stats = [
      { label: 'Happy Clients', value: '200+' },
      { label: 'Projects Completed', value: '500+' },
      { label: 'Team Members', value: '50+' },
      { label: 'Years of Experience', value: '15+' }
    ];
  
    useEffect(() => {
      if (!isPaused) {
        autoScrollRef.current = setInterval(() => {
          setCurrentIndex(prev => 
            prev === filteredTestimonials.length - 1 ? 0 : prev + 1
          );
        }, 5000);
      }
      return () => clearInterval(autoScrollRef.current);
    }, [isPaused, filteredTestimonials.length]);
    return (
        <div>
                <Navbar />

            <main>
                {/* <SplashCursor /> */}

                <div className={styles.pageContainer}>
      <section className={styles.hero}>
        <h1>Client Success Stories</h1>
        <p className={styles.subtitle}>
          Discover how we've helped businesses across industries achieve their technology goals
        </p>
      </section>

      <section className={styles.statsSection}>
        {stats.map(stat => (
          <div key={stat.label} className={styles.statCard}>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      <section className={styles.filterSection}>
        <div className={styles.categoryButtons}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`${styles.categoryButton} ${
                activeCategory === category.id ? styles.active : ''
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      <section 
        className={styles.testimonialGrid}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {filteredTestimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id}
            className={`${styles.testimonialCard} ${
              index === currentIndex ? styles.highlighted : ''
            }`}
          >
            <div className={styles.testimonialHeader}>
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className={styles.clientImage}
              />
              <div className={styles.clientInfo}>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.position}</p>
                <p className={styles.companyName}>{testimonial.company}</p>
              </div>
            </div>
            
            <div className={styles.rating}>
              {'★'.repeat(testimonial.rating)}
              {'☆'.repeat(5 - testimonial.rating)}
            </div>
            
            <p className={styles.testimonialText}>{testimonial.text}</p>
            
            <div className={styles.tags}>
              {testimonial.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
            
            <div className={styles.date}>{testimonial.date}</div>
          </div>
        ))}
      </section>

      <section className={styles.ctaSection}>
        <h2>Ready to Transform Your Business?</h2>
        <p>Join our growing list of satisfied clients and experience the difference of working with industry experts.</p>
        <button className={styles.ctaButton}>Schedule a Consultation</button>
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
