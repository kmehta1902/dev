'use client';
import { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    // Check if fields are filled out
    if (!formData.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
      valid = false;
    }

    if (!formData.subject) {
      newErrors.subject = 'Subject is required';
      valid = false;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      // Proceed with form submission (e.g., send to an API or email)
    }
  };

  return (
    <section id="contactform" className={styles.contactContainer}>
      <h1>Contact Us</h1>
      <p>Get in touch with us for any inquiries or support. We're here to help you succeed.</p>

      <div className={styles.contactGrid}>
        <div className={styles.contactInfo}>
          {/* Contact Info Boxes */}
          <div className={styles.infoBox}>
            <div className={styles.iconWrapper}>
              <i className="location-icon"></i>
            </div>
            <div>
              <h3>Office Location</h3>
              <p>123 Business Avenue</p>
              <p>Tech Park, Suite 456</p>
              <p>City, Country 12345</p>
            </div>
          </div>

          <div className={styles.infoBox}>
            <div className={styles.iconWrapper}>
              <i className="contact-icon"></i>
            </div>
            <div>
              <h3>Contact Details</h3>
              <p>Phone: +1 (123) 456-7890</p>
              <p>Email: info@devionx.com</p>
              <p>Support: support@devionx.com</p>
            </div>
          </div>

          <div className={styles.infoBox}>
            <div className={styles.iconWrapper}>
              <i className="clock-icon"></i>
            </div>
            <div>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialLink}>
              <Facebook className={styles.icon} />
            </a>
            <a href="#" className={styles.socialLink}>
              <Twitter className={styles.icon} />
            </a>
            <a href="#" className={styles.socialLink}>
              <Instagram className={styles.icon} />
            </a>
            <a href="#" className={styles.socialLink}>
              <Linkedin className={styles.icon} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label>Name *</label>
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            {errors.name && <span style={{ color: 'red', fontSize: '0.875rem' }}>{errors.name}</span>}
          </div>

          <div className={styles.formGroup}>
            <label>Email *</label>
            <input
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            {errors.email && <span style={{ color: 'red', fontSize: '0.875rem' }}>{errors.email}</span>}
          </div>

          <div className={styles.formGroup}>
            <label>Subject *</label>
            <input
              type="text"
              placeholder="Message subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            />
            {errors.subject && <span style={{ color: 'red', fontSize: '0.875rem' }}>{errors.subject}</span>}
          </div>

          <div className={styles.formGroup}>
            <label>Message *</label>
            <textarea
              placeholder="Your message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
            />
            {errors.message && <span style={{ color: 'red', fontSize: '0.875rem' }}>{errors.message}</span>}
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message <span>→</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
