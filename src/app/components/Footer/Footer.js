'use client'
import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Row 1: Logo and Company Info */}
        <div className={styles.companySection}>
          <div className={styles.company}>
            <Image
              src="/logo-dark.jpg"
              alt="DevionX Technologies Logo"
              width={150}
              height={50}
              className={styles.logo}
            />
            <h2>DevionX Technologies</h2>
            <p>Providing innovative software solutions for businesses worldwide.</p>
            <div className={styles.socialLinks}>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>

        {/* Row 2: Services Grid */}
        <div className={styles.servicesSection}>
          <h3>Services</h3>
          <div className={styles.servicesGrid}>
            <a href="/Services/customised-software-development">Customised Software Development</a>
            <a href="/Services/enterprise-solutions">Enterprise Solutions</a>
            <a href="/Services/cloud-solutions">Cloud Solutions</a>
            <a href="/Services/it-consultancy">IT Consultancy</a>
            <a href="/Services/web-application-development">Web Application Development</a>
            <a href="/Services/iosandroid-app-development">IOS/Android App Development</a>
            <a href="/Services/mvp-product-development">MVP Product Development</a>
            <a href="/Services/uiux-design">UI/UX Design</a>
            <a href="/Services/tech-resources">Tech Resources</a>
          </div>
        </div>

        {/* Row 3: Other Sections */}
        <div className={styles.otherSectionsGrid}>
          <div className={styles.section}>
            <h3>Products</h3>
            <ul>
              <li><a href="/Products/lms">LMS</a></li>
              <li><a href="/Products/erp">ERP</a></li>
              <li><a href="/Products/crm">CRM</a></li>
              <li><a href="/Products/e-commerce">E-Commerce</a></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Industries</h3>
            <ul>
              <li><a href="/Industries/bfsi">BFSI</a></li>
              <li><a href="/Industries/manufacturing">Manufacturing</a></li>
              <li><a href="/Industries/pharmaceuticals">Pharmaceuticals</a></li>
              <li><a href="/Industries/education">Education</a></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Company</h3>
            <ul>
              <li><a href="/Company/leadership">Leadership</a></li>
              <li><a href="/Company/testimonials">Testimonials</a></li>
              <li><a href="/Company/about-us">About Us</a></li>
              <li><a href="/blog">Blogs</a></li>
              <li><a href="/Company/">Career</a></li>
            </ul>
          </div>

          <div className={styles.section}>
            
            <h3>Contact Us</h3>
  <p><FontAwesomeIcon icon={faUser} /> DevionX - Mr. Ajay Bade</p>
  <p><FontAwesomeIcon icon={faPhone} /> +91 9370613157</p>
  <br>
  </br>
  <p><FontAwesomeIcon icon={faUser} /> DevionX - Mr. Shrikrushna Patil</p>
  <p><FontAwesomeIcon icon={faPhone} /> +91 7666675306</p>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© 2024 DevionX Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;