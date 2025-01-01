'use client'
import { useState } from 'react';

import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          DevionX<span className={styles.logoTech}>Technologies</span>
        </div>
        
        <div className={styles.navLinks}>
          <a href="#home" className={styles.link}>Home</a>
          <a href="#services" className={styles.link}>Services</a>
          <a href="#portfolio" className={styles.link}>Portfolio</a>
          <a href="#technologies" className={styles.link}>Technologies</a>
          <a href="#developmentprocess" className={styles.link}>Process</a>
          <a href="#testimonials" className={styles.link}>Testimonials</a>
        </div>
        
        <div className={styles.connect}>
          <a href="#contactform" className={styles.contact}>Contact</a>
          <button className={styles.quoteButton}  onClick={() => {
    const quoteSection = document.querySelector('#quoteform');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}>Get a Quote</button>
        </div>

        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
          
          
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
        <div className={styles.mobileNavLinks}>
          <a href="#home" className={styles.mobileLink}>Home</a>
          <a href="#services" className={styles.mobileLink}>Services</a>
          <a href="#portfolio" className={styles.mobileLink}>Portfolio</a>
          <a href="#technologies" className={styles.mobileLink}>Technologies</a>
          <a href="#developmentprocess" className={styles.mobileLink}>Process</a>
          <a href="#testimonials" className={styles.mobileLink}>Testimonials</a>
          <a href="#contactform" className={styles.mobileLink}>Contact</a>
          <button className={styles.quoteButton} onClick={() => {
    const quoteSection = document.querySelector('#quoteform');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}>Get a Quote</button>
        </div>
      </div>
    </nav>
  );
}